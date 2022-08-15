import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/router/constant";

// echarts 模块
const echartsRouter: Array<RouteRecordRaw> = [
	{
		path: "/echarts",
		component: Layout,
		redirect: "/echarts/waterChart",
		meta: {
			title: "Echarts"
		},
		children: [
			{
				path: "/echarts/waterChart",
				name: "waterChart",
				component: () => import("@/pages/echarts/waterChart/index.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: "水型图",
					key: "waterChart"
				}
			},
			{
				path: "/echarts/columnChart",
				name: "columnChart",
				component: () => import("@/pages/echarts/columnChart/index.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: "柱状图",
					key: "columnChart"
				}
			},
			{
				path: "/echarts/lineChart",
				name: "lineChart",
				component: () => import("@/pages/echarts/lineChart/index.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: "折线图",
					key: "lineChart"
				}
			},
			{
				path: "/echarts/pieChart",
				name: "pieChart",
				component: () => import("@/pages/echarts/pieChart/index.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: "饼图",
					key: "pieChart"
				}
			},
			{
				path: "/echarts/radarChart",
				name: "radarChart",
				component: () => import("@/pages/echarts/radarChart/index.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: "雷达图",
					key: "radarChart"
				}
			},
			{
				path: "/echarts/nestedChart",
				name: "nestedChart",
				component: () => import("@/pages/echarts/nestedChart/index.vue"),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: "嵌套环形图",
					key: "nestedChart"
				}
			}
		]
	}
];

export default echartsRouter;
