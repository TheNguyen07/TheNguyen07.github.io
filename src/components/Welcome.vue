<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col>
        <v-card
          flat
          max-width="93%"
          class="mx-auto hero-card"
          style="background-color: rgb(20, 55, 15); border-color: green;"
        >
          <v-row no-gutters class="fill-height w-100">

            <v-col cols="3" class="pa-0 fill-height d-flex">
              <v-img
                src="/src/assets/Professional photo.jpeg"
                cover
                height="100%"
              />
            </v-col>

            <v-col
              :cols="mdAndUp ? 6 : 9"
              class="d-flex flex-column justify-center align-center text-center"
            >
              <v-card-title style="font-size: 25px" class="text-wrap">
                Welcome to Hannah T. Nguyen's Adventure
              </v-card-title>

              <v-divider class="w-100" color="green-darken-4" opacity=".7" thickness="2" gradient></v-divider>


              <v-card-text class="pa-2">
                Electrical and Computer Engineering Wizard
              </v-card-text>

              <v-btn
                variant="outlined"
                color="green-lighten-2"
              >
                View my Quests
              </v-btn>
            </v-col>

            <v-col v-if="mdAndUp" cols="3" class="pa-0 fill-height d-flex">
              <v-img
                src="/src/assets/castle.png"
                cover
                height="100%"
              />
            </v-col>

          </v-row>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useDisplay } from 'vuetify';
  const { mdAndUp } = useDisplay();
</script>

<style scoped>
/* Force containers to be 100% width at all times */
.v-container {
  max-width: none !important;
  width: 100% !important;
  padding: 0 !important;
  
}

body{
  font-family: 'MedievalSharp', cursive, serif !important
}

@media (min-width: 960px) {
  .hero-card {
    min-height: 350px;
  }
}
</style>
