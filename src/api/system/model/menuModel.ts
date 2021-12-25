import type { RouteMeta } from 'vue-router';
export interface RouteItem {
  path: string;
  component: any;
  meta: RouteMeta;
  name?: string;
  alias?: string | string[];
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

export type MenuListItem = {
  id?: string;
  menuName?: string;
  menuCode?: string;
  menuLevel?: number;
  sortNum?: number;
  parentId?: string;
  children?: MenuListItem[];
};

/**
 * @description: Get menu return value
 */
export type getMenuListResultModel = RouteItem[];
