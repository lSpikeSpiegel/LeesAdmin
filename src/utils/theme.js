const darkTheme = '#555a64'
const darkHoverTheme = '#434A50'
const darkColorTheme = '#fff'
const darkHoverColorTheme = '#fff'
const darkActiveColorTheme = '#ffd04b'
const darkBorderTheme = '#ffd04b'

const lightTheme = '#fff'
const lightHoverTheme = '#ECF5FF'
const lightColorTheme = '#000'
const lightHoverColorTheme = '#000'
const lightActiveColorTheme = '#409eff'
const lightBorderTheme = '#409eff'


// 获取对应的主题色值
export const getThemeMap = (isLight) => {
    return {
        'theme-bg': isLight ? lightTheme : darkTheme,
        'theme-hover-bg': isLight ? lightHoverTheme : darkHoverTheme,
        'theme-color': isLight ? lightColorTheme : darkColorTheme,
        'theme-hover-color': isLight ? lightHoverColorTheme : darkHoverColorTheme,
        'theme-active-color': isLight ? lightActiveColorTheme : darkActiveColorTheme,
        'theme-border-color': isLight ? lightBorderTheme : darkBorderTheme,
    }
}

// 设置主题色值
export const setTheme = (isLight = true) => {
    const themeMap = getThemeMap(isLight)
    const body = document.body

    Object.keys(themeMap).forEach(key => {
        body.style.setProperty(`--${key}`, themeMap[key])
    })
}