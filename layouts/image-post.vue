<script setup lang="ts">
const { article } = await useAsyncData('page-data', () => queryContent('/').findOne())
</script>

<template>
  <ContentDoc v-slot="{ doc }">
  <div class="width-contain">
    <div class="photo">
      <!--<img :src="'/static/photos/' + content.image" :alt="content.title">-->
      <ContentRenderer :value="doc" />
      <img :src="'' + doc.image.src" :alt="doc.title">
    </div>
    <div class="details">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md date-time">{{ doc.details.date }}</div>
          <div class="col-md photo-metadata">{{ doc.details.settings }}</div>
          <div class="col-md gps-location">{{ doc.details.location }}</div>
        </div>








      </div>
    </div>
  </div>
  </ContentDoc>
</template>