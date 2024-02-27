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
                component: () => import('src/pages/user/children/company/index.vue'),
                children: [
                    {
                        path: '',
                        name: 'About company',
                        component: () => import('src/pages/user/children/company/aboutCompany/index.vue')
                    },
                    {
                        path: 'upload',
                        name: 'Upload data for company',
                        component: () => import('src/pages/user/children/company/uploadData/index.vue')
                    }
                ]
            },
            {
                path: 'product',
                name: 'Personal cabinet product',
                component: () => import('src/pages/user/children/product/index.vue')
            }
        ]
    }
]
export default cabinet