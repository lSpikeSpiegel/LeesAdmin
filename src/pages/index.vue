<template>
  <layout-header />
  <work-list />
</template>

<script lang="ts" setup>
import LayoutHeader from './layout/header.vue'
import WorkList from './layout/WorkListWrapper.vue'
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: $bgc;
  color: $color;
  border: 1px solid $border;
}
</style>
