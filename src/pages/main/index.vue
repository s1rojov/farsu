<script setup lang="ts">
import TheHeader from 'src/components/TheHeader/index.vue'
import Home from 'src/pages/main/home/index.vue'
import TheFooter from 'src/components/TheFooter/index.vue'
</script>
<template>
    <div>
        <TheHeader />
        <router-view></router-view>
        <TheFooter />
    </div>
</template>