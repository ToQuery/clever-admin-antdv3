export type AreaListItem = {
  id?: string;
  areaName?: string;
  areaCode?: string;
  areaStatus?: number;
  areaLevel?: number;
  sortNum?: number;
  parentId?: string;
  children?: AreaListItem[];
};
