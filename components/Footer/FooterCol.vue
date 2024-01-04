<template>
  <div class="footer__col">
    <div class="footer__col-title">{{ colTitle }}</div>
    <ul class="footer__col-list">
      <li v-for="item in colItems" :key="item" class="footer__col-list-li">
        <a :href="item.link" target="_blank" class="footer__col-list-link">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  colTitle: {
    type: String
  },
  colItems: {
    type: Object
  }
})
</script>
