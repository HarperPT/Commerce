import Vue from "vue";
import Vuex from "vuex";
import { step } from "@/store/step.js";
import { langs } from "@/store/langs.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    loadConfigI18n({ state, getters }) {
      const currentStepContent = getters['step/currentStepContent']
      if (currentStepContent) {
        this.dispatch("langs/udpateLocaleMessage", currentStepContent);
      }
    },
  },
  getters: {},
  modules: { step: step, langs: langs },
});
