import { BasicColumn, FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { AreaListItem } from '/@/api/system/model/areaModel';
import { systemAreaTree } from '/@/api/system/area';

export const systemAreaColumns: BasicColumn[] = [
  {
    title: '行政区名称',
    dataIndex: 'areaName',
    width: 200,
    align: 'left',
  },
  {
    title: '行政区编码',
    dataIndex: 'areaCode',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'areaStatus',
    width: 180,
    customRender: ({ record }) => {
      const areaStatus = (record as AreaListItem).areaStatus;
      const enable = areaStatus === 1;
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

export const systemAreaSearchFormSchema: FormSchema[] = [
  {
    field: 'areaName',
    label: '行政区名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'areaStatus',
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

export const systemAreaFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '主键ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'areaName',
    label: '行政区名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'areaCode',
    label: '行政区编码',
    component: 'Input',
    required: true,
  },
  {
    field: 'parentId',
    label: '上级行政区',
    component: 'ApiTreeSelect',
    required: true,
    componentProps: {
      api: () => systemAreaTree(),
      resultField: 'content',
      fieldNames: {
        label: 'areaName',
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
    field: 'areaStatus',
    label: '行政区状态',
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
];
