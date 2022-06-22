import { InjectionKey } from "vue";
import { Store, createStore, useStore as baseUseStore } from "vuex";

import { ProductState, productModule } from "./product";
// import { CoinState, coinModule } from "./coin";
// import { ThemeState, themeModule } from "./theme";
// import { PlayerState, playerModule } from "./player";
// import { MatchState, matchModule } from "./match";

export interface State {
	ProductState?: ProductState;
	// coin?: CoinState;
	// match?: MatchState;
	// theme?: ThemeState;
	// player?: PlayerState;
}

export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
	mutations: {},
	actions: {},
	modules: {
		product: productModule,
		// coin: coinModule,
		// match: matchModule,
		// theme: themeModule,
		// player: playerModule,
	},
	// strict: process.env.NODE_ENV !== "production",
});

export function useStore(): Store<State> {
	return baseUseStore(key);
}
