<template>
  <div class="newest__card">
    <div class="newest__card-img-wrap">
      <img
        :src="article.urlToImage"
        :alt="article.title"
        :title="article.title"
        class="newest__card-img"
      />
    </div>
    <a
      :href="article.url"
      target="_blank"
      v-tooltip="article.title"
      class="newest__card-title"
    >
      {{ cutText(article.title, 0, 34) }}
    </a>
    <a
      :href="article.url"
      target="_blank"
      v-tooltip="article.description"
      class="newest__card-subtitle"
    >
      {{ cutText(article.description, 0, 45) }}
    </a>
    <div class="newest__card-footer">
      <div class="newest__card-author">
        <span class="newest__card-footer-label">Author: </span>
        <span class="newest__card-footer-author" v-tooltip="article.author">{{
          cutText(article.author, 0, 6)
        }}</span>
      </div>
      <div class="newest__card-date">
        <span class="newest__card-footer-label">Date:</span>
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
