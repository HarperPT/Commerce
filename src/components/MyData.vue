<template>
  <checkout-card :active-step="activeIndex" :current-step="currentStep" :step-title="$t('checkout_content.title')"
    :subtitle="$t('checkout_content.message')" :back-button-label="backButtonLabel" :next-button-label="nextButtonLabel"
    @next="next">
    <template slot="content-body">
      <div class="form-block">
        <el-form :model="myData" :rules="rules" ref="myData" label-width="120px" label-position="top">
          <el-form-item :label="$t('form.name')" prop="name">
            <el-input v-model="myData.name"></el-input>
          </el-form-item>
          <el-form-item :label="$t('form.last_name')" prop="lastName">
            <el-input v-model="myData.lastName"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </template>
  </checkout-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
  computed: {
    ...mapGetters("step", [
      "activeIndex",
      "currentStep",
      "backButtonLabel",
      "nextButtonLabel",
    ]),
  },
  mounted() {
    if (localStorage.getItem('token') != "") {
      const user = JSON.parse(localStorage.getItem('token'));
      this.myData.name = user.name;
      this.myData.lastName = user.lastName;
    }
  },
  methods: {
    ...mapActions({
      nextStep: "step/nextStep",
      toLocaleResponse: "langs/toLocaleResponse",
      udpateLocaleMessage: "langs/udpateLocaleMessage",
    }),
    next() {
      try {
        this.$refs["myData"].validate((valid) => {
          if (valid) {
            localStorage.setItem("token", JSON.stringify(this.myData));
            this.nextStep();
            this.$router.push("/checkout/step-2-payment");
          } else {
            alert("Invalid Form!!");
            return false;
          }
        });
      } catch (error) {

      } finally {
      }
    },
  },
};
</script>

<style scoped>
.form-block {
  margin: 2% 0;
}
</style>
