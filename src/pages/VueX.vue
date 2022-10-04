<template>

  <main>
    <div>
      <h1>VueX</h1>

      {{getClients}}

      <FormVueX />
      <Result />

    </div>
  </main>



</template>
    
<script>

import { mapGetters } from "vuex"
import Result from "@/components/VueX/Result.vue";
import FormVueX from "@/components/VueX/FormVueX.vue";

export default {
  name: "VueXComponent",
  computed: {
    ...mapGetters(["getClients"])
  },
  components: { Result, FormVueX }
}
</script>

<style scoped>

</style>