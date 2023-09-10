<template>
  <footer class="footer">
    <nav class="navbar navbar-expand">
      <div class="container">
        <div class="float-start">
          <NuxtLink  class="nav-link" v-if="prev" :to="prev._path">Prev</NuxtLink>
        </div>

        <div class="abs-center-x" style="top: 0;">
          <NuxtLink class="nav-link" to="/tableofcontents">
            Table of Contents
          </NuxtLink>
        </div>

        <div class="float-end">
          <NuxtLink class="nav-link" v-if="next" :to="next._path">Next</NuxtLink>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script setup lang="ts">
const { prev, next } = useContent()
</script>