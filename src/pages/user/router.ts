const cabinet = [
    {
        path: 'personal-cabinet',
        name: 'Cabinet for user',
        component: () => import('src/pages/user/index.vue'),
        children: [
            {
                path: '',
                name: 'Personal cabinet dashboard',
                component: () => import('src/pages/user/children/dashboard/index.vue')
            },
            {
                path: 'company',
                name: 'Personal cabinet company',
                component: () => import('src/pages/user/children/company/index.vue')
            },
        ]
    }
]
export default cabinet