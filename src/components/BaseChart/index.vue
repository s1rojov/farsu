<script setup lang="ts">
// import { ref } from 'vue';
// import VueApexCharts from 'vue3-apexcharts';

const series = [
    {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }
];

const chartOptions = {
    chart: {
        height: 350,
        type: 'area'
    },
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
    stroke: {
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: [1, 0]
    },
    markers: {
        size: 0.5
    },
    xaxis: {
        type: 'datetime',
        categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
        ]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        }
    }
};
</script>

<template>
    <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>