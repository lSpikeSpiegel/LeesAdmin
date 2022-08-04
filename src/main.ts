import './style/common.scss';
import './style/theme.scss';
import { createApp } from "vue";
import App from "./App.vue";
import router from './router/index';
import { createPinia } from "pinia";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from './locales';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.use(i18n)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


router.isReady().then(() => app.mount('#app'))
