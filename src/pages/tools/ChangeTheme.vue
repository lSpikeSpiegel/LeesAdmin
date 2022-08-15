<template>
  <div :class="['switchWrap', { 'is-checked': theme }]" @click="theme = !theme">
    <div class="slider">
      <!-- 由于SVG图标默认不携带任何属性 -->
      <Sunny v-if="theme" style="width: 1em; height: 1em;" />
      <Moon v-else style="width: 1em; height: 1em;" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { GlobalStore } from '@/store'
import { setTheme } from '@/utils/theme'

const store = GlobalStore()

const theme = computed({
  get: function () {
    return store.theme
  },
  set: function (val) {
    setTheme(val)
    store.changeTheme(val)
  }
})
const getIconSize = () => {
  return 1000
}
onMounted(() => {
  setTheme(store.theme)
})
</script>
<style lang="scss" scoped>
.themeSwitcher {
  --el-switch-on-color: #f2f2f2;
  --el-switch-off-color: #2c2c2c;
  --el-switch-border-color: #2c2c2c;
  &.is-checked {
    svg {
      --el-color-white: #2c2c2c;
    }
  }
}
.switchWrap {
  cursor: pointer;
  width: 60px;
  height: 30px;
  padding: 0 2px;
  border-radius: 30px;
  background-color: $bgc;
  color: $color;
  border: 1px solid $color;
  @include flexbox(row, nowrap, flex-start, center);
  &.is-checked {
    @include flexbox(row, nowrap, flex-end, center);
  }
  .slider {
    text-align: center;
    color: $bgc;
    padding: 2px;
    font-size: 20px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: $color;
    svg: {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
