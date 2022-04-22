import { defHttp } from '/@/utils/http/axios';

import { WorkListItem } from '/@/api/system/model/workModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemWork = '/sys/work',
}

//
export const systemWorkPage = (params?: RequestParam & WorkListItem) =>
  defHttp.get<Result<WorkListItem[]>>({
    url: Api.SystemWork,
    params,
  });

export const systemWorkAdd = (systemWorkBody: WorkListItem) =>
  defHttp.post<Result<WorkListItem>>({
    url: Api.SystemWork,
    data: systemWorkBody,
  });

export const systemWorkDetail = (id: string) =>
  defHttp.get<Result<WorkListItem>>({
    url: `${Api.SystemWork}/${id}`,
  });

//
export const systemWorkUpdate = (systemWorkBody: WorkListItem) =>
  defHttp.put<Result<WorkListItem>>({
    url: Api.SystemWork,
    data: systemWorkBody,
  });

//
export const systemWorkDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<Result<null>>({
    url: Api.SystemWork,
    params: ids,
  });
