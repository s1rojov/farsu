<script setup lang="ts">
import BaseButton from 'src/components/BaseButton/index.vue'
const emit = defineEmits(['pageNumber'])
const props = defineProps({
    pageSize: Number
})
function clickedPageNumber(item: number) {
    emit('pageNumber', item)
}
</script>
<template>
    <div class="bg-white rounded-2xl w-full h-[76vh] relative">
        <div class="py-4 pl-5 pr-2">
            <div class="h-[64vh] overflow-y-scroll scrollbarActive">
                <slot></slot>

            </div>
        </div>
        <div class="absolute bottom-4 right-5 left-5 flex items-center justify-between">
            <BaseButton color="white" class="btn" label="oldinga" />
            <div class="flex items-center justify-center gap-2">
                <span v-for="item in props.pageSize" :key="item" @click="clickedPageNumber(item)"
                    class="py-2 px-3 cursor-pointer select-none">{{ item
                    }}</span>
            </div>
            <BaseButton color="white" class="btn" label="keyingi" />
        </div>
    </div>
</template>
<style scoped>
.btn {
    @apply py-2 px-3.5 rounded-lg border-slate-400 text-black
}
</style>