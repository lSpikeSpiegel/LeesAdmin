import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/router/constant";

// 超级表格模块
const proTableRouter: Array<RouteRecordRaw> = [
	{
		path: "/proTable",
		component: Layout,
		redirect: "/proTable/useHooks",
		meta: {
			title: "超级表格"
		},
		children: [
			{
				path: "/proTable/useHooks",
				name: "useHooks",
				component: () => import("@/pages/proTable/useHooks/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "使用 Hooks",
					key: "useHooks"
				}
			},
			{
				path: "/proTable/useComponent",
				name: "useComponent",
				component: () => import("@/pages/proTable/useComponent/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "使用 Component",
					key: "useComponent"
				}
			}
		]
	}
];

export default proTableRouter;
