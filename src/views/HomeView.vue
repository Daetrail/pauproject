<script setup>
import {useProductsStore} from '@/stores/products.js';
import { useToast } from 'primevue/usetoast';

const productStore = useProductsStore();

const toast = useToast();

function addToBasket(productId) {
    const numberOfProductsInBasket = productStore.basketItems.filter(product => {
        return product === productId
    }).length

    const numberOfProductsInStock = productStore.products.find(product => {
        return product.id === productId
    }).stock

    if (numberOfProductsInBasket >= numberOfProductsInStock) {
        toast.add({ severity: 'error', summary: 'Out of stock', detail: 'There are no more of this item in stock.', life: 3000 });
        return;
    }

    else if (numberOfProductsInStock - numberOfProductsInBasket <= 10) {
        toast.add({ severity: 'info', summary: 'Low stock', detail: 'This item is running out of stock.', life: 3000 });
    }

    productStore.basketItems.push(productId);
    toast.add({ severity: 'success', summary: 'Added to basket', detail: 'Successfully added item to basket!', life: 3000 });
}

</script>

<template>
    <div class="container mt-3">
        <div class="row gy-5">
            <div class="col-3" v-for="product in productStore.products" :key="product.id">
                <div class="card" style="width: 18rem;">
                    <img :src="product.imageLink" class="card-img-top card-product-image mx-auto">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Price: £{{ product.price }}</h6>
                        <p class="card-text">Stock: {{ product.stock }}</p>
                        <a href="#" class="card-link" @click="addToBasket(product.id)">Add to basket</a>
                        <a href="#" class="card-link">Buy now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.card-product-image {
    width: 250px;
    height: 250px;
}

</style>