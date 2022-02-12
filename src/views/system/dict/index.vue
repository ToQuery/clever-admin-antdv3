<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增字典</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑字典',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'clarity:note-edit-line',
              tooltip: '字典',
              onClick: handleDictItem.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除字典',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <DictModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { systemDictPage, systemDictDelete } from '/@/api/system/dict';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import DictModal from './DictModal.vue';

  import { systemColumns, systemDictSearchFormSchema } from './dict.data';
  import { message } from 'ant-design-vue';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'SystemUser',
    components: { BasicTable, PageWrapper, DictModal, TableAction },
    setup() {
      const go = useGo();
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '字典列表',
        api: systemDictPage,
        rowKey: 'id',
        columns: systemColumns,
        formConfig: {
          labelWidth: 120,
          schemas: systemDictSearchFormSchema,
          autoSubmitOnEnter: true,
        },
        fetchSetting: {
          // 请求接口当前页数
          pageField: 'current',
          // 每页显示多少条
          sizeField: 'pageSize',
          // 请求结果列表字段  支持 a.b.c
          listField: 'content',
          // 请求结果总数字段  支持 a.b.c
          totalField: 'page.totalElements',
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(
          true,
          {
            record,
            isUpdate: true,
          },
          true,
        );
      }

      function handleDictItem(record: Recordable) {
        go(`/system/dict/${record.id}`);
      }

      function handleDelete(record: Recordable) {
        systemDictDelete([record.id])
          .then(() => {
            message.success('删除成功！');
            reload();
          })
          .catch(() => {
            // 删除失败
            message.error('删除失败！');
          });
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDictItem,
        handleDelete,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
