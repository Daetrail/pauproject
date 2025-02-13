<script setup>
import {computed, onBeforeMount, ref} from 'vue';
import {useProductsStore} from '@/stores/products.js';

const productStore = useProductsStore();

const basketProducts = ref([]);

onBeforeMount(() => {
    // User add multiple items in basket //
    // Detect the first occurrence item in basket
    // Subsequent occurrence leads to incrementation of "count" property

    for (const id of productStore.basketItems) {
        for (const product of productStore.products) {
            if (product.id === id) {
                const isAlreadyInBasket = basketProducts.value.find(product => {
                    return product.id === id;
                })

                if (isAlreadyInBasket) {
                    isAlreadyInBasket.count++
                }
                else {
                    basketProducts.value.push(product);
                    basketProducts.value[basketProducts.value.length - 1].count = 1;
                }
            }
        }
    }
    console.log(basketProducts.value)
})

const totalCost = computed(() => {
    let totalCost = 0;
    for (const item of basketProducts.value) {
        totalCost += item.price * item.count;
    }

    return parseFloat(totalCost.toFixed(2));
})

</script>

<template>
    <div class="container mt-3">
        <h1>My basket</h1>
        <p>Your total: £{{ totalCost }}</p>
        <div class="row gy-5 mt-2">
            <div class="col-3" v-for="product in basketProducts" :key="product.id">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Price: £{{ product.price }}</h6>
                        <p class="card-text">Stock: {{ product.stock }}</p>
                        <p class="card-text">Count: {{ product.count }}</p>
                        <a href="#" class="card-link">Remove from basket</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>