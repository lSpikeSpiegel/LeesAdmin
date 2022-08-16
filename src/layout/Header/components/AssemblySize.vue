<template>
	<el-dropdown trigger="click" @command="setAssemblySize">
		<span>
			<el-tooltip effect="dark" :content="$t('header.componentSize')" placement="bottom">
				<zoom-internal theme="outline" fill="#333" class="icon-style" />
			</el-tooltip>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item v-for="item in assemblySizeList" :key="item" :disabled="assemblySize === item" :command="item">
					{{ $t(`header.${item}`) }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { GlobalStore } from "@/store";
import { ZoomInternal } from "@icon-park/vue-next";
const globalStore = GlobalStore();
const assemblySize = computed((): string => globalStore.assemblySize);

const assemblySizeList = reactive<string[]>(["default", "large", "small"]);

const setAssemblySize = (item: string) => {
	if (assemblySize.value === item) {
		return;
	}
	globalStore.setAssemblySizeSize(item);
};
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
