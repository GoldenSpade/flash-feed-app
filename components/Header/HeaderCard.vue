<template>
  <div class="header__card">
    <div class="header__card-img-wrap">
      <img
        :src="article.urlToImage"
        :alt="article.title"
        :title="article.title"
        class="header__card-img"
      />
    </div>
    <div class="header__card-text">
      <div class="header__source">
        <span class="header__source-author">{{ article.source.name }}</span>
        <span class="header__source-date"
          >{{ dateCorrection(article.publishedAt)[0] }},
          {{ dateCorrection(article.publishedAt)[1] }}</span
        >
      </div>
      <a
        :href="article.url"
        target="_blank"
        v-tooltip="article.title"
        class="header__card-title"
      >
        {{ cutText(article.title, 0, 40) }}
      </a>
      <a
        :href="article.url"
        target="_blank"
        v-tooltip="article.description"
        class="header__card-descr"
      >
        {{ cutText(article.description, 0, 51) }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  article: Object,
  required: true
})
</script>

<style></style>
