import Vue from 'vue'
import App from "./App.vue"
import VueRouter from 'vue-router'
import PropsComponent from "./pages/Props.vue"
import VueXComponent from "./pages/VueX.vue"
import BulmaComponent from "./pages/Bulma.vue"
import store from './store/store.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
    path: '/',
    name: "props",
    component: PropsComponent
    },
    {
    path: '/vuex',
    name: "vuex",
    component: VueXComponent
    },
    {
    path: '/bulma',
    name: "bulma",
    component: BulmaComponent
    },
    {
    path: '*',
    redirect: '/'
    }

  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
