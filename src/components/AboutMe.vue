<template>
  <v-container fluid class="pa-0 ma-0 fill-width-bg">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card
          color="green-darken-4"
          title="Evening sunset"
          subtitle="Take a walk down the beach"
          flat
          rounded="0"
          class="w-100"
        >
          </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <v-card color="green" variant="outlined" flat rounded="0" class="w-100">
          <v-card-item>About Me</v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.fill-width-bg {
/* This ensures the container itself stretches and holds the color */
min-width: 100%;
min-height: 100vh;
background-color: #2a1a1a !important; /* Your reddish-dark color */
}
/* Force containers to be 100% width at all times */
.v-container {
  max-width: none !important;
  width: 100% !important;
}
</style>
