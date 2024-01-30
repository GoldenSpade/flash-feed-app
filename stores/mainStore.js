import { defineStore } from 'pinia'
import { mockNewsData } from '../mocks/mockNews'

export const useMainStore = defineStore('mainStore', () => {
  const config = useRuntimeConfig()
  const newsList = ref([])
  const dataReady = ref(false)

  const getNewsList = async () => {
    try {
      // START OF CODE FOR MOCK DATA
      const data = mockNewsData
      newsList.value = data.articles.filter(
        el => el.urlToImage && el.title && el.description && el.url && el.author
      )
      // END OF CODE FOR MOCK DATA

      //START CODE FOR REAL API

      // const data = await fetchNews(
      //   'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=',
      //   config.public.API_KEY
      // )
      // newsList.value = data.articles.filter(
      //   el => el.urlToImage && el.title && el.description && el.url && el.author
      // )

      if (data.status === 'ok') {
        dataReady.value = true
      } else {
        dataReady.value = false
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Header
  const headerSingleNews = ref({})
  const headerNewsList = ref([])

  const addHeaderData = () => {
    headerSingleNews.value =
      newsList.value[randomInteger(4, newsList.value.length)]
    headerNewsList.value = newsList.value.filter((_, idx) => idx > 1 && idx <= 5)
  }

  // Newest
  const newestNewsList = ref([])
  const showMoreNewestNewsList = ref(false)

  const addNewestData = () => {
    if (showMoreNewestNewsList.value) {
      newestNewsList.value = newsList.value.filter(
        (_, idx) => idx > 5 && idx <= 25
      )
    } else {
      newestNewsList.value = newsList.value.filter(
        (_, idx) => idx > 5 && idx <= 9
      )
    }
  }

  const toggleMoreNewsList = () => {
    showMoreNewestNewsList.value = !showMoreNewestNewsList.value
    addNewestData()
    const newestBlock = document.querySelector('.newest')
    setTimeout(() => {
      newestBlock.scrollIntoView()
    }, 100)
  }

  // Trending
  const showMoreTrendingNewsList = ref(false)
  const trendingSingleNews = ref({})
  const trendingNewsList = ref([])

  const addTrendingData = () => {
    trendingSingleNews.value = newsList.value[24]

    trendingNewsList.value = newsList.value.filter(
      (_, idx) => idx > 25 && idx <= 31
    )
  }

  // Authors
  const authorsList = ref([])
  const showMoreAuthors = ref(false)

  const addAuthorsData = () => {
    const allAuthors = newsList.value.map(el => el.author).filter(el => el)

    const authors = allAuthors
      .map(el => {
        if (el.includes(',')) {
          return el.split(',')
        } else {
          return el
        }
      })
      .flat()

    const authorsWithoutDoubles = authors
      .filter((el, idx) => authors.indexOf(el) === idx)
      .sort((a, b) => a.localeCompare(b))
      .map(el => ({
        author: el,
        writtenArticles: 0
      }))

    if (showMoreAuthors.value) {
      authorsList.value = [...authorsWithoutDoubles]
    } else {
      authorsList.value = authorsWithoutDoubles.filter((_, idx) => idx < 15)
    }
    //Counting articles by authors
    newsList.value.forEach(a => {
      authorsList.value.forEach(b => {
        if (a.author.includes(b.author)) {
          b.writtenArticles++
        }
      })
    })
  }

  const toggleShowMoreAuthors = () => {
    showMoreAuthors.value = !showMoreAuthors.value
    addAuthorsData()
    const authorsBlock = document.querySelector('.authors')
    setTimeout(() => {
      authorsBlock.scrollIntoView()
    }, 100)
  }

  //OtherNews
  const otherNewsList = ref([])
  const showMoreOtherNews = ref(false)

  const addOtherNewsData = () => {
    if (showMoreOtherNews.value) {
      otherNewsList.value = newsList.value.filter(
        (_, idx) => idx > 29 && idx <= newsList.value.length
      )
    } else {
      otherNewsList.value = newsList.value.filter(
        (_, idx) => idx > 29 && idx <= 41
      )
    }
  }

  const toggleShowMoreOtherNews = () => {
    showMoreOtherNews.value = !showMoreOtherNews.value
    addOtherNewsData()
    const otherNewsBlock = document.querySelector('.other')
    setTimeout(() => {
      otherNewsBlock.scrollIntoView()
    }, 100)
  }

  const loadData = async () => {
    await getNewsList()
    addHeaderData()
    addNewestData()
    addTrendingData()
    addAuthorsData()
    addOtherNewsData()
  }

  return {
    config,
    newsList,
    dataReady,
    getNewsList,
    headerSingleNews,
    headerNewsList,
    addHeaderData,
    newestNewsList,
    showMoreNewestNewsList,
    addNewestData,
    toggleMoreNewsList,
    showMoreTrendingNewsList,
    trendingSingleNews,
    trendingNewsList,
    addTrendingData,
    authorsList,
    showMoreAuthors,
    addAuthorsData,
    toggleShowMoreAuthors,
    otherNewsList,
    showMoreOtherNews,
    addOtherNewsData,
    toggleShowMoreOtherNews,
    loadData
  }
})
