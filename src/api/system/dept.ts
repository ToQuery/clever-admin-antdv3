import { defHttp } from '/@/utils/http/axios';
import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { DeptListItem } from '/@/api/system/model/deptModel';

enum Api {
  SystemDept = '/sys/dept',
  SystemDeptList = '/sys/dept/list',
  SystemDeptTree = '/sys/dept/tree',
}

//
export const systemDeptPage = (params?: RequestParam & DeptListItem) =>
  defHttp.get<ResponseResult<DeptListItem[]>>({
    url: Api.SystemDept,
    params,
  });

export const systemDeptList = (params?: DeptListItem) =>
  defHttp.get<ResponseResult<DeptListItem[]>>({
    url: Api.SystemDeptList,
    params,
  });

export const systemDeptTree = (params?: DeptListItem) =>
  defHttp.get<ResponseResult<DeptListItem[]>>({
    url: Api.SystemDeptTree,
    params,
  });

export const systemDeptAdd = (systemDeptBody: DeptListItem) =>
  defHttp.post<ResponseResult<DeptListItem>>({
    url: Api.SystemDept,
    data: systemDeptBody,
  });

export const systemDeptDetail = (id: string) =>
  defHttp.get<ResponseResult<DeptListItem>>({
    url: `${Api.SystemDept}/${id}`,
  });

//
export const systemDeptUpdate = (systemDeptBody: DeptListItem) =>
  defHttp.put<ResponseResult<DeptListItem>>({
    url: Api.SystemDept,
    data: systemDeptBody,
  });

//
export const systemDeptDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<ResponseResult<null>>({
    url: Api.SystemDept,
    params: {
      ids,
    },
  });
