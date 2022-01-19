export type DeptListItem = {
  id?: string;
  deptName?: string;
  deptCode?: string;
  deptStatus?: number;
  deptLevel?: number;
  sortNum?: number;
  parentId?: string;
  children?: DeptListItem[];
};
