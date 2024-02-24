<script setup lang="ts">
import { useCabinetLayoutFn } from './composable';
import BaseIcon from 'src/components/BaseIcon/index.vue'
const { sidebarItems, clickedCompanyItem, isOpenCompanyItems, goRoute } = useCabinetLayoutFn()
</script>
<template>
    <div class="flex w-screen h-screen overflow-hidden">
        <div class="bg-emerald-600 w-[17%] h-full">
            <!-- <img src="images/logo.png" class="mx-auto w-1/2 mt-5" alt="error"> -->
            <BaseIcon name="logo" class="mx-auto w-1/2 mt-5" />
            <div class="mt-5">
                <div v-for="item, index in sidebarItems" :key="index" class="select-none cursor-pointer ">
                    <div class="flex  items-center justify-between transition pl-6 pr-4 py-4 hover:bg-black/5"
                        @click="clickedCompanyItem(item)">
                        <div class="flex items-center justify-start gap-3">
                            <BaseIcon :name="item.icon" class="w-5 h-5 text-white" />
                            <span class="text-base text-white">{{ item.title }}</span>
                        </div>
                        <BaseIcon v-if="item.children?.length" name="down" class="w-4 h-4 text-white"
                            :class="{ 'rotate-180': isOpenCompanyItems }" />
                    </div>
                    <div v-if="isOpenCompanyItems">
                        <div v-for="subItem, subIndex in item.children" :key="subIndex" class="pl-14"
                            @click="goRoute(subItem.path)">
                            <p class="py-2 text-white font-normal transition text-sm">
                                {{ subItem.title }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[83%] h-full">
            <!-- header started -->
            <div class="w-full bg-white flex items-center justify-end m-auto top-0 bottom-0 right-0 left-0 px-7 h-[9vh]">
                <div class="flex items-center justify-end gap-5">
                    <div class="flex items-center gap-2 cursor-pointer select-none">
                        <img src="images/company-logo.png" class="w-10 h-10 rounded-full" alt="company-logo">
                        <div>
                            <p class="text-zinc-900 text-sm font-medium leading-3">Komaniya kabineti</p>
                            <p class="text-gray-500 text-xs font-medium leading-[18px]">MK Exspress Cargo Ltd</p>
                        </div>
                        <BaseIcon name="down" class="w-4 h-4" />
                    </div>
                </div>
            </div>
            <!-- header ended -->
            <div class="overflow-y-scroll h-[91vh] scrollbarActive">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style scoped>
.scrollbarActive::-webkit-scrollbar {
    @apply ease-in duration-300;
    width: 2px;
    height: 0;
    /* display: none; */
    opacity: 0;
}

.scrollbarActive::-webkit-scrollbar-track {
    @apply bg-inherit opacity-0;
}

.scrollbarActive::-webkit-scrollbar-thumb {
    @apply bg-slate-400 hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}
</style>