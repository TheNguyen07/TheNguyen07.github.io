<script setup>
import { reactive } from 'vue'
import { seals, IconChevron } from '../icons.js'
import { feats } from '../data.js'
import ScrollPanel from './ScrollPanel.vue'

// Tracks which project titles are currently expanded. Multiple can be open at once.
const openTitles = reactive(new Set())

function toggle(title) {
  if (openTitles.has(title)) {
    openTitles.delete(title)
  } else {
    openTitles.add(title)
  }
}
</script>

<template>
  <section id="feats">
    <div class="section-head">
      <div class="seal-icon" v-html="seals.scroll"></div>
      <div>
        <span class="kicker">Chapter Five</span>
        <h2>Feats of Craftsmanship</h2>
      </div>
    </div>

    <ScrollPanel v-reveal>
      <div class="feats-list">
        <div
          class="feat-entry"
          v-for="f in feats"
          :key="f.title"
          :class="{ 'is-open': openTitles.has(f.title) }"
        >
          <button
            class="feat-header"
            type="button"
            :aria-expanded="openTitles.has(f.title)"
            :aria-controls="'feat-body-' + f.title"
            @click="toggle(f.title)"
          >
            <span class="feat-chevron" v-html="IconChevron"></span>
            <span class="feat-heading">
              <span class="feat-when">{{ f.when }}</span>
              <h3 class="feat-title">{{ f.title }}</h3>
              <p class="feat-teaser">{{ f.text }}</p>
            </span>
          </button>

          <div class="feat-body-wrap" :id="'feat-body-' + f.title">
            <div class="feat-body-inner">
              <div class="feat-body-content">
                <p v-for="(paragraph, i) in f.details" :key="i">{{ paragraph }}</p>
                <a v-if="f.link" :href="'https://' + f.link" target="_blank" rel="noopener">{{ f.link }} →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollPanel>
  </section>
</template>
