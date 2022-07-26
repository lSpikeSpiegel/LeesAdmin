import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/router/constant";

// 表单 Form 模块
const formRouter: Array<RouteRecordRaw> = [
	{
		path: "/form",
		component: Layout,
		redirect: "/form/proForm",
		meta: {
			title: "表单 Form"
		},
		children: [
			{
				path: "/form/proForm",
				name: "proForm",
				component: () => import("@/pages/form/proForm/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "超级 Form",
					key: "proForm"
				}
			},
			{
				path: "/form/basicForm",
				name: "basicForm",
				component: () => import("@/pages/form/basicForm/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "基础 Form",
					key: "basicForm"
				}
			},
			{
				path: "/form/validateForm",
				name: "validateForm",
				component: () => import("@/pages/form/validateForm/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "校验 Form",
					key: "validateForm"
				}
			},
			{
				path: "/form/dynamicForm",
				name: "dynamicForm",
				component: () => import("@/pages/form/dynamicForm/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "动态 Form",
					key: "dynamicForm"
				}
			}
		]
	}
];

export default formRouter;
