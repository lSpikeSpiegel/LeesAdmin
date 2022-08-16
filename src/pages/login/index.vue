<template>
	<div class="login-container flx-center">
		<SwitchDark class="dark" />
		<div class="login-box">
			<div class="login-left">
				<SvgIcon name="login_cover" :iconStyle="iconStyle" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<h2 class="logo-text">Lees-Admin</h2>
					<h2 class="sub-text">{{ $t("loginForm.title") }}</h2>
				</div>
				<LoginForm v-if="showForm === 'login'" @signup="showForm = 'signup'" ref="loginRef" />
				<SignupForm v-if="showForm === 'signup'" @login="showForm = 'login'" ref="signupRef" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="login">
import SwitchDark from "@/components/SwitchDark/index.vue";
import LoginForm from "./components/LoginForm.vue";
import SignupForm from "./components/SignupForm.vue";
import { ref, computed } from "vue";
import { GlobalStore } from "@/store";

const globalStore = GlobalStore();
const showForm = ref("login");

const iconStyle = computed(() => {
	return {
		width: "100%",
		height: "100%",
		color: globalStore.themeConfig.primary
	};
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
