import Vue from 'vue'
import App from "./App.vue"
import VueRouter from 'vue-router'
import IndexComponent from "./pages/Index.vue"
import FormComponent from "./pages/Form.vue"
import ResultComponent from "./pages/Result.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
    path: '/',
    component: IndexComponent
    },
    {
    path: '/form',
    component: FormComponent
    },
    {
    path: '/result',
    component: ResultComponent
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
  render: h => h(App),
}).$mount('#app')
