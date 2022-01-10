import { defHttp } from '/@/utils/http/axios';

import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { LogListItem } from '/@/api/system/model/logModel';

enum Api {
  SystemLog = '/sys/log',
}

//
export const systemLogPage = (params?: RequestParam & LogListItem) =>
  defHttp.get<ResponseResult<LogListItem[]>>({
    url: Api.SystemLog,
    params,
  });

export const systemLogDetail = (id: string) =>
  defHttp.get<ResponseResult<LogListItem>>({
    url: `${Api.SystemLog}/${id}`,
  });
