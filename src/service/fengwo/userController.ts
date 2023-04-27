/* eslint-disable */
import request from '@/plugins/myAxois';

/** 获取当前用户 GET /user/current */
export async function getCurrentUserUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseUser_>('/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户登陆 POST /user/login */
export async function userLoginUsingPOST(
  body: API.UserLoginRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUser_>('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 主页推荐用户(分页) GET /user/recommend */
export async function recommendUsersUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.recommendUsersUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUser_>('/user/recommend', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户注册 POST /user/register */
export async function userRegisterUsingPOST(
  body: API.UserRegisterRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 按标签搜索用户（匹配所有标签） GET /user/search/tags */
export async function searchUserByTagsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchUserByTagsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUser_>('/user/search/tags', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新用户信息 POST /user/update */
export async function updateUserUsingPOST(body: API.User, options?: { [key: string]: any }) {
  return request<API.BaseResponseInt_>('/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
