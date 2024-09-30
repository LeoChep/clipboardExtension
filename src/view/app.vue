<template>
    <div class="slider-demo-block" :style="style">
        <ElSlider v-model="sliderValue" range show-stops :max="30" @input="change" />
    </div>
</template>
<script setup lang="ts">
import { ComponentInternalInstance, ref } from 'vue';
import { ElSlider } from "element-plus"
import { getCurrentInstance } from 'vue'
const sliderValue = ref([0, 1])

const { appContext } = getCurrentInstance() as ComponentInternalInstance
console.log(appContext)
const dom = appContext.config.globalProperties.dom
let style = { 'width': dom.getAttribute('width') }
console.log(style)
let minDom: {
    [x: string]: any; value: any;
};
let maxDom: {
    [x: string]: any; value: any;
};
for (let child of dom.children) {
    if (child.className == 'min') {
        minDom = child;
        minDom = minDom as any as HTMLInputElement;
        console.log(minDom.value)
        if (minDom.value == undefined || minDom.value == null|| minDom.value == '')
            minDom.value = 0;
        sliderValue.value[0] = minDom.value
        minDom.addEventListener("change", () => {
            sliderValue.value[0] = minDom.value
        })
    }

    if (child.className == 'max') {
        maxDom = child;
        maxDom = maxDom as any as HTMLInputElement;
        if (maxDom.value == undefined || maxDom.value == null || maxDom.value == '')
            maxDom.value = 1;
        sliderValue.value[1] = maxDom.value
        maxDom.addEventListener("change", () => {
            sliderValue.value[0] = maxDom.value
        })
    }

}
const change = () => {

    if (sliderValue.value[0] > sliderValue.value[1]) {
        let max = sliderValue.value[0];
        sliderValue.value[0] = sliderValue.value[1]
        sliderValue.value[1] = max
    }
    minDom.value = sliderValue.value[0];
    maxDom.value = sliderValue.value[1]
}

</script>