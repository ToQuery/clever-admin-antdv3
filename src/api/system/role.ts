import { defHttp } from '/@/utils/http/axios';
import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { RoleListItem } from '/@/api/system/model/roleModel';

enum Api {
  SystemRole = '/sys/role',
  SystemRoleList = '/sys/role/list',
}

//
export const systemRolePage = (params?: RequestParam & RoleListItem) =>
  defHttp.get<ResponseResult<RoleListItem[]>>({
    url: Api.SystemRole,
    params,
  });

//
export const systemRoleList = (params?: RoleListItem) =>
  defHttp.get<ResponseResult<RoleListItem[]>>({
    url: Api.SystemRoleList,
    params,
  });

export const systemRoleAdd = (systemRoleBody: RoleListItem) =>
  defHttp.post<ResponseResult<RoleListItem>>({
    url: Api.SystemRole,
    data: systemRoleBody,
  });

export const systemRoleDetail = (id: string) =>
  defHttp.get<ResponseResult<RoleListItem>>({
    url: `${Api.SystemRole}/${id}`,
  });

//
export const systemRoleUpdate = (systemRoleBody: RoleListItem) =>
  defHttp.put<ResponseResult<RoleListItem>>({
    url: Api.SystemRole,
    data: systemRoleBody,
  });

//
export const systemRoleDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<ResponseResult<null>>({
    url: Api.SystemRole,
    params: {
      ids,
    },
  });
