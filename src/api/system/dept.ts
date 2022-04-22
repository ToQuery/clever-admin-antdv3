import { defHttp } from '/@/utils/http/axios';
import { DeptListItem } from '/@/api/system/model/deptModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemDept = '/sys/dept',
  SystemDeptList = '/sys/dept/list',
  SystemDeptTree = '/sys/dept/tree',
}

//
export const systemDeptPage = (params?: RequestParam & DeptListItem) =>
  defHttp.get<Result<DeptListItem[]>>({
    url: Api.SystemDept,
    params,
  });

export const systemDeptList = (params?: DeptListItem) =>
  defHttp.get<Result<DeptListItem[]>>({
    url: Api.SystemDeptList,
    params,
  });

export const systemDeptTree = (params?: DeptListItem) =>
  defHttp.get<Result<DeptListItem[]>>({
    url: Api.SystemDeptTree,
    params,
  });

export const systemDeptAdd = (systemDeptBody: DeptListItem) =>
  defHttp.post<Result<DeptListItem>>({
    url: Api.SystemDept,
    data: systemDeptBody,
  });

export const systemDeptDetail = (id: string) =>
  defHttp.get<Result<DeptListItem>>({
    url: `${Api.SystemDept}/${id}`,
  });

//
export const systemDeptUpdate = (systemDeptBody: DeptListItem) =>
  defHttp.put<Result<DeptListItem>>({
    url: Api.SystemDept,
    data: systemDeptBody,
  });

//
export const systemDeptDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<Result<null>>({
    url: Api.SystemDept,
    params: ids,
  });
