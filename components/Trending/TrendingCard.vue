<template>
  <div class="trending__card">
    <img
      :src="article.urlToImage"
      :alt="article.title"
      :title="article.title"
      class="trending__card-img"
    />
    <a
      :href="article.url"
      target="_blank"
      v-tooltip="article.title"
      class="trending__card-title"
    >
      {{ cutText(article.title, 0, 34) }}
    </a>
    <a
      :href="article.url"
      target="_blank"
      v-tooltip="article.description"
      class="trending__card-subtitle"
    >
      {{ cutText(article.description, 0, 50) }}
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>
