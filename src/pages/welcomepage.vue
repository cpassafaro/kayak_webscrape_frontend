<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant" title="WhiteWater Kayak Deals"></v-app-bar>

    <v-carousel 
      cycle
      height="400"
      hide-delimiters
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item,i) in whitewaterImages"
        :key="i"
        :src="item.url"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-layout>
</template>

<script>
import Kayak from '../models/Kayak'
export default {
  props: {},
  name: "WelcomePage",
  components: {},
  data() {
    return {
      whitewaterImages: [
        {
          url: 'https://www.outdoorjournal.com/wp-content/uploads/19221884_10155153400712559_2716722644710697167_o-3.jpg'
        },
        {
          url: 'https://www.mkc.ca/wp-content/uploads/2022/06/nouria-nouman-kayaking-david-arnaud-red-bull-content-pool-scaled-1.jpeg'
        },
        {
          url: 'https://cdn.outsideonline.com/wp-content/uploads/2020/04/09/white-water-deaths_h.jpg'
        },
      ],
      allKayaks: ''
    }
  },
  mounted() {
    console.log('mounted')
    this.getAllKayaks()
  },
  methods: {
    async getAllKayaks() {
      this.allKayaks = await Kayak.get()
    }
  }
};
</script>
<style scoped>

</style>
