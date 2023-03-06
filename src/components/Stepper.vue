<template>
    <el-steps :active="activeIndex" finish-status="success" align-center>
        <el-step v-for="(step, i) in steps" :key="`step-${i}`" :title="$t(step.label)" finish-status="success"/>
    </el-steps>
</template>

<script>
import { mapGetters } from 'vuex'
import { steps } from "@/models/steps.js"
export default {
    name: "Stepper",
    data() {
        return {
            steps
        }
    },
    computed: {
        ...mapGetters('step', [
            'activeIndex',
            'currentStep',
            'stepTitle',
            'backButtonLabel',
            'nextButtonLabel',
        ]),
    }
}
</script>

<style></style>