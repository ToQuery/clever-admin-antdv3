import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.demo.system.moduleName'),
  },
  children: [
    {
      path: 'user',
      name: 'SystemUser',
      meta: {
        title: '用户管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/system/user/index.vue'),
    },
    {
      path: 'menu',
      name: 'SystemMenu',
      meta: {
        title: '菜单管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/system/menu/index.vue'),
    },
    {
      path: 'role',
      name: 'SystemRole',
      meta: {
        title: '角色管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/system/role/index.vue'),
    },
    {
      path: 'log',
      name: 'SystemLog',
      meta: {
        title: '日志管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/system/log/index.vue'),
    },
    {
      path: 'dept',
      name: 'SystemDept',
      meta: {
        title: '部门管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/system/dept/index.vue'),
    },
    {
      path: 'post',
      name: 'SystemPost',
      meta: {
        title: '岗位管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/system/post/index.vue'),
    },
    {
      path: 'work',
      name: 'SystemWork',
      meta: {
        title: '工作管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/system/work/index.vue'),
    },
    {
      path: 'dict',
      name: 'SystemDict',
      meta: {
        title: '字典管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/system/dict/index.vue'),
    },
    {
      path: 'dict/:id',
      name: 'SystemDictItem',
      meta: {
        title: '字典项管理',
        hideMenu: true,
        ignoreKeepAlive: true,
        currentActiveMenu: '/system/dict',
      },
      component: () => import('/@/views/system/dictItem/index.vue'),
    },
    {
      path: 'config',
      name: 'SystemConfig',
      meta: {
        title: '配置管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/system/config/index.vue'),
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: t('routes.demo.system.password'),
        hideMenu: true,
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/password/index.vue'),
    },
  ],
};

export default system;
