<script setup lang="ts">
import BaseInput from 'src/components/BaseInput/index.vue'
import { useHeader } from './composable';
const { socials, navbarItems } = useHeader()
function test() {
    console.log('search')
}
</script>
<template>
    <!-- top header started -->
    <div class="w-full bg-white">
        <div class="mx-auto container lg:px-20 flex items-center justify-between py-3">
            <div class="flex items-center gap-2">
                <BaseIcon name="phone" class="w-[18px] h-[18px] text-[#1B9468F2]" />
                <div class="text-zinc-900 text-base font-semibold leading-tight">+9989 (90) 123 45 56</div>
            </div>
            <div class="w-[1px] h-4 bg-gray-300"></div>
            <div class="flex items-center gap-2">
                <BaseIcon name="mail" class="w-[18px] h-[18px] text-[#1B9468F2]" />
                <div class="text-zinc-900 text-base font-semibold leading-tight">info@farsumchj.uz</div>
            </div>
            <div class="w-[1px] h-4 bg-gray-300"></div>
            <div class="flex items-center gap-2">
                <div class="flex items-center gap-1">
                    <BaseIcon v-for="item in socials" :key="item" :name="item" class="w-[18px] h-[18px]" />
                </div>
                <div class="text-zinc-900 text-base font-semibold leading-tight">Bizning ijtimoiy sahifalarimiz</div>
            </div>
            <div class="w-[1px] h-4 bg-gray-300"></div>
            <div class="flex items-center gap-2">
                <BaseIcon name="uzb" class="w-[18px] h-3" />
                <div class="text-zinc-900 text-base font-semibold leading-tight">Uzbek tili</div>
                <BaseIcon name="down" class="w-3 h-3" />
            </div>
        </div>
    </div>
    <!-- top header ended -->
    <!-- bottom header started -->
    <div class="bg-emerald-600 w-full">
        <div class="mx-auto lg:px-20 container pt-3 pb-5">
            <div class="flex items-center justify-between">
                <router-link to="/">
                    <img src="images/logo.png" alt="logo" class="cursor-pointer">
                </router-link>
                <BaseInput placeholder="Izlash" :isSearch="true" class="w-1/2" @search="test" />
                <div class="flex items-center gap-2 cursor-pointer">
                    <BaseIcon name="message" class="w-4 h-4" />
                    <div class="text-white text-base leading-[15px]">Xabar</div>
                </div>
                <div class="flex items-center gap-2 cursor-pointer">
                    <BaseIcon name="currency" class="w-5 h-5" />
                    <div class="text-white text-base leading-[15px]">Valyuta-uzs</div>
                </div>
            </div>
            <div class="bg-white flex items-center justify-between px-7 py-2 rounded-3xl mt-3">
                <div v-for="item, index in navbarItems" :key="index">
                    <router-link :to="item.route">
                        {{ item.title }}
                    </router-link>
                </div>

            </div>
        </div>
    </div>
    <!-- bottom header ended -->
</template>