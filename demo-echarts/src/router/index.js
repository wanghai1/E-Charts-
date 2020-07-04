import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    reduct: "/mybar"
  },
  {
    path: "/mybar",
    name: "MyBar",
    meta: {},
    component: () =>
      import(/* webpackChunkName: "bar" */ "../views/MyBar/MyBar.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
