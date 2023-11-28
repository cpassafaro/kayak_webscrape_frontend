<template>
    <v-container class="search">
        <v-text-field
            v-model="search"
            ref="search"
            bg-color="white"
            variant="outlined"
            label="Search Kayaks"
            append-inner-icon="mdi-magnify"
        ></v-text-field>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'SearchArea',
    data() {
      return {
        search: ''
      }
    },
    watch: {
        search(newValue) {
            this.search = newValue
            this.$emit('search', this.search)
        }
    },
  }
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  /* .search {
    margin-top:-55px;
  } */
  </style>