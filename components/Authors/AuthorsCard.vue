<template>
  <div class="authors__card">
    <BaseIcon name="user" />
    <div class="authors__card-text">
      <div class="authors__card-name" v-tooltip="author.author">
        {{ cutText(author.author, 0, 10) }}
      </div>
      <div class="authors__card-label">
        Written articles:
        <span class="authors__card-count">{{ author.writtenArticles }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  author: {
    type: Object,
    required: true
  }
})
</script>
