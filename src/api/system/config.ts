import { defHttp } from '/@/utils/http/axios';

import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { ConfigListItem } from '/@/api/system/model/configModel';

enum Api {
  SystemConfig = '/sys/config',
}

//
export const systemConfigPage = (params?: RequestParam & ConfigListItem) =>
  defHttp.get<ResponseResult<ConfigListItem[]>>({
    url: Api.SystemConfig,
    params,
  });

export const systemConfigAdd = (systemConfigBody: ConfigListItem) =>
  defHttp.post<ResponseResult<ConfigListItem>>({
    url: Api.SystemConfig,
    data: systemConfigBody,
  });

export const systemConfigDetail = (id: string) =>
  defHttp.get<ResponseResult<ConfigListItem>>({
    url: `${Api.SystemConfig}/${id}`,
  });

//
export const systemConfigUpdate = (systemConfigBody: ConfigListItem) =>
  defHttp.put<ResponseResult<ConfigListItem>>({
    url: Api.SystemConfig,
    data: systemConfigBody,
  });

//
export const systemConfigDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<ResponseResult<null>>({
    url: Api.SystemConfig,
    params: {
      ids,
    },
  });
