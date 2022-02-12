import { defHttp } from '/@/utils/http/axios';

import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { DictListItem } from '/@/api/system/model/dictModel';

enum Api {
  SystemDict = '/sys/dict',
}

//
export const systemDictPage = (params?: RequestParam & DictListItem) =>
  defHttp.get<ResponseResult<DictListItem[]>>({
    url: Api.SystemDict,
    params,
  });

export const systemDictAdd = (systemDictBody: DictListItem) =>
  defHttp.post<ResponseResult<DictListItem>>({
    url: Api.SystemDict,
    data: systemDictBody,
  });

export const systemDictDetail = (id: string) =>
  defHttp.get<ResponseResult<DictListItem>>({
    url: `${Api.SystemDict}/${id}`,
  });

//
export const systemDictUpdate = (systemDictBody: DictListItem) =>
  defHttp.put<ResponseResult<DictListItem>>({
    url: Api.SystemDict,
    data: systemDictBody,
  });

//
export const systemDictDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<ResponseResult<null>>({
    url: Api.SystemDict,
    params: {
      ids,
    },
  });
