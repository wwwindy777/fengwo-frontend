import User = API.User

/**
 * 缓存用户信息
 */
let currentUser: User | null = null

const getCurrentUserState = () => {
    return currentUser
}

const setCurrentUserState = (user: User | null) => {
    currentUser = user
}

export { getCurrentUserState, setCurrentUserState }
