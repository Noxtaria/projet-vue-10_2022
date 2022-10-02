import Vue from 'vue'
import App from "./App.vue"
import VueRouter from 'vue-router'
import IndexComponent from "./pages/Index.vue"
import FormComponent from "./components/Form.vue"
import ResultComponent from "./components/Result.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
    path: '/',
    name: "index",
    component: IndexComponent
    },
    {
    path: '/form',
    name: "form",
    component: FormComponent
    },
    {
    path: '/result',
    name: "result",
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
