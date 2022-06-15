import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import vuetify from "./plugins/vuetify";
// import { key, store } from "@/store";

const app = createApp(App);
app.use(router);
app.use(vuetify);
// app.use(store, key);

router.isReady().then(() => app.mount("#app"));
