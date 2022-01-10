<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑用户资料',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除此账号',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <UserModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { systemUserPage, systemUserDelete } from '/@/api/system/user';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import UserModal from './UserModal.vue';

  import { systemColumns, systemUserSearchFormSchema } from './user.data';
  import { message } from 'ant-design-vue';

  export default defineComponent({
    name: 'SystemUser',
    components: { BasicTable, PageWrapper, UserModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '账号列表',
        api: systemUserPage,
        rowKey: 'id',
        columns: systemColumns,
        formConfig: {
          labelWidth: 120,
          schemas: systemUserSearchFormSchema,
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

      function handleDelete(record: Recordable) {
        systemUserDelete([record.id])
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
        handleDelete,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
