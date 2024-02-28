<script setup lang="ts">
import BaseButton from 'src/components/BaseButton/index.vue'
import PaginationTable from 'src/components/PaginationTable/index.vue'
import productCard from 'src/pages/user/children/product/components/productCard/index.vue'
import addProductPage from 'src/pages/user/children/product/add-product.vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from './store'
import { useProductFn } from './composable'
// const { addProduct } = useProductFn()
const store = useProductStore()
const { visibleAddPage } = storeToRefs(store)
import { ref } from 'vue';
const size = ref<number>(10)
</script>
<template>
    <div class="p-5">
        <div class="flex items-center justify-between">
            <p class="text-zinc-900 text-xl font-bold leading-snug">Mahsulotlar</p>
            <BaseButton color="green" class="py-2.5 px-10 rounded-[10px]" label="Qo'shish" @click="visibleAddPage = true" />
        </div>
        <!-- products started -->
        <PaginationTable v-if="!visibleAddPage" class="mt-3" :pageSize="size">
            <div class="grid lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                <productCard v-for="item in 20" :key="item" />
            </div>
        </PaginationTable>
        <!-- products ended -->
        <!-- add product page started -->
        <addProductPage v-else />
        <!-- add product page ended -->
    </div>
</template>