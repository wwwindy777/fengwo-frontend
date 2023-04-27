<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import UserTagList from '@/constant/UserTagList'
const router = useRouter()
//搜索框
const originalTagList = UserTagList
const searchText = ref('')
//取消按钮清除搜索框
const onCancel = () => {
    searchText.value = ''
    tagList.value = originalTagList
    router.back()
}
//监听搜索框中的文本实时响应结果
watch(searchText, (newValue) => {
    tagList.value = originalTagList.map((parentTag) => {
        const tempParentTag = { ...parentTag }
        const tempChildren = [...parentTag.children]
        tempParentTag.children = tempChildren.filter((item) =>
            item.text.includes(newValue),
        )
        return tempParentTag
    })
})
const doSearch = () => {
    router.push({
        path: '/search/result',
        query: {
            tags: activeIds.value,
        },
    })
}
//tag标签
const close = (tag: string) => {
    activeIds.value = activeIds.value.filter((item) => {
        return item !== tag
    })
}
//标签导航
const activeIds = ref<string[]>([])
const activeIndex = ref(0)
let tagList = ref(originalTagList)
</script>
<template>
    <form action="/">
        <VanSearch
            v-model="searchText"
            show-action
            placeholder="请输入搜索的标签"
            @cancel="onCancel"
        />
    </form>
    <VanDivider>已选标签</VanDivider>
    <VanRow gutter="20">
        <VanCol v-for="(tag, index) in activeIds" :key="index">
            <VanTag closeable size="medium" type="primary" @close="close(tag)">
                {{ tag }}
            </VanTag>
        </VanCol>
    </VanRow>
    <VanDivider>选择标签</VanDivider>
    <VanTreeSelect
        v-model:active-id="activeIds"
        v-model:main-active-index="activeIndex"
        :items="tagList"
    />
    <VanButton type="primary" size="large" @click="doSearch()"> 搜索</VanButton>
</template>
<style scoped></style>
