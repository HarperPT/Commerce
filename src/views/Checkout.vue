<template>
    <div class="container">
        <div class="navigator">
            <Navigator></Navigator>
        </div>
        <div class="content">
            content
            <router-view></router-view>
        </div>
        <div class="footer">footer</div>
    </div>
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
    components: {
        Navigator
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
.navigator{
    width: 100%;
    margin: 2% 0;
}

.content{
    height: 80vh;
}

.footer{
    position: absolute;
    width: 100%;
    bottom: 0;
    margin: 0;
}
</style>