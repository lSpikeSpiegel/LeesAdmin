import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


export const LoginRoute: RouteRecordRaw = {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
}
export const IndexRoutes: RouteRecordRaw[] = [
    {
        path: '/index',
        name: 'index',
        component: () => import('@/pages/layout/index.vue'), // 注意这里要带上 文件后缀.vue
    },
    {
        path: '/pIndex',
        name: 'pIndex',
        component: () => import('@/pages/layout/parentLayout.vue'), // 注意这里要带上 文件后缀.vue
    },
]


const routes: RouteRecordRaw[] = [LoginRoute]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export function setNewRoute() {
    IndexRoutes.forEach(i => {
        router.addRoute(i)
    })
}

export default router