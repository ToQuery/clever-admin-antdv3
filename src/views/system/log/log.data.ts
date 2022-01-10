import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { LogListItem } from '/@/api/system/model/logModel';

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
    title: '操作账号',
    dataIndex: 'systemUser',
    children: [
      {
        title: '用户名',
        dataIndex: 'username',
        customRender: ({ record }) => {
          const username = (record as LogListItem).sysUser?.username;
          return h(() => username);
        },
      },
      {
        title: '昵称',
        dataIndex: 'nickname',
        customRender: ({ record }) => {
          const nickname = (record as LogListItem).sysUser?.nickname;
          return h(() => nickname);
        },
      },
    ],
  },
  {
    title: '操作时间',
    dataIndex: 'operateDateTime',
  },
];

export const systemLogSearchFormSchema: FormSchema[] = [
  {
    field: 'moduleName',
    label: '模块名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'bizName',
    label: '业务名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '日志类型',
    field: 'logType',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: {
      options: [
        { label: '查询', value: 'QUERY' },
        { label: '创建', value: 'CREATE' },
        { label: '修改', value: 'MODIFY' },
        { label: '删除', value: 'DELETE' },
      ],
    },
  },
];
