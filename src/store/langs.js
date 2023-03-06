import axios from "axios";
import { i18n } from "@/main.js";
import { responseKey, checkoutLocaleMessage } from "@/models/index.js";
import { COMMIT } from "@/models/constant.js";

export const langs = {
  namespaced: true,
  state: {
    activeLocale: 'en',
    loadedLanguages: {},
  },
  mutations: {
    [COMMIT.LAST_LOCALE_MESSAGE](state, messages) {
      state.loadedLanguages = messages;
    },
  },
  actions: {
    async udpateLocaleMessage({ dispatch, commit, state }, response) {
      await dispatch("toLocaleResponse", response);
      const messages = state.loadedLanguages;
      for (const [key, value] of Object.entries(messages)) {
        const result = { ...i18n.messages[key], checkout_content: value };
        i18n.setLocaleMessage(key, result);
      }
    },
    toLocaleResponse({ commit, state, dispatch }, response) {
      let messages = {};
      if (!response.hasOwnProperty("title")) {
        return;
      }
      const langs = Object.keys(response.title);
      langs.forEach((lang) => {
        messages[lang] = new checkoutLocaleMessage();
        responseKey.forEach((key) => {
          messages[lang][key] = response[key][lang];
        });
      });
      commit(COMMIT.LAST_LOCALE_MESSAGE, messages);
    },
  },
  getters: {
    activeLocale(state) {
      return state.activeLocale;
    },
  },
  modules: {},
};
