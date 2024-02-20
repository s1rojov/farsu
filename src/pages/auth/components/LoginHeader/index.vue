<script setup lang="ts">
import BaseSelect from 'src/components/BaseSelect/index.vue'
const languages = [
    {
        id: 1,
        title: 'UZ',
        icon: 'uzb'
    },
    {
        id: 2,
        title: 'ENG',
        icon: 'eng'
    },
    {
        id: 3,
        title: 'RUS',
        icon: 'rus'
    }
]
</script>
<template>
    <div class="mx-auto container lg:px-20">
        <div class="flex items-center justify-between mt-5">
            <router-link to="/">
                <img src="images/logo-green.png" alt="logo">
            </router-link>
            <BaseSelect :options="languages" />
        </div>
    </div>
</template>