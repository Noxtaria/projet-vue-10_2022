<template>

<main>
    <table>
      <thead>
          <tr>
            <th><abbr>Nom :</abbr></th>
            <th><abbr>Prénom :</abbr></th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{client.nom}}</td>
          <td>{{client.prenom}}</td>
        </tr>
      </tbody>
    </table>
  </main>

</template>
  
<script>
import { mapState } from 'vuex';

export default {
  name: 'ResultComponent',
  computed: {
    ...mapState(["client"])
  },
}
</script>

<style scoped>

table {
  display: flex;
}

td {
  display: flex;
  margin-left: 15px;

}
th {
  display: flex;
}
</style>