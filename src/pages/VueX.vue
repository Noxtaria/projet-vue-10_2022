<template>

  <main>
    <div>
      <h1>VueX</h1>

      {{getClients}}


      <FormProps />
      <Result />

    </div>
  </main>



</template>
    
<script>

import { mapGetters } from "vuex"
import FormProps from "@/components/VueX/FormProps.vue";
import Result from "@/components/VueX/Result.vue";

export default {
  name: "VueXComponent",
  computed: {
    ...mapGetters(["getClients"])
  },
  components: { FormProps, Result }
}
</script>

<style scoped>

</style>