import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { MenuListItem } from '/@/api/system/model/menuModel';
import { systemMenuTree } from '/@/api/system/menu';

export const systemMenuColumns: BasicColumn[] = [
  {
    title: '菜单名称',
    dataIndex: 'menuName',
    width: 200,
    align: 'left',
  },
  {
    title: '菜单Code',
    dataIndex: 'menuCode',
    width: 180,
  },
  {
    title: '菜单状态',
    dataIndex: 'menuStatus',
    width: 180,
    customRender: ({ record }) => {
      const menuStatus = (record as MenuListItem).menuStatus;
      const enable = menuStatus === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '排序',
    dataIndex: 'sortNum',
    width: 50,
  },
  {
    title: '创建时间',
    dataIndex: 'createDateTime',
    width: 180,
  },
];

export const systemMenuSearchFormSchema: FormSchema[] = [
  {
    field: 'menuName',
    label: '菜单名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'menuStatus',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '停用', value: '0' },
        { label: '启用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const systemMenuFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'menuName',
    label: '菜单名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'parentId',
    label: '上级菜单',
    component: 'ApiTreeSelect',
    required: true,
    componentProps: {
      api: () => systemMenuTree(),
      resultField: 'content',
      fieldNames: {
        label: 'menuName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'sortNum',
    label: '排序',
    required: true,
    component: 'Input',
    defaultValue: '1',
  },
  {
    field: 'menuStatus',
    label: '菜单状态',
    component: 'RadioButtonGroup',
    required: true,
    defaultValue: '1',
    componentProps: {
      options: [
        { label: '禁用', value: '0' },
        { label: '启用', value: '1' },
      ],
    },
  },
];
