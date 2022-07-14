import { Product } from "@/types/products/product-types";
import axios from "axios";
import { ref } from "vue";
import aws from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

// import axios from "axios";

export const ProductService = {
	async createProduct(product: Product) {
		const s3Result: any = await uploadToS3(product.productPic[0]);
		product.pictureKey = s3Result.Location;
		axios
			.post(
				process.env.VUE_APP_PORT || "http://localhost:8081/product",
				{
					product_name: product.productName,
					product_desc: product.productDesc,
					product_price: product.productPrice,
					product_pic_key: product.pictureKey,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			// .then((resp) => {
			// 	console.log(resp.data);
			// })
			.catch((err) => {
				// Handle Error Here
				console.error(err);
			});
	},
	async getProducts() {
		const res = await axios.get(
			process.env.VUE_APP_PORT + "product/getAll" ||
				"http://localhost:8081/product/getAll"
		);

		return res.data;
	},
};

function uploadToS3(productPic: any) {
	const s3 = new aws.S3({
		region: "us-east-2",
		accessKeyId: process.env.VUE_APP_S3_ACCESS_KEY,
		secretAccessKey: process.env.VUE_APP_S3_SECRET_KEY,
		signatureVersion: "v4",
	});

	const imageName = uuidv4();

	const params = {
		Body: productPic,
		Bucket: "product-pics",
		Key: imageName,
		// Expires: 60,
	};

	return new Promise((resolve, reject) => {
		s3.upload(params, function (err: any, data: any) {
			if (err) {
				return reject(err);
			}

			return resolve(data);
		});
	});
}
