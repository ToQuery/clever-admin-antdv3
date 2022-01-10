import { defHttp } from '/@/utils/http/axios';
import { RequestParam, ResponseResult } from '/@/api/model/baseModel';
import { MenuListItem } from '/@/api/system/model/menuModel';

enum Api {
  SystemMenu = '/sys/menu',
  SystemMenuTree = '/sys/menu/tree',
  SystemMenuList = '/sys/menu/list',
}

//
export const systemMenuPage = (params?: RequestParam & MenuListItem) =>
  defHttp.get<ResponseResult<MenuListItem[]>>({
    url: Api.SystemMenu,
    params,
  });

export const systemMenuList = (params?: MenuListItem) =>
  defHttp.get<ResponseResult<MenuListItem[]>>({
    url: Api.SystemMenuList,
    params,
  });

export const systemMenuTree = (params?: MenuListItem) =>
  defHttp.get<ResponseResult<MenuListItem[]>>({
    url: Api.SystemMenuTree,
    params,
  });


export const systemMenuAdd = (systemMenuBody: MenuListItem) =>
  defHttp.post<ResponseResult<MenuListItem>>({
    url: Api.SystemMenu,
    data: systemMenuBody,
  });

export const systemMenuDetail = (id: string) =>
  defHttp.get<ResponseResult<MenuListItem>>({
    url: `${Api.SystemMenu}/${id}`,
  });

//
export const systemMenuUpdate = (systemMenuBody: MenuListItem) =>
  defHttp.put<ResponseResult<MenuListItem>>({
    url: Api.SystemMenu,
    data: systemMenuBody,
  });

//
export const systemMenuDelete = (ids: (string | undefined)[]) =>
  defHttp.delete<ResponseResult<null>>({
    url: Api.SystemMenu,
    params: {
      ids,
    },
  });
