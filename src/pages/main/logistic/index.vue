<script setup lang="ts">
import BaseSelect from 'src/components/BaseSelect/index.vue'
import BaseButton from 'src/components/BaseButton/index.vue'
import BaseIcon from 'src/components/BaseIcon/index.vue'
import BaseModal from 'src/components/BaseModal/index.vue'
import BaseInput from 'src/components/BaseInput/index.vue'
import { ref } from 'vue'
const slide = ref<number>(1);
const toolbar = ref<boolean>(false)
const autoplay = ref<boolean>(true);
// const model: Ref<string | null> = ref(null);
const countries = [
  {
    id: 1,
    title: 'Toshkent shahri'
  },
  {
    id: 2,
    title: 'Toshkent viloyati'
  },
  {
    id: 3,
    title: 'Namangan viloyati'
  },
  {
    id: 3,
    title: 'Farg\'ona viloyati'
  },
  {
    id: 3,
    title: 'Samarqand viloyati'
  },
  {
    id: 3,
    title: 'Qashqadaryo viloyati'
  }
]
function toggleBtn() {
  toolbar.value = !toolbar.value
}
interface Car {
  id: number;
  name: string;
  image: string;
}

// const showModal = ref(false);
const name = ref('');
const phone = ref('');
const selectedCar = ref<number>(0);
const cars: Car[] = [
  {
    id: 1,
    name: 'Labo',
    image: '/images/labo.png'
  },
  {
    id: 2,
    name: 'Isuzu',
    image: '/images/isuzu.png'
  },
  {
    id: 3,
    name: 'Truck',
    image: '/images/truck.png'
  }
]
const submitForm = () => {
  const car = cars.find(car => car.id === selectedCar.value);
  if (car) {
    const formData = {
      name: name.value,
      phone: phone.value,
      selectedCar: car.name
    };
    console.log(formData);
  }
  toggleBtn();
  resetForm();
};
const selectCar = (car: Car) => {
  selectedCar.value = car.id;
};
const resetForm = () => {
  name.value = '';
  phone.value = '';
  selectedCar.value = 0;
};
</script>
<template>
  <div class="container mx-auto lg:px-20 pt-8 pb-36">
    <div class="q-pa-md relative p-0">
      <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
        transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true"
        class=" overflow-hidden rounded-[20px]">
        <q-carousel-slide :name="1" img-src="/images/logistic.png" />
        <q-carousel-slide :name="2" img-src="/images/logistic.png" />
        <q-carousel-slide :name="3" img-src="/images/logistic.png" />
      </q-carousel>
      <div class="w-1/2 absolute top-10 left-24">
        <p class="border-text text-white text-4xl font-extrabold uppercase leading-[51px]">Logistika xizmatidan
          foydalaning</p>
        <p class="text-white text-base font-semibold uppercase leading-tight">Sizga bu masalada yordam beradi</p>
      </div>
    </div>
    <div class="text-slate-800 text-[40px] font-bold 2xl:font-extrabold leading-[50px] pb-8 pt-16">Xizmat narxini
      xisoblating</div>
    <div class="bg-white rounded-[20px] px-[30px] py-[23px] w-full grid grid-cols-2 gap-11">
      <div>
        <div
          class="w-full border-b border-black border-opacity-20 pb-[18px] text-zinc-900 text-[21px] font-extrabold leading-snug mb-[18px]">
          Jo'natuvchi
        </div>
        <div class="grid grid-cols-2 gap-[18px]">
          <div>
            <p class="text-gray-500 text-base font-semibold leading-snug pb-[15px]">Viloyatdan</p>
            <BaseSelect :options="countries" width="w-full bg-stone-50" />
          </div>
          <div>
            <p class="text-gray-500 text-base font-semibold leading-snug pb-[15px]">Tumandan(Shahar)</p>
            <BaseSelect :options="countries" width="w-full bg-stone-50" />
          </div>
        </div>
      </div>
      <div>
        <div
          class="w-full border-b border-black border-opacity-20 pb-[18px] text-zinc-900 text-[21px] font-extrabold leading-snug mb-[18px]">
          Qabul qiluvchi
        </div>
        <div class="grid grid-cols-2 gap-[18px]">
          <div>
            <p class="text-gray-500 text-base font-semiboldleading-snug pb-[15px]">Viloyatga</p>
            <BaseSelect :options="countries" width="w-full bg-stone-50" />
          </div>
          <div>
            <p class="text-gray-500 text-base font-semiboldleading-snug pb-[15px]">Tumanga(Shaharga)</p>
            <BaseSelect :options="countries" width="w-full bg-stone-50" />
          </div>
        </div>
        <div class="flex justify-end pt-[18px]">
          <BaseButton @click="toggleBtn()" label="Davom etish" color="green" class="px-11 py-3" />
        </div>
      </div>
    </div>
    <div class="text-slate-800 text-[40px] font-bold 2xl:font-extrabold leading-[50px] pb-8 pt-16">Minglab mijozlar nega
      bizni tanlashadi?</div>
    <div class="grid grid-cols-2 gap-[30px]">
      <div class="grid grid-cols-2 gap-[30px]">
        <div class="px-8 pt-[22px] pb-12 bg-white rounded-[20px] flex flex-col justify-between">
          <img src="/images/safe.png" alt="" class="h-[60%] w-auto object-cover mx-auto">
          <div>
            <p class="title">100% kafolat</p>
            <p class="subtitle">Barcha tovarlar bir martalik upakovkalanadi. Tovar yoqolmasligi yoki zarar koʻrmasligiga
              kafolat beriladi.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-[30px]">
          <div class="bg-white rounded-[20px] px-[26px] py-[17px]">
            <BaseIcon name="green-phone" />
            <div>
              <p class="title">24/7 xizmatingizda</p>
              <p class="subtitle">Kun yoki tunning istalgan vaqtida pochtangizni joʻnatishingiz, qabul qilishingiz yoki
                call-centrga murojaat qilishingiz mumkin.</p>
            </div>
          </div>
          <div class="bg-white rounded-[20px] px-[26px] py-[17px]">
            <BaseIcon name="green-user" />
            <div>
              <p class="title">Saqlash sharoiti</p>
              <p class="subtitle">3900 m² lik omborxonamizda har bir joʻnatma yoki yuk maxsus sharoitda saqlanadi.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-[30px]">
        <div class="px-8 pt-[22px]  bg-white rounded-[20px] flex flex-col  relative">
          <BaseIcon name="green-time" />
          <div>
            <p class="title">Eng qisqa vaqtda</p>
            <p class="subtitle">Oʻzbekiston boʻylab va Xalqaro yoʻnalishlar boʻylab belgilangan vaqtda yetkazib beriladi.
            </p>
          </div>
          <img src="/images/delivering.png" alt="" class="w-full absolute bottom-0 overflow-hidden left-0 rounded-[20px]">
        </div>
        <div class="grid grid-cols-1 gap-[30px]">
          <div class="bg-white rounded-[20px] px-[26px] py-[17px]">
            <BaseIcon name="green-parking" />
            <div>
              <p class="title">Shaxsiy avtopark</p>
              <p class="subtitle">Mijozlarga xizmat koʻrsatuvchi 90 dan ortiq har xil turdagi avtomobillar mavjud</p>
            </div>
          </div>
          <div class="bg-white rounded-[20px] px-[26px] py-[17px]">
            <BaseIcon name="green-free-delivery" />
            <div>
              <p class="title">Bepul xizmatlar</p>
              <p class="subtitle">Bepul xizmatlar Mijozlar uchun bepul SMS xabarnoma, detalizatsiya va x.k xizmatlarimiz
                mavjud
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BaseModal v-model="toolbar" :closable="toolbar" body-class="w-1/3 bg-white rounded-[20px] overflow-hidden px-7 py-6">
    <div class="border-b border-black border-opacity-20 pb-6 flex justify-between items-center">
      <p class="text-zinc-900 text-[21px] font-extrabold leading-snug">So'rov qoldirish</p>
      <BaseIcon name="close" @click="toggleBtn()" />
    </div>
    <div class="mt-8">
      <label for="name" class="pb-3 block text-zinc-900 text-base font-semibold leading-snug">Ismingiz</label>
      <BaseInput v-model="name" type="text" custom-style="bg-stone-50 rounded-md" />
    </div>
    <div class="mt-8">
      <label for="name" class="pb-3 block text-zinc-900 text-base font-semibold leading-snug">Telefon raqam</label>
      <BaseInput v-model="phone" type="text" custom-style="bg-stone-50 rounded-md" />
    </div>
    <p class="py-7 text-zinc-900 text-base font-semibold leading-snug">Avtomobil turi</p>
    <div class="flex justify-between items-center cursor-pointer">
      <img v-for="car in cars" :key="car.id" :src="car.image" :alt="car.name" @click="selectCar(car)"
        :class="car.id==selectedCar ? 'opacity-100' : 'opacity-30'">
    </div>
    <div class="flex justify-end pt-10">
      <BaseButton @click="submitForm()" color="green" label="Yuborish" class="px-8 py-2" />
    </div>
  </BaseModal>
</template>
<style scoped>
.border-text {
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
    1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
}

.title {
  @apply text-slate-800 text-lg font-extrabold leading-tight pb-3 pt-[30px]
}

.subtitle {
  @apply text-gray-500 text-[13px] font-medium leading-tight
}
</style>
