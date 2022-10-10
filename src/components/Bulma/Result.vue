<template>

    <div class="content">

      <table class="table is-bordered is-mobile ">
        <thead class="is-mobile">
          <tr>
            <th class="is-primary"><abbr>ID</abbr></th>
            <th class="is-primary"><abbr>Nom Commercial</abbr></th>
            <th class="is-primary"><abbr>Nom Juridique</abbr></th>
            <th class="is-primary"><abbr>Prospect</abbr></th>
            <th class="is-primary"><abbr>Adresse</abbr></th>
            <th class="is-primary"><abbr>Ville</abbr></th>
            <th class="is-primary"><abbr>CP</abbr></th>
            <th class="is-primary"><abbr>Telephone</abbr></th>
            <th class="is-primary"><abbr>Email</abbr></th>
            <th class="is-primary"><abbr>Secteur</abbr></th>
          </tr>
        </thead>
        <tbody class="is-mobile">
          <tr :key="index" v-for="(clients, index) in clients">
            <th>{{clients.id}}</th>
            <td>{{clients.nom_commercial}}</td>
            <td>{{clients.nom_juridique}}</td>
            <td>{{clients.prospect}}</td>
            <td>{{clients.adresse}}</td>
            <td>{{clients.ville}}</td>
            <td>{{clients.cp}}</td>
            <td>{{clients.telephone}}</td>
            <td>{{clients.email}}</td>
            <td>{{clients.secteur}}</td>
          </tr>
        </tbody>
      </table>

    </div>
  

</template>
  
<script>
import axios from 'axios';

export default {
  name: 'ResultComponent',
  data: () => ({
    clients: null
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

  </style>