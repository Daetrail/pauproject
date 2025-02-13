<script setup>

</script>

<template>
    <header class="p-3 text-bg-dark">

        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <h3>Claire's shop</h3>
            </a>

            <ul class="nav col-12 col-lg-auto ms-2 me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <RouterLink :to="{name: 'home'}" class="nav-link px-2 text-white">Home</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name: 'basket'}" class="nav-link px-2 text-white">Basket</RouterLink>
                </li>
            </ul>

            <form class="col-12 col-lg-4 mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
            </form>

            <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
        </div>
    </header>
</template>

<style scoped>

</style>