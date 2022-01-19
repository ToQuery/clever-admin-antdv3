<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { systemUserAuthorizeFormSchema } from './user.data';
  import { systemUserAuthorize, systemUserDetail } from '/@/api/system/user';

  export default defineComponent({
    name: 'SystemUserAuthorizeModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: systemUserAuthorizeFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();

        systemUserDetail(data.record.id)
          .then((res) => {
            setFieldsValue(res.content);
          })
          .finally(() => {
            setModalProps({ confirmLoading: false });
          });
      });

      const getTitle = computed(() => '账号赋权');

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // x
          console.log(values);
          systemUserAuthorize(values)
            .then(async (res) => {
              console.info(res);
              closeModal();
              emit('success', {
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
