import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('product', () => {
	const products = ref([
		{
			id: "127836128736",
			name: "T-shirt",
			price: 19.99,
			stock: 8
		},
		{
			id: "127886431988736",
			name: "Socks",
			price: 9.99,
			stock: 16
		},
		{
			id: "127836412767812386128736",
			name: "Canada Goose Coat",
			price: 199.99,
			stock: 5
		},
		{
			id: "127213874687128736",
			name: "Hoodie",
			price: 49.99,
			stock: 10
		}
	])

	const basketItems = ref([])

	return { products, basketItems }
})
