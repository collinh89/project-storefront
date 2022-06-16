<template>
	<top-bar></top-bar>
	<v-app>
		<welcome v-if="isLoggedIn === false"></welcome>
		<router-view v-if="isLoggedIn === true" class="full-height"></router-view>
	</v-app>
</template>

<script lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { defineComponent, ref, watch } from "vue";
import TopBar from "./components/Navigation/TopBar.vue";
import Welcome from "./views/Welcome.vue";

export default defineComponent({
	name: "App",
	components: { TopBar, Welcome },
	setup() {
		const { isAuthenticated } = useAuth0();
		const isLoggedIn = ref<boolean>(true);

		watch(
			() => isAuthenticated.value,
			() => {
				if (isAuthenticated.value === false) {
					isLoggedIn.value = false;
				} else {
					isLoggedIn.value = true;
				}
			}
		);
		return { isAuthenticated, isLoggedIn };
	},
});
</script>
