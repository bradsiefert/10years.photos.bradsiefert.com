<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc">
      <template #not-found>
        <h1>Oh no! 404 Error. Document not found.</h1>
      </template>

      <template #empty>
        <h1>Loading...</h1>
      </template>
    </ContentRenderer>
    <div class="width-contain">
      <div class="photo">
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