export type DeptListItem = {
  id?: string;
  menuName?: string;
  menuCode?: string;
  menuStatus?: number;
  menuLevel?: number;
  sortNum?: number;
  parentId?: string;
  children?: DeptListItem[];
};
