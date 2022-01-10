<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { systemMenuFormSchema } from './menu.data';

  import { systemMenuAdd, systemMenuDetail, systemMenuUpdate } from '/@/api/system/menu';

  export default defineComponent({
    name: 'SystemMenuModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: systemMenuFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          systemMenuDetail(data.record.id)
            .then((res) => {
              setFieldsValue(res.content);
            })
            .finally(() => {
              setModalProps({ confirmLoading: false });
            });
        }

        // const { content } = await systemMenuTree();
        // updateSchema({
        //   field: 'parentId',
        //   componentProps: { treeData: content },
        // });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增菜单' : '编辑菜单'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // x
          console.log(values);
          (unref(isUpdate) ? systemMenuUpdate(values) : systemMenuAdd(values))
            .then(async (res) => {
              console.info(res);
              closeModal();
              emit('success', {
                isUpdate: unref(isUpdate),
                values: { ...values },
              });
            })
            .catch((err) => {
              console.error(err);
            });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
