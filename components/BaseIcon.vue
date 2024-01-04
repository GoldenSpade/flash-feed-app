<template>
  <span v-html="svg"></span>
</template>

<script setup>
import icons from '@/components/icons'

const props = defineProps(['name'])
const svg = icons[props.name]
</script>
