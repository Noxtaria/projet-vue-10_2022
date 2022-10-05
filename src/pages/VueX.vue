<template>

  <main>
    <div>
      <h1 class="title">VueX</h1>

      {{getClients}}

      <FormVueX />
      <ResultVueX />

    </div>
  </main>



</template>
    
<script>

import { mapGetters } from "vuex"
import ResultVueX from "@/components/VueX/ResultVueX.vue";
import FormVueX from "@/components/VueX/FormVueX.vue";

export default {
  name: "VueXComponent",
  computed: {
    ...mapGetters(["getClients"])
  },
  components: { ResultVueX, FormVueX }
}
</script>

<style scoped>

</style>