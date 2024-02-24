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
  <div class="px-[10px] py-[18px] rounded-[20px] bg-white h-auto">
    <div class="w-full h-[211px] object-cover">
      <img :src="props.cardData.img" alt="" class="h-full w-full  object-cover overflow-hidden rounded-2xl">
    </div>
    <div>
      <p class="text-gray-800 text-base font-bold leading-relaxed pt-[18px] pb-[6px]"><span>{{ props.cardData.price }}</span> so'm</p>
      <p class="text-zinc-500 text-sm leading-tight font-normal">{{ props.cardData.title }}</p>
      <p class="text-emerald-600 text-opacity-95 text-xs font-medium leading-4 pt-[13px] pb-[18px]">{{ props.cardData.company }}
      </p>
      <div class="flex items-end gap-[2px]">
        <BaseIcon name="star" class="text-orange-400 w-4 h-4 object-cover" v-for="index in 5" :key="index" />
        <p class="text-zinc-500 text-xs font-medium leading-[14px]"><span>{{ props.cardData.star }}</span></p>
      </div>
      <div class="pt-[19px] flex justify-between w-full">
        <BaseButton color="green" label="So'rov yuborish"
          class="py-2 rounded-[9px] w-[83%] flex items-center justify-center" />
        <BaseIcon name="like" class=" bg-emerald-600 w-[15%] h-auto rounded-[9px] p-2 cursor-pointer" />
      </div>
    </div>
  </div>
</template>