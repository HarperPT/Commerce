import { steps } from "@/models/index.js";
import { NEXT_STEP, PREVIOUS_STEP } from "@/models/constant.js";

export const step = {
  namespaced: true,
  state: {
    activeIndex: 1,
  },
  mutations: {
    [NEXT_STEP](state, stepIndex) {
      state.activeIndex = stepIndex;
    },
  },
  actions: {
    nextStep: function ({ commit, state }) {
      var stepIndex = state.activeIndex + 1;
      if (stepIndex > steps.length) {
        stepIndex = steps.length;
      }
      commit(NEXT_STEP, stepIndex);
    },
    previousStep: function ({ commit, state }) {
      var stepIndex = state.activeIndex - 1;
      if (stepIndex < 0) {
        stepIndex = 0;
      }
      commit(PREVIOUS_STEP, stepIndex);
    },
  },
  getters: {
    activeIndex(state) {
      return state.activeIndex;
    },
    currentStep(state) {
      return steps.find((step) => step.value == state.activeIndex);
    },
    stepTitle(state, getters) {
      console.log(getters.currentStep);
      return getters.currentStep ? getters.currentStep.label : "action.error";
    },
    subtitle(state, getters) {
      return getters.currentStep ? getters.currentStep.subtitle : "";
    },
    backButtonLabel(state, getters) {
      return getters.currentStep ? getters.currentStep.buttons[0] : "";
    },
    nextButtonLabel(state, getters) {
      return getters.currentStep ? getters.currentStep.buttons[1] : "";
    },
  },
};
