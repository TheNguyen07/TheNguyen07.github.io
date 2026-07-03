<script setup>
import TheNav from './components/TheNav.vue'
import TheHero from './components/TheHero.vue'
import SectionEducation from './components/SectionEducation.vue'
import SectionArmory from './components/SectionArmory.vue'
import SectionQuests from './components/SectionQuests.vue'
import SectionSeals from './components/SectionSeals.vue'
import SectionFeats from './components/SectionFeats.vue'
import SectionActivities from './components/SectionActivities.vue'
import SectionHonors from './components/SectionHonors.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNav />
  <TheHero />
  <main class="wrap">
    <SectionEducation />
    <SectionArmory />
    <SectionQuests />
    <SectionSeals />
    <SectionFeats />
    <SectionActivities />
    <SectionHonors />
  </main>
  <TheFooter />
</template>
