const auth = [
    {
        path: 'register',
        name: 'Register page',
        component: () => import('src/pages/auth/register/index.vue')
    },
    {
        path: 'login',
        name: 'Login page',
        component: () => import('src/pages/auth/login/index.vue')
    }
]
export default auth