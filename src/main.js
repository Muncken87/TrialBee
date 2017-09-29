import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
  {
    path: '/auth',

  },
  {
    path: '/success',

  },
  {
    path: '/',

  },
  {
    path: '/about',

  },
  {
    path: '/posts',

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
