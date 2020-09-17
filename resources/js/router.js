import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/CheckAvailability.vue"),
    },
    {
      path: "/reservations",
      name: "reservations",
      component: () => import("./components/Reservation.vue"),
    }
  ]
});

export default router;