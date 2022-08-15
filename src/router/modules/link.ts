import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/router/constant";

// 外部链接模块
const linkRouter: Array<RouteRecordRaw> = [
	{
		path: "/link",
		component: Layout,
		redirect: "/link/gitee",
		meta: {
			title: "外部链接"
		},
		children: [
			{
				path: "/link/gitee",
				name: "gitee",
				component: () => import("@/pages/link/gitee/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "Gitee 仓库",
					key: "gitee"
				}
			},
			{
				path: "/link/github",
				name: "github",
				component: () => import("@/pages/link/github/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "GitHub 仓库",
					key: "github"
				}
			},
			{
				path: "/link/juejin",
				name: "juejin",
				component: () => import("@/pages/link/juejin/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "掘金文档",
					key: "juejin"
				}
			},
			{
				path: "/link/myBlog",
				name: "myBlog",
				component: () => import("@/pages/link/myBlog/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "个人博客",
					key: "myBlog"
				}
			}
		]
	}
];

export default linkRouter;
