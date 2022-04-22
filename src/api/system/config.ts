import { defHttp } from '/@/utils/http/axios';

import { ConfigListItem } from '/@/api/system/model/configModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemConfig = '/sys/config',
}

//
export const systemConfigPage = (params?: RequestParam & ConfigListItem) =>
  defHttp.get<Result<ConfigListItem[]>>({
    url: Api.SystemConfig,
    params,
  });

export const systemConfigAdd = (systemConfigBody: ConfigListItem) =>
  defHttp.post<Result<ConfigListItem>>({
    url: Api.SystemConfig,
    data: systemConfigBody,
  });

export const systemConfigDetail = (id: string) =>
  defHttp.get<Result<ConfigListItem>>({
    url: `${Api.SystemConfig}/${id}`,
  });

//
export const systemConfigUpdate = (systemConfigBody: ConfigListItem) =>
  defHttp.put<Result<ConfigListItem>>({
    url: Api.SystemConfig,
    data: systemConfigBody,
  });

//
export const systemConfigDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<Result<null>>({
    url: Api.SystemConfig,
    params: ids,
  });
