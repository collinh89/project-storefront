<template>
	<v-container>
		<v-row>
			<v-col
				md="4"
				class="col-styling"
				v-for="prod in products"
				:key="prod._id"
			>
				<v-card class="v-card-styling">
					<v-row>
						<v-img
							cover
							:src="prod.product_pic_key"
							class="prod-img"
							height="200"
						/>
					</v-row>
					<v-row class="row-styling name">
						<h1>{{ prod.product_name }}</h1>
					</v-row>
					<v-row class="row-styling">
						<label>{{ prod.product_desc }}</label>
					</v-row>
					<v-row class="price">
						<h2>${{ prod.product_price }}</h2>
					</v-row>
				</v-card>
			</v-col>
		</v-row></v-container
	>
</template>

<script lang="ts">
import { store } from "@/store";
import { ProductActions, ProductGetters } from "@/store/product";
import { computed, defineComponent, onMounted } from "vue";

export default defineComponent({
	name: "ProductCard",
	props: [],
	components: {},
	setup() {
		const products = computed(() => store.getters[ProductGetters.ALL_PRODUCTS]);

		onMounted(async () => {
			await store.dispatch(ProductActions.GET_PRODUCTS);

			console.log(products.value);
		});

		return { products };
	},
});
</script>

<style scoped>
.v-card-styling {
	padding: 15px;
	background-color: lightgray;
	box-shadow: gray;

	height: 100%;
	width: 100%;
}
.row-styling {
	display: flex;
	justify-content: center;
	padding: 10px;
}
.col-styling {
	width: 100%;
}
.prod-img {
	object-fit: cover !important;
}
.name {
	text-decoration: underline;
}
.price {
	display: flex;
	justify-content: flex-end;
	padding: 10px;
}
</style>
