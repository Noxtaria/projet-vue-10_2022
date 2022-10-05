<template>
  <div class="">
    <div :key="index" v-for="(clients, index) in clients">

      <table class="table">
        <thead>
          <tr>
            <th><abbr title="Position">ID</abbr></th>
            <th><abbr title="Played">Nom Commercial</abbr></th>
            <th><abbr title="Won">Nom Juridique</abbr></th>
            <th><abbr title="Drawn">Prospect</abbr></th>
            <th><abbr title="Lost">Adresse</abbr></th>
            <th><abbr title="Goals for">Ville</abbr></th>
            <th><abbr title="Goals against">CP</abbr></th>
            <th><abbr title="Goal difference">Telephone</abbr></th>
            <th><abbr title="Points">Email</abbr></th>
            <th><abbr title="Points">Secteur</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr>
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