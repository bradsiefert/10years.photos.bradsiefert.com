<script setup lang="ts">
defineProps<{
  doc: {
    title?: string
    layout?: string
    body?: unknown
  }
}>()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-xl-8 m-auto">
        <ContentRenderer :value="doc" class="text-block" />
      </div>
    </div>
  </div>
</template>
