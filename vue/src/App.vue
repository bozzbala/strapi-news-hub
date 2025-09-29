<script setup>
import { ref, onMounted } from "vue";
import { getCollection } from "@/utils/api.js";

const pages = ref([]);

onMounted(async () => {
  // получить список страниц
  pages.value = await getCollection("articles");

});
</script>

<template>
  <div>
    <h2>Список страниц:</h2>
    <pre>{{ pages }}</pre>

    <h2>Одна страница:</h2>
    <pre></pre>
  </div>
</template>
