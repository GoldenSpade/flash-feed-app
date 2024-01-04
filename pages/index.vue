<template>
  <div class="home">
    <div class="main" v-if="store.dataReady">
      <Nav />
      <Header />
      <Newest />
      <Trending />
      <Authors />
      <OtherNews />
      <Footer />
      <ScrollToTop />
    </div>
    <Loader v-else />
  </div>
</template>

<script setup>
import { useMainStore } from '../stores/mainStore'

const store = useMainStore()

useHead({
  title: 'Flash feed app'
})

onMounted(() => store.loadData())
</script>
