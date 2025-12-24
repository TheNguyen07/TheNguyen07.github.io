<template>
  <v-app>
    <Navigation />
    <!-- <Test /> -->
      <v-main>
        <!-- <Test /> -->
        <!-- <test2 /> -->
         <sheet />
      </v-main>
  </v-app>
</template>

<style>
/* 1. Set a single source of truth for the background color */
html, body, .v-application {
  background-color: #221010 !important;

}

.v-main {
  /* width: 100vw !important; */
  /* min-width: 100vw !important; */
  /* padding-left: 0 !important; */
  /* display: block !important;  */
  /* position: relative !important; */
}

/* Ensure the wrapper doesn't try to center your content */
/* .v-application__wrap {
  display: block !important;
} */

/* 3. Global font */
html {
  font-family: 'MedievalSharp', cursive, serif !important;
}

</style>

<script setup>
import Navigation from './components/Navigation.vue';
import AboutMe from './components/AboutMe.vue';
import Test from './components/Test.vue';
import test2 from './components/Test2.vue';
import sheet from './components/testing-sheet.vue';
</script>
