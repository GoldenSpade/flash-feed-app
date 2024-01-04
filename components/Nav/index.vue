<template>
  <div>
    <nav class="nav">
      <div class="container">
        <div class="nav__wrap">
          <div class="nav__logo">
            <BaseIcon name="flash" />
            <a href="#" class="nav__logo-caption">Flash Feed</a>
          </div>

          <ul class="nav__menu">
            <li v-for="item in menuItems" class="nav__menu-item" :key="item.id">
              <a
                :href="item.link"
                target="__blank"
                :class="[
                  'nav__menu-link',
                  { 'nav__menu-link--active': item.isAcive }
                ]"
                @click="toggleActive(item.id)"
                >{{ item.name }}</a
              >
            </li>
          </ul>

          <a
            href="https://store.wsj.com/shop/emea/wsjaoemea23/?trackingCode=aaqyhdi0&cid=WSJ_RD_ALL_ACQ_NA&n2IKsaD9=n2IKsaD9"
            target="_blank"
            class="nav__btn"
          >
            Sign up for our newsletters
          </a>

          <BaseIcon
            name="openMenu"
            class="nav__menu-show-mobile"
            @click="openMenu"
            v-if="!isShow"
          />

          <BaseIcon
            name="closeMenu"
            class="nav__menu-show-mobile"
            @click="openMenu"
            v-else
          />
        </div>
      </div>
    </nav>
    <NavTheNavMobile
      :isShow="isShow"
      :menuItems="menuItems"
      @toggleMenuItem="toggleActive"
    />
  </div>
</template>

<script setup>
const isShow = ref(false)

window.onresize = () => {
  if (window.innerWidth >= 930) {
    isShow.value = false
  }
}

// blocking body's scroll
const blockScroll = () => {
  const body = document.querySelector('body')
  if (isShow.value) {
    body.classList.add('block-scroll')
  } else {
    body.classList.remove('block-scroll')
  }
}

const openMenu = () => {
  isShow.value = !isShow.value
  blockScroll()
}

const menuItems = ref([
  {
    id: 1,
    name: 'Latest',
    link: 'https://www.wsj.com/news/latest-headlines?mod=nav_top_section',
    isAcive: true
  },
  {
    id: 2,
    name: 'World',
    link: 'https://www.wsj.com/world?mod=nav_top_section',
    isAcive: false
  },
  {
    id: 3,
    name: 'Business',
    link: 'https://www.wsj.com/business?mod=nav_top_section',
    isAcive: false
  },
  {
    id: 4,
    name: 'Politics',
    link: 'https://www.wsj.com/politics?mod=nav_top_section',
    isAcive: false
  },
  {
    id: 5,
    name: 'Econommy',
    link: 'https://www.wsj.com/economy?mod=nav_top_section',
    isAcive: false
  },
  {
    id: 6,
    name: 'Tech',
    link: 'https://www.wsj.com/tech?mod=nav_top_section',
    isAcive: false
  },
  {
    id: 7,
    name: 'Finance',
    link: 'https://www.wsj.com/finance?mod=nav_top_section',
    isAcive: false
  }
])

const toggleActive = id => {
  const targetIdx = menuItems.value.findIndex(el => el.id === +id)
  menuItems.value.forEach(el => (el.isAcive = false))
  menuItems.value[targetIdx].isAcive = true
}
</script>

<style lang="scss">
.block-scroll {
  overflow: hidden;
}
</style>
