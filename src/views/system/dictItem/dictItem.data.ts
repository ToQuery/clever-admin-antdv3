import { BasicColumn, FormSchema } from '/@/components/Table';

export const systemColumns: BasicColumn[] = [
  {
    title: '字典项名称',
    dataIndex: 'itemText',
  },
  {
    title: '字典值',
    dataIndex: 'itemValue',
  },
  {
    title: '描述',
    dataIndex: 'itemDesc',
  },
  {
    title: '序号',
    dataIndex: 'sortNum',
  },
];

export const systemDictSearchFormSchema: FormSchema[] = [
  {
    field: 'itemText',
    label: '字典名称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'itemValue',
    label: '字典值',
    component: 'Input',
    colProps: { span: 6 },
  },
];

export const systemDictFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    label: '字典项名称',
    field: 'itemText',
    component: 'Input',
    required: true,
  },
  {
    label: '字典值',
    field: 'itemValue',
    component: 'Input',
    required: true,
  },
  {
    label: '描述',
    field: 'itemDesc',
    component: 'Input',
  },
  {
    label: '序号',
    field: 'sortNum',
    component: 'InputNumber',
  },
];
