<script setup>
import { seals, IconStar } from '../icons.js'
import { activities } from '../data.js'
import ScrollPanel from './ScrollPanel.vue'
</script>

<template>
  <section id="activities">
    <div class="section-head">
      <div class="seal-icon" v-html="seals.banner"></div>
      <div>
        <span class="kicker">Chapter Six</span>
        <h2>Orders &amp; Guilds</h2>
      </div>
    </div>

    <ScrollPanel v-reveal>
      <div class="honors-list">
        <div class="honor" v-for="a in activities" :key="a.title">
          <span class="star" v-html="IconStar"></span>
          <div>
            <h3>{{ a.title }}</h3>
            <p>{{ a.text }}</p>
          </div>
          <span class="when">{{ a.when }}</span>
        </div>
      </div>
    </ScrollPanel>
  </section>
</template>
