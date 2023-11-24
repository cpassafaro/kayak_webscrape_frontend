<template>
  <v-card class="ma-2 pa-3 elevation-0 container-card" variant="outlined">
    <v-row class="d-flex justify-center align-center" :style="{'height': '240px'}">
      <v-col>
        <v-img :src="imgSource" :alt="value.title"></v-img>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-col cols="12" class="pa-0">
        <v-card-title>
          <span class="text-truncate">
          {{ value.title }}
        </span>
        </v-card-title>
        <v-card-subtitle>{{ value.website }}</v-card-subtitle>
        <v-divider class="mx-4 mb-1"></v-divider>
        <v-card-text>
          <span>Price: </span><span>{{ value.price }}</span>
        </v-card-text>
      </v-col>
    </v-row>
    <v-card-actions class="d-flex justify-center align-center">
      <v-btn prepend-icon="mdi-link" class="pa-5 d-flex justify-center align-center btn-href"><a :href="value.link" target="_blank" class="d-flex justify-center align-center">Click to go to site</a></v-btn>
    </v-card-actions>
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
      kayak: {},
      imgSource: 'https://www.pyranha.com/images/products/ripper/ripper_rr_ts@2x.jpg'
    }
  },
  mounted() {
    // console.log(this.value)
    if(this.value.image) {
      this.imgSource = this.value.image
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-card {
  /* height: 30px; */
  min-height: 400px;
}
a {
  color: white;
  text-decoration: none;
}
.btn-href {
  background-color: black;
  color: white;
}
</style>
