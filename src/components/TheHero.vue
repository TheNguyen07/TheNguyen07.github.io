<script setup>
import { DragonCrest } from '../icons.js'
</script>

<template>
  <header class="hero" id="top">
    <div class="wrap hero-grid">
      <div class="crest-wrap" v-html="DragonCrest"></div>
      <div>
        <p class="eyebrow">Cyber Corps Program · Tandy School of Computer Science</p>
        <h1 class="title"><span class="blackletter fk">Hannah T. Nguyen</span></h1>
        <p class="subtitle">Squire of the Cyber Realm — Electrical &amp; Computer Engineering, University of Tulsa</p>
        <p class="lede">
          A chronicle of studies, quests, and craftsmanship undertaken in the pursuit of cyber
          operations mastery — from reverse-engineered circuit boards to the halls of federal service.
        </p>
        <div class="hero-links">
          <a class="seal-btn" href="mailto:htn7254@utulsa.edu">Send a Raven (Email)</a>
          <a class="seal-btn outline" href="https://TheNguyen07.github.io" target="_blank" rel="noopener">
            Visit the Scriptorium
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
