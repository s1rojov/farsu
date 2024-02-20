import { RouteRecordRaw } from 'vue-router';
import cabinet from 'src/pages/user/router'
import main from 'src/pages/main/router'
import auth from 'src/pages/auth/router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/App.vue'),
    children: [
      main,
      ...cabinet,
      ...auth
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  }
];

export default routes;
