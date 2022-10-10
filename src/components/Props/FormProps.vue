<template>

    <div>
      <form @submit.prevent="createClient()">
        <div>
          <label for="nom_commercial">Nom</label>
          <input id="nom_commercial" v-model.trim="new_client.nom" />
        </div>
        <div>
          <label for="nom_juridique">Prénom</label>
          <input id="nom_juridique" v-model.trim="new_client.prenom" />
        </div>
        <p>
          <button>Afficher</button>
        </p>
      </form>
    </div>
  
  
  
  </template>
    
  <script>

  
  export default {
    name: 'FormComponent',
    data:() => ({
      id: 1,
      error: '',
      new_client: {
        nom: '',
        prenom: ''
      }
      
    }),
    methods: {
  
      createClient() {
        this.$emit('enregistrer', this.new_client)
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