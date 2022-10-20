<template>

  <div class="layout">
    <form class="is-mobile" @submit="createClient()">
      <fieldset>
        <legend>Identité</legend>
        <div class="controls">
          <div>
            <label class="label" for="nom">Nom</label>
            <input class="input" id="nom" v-model.trim="new_client.nom" />
          </div>
          <div>
            <label class="label" for="prenom">Prénom</label>
            <input class="input" id="prenom" v-model.trim="new_client.prenom" />
          </div>
        </div>

      </fieldset>

      <fieldset>
        <legend>Adresse</legend>
        <div class="controls">

          <div>
            <label class="label" for="adresse">Adresse</label>
            <input class="input" id="adresse" v-model.trim="new_client.adresse" />
          </div>
          <div>
            <label class="label" for="ville">Ville</label>
            <input class="input" id="ville" v-model.trim="new_client.ville" />
          </div>
          <div>
            <label class="label" for="cp">CP</label>
            <input class="input" id="cp" v-model.trim="new_client.cp" />
          </div>

        </div>
      </fieldset>

      <fieldset>
        <legend>Contact</legend>

        <div class="controls">
          <div>
            <label class="label" for="telephone">Téléphone</label>
            <input class="input" type="tel" id="telephone" v-model.trim="new_client.telephone" />
          </div>
          <div>
            <label class="label" for="email">Email</label>
            <input class="input" type="email" id="email" v-model.trim="new_client.email" />
          </div>
        </div>
      </fieldset>


      <p>
        <button class="button is-success is-responsive">Enregistrer</button>
      </p>
    </form>
  </div>



</template>
  
<script>
import axios from 'axios'

export default {
  name: 'FormComponent',
  data: () => ({
    perso: undefined,
    api: "http://localhost:3000/clients",
    id: 1,
    error: '',
    clients: [],
    new_client: {
      nom: '',
      prenom: '',
      adresse: '',
      ville: '',
      cp: '',
      telephone: '',
      email: '',
    }

  }),
  methods: {

    getClients() {
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
  width: 80%;
  margin: auto;
}

.controls {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}
button {
  margin-top: 15px;
}
div {
  margin-top: 10px;
  margin-bottom: 5px;
}

.layout{
  max-height: 50%;
  max-width: 50%;
}

</style>