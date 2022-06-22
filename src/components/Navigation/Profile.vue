<template>
	<v-menu location="bottom">
		<template v-slot:activator="{ props }">
			<v-btn v-if="isAuthenticated" flat ripple="false" icon v-bind="props">
				<v-avatar>
					<v-img class="profile-button" :src="user.picture" :alt="user.name">
					</v-img>
				</v-avatar>
			</v-btn>
			<v-btn v-if="!isAuthenticated" flat ripple="false" icon v-bind="props">
				<v-icon>mdi-login</v-icon>
			</v-btn>
		</template>

		<v-card class="profile-card" width="200">
			<v-btn v-if="!isAuthenticated" @click="login"> Login</v-btn>
			<v-btn v-if="isAuthenticated" @click="logout"> Logout</v-btn>
		</v-card>
	</v-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Profile",
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

<style scoped>
.profile-card {
	margin-left: -150px;
}
.profile-button {
}
</style>
