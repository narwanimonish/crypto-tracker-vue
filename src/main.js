import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import Store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
  store: Store,
}).$mount('#app');
