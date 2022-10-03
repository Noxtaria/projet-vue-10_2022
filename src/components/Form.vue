<template>

  <div>
    <form @submit.prevent="createClient()">
      <div>
        <label for="nom_commercial">Nom Commercial</label>
        <input id="nom_commercial" v-model.trim="new_client.nom_commercial" />
      </div>
      <div>
        <label for="nom_juridique">Nom Juridique</label>
        <input id="nom_juridique" v-model.trim="new_client.nom_juridique" />
      </div>
      <div>
        <label for="prospect">Prospect</label>
        <input id="prospect" v-model.trim="new_client.prospect" />
      </div>
      <div>
        <label for="adresse">Adresse</label>
        <input id="adresse" v-model.trim="new_client.adresse" />
      </div>
      <div>
        <label for="ville">Ville</label>
        <input id="ville" v-model.trim="new_client.ville" />
      </div>
      <div>
        <label for="cp">CP</label>
        <input id="cp" v-model.trim="new_client.cp" />
      </div>
      <div>
        <label for="telephone">Téléphone</label>
        <input id="telephone" v-model.trim="new_client.telephone" />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" v-model.trim="new_client.email" />
      </div>
      <div>
        <label for="secteur">Secteur</label>
        <input id="secteur" v-model.trim="new_client.secteur" />
      </div>
      <p>
        <button>Enregistrer</button>
      </p>
    </form>
  </div>



</template>
  
<script>
import axios from 'axios'

export default {
  name: 'FormComponent',
  data:() => ({
    perso: undefined,
    api: "http://localhost:3000/clients",
    id: 1,
    error: '',
    clients: [],
    new_client: {
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
    
  }),
  methods: {

    getClients(){
      axios.get('http://localhost:3000/clients')
          .then(response => this.clients = response.data)
    },

    createClient() {

      axios.post('http://localhost:3000/clients', this.new_client)
          .then(response => {
            console.log("Le client vient d'être créé : ", response.data);
            this.getClients();
          })
          .catch(err => console.log(`Quelque chose s'est mal passé : ${err.message}`))
    }
  }
}
</script>

<style scoped>

form {
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 10px;
}
  
form input{
  display: flex;
  flex-wrap: wrap;
  line-height: 2rem;
  justify-content: space-between;
  width: 50%;
  line-height: 2rem;
  border-radius: 5px;
}
  </style>