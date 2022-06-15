<template>
	<top-bar></top-bar>
	<v-app>
		<router-view class="full-height"></router-view>
	</v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TopBar from "./components/Navigation/TopBar.vue";

export default defineComponent({
	name: "App",
	components: { TopBar },
	setup() {
		return {};
	},
});
</script>
