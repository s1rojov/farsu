<script setup lang="ts">
import BaseButton from 'src/components/BaseButton/index.vue'
</script>
<template>
    <div class="bg-zinc-100 rounded-2xl p-3.5">
        <div class="flex">
            <div class="w-[30%] h-24">
                <img src="/images/firma.png" class="bg-cover w-full h-full rounded-2xl" alt="img-product">
            </div>
            <div class="w-[70%] pl-5 relative">
                <p class="truncateCustom2 text-gray-800 text-sm font-bold leading-tight">Kir yuvish mashinasi
                    yarim avtomatik Artel TG110F</p>
                <p class="absolute bottom-1 text-zinc-500 text-base font-normal leading-[15px]">2 105 000 so'm</p>
            </div>
        </div>
        <div class="mt-5">
            <p class="text-emerald-600 text-opacity-95 text-base font-bold leading-tight">Malumotlari:</p>
            <div class="flex items-center justify-between mt-3">
                <p class="text-zinc-900 text-sm font-medium leading-tight">Qo’yilgan sana:</p>
                <span class="text-gray-500 text-sm font-medium leading-tight">12.04.2024</span>
            </div>
            <div class="flex items-center justify-between mt-3">
                <p class="text-zinc-900 text-sm font-medium leading-tight">Ko'rishlar soni:</p>
                <span class="text-gray-500 text-sm font-medium leading-tight">1262</span>
            </div>
            <div class="flex items-center justify-between mt-3">
                <p class="text-zinc-900 text-sm font-medium leading-tight">So'rovlar soni:</p>
                <span class="text-gray-500 text-sm font-medium leading-tight">454</span>
            </div>
        </div>
        <div class="flex items-center justify-between mt-5">
            <BaseButton icon="delete" class="bg-[#D92E15] btn" />
            <BaseButton icon="edit" class="bg-[#FFA755] btn " />
        </div>
    </div>
</template>
<style scoped>
.btn {
    @apply py-3 px-10 rounded-lg
}
</style>