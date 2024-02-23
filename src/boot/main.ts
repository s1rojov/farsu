import { boot } from 'quasar/wrappers';
import BaseIcon from 'src/components/BaseIcon/index.vue'
import VueApexCharts from 'vue3-apexcharts';
export default boot(async ({ app }) => {
    app.use(VueApexCharts);
    app.component('BaseIcon', BaseIcon);
});