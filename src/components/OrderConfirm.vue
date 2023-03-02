<template>
    <checkout-card :active-step="2" @next="pay" @back="back">
        <template slot="content-body">
            step-3-order-confirmation
        </template>
    </checkout-card>
</template>

<script>
import { mapActions } from 'vuex'
import CheckoutCard from "@/components/CheckoutCard.vue";
export default {
    components: {
        CheckoutCard
    },
    data() {
        return {
            myData: {
                name: '',
                lastName: '',
            },
            rules: {
                name: [
                    { required: true, message: 'Please input Name', trigger: 'blur' },
                ],
                lastName: [
                    { required: true, message: 'Please input Last Name', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        ...mapActions('step', [
            'previousStep',
            'nextStep',
        ]),
        pay() {
            alert('pay!');
            this.nextStep();
        },
        back() {
            this.previousStep();
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.checkout-card-block.payment-block {
    border: 1px solid gray;
    width: 100%;
    display: flex;
    flex-grow: 1;

}

.content-img {
    widows: 200px;
}
</style>