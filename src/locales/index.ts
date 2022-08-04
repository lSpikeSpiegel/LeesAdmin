import { createI18n } from "vue-i18n";
import zhCn from "./zh-cn";
import en from "./en";

const i18n = createI18n({
    legacy: false, // 使用compositionAPI必须添加这条
    globalInjection: true, // 加上这一句 
    // 将其设为true,则所有前缀为$的属性和方法(只是vue-i18n所携带的)将被注入到所有vue组件中.
    // 即在所有组件中都可以使用 $i18n $t $rt $d $n $tm
    locale: localStorage.getItem('lang') || 'zh-cn',
    messages: {
        'zh-cn': zhCn,
        'en': en
    }
})

export default i18n