<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
					:src="require('../assets/logo.svg')"
					class="my-3"
					contain
					height="200"
				/>
			</v-col>

			<v-col class="mb-4">
				<h1 class="display-2 font-weight-bold mb-3">
					Welcome to the Vuetify 3 Beta
				</h1>

				<p class="subheading font-weight-regular">
					For help and collaboration with other Vuetify developers,
					<br />please join our online
					<a href="https://community.vuetifyjs.com" target="_blank"
						>Discord Community</a
					>
				</p>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-5">Important Links</h2>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-5">Ecosystem</h2>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Home",
	props: [],
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
