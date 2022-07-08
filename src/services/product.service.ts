import { Product } from "@/types/products/product-types";
import axios from "axios";
import { ref } from "vue";
import aws from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

// import axios from "axios";

export const ProductService = {
	async createProduct(product: Product) {
		await uploadToS3(product.productPic[0]);

		// const formData = new FormData();

		// formData.append("product_name", product.productName);
		// formData.append("product_desc", product.productDesc);
		// formData.append("product_price", product.productPrice);
		// formData.append("product_pic", product.productPic);
		// const prodObject = {
		// 	product_name: product.productName,
		// 	product_desc: product.productDesc,
		// 	product_price: product.productPrice,
		// 	product_pic: product.productPic,
		// };

		// const productJSON = JSON.stringify(prodObject);
		// console.log(formData);
		axios
			.post(
				"http://localhost:8081/product",
				{},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)

			.then((resp) => {
				console.log(resp.data);
			})
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
	},
};
function uploadToS3(productPic: any) {
	const s3 = new aws.S3({
		region: "us-east-2",
		accessKeyId: process.env.VUE_APP_S3_ACCESS_KEY,
		secretAccessKey: process.env.VUE_APP_S3_SECRET_KEY,
		signatureVersion: "v4",
	});

	console.log(
		process.env.VUE_APP_S3_ACCESS_KEY,
		process.env.VUE_APP_S3_SECRET_KEY
	);

	const imageName = uuidv4();

	const params = {
		Body: productPic,
		Bucket: "product-pics",
		Key: imageName,
		// Expires: 60,
	};

	return new Promise((resolve, reject) => {
		s3.upload(params, function (err: any, data: any) {
			console.log(data);
			if (err) {
				return reject(err);
			}

			return resolve(data);
		});
	});
}
