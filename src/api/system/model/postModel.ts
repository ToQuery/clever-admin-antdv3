export type PostListItem = {
  id?: string;
  postName?: string;
  postCode?: string;
  postStatus?: number;
  postLevel?: number;
  sortNum?: number;
  parentId?: string;
  children?: PostListItem[];
};
