<template>
  <div class="scroll-to-top" :class="{ 'scroll-to-top--show': isVisible }">
    <button class="scroll-to-top__btn" @click="scrollUp">
      <BaseIcon name="arrowUp" class="ico--ml-none" />
      <span class="scroll-to-top__text">TOP</span>
    </button>
  </div>
</template>

<script setup>
const isVisible = ref(false)
const scrollY = ref(0)

const updateScrollY = () => {
  scrollY.value = window.scrollY
  if (scrollY.value >= 900) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

watchEffect(() => {
  window.addEventListener('scroll', updateScrollY)
})

const scrollUp = () => {
  window.scrollTo(0, 0)
}
</script>
