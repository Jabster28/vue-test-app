import "./registerServiceWorker";

import Vue from "vue";
import RouterNav from "vue-router-nav";

import App from "./App.vue";
import router from "./router";

Vue.use(RouterNav);
Vue.config.productionTip = false;

new Vue({router, render : function(h) { return h(App); }}).$mount("#app");
