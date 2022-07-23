import type { RouteRecordRaw } from 'vue-router';
import { isNavigationFailure, Router } from 'vue-router';
import { PageEnum } from '@/enums/pageEnum';
import { ErrorPageRoute } from '@/router/base';

const LOGIN_PATH = PageEnum.BASE_LOGIN;

const whitePathList = [LOGIN_PATH]; // no redirect whitelist

export function createRouterGuards(router: Router) {
    router.beforeEach(async (to, from, next) => {
        const Loading = window['$loading'] || null;
        Loading && Loading.start();
        if (from.path === LOGIN_PATH && to.name === 'errorPage') {
            next(PageEnum.BASE_HOME);
            return;
        }

        // Whitelist can be directly entered
        if (whitePathList.includes(to.path as PageEnum)) {
            next();
            return;
        }

        const token = sessionStorage.getItem('ACCESS_TOKEN');

        if (!token) {
            // You can access without permissions. You need to set the routing meta.ignoreAuth to true
            if (to.meta.ignoreAuth) {
                next();
                return;
            }
            // redirect login page
            const redirectData: { path: string; replace: boolean; } = {
                path: LOGIN_PATH,
                replace: true,
            };
            next(redirectData);
            return;
        }

        //添加404
        const isErrorPage = router.getRoutes().findIndex((item) => item.name === ErrorPageRoute.name);
        if (isErrorPage === -1) {
            router.addRoute(ErrorPageRoute as unknown as RouteRecordRaw);
        }

        const redirectPath = (from.query.redirect || to.path) as string;
        const redirect = decodeURIComponent(redirectPath);
        const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
        next(nextData);
        Loading && Loading.finish();
    });

    router.onError((error) => {
        console.log(error, '路由错误');
    });
}
