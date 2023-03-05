<template>
  <checkout-card :active-step="activeIndex" :current-step="currentStep" :step-title="$t('checkout_content.title')"
    :subtitle="$t('checkout_content.message')" :back-button-label="backButtonLabel" :next-button-label="nextButtonLabel"
    @next="pay" @back="back">
    <template slot="content-body">
      <div class="payment-block">
        <div class="content-img">
          <img src="@/assets/img/payment-credit-card.svg" />
        </div>
        <div class="content-title">{{ $t("payment.credit_card") }}</div>
        <div class="content-subtitle">
          You will be redirected to a secure payment platform. This is a secure
          process. The validation of your payment can take up to 24 hours.
        </div>
        <div class="content-img credit-logos">
          <img src="@/assets/img/credit-card-logos.png" />
        </div>
      </div>
    </template>
  </checkout-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CheckoutCard from "@/components/CheckoutCard.vue";
import CheckoutApi from "@/api/checkout.js";

export default {
  components: {
    CheckoutCard,
  },
  data() {
    return {
      myData: {
        name: "",
        lastName: "",
      },
      rules: {
        name: [
          { required: true, message: "Please input Name", trigger: "blur" },
        ],
        lastName: [
          {
            required: true,
            message: "Please input Last Name",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters("step", [
      "activeIndex",
      "currentStep",
      "stepTitle",
      "backButtonLabel",
      "nextButtonLabel",
    ]),
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      nextStep: "step/nextStep",
      previousStep: "step/previousStep",
      udpateLocaleMessage: "langs/udpateLocaleMessage",
    }),
    async pay() {
      const loading = this.$loading({
        lock: true,
      });
      try {
        const { data } = await CheckoutApi.payment();
        this.udpateLocaleMessage(data);
        this.nextStep();
        this.$router.push("/checkout/step-3-order-confirmation");
      } catch (error) {
        // this.$router.push({ name: NotFound });
      } finally {
        loading.close()
      }
    },
    back() {
      this.previousStep();
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.payment-block {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 200%;
  margin: 5% 5% 5% -50%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: content-box;
  text-align: center;
}

.content-img {
  margin: 0;
  padding: 2% 2%;
  display: flex;
  justify-content: center;
}

.credit-logos img {
  max-width: 20%;
}
</style>
