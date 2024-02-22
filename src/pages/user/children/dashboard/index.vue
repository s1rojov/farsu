<script setup lang="ts">
import BaseButton from 'src/components/BaseButton/index.vue'
import BaseChart from 'src/components/BaseChart/index.vue'
import { useDashboardFn } from './composable';
const { fakeInfoCompany } = useDashboardFn()
</script>
<template>
    <div class="p-5">
        <p class="text-zinc-900 text-xl font-bold leading-snug">Bosh sahifa</p>

        <div class="flex items-center justify-between mt-3">
            <div class="bg-white rounded-2xl w-fit p-4" v-for="item, index in fakeInfoCompany" :key="index">
                <div class="flex items-center justify-between gap-10 mb-5">
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
        <BaseChart />
        <!-- chart and news ended -->
    </div>
</template>