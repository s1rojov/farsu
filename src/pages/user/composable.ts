import { ref } from 'vue'
export function useCabinetLayoutFn() {
    const isOpenCompanyItems = ref<boolean>(false)
    const sidebarItems = [
        {
            title: 'Bosh sahifa',
            icon: 'home',
            path: '/personal-cabinet'
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
                    path: 'upload-data',
                    title: "Ma'lumot yuklash",
                }
            ]
        },
        {
            title: 'Mahsulot/Xizmat',
            icon: 'product',
            path: 'product'
        },
        {
            title: 'Tarif reja',
            icon: 'plan',
            path: 'plans'
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