<template>
	<div>
		<v-toolbar
			dark
			prominent
			src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
		>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>

			<v-toolbar-title>Vuetify</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon>mdi-export</v-icon>
			</v-btn>
		</v-toolbar>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "TopBar",
	props: ["user"],
	components: {},
	setup() {
		// const message = useMessage();

		// watch(
		//   () => isLoggedIn.value,
		//   () => {
		//     if (isLoggedIn.value) {
		//       showLogin.value = false;
		//     }
		//   }
		// );

		return {};
	},
});
</script>

<style scoped></style>
