<template>

  <main>
    <div>
      <h1 class="title">Bulma</h1>

      <Form />
      <Result/>

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