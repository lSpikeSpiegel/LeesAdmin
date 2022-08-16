<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" :placeholder="$t('loginForm.username')" clearable>
				<template #prefix>
					<el-icon class="el-input__icon">
						<user />
					</el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input
				type="password"
				v-model="loginForm.password"
				:placeholder="$t('loginForm.password')"
				show-password
				autocomplete="new-password"
			>
				<template #prefix>
					<el-icon class="el-input__icon">
						<lock />
					</el-icon>
				</template>
			</el-input>
		</el-form-item>
	</el-form>

	<mi-captcha
		width="100%"
		height="40px"
		:themeColor="globalStore.themeConfig.primary"
		bgColor="transparent"
		:textColor="globalStore.themeConfig.primary"
		modalBgColor="rgba(0,0,0,0.5)"
		verify-action="v1/captcha/verification"
		:verify-params="params.verify"
	/>

	<div class="login-btn">
		<el-button :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
			{{ $t("loginForm.login") }}
		</el-button>
		<el-button :icon="Edit" round @click="showSignup" size="large">{{ $t("loginForm.signup") }}</el-button>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { Edit, UserFilled } from "@element-plus/icons-vue";
import { ElForm } from "element-plus";
import { ElMessage } from "element-plus";
import { loginApi } from "@/api/modules/login";
import { GlobalStore } from "@/store";
import { MenuStore } from "@/store/modules/menu";
import { TabsStore } from "@/store/modules/tabs";
import md5 from "js-md5";

const globalStore = GlobalStore();
const menuStore = MenuStore();
const tabStore = TabsStore();

// 定义滑块验证
const params = reactive({
	verify: { key: null }
});

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

// 登录表单数据
const loginForm = reactive<Login.ReqLoginForm>({
	username: "",
	password: ""
});

const loading = ref<boolean>(false);
const router = useRouter();
// login
const login = (formEl: FormInstance | undefined) => {
	if (!formEl) {
		return;
	}
	formEl.validate(async valid => {
		if (!valid) {
			return;
		}
		loading.value = true;
		try {
			const requestLoginForm: Login.ReqLoginForm = {
				username: loginForm.username,
				password: md5(loginForm.password)
			};
			const res = await loginApi(requestLoginForm);
			// * 存储 token
			globalStore.setToken(res.data!.access_token);
			// * 登录成功之后清除上个账号的 menulist 和 tabs 数据
			menuStore.setMenuList([]);
			tabStore.closeMultipleTab();

			ElMessage.success("登录成功！");
			router.push({ name: "home" });
		} finally {
			loading.value = false;
		}
	});
};

const emit = defineEmits(["signup"]);

// showRegister
const showSignup = () => {
	emit("signup");
};

onMounted(() => {
	// 监听enter事件（调用登录）
	document.onkeydown = (e: any) => {
		e = window.event || e;
		if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
			if (loading.value) {
				return;
			}
			login(loginFormRef.value);
		}
	};
});
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
