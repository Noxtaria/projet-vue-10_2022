<template>
    <main>
      <p>{{client.nom_commercial}}</p>
      <p>{{client.nom_juridique}}</p>
      <p>{{client.prospect}}</p>
      <p>{{client.adresse}}</p>
      <p>{{client.ville}}</p>
      <p>{{client.cp}}</p>
      <p>{{client.telephone}}</p>
      <p>{{client.email}}</p>
      <p>{{client.secteur}}</p>
    </main>
  
  </template>
  
  <script>
    export default {
      name: 'ResultComponent',
      props: {
        client: Object
      },
      methods: {

      }
    }
  </script>