<script setup>
import { seals } from '../icons.js'
import { education, courseworkNow, courseworkFall, courseworkDone } from '../data.js'
import ScrollPanel from './ScrollPanel.vue'
</script>

<template>
  <section id="education">
    <div class="section-head">
      <div class="seal-icon" v-html="seals.tower"></div>
      <div>
        <span class="kicker">Chapter One</span>
        <h2>Halls of Learning</h2>
      </div>
    </div>

    <ScrollPanel v-reveal>
      <div class="edu-grid">
        <div class="edu-item" v-for="e in education" :key="e.degree">
          <div>
            <h3>{{ e.school }}</h3>
            <span class="meta">{{ e.meta }}</span>
          </div>
          <span class="when">{{ e.when }}<span class="gpa-tag">GPA {{ e.gpa }}</span></span>
          <p>{{ e.degree }}</p>
        </div>
      </div>

      <div class="course-cluster">
        <h4>Currently in Session — Spring 2025</h4>
        <div class="tag-row">
          <span class="tag" v-for="c in courseworkNow" :key="c">{{ c }}</span>
        </div>
        <h4>Currently in Session — Fall 2025</h4>
        <div class="tag-row">
          <span class="tag" v-for="c in courseworkFall" :key="c">{{ c }}</span>
        </div>
        <h4>Completed Studies</h4>
        <div class="tag-row">
          <span class="tag" v-for="c in courseworkDone" :key="c">{{ c }}</span>
        </div>
      </div>
    </ScrollPanel>
  </section>
</template>
