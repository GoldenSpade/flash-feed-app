<template>
  <section class="newest">
    <div class="container">
      <div class="newest__title-wrap">
        <div class="newest__title">Newest News</div>
        <SeeAllBtn
          :isActive="store.showMoreNewestNewsList"
          @event-click="store.toggleMoreNewsList"
        />
      </div>
      <div class="newest__wrap">
        <NewestCard
          v-for="article in store.newestNewsList"
          :key="article.title"
          :article="article"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMainStore } from '../stores/mainStore'

const store = useMainStore()
</script>
