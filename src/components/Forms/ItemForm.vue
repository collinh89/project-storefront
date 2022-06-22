<template>
	<v-card class="item-form-card">
		<form>
			<v-file-input
				v-model="productPic"
				accept=".jpg,.png,.jpeg"
				label="Item Picture"
			></v-file-input>
			<v-text-field v-model="productName" label="Product Name"></v-text-field>
			<v-text-field
				v-model="productDesc"
				label="Prodect Description"
			></v-text-field>
			<v-text-field v-model="productPrice" label="Price"></v-text-field>
			<v-btn class="mr-4" @click="submit"> submit </v-btn>
			<!-- <v-btn @click="clear"> clear </v-btn> -->
		</form>
	</v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Product } from "@/types/products/product-types";
import { store } from "../../store";
import { ProductActions } from "@/store/product";

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: "ItemForm",
	props: [],
	components: {},
	setup() {
		const productName = ref<string>("");
		const productDesc = ref<string>("");
		const productPrice = ref<number>(0);
		const productPic = ref<any[]>([]);

		const product = ref<Product>();

		// const player = computed(() => store.getters[PlayerGetters.PLAYER]);

		// await store.dispatch(AppStateActions.SET_TAB, {
		//   name: "Active Matches",
		//   Id: 3,
		// });

		async function submit() {
			product.value = {
				productName: productName.value,
				productDesc: productDesc.value,
				productPrice: productPrice.value,
				productPic: productPic.value,
			};
			await store.dispatch(ProductActions.CREATE_PRODUCT, {
				product: product.value,
			});
		}
		// watch(
		//   () => isLoggedIn.value,
		//   () => {
		//     if (isLoggedIn.value) {
		//       showLogin.value = false;
		//     }
		//   }
		// );

		return { productName, productDesc, productPrice, productPic, submit };
	},
});
</script>

<style scoped>
.item-form-card {
	margin-left: 5%;
	margin-right: 5%;
	margin-top: 5%;
}
</style>
