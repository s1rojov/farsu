<script setup lang="ts">
import { ref } from 'vue'
const tab = ref('uz')
const tabs = [
    {
        icon: 'uzb',
        value: 'uz',
        label: "O'zbek"
    },
    {
        icon: 'rus',
        value: 'ru',
        label: 'Русский'
    },
    {
        icon: 'eng',
        value: 'en',
        label: 'English'
    }
]
</script>
<template>
    <div>
        <q-tabs v-model="tab" dense class="text-black/50" active-color="black" indicator-color="transparent" align="left"
            narrow-indicator>
            <q-tab v-for="item, index in tabs" :key="index" :name="item.value" class="rounded-md rounded-b-none bg-white">
                <div class="flex items-center gap-2">
                    <BaseIcon :name="item.icon" class="w-5 h-5" />
                    <p>{{ item.label }}</p>
                </div>
            </q-tab>
        </q-tabs>

        <!-- <q-separator /> -->

        <q-tab-panels v-model="tab" animated class="rounded-2xl rounded-ss-none h-auto">
            <q-tab-panel name="uz">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="ru">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="en">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>