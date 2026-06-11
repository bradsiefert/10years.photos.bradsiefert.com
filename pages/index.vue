<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryCollection('content').path('/').first()
)

useHead({
  title: () => page.value?.title
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
