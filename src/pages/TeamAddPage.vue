<template>
    <van-form @submit="onSubmit">
        <!-- 通过 validator 进行函数校验 -->
        <van-field
            v-model="teamAddParams.name"
            name="validator"
            label="队伍名"
            placeholder="请输入队伍名"
            :rules="[{ validator, message: '请输入正确内容' }]"
        />
        <van-field
            v-model="teamAddParams.description"
            rows="2"
            autosize
            label="队伍描述"
            type="textarea"
            maxlength="50"
            placeholder="请输入描述"
            show-word-limit
        />
        <van-field name="stepper" label="队伍最大人数">
            <template #input>
                <van-stepper v-model="teamAddParams.maxNum" />
            </template>
        </van-field>
        <van-field name="radio" label="队伍类型">
            <template #input>
                <van-radio-group v-model="checked" direction="horizontal">
                    <van-radio name="0">公开</van-radio>
                    <van-radio name="1">私有</van-radio>
                    <van-radio name="2">加密</van-radio>
                </van-radio-group>
            </template>
        </van-field>
        <van-field
            v-if="checked === '2'"
            v-model="teamAddParams.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
            v-model="teamAddParams.expireTime"
            is-link
            readonly
            name="datePicker"
            label="过期时间"
            placeholder="选择时间"
            @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
            <van-date-picker
                @confirm="onConfirm"
                @cancel="showPicker = false"
            />
        </van-popup>
        <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { addTeamUsingPOST } from '@/service/fengwo/teamController'
import TeamAddRequest = API.TeamAddRequest
import { showToast } from 'vant'
import { useRouter } from 'vue-router'

// 队名校验：校验函数返回 true 表示校验通过，false 表示不通过
const validator = (val: string) => {
    return !(val.length < 1 || val.length > 10)
}
//队伍人数
const checked = ref('0')
//时间选择器
const showPicker = ref(false)
const onConfirm = ({ selectedValues }) => {
    teamAddParams.value.expireTime = selectedValues.join('-')
    showPicker.value = false
}

const teamAddParams = ref<TeamAddRequest>({
    description: '',
    expireTime: '',
    maxNum: 0,
    name: '',
    password: '',
})
const router = useRouter()
const onSubmit = async () => {
    const res = await addTeamUsingPOST({
        ...teamAddParams.value,
        status: Number(checked.value),
    })
    const resData = res.data.data ?? -1
    if (resData > 0) {
        showToast('添加成功')
    } else {
        showToast('添加失败')
    }
    await router.push('/team')
}
</script>

<style scoped></style>
