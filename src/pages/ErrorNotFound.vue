<template>
  <img class="absolute top-[100px] left-[80px]" src="/images/some-stat1.png" alt="pic">
  <img class="absolute bottom-[250.66px] left-[180.22px]" src="/images/some-stat2.png" alt="pic">
  <img class="absolute top-[270.66px] right-[110.22px]" src="/images/some-stat3.png" alt="pic">
  <img class="absolute bottom-[100.66px] right-[80.22px]" src="/images/some-stat4.png" alt="pic">

  <div class="fullscreen bg-nero text-white text-center q-pa-md flex flex-center flex-col font-medium">
    <img :src="greenLogo" alt="FARSU logo">


      <p class="text-slate-900 text-3xl mt-[40px] mb-2">Siz izlayotgan sahifa topilmadi(</p>
      <p class="text-gray-500 text-base">Siz izlayotgan sahifa topilmadi(</p>

    <img :src="error404" alt="Not found">

    <q-btn
    class="q-mt-xl bg-emerald-600 px-7 py-4 rounded-[43px]"
    text-color="white"
    unelevated
    to="/"
    label="Bosh sahifaga qaytish"
    no-caps
    />
  </div>
</template>

<script setup lang="ts">
import greenLogo from '/svgs/green-logo.svg'
import error404 from '/svgs/404-error.svg'

</script>
