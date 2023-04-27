<script lang="ts" setup>
import { showFailToast, showToast } from 'vant'
import { onMounted, Ref, ref } from 'vue'
import { useRoute } from 'vue-router'
import { searchUserByTagsUsingGET } from '@/service/fengwo/userController'
import User = API.User

const route = useRoute()
//路由传参
//const tags = route.query.tags 这是正常取变量的方法，下面的是解构赋值
const { tags } = route.query
const requestParams = ref({
    pageSize: 5,
    pageNum: 1,
    tagNameList: String(tags),
})
const userList: Ref<User[]> = ref([])
onMounted(async () => {
    const userListData = await searchUserByTagsUsingGET(requestParams.value)
        .then(function (response) {
            return response.data.data
        })
        .catch(function (error) {
            console.log('失败', error)
            showFailToast('请求错误')
        })
    if (userListData) {
        userListData.forEach((user) => {
            //后端数据库中存的tag是string，前端使用需转为数组
            if (user.tag) {
                user.tag = JSON.parse(user.tag)
            }
        })
        userList.value = userListData
    } else {
        showToast('无匹配结果')
    }
})
</script>
<template>
    <VanCard
        v-for="user in userList"
        :key="user.id"
        price="2.00"
        desc="描述信息"
        :title="user.userName"
        :thumb="user.avatarUrl"
    >
        <template #tags>
            <VanTag
                v-for="(tag, index) in user.tag"
                :key="index"
                type="primary"
            >
                {{ tag }}
            </VanTag>
        </template>
        <template #footer>
            <VanButton size="mini"> 联系我</VanButton>
            <VanButton size="mini"> 邀请</VanButton>
        </template>
    </VanCard>
    <van-empty v-if="userList.length < 1" description="无匹配结果" />
</template>
<style scoped></style>
