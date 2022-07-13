<template>
	<product-card></product-card>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import ProductCard from "@/components/Card/ProductCard.vue";

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Home",
	props: [],
	components: { ProductCard },
	setup() {
		onMounted(async () => {
			console.log("here");
		});

		return {};
	},
});
</script>

<style scoped></style>
