<template>

  <main>
    <div>
      <h1 class="title">Bulma</h1>

      <div class="layout">
        <Form class="left"/>
        <Result  class="right" />
      </div>

    </div>
  </main>



</template>
    
<script>
import Form from '@/components/Bulma/Form.vue';
import Result from '@/components/Bulma/Result.vue';
export default {
  name: "BulmaComponent",
  components: { Form, Result }
}
</script>

<style scoped>

.layout{
display: flex;
flex-direction: row;
}

.left{
  max-width: 100%;
  max-height: 100%;
  width: 30%;
}

.right{
  width: 70%;
} 

</style>