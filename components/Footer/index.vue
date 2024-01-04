<template>
  <section class="footer">
    <div class="container">
      <div class="footer__wrap">
        <FooterCol :colTitle="col1Title" :colItems="col1Items" />
        <FooterCol :colTitle="col2Title" :colItems="col2Items" />
        <FooterCol :colTitle="col3Title" :colItems="col3Items" />
        <FooterCol :colTitle="col4Title" :colItems="col4Items" />
        <FooterCol :colTitle="col5Title" :colItems="col5Items" />
      </div>
    </div>
  </section>
</template>

<script setup>
const col1Title = ref('WSJ Membership')
const col1Items = ref([
  {
    name: 'Buy Side Exclusives',
    link: 'https://www.wsj.com/buyside/exclusives/?mod=wsjfooter'
  },
  {
    name: 'Subscription Options',
    link: 'https://subscribe.wsj.com/membership'
  },
  {
    name: 'Why Subscribe?',
    link: 'https://subscription.wsj.com/wsj-com-wall-street-journal/?mod=wsjfooter'
  },
  {
    name: 'Corporate Subscriptions',
    link: 'https://corporate.wsj.com/?mod=djm_wsjfooter_44670&LS=Website&utm_source=Website&utm_campaign=wsjfooter'
  },
  {
    name: 'WSJ Higher Education Program',
    link: ''
  },
  {
    name: 'WSJ High School Program',
    link: 'https://education.wsj.com/?mod=wsjfooter'
  },
  {
    name: 'Public Library Program',
    link: 'https://highschool.wsj.com/?mod=wsjfooter'
  },
  {
    name: 'WSJ Live',
    link: 'https://conferences.wsj.com/?mod=wsjfooter'
  },
  {
    name: 'Commercial Partnerships',
    link: 'https://commercialpartnerships.wsj.com/?mod=CP_PRT_BRD_FTR'
  }
])

const col2Title = ref('Customer Service')
const col2Items = ref([
  {
    name: 'Customer Center',
    link: 'https://customercenter.wsj.com/home'
  },
  {
    name: 'Contact Us',
    link: 'https://customercenter.wsj.com/contact'
  },
  {
    name: 'Cancel My Subscription',
    link: 'https://customercenter.wsj.com/subscription-cancel?subtype=wsj'
  }
])

const col3Title = ref('Tools & Features')
const col3Items = ref([
  {
    name: 'Newsletters & Alerts',
    link: 'https://www.wsj.com/newsletters/?mod=wsjfooter'
  },
  {
    name: 'Guides',
    link: 'https://www.wsj.com/news/how-to-guides?mod=wsjfooter'
  },
  {
    name: 'Topics',
    link: 'https://www.wsj.com/topics?mod=wsjfooter'
  },
  {
    name: 'My News',
    link: 'https://www.wsj.com/watchlist/news?mod=wsjfooter'
  },
  {
    name: 'RSS Feeds',
    link: 'https://www.wsj.com/news/rss-news-and-feeds?mod=wsjfooter'
  },
  {
    name: 'Video Center',
    link: 'https://www.wsj.com/video?mod=wsjfooter'
  },
  {
    name: 'Watchlist',
    link: 'https://www.wsj.com/watchlist/?mod=wsjfooter'
  },
  {
    name: 'Podcasts',
    link: 'https://www.wsj.com/podcasts?mod=wsjfooter'
  },
  {
    name: 'Visual Stories',
    link: 'https://www.wsj.com/story?mod=wsjfooter'
  }
])

const col4Title = ref('Ads')
const col4Items = ref([
  {
    name: 'Advertise',
    link: 'https://www.wsjmediakit.com/'
  },
  {
    name: 'Commercial Real Estate Ads',
    link: 'https://classifieds.wsj.com/advertise/real-estate-commercial/'
  },
  {
    name: 'Place a Classified Ad',
    link: 'https://classifieds.wsj.com/'
  },
  {
    name: 'Sell Your Business',
    link: 'https://classifieds.wsj.com/ad/Business-For-Sale-Ads'
  },
  {
    name: 'Sell Your Home',
    link: 'https://classifieds.wsj.com/advertise/real-estate-residential/'
  },
  {
    name: 'Recruitment & Career Ads',
    link: 'https://classifieds.wsj.com/advertise/careers/'
  },
  {
    name: 'Coupons',
    link: 'https://www.wsj.com/coupons'
  },
  {
    name: 'Digital Self Service',
    link: 'https://wsjbg-adsmanager.com/?action=login'
  }
])

const col5Title = ref('More')
const col5Items = ref([
  {
    name: 'About Us',
    link: 'https://www.wsj.com/about-us?mod=wsjfooter'
  },
  {
    name: 'Content Partnerships',
    link: 'https://wsj.com/partner'
  },
  {
    name: 'Corrections',
    link: 'https://www.wsj.com/news/column/Corrections?mod=wsjfooter'
  },
  {
    name: 'Jobs at WSJ',
    link: 'https://wsj.jobs/'
  },
  {
    name: 'News Archive',
    link: 'https://www.wsj.com/news/archive/?mod=wsjfooter'
  },
  {
    name: 'Register for Free',
    link: 'https://customercenter.wsj.com/register'
  },
  {
    name: 'Reprints & Licensing',
    link: 'https://www.djreprints.com/'
  },
  {
    name: 'Buy Issues',
    link: 'https://wsjshop.com/?mod=wsjfooter'
  },
  {
    name: 'WSJ Shop',
    link: 'https://wsjshop.com/collections/clothing?mod=wsjfooter'
  }
])
</script>
