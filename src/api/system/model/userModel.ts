import { RoleListItem } from "/@/api/system/model/roleModel";

export type UserListItem = {
  id?: string;
  username?: string;
  nickname?: string;
  avatar?: string;
  phone?: string;
  email?: string;
  userStatus?: number;
  roles?: RoleListItem[];
  changePasswordDateTime?: string;
};

export type UserAuthorize = {
  id: string;
  username: string;
  roleIds: string[];
};
