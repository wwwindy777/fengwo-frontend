<script lang="ts" setup>
import { showFailToast, showSuccessToast } from 'vant'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCurrentUser } from '@/service/user'
import { updateUserUsingPOST } from '@/service/fengwo/userController'

const router = useRouter()
const onSubmit = async () => {
    const currentUser = await getCurrentUser()
    if (currentUser == null) {
        showFailToast('获取当前用户失败')
        return
    }
    const res = await updateUserUsingPOST({
        id: currentUser.id,
        [editUser.value.editKey]: editUser.value.currentValue, //变量动态取值
    })
    const resData = res.data
    if (resData.code == 0 && resData.data > 0) {
        showSuccessToast('修改成功')
        //更新用户信息
        await getCurrentUser(false)
        await router.replace('/user')
    } else {
        showFailToast('修改失败')
    }
}
const route = useRoute()
const editUser = ref({
    editKey: route.query.editKey as string, //类型断言
    currentValue: String(route.query.currentValue),
    editName: String(route.query.editName),
})
</script>
<template>
    <VanForm @submit="onSubmit">
        <VanCellGroup inset>
            <VanField
                v-model="editUser.currentValue"
                :name="editUser.editKey"
                :label="editUser.editName"
                :placeholder="editUser.editName"
                :rules="[{ required: true, message: '请填写' }]"
            />
        </VanCellGroup>
        <div style="margin: 16px">
            <VanButton round block type="primary" native-type="submit">
                提交
            </VanButton>
        </div>
    </VanForm>
</template>
<style scoped></style>
