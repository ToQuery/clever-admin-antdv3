import { defHttp } from '/@/utils/http/axios';

import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { DictItemListItem } from '/@/api/system/model/dictModel';

enum Api {
  SystemDictItem = '/sys/dict/item',
}

//
export const systemDictItemPage = (params?: RequestParam & DictItemListItem) =>
  defHttp.get<ResponseResult<DictItemListItem[]>>({
    url: Api.SystemDictItem,
    params,
  });

export const systemDictItemAdd = (systemDictItemBody: DictItemListItem) =>
  defHttp.post<ResponseResult<DictItemListItem>>({
    url: Api.SystemDictItem,
    data: systemDictItemBody,
  });

export const systemDictItemDetail = (id: string) =>
  defHttp.get<ResponseResult<DictItemListItem>>({
    url: `${Api.SystemDictItem}/${id}`,
  });

//
export const systemDictItemUpdate = (systemDictItemBody: DictItemListItem) =>
  defHttp.put<ResponseResult<DictItemListItem>>({
    url: Api.SystemDictItem,
    data: systemDictItemBody,
  });

//
export const systemDictItemDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<ResponseResult<null>>({
    url: Api.SystemDictItem,
    params: {
      ids,
    },
  });
