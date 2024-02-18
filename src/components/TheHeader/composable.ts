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
            title: 'Shartnoma tuzish',
            route: '/contract'
        },
        {
            title: "Bog'lanish",
            route: '/contact'
        },
        {
            title: 'FAQ',
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