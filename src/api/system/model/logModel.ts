import { UserListItem } from '/@/api/system/model/userModel';

export type LogType = 'CREATE' | 'MODIFY' | 'DELETE' | 'QUERY';

export type LogListItem = {
  id?: string;
  userId?: string;
  moduleName?: string;
  bizName?: string;
  logType?: LogType;
  rawData?: string;
  targetData?: string;
  sysUser?: UserListItem;
  createDateTime?: string;
};
