import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import VeeValidate from 'vee-validate';
import msgs from './pt_BR';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode : 'history'
});
VeeValidate.Validator.addLocale(msgs);
Vue.use(VeeValidate, { locale: 'pt_BR' });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
