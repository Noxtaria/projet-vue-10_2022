<template>

  <main>
    <h1 class="title">Les Props</h1>
    <div class="layout">
  
      <FormProps class="left" @enregistrer="saveClient"/>
      <ResultProps class="right" v-for="c in clients" :key="c.id" :client="c"/>
    </div>
  </main>



</template>
  
<script>
import ResultProps from '@/components/Props/ResultProps.vue';
import FormProps from '@/components/Props/FormProps.vue';
export default {
  name: "PropsComponent",
  components: { ResultProps, FormProps },
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

<style scoped>

  .layout{
    display: flex;
  }

  .left {
    width: 50%;
  }

  .right {
    width: 50%;
  }
</style>