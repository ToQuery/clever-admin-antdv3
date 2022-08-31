<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="title" @ok="handleSubmit">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleChecked.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </BasicModal>
</template>

<script lang="ts">
  import { computed, defineComponent, watch, ref, onMounted, unref } from 'vue';

  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { isArray, isFunction } from '/@/utils/is';
  import { get } from 'lodash-es';
  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'ApiModalTableChecked',
    components: { BasicModal, BasicTable, TableAction },
    props: {
      title: {
        type: String,
        default: '选择',
      },
      type: {
        type: String,
        default: '', // 单选 single 多选 multiple
      },
      api: { type: Function as PropType<(arg?: Recordable) => Promise<Recordable>> },
      params: { type: Object },
      tableColumns: { type: [], default: () => [] },
      searchFormSchema: { type: [], default: () => [] },
      immediate: { type: Boolean, default: true },
      resultField: propTypes.string.def(''),
    },
    emits: ['checked', 'options-change'],
    setup(props, { attrs, emit }) {
      const tableData = ref<Recordable[]>([]);
      const isFirstLoaded = ref<Boolean>(false);
      const loading = ref(false);

      const getAttrs = computed(() => {
        return {
          ...(props.api ? { tableData: unref(tableData) } : {}),
          ...attrs,
        };
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false });
      });

      const [registerTable] = useTable({
        title: props.title,
        api: props.api,
        columns: props.tableColumns,
        formConfig: {
          labelWidth: 120,
          schemas: props.searchFormSchema,
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
        isTreeTable: false,
        pagination: true,
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

      watch(
        () => props.params,
        () => {
          !unref(isFirstLoaded) && fetch();
        },
        { deep: true },
      );

      watch(
        () => props.immediate,
        (v) => {
          v && !isFirstLoaded.value && fetch();
        },
      );

      onMounted(() => {
        props.immediate && fetch();
      });

      async function fetch() {
        const { api } = props;
        if (!api || !isFunction(api)) return;
        loading.value = true;
        tableData.value = [];
        let result;
        try {
          result = await api(props.params);
        } catch (e) {
          console.error(e);
        }
        loading.value = false;
        if (!result) return;
        if (!isArray(result)) {
          result = get(result, props.resultField);
        }
        tableData.value = (result as Recordable[]) || [];
        isFirstLoaded.value = true;
        emit('options-change', tableData.value);
      }

      function handleChecked(record: Recordable) {
        emit('checked', {
          values: {},
        });
        closeModal();
      }

      async function handleSubmit() {
        emit('checked', {
          values: {},
        });
        closeModal();
      }

      return { registerModal, registerTable, getAttrs, loading, handleSubmit, handleChecked };
    },
  });
</script>
