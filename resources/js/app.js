
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
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    { path: '/customers', component: require('./components/Customers.vue') },
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/orders', component: require('./components/Orders.vue') },
    { path: '/profile', component: require('./components/Profile.vue') },
    { path: '/stock', component: require('./components/Stock.vue') },
    { path: '/tickets', component: require('./components/Tickets.vue') },
    { path: '/users', component: require('./components/Users.vue') },
]
    const router = new VueRouter({
      mode:'history',
    routes // short for `routes: routes`
  })
  
 
  Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
  return moment(created).format('MMMM Do YYYY');
});


Vue.component('example-component', require('./components/ExampleComponent.vue'));



const app = new Vue({
    el: '#app',
    router
});
