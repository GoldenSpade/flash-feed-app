<template>
  <section class="authors">
    <div class="container">
      <div class="authors__title-wrap">
        <div class="authors__title">Authors</div>
        <SeeAllBtn
          :isActive="store.showMoreAuthors"
          @event-click="store.toggleShowMoreAuthors"
        />
      </div>
      <div class="authors__wrap">
        <AuthorsCard
          v-for="author in store.authorsList"
          :key="author"
          :author="author"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMainStore } from '../../stores/mainStore'

const store = useMainStore()
</script>
