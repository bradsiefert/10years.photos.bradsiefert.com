<template>
  <header>
    <a href="#main-content" class="visually-hidden-focusable">Skip to content</a>
    <navbar />
  </header>

  <main id="main-content">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </main>

  <footie />
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `10 Years of Photos by Brad Siefert / ${titleChunk}`: '10 Years of Photos by Brad Siefert';
    }
  }),
  useServerSeoMeta({
    description: 'A photo book of the first 10 Years of photographs by Brad Siefert.',
    ogTitle: '10 Years of Photos by Brad Siefert',
    ogDescription: 'A photo book of the first 10 Years of photographs by Brad Siefert.',
    ogImage: 'https://10years.photos.bradsiefert.com/sharing.jpg',
    twitterCard: 'summary_large_image'
  })

</script>