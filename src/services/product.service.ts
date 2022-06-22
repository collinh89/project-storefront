import { Product } from "@/types/products/product-types";
// import axios from "axios";

export const ProductService = {
	async createProduct(product: Product) {
		console.log("Product:", product);
		// const res = await axios.get("http://localhost:8000/players/" + id);÷
		// return res.data;
	},
};
