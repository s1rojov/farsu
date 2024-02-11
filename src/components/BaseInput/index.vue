<script setup lang="ts">
const emit = defineEmits(['update:modelValue', 'search'])
const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        required: true
    },
    isSearch: {
        type: Boolean,
        default: false
    }
})
function clickedSearchBtn() {
    if (props.isSearch) {
        emit('search', 'search')
    }
}
</script>
<template>
    <div class="w-fit relative">
        <input :value="props.modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            :type="props.type"
            class="border-none outline-none w-full bg-white pl-2 text-sm py-2 rounded-3xl placeholder:text-zinc-900 placeholder:text-sm"
            :placeholder="props.placeholder" :class="{ 'pr-[90px]': (props.isSearch) }">
        <div @click="clickedSearchBtn"
            class="bg-emerald-600 cursor-pointer flex items-center py-1.5 top-0.5 px-3 gap-1 rounded-2xl absolute right-0.5">
            <BaseIcon name="search" class="w-4 h-4" />
            <p class="text-white text-sm font-medium">Izlash</p>
        </div>
    </div>
</template>