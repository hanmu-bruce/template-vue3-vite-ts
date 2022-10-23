import { RouteRecordRaw } from 'vue-router';

export const PAGE_NOT_FOUNT_ROUTE: RouteRecordRaw = {
    path: '/404',
    name: '404',
    component: () => import('@/pages/404.vue'),
};
export const LOGIN_ROUTE: RouteRecordRaw = {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
};
