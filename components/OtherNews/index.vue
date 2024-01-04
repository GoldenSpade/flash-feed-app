<template>
  <section class="other">
    <div class="container">
      <div class="other__title-wrap">
        <div class="other__title">Other News</div>
        <SeeAllBtn
          :isActive="store.showMoreOtherNews"
          @event-click="store.toggleShowMoreOtherNews"
        />
      </div>
      <div class="other__wrap">
        <OtherNewsOtherCard
          v-for="article in store.otherNewsList"
          :key="article.title"
          :article="article"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMainStore } from '../../stores/mainStore'

const store = useMainStore()
</script>
