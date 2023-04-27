<script lang="ts" setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const router = useRouter()
//顶部点击事件
const NOT_SHOW_SEARCH = ['/Login', '/team']
const onClickLeft = () => router.back()
const onClickRight = () => router.push('/search')
const title = ref('主页')
router.beforeEach((to) => {
    title.value = to.meta.title as string
})

//底部点击事件
</script>
<template>
    <div class="base-header-box">
        <div class="base-header">
            <VanNavBar
                :title="title"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
            >
                <template v-if="!NOT_SHOW_SEARCH.includes(route.path)" #right>
                    <VanIcon name="search" size="18" />
                </template>
            </VanNavBar>
        </div>
    </div>

    <div id="content">
        <RouterView />
    </div>
    <VanTabbar route>
        <VanTabbarItem to="/" icon="home-o" name="index"> 主页 </VanTabbarItem>
        <VanTabbarItem to="/team" icon="search" name="team">
            队伍
        </VanTabbarItem>
        <VanTabbarItem to="/user" icon="friends-o" name="user">
            个人
        </VanTabbarItem>
    </VanTabbar>
</template>
<style scoped>
.base-header-box {
    height: 50px;
}
.base-header {
    position: fixed;
    z-index: 1;
    width: 100%;
}
#content {
    padding-bottom: 60px;
}
:deep(.van-card__price-currency) {
    display: none;
}
</style>
