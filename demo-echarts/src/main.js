import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 使用swiper 插件
import "swiper/dist/css/swiper.css"; //需要在单独把这个css引入
import VueAwesomeSwiper from "vue-awesome-swiper"; //引入这个npm包
Vue.use(VueAwesomeSwiper);

// 使用 echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
