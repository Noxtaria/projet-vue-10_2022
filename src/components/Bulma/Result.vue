<template>

    <div class="content">

      <table class="table is-bordered is-mobile ">
        <thead class="is-mobile">
          <tr>
            <th class="is-primary"><abbr>ID</abbr></th>
            <th class="is-primary"><abbr>Nom</abbr></th>
            <th class="is-primary"><abbr>Prénom</abbr></th>
            <th class="is-primary"><abbr>Adresse</abbr></th>
            <th class="is-primary"><abbr>Ville</abbr></th>
            <th class="is-primary"><abbr>CP</abbr></th>
            <th class="is-primary"><abbr>Telephone</abbr></th>
            <th class="is-primary"><abbr>Email</abbr></th>
          </tr>
        </thead>
        <tbody class="is-mobile">
          <tr :key="index" v-for="(clients, index) in clients">
            <th>{{clients.id}}</th>
            <td>{{clients.nom}}</td>
            <td>{{clients.prenom}}</td>
            <td>{{clients.adresse}}</td>
            <td>{{clients.ville}}</td>
            <td>{{clients.cp}}</td>
            <td>{{clients.telephone}}</td>
            <td>{{clients.email}}</td>
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

  .content {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    max-width: 100%;
  }

  </style>