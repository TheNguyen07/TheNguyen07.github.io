<script setup>
import { seals } from '../icons.js'
import { quests } from '../data.js'
import ScrollPanel from './ScrollPanel.vue'
</script>

<template>
  <section id="quests">
    <div class="section-head">
      <div class="seal-icon" v-html="seals.shield"></div>
      <div>
        <span class="kicker">Chapter Three</span>
        <h2>Quests Undertaken</h2>
      </div>
    </div>

    <ScrollPanel v-reveal>
      <div class="timeline">
        <div class="quest" v-for="q in quests" :key="q.org + q.when">
          <span class="when">{{ q.when }}</span>
          <h3>{{ q.org }}</h3>
          <p class="role">{{ q.role }}</p>
          <p>{{ q.text }}</p>
        </div>
      </div>
    </ScrollPanel>
  </section>
</template>
