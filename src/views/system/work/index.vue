<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <DeptTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable
      @register="registerTable"
      class="w-3/4 xl:w-4/5"
      :searchInfo="searchInfo"
      @fetch-success="onFetchSuccess"
    >
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增角色 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <WorkModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, nextTick, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { systemWorkDelete, systemWorkPage } from '/@/api/system/work';

  import WorkModal from './WorkModal.vue';
  import DeptTree from './DeptTree.vue';
  import { columns, searchFormSchema } from './work.data';
  import { useModal } from '/@/components/Modal';
  import { message } from 'ant-design-vue';

  export default defineComponent({
    name: 'SystemWork',
    components: { BasicTable, DeptTree, WorkModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, expandAll }] = useTable({
        title: '角色列表',
        api: systemWorkPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
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
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        systemWorkDelete([record.id])
          .then(() => {
            message.success('删除成功！');
            reload();
          })
          .catch(() => {
            // 删除失败
            message.error('删除失败！');
          });
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleSuccess() {
        reload();
      }

      function onFetchSuccess() {
        // 演示默认展开所有表项
        nextTick(expandAll);
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSelect,
        handleSuccess,
        onFetchSuccess,
        searchInfo,
      };
    },
  });
</script>
