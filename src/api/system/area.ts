import { defHttp } from '/@/utils/http/axios';
import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { AreaListItem } from '/@/api/system/model/AreaModel';

enum Api {
  SystemArea = '/sys/area',
  SystemAreaTree = '/sys/area/tree',
  SystemAreaList = '/sys/area/list',
}

//
export const systemAreaPage = (params?: RequestParam & AreaListItem) =>
  defHttp.get<ResponseResult<AreaListItem[]>>({
    url: Api.SystemArea,
    params,
  });

export const systemAreaList = (params?: AreaListItem) =>
  defHttp.get<ResponseResult<AreaListItem[]>>({
    url: Api.SystemAreaList,
    params,
  });

export const systemAreaTree = (params?: AreaListItem) =>
  defHttp.get<ResponseResult<AreaListItem[]>>({
    url: Api.SystemAreaTree,
    params,
  });


export const systemAreaAdd = (systemAreaBody: AreaListItem) =>
  defHttp.post<ResponseResult<AreaListItem>>({
    url: Api.SystemArea,
    data: systemAreaBody,
  });

export const systemAreaDetail = (id: string) =>
  defHttp.get<ResponseResult<AreaListItem>>({
    url: `${Api.SystemArea}/${id}`,
  });

//
export const systemAreaUpdate = (systemAreaBody: AreaListItem) =>
  defHttp.put<ResponseResult<AreaListItem>>({
    url: Api.SystemArea,
    data: systemAreaBody,
  });

//
export const systemAreaDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<ResponseResult<null>>({
    url: Api.SystemArea,
    params: {
      ids,
    },
  });
