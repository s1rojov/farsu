<script setup lang="ts">
import BaseIcon from 'src/components/BaseIcon/index.vue'
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="px-6 pt-4 pb-10 bg-white rounded-[20px] w-full">
    <div class="pb-4 border-b border-black border-opacity-20 w-full flex flex-nowrap justify-between items-center">
      <div class="flex items-center gap-[2px]">
        <img :src="props.cardData.logo" alt="" class="w-10 h-10 rounded-full overflow-hidden object-cover">
        <div>
          <p class="text-emerald-600 2xl:text-base text-sm font-extrabold leading-tight">{{ props.cardData.name }}</p>
          <p class="text-gray-500 2xl:text-sm text-xs font-medium leading">{{ props.cardData.subname }}</p>
        </div>
      </div>
      <button
        class="py-[9px] px-[26px] text-white text-xs font-semibold leading-tight rounded-[35px] bg-opacity-95 bg-emerald-600">Batafsil</button>
    </div>
    <div class="pt-[14px] flex justify-between">
      <div class="w-[47%]">
        <img :src="props.cardData.image1" alt="" class="product-img">
        <p class="flex items-start py-[7px]">
          <BaseIcon name="star" class="w-[14px] h-[14px]" /><span
            class="txet-gray-500 text-xs font-medium leading-[15px]">{{ props.cardData.star }}</span>
        </p>
        <p class="about">{{ props.cardData.about }}</p>
        <p class="price">{{ props.cardData.price }}</p>
        <p class="booking">Buyurtmalar soni: <span>{{ props.cardData.booking }}</span> dona</p>
      </div>
      <div class="w-[47%]">
        <img :src="props.cardData.image2" alt="" class="product-img">
        <p class="flex items-start py-[7px]">
          <BaseIcon name="star" class="w-[14px] h-[14px]" /><span
            class="txet-gray-500 text-xs font-medium leading-[15px]">{{ props.cardData.star2 }}</span>
        </p>
        <p class="about">{{ props.cardData.about2 }}</p>
        <p class="price">{{ props.cardData.price2 }}</p>
        <p class="booking">Buyurtmalar soni: <span>{{ props.cardData.booking2 }}</span> dona</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-img {
  @apply w-full lg:h-1/2 2xl:h-[65%] rounded-2xl object-cover overflow-hidden
}

.about {
  @apply text-gray-500 text-sm font-semibold leading-[18px]
}

.price {
  @apply text-emerald-600 text-base font-extrabold leading-[18px] py-2
}

.booking {
  @apply text-gray-500 text-xs font-normal leading-[18px]
}
</style>