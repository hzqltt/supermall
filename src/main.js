import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 为Vue设置一个事件总线（$bus），
// 并赋值一个Vue实例。因为vue实例是可以发送和接收事件的
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
