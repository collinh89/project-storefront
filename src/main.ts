import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import App from "@/App.vue";
import router from "@/router";
import vuetify from "./plugins/vuetify";
// import { key, store } from "@/store";

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(
	createAuth0({
		domain: "dev-dpuef3rr.us.auth0.com",
		client_id: "YBtBT84gA23CmLDKuIDYa444MGkhjGJ3",
		redirect_uri: "http://localhost:8080/",
	})
);

// app.use(store, key);

router.isReady().then(() => app.mount("#app"));
