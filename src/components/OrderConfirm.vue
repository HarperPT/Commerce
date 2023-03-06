<template>
  <checkout-card :active-step="3" :step-title="$t('checkout_content.title')" :subtitle="$t('checkout_content.message')">
    <template slot="content-top-icon">
      <div class="content-img">
        <img src="@/assets/img/payment-certificate.svg" />
      </div>
    </template>

  </checkout-card>
</template>

<script>
import { mapActions } from "vuex";
import CheckoutCard from "@/components/CheckoutCard.vue";
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
  methods: {
    ...mapActions("step", ["previousStep", "nextStep"]),
  },
};
</script>

<style scoped>
.checkout-card-block.payment-block {
  border: 1px solid gray;
  width: 100%;
  display: flex;
  flex-grow: 1;
}

.content-img {
  margin: 10% 0;
}
</style>