<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { systemDictFormSchema } from './dictItem.data';
  import {
    systemDictItemAdd,
    systemDictItemDetail,
    systemDictItemUpdate,
  } from '/@/api/system/dictItem';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'SystemDictModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const route = useRoute();
      const dictId = route.params?.id ?? -1;
      const isUpdate = ref(true);

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: systemDictFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();

        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          systemDictItemDetail(data.record.id)
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

      const getTitle = computed(() => (!unref(isUpdate) ? '新增字典项' : '编辑字典项'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // x
          values.dictId = dictId;
          console.log(values);
          (unref(isUpdate) ? systemDictItemUpdate(values) : systemDictItemAdd(values))
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
