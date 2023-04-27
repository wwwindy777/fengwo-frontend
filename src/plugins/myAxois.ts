import axios from 'axios'

const myAxios = axios.create({
    //可以配置根据环境改变url
    baseURL: 'http://localhost:8080',
})
//跨域携带cookie
myAxios.defaults.withCredentials = true
// 添加请求拦截器
myAxios.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    },
)

// 添加响应拦截器
myAxios.interceptors.response.use(
    function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        if (response?.data?.code === 40100) {
            const redirect = window.location.pathname
            window.location.href = `/login?redirect=${redirect}`
        }
        return response //返回的值是底层ajax封装的对象，取data才是后端返回的结果
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error)
    },
)

export default myAxios
