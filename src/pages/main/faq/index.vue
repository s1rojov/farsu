<script setup lang="ts">
import { ref } from 'vue'
const defaultOpen = ref<number>(1)
function openAnswer(id: number) {
    if (defaultOpen.value !== id) {
        defaultOpen.value = id
    }
    else {
        defaultOpen.value = 0
    }
}
</script>
<template>
    <div class="container mx-auto lg:px-20">
        <div class="grid grid-cols-2 gap-5 mt-10">
            <div v-for="item in 6" :key="item">
                <div class="bg-white rounded-xl p-3 flex items-center justify-between cursor-pointer select-none"
                    @click="openAnswer(item)">
                    <p class="text-base text-zinc-900 font-semibold leading-6 w-[95%]">Lorem ipsum dolor sit amet Lorem
                        ipsum dolor
                    </p>
                    <div class="w-[5%]">
                        <div class="bg-emerald-600 rounded-md p-1 w-fit">
                            <BaseIcon name="plus" class="w-4 h-4" />
                        </div>
                    </div>
                </div>
                <Transition>
                    <p class="text-zinc-900 text-[15px] font-medium leading-5 mt-2" v-if="defaultOpen == item">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi numquam fugit aut praesentium alias
                        aperiam
                        mollitia, perferendis enim eaque ad earum ratione suscipit voluptatum sit, tenetur obcaecati
                        laboriosam
                        quaerat dolores beatae illum reprehenderit eos minima!
                    </p>
                </Transition>

            </div>
        </div>
    </div>
</template>
<style scoped>
.v-enter-active {
    transition: all 1s ease;
}

.v-enter-from,
.v-leave-to {
    height: 0;
}
</style>