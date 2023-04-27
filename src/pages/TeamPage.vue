<script lang="ts" setup>
import TeamCardList from '@/components/TeamCardList.vue'
import { onMounted, ref } from 'vue'
import TeamVO = API.TeamVO
import {
    listMyCreateTeamsUsingGET,
    listMyJoinTeamsUsingGET,
    listTeamsUsingGET,
} from '@/service/fengwo/teamController'
import listTeamsUsingGETParams = API.listTeamsUsingGETParams
const teamSearchText = ref('')
const activeName = ref('public')

const teamList = ref<TeamVO[]>([])
const teamRequestParams = ref<listTeamsUsingGETParams>({})
const listTeams = async () => {
    const teamListData = await listTeamsUsingGET(teamRequestParams.value).then(
        (res) => res.data.data,
    )
    if (teamListData) {
        teamList.value = teamListData
    }
}
onMounted(listTeams)
const changeTeamList = async () => {
    if (activeName.value == 'public') {
        await listTeams()
    } else if (activeName.value == 'join') {
        const teamListData = await listMyJoinTeamsUsingGET({}).then(
            (res) => res.data.data,
        )
        if (teamListData) {
            teamList.value = teamListData
        } else {
            teamList.value = []
        }
    } else {
        const teamListData = await listMyCreateTeamsUsingGET({}).then(
            (res) => res.data.data,
        )
        if (teamListData) {
            teamList.value = teamListData
        } else {
            teamList.value = []
        }
    }
}
</script>
<template>
    <van-search
        v-model="teamSearchText"
        placeholder="请输入搜索关键词"
        input-align="center"
    />
    <van-tabs v-model:active="activeName" @change="changeTeamList">
        <van-tab title="公开队伍" name="public"></van-tab>
        <van-tab title="加入的队伍" name="join"></van-tab>
        <van-tab title="创建的队伍" name="create"></van-tab>
    </van-tabs>
    <team-card-list :team-list="teamList"></team-card-list>
</template>
<style scoped></style>
