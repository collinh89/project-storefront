import { Module } from "vuex";

// import { PlayerService } from "@/services/player.service";
import { State } from "@/store";
import { Product } from "@/types/products/product-types";
import { ProductService } from "@/services/product.service";
import { ref } from "vue";
// import { Player } from "@/types";

export type ProductState = {
	// isLoggedIn?: boolean;
	// player?: Player;
	// loading?: boolean;
};

export enum ProductActions {
	CREATE_PRODUCT = "product/createProduct",
}
// GET_PLAYERS = "player/getPlayers",
// GET_PLAYER = "player/getPlayer",

export enum ProductGetters {}
// IS_LOGGED_IN = "player/isLoggedIn",
// PLAYER = "player/player",
// LOADING = "player/loading",

export const productModule: Module<ProductState, State> = {
	namespaced: true,
	state: {},
	actions: {
		async createProduct({ commit }, { name, desc, price, pic }) {
			try {
				// commit("setLoading", true);
				const product = ref<Product>({
					productName: name,
					productDesc: desc,
					productPrice: price,
					productPic: pic,
				});
				const data = await ProductService.createProduct(product.value);
				// commit("setLoading", false);
			} catch (error) {
				// commit("setLoading", false);
				console.error(error);
			}
		},
		// async getPlayer({ commit }, id: string) {
		// 	try {
		// 		commit("setLoading", true);
		// 		const data = await PlayerService.getPlayer(id);
		// 		commit("setPlayerInfo", data);
		// 		commit("setisLoggedIn", true);
		// 		commit("setLoading", false);
		// 	} catch (error) {
		// 		commit("setLoading", false);
		// 		console.error(error);
		// 	}
		// },
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
		// setLoading(state, loading: boolean) {
		// 	state.loading = loading;
		// },
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
		// setPlayerInfo(state, player: Player) {
		// 	state.player = player;
		// },
	},
	getters: {
		// loading: (state) => state.loading,
		// isLoggedIn: (state) => state.isLoggedIn,
		// player: (state) => state.player,
	},
};
