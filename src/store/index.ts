import { defineStore } from 'pinia'

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        locale: localStorage.getItem('lang') || 'zh-cn',
        theme: localStorage.getItem('theme') === 'true',
        keepAlivePages: { index: true },
        isDark: false,
        isLock: false,
    }),
    getters: {
    },
    actions: { // 支持异步
        changeLocale(value: string) {
            localStorage.setItem('lang', value)
            this.locale = value;
        },
        changeTheme(value: boolean) {
            localStorage.setItem('theme', JSON.stringify(value))
            this.theme = value;
        }
    },
})