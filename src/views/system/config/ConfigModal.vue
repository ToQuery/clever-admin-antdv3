<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { systemConfigFormSchema } from './config.data';
  import { systemConfigAdd, systemConfigDetail, systemConfigUpdate } from '/@/api/system/config';

  export default defineComponent({
    name: 'SystemConfigModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: systemConfigFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();

        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          systemConfigDetail(data.record.id)
            .then((res) => {
              setFieldsValue(res.content);
            })
            .finally(() => {
              setModalProps({ confirmLoading: false });
            });
        }

        await updateSchema([
          {
            field: 'password',
            ifShow: !unref(isUpdate),
          },
        ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增字典' : '编辑字典'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // x
          console.log(values);
          (unref(isUpdate) ? systemConfigUpdate(values) : systemConfigAdd(values))
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
        } catch (e) {
          console.error(e);
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
