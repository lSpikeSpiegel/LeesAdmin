<template>
  <div
    :class="['switchWrap', { 'is-checked': lang.value === 'zh-cn' }]"
    @click="handleLangChange"
  >
    <div class="slider">
      <!-- 由于SVG图标默认不携带任何属性 -->
      <Sunny v-if="lang === 'zh-cn'" style="width: 1em; height: 1em;" />
      <Moon v-else style="width: 1em; height: 1em;" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useMainStore } from '@/store'
import { useI18n } from 'vue-i18n'

const store = useMainStore()
const { locale } = useI18n()

const lang = computed(() => {
  return store.locale
})

const handleLangChange = () => {
  if (lang.value === 'zh-cn') {
    locale.value = 'en'
    store.changeLocale('en')
  } else {
    locale.value = 'zh-cn'
    store.changeLocale('zh-cn')
  }
}
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
  background-color: $Bg;
  color: $Color;
  border: 1px solid $Color;
  @include flexbox(row, nowrap, flex-start, center);
  &.is-checked {
    @include flexbox(row, nowrap, flex-end, center);
  }
  .slider {
    text-align: center;
    color: $Bg;
    padding: 2px;
    font-size: 20px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: $Color;
    svg: {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
