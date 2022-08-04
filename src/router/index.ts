import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


export const DynamicRoutes: RouteRecordRaw[] = [{
    path: '/Login',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
}]
export const IndexRoute: RouteRecordRaw = {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'), // 注意这里要带上 文件后缀.vue
}



const routes: RouteRecordRaw[] = [IndexRoute]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export function setNewRoute() {
    DynamicRoutes.forEach(i => {
        router.addRoute(i)
    })
}

export default router