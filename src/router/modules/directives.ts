import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/router/constant";

// 自定义指令模块
const directivesRouter: Array<RouteRecordRaw> = [
	{
		path: "/directives",
		component: Layout,
		redirect: "/directives/copyDirect",
		meta: {
			title: "自定义指令"
		},
		children: [
			{
				path: "/directives/copyDirect",
				name: "copyDirect",
				component: () => import("@/pages/directives/copyDirect/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "复制指令",
					key: "copyDirect"
				}
			},
			{
				path: "/directives/watermarkDirect",
				name: "watermarkDirect",
				component: () => import("@/pages/directives/watermarkDirect/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "水印指令",
					key: "watermarkDirect"
				}
			},
			{
				path: "/directives/dragDirect",
				name: "dragDirect",
				component: () => import("@/pages/directives/dragDirect/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "拖拽指令",
					key: "dragDirect"
				}
			},
			{
				path: "/directives/debounceDirect",
				name: "debounceDirect",
				component: () => import("@/pages/directives/debounceDirect/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "防抖指令",
					key: "debounceDirect"
				}
			},
			{
				path: "/directives/throttleDirect",
				name: "throttleDirect",
				component: () => import("@/pages/directives/throttleDirect/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "节流指令",
					key: "throttleDirect"
				}
			},
			{
				path: "/directives/longpressDirect",
				name: "longpressDirect",
				component: () => import("@/pages/directives/longpressDirect/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "长按指令",
					key: "longpressDirect"
				}
			}
		]
	}
];

export default directivesRouter;
