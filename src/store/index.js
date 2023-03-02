import Vue from "vue";
import Vuex from "vuex";
import { step } from "@/store/step.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { step: step },
});
