module.exports = {
     openApi: [
        {
            requestLibPath: "import request from '@/plugins/myAxios'", // 想怎么引入封装请求方法
            schemaPath: 'http://localhost:8080/v2/api-docs', // openAPI规范地址
            projectName: 'fengwo', // 生成到哪个目录内
            serversPath: './src/service', // 生成代码到哪个目录
        },
    ],
}
