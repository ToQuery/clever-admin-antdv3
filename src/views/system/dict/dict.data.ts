import { BasicColumn, FormSchema } from '/@/components/Table';

export const systemColumns: BasicColumn[] = [
  {
    title: '字典名称',
    dataIndex: 'dictName',
  },
  {
    title: '字典编码',
    dataIndex: 'dictCode',
  },
  {
    title: '描述',
    dataIndex: 'dictDesc',
  },
  {
    title: '序号',
    dataIndex: 'sortNum',
  },
];

export const systemDictSearchFormSchema: FormSchema[] = [
  {
    field: 'dictName',
    label: '字典名称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'dictCode',
    label: '字典编码',
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
    label: '字典名称',
    field: 'dictName',
    component: 'Input',
    required: true,
  },
  {
    label: '字典编码',
    field: 'dictCode',
    component: 'Input',
    required: true,
  },
  {
    label: '描述',
    field: 'dictDesc',
    component: 'Input',
  },
  {
    label: '序号',
    field: 'sortNum',
    component: 'InputNumber',
  },
];
