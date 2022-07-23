<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { zhCN, dateZhCN, darkTheme, useLoadingBar } from 'naive-ui'
import { useMainStore } from './store/index'

const mainStore = useMainStore()
const getDarkTheme = computed(() => (mainStore.isDark ? darkTheme : undefined))
const isLock = computed(() => mainStore.isLock)

</script>

<template>
  <NConfigProvider
    v-if="!isLock"
    :locale="zhCN"
    :theme="getDarkTheme"
    :date-locale="dateZhCN"
  >
    <router-view />
  </NConfigProvider>
</template>

<style></style>
