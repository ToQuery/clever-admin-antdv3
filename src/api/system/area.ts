import { defHttp } from '/@/utils/http/axios';
import { AreaListItem } from '/@/api/system/model/areaModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemArea = '/sys/area',
  SystemAreaTree = '/sys/area/tree',
  SystemAreaList = '/sys/area/list',
}

//
export const systemAreaPage = (params?: RequestParam & AreaListItem) =>
  defHttp.get<Result<AreaListItem[]>>({
    url: Api.SystemArea,
    params,
  });

export const systemAreaList = (params?: AreaListItem) =>
  defHttp.get<Result<AreaListItem[]>>({
    url: Api.SystemAreaList,
    params,
  });

export const systemAreaTree = (params?: AreaListItem) =>
  defHttp.get<Result<AreaListItem[]>>({
    url: Api.SystemAreaTree,
    params,
  });

export const systemAreaAdd = (systemAreaBody: AreaListItem) =>
  defHttp.post<Result<AreaListItem>>({
    url: Api.SystemArea,
    data: systemAreaBody,
  });

export const systemAreaDetail = (id: string) =>
  defHttp.get<Result<AreaListItem>>({
    url: `${Api.SystemArea}/${id}`,
  });

//
export const systemAreaUpdate = (systemAreaBody: AreaListItem) =>
  defHttp.put<Result<AreaListItem>>({
    url: Api.SystemArea,
    data: systemAreaBody,
  });

//
export const systemAreaDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<Result<null>>({
    url: Api.SystemArea,
    params: ids,
  });
