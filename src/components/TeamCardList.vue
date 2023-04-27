<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {
    deleteTeamUsingPOST,
    joinTeamUsingPOST,
    quitTeamUsingPOST,
} from '@/service/fengwo/teamController'
import TeamVO = API.TeamVO
import { useRouter } from 'vue-router'
import { getCurrentUser } from '@/service/user'
import User = API.User
import { showFailToast, showSuccessToast } from 'vant'
import { TeamStateEnums } from '@/constant/MyEnums'
onMounted(async () => {
    currentUser.value = (await getCurrentUser()) ?? {}
})
const router = useRouter()
const currentUser = ref<User>({})
interface Props {
    teamList: TeamVO[]
}
const props = defineProps<Props>()
const addTeam = () => {
    router.push('/team/add')
}
const updateTeam = (id: number) => {
    router.push({
        path: '/team/update',
        query: { id },
    })
}
const joinTeam = async (id: number) => {
    //TODO：加密队伍需要密码
    const res = await joinTeamUsingPOST({
        teamId: id,
    })
    if (res.data.data) {
        showSuccessToast('解散队伍成功')
    } else {
        showFailToast('操作失败')
    }
    router.go(0)
}
const quitTeam = async (id: number) => {
    const res = await quitTeamUsingPOST({
        teamId: id,
    })
    if (res.data.data) {
        showSuccessToast('解散队伍成功')
    } else {
        showFailToast('操作失败')
    }
    router.go(0)
}
const deleteTeam = async (id: number) => {
    const res = await deleteTeamUsingPOST({
        id: id,
    })
    if (res.data.data) {
        showSuccessToast('解散队伍成功')
    } else {
        showFailToast('操作失败')
    }
    router.go(0)
}
</script>
<template>
    <div>
        <van-card
            v-for="team of props.teamList"
            :key="team.id"
            :title="team.name"
            thumb="src/assets/xiaoxun.jpeg"
        >
            <template #num>
                队伍人数：{{ team.userList?.length + '/' + team.maxNum }}
            </template>

            <template #desc>
                <div class="van-ellipsis" style="margin-bottom: 3px">
                    {{ team.description }}
                </div>
                <van-tag plain type="primary" style="margin-bottom: 2px">{{
                    '创建时间：' + team.createTime
                }}</van-tag>
                <van-tag plain type="primary">{{
                    '过期时间：' + team.expireTime
                }}</van-tag>
            </template>
            <template #price>
                <van-tag type="danger">{{
                    TeamStateEnums[team.status]
                }}</van-tag>
            </template>
            <template #footer>
                <div style="position: absolute; padding: 2px">
                    <van-image
                        v-for="teamUser of team.userList"
                        :key="teamUser.id"
                        round
                        width="30px"
                        height="30px"
                        :src="teamUser.avatarUrl"
                    />
                </div>
                <van-button
                    v-if="!team.hasJoinTeam"
                    size="small"
                    @click="joinTeam(team.id)"
                    >加入队伍</van-button
                >
                <van-button
                    v-if="team.userId === currentUser.id"
                    size="small"
                    color="pink"
                    @click="updateTeam(team.id)"
                    >更新队伍</van-button
                >
                <van-button
                    v-if="team.hasJoinTeam"
                    size="small"
                    color="pink"
                    @click="quitTeam(team.id)"
                    >退出队伍</van-button
                >
                <van-button
                    v-if="team.userId === currentUser.id"
                    size="small"
                    color="pink"
                    @click="deleteTeam(team.id)"
                    >解散队伍</van-button
                >
            </template>
        </van-card>
        <div class="add-team-btn">
            <van-button
                icon="plus"
                type="primary"
                round="round"
                @click="addTeam"
            />
        </div>
    </div>
</template>
<style scoped>
.add-team-btn {
    position: fixed;
    bottom: 5rem;
    left: 2rem;
}
</style>
