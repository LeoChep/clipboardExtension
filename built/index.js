import { createApp, ref } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./view/app.vue";
const dom = document.getElementsByClassName("tc-page-container-wrapper")[0];
const app = document.createElement("div");
app.id = "app";
dom.appendChild(app);
const rangeSelectorObjectArr = ref([]);
setInterval(() => {
    //获取所有的range，并为其创建绑定
    const rangeSelectorDomArr = document.getElementsByClassName("range-selector");
    for (let rangeSelectorDom of rangeSelectorDomArr) {
        if (!(rangeSelectorDom.getAttribute("rangeSelectorObjectHave") == "true")) {
            let rangeSelectorObject = { id: "" };
            let rangeSelectorWidget = document.createElement("div");
            rangeSelectorWidget.id = "range-selector-" + new Date().getTime();
            rangeSelectorDom.appendChild(rangeSelectorWidget);
            rangeSelectorObject.id = rangeSelectorWidget.id;
            rangeSelectorObjectArr.value.push(rangeSelectorObject);
            rangeSelectorDom.setAttribute("rangeSelectorObjectHave", "true");
            const vueApp = createApp(App);
            vueApp.config.globalProperties.dom = rangeSelectorDom;
            vueApp.use(ElementPlus);
            vueApp.mount("#" + rangeSelectorObject.id);
        }
    }
}, 500);
