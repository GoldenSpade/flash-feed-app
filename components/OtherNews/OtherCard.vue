<template>
  <div class="other__card">
    <img
      :src="article.urlToImage"
      :alt="article.title"
      :title="article.title"
      class="other__card-img"
    />
    <a
      :href="article.url"
      target="_blank"
      v-tooltip="article.title"
      class="other__card-title"
    >
      {{ cutText(article.title, 0, 34) }}
    </a>
    <a
      :href="article.url"
      target="_blank"
      v-tooltip="article.description"
      class="other__card-subtitle"
    >
      {{ cutText(article.description, 0, 50) }}
    </a>
    <div class="other__card-author">
      <div class="other__card-label">Author:</div>
      <div class="other__card-author-name" v-tooltip="article.author">
        {{ cutText(article.author, 0, 8) }}
      </div>
    </div>
    <div class="other__card-published-at">
      <div class="other__card-date">Date:</div>
      <div class="other__card-time">
        {{ dateCorrection(article.publishedAt)[0] }}
      </div>
    </div>
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
