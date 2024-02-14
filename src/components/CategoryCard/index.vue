<script setup lang="ts">
import { PropType } from 'vue';

interface Card { iconName: string, label: string, path: string, count: number }
const props = defineProps({
    cardData: {
        type: Object as PropType<Card>,
        required: true
    }
})
</script>
<template>
    <div class="bg-white pt-4 pb-6 px-6 rounded-3xl">
        <router-link :to="props.cardData.path">
            <div class="bg-emerald-600 rounded-2xl p-4 w-fit">
                <BaseIcon :name="props.cardData.iconName" class="w-6 h-6" />
            </div>
            <p class="text-slate-800 text-lg font-extrabold leading-tight mt-4">{{ props.cardData.label }}</p>
            <p class="text-gray-500 text-base mt-2 font-medium leading-tight">Korxonalar soni {{
                props.cardData.count }}</p>
        </router-link>
    </div>
</template>