<script setup>
import { seals } from '../icons.js'
import { certifications } from '../data.js'
import ScrollPanel from './ScrollPanel.vue'
</script>

<template>
  <section id="seals">
    <div class="section-head">
      <div class="seal-icon" v-html="seals.gem"></div>
      <div>
        <span class="kicker">Chapter Four</span>
        <h2>Seals of Mastery</h2>
      </div>
    </div>

    <ScrollPanel v-reveal>
      <div class="seal-grid">
        <div class="wax-seal" v-for="c in certifications" :key="c.title">
          <div class="disc">{{ c.code }}</div>
          <div>
            <h3>{{ c.title }}</h3>
            <span class="when">{{ c.when }}</span>
            <p>{{ c.text }}</p>
          </div>
        </div>
      </div>
    </ScrollPanel>
  </section>
</template>
