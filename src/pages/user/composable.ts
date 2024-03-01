import { ref } from 'vue'
import { useRouter } from 'vue-router'
export function useCabinetLayoutFn() {
    const router = useRouter()
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
                    path: '/personal-cabinet/company',
                    title: 'Kompaniya haqida'
                },
                {
                    path: '/personal-cabinet/company/upload',
                    title: "Ma'lumot yuklash",
                }
            ]
        },
        {
            title: 'Savat',
            icon: 'basket',
            path: 'buy-history'
        },
        {
            title: 'Buyurtmalar',
            icon: 'notification',
            path: 'orders'
        },
        {
            title: 'Mahsulotlar',
            icon: 'product',
            path: '/personal-cabinet/product'
        },
        {
            title: 'Tarif reja',
            icon: 'plan',
            path: 'plans'
        }
    ]
    function clickedCompanyItem(item: any) {
        if (item.icon == 'company') {
            isOpenCompanyItems.value = !isOpenCompanyItems.value
        }
        if (item.path) {
            navigate(item.path)
        }
        // console.log(item)
    }


    function navigate(path: string) {
        router.push(path)
    }
    return {
        sidebarItems,
        isOpenCompanyItems,
        clickedCompanyItem,
        navigate
    }
}