import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    client: {
      nom_commercial: '',
      nom_juridique: '',
      prospect: '',
      adresse: '',
      ville: '',
      cp: '',
      telephone: '',
      email: '',
      secteur: ''
    }
  },
  getters: {
    getClients(state) {
      return state.client
    }
  },
  mutations: {
    createClients(state, new_client) {
      this.state.client = new_client
    }
    
  },
  actions: {

  }
})