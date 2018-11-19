
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import { Form, HasError, AlertError } from 'vform';
import moment from 'moment';
window.Form = Form;


import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;


Vue.component('pagination', require('laravel-vue-pagination'))

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '7px',
})

let routes = [
    { path: '/customers', component: require('./components/Customers.vue') },
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/orders', component: require('./components/Orders.vue') },
    { path: '/profile', component: require('./components/Profile.vue') },
    { path: '/stock', component: require('./components/Stock.vue') },
    { path: '/tickets', component: require('./components/Tickets.vue') },
    { path: '/users', component: require('./components/Users.vue') },
    { path: '/developer', component: require('./components/developer.vue') },
    { path: '*', component: require('./components/Notfound.vue') },
]
    const router = new VueRouter({
      mode:'history',
    routes // short for `routes: routes`
  })
  
 
  window.Fire =  new Vue();

  Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
  return moment(created).format('MMMM Do YYYY');
});


Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue')
);

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue')
);

Vue.component('example-component', require('./components/ExampleComponent.vue'));



const app = new Vue({
    el: '#app',
    router,
    data:{
          search:''
    },
    methods:{
      searchit(){
          Fire.$emit('searching');

      }
   
    }
});
