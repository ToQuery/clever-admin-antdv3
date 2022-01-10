<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { systemRoleFormSchema } from './role.data';
  import { systemRoleAdd, systemRoleDetail, systemRoleUpdate } from '/@/api/system/role';

  export default defineComponent({
    name: 'SystemMenuModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: systemRoleFormSchema,
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
          systemRoleDetail(data.record.id)
            .then((res) => {
              setFieldsValue(res.content);
            })
            .finally(() => {
              setModalProps({ confirmLoading: false });
            });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增角色' : '编辑角色'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // x
          console.log(values);
          (unref(isUpdate) ? systemRoleUpdate(values) : systemRoleAdd(values))
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
