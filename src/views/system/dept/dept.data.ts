import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { DeptListItem } from '/@/api/system/model/deptModel';

export const systemDeptColumns: BasicColumn[] = [
  {
    title: '部门名称',
    dataIndex: 'deptName',
    width: 200,
    align: 'left',
  },
  {
    title: '部门Code',
    dataIndex: 'deptCode',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'deptStatus',
    width: 180,
    customRender: ({ record }) => {
      const deptStatus = (record as DeptListItem).deptStatus;
      const enable = deptStatus === 1;
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

export const systemDeptSearchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'deptName',
    label: '部门名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'deptStatus',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '停用', value: 0 },
        { label: '启用', value: 1 },
      ],
    },
    colProps: { span: 8 },
  },
];

export const systemDeptFormSchema: FormSchema[] = [
  {
    field: 'deptName',
    label: '部门名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'parentdept',
    label: '上级部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'deptName',
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
    defaultValue: 1,
  },
  {
    field: 'deptStatus',
    label: '部门状态',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '禁用', value: 0 },
        { label: '启用', value: 1 },
      ],
    },
  },
];
