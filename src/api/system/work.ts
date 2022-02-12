import { defHttp } from '/@/utils/http/axios';

import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { WorkListItem } from '/@/api/system/model/workModel';

enum Api {
  SystemWork = '/sys/work',
}

//
export const systemWorkPage = (params?: RequestParam & WorkListItem) =>
  defHttp.get<ResponseResult<WorkListItem[]>>({
    url: Api.SystemWork,
    params,
  });

export const systemWorkAdd = (systemWorkBody: WorkListItem) =>
  defHttp.post<ResponseResult<WorkListItem>>({
    url: Api.SystemWork,
    data: systemWorkBody,
  });

export const systemWorkDetail = (id: string) =>
  defHttp.get<ResponseResult<WorkListItem>>({
    url: `${Api.SystemWork}/${id}`,
  });

//
export const systemWorkUpdate = (systemWorkBody: WorkListItem) =>
  defHttp.put<ResponseResult<WorkListItem>>({
    url: Api.SystemWork,
    data: systemWorkBody,
  });

//
export const systemWorkDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<ResponseResult<null>>({
    url: Api.SystemWork,
    params: {
      ids,
    },
  });
