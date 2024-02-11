<script setup lang="ts">
import { useHeader } from './composable';
const { socials } = useHeader()
</script>
<template>
    <!-- top header started -->
    <div class="mx-auto container lg:px-20">
        <div class="flex items-center justify-between py-3">
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
        <div class="mx-auto lg:px-20 container py-3">
            <img src="images/logo.png" alt="">
        </div>
    </div>
    <!-- bottom header ended -->
</template>