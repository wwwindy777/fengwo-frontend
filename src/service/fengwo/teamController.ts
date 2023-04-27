/* eslint-disable */
import request from '@/plugins/myAxois';

/** 添加队伍 POST /team/add */
export async function addTeamUsingPOST(body: API.TeamAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/team/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除队伍 POST /team/delete */
export async function deleteTeamUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/team/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询单个队伍 GET /team/get */
export async function getTeamByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeamByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTeam_>('/team/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 加入队伍 POST /team/join */
export async function joinTeamUsingPOST(
  body: API.TeamJoinRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/team/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询符合条件队伍列表 GET /team/list */
export async function listTeamsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listTeamsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListTeamVO_>('/team/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取我创建的队伍 GET /team/list/my/create */
export async function listMyCreateTeamsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listMyCreateTeamsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListTeamVO_>('/team/list/my/create', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取我加入的队伍 GET /team/list/my/join */
export async function listMyJoinTeamsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listMyJoinTeamsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListTeamVO_>('/team/list/my/join', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 退出队伍 POST /team/quit */
export async function quitTeamUsingPOST(
  body: API.TeamQuitRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/team/quit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改队伍 POST /team/update */
export async function updateTeamUsingPOST(
  body: API.TeamUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/team/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
