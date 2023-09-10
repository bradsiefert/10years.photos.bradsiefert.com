<template>
  <footer class="footer">
    <nav class="navbar navbar-expand">
      <div class="container">
        <NuxtLink  class="nav-link" v-if="prev" :to="prev._path">Prev</NuxtLink>

        <NuxtLink class="nav-link" to="/tableofcontents">
          Table of Contents
        </NuxtLink>

        <NuxtLink class="nav-link" v-if="next" :to="next._path">Next</NuxtLink>
      </div>
    </nav>
  </footer>
</template>

<script setup lang="ts">
const { prev, next } = useContent()
</script>