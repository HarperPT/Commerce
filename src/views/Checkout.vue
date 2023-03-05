<template>
    <div class="container">
        <div class="navigator-block">
            <navigator></navigator>
        </div>
        <div class="content">
            <checkout-content></checkout-content>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import Navigator from "@/components/Navigator.vue";
import CheckoutContent from "@/components/CheckoutContent.vue";
export default {
    components: {
        Navigator,
        CheckoutContent
    },
    name: 'Checkout',
    data() {
        return {}
    },
    methods: {

    }
}
</script>


<style scoped>


</style>