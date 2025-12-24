<template>
    <v-app-bar flat color="surface" class="border-outline" elevation="0">
      <v-app-bar-nav-icon
        v-if="$vuetify.display.smAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
        
      <v-app-bar-title>Hannah T. Nguyen</v-app-bar-title>
      
      <v-spacer></v-spacer>

      <div v-if="$vuetify.display.mdAndUp" class="px-4">
        <v-btn
          v-for="item in navItems"
          :key="item.title"
          variant="text"
          @click="scrollToSection(item.link)"
          class="text-green"
        >
          {{ item.title }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="left"
      overlay
      scrim="black"
      persistent="false"
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          @click="drawer = false"
          class="text-green-darken-2"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const navItems = [
  { title: 'About', link: '#about' },
  { title: 'Resume', link: '#skills' },
  { title: 'Projects', link: '#contact' },
  { title: 'Achievements', link: '#portfolio' },
]

function scrollToSection(link) {
  const element = document.querySelector(link)
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
/* MedievalSharp font import would go here */
body{
    font-family: 'MedievalSharp', cursive, serif
  }
</style>

<style scoped>

.border-outline::before,
.border-outline::after {
  content: "";
  position: absolute;
  left: 20px; /* Start the line 20px from the left */
  right: 20px; /* End the line 20px from the right */
  height: 2px; /* Line thickness */
  background-color: rgb(22, 97, 12); /* Line color */
}

.border-outline::before {
  top: 10px; /* Line at the top */
}

.border-outline::after {
  bottom: 10px; /* Line at the bottom */
}
</style>



