<template>
  <div>{{ '名称：' + mainStore.name }}</div>
  <div>{{ '名称长度：' + mainStore.nameLength }}</div>
  <n-button @click="changeTheme">naive-ui</n-button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/index'
import { setNewRoute } from '@/router'
import { useRouter, useRoute } from 'vue-router'
const mainStore = useMainStore()
const router = useRouter()
const route = useRoute()

const changeTheme = () => {
  setNewRoute()
  console.log(router.options.routes)
  router.push('/index')
  console.log(route.name)
}
</script>
