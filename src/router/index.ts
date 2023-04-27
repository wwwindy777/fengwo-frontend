import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/IndexPage.vue'
import Team from '@/pages/TeamPage.vue'
import User from '@/pages/UserPage.vue'
import Search from '@/pages/SearchPage.vue'
import UserEdit from '@/pages/UserEditPage.vue'
import SearchResult from '@/pages/SearchResultPage.vue'
import UserLogin from '@/pages/UserLoginPage.vue'
import TeamAdd from '@/pages/TeamAddPage.vue'
import TeamUpdate from '@/pages/TeamUpdatePage.vue'

// 定义路由组件.
// 也可以从其他文件导入
const routes = [
    { path: '/', meta: { title: '主页' }, component: Index },
    { path: '/Login', meta: { title: '登陆' }, component: UserLogin },
    { path: '/team', meta: { title: '队伍' }, component: Team },
    { path: '/user', meta: { title: '个人信息' }, component: User },
    { path: '/search', meta: { title: '找人' }, component: Search },
    { path: '/user/edit', meta: { title: '修改信息' }, component: UserEdit },
    { path: '/team/add', meta: { title: '添加队伍' }, component: TeamAdd },
    {
        path: '/team/update',
        meta: { title: '更新队伍' },
        component: TeamUpdate,
    },
    {
        path: '/search/result',
        meta: { title: '搜索结果' },
        component: SearchResult,
    },
]

const router = createRouter({
    //如果是history模式上线需要服务器（nginx做配置）
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
