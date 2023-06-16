import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// General stylesheet
import "./assets/css/style.css";

createApp(App).use(router).mount("#app");
