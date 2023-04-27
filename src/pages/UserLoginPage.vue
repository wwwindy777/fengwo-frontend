<script lang="ts" setup>
import { showFailToast, showSuccessToast } from 'vant'
import { ref } from 'vue'
import { userLoginUsingPOST } from '@/service/fengwo/userController'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const account = ref('')
const password = ref('')
const onSubmit = async () => {
    const res = await userLoginUsingPOST({
        userAccount: account.value,
        userPassword: password.value,
    })
    const resData = res.data
    if (resData.code == 0 && resData.data != null) {
        showSuccessToast('登录成功')
        const replaceUrl = (route.query.redirect as string) ?? '/'
        await router.replace(replaceUrl)
    } else {
        showFailToast('登录失败')
    }
}
</script>
<template>
    <div class="login-box">
        <VanForm @submit="onSubmit">
            <VanCellGroup inset>
                <VanField
                    v-model="account"
                    name="userAccount"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <VanField
                    v-model="password"
                    type="password"
                    name="userPassword"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
            </VanCellGroup>
            <div style="margin: 16px">
                <VanButton round block type="primary" native-type="submit">
                    提交
                </VanButton>
            </div>
        </VanForm>
    </div>
</template>
<style scoped>
.login-box {
    height: 100%;
    padding-top: 50%;
}
</style>
