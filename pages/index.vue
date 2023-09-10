<script setup lang="ts">
useHead({
  title: 'Home'
})
</script>

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
  </ContentDoc>
</template>