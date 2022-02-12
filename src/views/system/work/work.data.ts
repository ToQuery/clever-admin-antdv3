import { BasicColumn, FormSchema } from '/@/components/Table';
import { WorkListItem } from '/@/api/system/model/workModel';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { systemMenuTree } from '/@/api/system/menu';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'userName',
    width: 200,
  },
  {
    title: '部门名称',
    dataIndex: 'deptName',
    width: 200,
  },
  {
    title: '岗位名称',
    dataIndex: 'postName',
    width: 200,
  },
  {
    title: '状态',
    dataIndex: 'workStatus',
    width: 180,
    customRender: ({ record }) => {
      const menuStatus = (record as WorkListItem).workStatus;
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

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'deptName',
    label: '部门名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'postName',
    label: '岗位名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const systemWorkFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'workName',
    label: '角色名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'sortNum',
    label: '排序',
    required: true,
    component: 'Input',
    defaultValue: '1',
  },
  {
    field: 'workStatus',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 },
      ],
    },
  },
  {
    field: 'menuIds',
    label: '菜单',
    required: true,
    component: 'ApiTree',
    changeEvent: 'check',
    componentProps: {
      api: () => systemMenuTree(),
      checkable: true, // 显示多选
      showLine: true, // 显示连接线
      resultField: 'content',
      fieldNames: {
        title: 'menuName',
        key: 'id',
        children: 'children',
      },
      getPopupContainer: () => document.body,
    },
  },
];
