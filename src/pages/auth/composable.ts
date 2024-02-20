import { useAuthStore } from './store'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
export function useAuthFn() {
    const store = useAuthStore()
    const { isContinue } = storeToRefs(store)
    const router = useRouter()

    function getInfoUserFn(val: string) {
        if (val == 'firstStep') {
            isContinue.value = true
        }
        else if (val == 'secondStep') {
            router.push('/personal-cabinet')
        }
    }
    return {
        getInfoUserFn
    }
}