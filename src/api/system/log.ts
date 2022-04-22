import { defHttp } from '/@/utils/http/axios';

import { LogListItem } from '/@/api/system/model/logModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemLog = '/sys/log',
}

//
export const systemLogPage = (params?: RequestParam & LogListItem) =>
  defHttp.get<Result<LogListItem[]>>({
    url: Api.SystemLog,
    params,
  });

export const systemLogDetail = (id: string) =>
  defHttp.get<Result<LogListItem>>({
    url: `${Api.SystemLog}/${id}`,
  });
