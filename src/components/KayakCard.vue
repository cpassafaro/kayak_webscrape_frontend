<template>
  <v-card class="ma-2 pa-3 elevation-0 container-card" variant="outlined">
    <v-card-title>{{ value.title }}</v-card-title>
    <v-card-subtitle>{{ value.website }}</v-card-subtitle>
    <v-row :style="{'height': '240px'}">
      <v-col>
        <v-img :src="imgSource" :alt="value.title"></v-img>
        <!-- <img :src="imgSource" alt="test"> -->
      </v-col>
    </v-row>
    <v-card-text>
    </v-card-text>
    <v-card-actions>
      <v-btn prepend-icon="mdi-link" variant="tonal" class="pa-2 btn-href"><a :href="value.link" target="_blank">Click to go to site</a></v-btn>
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
    // console.log(this.value.title.toLowerCase().includes('ripper'))
    if(this.value.image) {
      // console.log(this.value.image)
      this.imgSource = this.value.image
    } else {
      if(this.value.title.toLowerCase().includes('ripper')) {
        this.imgSource = 'https://www.pyranha.com/images/products/ripper/ripper_rr_ts@2x.jpg'
      } else if (this.value.title.toLowerCase().includes('remix') || this.value.title.toLowerCase().includes('rmx')) {
        this.imgSource = 'https://liquidlogickayaks.com/cdn/shop/products/Remix_69_Bluegrass.jpg?v=1639577342'
      } else if (this.value.title.toLowerCase().includes('mixmaster')) {
        this.imgSource = 'https://www.backcountry.com/images/items/large/JAK/JAK0053/RD.jpg'
      }

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
.btn-href {
  /* background-color: black; */
  color: white;
}
</style>
