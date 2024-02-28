<script setup lang="ts">
import BaseProductCard from 'src/components/BaseProductCard/index.vue'
import BaseEnterpriceCard from 'src/components/BaseEnterpriceCard/index.vue'
import BaseSelect from 'src/components/BaseSelect/index.vue'
import BaseInput from 'src/components/BaseInput/index.vue'
import BaseButton from 'src/components/BaseButton/index.vue'
import { ref } from 'vue';
const tab = ref<string>('mails')

const companies =
{
  img: '/images/fartrade-img.png',
  logo: '/images/company-logo.png',
  name: 'Shimano Organization',
  subtitle: '5 u-yildan beri servisda',
  rate: '4.5'
}

const products =
{
  img: 'images/fartrade-img.png',
  price: '2 105 000',
  title: 'Kir yuvish mashinasi yarim avtomatik Artel TG110FP…',
  company: 'Shimano Organization',
  star: 23
}
const countries = [
  {
    id: 1,
    title: 'Uzbekistan'
  },
  {
    id: 2,
    title: 'USA'
  },
  {
    id: 3,
    title: 'Germany'
  },
  {
    id: 4,
    title: 'Russia'
  }
]
</script>
<template>
  <div class="container mx-auto lg:px-20 pt-9 pb-32">
    <div class="flex flex-wrap sm:flex-nowrap gap-8">
      <div class="lg:w-[20%] sm:w-1/3 w-full h-auto">
        <q-tab-panels v-model="tab" class="bg-[#E7DFE2]">
          <q-tab-panel class="p-0" name="mails">
            <div class="bg-white rounded-[20px] p-[25px]">
              <div class="pb-[15px]">
                <p class="pb-2 text-zinc-900 text-sm font-semibold leading-[18px]">Davlat</p>
                <BaseSelect :options="countries" width="w-full bg-stone-50" />
              </div>
              <div class="pb-[15px]">
                <p class="pb-2 text-zinc-900 text-sm font-semibold leading-[18px]">Viloyat / Hudud / Shahar</p>
                <BaseSelect :options="countries" width="w-full bg-stone-50" />
              </div>
              <div class="pb-[15px]">
                <p class="pb-2 text-zinc-900 text-sm font-semibold leading-[18px]">Faoliyat</p>
                <BaseSelect :options="countries" width="w-full bg-stone-50" />
              </div>
              <div class="pb-[15px]">
                <p class="pb-2 text-zinc-900 text-sm font-semibold leading-[18px]">Yo'nalish</p>
                <BaseSelect :options="countries" width="w-full bg-stone-50" />
              </div>
              <div class="pb-[15px]">
                <p class="pb-2 text-zinc-900 text-sm font-semibold leading-[18px]">Kalit so'z</p>
                <BaseInput custom-style="w-full bg-stone-50 rounded-[10px]" />
              </div>
              <BaseButton color="green" label="Izlash" class="py-[13px]" />
            </div>
          </q-tab-panel>
          <q-tab-panel class="p-0" name="alarms">
            <div class="bg-white rounded-[20px] p-[25px]">
              <div class="pb-[15px]">
                <p class="pb-2 text-zinc-900 text-sm font-semibold leading-[18px]">Davlat</p>
                <BaseSelect :options="countries" width="w-full bg-stone-50" />
              </div>
              <div class="pb-[15px]">
                <p class="pb-2 text-zinc-900 text-sm font-semibold leading-[18px]">Viloyat / Hudud / Shahar</p>
                <BaseSelect :options="countries" width="w-full bg-stone-50" />
              </div>
              <div class="pb-[15px]">
                <p class="pb-2 text-zinc-900 text-sm font-semibold leading-[18px]">Faoliyat</p>
                <BaseSelect :options="countries" width="w-full bg-stone-50" />
              </div>
              <div class="pb-[15px]">
                <p class="pb-2 text-zinc-900 text-sm font-semibold leading-[18px]">Yo'nalish</p>
                <BaseSelect :options="countries" width="w-full bg-stone-50" />
              </div>
              <div class="pb-[15px]">
                <p class="pb-2 text-zinc-900 text-sm font-semibold leading-[18px]">Kalit so'z</p>
                <BaseInput custom-style="w-full bg-stone-50 rounded-[10px]" />
              </div>
              <BaseButton color="green" label="Izlash" class="py-[13px]" />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
      <div class="lg:w-3/4 sm:w-2/3 w-full">
        <q-tabs active-color="#1B9468F2" indicator-color="none" v-model="tab" align="justify"
          class="q-mb-lg flex justify-around rounded-[20px] bg-white">
          <q-tab class="text-zinc-900  opacity-50 md:text-base 2xl:text-[21px] font-semibold leading-[30px] py-3" name="mails">Korxonalar
            512</q-tab>
          <q-tab class="text-zinc-900  opacity-50 md:text-base 2xl:text-[21px] font-semibold leading-[30px] py-3" name="alarms">Maxsulotlar
            100
            526</q-tab>
        </q-tabs>

        <div>
          <q-tab-panels v-model="tab" transition-prev="scale" transition-next="scale" class="bg-[#E7DFE2]">
            <q-tab-panel class="p-0" name="mails">
              <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-[15px]">
                <BaseEnterpriceCard v-for="item in 6" :key="item" :card-data="companies" />
              </div>
            </q-tab-panel>

            <q-tab-panel class="p-0" name="alarms">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px]">
                <BaseProductCard v-for="item in 8" :key="item" :card-data="products" />
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>