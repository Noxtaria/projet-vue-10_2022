<template>
    <div class="">
      <div :key="index" v-for="(clients, index) in clients">
        <p>{{clients.nom_commercial}}</p>
        <p>{{clients.nom_juridique}}</p>
        <p>{{clients.prospect}}</p>
        <p>{{clients.adresse}}</p>
        <p>{{clients.ville}}</p>
        <p>{{clients.cp}}</p>
        <p>{{clients.telephone}}</p>
        <p>{{clients.email}}</p>
        <p>{{clients.secteur}}</p>

      </div>
    </div>
  
  </template>
  
  <script>
import axios from 'axios';

    export default {
      name: 'ResultComponent',
      data:() => ({
        clients: null
      }),
      methods: {
        getClients() {
          axios.get('http://localhost:3000/clients')
              .then(response => this.clients = response.data)
        }
      },
      mounted(){
        this.getClients();
      }
    }
  </script>