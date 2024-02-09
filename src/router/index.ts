import { route } from 'quasar/wrappers';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

export default route(function (/* { store, ssrContext } */) {
  const Router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
  });

  // token uchun
  // Router.beforeEach((to, _, next) => {
  //   const isAuthenticated: any = getItem('Authorization');
  //   if (to.path !== '/login' && !isAuthenticated) {
  //     next({ name: 'Login' });
  //   } else if (to.meta.public && !!isAuthenticated) {
  //     next({ name: 'hr' });
  //   } else if (to.path === '' && isAuthenticated) {
  //     next({ name: 'hr' });
  //   } else {
  //     next();
  //   }
  // });

  return Router;
});