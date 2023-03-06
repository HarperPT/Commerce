import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueI18n from "vue-i18n";
import en from "./langs/en";
import zh_CN from "./langs/zh_CN";
import "./plugins/element.js";
import router from "./router/index";

Vue.config.productionTip = false;

const messages = {
  en: en,
  zh_CN: zh_CN,
};
export const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

new Vue({
  store,
  router,
  render: (h) => h(App),
  i18n,
}).$mount("#app");
