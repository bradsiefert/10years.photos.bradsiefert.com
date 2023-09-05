<template>
  <div class="container mt-4 mb-3">
    <div class="row">
      <h2>Table of Contents</h2>
      <div class="col-lg-12 text-block pt-0 pb-0">
        <ContentList path="/" v-slot="{ list }">
          <ol start="1" style="list-style-type: decimal-leading-zero;" class="mb-0">
            <li><NuxtLink to="/">Cover</NuxtLink></li>
            <li v-for="article in list" :key="article._path">
              <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
            </li>
          </ol>
        </ContentList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const contentQuery = queryContent()
definePageMeta({
  documentDriven: false
})
useHead({
  title: 'Table of Contents'
})
</script>