<template>

  <div class="content">


      <b-table v-if="clients"
          :data="clients"
          :columns="columns"
          :debounce-search="1000">
      </b-table>

      <b-loading v-else :is-full-page="true"  :can-cancel="true"></b-loading>


  </div>


</template>

<script>
import axios from 'axios';

export default {
name: 'ResultComponent',
data: () => ({
  clients: null,
  columns: [
    { field: 'id', label: 'ID', width: 100, searchable: true },
    { field: 'nom', label: 'Nom', searchable: true },
    { field: 'prenom', label: 'Prénom', searchable: true },
    { field: 'adresse', label: 'Adresse' },
    { field: 'ville', label: 'Ville' },
    { field: 'cp', label: 'CP' },
    { field: 'telephone', label: 'Telephone' },
    { field: 'email', label: 'Email' }
  ]
}),
methods: {
  getClients() {
    axios.get('http://localhost:3000/clients')
      .then(response => this.clients = response.data)
  }
},
mounted() {
  this.getClients();
}
}
</script>

<style scoped>
table {
  margin-top: 35px;
  
  
}

tr {
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
}

</style>