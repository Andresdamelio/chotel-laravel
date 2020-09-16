import Vue from "vue";
import router from "./router.js";
import Layout from "./components/Layout.vue";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: (h) => h(Layout),
}).$mount("#app");
