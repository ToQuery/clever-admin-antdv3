<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增行政区 </a-button>
        <a-button type="primary" @click="handleSync"> 同步行政区 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          v-if="record.id !== '0'"
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
    <AreaModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, nextTick } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { systemAreaDelete, systemAreaTree } from '/@/api/system/area';

  import AreaModal from './AreaModal.vue';

  import { systemAreaColumns, systemAreaSearchFormSchema } from './area.data';
  import { useModal } from '/@/components/Modal';
  import { message } from 'ant-design-vue';

  export default defineComponent({
    name: 'SystemArea',
    components: { BasicTable, AreaModal, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload, expandAll }] = useTable({
        title: '行政区列表',
        api: systemAreaTree,
        columns: systemAreaColumns,
        formConfig: {
          labelWidth: 120,
          schemas: systemAreaSearchFormSchema,
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
        isTreeTable: true,
        pagination: false,
        striped: false,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
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

      function handleSync() {
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        systemAreaDelete([record.id])
          .then(() => {
            message.success('删除成功！');
            reload();
          })
          .catch(() => {
            // 删除失败
            message.error('删除失败！');
          });
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
        handleSync,
        handleEdit,
        handleDelete,
        handleSuccess,
        onFetchSuccess,
      };
    },
  });
</script>
