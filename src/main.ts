import { createApp } from "vue";
import App from "./App.vue";
// 清除默认样式
import "@/styles/reset.scss";
// 自定义主题引入
import "@/styles/theme.scss";
// iconfont css
import "@/assets/iconfont/iconfont.scss";
// font css
import "@/assets/fonts/font.scss";
// element+
import ElementPlus from "element-plus";
// element icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// element css
import "element-plus/dist/index.css";
// element dark(内置暗黑模式)
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark(自定义暗黑模式)
import "@/styles/element-dark.scss";
// custom element css
import "@/styles/el-custom.scss";
// custom directives
import directives from "@/directives/index";
// router
import router from "@/router/index";
// pinia
import { createPinia } from "pinia";
// i18n
import i18n from "./language";
// mikapcha
import MakeitCaptcha from "makeit-captcha";
import "makeit-captcha/dist/captcha.min.css";
// 处理svg图片
import "virtual:svg-icons-register";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.use(router).use(createPinia()).use(ElementPlus).use(i18n).use(MakeitCaptcha).use(directives);

router.isReady().then(() => app.mount("#app"));
