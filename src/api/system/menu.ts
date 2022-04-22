import { defHttp } from '/@/utils/http/axios';
import { MenuListItem } from '/@/api/system/model/menuModel';
import { RequestParam, Result } from '/#/axios';

enum Api {
  SystemMenu = '/sys/menu',
  SystemMenuTree = '/sys/menu/tree',
  SystemMenuList = '/sys/menu/list',
}

//
export const systemMenuPage = (params?: RequestParam & MenuListItem) =>
  defHttp.get<Result<MenuListItem[]>>({
    url: Api.SystemMenu,
    params,
  });

export const systemMenuList = (params?: MenuListItem) =>
  defHttp.get<Result<MenuListItem[]>>({
    url: Api.SystemMenuList,
    params,
  });

export const systemMenuTree = (params?: MenuListItem) =>
  defHttp.get<Result<MenuListItem[]>>({
    url: Api.SystemMenuTree,
    params,
  });

export const systemMenuAdd = (systemMenuBody: MenuListItem) =>
  defHttp.post<Result<MenuListItem>>({
    url: Api.SystemMenu,
    data: systemMenuBody,
  });

export const systemMenuDetail = (id: string) =>
  defHttp.get<Result<MenuListItem>>({
    url: `${Api.SystemMenu}/${id}`,
  });

//
export const systemMenuUpdate = (systemMenuBody: MenuListItem) =>
  defHttp.put<Result<MenuListItem>>({
    url: Api.SystemMenu,
    data: systemMenuBody,
  });

//
export const systemMenuDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<Result<null>>({
    url: Api.SystemMenu,
    params: ids,
  });
