<template>
  <v-card class="ma-2 container-card">
    <v-row>
      <v-col>
        <div>Picture Below</div>
        <v-img :src="imgSource" ></v-img>
      </v-col>
    </v-row>
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
      kayak: {},
      imgSource: 'https://www.pyranha.com/images/products/ripper/ripper_rr_ts@2x.jpg'
    }
  },
  mounted() {
    console.log('kayak card', this.value)
    console.log(this.value.title.toLowerCase().includes('ripper'))
    if(this.value.title.toLowerCase().includes('ripper')) {
      console.log('ripper')
      this.imgSource = 'https://www.pyranha.com/images/products/ripper/ripper_rr_ts@2x.jpg'
    } else if (this.value.title.toLowerCase().includes('remix') || this.value.title.toLowerCase().includes('rmx')) {
      console.log('remix')
      this.imgSource = 'https://liquidlogickayaks.com/cdn/shop/products/Remix_69_Bluegrass.jpg?v=1639577342'
    } else if (this.value.title.toLowerCase().includes('mixmaster')) {
      console.log('mixmaster')
      this.imgSource = 'https://www.backcountry.com/images/items/large/JAK/JAK0053/RD.jpg'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-card {
  /* height: 30px; */
}
</style>
