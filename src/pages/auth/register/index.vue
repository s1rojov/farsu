<script setup lang="ts">
import LoginHeader from 'src/pages/auth/components/LoginHeader/index.vue'
import BaseInput from 'src/components/BaseInput/index.vue'
import BaseSelect from 'src/components/BaseSelect/index.vue'
import BaseButton from 'src/components/BaseButton/index.vue'
import { useAuthFn } from '../composable'
const { getInfoUserFn } = useAuthFn()
const statistics = [
    {
        count: 2500,
        title: 'Roʻyxatdan oʻtgan tadbirkorlar (Oʻzbekiston)'
    },
    {
        count: 1204,
        title: 'Roʻyxatdan oʻtgan tadbirkorlar (Xorijiy)'
    },
    {
        count: 565,
        title: 'Murojaatlar soni (Oʻzbekiston)'
    },
    {
        count: 895,
        title: 'Murojaatlar soni (Xorijiy)'
    }
]
const countries = [
    {
        id: 1,
        title: "O'zbekiston"
    },
    {
        id: 2,
        title: 'Xitoy'
    },
    {
        id: 3,
        title: 'Rossiya'
    }
]
</script>
<template>
    <div class="w-full h-full">
        <LoginHeader />
        <div class="absolute flex items-center top-0 left-0 bottom-0 right-0 m-auto">
            <div class="container mx-auto lg:px-20 mt-10">
                <div class="flex items-center justify-center">
                    <div class="w-[48%]">
                        <p class="text-zinc-900 text-3xl font-extrabold uppercase ">
                            Kompaniyani ro'yxatdan o'tkazing va 1000 dan ziyod mijozlarga ega bo'ling</p>
                        <div class="w-40 h-0.5 bg-black/20 mt-5"></div>
                        <div class="grid grid-cols-2 gap-x-10 gap-y-14 mt-5">
                            <div v-for="item, index in statistics" :key="index">
                                <p class="text-emerald-600 text-opacity-95 text-3xl font-extrabold leading-10">{{ item.count
                                }}
                                </p>
                                <div class="text-zinc-900 text-base font-semibold leading-[25px]">{{ item.title }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[48%]">
                        <div class="bg-white h-full rounded-3xl p-5 w-fit mx-auto">
                            <!-- header started -->
                            <div class="flex items-center justify-between gap-10">
                                <div class="flex items-center justify-center gap-1">
                                    <div class="h-8 w-8 bg-emerald-600 relative text-white rounded-full">
                                        <p
                                            class="absolute  cursor-pointer flex items-center top-0 left-0 bottom-0 right-0 justify-center m-auto">
                                            1</p>
                                    </div>
                                    <div class="text-gray-500 text-xs font-medium leading-snug">Shaxsiy ma’lumotlari</div>
                                </div>
                                <div class="flex items-center justify-center gap-1">
                                    <div class="h-8 w-8 bg-[#D8E0E2] relative text-gray-500 rounded-full">
                                        <p
                                            class="absolute  cursor-pointer flex items-center top-0 left-0 bottom-0 right-0 justify-center m-auto">
                                            2</p>
                                    </div>
                                    <div class="text-gray-500 text-xs font-medium leading-snug">Kompaniya ma’lumotlari</div>
                                </div>
                            </div>
                            <!-- header ended -->
                            <div class="text-black text-center mt-3 text-lg font-extrabold leading-snug">Ro’yxatdan o’tish
                            </div>
                            <div>
                                <div class="text-zinc-900 text-sm font-medium mb-1 leading-snug">Ism</div>
                                <BaseInput customStyle="bg-stone-200 rounded-[10px]" placeholder="" />
                                <div class="text-zinc-900 text-sm font-medium mb-1 mt-2 leading-snug">Telefon raqam</div>
                                <BaseInput customStyle="rounded-[10px] bg-stone-200" placeholder="" />
                                <div class="text-zinc-900 text-sm font-medium mb-1 mt-2 leading-snug">Davlat</div>
                                <BaseSelect :options="countries" width="w-full bg-stone-200" />
                                <div class="text-zinc-900 text-sm font-medium mb-1 mt-2 leading-snug">Hudud</div>
                                <BaseSelect :options="countries" width="w-full bg-stone-200" />
                                <div class="text-zinc-900 text-sm font-medium mb-1 mt-2 leading-snug">Shahar/tuman</div>
                                <BaseSelect :options="countries" width="w-full bg-stone-200" />
                            </div>
                            <div class="flex justify-end mt-3">
                                <BaseButton color="green" @click="getInfoUserFn('secondStep')"
                                    class="select-none py-2 rounded-lg w-fit px-5" label="Davom etish" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>