const main = {
  path: '',
  name: 'Main',
  component: () => import('src/pages/main/index.vue'),
  children: [
    {
      path: '',
      name: 'Home',
      component: () => import('src/pages/main/home/index.vue'),
    },
    {
      path: 'faq',
      name: 'FAQ page',
      component: () => import('src/pages/main/faq/index.vue'),
    },
    {
      path: 'fartrade',
      name: 'Fartrade MChJ',
      component: () => import('src/pages/main/fartrade/index.vue'),
    },
    {
      path: 'logistic',
      name: 'Logistika xizmati',
      component: () => import('src/pages/main/logistic/index.vue'),
    },
    {
      path: 'news',
      name: 'News page',
      component: () => import('src/pages/main/news/index.vue'),
    }
  ]
};
export default main;
