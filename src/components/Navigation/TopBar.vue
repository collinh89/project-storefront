<template>
	<div>
		<v-toolbar dark>
			<v-toolbar-title>Project StoreFront</v-toolbar-title>

			<v-spacer></v-spacer>
			<v-avatar v-if="isAuthenticated">
				<v-img :src="user.picture" :alt="user.name"></v-img>
			</v-avatar>
			<v-btn v-if="!isAuthenticated" @click="login"> Login</v-btn>
			<v-btn v-if="isAuthenticated" @click="logout"> Logout</v-btn>
		</v-toolbar>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

export default defineComponent({
	name: "TopBar",
	components: {},
	setup() {
		const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
		// const picture = user.value.picture;

		return {
			login: () => {
				loginWithRedirect();
			},
			logout: () => {
				logout({ returnTo: "http://localhost:8080/welcome" });
			},
			isAuthenticated,
			// eslint-disable-next-line vue/no-dupe-keys
			user,
			// picture,
		};
	},
});
</script>

<style scoped></style>
