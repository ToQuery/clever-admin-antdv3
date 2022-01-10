import { defHttp } from '/@/utils/http/axios';

import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { UserAuthorize, UserListItem } from '/@/api/system/model/userModel';

enum Api {
  SystemUser = '/sys/user',
  SystemUserAuthorize = '/sys/user/authorize',
  SystemUserExist = '/sys/user/exist',
}

//
export const systemUserPage = (params?: RequestParam & UserListItem) =>
  defHttp.get<ResponseResult<UserListItem[]>>({
    url: Api.SystemUser,
    params,
  });

export const systemUserAdd = (systemUserBody: UserListItem) =>
  defHttp.post<ResponseResult<UserListItem>>({
    url: Api.SystemUser,
    data: systemUserBody,
  });

export const systemUserDetail = (id: string) =>
  defHttp.get<ResponseResult<UserListItem>>({
    url: `${Api.SystemUser}/${id}`,
  });

//
export const systemUserUpdate = (systemUserBody: UserListItem) =>
  defHttp.put<ResponseResult<UserListItem>>({
    url: Api.SystemUser,
    data: systemUserBody,
  });

export const systemUserAuthorize = (userAuthorize: UserAuthorize) =>
  defHttp.put<ResponseResult<UserListItem>>({
    url: Api.SystemUserAuthorize,
    data: userAuthorize,
  });

//
export const systemUserDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<ResponseResult<null>>({
    url: Api.SystemUser,
    params: {
      ids,
    },
  });

export const systemUserIsExist = (systemUser: UserListItem) =>
  defHttp.get<ResponseResult<boolean>>({ url: Api.SystemUserExist, params: { systemUser } });
