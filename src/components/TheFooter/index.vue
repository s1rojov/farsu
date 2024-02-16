<script setup lang="ts">
const socials = [
    {
        icon: 'instagram',
        label: 'Instagram',
        path: ''
    },
    {
        icon: 'facebook',
        label: 'Facebook',
        path: ''
    },
    {
        icon: 'youtube',
        label: 'Youtube',
        path: ''
    },
    {
        icon: 'linkedin',
        label: 'Linkedin',
        path: ''
    }
]
const contacts = [
    {
        icon: 'phone',
        label: '+9989 (90) 624 48 87'
    },
    {
        icon: 'mail',
        label: 'info@farsumchj.uz'
    },
    {
        icon: 'location',
        label: 'Fartade manzili 24 uy'
    }
]
const payments = [
    'click',
    'maestro',
    'mastercard',
    'payme',
    'paynet',
    'paypal',
    'verified',
    'visa',
    'webmoney'
]
</script>
<template>
    <div class="bg-emerald-600 w-full mt-20">
        <div class="container mx-auto lg:px-20 py-16">
            <div class="grid grid-cols-4  gap-10">
                <div>
                    <p class="text-white text-[25px] font-extrabold leading-[27px]">Bizning sahifamiz</p>
                    <router-link
                        class="bg-black/5 px-6 py-2 rounded-3xl flex items-center gap-1 mt-2.5 first:mt-6 justify-center"
                        v-for="item, index in socials" :key="index" :to="item.path">
                        <BaseIcon :name="item.icon" class="w-5 h-5" />
                        <span class="text-lg text-white">{{ item.label }}</span>
                    </router-link>
                </div>
                <div>
                    <p class="text-white text-[25px] font-extrabold leading-[27px]">Kontakt ma'lumotlarimiz</p>
                    <div class="flex items-center justify-start gap-1 mt-4 first:mt-6" v-for="item, index in contacts"
                        :key="index">
                        <BaseIcon :name="item.icon" class="h-[18px] w-[18px] text-orange-400" />
                        <p class="text-white text-lg font-medium leading-[31px]">{{ item.label }}</p>
                    </div>
                </div>
                <div>
                    <p class="text-white text-[25px] font-extrabold leading-[27px]">Qo'llab-quvvatlash xizmati</p>
                    <div class="text-white text-lg font-normal leading-5 mt-6">Biz
                        barcha savollarga chat orqali javob beramiz</div>
                    <div class="bg-white rounded-xl flex items-center justify-start p-2 gap-2 mt-6 cursor-pointer">
                        <div class="bg-emerald-600 p-1.5 rounded-xl w-fit">
                            <BaseIcon name="operator" class="w-5 h-5" />
                        </div>
                        <span class="text-emerald-600 text-sm font-medium leading-[25px]">Murojat qilish</span>
                    </div>
                </div>
                <div>
                    <p class="text-white text-[25px] font-extrabold leading-[27px]">Bizning manzil</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47971.88599380363!2d69.3041314!3d41.2818183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1708114279756!5m2!1sru!2s"
                        class="w-full rounded-xl mt-6" style="border:0;" allowfullscreen loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <p class="text-white text-[21px] font-extrabold leading-snug mt-10">Barcha to’lo’v turlari</p>
            <div class="flex items-center justify-between mt-6">
                <img v-for="item in payments" :key="item" :src="`payments/${item}.png`" class="cursor-pointer" alt="">
            </div>
        </div>
    </div>
</template>