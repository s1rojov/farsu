import { useProductStore } from './store'
import { storeToRefs } from 'pinia'
export function useProductFn() {
    const store = useProductStore()
    const { visibleAddPage } = storeToRefs(store)

    function cancelAction() {
        visibleAddPage.value = false
    }
    function addProductAction() {
        visibleAddPage.value = false
    }
    return {
        cancelAction,
        addProductAction
    }
}