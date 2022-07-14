<template>
	<v-toolbar>
		<v-row align="center">
			<v-col cols="3">
				<button class="home-btn" v-on:click="toHome()">
					<v-img :src="require('../../assets/PSWordLogo.png')" />
				</button>
			</v-col>
			<v-col>
				<v-btn @click="toItemForm()">New Item</v-btn>
			</v-col>
			<v-col class="profile-col" cols="3">
				<v-row justify="end">
					<!-- <profile></profile> -->
				</v-row>
			</v-col>
		</v-row>
	</v-toolbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
// import Profile from "./Profile.vue";
import router from "@/router";

export default defineComponent({
	name: "TopBar",
	components: {
		// Profile
	},
	setup() {
		const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
		// const picture = user.value.picture;

		function toItemForm() {
			router.push("/new-item");
		}
		function toHome() {
			router.push("/");
		}
		return {
			login: () => {
				loginWithRedirect();
			},
			logout: () => {
				logout({ returnTo: "http://localhost:8080/welcome" });
			},
			isAuthenticated,
			user,
			toItemForm,
			toHome,
		};
	},
});
</script>

<style scoped>
.home-btn {
	height: 100%;
	width: 100%;
}
</style>
