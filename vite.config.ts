import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//按需引入vant组件支持
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        //根据vant官网设置按需引入插件
        Components({
            dirs: ['src/pages', 'src/layouts'], //配置自动加载模块的文件夹
            resolvers: [VantResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
        },
    },
})
