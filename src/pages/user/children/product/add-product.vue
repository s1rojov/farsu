<script setup lang="ts">
import { ref } from 'vue'
const tab = ref('uz')
</script>
<template>
    <div>
        <q-tabs v-model="tab" align="left" :breakpoint="0" dense class="text-black">
            <q-tab name="uz">
                <div class="flex items-center gap-2">
                    <BaseIcon name="uzb" class="w-5 h-5" />
                    <p>O'zbek</p>
                </div>
            </q-tab>
            <q-tab name="ru">
                <div class="flex items-center gap-2">
                    <BaseIcon name="rus" class="w-5 h-5" />
                    <p>Русский</p>
                </div>
            </q-tab>
            <q-tab name="en">
                <div class="flex items-center gap-2">
                    <BaseIcon name="eng" class="w-5 h-5" />
                    <p>English</p>
                </div>
            </q-tab>
        </q-tabs>
    </div>
</template>