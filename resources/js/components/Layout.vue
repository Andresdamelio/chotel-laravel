<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>


<script>

import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "layout",

  components: {
    "v-header": Header,
    "v-footer": Footer
  }
}
</script>