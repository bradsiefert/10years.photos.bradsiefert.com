<script setup lang="ts">
defineProps<{
  doc: {
    title: string
    image?: { src: string; alt?: string }
    details?: { date?: string; settings?: string; location?: string }
  }
}>()
</script>

<template>
  <div class="image-post">
    <ContentRenderer :value="doc" />
    <div class="photo">
      <img :src="'' + doc.image?.src" :alt="doc.title">
    </div>
    <div class="details">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md" aria-label="Date taken">{{ doc.details?.date }}</div>
          <div class="col-md" aria-label="Camera settings">{{ doc.details?.settings }}</div>
          <div class="col-md" aria-label="Location">{{ doc.details?.location }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
