<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getCurrentUser } from '@/service/user'
import User = API.User
import { useRouter } from 'vue-router'
import { setCurrentUserState } from '@/states/userState'
import { Gender } from '@/constant/MyEnums'

const user = ref<User>()
const router = useRouter()
//跳转用户编辑页面
const toEdit = (editKey: string, currentValue: string, editName: string) =>
    router.push({
        path: '/user/edit',
        query: {
            editKey,
            currentValue,
            editName,
        },
    })
//页面加载完获取用户信息
onMounted(async () => {
    const res = await getCurrentUser()
    if (res != null) {
        user.value = res
    }
})
const changeUser = () => {
    setCurrentUserState(null)
    router.push('/Login')
}
const logOut = () => {
    console.log('logout')
}
</script>
<template>
    <!-- 没有用户信息就不展示页面 -->
    <div v-if="user">
        <VanCell
            title="用户名"
            is-link
            :value="user.userName"
            @click="toEdit('userName', user.userName, '用户名')"
        />
        <VanCell title="账号" :value="user.userAccount" />
        <VanCell
            title="头像"
            is-link
            @click="toEdit('avatarUrl', user.avatarUrl, '头像')"
        >
            <img style="height: 45px" src="" alt="" />
        </VanCell>
        <VanCell
            title="性别"
            is-link
            :value="Gender[user.gender]"
            @click="toEdit('avatarUrl', user.gender.toString(), '性别')"
        />
        <VanCell
            title="电话"
            is-link
            :value="user.phone"
            @click="toEdit('phone', user.phone, '电话')"
        />
        <VanCell
            title="邮箱"
            is-link
            :value="user.email"
            @click="toEdit('email', user.email, '邮箱')"
        />
        <VanCell title="注册时间" :value="user.createTime" />
        <div style="padding-left: 10px; padding-right: 10px; margin-top: 10px">
            <van-button block style="margin-bottom: 10px" @click="changeUser"
                >切换用户</van-button
            >
            <van-button block @click="logOut">退出登陆</van-button>
        </div>
    </div>
</template>
<style scoped></style>
