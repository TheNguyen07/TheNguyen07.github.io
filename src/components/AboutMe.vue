<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row no-gutters class="mt-16">
      <v-col cols="12">
        <v-card 
          variant="outlined" 
          style="background-color: rgba(23, 50, 20); border-color: green;"
          rounded="3" 
        >
          <v-row no-gutters>
            <v-col cols="4" sm="3" md="2" lg="1">
              <v-img
                src="/src/assets/Professional photo.jpeg"
                cover
                height="100%"
              ></v-img>
            </v-col>

            <v-col cols="8" sm="9" md="10" lg="11">
              <v-card-item class="pl-4">
                <v-card-title>Welcome to Hannah T. Nguyen's Adventure</v-card-title>
                <v-card-subtitle></v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text class="mt-1">
                  Electrical and Computer Engineering Student
                </v-card-text>
              </v-card-item>

              <v-card-actions>
                <v-btn
                  variant="outlined"
                  color="green-lighten-2"
                  text="View my Quests"
                ></v-btn>
              </v-card-actions>
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
</style>
