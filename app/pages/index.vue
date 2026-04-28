<template>
    <PageTitle>Hello World!</PageTitle>
    <NuxtLink to="/about">About</NuxtLink>
    {{ counter }}
    <button @click="counter++">Click</button>
    <p v-if="pending">loading...</p>
    <ul v-else class="list-disc list-inside p-4">
        <li v-for="fruit in data?.fruits" :key="fruit.id">
            {{ fruit.name }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import PageTitle from '~/components/PageTitle.vue';

const counter = useState("count", () => 0);

const {data, pending, error} = useFetch("/api/hello", {server: false});

useHead({
    title: 'Nuxt Tesing',
})
</script>
