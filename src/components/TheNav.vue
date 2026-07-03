<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { DragonCrest } from '../icons.js'

const links = [
  { href: '#education', label: 'Learning Halls' },
  { href: '#armory', label: 'Armory' },
  { href: '#quests', label: 'Quests' },
  { href: '#seals', label: 'Seals of Mastery' },
  { href: '#feats', label: 'Craftship' },
  { href: '#activities', label: 'Guilds' },
  { href: '#honors', label: 'Honors' },
]

// Points at /public/resume.pdf — see README "Updating your resume" to swap the file.
const resumeHref = '/Nguyen_Resume_Website.pdf'

const isOpen = ref(false)
const navEl = ref(null)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function handleOutsideClick(event) {
  if (isOpen.value && navEl.value && !navEl.value.contains(event.target)) {
    closeMenu()
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <nav class="ribbon" ref="navEl">
    <div class="inner">
      <a href="#top" class="brand" @click="closeMenu">
        <span class="brand-icon" v-html="DragonCrest"></span>
        Hannah T. Nguyen
      </a>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="nav-panel"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>

      <div class="nav-right" id="nav-panel" :class="{ 'is-open': isOpen }">
        <ul>
          <li v-for="link in links" :key="link.href">
            <a class="nav-link" :href="link.href" @click="closeMenu">{{ link.label }}</a>
          </li>
        </ul>
        <a class="nav-resume" :href="resumeHref" target="_blank" rel="noopener" @click="closeMenu">
          The Full Scroll (Résumé)
        </a>
      </div>
    </div>
  </nav>
</template>
