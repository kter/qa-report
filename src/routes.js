import Vue from 'vue'
import ProjectList from "./components/ProjectList.vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default  new VueRouter({
  routes: [
    { path: '/project/:id', component: ProjectList }
  ]
})

