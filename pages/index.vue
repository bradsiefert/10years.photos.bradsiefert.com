<script setup lang="ts">
const { page } = useContent()

useHead({
  title: 'Home'
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>