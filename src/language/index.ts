import { createI18n } from "vue-i18n";
import zh from "./modules/zh";
import en from "./modules/en";

const i18n = createI18n({
	legacy: false, // 使用compositionAPI必须添加这条
	locale: localStorage.getItem("lang") || "zh",
	globalInjection: true, // 加上这一句
	// 将其设为true,则所有前缀为$的属性和方法(只是vue-i18n所携带的)将被注入到所有vue组件中.
	// 即在所有组件中都可以使用 $i18n $t $rt $d $n $tm
	messages: {
		zh,
		en
	}
});

export default i18n;
