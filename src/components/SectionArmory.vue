<script setup>
import { seals } from '../icons.js'
import { armory } from '../data.js'
import ScrollPanel from './ScrollPanel.vue'
</script>

<template>
  <section id="armory">
    <div class="section-head">
      <div class="seal-icon" v-html="seals.sword"></div>
      <div>
        <span class="kicker">Chapter Two</span>
        <h2>The Armory</h2>
      </div>
    </div>

    <ScrollPanel v-reveal>
      <div class="armory-grid">
        <div class="armory-card" v-for="a in armory" :key="a.title">
          <h3>
            <span class="icon" v-html="seals[a.icon]"></span>
            {{ a.title }}
          </h3>
          <ul>
            <li v-for="i in a.items" :key="i">{{ i }}</li>
          </ul>
        </div>
      </div>
    </ScrollPanel>
  </section>
</template>
