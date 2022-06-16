import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/Home.vue"),
	},
	{
		path: "/welcome",
		name: "Welcome",
		component: () => import("@/views/Welcome.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// router.beforeEach((to, from, next) => {
// 	// const { isAuthenticated } = useAuth0();
// 	// if (to.name === "Home" && isAuthenticated.value === false) {
// 	// 	next({ name: "Welcome" });
// 	// } else {
// 	// 	next();
// 	// }
// });

export default router;
