<template>
  <div
    :class="['switchWrap', { 'is-checked': lang === 'zh-cn' }]"
    @click="handleLangChange"
  >
    <div class="slider">
      <!-- 由于SVG图标默认不携带任何属性 -->
      <chinese v-if="lang === 'zh-cn'" theme="outline" />
      <english v-else theme="outline" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { GlobalStore } from '@/store'
import { useI18n } from 'vue-i18n'
import { Chinese, English } from '@icon-park/vue-next'

const store = GlobalStore()
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
