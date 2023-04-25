import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/route.js";
import store from "@/modules/store.js";

import BaseCard from "@/components/ui/BaseCard.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);
app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-spinner", BaseSpinner);

app.mount("#app");
