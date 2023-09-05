<template id="app">
  <WelcomePage />
</template>

<script>
import WelcomePage from "./pages/welcomepage.vue";

export default {
  name: "App",
  components: {
    WelcomePage,
  },
};
</script>
<style>
#app {
  height: 100vh;
  background: url("https://cdn.outsideonline.com/wp-content/uploads/2020/04/09/white-water-deaths_h.jpg");
  background-size: cover;
}
</style>
