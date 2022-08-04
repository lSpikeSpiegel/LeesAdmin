<template>
  <layout-header />
</template>

<script lang="ts" setup>
import layoutHeader from './layout/header.vue'
import ChangeTheme from './tools/ChangeTheme.vue'
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: $Bg;
  color: $Color;
  border: 1px solid $Border;
}
</style>
