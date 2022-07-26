import { RouteRecordRaw } from "vue-router";

// 数据大屏模块
const dataScreenRouter: Array<RouteRecordRaw> = [
	{
		path: "/dataScreen",
		name: "dataScreen",
		meta: {
			requiresAuth: false,
			title: "数据大屏",
			key: "dataScreen"
		},
		component: () => import("@/pages/dataScreen/index.vue")
	}
];

export default dataScreenRouter;
