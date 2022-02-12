import { UserListItem } from '/@/api/system/model/userModel';
import { DeptListItem } from '/@/api/system/model/deptModel';
import { PostListItem } from '/@/api/system/model/postModel';

export type WorkListItem = {
  id?: string;
  sysUser?: UserListItem;
  sysDept?: DeptListItem;
  sysPost?: PostListItem;
  workStatus?: number;
};
