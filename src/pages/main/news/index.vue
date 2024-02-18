<script setup lang="ts">
</script>
<template>
  <div class="container mx-auto lg:px-20 pt-9">
    <p class="title">Yangilik va e'lonlar</p>
    <div class="pt-9 grid grid-cols-2 ">
      <div class="flex flex-nowrap gap-5 mb-10" v-for="index in 8" :key="index">
        <img src="/images/fartrade-img.png" alt=""
          class="w-[238px] h-[153px] object-cover overflow-hidden rounded-[20px]">
        <div class="w-3/5 relative">
          <p class="flex gap-2 items-center text-slate-800 text-base font-medium pb-2">
            <BaseIcon name="data" /><span>16:15 / 16.11.2023</span>
          </p>
          <p class="text-zinc-900 2xl:text-lg text-sm font-extrabold leading-6">Lorem ipsum dolor sit amet consectetur.
            Turpis
            fermentum purus egestas maecenas mi lectus egestas cursus. Placerat lorem.</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="pt-7 flex gap-7 flex-nowrap">
      <div class="flex flex-col w-[24%] " v-for="index in 4" :key="index">
        <img src="/images/fartrade-img.png" class="w-full object-cover overflow-hidden rounded-[20px]">
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

.line {
  @apply absolute border border-black border-opacity-20 w-full h-0 bottom-0
}
</style>