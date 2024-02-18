<script setup lang="ts">
import { ref } from 'vue'
const defaultOpen = ref<number>(1)
const answer = ref(null)
function openAnswer(id: number) {
    if (defaultOpen.value !== id) {
        defaultOpen.value = id
    }
    else {
        defaultOpen.value = 0
    }
    console.log(answer)
}

const faqs = [
    {
        id: 1,
        question: 'Lorem ipsum dolor sit amet Lorem ipsum dolor',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi numquam fugit aut praesentium alias aperiam mollitia, perferendis enim eaque ad earum ratione suscipit voluptatum sit, tenetur obcaecati laboriosam quaerat dolores beatae illum reprehenderit eos minima!'
    },
    {
        id: 2,
        question: 'Lorem ipsum dolor sit amet Lorem ipsum dolor',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi numquam fugit aut praesentium alias aperiam mollitia, perferendis enim eaque ad earum ratione suscipit voluptatum sit, tenetur obcaecati laboriosam quaerat dolores beatae illum reprehenderit eos minima!'
    },
    {
        id: 3,
        question: 'Lorem ipsum dolor sit amet Lorem ipsum dolor',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi numquam fugit aut praesentium alias aperiam mollitia, perferendis enim eaque ad earum ratione suscipit voluptatum sit, tenetur obcaecati laboriosam quaerat dolores beatae illum reprehenderit eos minima!'
    },
    {
        id: 4,
        question: 'Lorem ipsum dolor sit amet Lorem ipsum dolor',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi numquam fugit aut praesentium alias aperiam mollitia, perferendis enim eaque ad earum ratione suscipit voluptatum sit, tenetur obcaecati laboriosam quaerat dolores beatae illum reprehenderit eos minima!'
    },
    {
        id: 5,
        question: 'Lorem ipsum dolor sit amet Lorem ipsum dolor',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi numquam fugit aut praesentium alias aperiam mollitia, perferendis enim eaque ad earum ratione suscipit voluptatum sit, tenetur obcaecati laboriosam quaerat dolores beatae illum reprehenderit eos minima!'
    },
    {
        id: 6,
        question: 'Lorem ipsum dolor sit amet Lorem ipsum dolor',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi numquam fugit aut praesentium alias aperiam mollitia, perferendis enim eaque ad earum ratione suscipit voluptatum sit, tenetur obcaecati laboriosam quaerat dolores beatae illum reprehenderit eos minima!'
    }
]
</script>
<template>
    <div class="container mx-auto lg:px-20">
        <div class="mt-10">
            <p class="text-slate-800 text-4xl font-extrabold leading-[50px]">Ko‘p so‘raladigan savollarga javoblar</p>
            <p class="text-justify text-zinc-900 text-lg font-semibold leading-[30px]">Lorem ipsum dolor sit
                amet consectetur. Vulputate amet id consequat vel.Lorem ipsum dolor sit amet consectetur. Vulputate amet id
                consequat vel.Lorem ipsum dolor sit amet consectetur. Vulputate amet id consequat vel.</p>
        </div>
        <div class="mt-10">
            <div v-for="item in faqs" class="mt-5" :key="item.id">
                <div class="bg-white rounded-xl p-3 flex items-center justify-between cursor-pointer select-none"
                    @click="openAnswer(item.id)">
                    <p class="text-base text-zinc-900 font-semibold leading-6 w-[95%]">{{ item.question }}</p>
                    <div class="w-[5%]">
                        <div class="bg-emerald-600 rounded-md p-1 w-fit">
                            <BaseIcon name="plus" class="w-4 h-4" />
                        </div>
                    </div>
                </div>
                <Transition>
                    <p ref="answer" class="text-zinc-900 text-[15px] font-medium leading-5 mt-2"
                        v-if="defaultOpen == item.id">{{
                            item.answer }}</p>
                </Transition>

            </div>

        </div>
    </div>
</template>
<style scoped>
.v-enter-active {
    transition: all 2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    height: 0;
}
</style>