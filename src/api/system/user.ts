import { defHttp } from '/@/utils/http/axios';

import { UserAuthorize, UserListItem } from '/@/api/system/model/userModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemUser = '/sys/user',
  SystemUserAuthorize = '/sys/user/authorize',
  SystemUserExist = '/sys/user/exist',
}

//
export const systemUserPage = (params?: RequestParam & UserListItem) =>
  defHttp.get<Result<UserListItem[]>>({
    url: Api.SystemUser,
    params,
  });

export const systemUserAdd = (systemUserBody: UserListItem) =>
  defHttp.post<Result<UserListItem>>({
    url: Api.SystemUser,
    data: systemUserBody,
  });

export const systemUserDetail = (id: string) =>
  defHttp.get<Result<UserListItem>>({
    url: `${Api.SystemUser}/${id}`,
  });

//
export const systemUserUpdate = (systemUserBody: UserListItem) =>
  defHttp.put<Result<UserListItem>>({
    url: Api.SystemUser,
    data: systemUserBody,
  });

export const systemUserAuthorize = (userAuthorize: UserAuthorize) =>
  defHttp.put<Result<UserListItem>>({
    url: Api.SystemUserAuthorize,
    data: userAuthorize,
  });

//
export const systemUserDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<Result<null>>({
    url: Api.SystemUser,
    params: ids,
  });

export const systemUserIsExist = (systemUser: UserListItem) =>
  defHttp.get<Result<boolean>>({ url: Api.SystemUserExist, params: { systemUser } });
