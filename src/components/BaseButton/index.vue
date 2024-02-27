<script setup lang="ts">
const props = defineProps({
    color: String,
    label: String,
    icon: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="rounded-3xl cursor-pointer hover:bg-opacity-90 transition select-none" :class="{
        'bg-emerald-600 text-white': props.color == 'green',
        'bg-white text-emerald-600 border border-emerald-600': props.color == 'white'
    }">
        <p v-if="props.icon == ''" class="text-center">{{ props.label }}</p>
        <BaseIcon v-else :name="props.icon" class="text-white h-[18px] w-[18px]" />
    </div>
</template>