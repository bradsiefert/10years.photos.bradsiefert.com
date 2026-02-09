<template>
  <nav class="navbar top">
    <div class="container d-flex align-items-center">
      <div class="navbar-brand">
        <a class="nav-link d-flex align-items-center gap-2" target="_blank" href="https://photos.bradsiefert.com">
          <img
            width="32"
            src="@/assets/images/bks-camera.png"
            alt="Brad Siefert camera illustration logo"
          >
          <span class="d-none d-md-inline">Brad Siefert</span>
        </a>
      </div>
      <div class="abs-center-x">
        <NuxtLink to="/">
          <img src="@/assets/images/logo.svg" alt="10 Years of Photos, 2007 - 2017" class="navbar-logo">
        </NuxtLink>
      </div>
      <div class="ms-auto">
        <button
          type="button"
          class="nav-link theme-toggle"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <span class="d-none d-md-inline">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
          <PhSun v-if="isDark" :size="24"/>
          <PhMoonStars v-else :size="24"/>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { PhSun, PhMoonStars } from '@phosphor-icons/vue'

const STORAGE_KEY = '10years-theme'

const isDark = ref(false)

function applyTheme(dark: boolean) {
  if (import.meta.client) {
    if (dark) {
      document.body.setAttribute('dark-mode', '')
    } else {
      document.body.removeAttribute('dark-mode')
    }
  }
}

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
  if (import.meta.client) {
    try {
      localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
    } catch (_) {}
  }
}

onMounted(() => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark') {
      isDark.value = true
      applyTheme(true)
    } else if (stored === 'light') {
      isDark.value = false
      applyTheme(false)
    }
  } catch (_) {}
})
</script>
