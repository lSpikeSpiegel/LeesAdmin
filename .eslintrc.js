module.exports = {
	//此项是用来告诉eslint找当前配置文件不能往父级查找
	root: true,
	//此项指定环境的全局变量，下面的配置指定为浏览器环境、node环境
	env: {
		browser: true,
		node: true
	},
	//此项是用来指定eslint解析器的，解析器必须符合规则，
	parser: "vue-eslint-parser",
	// 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		// eslint-config-prettier 的缩写
		"prettier"
	],
	//此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指模块导入方式
	parserOptions: {
		ecmaVersion: 12,
		parser: "@typescript-eslint/parser",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	// 此项是用来提供插件的，插件名称省略了eslint-plugin-
	// eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
	plugins: ["vue", "@typescript-eslint", "prettier"],
	// add your custom rules here
	// 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
	// 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
	// "off" -> 0 关闭规则
	// "warn" -> 1 开启警告规则
	//"error" -> 2 开启错误规则
	// 了解了上面这些，下面这些代码相信也看的明白了
	rules: {
		// typeScript (https://typescript-eslint.io/rules)
		"@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
		"@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
		"@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
		"@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
		"@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 @ts-ignore
		"@typescript-eslint/ban-types": "off", // 禁止使用特定类型
		"@typescript-eslint/explicit-function-return-type": "off", // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
		"@typescript-eslint/no-var-requires": "off", // 不允许在 import 语句中使用 require 语句
		"@typescript-eslint/no-empty-function": "off", // 禁止空函数
		"@typescript-eslint/no-use-before-define": "off", // 禁止在变量定义之前使用它们
		"@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
		"@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
		"@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型

		"no-var": "error",
		// 禁止使用var
		"prettier/prettier": "error",
		// 禁止出现console
		"no-console": "warn",
		// 禁用debugger
		"no-debugger": "warn",
		// 禁止出现重复的 case 标签
		"no-duplicate-case": "warn",
		// 禁止出现空语句块
		"no-empty": "warn",
		// 禁止不必要的括号
		"no-extra-parens": "off",
		// 禁止对 function 声明重新赋值
		"no-func-assign": "warn",
		// 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
		"no-unreachable": "warn",
		// 强制所有控制语句使用一致的括号风格
		curly: "warn",
		// 要求 switch 语句中有 default 分支
		"default-case": "warn",
		// 强制尽可能地使用点号
		"dot-notation": "warn",
		// 要求使用 === 和 !==
		eqeqeq: "warn",
		// 禁止 if 语句中 return 语句之后有 else 块
		"no-else-return": "warn",
		// 禁止出现空函数
		"no-empty-function": "warn",
		// 禁用不必要的嵌套块
		"no-lone-blocks": "warn",
		// 禁止使用多个空格
		"no-multi-spaces": "warn",
		// 禁止多次声明同一变量
		"no-redeclare": "warn",
		// 禁止在 return 语句中使用赋值语句
		"no-return-assign": "warn",
		// 禁用不必要的 return await
		"no-return-await": "warn",
		// 禁止自我赋值
		"no-self-assign": "warn",
		// 禁止自身比较
		"no-self-compare": "warn",
		// 禁止不必要的 catch 子句
		"no-useless-catch": "warn",
		// 禁止多余的 return 语句
		"no-useless-return": "warn",
		// 禁止变量声明与外层作用域的变量同名
		"no-shadow": "off",
		// 允许delete变量
		"no-delete-var": "off",
		// 强制数组方括号中使用一致的空格
		"array-bracket-spacing": "warn",
		// 强制在代码块中使用一致的大括号风格
		"brace-style": "warn",
		// 强制使用一致的缩进
		indent: "off",
		// 强制可嵌套的块的最大深度4
		"max-depth": "warn",
		// 强制最大行数 300
		// "max-lines": ["warn", { "max": 1200 }],
		// 强制函数最大代码行数 50
		// 'max-lines-per-function': ['warn', { max: 70 }],
		// 强制函数块最多允许的的语句数量20
		"max-statements": ["warn", 100],
		// 强制回调函数最大嵌套深度
		"max-nested-callbacks": ["warn", 3],
		// 强制函数定义中最多允许的参数数量
		"max-params": ["warn", 3],
		// 强制每一行中所允许的最大语句数量
		"max-statements-per-line": ["warn", { max: 1 }],
		// 要求方法链中每个调用都有一个换行符
		"newline-per-chained-call": ["warn", { ignoreChainWithDepth: 3 }],
		// 禁止 if 作为唯一的语句出现在 else 语句中
		"no-lonely-if": "warn",
		// 禁止空格和 tab 的混合缩进
		"no-mixed-spaces-and-tabs": "warn",
		// 禁止出现多行空行
		"no-multiple-empty-lines": "warn",
		// 强制在块之前使用一致的空格
		"space-before-blocks": "warn",
		// 强制在 function的左括号之前使用一致的空格
		"space-before-function-paren": ["warn", "never"],
		// 强制在圆括号内使用一致的空格
		"space-in-parens": "warn",
		// 要求操作符周围有空格
		"space-infix-ops": "warn",
		// 强制在一元操作符前后使用一致的空格
		"space-unary-ops": "warn",
		// 强制在注释中 // 或 /* 使用一致的空格
		// "spaced-comment": "warn",
		// 强制在 switch 的冒号左右有空格
		"switch-colon-spacing": "warn",
		// 强制箭头函数的箭头前后使用一致的空格
		"arrow-spacing": "warn",
		"prefer-const": "warn",
		"prefer-rest-params": "warn",
		"no-useless-escape": "warn",
		"no-irregular-whitespace": "warn",
		"no-prototype-builtins": "warn",
		"no-fallthrough": "warn",
		"no-extra-boolean-cast": "warn",
		"no-case-declarations": "warn",
		"no-async-promise-executor": "warn",

		// vue (https://eslint.vuejs.org/rules)
		"vue/no-v-html": "off", // 禁止使用 v-html
		"vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效。
		"vue/v-slot-style": "error", // 强制执行 v-slot 指令样式
		"vue/no-mutating-props": "off", // 不允许组件 prop的改变
		"vue/custom-event-name-casing": "off", // 为自定义事件名称强制使用特定大小写
		"vue/attributes-order": "off", // vue api使用顺序，强制执行属性顺序
		"vue/one-component-per-file": "off", // 强制每个组件都应该在自己的文件中
		"vue/html-closing-bracket-newline": "off", // 在标签的右括号之前要求或禁止换行
		"vue/max-attributes-per-line": "off", // 强制每行的最大属性数
		"vue/multiline-html-element-content-newline": "off", // 在多行元素的内容之前和之后需要换行符
		"vue/singleline-html-element-content-newline": "off", // 在单行元素的内容之前和之后需要换行符
		"vue/attribute-hyphenation": "off", // 对模板中的自定义组件强制执行属性命名样式
		"vue/require-default-prop": "off", // 此规则要求为每个 prop 为必填时，必须提供默认值
		"vue/multi-word-component-names": "off" // 要求组件名称始终为 “-” 链接的单词
	},
	globals: {
		defineProps: "readonly",
		defineEmits: "readonly",
		defineExpose: "readonly",
		withDefaults: "readonly"
	}
};
