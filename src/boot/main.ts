import { boot } from 'quasar/wrappers';
import BaseIcon from 'src/components/BaseIcon/index.vue'
export default boot(async ({ app }) => {
    app.component('BaseIcon', BaseIcon);
});