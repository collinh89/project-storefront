import { Module } from "vuex";
import { State } from "@/store";
import { Product } from "@/types/products/product-types";
import { ProductService } from "@/services/product.service";
import { ref } from "vue";

export type ProductState = {
	// isLoggedIn?: boolean;
	products?: Product[];
	loading?: boolean;
};

export enum ProductActions {
	CREATE_PRODUCT = "product/createProduct",
	GET_PRODUCTS = "product/getProducts",
}
// GET_PLAYER = "player/getPlayer",

export enum ProductGetters {
	ALL_PRODUCTS = "product/allProducts",
	LOADING = "product/loading",
}
// IS_LOGGED_IN = "player/isLoggedIn",

export const productModule: Module<ProductState, State> = {
	namespaced: true,
	state: {},
	actions: {
		async createProduct({ commit }, { name, desc, price, pic }) {
			try {
				commit("setLoading", true);
				const product = ref<Product>({
					productName: name,
					productDesc: desc,
					productPrice: price,
					productPic: pic,
				});
				const data = await ProductService.createProduct(product.value);
				commit("setLoading", false);
			} catch (error) {
				commit("setLoading", false);
				console.error(error);
			}
		},
		async getProducts({ commit }) {
			try {
				commit("setLoading", true);
				const res = await ProductService.getProducts();
				commit("setProductsInfo", res);
				commit("setLoading", false);
			} catch (error) {
				commit("setLoading", false);
				console.error(error);
			}
		},
		// async updatePlayer({ commit }, player: Player) {
		// 	try {
		// 		commit("setLoading", true);
		// 		const data = await PlayerService.updatePlayer(player);
		// 		commit("setPlayerInfo", data);
		// 		commit("setLoading", false);
		// 	} catch (error) {
		// 		commit("setLoading", false);
		// 		console.log(error);
		// 	}
		// },
	},
	mutations: {
		setLoading(state, loading: boolean) {
			state.loading = loading;
		},
		// setisLoggedIn(state, bool: boolean) {
		// 	state.isLoggedIn = bool;
		// },
		// clearPlayerInfo(state) {
		// 	state.player = {
		// 		email: "",
		// 		playerId: "",
		// 		playerDetails: {
		// 			username: "",
		// 			theme: "dark",
		// 		},
		// 	};
		// },
		setProductsInfo(state, productArr: Product[]) {
			state.products = productArr;
		},
	},
	getters: {
		loading: (state) => state.loading,
		// isLoggedIn: (state) => state.isLoggedIn,
		allProducts: (state) => state.products,
	},
};
