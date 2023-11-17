<template>
  <v-card class="ma-2 container-card">
    {{ value.title }}
  </v-card>
</template>

<script>
export default {
  name: 'KayakCard',
  props: {
    value: { type: Object, required: true }
  },
  data() {
    return {
      kayak: {} 
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-card {
  height: 30px;
}
</style>
