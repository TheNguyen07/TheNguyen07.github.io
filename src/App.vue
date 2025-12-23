<template>
  <v-app>
    <Navigation />

    <v-main class="pa-0">
      <v-container fluid class="pa-0 ma-0"> 
        <AboutMe />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/* 1. Set a single source of truth for the background color */
html, body, .v-application {
  background-color: #3b1a1a !important; 
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow-x: hidden;
}

/* 2. Fix the wrapper and force layout to zero */
.v-application__wrap {
  min-height: 100vh !important;
  margin: 0 !important;
  padding: 0 !important;
}

.v-main {
  /* This ensures Vuetify doesn't reserve space for a sidebar */
  --v-layout-left: 0px !important;
  --v-layout-top: 0px !important; /* Optional: in case there's a gap at the top */
  display: block; /* Ensures it behaves as a full-width block */
}

/* 3. Global font */
html {
  font-family: 'MedievalSharp', cursive, serif;
}


/* Remove padding from the container and force full width */
.v-container.v-container--fluid {
  padding: 0 !important;
  max-width: 100vw !important;
  width: 100% !important;
}

/* Ensure rows don't have side-margins */
.v-row {
  margin: 0 !important;
}

/* Ensure columns don't have side-padding */
.v-col-12 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* Ensure cards take up the full space of their parent */
.v-card.w-100 {
  width: 100% !important;
}
</style>
<script setup>
import Navigation from './components/Navigation.vue'
import AboutMe from './components/AboutMe.vue';

</script>
