<template>
	<v-toolbar class="top-bar">
		<v-row class="top-bar-row" align="center">
			<v-col cols="3">
				<v-img
					class="site-logo"
					:src="require('../../assets/PSWordLogo.png')"
				/>
			</v-col>
			<v-spacer></v-spacer>
			<v-col class="profile-col" cols="3">
				<v-row justify="end">
					<profile></profile>
				</v-row>
			</v-col>
		</v-row>
	</v-toolbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import Profile from "./Profile.vue";

export default defineComponent({
	name: "TopBar",
	components: { Profile },
	setup() {
		Profile;
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

<style scoped>
.site-logo {
	margin-left: -25px;
	min-width: 350px;
	max-width: 350px;
	min-height: 80px;
	max-height: 80px;
}
.top-bar {
	min-height: 80px;
	max-height: 80px;
}
.top-bar-row {
	min-height: 80px;
	max-height: 80px;
}
.profile-col {
	justify-content: right;
}
</style>
