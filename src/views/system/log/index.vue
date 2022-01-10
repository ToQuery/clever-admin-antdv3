<template>
  <div>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:info-standard-line',
              onClick: handleDetail.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { systemLogPage } from '/@/api/system/log';

  import { systemLogColumns, systemLogSearchFormSchema } from './log.data';

  export default defineComponent({
    name: 'SystemLog',
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '日志列表',
        api: systemLogPage,
        columns: systemLogColumns,
        formConfig: {
          labelWidth: 120,
          schemas: systemLogSearchFormSchema,
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

      function handleDetail() {
        console.log('handleDetail');
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        handleDetail,
        handleSuccess,
      };
    },
  });
</script>
