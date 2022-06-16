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
				<h1 class="display-2 font-weight-bold mb-3">Welcome Page</h1>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Welcome",
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
