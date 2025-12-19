<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app>
      <!-- Menu Icon only on small screens -->
      <v-app-bar-nav-icon
        v-if="$vuetify.display.smAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <!-- Title / Logo -->
      <v-toolbar-title>My Portfolio</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Buttons only on medium and larger screens -->
      <v-btn
        v-for="item in navItems"
        :key="item.title"
        text
        v-if="$vuetify.display.mdAndUp"
        @click="scrollToSection(item.link)"
      >
        {{ item.title }}
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer only for small screens -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      v-if="$vuetify.display.smAndDown"
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          @click="drawer = false"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main content -->
    <v-main>
      <v-container>
        <h1>Welcome to my portfolio</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const navItems = [
  { title: 'About', link: '#about' },
  { title: 'Portfolio', link: '#portfolio' },
  { title: 'Skills', link: '#skills' },
  { title: 'Contact', link: '#contact' },
]

function scrollToSection(link) {
  const element = document.querySelector(link)
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}
</script>



<!-- <template>
  <v-app>
    <v-main>
      <v-app-bar :elevation="0" rounded>
        <v-app-bar-title class="d-flex justify-center">Hannah T. Nguyen</v-app-bar-title>
      </v-app-bar> 
      <header>
        <img alt="Vue logo" class="logo" src="./assets/mylogo copy.png" width="125" height="125" />
        <div class="wrapper">
          <HelloWorld msg="Welcome to the Quest" />
        </div>
      </header>
      
      <main>
        <TheWelcome />
      </main>
    </v-main>
  </v-app>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<style scoped>
header {
  line-height: 2;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>-->

<style>
  body, #app {
    font-family: 'MedievalSharp', cursive, serif !important;
  }
</style> 