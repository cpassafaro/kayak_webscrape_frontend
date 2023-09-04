<template>
  <v-container fluid fill-height class="container-main">
    <v-layout justify-center align-center column>
      <v-row>
        <v-col justify-center align-center>
          <v-row class="row-header">Global Whitewater Kayak Shop</v-row>
          <v-row class="row-subtext">Click to enter </v-row>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "MainPage",
};
</script>
<style scoped>
.container-main {
  background: url("https://www.mkc.ca/wp-content/uploads/2022/06/nouria-nouman-kayaking-david-arnaud-red-bull-content-pool-scaled-1.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
.v-row {
  color: black;
  justify-content: center;
}
.v-col {
  margin-top: 10%;
}
</style>
