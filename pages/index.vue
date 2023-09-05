<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const contentQuery = queryContent()
definePageMeta({
  documentDriven: false
})
useHead({
  title: 'Home'
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10 col-lg-10 m-auto">
        <!--<ContentList path="/" v-slot="{ list }">
          <ol start="1" style="list-style-type: decimal-leading-zero;">
            <li><NuxtLink to="/">Cover</NuxtLink></li>
            <li v-for="article in list" :key="article._path">
              <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
            </li>
          </ol>
        </ContentList>-->

        <img
          src="~/assets/images/intro.jpg"
          class="img-fluid"
          alt="2007 to 2017, 10 Years of Photos, Brad Siefert"
        >
      </div>
    </div>
  </div>
</template>