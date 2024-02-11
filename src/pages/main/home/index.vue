<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from 'src/components/BaseButton/index.vue'

const slide = ref<number>(1)
</script>
<template>
    <div class="lg:px-20 container mx-auto pt-6">
        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-3">
                <q-carousel animated v-model="slide" arrows infinite swipeable :autoplay="3000"
                    class="rounded-3xl h-[60dvh]">
                    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                </q-carousel>
            </div>
            <div class="col-span-1 flex flex-row justify-between h-[60dvh]">
                <div class=" bg-white p-4 w-full rounded-3xl h-[42%]">
                    <div class="flex items-center justify-start gap-2">
                        <div class="w-fit p-2 bg-emerald-50 rounded-full">
                            <BaseIcon name="user" class="w-5 h-5" />
                        </div>
                        <p>Xush kelibsiz</p>
                    </div>
                    <hr class="border-t border-gray-600 border-dashed my-2.5">
                    <BaseButton color="green" label="Ro'yhatdan o'tish" class="py-1.5" />
                    <BaseButton color="white" label="Kabinetga kirish" class="py-1.5 mt-2" />
                </div>
                <div class="bg-white rounded-3xl w-full h-[55%] mt-[3%]">
                    <q-carousel animated v-model="slide" arrows infinite swipeable :autoplay="5000"
                        class="rounded-3xl h-full">
                        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                    </q-carousel>
                </div>
            </div>

        </div>
    </div>
</template>
  

  