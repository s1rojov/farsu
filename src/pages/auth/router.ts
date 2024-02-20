const auth = [
    {
        path: 'login',
        name: 'Login page',
        component: () => import('src/pages/auth/login/index.vue')
    },
    {
        path: 'register',
        name: 'Register page page',
        component: () => import('src/pages/auth/register/index.vue')
    }
]
export default auth