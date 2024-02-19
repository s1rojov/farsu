<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    default() {
      return {
        message: 'Error'
      }
    }
  },
})
</script>
<template>
  <div>
    <div class="flex flex-nowrap gap-5 mb-10">
      <img :src="props.cardData.image" alt="" class="w-1/3 h-full object-cover overflow-hidden rounded-[20px]">
      <div class="w-3/5 relative border-b border-black border-opacity-20 pb-11">
        <p class="flex gap-2 items-center text-slate-800 text-base font-medium pb-2">
          <BaseIcon name="data" /><span>{{ props.cardData.data }}</span>
        </p>
        <p class="text-zinc-900 2xl:text-lg text-sm font-extrabold leading-6">{{ props.cardData.title }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>