<template>
    <v-container class="search">
        <v-text-field
            v-model="search"
            ref="search"
            bg-color="white"
            variant="outlined"
            label="Search Kayaks"
        ></v-text-field>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'SearchArea',
    props: {
        value: {type: String, required: true, default: ''}
    },
    data() {
      return {}
    },
    mounted() {
        console.log('value ', this.value)
    }
  }
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .search {
    margin-top:-55px;
  }
  </style>