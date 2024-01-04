<template>
  <nav :class="['nav-mobile', { 'nav-mobile--show': isShow }]">
    <ul class="nav-mobile__menu">
      <li v-for="item in menuItems" :key="item.id" class="nav-mobile__item">
        <a
          :href="item.link"
          target="_blank"
          :class="[
            'nav-mobile__item-link',
            { 'nav-mobile__item-link--active': item.isAcive }
          ]"
          @click="toggleMenuItem(item.id)"
          >{{ item.name }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  isShow: Boolean,
  menuItems: Array
})

const emit = defineEmits(['toggleMenuItem'])

const toggleMenuItem = id => {
  emit('toggleMenuItem', id)
}
</script>
