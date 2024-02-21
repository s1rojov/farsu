import { ref } from 'vue'
export function useCabinetLayoutFn() {
    const isOpenCompanyItems = ref<boolean>(false)
    const sidebarItems = [
        {
            title: 'Bosh sahifa',
            icon: 'home',
            path: ''
        },
        {
            title: 'Kompaniya',
            icon: 'company',
            children: [
                {
                    path: '',
                    title: 'Kompaniya haqida'
                },
                {
                    path: '',
                    title: 'Rekvizitlar'
                },
                {
                    path: '',
                    title: "Ma'lumot yuklash",
                }
            ]
        },
        {
            title: 'Tarif reja',
            icon: 'plan',
            path: ''
        }
    ]
    function clickedCompanyItem(icon: string) {
        if (icon == 'company') {
            isOpenCompanyItems.value = !isOpenCompanyItems.value
        }
    }
    return {
        sidebarItems,
        isOpenCompanyItems,
        clickedCompanyItem
    }
}