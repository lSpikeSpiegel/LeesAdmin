<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" :placeholder="$t('loginForm.username')">
				<template #prefix>
					<el-icon class="el-input__icon"><user /></el-icon>
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
					<el-icon class="el-input__icon"><lock /></el-icon>
				</template>
			</el-input>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button :icon="UserFilled" round @click="signup(loginFormRef)" size="large" type="primary" :loading="loading">
			{{ $t("loginForm.signup") }}
		</el-button>
		<el-button :icon="CircleClose" round @click="showLogin" size="large">{{ $t("loginForm.cancel") }}</el-button>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Login } from "@/api/interface";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import type { ElForm } from "element-plus";
import { ElMessage } from "element-plus";

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
// login
const signup = (formEl: FormInstance | undefined) => {
	if (!formEl) {
		return;
	}
	formEl.validate(async valid => {
		if (!valid) {
			return;
		}
		loading.value = true;
		try {
			setTimeout(() => {
				ElMessage.success("注册成功！");
				showLogin();
			}, 500);
		} finally {
			loading.value = false;
		}
	});
};
const emit = defineEmits(["login"]);

const showLogin = () => {
	emit("login");
};

onMounted(() => {
	// 监听enter事件（调用登录）
	document.onkeydown = (e: any) => {
		e = window.event || e;
		if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
			if (loading.value) {
				return;
			}
			signup(loginFormRef.value);
		}
	};
});
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
