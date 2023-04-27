<script lang="ts" setup>
import { showToast } from 'vant'
import { onMounted, Ref, ref } from 'vue'
import { recommendUsersUsingGET } from '@/service/fengwo/userController'
import User = API.User
import cat from '@/assets/cat.jpeg'
import { Gender } from '@/constant/MyEnums'
// TODO：分页功能
const pageInfo = ref({
    pageNum: 1,
    pageSize: 10,
})

const userList: Ref<User[]> = ref([])
onMounted(async () => {
    const response = await recommendUsersUsingGET(pageInfo.value)
    const userListData = response.data.data
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
        desc="描述信息"
        :title="user.userName"
        :thumb="user.avatarUrl ?? cat"
    >
        <template #tags>
            <VanTag style="margin: 3px" type="primary">
                {{ Gender[user.gender] }}
            </VanTag>
            <VanTag
                v-for="(tag, index) in user.tag"
                :key="index"
                style="margin: 3px"
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
</template>
<style scoped></style>
