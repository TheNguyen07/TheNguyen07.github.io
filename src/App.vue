<template>
  <v-app>
    <Navigation />

    <v-main class="pt-6 pa-0">
      <AboutMe />
    </v-main>
  </v-app>
</template>

<style>
/* 1. Set a single source of truth for the background color */
html, body, .v-application {
  background-color: #221010 !important;

}
.v-main {
  width: 100vw !important;
  min-width: 100vw !important;
  /* Kills the "ghost" space reserved for sidebars */
  --v-layout-left: 0px !important; 
  --v-layout-right: 0px !important;
  padding: 0 !important;
  /* Ensures everything starts from the absolute left */
  display: block !important; 
}

/* Ensure the wrapper doesn't try to center your content */
.v-application__wrap {
  display: block !important;
}

/* 3. Global font */
html {
  font-family: 'MedievalSharp', cursive, serif;
}

</style>

<script setup>
import Navigation from './components/Navigation.vue'
import AboutMe from './components/AboutMe.vue';

</script>
