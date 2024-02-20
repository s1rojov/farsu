<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from 'src/components/BaseButton/index.vue'
import CategoryCard from 'src/components/CategoryCard/index.vue'
import BaseAdvertisingCard from 'src/components/BaseAdvertisingCard/index.vue'
const objInfo = {
    iconName: 'industry',
    label: 'Sanoat',
    path: '/',
    count: 12
}
const advertisings = {
    logo: '/images/firma.png',
    name: '«Qizilqumsement» AJ',
    subname: 'Xorijiy xom -ashyolar',
    image1: '/images/product.png',
    image2: '/images/product.png',
    star: '5.0',
    about: '15W 10W simsiz portativ mobil telefon...',
    price: '1.500.00$',
    booking: '10',
    star2: '5.0',
    about2: '15W 10W simsiz portativ mobil telefon...',
    price2: '1.500.00$',
    booking2: '10'
}
const slide = ref<number>(1)
</script>
<template>
    <div class="lg:px-20 container mx-auto pt-8">
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
        <div class="bg-white rounded-3xl flex items-center justify-between py-4 px-5 mt-10">
            <div class="flex items-center justify-start gap-5">
                <img src="images/fartrade.png" alt="">
                <div>
                    <p class="text-emerald-600 text-2xl uppercase leading-6 font-semibold">fartade mchj</p>
                    <p class="text-zinc-900 font-semibold text-base">Bizninng korxonamiz haqida batafsil ma‘lumotga ega
                        bo’ling
                    </p>
                </div>
            </div>
            <BaseButton color="green" class="py-3 px-20" label="Batafsil" />
        </div>

        <!-- Categories started -->
        <div class="mt-16">
            <div class="text-slate-800 text-[40px] font-extrabold leading-[50px]">Bo’limlarni turlari</div>
            <div class="grid grid-cols-4 gap-5 mt-6">
                <CategoryCard v-for="item in 8" :key="item" :cardData="objInfo" />
            </div>
        </div>
        <!-- Categories ended -->
        <!-- statistic section started -->
        <div class="bg-[#1B9468]/95 w-full h-auto rounded-3xl mt-16 relative px-20">
            <div class="flex items-center justify-between py-5">
                <div class="z-[1] w-1/2 pr-5">
                    <p class="text-white text-5xl font-extrabold uppercase leading-[50px]">Biz raqamlarda</p>
                    <p class="text-white text-base font-medium leading-[30px]">Lorem ipsum dolor sit amet consectetur.
                        Pretium urna mattis sagittis vulputate aenean. Quis vel faucibus varius orci adipiscing proin nulla
                        ultricies. Eget faucibus augue volutpat tempus mi et ullamcorper vivamus elementum. Est felis urna
                        at leo.</p>
                </div>
                <div class=" w-1/2">
                    <div class="flex flex-wrap w-full">
                        <div class="w-1/2 py-10 px-4 text-center" v-for="item in 4" :key="item"
                            :class="{ 'border border-t-0 border-l-0': item == 1, 'border border-b-0 border-r-0': item == 4, }">
                            <p class="text-white text-4xl font-extrabold leading-10">2 500</p>
                            <p class=" text-white text-base font-semibold leading-[25px]">Roʻyxatdan oʻtgan
                                tadbirkorlar (Oʻzbekiston)</p>
                        </div>
                    </div>
                </div>

            </div>
            <img src="images/statistic.png" class="absolute w-[30%] bottom-0" alt="error">
        </div>
        <!-- statistic section ended -->
        <!-- advertising section started -->
        <div class="mt-16">
            <div class="text-slate-800 text-[40px] font-extrabold leading-[50px] pb-9">E’lon va reklamalar</div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                <BaseAdvertisingCard v-for="item in 6" :key="item" :card-data="advertisings" />
            </div>
        </div>
    </div>
</template>
  

  