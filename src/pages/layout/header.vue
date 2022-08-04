<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">{{ $t('menus.home') }}</el-menu-item>
    <div class="rightBtn">
      <change-theme />
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ChangeTheme from '../tools/ChangeTheme.vue'
import ChangeLang from '../tools/ChangeLang.vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.rightBtn {
  flex: 1;
  @include flexbox(row, nowrap, flex-end, center);
}
</style>
