// 需要安装依赖:  npm i eslint-define-config
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
    root: true,
    env: {
        browser: true,
        node: true,
    },
    /* 指定如何解析语法。*/
    parser: 'vue-eslint-parser',
    /* 优先级低于parse的语法解析配置 */
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    // https://eslint.bootcss.com/docs/user-guide/configuring#specifying-globals
    globals: {
        Nullable: true,
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    extends: [
        // add more generic rules here, such as:
        // 'eslint:recommended',
        // 'plugin:vue/vue3-recommended',
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
        'eslint-config-prettier',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended', // typescript-eslint推荐规则,
        'prettier',
        'plugin:prettier/recommended',
    ],
    rules: {},
    settings: {
        "import/resolver": {
            alias: [
                ["@", "./src"]
            ],
        },
    },
})
