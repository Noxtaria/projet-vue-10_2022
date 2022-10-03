<template>

  <main>
    <div>
      <h1>Bienvenue sur l'index du projet Vue</h1>
  
      <FormProps @enregistrer="saveClient"/>
      <Result v-for="c in clients" :key="c.id" :client="c"/>
    </div>
  </main>



</template>
  
<script>
import Result from '@/components/Result.vue';
import FormProps from '@/components/FormProps.vue';
export default {
  name: "IndexComponent",
  components: { Result, FormProps },
  data(){
    return{
      clients: []
    }
  },
  methods: {
    saveClient(new_client){
      this.clients.push(new_client)
    }
  }
}
</script>