<template>
  <div
    :class="['see-all-btn', { 'see-all-btn--active': isActive }]"
    @click="$emit('event-click')"
  >
    {{ !isActive ? 'See all' : 'See less' }}
  </div>
</template>

<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['event-click'])
</script>
