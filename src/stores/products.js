import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('product', () => {
	const products = ref([
		{
			id: "127836128736",
			name: "T-shirt",
			price: 19.99,
			stock: 8,
			imageLink: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C91sFKsIQrLL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png"
		},
		{
			id: "127886431988736",
			name: "Socks",
			price: 9.99,
			stock: 16,
			imageLink: "https://techwear-australia.com/cdn/shop/files/women-wearing-anime-girl-socks-grey-front-view-model.jpg?v=1706783533&width=1946"
		},
		{
			id: "127836412767812386128736",
			name: "Canada Goose Coat",
			price: 199.99,
			stock: 5,
			imageLink: "https://www.mytheresa.com/media/1094/1238/100/96/P00596504.jpg"
		},
		{
			id: "127213874687128736",
			name: "Hoodie",
			price: 49.99,
			stock: 10,
			imageLink: "https://i.ebayimg.com/images/g/yXoAAOSwPTxkhemr/s-l1200.jpg"
		}
	])

	const basketItems = ref([])

	return { products, basketItems }
})
