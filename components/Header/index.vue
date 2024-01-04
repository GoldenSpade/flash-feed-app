<template>
  <section class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="header__col-1">
          <a
            :href="store.headerSingleNews.url"
            target="_blank"
            class="header__title"
          >
            {{ store.headerSingleNews.title }}
          </a>
          <a
            :href="store.headerSingleNews.url"
            target="_blank"
            class="header__subtitle"
          >
            {{ store.headerSingleNews.description + '...' }}
          </a>
        </div>
        <div class="header__col-2">
          <HeaderCard
            v-for="article in store.headerNewsList"
            :key="article.title"
            :article="article"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMainStore } from '../stores/mainStore'

const store = useMainStore()
</script>
