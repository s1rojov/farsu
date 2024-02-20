import { ref } from 'vue'
export function useHeader() {
    const socials = ref<string[]>(['instagram', 'linkedin', 'facebook', 'youtube'])
    const navbarItems = ref<{ title: string, route: string }[]>([
        {
            title: 'Fartrade MCHJ',
            route: '/fartrade'
        },
        {
            title: 'Logistika xizmati',
            route: '/logistic'
        },
        {
            title: "Ko'p so'raladigan savollar",
            route: '/faq'
        },
        {
            title: 'Yangiliklar',
            route: '/news'
        }
    ])
    return {
        socials,
        navbarItems

    }
}