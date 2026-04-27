<template>
    <div>
        <h1 class="text-4xl font-black">Hello World!</h1>
        <NuxtLink to="/about">About</NuxtLink>
        {{ counter }}
        <button @click="counter++">Click</button>
        <p v-if="pending">loading...</p>
        <ul v-else class="list-disc list-inside p-4">
            <li v-for="fruit in data?.fruits" :key="fruit.id">
                {{ fruit.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const counter = useState("count", () => 0);

const {data, pending, error} = useFetch("/api/hello", {server: false});

useHead({
    title: 'Nuxt Tesing',
})
</script>
