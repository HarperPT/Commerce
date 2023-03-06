<template>
    <div class="content-block">
        <div class="content-stepper">
            <stepper></stepper>
        </div>
        <div class="content-info">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Stepper from "@/components/Stepper.vue";

export default {
    props: {
        activeStep: {
            type: Number,
            default: 0
        },
    },
    components: {
        Stepper,
    },
    computed: {
    }
}
</script>

<style scoped>
.content-block {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content-stepper {
    width: 50%;
    margin: 1% 25%;
}

.content-info {
    width: 100%;
    display: flex;
    flex-grow: 1;
}
</style>