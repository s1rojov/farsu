import { RouteRecordRaw } from 'vue-router';
import cabinet from 'src/pages/user/router'
import main from 'src/pages/main/router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/App.vue'),
    children: [
      ...main,
      ...cabinet
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/profile',
    component: () => import('pages/category/profile/index.vue')
  }
];

export default routes;
