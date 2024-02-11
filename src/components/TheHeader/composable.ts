import { ref } from 'vue'
export function useHeader() {
    const socials = ref<string[]>(['instagram', 'linkedin', 'facebook', 'youtube'])
    return {
        socials
    }
}