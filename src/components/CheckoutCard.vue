<template>
    <div class="checkout-card-block">
        <div class="content-title">{{ $te(stepTitle) ? $t(stepTitle) : stepTitle }}</div>
        <div class="content-padding">
            <slot name="content-top-icon"></slot>
        </div>
        <div class="content-subtitle">{{ subtitle }}</div>
        <div class="content-body content-padding">
            <slot name="content-body"></slot>
        </div>
        <div class="content-footer content-padding">
            <el-button type="primary" class="blue-button blue-button-left" @click="$emit('back')"
                v-if="backButtonLabel != ''">
                <i class="el-icon-arrow-left"></i>
                {{ backButtonLabel }}
            </el-button>
            <el-button type="primary" class="blue-button blue-button-right" @click="$emit('next')"
                v-if="nextButtonLabel != ''">
                {{ nextButtonLabel }}
                <i class="el-icon-arrow-right"></i>
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        activeIndex: {
            type: Number,
            default: 0
        },
        activeStep: {
            type: Number,
            default: 0
        },
        currentStep: {
            type: Object,
            default: () => { }
        },
        stepTitle: {
            type: String,
            default: "",
        },
        subtitle: {
            type: String,
            default: "",
        },
        backButtonLabel: {
            type: String,
            default: "",
        },
        nextButtonLabel: {
            type: String,
            default: "",
        },
    },
}
</script>

<style>
.checkout-card-block {
    width: 100%;
    background-color: var(--white);
    margin: 1% 0;
    padding: 3% 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    border: 2px solid black;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

.content-title {
    font-size: 36px;
    margin: 2% 0;
}

.content-subtitle {
    width: auto;
    text-align: center;
}

.content-body {
    width: 100%;
    flex-grow: 1;
}

.content-footer {
    width: 100%;

}

.content-padding {
    padding: 0 30%;
}

.blue-button {
    border: 2px solid var(--blue);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: 2px solid #6aaad0;
}

.blue-button:hover {
    background-color: #157bad;

}

.blue-button:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

}

.blue-button-left {
    float: left;
}

.blue-button-right {
    float: right;
}
</style>