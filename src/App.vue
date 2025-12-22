<template>
  <v-app>
    <Navigation></Navigation>
    
    <v-main>
      <AboutMe></AboutMe>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from './components/Navigation.vue'
import AboutMe from './components/AboutMe.vue';

</script>

<style>
/* MedievalSharp font import would go here */
body, #app {
    font-family: 'MedievalSharp', cursive, serif !important;
  }
html, body {
  overflow-x: hidden; /* Prevents tiny horizontal scrolls */
}

.v-application {
  background-color: rgb(33, 30, 30) !important;
}

/* This ensures the text doesn't look slightly to the right 
   if the scrollbar takes up space 
*/
.w-100 {
  width: 100% !important;
}
</style>

