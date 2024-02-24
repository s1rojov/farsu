<script setup lang="ts">
import BaseButton from 'src/components/BaseButton/index.vue'
import PaginationTable from 'src/components/PaginationTable/index.vue'
</script>
<template>
    <div class="p-5">
        <div class="flex items-center justify-between">
            <p class="text-zinc-900 text-xl font-bold leading-snug">Mahsulotlar</p>
            <BaseButton color="green" class="py-2.5 px-10 rounded-[10px]" label="Qo'shish" />
        </div>
        <PaginationTable class="mt-3">
            paginaation
        </PaginationTable>
    </div>
</template>