<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>