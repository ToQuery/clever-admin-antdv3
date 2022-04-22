import { BasicColumn, FormSchema } from '/@/components/Table';

export const systemLogColumns: BasicColumn[] = [
  {
    title: '模块名称',
    dataIndex: 'moduleName',
    align: 'left',
  },
  {
    title: '业务名称',
    dataIndex: 'bizName',
  },
  {
    title: '日志类型',
    dataIndex: 'logType',
  },
  {
    title: '用户名',
    dataIndex: 'userName',
  },
  {
    title: '操作时间',
    dataIndex: 'operateDateTime',
  },
];

export const systemLogSearchFormSchema: FormSchema[] = [
  {
    label: '日志类型',
    field: 'logType',
    component: 'Select',
    colProps: { span: 6 },
    componentProps: {
      options: [
        { label: '查询', value: 'QUERY' },
        { label: '创建', value: 'CREATE' },
        { label: '修改', value: 'MODIFY' },
        { label: '删除', value: 'DELETE' },
      ],
    },
  },
  {
    field: 'moduleName',
    label: '模块名称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'bizName',
    label: '业务名称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    colProps: { span: 6 },
  },
];
