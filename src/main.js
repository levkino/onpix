import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueScrollTo from 'vue-scrollto';
import WOW from 'wow.js/dist/wow';
import App from './App.vue';
import FontAwesomeIcon from './icon';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'animate.css/animate.min.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new WOW().init();

new Vue({
  render: h => h(App)
}).$mount('#app');
