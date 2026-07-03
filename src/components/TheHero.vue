<script setup>
import { ref } from 'vue'
import { PersonSilhouette, HTNShield, KingsCrown } from '../icons.js'

const portraitSrc = '/Professional photo.jpeg'
const imgFailed = ref(false)
</script>

<template>
  <header class="hero" id="top">
    <div class="wrap hero-grid">
      <div class="crest-wrap">
        <div class="crown-badge" v-html="KingsCrown"></div>
        <div class="portrait-ring">
          <div class="portrait-frame">
            <img
              v-if="!imgFailed"
              :src="portraitSrc"
              alt="Portrait of Hannah T. Nguyen"
              class="portrait-img"
              @error="imgFailed = true"
            />
            
          </div>
        </div>
        <div class="htn-badge" v-html="HTNShield"></div>
      </div>
      <div>
        <p class="eyebrow">Department of Electrical and Computer Engineering · Tandy School of Computer Science</p>
        <h1 class="title"><span class="blackletter fk">Hannah T. Nguyen</span></h1>
        <p class="subtitle">King of the Electrical &amp; Computer Engineering kingdom, University of Tulsa</p>
        <p class="lede">
          Welcome to the chronicles of my studies, quests, and craftsmanship. From reverse-engineering circuits to becoming an embedded summoner and exploring the lands of code.
        </p>
        <div class="hero-links">
          <a class="seal-btn" href="mailto:htn7254@utulsa.edu">Send a Raven 🐦‍⬛ (Email)</a>
          <a class="seal-btn outline" href="https://TheNguyen07.github.io" target="_blank" rel="noopener">
            Visit the Archive (Resume)
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
