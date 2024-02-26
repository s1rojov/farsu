<script setup lang="ts">
import BaseButton from 'src/components/BaseButton/index.vue'
import BaseChart from 'src/components/BaseChart/index.vue'
import BaseSelect from 'src/components/BaseSelect/index.vue'
import { useDashboardFn } from './composable';
const { fakeInfoCompany } = useDashboardFn()
const news = {
    image: '/images/fartrade-img.png',
    data: '16:15 / 16.11.2023',
    title: 'Lorem ipsum dolor sit amet consectetur',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos architecto ullam quos dolorem, cupiditate id accusantium nemo voluptates iure sed laboriosam, nisi vel asperiores veniam ratione ipsa ipsum, quae obcaecati ex excepturi. Voluptatibus voluptatem, quia excepturi expedita consectetur ratione itaque amet modi repellendus adipisci illum quasi sapiente quis! Quis, reprehenderit?'
}
const options = [
    {
        id: 1,
        title: 'Yillik'
    },
    {
        id: 2,
        title: 'Oylik'
    },
    {
        id: 3,
        title: 'Haftalik'
    }
]
</script>
<template>
    <div class="p-5">
        <p class="text-zinc-900 text-xl font-bold leading-snug">Bosh sahifa</p>

        <div class="grid grid-cols-4 gap-5 mt-3">
            <div class="bg-white rounded-2xl p-4" v-for="item, index in fakeInfoCompany" :key="index">
                <div class="flex items-center justify-between mb-5">
                    <div>
                        <span class="text-black text-base font-semibold leading-snug">{{ item.title }}</span>
                        <div class="flex items-center gap-1 mt-4" v-if="item.icon == 'rating'">
                            <BaseIcon name="star" class="w-3 text-black/20 h-3" v-for="item in 5" :key="item" />
                            <span class="text-zinc-900 text-xs font-normal leading-[15px]">0/</span><span
                                class="text-zinc-900 text-xs font-normal leading-[15px]">5</span>
                        </div>
                        <div v-else class="text-gray-500  mt-4 text-xs font-medium leading-snug">{{ item.data }}</div>
                    </div>
                    <div class="p-4 bg-emerald-600/30 rounded-2xl w-fit">
                        <BaseIcon :name="item.icon" class="w-5 h-5 text-emerald-500/95" />
                    </div>
                </div>
                <BaseButton color="white" class="select-none py-2 rounded-lg w-fit px-5" label="Batafsil" />
            </div>
        </div>
        <!-- chart and news started -->
        <div class="grid grid-cols-2 gap-5 mt-5">
            <divc class="bg-white rounded-2xl p-4">
                <div class="flex items-center justify-between">
                    <p class="text-zinc-900 text-base font-bold">Statistika</p>
                    <BaseSelect :options="options" class="w-24" />
                </div>
                <BaseChart class="mt-3" />
            </divc>
            <div class="bg-white rounded-2xl p-4 pb-5">
                <p class="text-zinc-900 text-base font-bold">Yangilik va e'lonlar</p>
                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div v-for="item in 4" :key="item">
                        <img :src="news.image" class="w-full rounded-2xl" alt="news-image">
                        <div class="flex items-center justify-start mt-2 gap-2">
                            <BaseIcon name="data" class="w-4 h-4" />
                            <p class="text-xs text-slate-800">{{ news.data }}</p>
                        </div>
                        <p class="text-zinc-900 text-xs font-extrabold mt-1">{{ news.title }}</p>
                        <p class="truncateCustom2 text-xs text-gray-500 mt-0.5">{{ news.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- chart and news ended -->
    </div>
</template>