import { defHttp } from '/@/utils/http/axios';

import { DictItemListItem } from '/@/api/system/model/dictModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemDictItem = '/sys/dict/item',
}

//
export const systemDictItemPage = (params?: RequestParam & DictItemListItem) =>
  defHttp.get<Result<DictItemListItem[]>>({
    url: Api.SystemDictItem,
    params,
  });

export const systemDictItemAdd = (systemDictItemBody: DictItemListItem) =>
  defHttp.post<Result<DictItemListItem>>({
    url: Api.SystemDictItem,
    data: systemDictItemBody,
  });

export const systemDictItemDetail = (id: string) =>
  defHttp.get<Result<DictItemListItem>>({
    url: `${Api.SystemDictItem}/${id}`,
  });

//
export const systemDictItemUpdate = (systemDictItemBody: DictItemListItem) =>
  defHttp.put<Result<DictItemListItem>>({
    url: Api.SystemDictItem,
    data: systemDictItemBody,
  });

//
export const systemDictItemDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<Result<null>>({
    url: Api.SystemDictItem,
    params: ids,
  });
