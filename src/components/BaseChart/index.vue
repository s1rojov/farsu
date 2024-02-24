<script setup lang="ts">
const series = [
    {
        name: "Mahsulotni ko'rishlar",
        data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
        name: "Mahsulotni ko'rsatishlar",
        data: [11, 32, 45, 32, 34, 52, 41]
    }
];

const chartOptions = {
    dataLabels: {
        enabled: false
    },
    dropShadow: {
        enabled: false
    },
    toolbar: {
        show: false
    },
    zoom: {
        enabled: false
    },
    animations: {
        enabled: true
    },
    height: '100%',
    stroke: {
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: [1, 0]
    },
    markers: {
        size: 0.5
    },
};
</script>

<template>
    <div>
        <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>