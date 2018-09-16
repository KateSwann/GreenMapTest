<template>
    <header class="header">
        <ul class="nav-items">
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/users">Users</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/placesmap">Places Map</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/placeslist">Places List</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<style scoped>
    .header {
        background-color: gold;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }

    .nav-items {
        list-style: none;
        padding: 40px;
        margin: 0;
        display: flex;
        justify-content: space-around;
        align-content: center;
    }
</style>