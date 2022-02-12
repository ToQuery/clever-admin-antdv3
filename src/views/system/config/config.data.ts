import { BasicColumn, FormSchema } from '/@/components/Table';

export const systemColumns: BasicColumn[] = [
  {
    title: '配置名称',
    dataIndex: 'configName',
  },
  {
    title: '配置值',
    dataIndex: 'configValue',
  },
  {
    title: '描述',
    dataIndex: 'configDesc',
  },
  {
    title: '序号',
    dataIndex: 'sortNum',
  },
];

export const systemConfigSearchFormSchema: FormSchema[] = [
  {
    field: 'configName',
    label: '配置名称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'configValue',
    label: '配置编码',
    component: 'Input',
    colProps: { span: 6 },
  },
];

export const systemConfigFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    label: '配置名称',
    field: 'configName',
    component: 'Input',
    required: true,
  },
  {
    label: '配置值',
    field: 'configValue',
    component: 'Input',
    required: true,
  },
  {
    label: '描述',
    field: 'configDesc',
    component: 'Input',
  },
  {
    label: '序号',
    field: 'sortNum',
    component: 'InputNumber',
  },
];
