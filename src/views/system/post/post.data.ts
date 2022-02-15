import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { PostListItem } from '/@/api/system/model/postModel';
import { systemPostTree } from '/@/api/system/post';

export const systemPostColumns: BasicColumn[] = [
  {
    title: '岗位名称',
    dataIndex: 'postName',
    width: 200,
    align: 'left',
  },
  {
    title: '状态',
    dataIndex: 'postStatus',
    width: 180,
    customRender: ({ record }) => {
      const postStatus = (record as PostListItem).postStatus;
      const enable = postStatus === 1;
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

export const systemPostSearchFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'postName',
    label: '岗位名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'postStatus',
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

export const systemPostFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'postName',
    label: '岗位名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'parentId',
    label: '上级岗位',
    component: 'ApiTreeSelect',
    componentProps: {
      api: () => systemPostTree(),
      resultField: 'content',
      fieldNames: {
        label: 'postName',
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
    field: 'postStatus',
    label: '岗位状态',
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
