<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMainStore } from '@/store'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useRouter } from 'vue-router'

const store = useMainStore()
const router = useRouter()
const locale = computed(() => (store.locale === 'zh-cn' ? zhCn : en))
const routeName = computed(() => {
  return router.currentRoute.value
})
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view v-slot="{ Component }">
      <keep-alive v-if="store.keepAlivePages[routeName]">
        <component :is="Component" />
      </keep-alive>
      <component v-else :is="Component" />
    </router-view>
  </el-config-provider>
</template>