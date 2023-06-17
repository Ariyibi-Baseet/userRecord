import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// General stylesheet
import "./assets/css/style.css";
// Vue toastification
import Toast from "vue-toastification";
// Vue toastification STyling
import "vue-toastification/dist/index.css";
// Formkit
import { plugin, defaultConfig } from "@formkit/vue";

createApp(App).use(router).use(plugin, defaultConfig).use(Toast).mount("#app");
