import { createApp } from "vue";
import App from "./App.vue";

import store from "./modules/store.js";
import router from "./router/route.js";

import BaseAlert from "@/components/base/BaseAlert.vue";
import BaseCard from "@/components/base/BaseCard.vue";
import BaseSpinner from "@/components/base/BaseSpinner.vue";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);
app.use(store);
app.use(router);

app.component("base-alert", BaseAlert);
app.component("base-card", BaseCard);
app.component("base-spinner", BaseSpinner);

app.mount("#app");
