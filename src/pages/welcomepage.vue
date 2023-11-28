<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="surface-variant" title="WhiteWater Kayak Deals"></v-app-bar>
    <v-main class="container-main">
      <!-- <v-row>
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
      </v-row> -->
      <v-row>
        <displayGrid></displayGrid>
      </v-row>
    </v-main>
  </v-layout>
</template>

<script>
import displayGrid from '../layouts/displayGrid.vue'
export default {
  props: {},
  name: "WelcomePage",
  components: { displayGrid },
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
    }
  },
};
</script>
<style>
.container-main{
  background-color: #5F9EA0;
}
</style>
