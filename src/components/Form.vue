<template>

  <div>
    <form @submit.prevent="handleSubmit()">
      <div>
        <label for="nom_commercial">Nom Commercial</label>
        <input id="nom_commercial" v-model.trim="form.nom_commercial" />
      </div>
      <div>
        <label for="nom_juridique">Nom Juridique</label>
        <input id="nom_juridique" v-model.trim="form.nom_juridique" />
      </div>
      <div>
        <label for="prospect">Prospect</label>
        <input id="prospect" v-model.trim="form.prospect" />
      </div>
      <div>
        <label for="adresse">Adresse</label>
        <input id="adresse" v-model.trim="form.adresse" />
      </div>
      <div>
        <label for="ville">Ville</label>
        <input id="ville" v-model.trim="form.ville" />
      </div>
      <div>
        <label for="cp">CP</label>
        <input id="cp" v-model.trim="form.cp" />
      </div>
      <div>
        <label for="telephone">Téléphone</label>
        <input id="telephone" v-model.trim="form.telephone" />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" v-model.trim="form.email" />
      </div>
      <div>
        <label for="secteur">Secteur</label>
        <input id="secteur" v-model.trim="form.secteur" />
      </div>
      <p>
        <button>Enregistrer</button>
      </p>
    </form>
  </div>



</template>
  
<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      form: {
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
    }
  },
  methods: {
    handleSubmit() {
      console.log(`nom_commercial : "${this.form.nom_commercial}",
                   nom_juridique : "${this.form.nom_juridique}",
                   prospect : "${this.form.prospect}",
                   adresse : "${this.form.adresse}",
                   ville : "${this.form.ville}",
                   cp : "${this.form.cp}",
                   telephone : "${this.form.telephone}",
                   email : "${this.form.email}",
                   secteur : "${this.form.secteur}"
                  `);
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