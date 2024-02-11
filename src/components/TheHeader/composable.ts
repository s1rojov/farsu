import { ref } from 'vue'
export function useHeader() {
    const socials = ref<string[]>(['instagram', 'linkedin', 'facebook', 'youtube'])
    const navbarItems = ref<{ title: string, route: string }[]>([
        {
            title: 'Fartrade MCHJ',
            route: ''
        },
        {
            title: 'Logistika xizmati',
            route: ''
        },
        {
            title: 'Shartnoma tuzish',
            route: ''
        },
        {
            title: "Bog'lanish",
            route: ''
        },
        {
            title: 'FAQ',
            route: ''
        },
        {
            title: 'Yangiliklar',
            route: ''
        }
    ])
    return {
        socials,
        navbarItems

    }
}