import { getCurrentUserState, setCurrentUserState } from '@/states/userState'
import { getCurrentUserUsingGET } from '@/service/fengwo/userController'
/**
 * 获取当前用户信息
 * @param useState 是否走缓存
 * @returns
 */
export const getCurrentUser = async (useState = true) => {
    const user = getCurrentUserState()
    //设置是否走缓存
    if (user && useState) {
        return user
    }
    const res = await getCurrentUserUsingGET()
    if (res.data.code == 0 && res.data.data != null) {
        setCurrentUserState(res.data.data)
        return res.data.data
    }
    return null
}
