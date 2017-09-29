import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainPageComponent from '../src/components/MainPageComponent.vue'
import ListComponent from '../src/components/ListComponent.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
  {
    path: '/',
    component: MainPageComponent

  },
  {
    path: '/list',
    component: ListComponent

  }
  // {
  //   path: '/post/:id',
  //   component: PostInfoComponent,
  //   props: true
  // }
  ],
mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
