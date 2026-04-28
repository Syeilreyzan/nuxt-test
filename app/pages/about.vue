<template>
    <div>
        <PageTitle>About Page</PageTitle>
    </div>
    {{ counter }}
</template>

<script lang="ts" setup>
const counter = useState("count", () => 0);

</script>
