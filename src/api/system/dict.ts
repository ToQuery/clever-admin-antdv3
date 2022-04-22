import { defHttp } from '/@/utils/http/axios';

import { DictListItem } from '/@/api/system/model/dictModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemDict = '/sys/dict',
}

//
export const systemDictPage = (params?: RequestParam & DictListItem) =>
  defHttp.get<Result<DictListItem[]>>({
    url: Api.SystemDict,
    params,
  });

export const systemDictAdd = (systemDictBody: DictListItem) =>
  defHttp.post<Result<DictListItem>>({
    url: Api.SystemDict,
    data: systemDictBody,
  });

export const systemDictDetail = (id: string) =>
  defHttp.get<Result<DictListItem>>({
    url: `${Api.SystemDict}/${id}`,
  });

//
export const systemDictUpdate = (systemDictBody: DictListItem) =>
  defHttp.put<Result<DictListItem>>({
    url: Api.SystemDict,
    data: systemDictBody,
  });

//
export const systemDictDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<Result<null>>({
    url: Api.SystemDict,
    params: ids,
  });
