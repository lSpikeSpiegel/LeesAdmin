import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/router/constant";

// 常用组件模块
const assemblyRouter: Array<RouteRecordRaw> = [
	{
		path: "/assembly",
		component: Layout,
		redirect: "/assembly/guide",
		meta: {
			title: "常用组件"
		},
		children: [
			{
				path: "/assembly/guide",
				name: "guide",
				component: () => import("@/pages/assembly/guide/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "引导页",
					key: "guide"
				}
			},
			{
				path: "/assembly/selectIcon",
				name: "selectIcon",
				component: () => import("@/pages/assembly/selectIcon/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "图标选择器",
					key: "selectIcon"
				}
			},
			{
				path: "/assembly/selectFilter",
				name: "selectFilter",
				component: () => import("@/pages/assembly/selectFilter/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "分类筛选器",
					key: "selectFilter"
				}
			},
			{
				path: "/assembly/svgIcon",
				name: "svgIcon",
				component: () => import("@/pages/assembly/svgIcon/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "svg 图标",
					key: "svgIcon"
				}
			},
			{
				path: "/assembly/uploadImg",
				name: "uploadImg",
				component: () => import("@/pages/assembly/uploadImg/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "图片上传",
					key: "uploadImg"
				}
			},
			{
				path: "/assembly/batchImport",
				name: "batchImport",
				component: () => import("@/pages/assembly/batchImport/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "批量添加数据",
					key: "batchImport"
				}
			},
			{
				path: "/assembly/wangEditor",
				name: "wangEditor",
				component: () => import("@/pages/assembly/wangEditor/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "富文本编辑器",
					key: "wangEditor"
				}
			}
		]
	}
];

export default assemblyRouter;
