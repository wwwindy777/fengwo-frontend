declare namespace API {
    type BaseResponseBoolean_ = {
        code?: number
        data?: boolean
        description?: string
        message?: string
    }

    type BaseResponseInt_ = {
        code?: number
        data: number
        description?: string
        message?: string
    }

    type BaseResponseListTeamVO_ = {
        code?: number
        data?: TeamVO[]
        description?: string
        message?: string
    }

    type BaseResponseListUser_ = {
        code?: number
        data?: User[]
        description?: string
        message?: string
    }

    type BaseResponseLong_ = {
        code?: number
        data?: number
        description?: string
        message?: string
    }

    type BaseResponseTeam_ = {
        code?: number
        data?: Team
        description?: string
        message?: string
    }

    type BaseResponseUser_ = {
        code?: number
        data?: User
        description?: string
        message?: string
    }

    type DeleteRequest = {
        id?: number
    }

    type getTeamByIdUsingGETParams = {
        /** id */
        id?: number
    }

    type listMyCreateTeamsUsingGETParams = {
        description?: string
        id?: number
        idList?: number[]
        name?: string
        pageNum?: number
        pageSize?: number
        status?: number
        userId?: number
    }

    type listMyJoinTeamsUsingGETParams = {
        description?: string
        id?: number
        idList?: number[]
        name?: string
        pageNum?: number
        pageSize?: number
        status?: number
        userId?: number
    }

    type listTeamsUsingGETParams = {
        description?: string
        id?: number
        idList?: number[]
        name?: string
        pageNum?: number
        pageSize?: number
        status?: number
        userId?: number
    }

    type recommendUsersUsingGETParams = {
        /** pageNum */
        pageNum?: number
        /** pageSize */
        pageSize?: number
    }

    type searchUserByTagsUsingGETParams = {
        /** pageNum */
        pageNum?: number
        /** pageSize */
        pageSize?: number
        /** tagNameList */
        tagNameList: string
    }

    type Team = {
        createTime?: string
        description?: string
        expireTime?: string
        id?: number
        isDelete?: number
        maxNum?: number
        name?: string
        password?: string
        status?: number
        updateTime?: string
        userId?: number
    }

    type TeamAddRequest = {
        description?: string
        expireTime?: string
        maxNum?: number
        name?: string
        password?: string
        status?: number
    }

    type TeamJoinRequest = {
        password?: string
        teamId?: number
    }

    type TeamQuitRequest = {
        teamId?: number
    }

    type TeamUpdateRequest = {
        description?: string
        expireTime?: string
        id?: number
        name?: string
        password?: string
        status?: number
    }

    type TeamVO = {
        createTime?: string
        createUser?: UserVO
        description?: string
        expireTime?: string
        hasJoinTeam?: boolean
        id?: number
        maxNum?: number
        name?: string
        status?: number
        updateTime?: string
        userId?: number
        userList?: UserVO[]
    }

    type User = {
        avatarUrl?: string
        createTime?: string
        email?: string
        gender?: number
        id?: number
        isDelete?: number
        phone?: string
        tag?: string
        updateTime?: string
        userAccount?: string
        userName?: string
        userPassword?: string
        userRole?: number
        userStatus?: number
    }

    type UserLoginRequest = {
        userAccount?: string
        userPassword?: string
    }

    type UserRegisterRequest = {
        checkPassword?: string
        userAccount?: string
        userPassword?: string
    }

    type UserVO = {
        avatarUrl?: string
        createTime?: string
        gender?: number
        id?: number
        tag?: string
        updateTime?: string
        userAccount?: string
        userName?: string
    }
}
