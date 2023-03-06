<template>
    <div class="container">
        <div class="navigator-block">
            <navigator></navigator>
        </div>
        <div class="content">
            <checkout-card :stepTitle="$t('hint.not_found')" :subtitle="$t('hint.redirect_checkout')"></checkout-card>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import { REDIRECT_TIMEOUT, ROUTE } from "@/models/constant.js";
import CheckoutCard from "@/components/CheckoutCard.vue";
import Navigator from "@/components/Navigator.vue";

export default {
    components: {
        Navigator,
        CheckoutCard,
    },
    mounted() {
        setTimeout(() => {
            this.$router.push({ name: ROUTE.MY_DATA });
        }, REDIRECT_TIMEOUT);
    },
};
</script>

<style></style>
