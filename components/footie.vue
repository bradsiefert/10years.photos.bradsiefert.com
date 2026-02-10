<template>
  <footer class="footer">
    <nav class="navbar navbar-expand" aria-label="Page navigation">
      <div class="container">
        <div class="float-start">
          <NuxtLink class="nav-link d-flex align-items-center gap-2" v-if="prev" :to="prev._path" :aria-label="'Previous: ' + prev.title">
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
          <NuxtLink class="nav-link d-flex align-items-center gap-2" v-if="next" :to="next._path" :aria-label="'Next: ' + next.title">
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

function isInputFocused() {
  if (import.meta.server) return true
  const el = document.activeElement as HTMLElement | null
  if (!el) return false
  const tag = el.tagName.toLowerCase()
  const editable = el.getAttribute?.('contenteditable') === 'true'
  return tag === 'input' || tag === 'textarea' || tag === 'select' || editable
}

function handleKeydown(e: KeyboardEvent) {
  if (isInputFocused()) return
  if (e.key === 'ArrowLeft' && prev.value) {
    navigateTo(prev.value._path)
  } else if (e.key === 'ArrowRight' && next.value) {
    navigateTo(next.value._path)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>