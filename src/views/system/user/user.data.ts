import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { UserListItem } from '/@/api/system/model/userModel';
import { systemRoleList } from '/@/api/system/role';

export const systemColumns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '状态',
    dataIndex: 'userStatus',
    width: 180,
    customRender: ({ record }) => {
      const userStatus = (record as UserListItem).userStatus;
      const enable = userStatus === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createDateTime',
  },
  {
    title: '角色',
    defaultHidden: true,
    dataIndex: 'role',
    // customRender: ({ record }) => {
    //   const roles = (record as UserListItem).roles;
    //   return h(Tag ,
    //     { color: 'blue', roles: roles },
    //     (roles) => roles.map(role => h(Tag, { color: 'green' }, () => role.roleName))
    //   );
    // },
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const systemUserSearchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'userStatus',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '停用', value: 0 },
      ],
    },
    colProps: { span: 8 },
  },
];

export const systemUserAuthorizeFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    label: '用户名',
    field: 'username',
    component: 'Input',
    dynamicDisabled: true,
  },
  {
    label: '昵称',
    field: 'nickname',
    component: 'Input',
    dynamicDisabled: true,
  },
  {
    field: 'roleIds',
    label: '角色',
    component: 'ApiSelect',
    required: true,
    componentProps: {
      api: () => systemRoleList(),
      mode: 'multiple',
      resultField: 'content',
      // use name as label
      labelField: 'roleName',
      // use id as value
      valueField: 'id',
      // not request untill to select
      // immediate: false,
      // onChange: (e) => {
      //   console.log('selected:', e);
      // },
      // atfer request callback
      // onOptionsChange: (options) => {
      //   console.log('get options', options.length, options);
      // },
    },
  },
];

export const systemUserFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    helpMessage: ['不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    required: true,
    ifShow: true,
  },

  {
    field: 'userStatus',
    label: '状态',
    component: 'RadioButtonGroup',
    required: true,
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 },
      ],
    },
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
  },
  {
    label: '手机号',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
