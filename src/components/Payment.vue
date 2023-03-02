<template>
    <checkout-card :active-step="1" @next="pay" @back="back">
        <template slot="content-body">
            <div class="checkout-card-block payment-block">
                <div class="content-img"><i class="el-icon-bank-card"></i></div>
                <div class="content-title">Payment</div>
                <div class="content-subtitle">You will be redirected to a secure payment platform. This is a
                    secure process. The validation of your payment can take up to
                    24 hours.</div>
            </div>
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
            this.$router.push('/checkout/step-3-order-confirmation')
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
.content-img{
    widows: 200px;
}
</style>