// 1.匯入
import { createApp } from 'vue';
// 匯入axios套件
// import store from '@/store;
import axios from 'axios';
import VueAxios from 'vue-axios';
// 匯入 vee-validate 主套件
import store from '@/store/index';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 匯入 vee-validate 相關規則
import { required, email, min } from '@vee-validate/rules';
// 匯入vee-validate 多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';
// 匯入vee-validate 繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// 匯入overlay設
import $httpMessageState from '@/methods/pushMessageState';
import Loading from 'vue3-loading-overlay';
import { date, currency } from '@/methods/filters';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import router from './router';

// 載入其自訂方法
// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
// 載入其自訂方法

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證

});
setLocale('zh_TW');// 強制語系預設為中文
// 使用其自訂方法並掛載
const app = createApp(App);
app.config.globalProperties.$filters = {
  date,
  currency,
};

app.use(store);
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(VueSweetalert2);
app.component('Form', Form);
app.component('Loading', Loading);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(router);
app.use(VueAxios, axios);
app.use(router).mount('#app');
