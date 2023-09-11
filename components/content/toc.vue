<template>
  <div class="container toc-wrap">
    <h1>Table of Contents</h1>
    <div class="row">
      <div class="col-lg">
        <div class="text-block pt-0 pb-0">
          <ContentList :query="column1" path="/" v-slot="{ list }">
            <ol start="1" class="toc mb-0">
              <li v-for="article in list" :key="article._path">
                <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
              </li>
            </ol>
          </ContentList>
        </div>
      </div>

      <!--<div class="col-lg">
        <div class="text-block pt-0 pb-0">
          <ContentList :query="column2" path="/" v-slot="{ list }">
            <ol start="6" class="toc mb-0">
              <li v-for="article in list" :key="article._path">
                <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
              </li>
            </ol>
          </ContentList>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script setup lang="ts">
  const column1 = { limit: 0 }
  const column2 = { skip: 5 }
</script>