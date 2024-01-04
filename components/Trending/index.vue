<template>
  <section class="trending">
    <div class="container">
      <div class="trending__title-wrap">
        <div class="trending__title">Trending News</div>
      </div>
      <div class="trending__wrap">
        <div class="trending__col-1">
          <div class="trending__main">
            <img
              :src="store.trendingSingleNews.urlToImage"
              :alt="store.trendingSingleNews.title"
              :title="store.trendingSingleNews.title"
              class="trending__main-img"
            />
            <a
              :href="store.trendingSingleNews.url"
              target="__blank"
              class="trending__main-title"
            >
              {{ store.trendingSingleNews.title }}
            </a>
            <a
              :href="store.trendingSingleNews.url"
              target="_blank"
              class="trending__main-subtitle"
            >
              {{ store.trendingSingleNews.description + '...' }}
            </a>
          </div>
        </div>
        <div class="trending__col-2">
          <div class="trending__cards">
            <TrendingCard
              v-for="article in store.trendingNewsList"
              :key="article.title"
              :article="article"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMainStore } from '../../stores/mainStore'

const store = useMainStore()
</script>
