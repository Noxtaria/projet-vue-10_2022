<template>
  <div class="">
    <div>

      <table class="table">
        <thead>
          <tr>
            <th><abbr>ID</abbr></th>
            <th><abbr>Nom Commercial</abbr></th>
            <th><abbr>Nom Juridique</abbr></th>
            <th><abbr>Prospect</abbr></th>
            <th><abbr>Adresse</abbr></th>
            <th><abbr>Ville</abbr></th>
            <th><abbr>CP</abbr></th>
            <th><abbr>Telephone</abbr></th>
            <th><abbr>Email</abbr></th>
            <th><abbr>Secteur</abbr></th>
          </tr>
        </thead>
        <tbody>
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