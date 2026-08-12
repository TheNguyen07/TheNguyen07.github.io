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
import WeeklySchedule from './components/WeeklySchedule.vue'
import { ref } from 'vue'

const showSchedule = ref(false)
</script>

<template>
  <TheNav @toggle-schedule="showSchedule = !showSchedule" @go-home="showSchedule = false"/>

  <template v-if="!showSchedule">
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

  <WeeklySchedule v-else />
</template>
