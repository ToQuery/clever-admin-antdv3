import { defHttp } from '/@/utils/http/axios';
import { RoleListItem } from '/@/api/system/model/roleModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemRole = '/sys/role',
  SystemRoleList = '/sys/role/list',
}

//
export const systemRolePage = (params?: RequestParam & RoleListItem) =>
  defHttp.get<Result<RoleListItem[]>>({
    url: Api.SystemRole,
    params,
  });

//
export const systemRoleList = (params?: RoleListItem) =>
  defHttp.get<Result<RoleListItem[]>>({
    url: Api.SystemRoleList,
    params,
  });

export const systemRoleAdd = (systemRoleBody: RoleListItem) =>
  defHttp.post<Result<RoleListItem>>({
    url: Api.SystemRole,
    data: systemRoleBody,
  });

export const systemRoleDetail = (id: string) =>
  defHttp.get<Result<RoleListItem>>({
    url: `${Api.SystemRole}/${id}`,
  });

//
export const systemRoleUpdate = (systemRoleBody: RoleListItem) =>
  defHttp.put<Result<RoleListItem>>({
    url: Api.SystemRole,
    data: systemRoleBody,
  });

//
export const systemRoleDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<Result<null>>({
    url: Api.SystemRole,
    params: ids,
  });
