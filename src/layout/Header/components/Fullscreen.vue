<template>
	<div class="fullscreen">
		<el-tooltip effect="dark" :content="isFullscreen ? $t('header.exitFullScreen') : $t('header.fullScreen')" placement="bottom">
			<full-screen v-if="!isFullscreen" theme="outline" @click="toggle" class="icon-style" fill="#333" />
			<off-screen v-else theme="outline" @click="toggle" class="icon-style" fill="#333" />
		</el-tooltip>
	</div>
</template>

<script setup lang="ts">
import { FullScreen, OffScreen } from "@icon-park/vue-next";
import { useFullscreen } from "@vueuse/core";
const { toggle, isFullscreen } = useFullscreen();
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
