<template>
  <v-container fluid fill-height class="container-main"
    >TESTTINGGGG
    <!-- <v-layout justify-center align-center column>
      <v-row>
        <v-col justify-center align-center class="container-col">
          <v-row class="row-header">Global Whitewater Kayak Shop</v-row>
          <v-row class="row-subtext">Click to enter </v-row>
        </v-col>
      </v-row>
    </v-layout> -->
  </v-container>
</template>

<script>
export default {
  name: "MainPage",
};
</script>
<style scoped>
.container-main {
  background-size: blue;
  width: 100%;
  height: 100%;
}
.v-row {
  color: black;
  justify-content: center;
}
.v-col {
  margin-top: 15%;
  background-color: white;
  width: 100%;
}
.row-header {
  font-size: 50px;
  font-weight: bold;
}
.row-subtext {
  text-decoration: underline;
}
.row-subtext:hover {
  cursor: pointer;
}
</style>
