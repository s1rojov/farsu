<script setup lang="ts">
import BaseIcon from 'src/components/BaseIcon/index.vue'
import BaseButton from 'src/components/BaseButton/index.vue'
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="rounded-[20px] bg-white 2xl:p-5 p-3">
    <img :src="props.cardData.img" alt="" class="w-full rounded-2xl overflow-hidden object-cover h-1/2">
    <div class="flex items-center gap-[15px]">
      <img :src="props.cardData.logo" alt="" class="w-12 h-12 rounded-full object-cover overflow-hidden">
      <div class="pt-[15px] pb-7">
        <p class="text-zinc-900 2xl:text-lg  font-extrabold leading-tight">{{ props.cardData.name }}</p>
        <p class="text-zinc-900 2xl:text-xs  font-normal leading-[15px] flex gap-1">{{
          props.cardData.subtitle }}
          <BaseIcon name="star" class="w-[14px] h-[14px] object-cover text-[#E9D410]" /><span class="font-semibold">{{
            props.cardData.rate }}</span>/5
        </p>
      </div>
      <BaseButton color="green" label="Batafsil" class="py-[10px] w-full" />
    </div>
  </div>
</template>
<style scoped></style>