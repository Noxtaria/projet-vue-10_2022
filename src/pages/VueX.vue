<template>

  <main>
    <h1 class="title">VueX</h1>
    {{getClients}}
    <div class="layout">


      <FormVueX class="left" />
      <ResultVueX class="right" />

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
.layout {
  display: flex;
}

.left {
  width: 50%;
}

.right {
  width: 50%;
}
</style>