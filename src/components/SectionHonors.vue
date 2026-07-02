<script setup>
import { seals, IconStar } from '../icons.js'
import { honors } from '../data.js'
import ScrollPanel from './ScrollPanel.vue'
</script>

<template>
  <section id="honors">
    <div class="section-head">
      <div class="seal-icon" v-html="seals.laurel"></div>
      <div>
        <span class="kicker">Chapter Six</span>
        <h2>Honors of the Realm</h2>
      </div>
    </div>

    <ScrollPanel v-reveal>
      <div class="honors-list">
        <div class="honor" v-for="h in honors" :key="h.title">
          <span class="star" v-html="IconStar"></span>
          <div>
            <h3>{{ h.title }}</h3>
            <p>{{ h.text }}</p>
          </div>
          <span class="when">{{ h.when }}</span>
        </div>
      </div>
    </ScrollPanel>
  </section>
</template>
