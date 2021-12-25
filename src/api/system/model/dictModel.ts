export type DictListItem = {
  id?: string;
  dictType: string;
  dictName: string;
  dictCode: string;
  description: string;
  sortNum: number;
  dictItems: DictValueListItem[];
};

export type DictValueListItem = {
  id?: string;
  dictId?: string;
  itemText?: string;
  itemValue?: string;
  description?: string;
  disable: string;
  sortNum?: number;
};
