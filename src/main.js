import Vue from 'vue'
import App from './App.vue'
import ProjectList from "./components/ProjectList.vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/project/:id', component: ProjectList }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


