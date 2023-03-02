<template>
    <checkout-card :active-step="0" @next="next">
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
            'nextStep',
        ]),
        next(formName) {
            this.$refs['myData'].validate((valid) => {
                if (valid) {
                    this.nextStep();
                    this.$router.push('/checkout/step-2-payment')
                    
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        back(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style scoped>
.form-block {
    margin: 2% 0;
}
</style>