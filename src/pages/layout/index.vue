<template>
  <div>主页</div>
  <n-button @click="changeRoute">naive-ui</n-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const changeRoute = () => {
  console.log(router.options.routes)
  router.push('/pIndex')
}
</script>
