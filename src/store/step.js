import { COMMIT } from "@/models/constant.js";
import { steps } from "@/models/steps.js";

export const step = {
  namespaced: true,
  state: {
    activeIndex: 0,
    imgPath: "",
  },
  mutations: {
    [COMMIT.NEXT_STEP](state, stepIndex) {
      state.activeIndex = stepIndex;
    },
    [COMMIT.PREVIOUS_STEP](state, stepIndex) {
      state.activeIndex = stepIndex;
    },
    [COMMIT.IMG_PATH](state, path) {
      state.imgPath = imgPath;
    },
  },
  actions: {
    nextStep: function ({ commit, state }) {
      var stepIndex = state.activeIndex + 1;
      if (stepIndex > steps.length) {
        stepIndex = steps.length;
      }
      commit(COMMIT.NEXT_STEP, stepIndex);
    },
    previousStep: function ({ commit, state }) {
      var stepIndex = state.activeIndex - 1;
      if (stepIndex < 0) {
        stepIndex = 0;
      }
      commit(COMMIT.PREVIOUS_STEP, stepIndex);
    },
    updateImgPath: function ({ commit, state }, path) {
      commit(COMMIT.IMG_PATH, path);
    },
  },
  getters: {
    activeIndex(state) {
      return state.activeIndex;
    },
    currentStep(state) {
      return steps.find((step) => step.value == state.activeIndex);
    },
    currentStepContent(state, getters) {
      if (!getters.currentStep) {
        return null;
      }
      const content = getters.currentStep.checkout_content;
      return JSON.stringify(content) === "{}" ? null : content;
    },
    stepTitle(state, getters) {
      return getters.currentStep ? getters.currentStep.label : "action.error";
    },
    backButtonLabel(state, getters) {
      return getters.currentStep ? getters.currentStep.buttons[0] : "";
    },
    nextButtonLabel(state, getters) {
      return getters.currentStep ? getters.currentStep.buttons[1] : "";
    },
    imgPath(state, getters) {
      return `@/assets/img/${imgPath}`;
    },
  },
};
