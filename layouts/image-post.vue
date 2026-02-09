<template>
  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc">
      <template #not-found>
        <p>Oh no! 404 Error. Document not found.</p>
      </template>

      <template #empty>
        <p>Loading...</p>
      </template>
    </ContentRenderer>
    <div class="photo">
      <img :src="'' + doc.image.src" :alt="doc.title">
    </div>
    <div class="details">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md" aria-label="Date taken">{{ doc.details.date }}</div>
          <div class="col-md" aria-label="Camera settings">{{ doc.details.settings }}</div>
          <div class="col-md" aria-label="Location">{{ doc.details.location }}</div>
        </div>
      </div>
    </div>
  </ContentDoc>
</template>