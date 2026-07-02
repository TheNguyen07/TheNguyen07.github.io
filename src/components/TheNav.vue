<script setup>
const links = [
  { href: '#education', label: 'Halls of Learning' },
  { href: '#armory', label: 'Armory' },
  { href: '#quests', label: 'Quests' },
  { href: '#seals', label: 'Seals of Mastery' },
  { href: '#feats', label: 'Feats of Craft' },
  { href: '#honors', label: 'Honors' },
  { href: '#references', label: 'Correspondents' },
]
</script>

<template>
  <nav class="ribbon">
    <div class="inner">
      <a href="#top" class="brand">
        <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="94" fill="#0f2015" stroke="#b8944f" stroke-width="6" />
        </svg>
        Hannah T. Nguyen
      </a>
      <ul>
        <li v-for="link in links" :key="link.href">
          <a class="nav-link" :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
