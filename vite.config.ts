import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import vue from "@vitejs/plugin-vue";
import path from 'path';
import { wrapperEnv } from "./src/utils/getEnv";
import { visualizer } from "rollup-plugin-visualizer";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteCompression from 'vite-plugin-compression';
import VueSetupExtend from "vite-plugin-vue-setup-extend";
// import eslintPlugin from "vite-plugin-eslint";
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);

  return {
    base: '/LeesAdmin/',
    // 插件配置
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            title: viteEnv.VITE_GLOB_APP_TITLE
          }
        }
      }),
      vueJsx(),
      Components({
        resolvers: [NaiveUiResolver()]
      }),
      // * 使用 svg 图标
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      // * EsLint 报错信息显示在浏览器界面上
      // eslintPlugin(),
      // * name 可以写在 script 标签上
      VueSetupExtend(),
      // * 是否生成包预览(分析依赖包大小,方便做优化处理)
      viteEnv.VITE_REPORT && visualizer(),
      // * gzip compress
      viteEnv.VITE_BUILD_GZIP &&
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz"
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
    // 开发服务器配置
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      proxy: {}
    },
    // * 打包去除 console.log && debugger
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
    },
    // 打包配置
    build: {
      minify: "esbuild",
      outDir: 'dist',
      rollupOptions: {
        output: {
          // Static resource classification and packaging
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    },

    // 别名配置
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
      },
    },

    // 全局scss变量配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/index.scss";'
        }
      }
    },
  }
});
