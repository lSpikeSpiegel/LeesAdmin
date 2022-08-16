<template>
	<div>
		<el-tooltip effect="dark" :content="$t('header.layoutConfig')" placement="bottom">
			<setting-web theme="outline" class="icon-style" @click="openDrawer" fill="#333" />
		</el-tooltip>
		<el-drawer v-model="drawerVisible" :title="$t('header.layoutConfig')" size="300px">
			<el-divider class="divider" content-position="center">
				<el-icon><ColdDrink /></el-icon>
				{{ $t("header.theme") }}
			</el-divider>
			<div class="theme-item">
				<span> {{ $t("header.primary") }} </span>
				<el-color-picker v-model="themeConfig.primary" :predefine="colorList" @change="changePrimary" />
			</div>
			<div class="theme-item">
				<span> {{ $t("header.darkMode") }} </span>
				<SwitchDark></SwitchDark>
			</div>
			<div class="theme-item">
				<span> {{ $t("header.greyMode") }} </span>
				<el-switch v-model="themeConfig.isGrey" @change="changeGreyOrWeak($event, 'grey')" />
			</div>
			<div class="theme-item">
				<span> {{ $t("header.weakMode") }} </span>
				<el-switch v-model="themeConfig.isWeak" @change="changeGreyOrWeak($event, 'weak')" />
			</div>
			<br />
			<el-divider class="divider" content-position="center">
				<el-icon><Setting /></el-icon>
				{{ $t("header.uiSettings") }}
			</el-divider>
			<div class="theme-item">
				<span> {{ $t("header.collapse") }} </span>
				<el-switch v-model="isCollapse" />
			</div>
			<div class="theme-item">
				<span> {{ $t("header.breadcrumb") }} </span>
				<el-switch v-model="themeConfig.breadcrumb" />
			</div>
			<div class="theme-item">
				<span> {{ $t("header.tab") }} </span>
				<el-switch v-model="themeConfig.tabs" />
			</div>
			<div class="theme-item">
				<span> {{ $t("header.footer") }} </span>
				<el-switch v-model="themeConfig.footer" />
			</div>
		</el-drawer>
	</div>
</template>

<script setup lang="ts">
import { SettingWeb } from "@icon-park/vue-next";
import { ref, computed } from "vue";
import { useTheme } from "@/hooks/useTheme";
import SwitchDark from "@/components/SwitchDark/index.vue";
import { MenuStore } from "@/store/modules/menu";
import { GlobalStore } from "@/store";
import { DEFAULT_PRIMARY } from "@/config/config";

// 预定义主题颜色
const colorList = [
	DEFAULT_PRIMARY,
	"#DAA96E",
	"#0C819F",
	"#409EFF",
	"#27ae60",
	"#ff5c93",
	"#e74c3c",
	"#fd726d",
	"#f39c12",
	"#9b59b6"
];

// 主题初始化
const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);

const menuStore = MenuStore();
const isCollapse = computed({
	get() {
		return menuStore.isCollapse;
	},
	set() {
		menuStore.setCollapse();
	}
});

const { changePrimary, changeGreyOrWeak } = useTheme();

// 打开主题设置
const drawerVisible = ref(false);
const openDrawer = () => {
	drawerVisible.value = true;
};
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
