<script setup lang="ts">
interface News {
  image: string,
  data: string,
  title: string
}
import BaseNewsCard from 'src/components/BaseNewsCard/index.vue'
const newscard: News[] = [
  {
    image: '/images/fartrade-img.png',
    data: '16:15 / 16.11.2023',
    title: 'Lorem ipsum dolor sit amet consectetur Turpis fermentum purus egestas maecenas mi lectus egestas cursus. Placerat lorem.'
  },
  {
    image: '/images/fartrade-img.png',
    data: '16:15 / 16.11.2023',
    title: 'Lorem ipsum dolor sit amet consectetur Turpis fermentum purus egestas maecenas mi lectus egestas cursus. Placerat lorem.'
  },
  {
    image: '/images/fartrade-img.png',
    data: '16:15 / 16.11.2023',
    title: 'Lorem ipsum dolor sit amet consectetur Turpis fermentum purus egestas maecenas mi lectus egestas cursus. Placerat lorem.'
  },
  {
    image: '/images/fartrade-img.png',
    data: '16:15 / 16.11.2023',
    title: 'Lorem ipsum dolor sit amet consectetur Turpis fermentum purus egestas maecenas mi lectus egestas cursus. Placerat lorem.'
  },
  {
    image: '/images/fartrade-img.png',
    data: '16:15 / 16.11.2023',
    title: 'Lorem ipsum dolor sit amet consectetur Turpis fermentum purus egestas maecenas mi lectus egestas cursus. Placerat lorem.'
  },
  {
    image: '/images/fartrade-img.png',
    data: '16:15 / 16.11.2023',
    title: 'Lorem ipsum dolor sit amet consectetur Turpis fermentum purus egestas maecenas mi lectus egestas cursus. Placerat lorem.'
  },
  {
    image: '/images/fartrade-img.png',
    data: '16:15 / 16.11.2023',
    title: 'Lorem ipsum dolor sit amet consectetur Turpis fermentum purus egestas maecenas mi lectus egestas cursus. Placerat lorem.'
  },
  {
    image: '/images/fartrade-img.png',
    data: '16:15 / 16.11.2023',
    title: 'Lorem ipsum dolor sit amet consectetur Turpis fermentum purus egestas maecenas mi lectus egestas cursus. Placerat lorem.'
  }
]
</script>
<template>
  <div class="container mx-auto lg:px-20 pt-9">
    <p class="title">Yangilik va e'lonlar</p>
    <div class="pt-9 grid grid-cols-2">
      <div v-for="(news, index) in newscard" :key="index">
        <BaseNewsCard :card-data="news"/>
      </div>
    </div>
    <div class="pt-7 flex gap-7 flex-nowrap">
      <div class="flex flex-col w-[24%] " v-for="index in 4" :key="index">
        <img src="/images/fartrade-img.png" class="w-full h-1/2 object-cover overflow-hidden rounded-[20px]">
        <p class="flex gap-2 items-center text-slate-800 text-base font-medium pt-1 pb-2">
          <BaseIcon name="data" /><span>16:15 / 16.11.2023</span>
        </p>
        <p class="text-zinc-900 2xl:text-lg text-sm font-extrabold leading-6">Lorem ipsum dolor sit amet consectetur.
          Turpis
          fermentum purus egestas maecenas mi lectus egestas cursus. Placerat lorem.</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  @apply text-slate-800 text-[40px] font-extrabold leading-[50px]
}
</style>