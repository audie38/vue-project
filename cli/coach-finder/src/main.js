import { createApp } from "vue";
import App from "./App.vue";
import CardContainer from "./components/ui/CardContainer.vue";
import router from "./router.js";
import store from "./store/index.js";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);
app.use(router);
app.use(store);

app.component("base-card", CardContainer);

app.mount("#app");
