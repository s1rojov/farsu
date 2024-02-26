<script setup lang="ts">
import BaseButton from 'src/components/BaseButton/index.vue'
import PaginationTable from 'src/components/PaginationTable/index.vue'
import productCard from 'src/pages/user/children/product/components/productCard/index.vue'
import { ref } from 'vue';
const size = ref<number>(10)
</script>
<template>
    <div class="p-5">
        <div class="flex items-center justify-between">
            <p class="text-zinc-900 text-xl font-bold leading-snug">Mahsulotlar</p>
            <BaseButton color="green" class="py-2.5 px-10 rounded-[10px]" label="Qo'shish" />
        </div>
        <PaginationTable class="mt-3" :pageSize="size">
            <div class="grid grid-cols-3 gap-5">
                <productCard v-for="item in 20" :key="item" />
            </div>
        </PaginationTable>
    </div>
</template>