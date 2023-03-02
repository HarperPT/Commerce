<template>
    <div class="container">
        <div class="navigator">
            <Navigator></Navigator>
        </div>
        <div class="content">
            <CheckoutContent></CheckoutContent>
        </div>
        <div class="footer">footer</div>
    </div>
</template>

<script>
import Navigator from "@/components/Navigator.vue";
import Stepper from "@/components/Stepper.vue";
import CheckoutContent from "@/components/CheckoutContent.vue";
export default {
    components: {
        Navigator,
        Stepper,
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
.navigator {
    width: 100%;
    margin: 2% 0;
}

/* Content */
.content {
    /* border: 1px solid red; */
    height: 80vh;
    position: relative;
    margin: 2% 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.content>* {
    /* border: 1px solid darkblue */
}

.footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    margin: 0;
}
</style>