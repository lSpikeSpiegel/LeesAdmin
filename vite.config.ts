import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/LeesAdmin/',
  // 插件配置
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [NaiveUiResolver()]
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
    port: 3000,
    open: true,
    // https: false,
    proxy: {}
  },
  // 打包配置
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    outDir: 'dist',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },

  // 别名配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // 全局scss变量配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/index.scss";'
      }
    }
  },
});
