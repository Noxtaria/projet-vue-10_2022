<template>
    <main>
      <p>{{client.nom_commercial}}</p>
      <p>{{client.nom_juridique}}</p>
      <p>{{client.nom_commercial}}</p>
      <p>{{client.nom_commercial}}</p>
      <p>{{client.nom_commercial}}</p>
      <p>{{client.nom_commercial}}</p>
      <p>{{client.nom_commercial}}</p>
      <p>{{client.nom_commercial}}</p>
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