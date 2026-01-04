<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card
          variant="outlined"
          flat
          max-width="93%"
          class="mx-auto d-flex"
          style="
            background-color: rgba(23, 50, 20);
            border-color: black;
            min-height: 280px;"
        >
          <v-row justify="center">
            <v-col cols="12" md="10" lg="9" xl="8">
              <v-row no-gutters class="fill-height">
                <v-col cols="5" sm="4" md="3" lg="3" class="d-flex">
                  <v-img
                    src="/src/assets/Professional photo.jpeg"
                    cover
                    height="100%"
                  ></v-img>
                </v-col>

                <v-col
                  cols="7"
                  sm="8"
                  md="9"
                  lg="9"
                  class="d-flex flex-column justify-center align-center text-center"
                >
                  <v-card-item class="text-center">
                    <v-card-title class="text-wrap" style="font-size: 25px">
                      Welcome to Hannah T. Nguyen's Adventure
                    </v-card-title>
                    <v-divider color="green" class="my-2"></v-divider>
                    <v-card-text class="pa-0">
                      Electrical and Computer Engineering Student
                    </v-card-text>
                  </v-card-item>

                  <v-card-actions class="mt-1" style="justify-content: center;">
                    <v-btn
                      variant="outlined"
                      color="green-lighten-2"
                      text="View my Quests"
                    ></v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
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
