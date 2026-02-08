<template>
  <footer class="footer">
    <nav class="navbar navbar-expand">
      <div class="container">
        <div class="float-start">
          <NuxtLink class="nav-link d-flex align-items-center gap-2" v-if="prev" :to="prev._path">
            <PhArrowLeft :size="24" />
            Prev
          </NuxtLink>
        </div>

        <div class="abs-center-x" style="top: 0;">
          <NuxtLink class="nav-link d-flex align-items-center gap-2" to="/tableofcontents">
            <PhImages :size="24" />
            <span class="d-none d-sm-inline">Table of Contents</span>
            <span class="d-inline d-sm-none">TOC</span>
          </NuxtLink>
        </div>

        <div class="float-end">
          <NuxtLink class="nav-link d-flex align-items-center gap-2" v-if="next" :to="next._path">
            Next
            <PhArrowRight :size="24" />
          </NuxtLink>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { PhArrowLeft, PhArrowRight, PhImages } from '@phosphor-icons/vue'
const { prev, next } = useContent()
</script>