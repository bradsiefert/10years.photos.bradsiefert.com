<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(
  () => `content-${route.path}`,
  () => queryCollection('content').path(route.path).first(),
  { watch: [() => route.path] }
)

if (import.meta.server && !page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

watch(page, (value) => {
  if (value === null) {
    showError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})

useHead({
  title: () => page.value?.title
})
</script>

<template>
  <image-post v-if="page?.layout === 'image-post'" :doc="page" />
  <text-post v-else-if="page?.layout === 'text-post'" :doc="page" />
  <ContentRenderer v-else-if="page" :value="page" />
</template>
