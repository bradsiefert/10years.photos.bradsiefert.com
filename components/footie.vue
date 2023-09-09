<template>
  <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <NuxtLink  class="nav-link" v-if="prev" :to="prev._path">Prev</NuxtLink>
          </div>

          <div class="col">
            <NuxtLink class="nav-link" to="/tableofcontents">
              Table of Contents
            </NuxtLink>
          </div>

          <div class="col">
            <NuxtLink class="nav-link" v-if="next" :to="next._path">Next</NuxtLink>
          </div>
        </div>

      </div>
  </footer>
</template>

<script setup lang="ts">
const { prev, next, navigation } = useContent()
</script>