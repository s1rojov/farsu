<template>
  <img class="absolute top-[150px] left-[80px]" src="/images/some-stat1.png" alt="pic">
  <img class="absolute bottom-[150.66px] left-[180.22px]" src="/images/some-stat2.png" alt="pic">
  <img class="absolute top-[150.66px] right-[110.22px]" src="/images/some-stat3.png" alt="pic">
  <img class="absolute bottom-[150.66px] right-[80.22px]" src="/images/some-stat4.png" alt="pic">

  <div class="fullscreen bg-nero text-white text-center q-pa-md flex flex-center flex-col font-medium">
    <img :src="greenLogo" alt="">


      <p class="text-[#1D3448] text-[30px] mt-[40px]">Siz izlayotgan sahifa topilmadi(</p>
      <p class="text-[#78818A] text-[15px]">Siz izlayotgan sahifa topilmadi(</p>

    <img :src="error404" alt="">
    
    <q-btn
    class="q-mt-xl bg-[#1B9468] w-[230px] h-[63px] rounded-[43px]"
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
