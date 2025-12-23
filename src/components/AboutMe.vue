<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row class="mt-16">
      <v-col cols="12">
        <v-card 
          variant="outlined" 
          style="background-color: rgba(23, 50, 20); border-color: green;"
          rounded="0" 
          flat
        >
          <v-row no-gutters justify="center">
            
            <v-col cols="12" md="10" lg="9" xl="8">
              <v-row no-gutters>
                <v-col cols="4" sm="3" md="2">
                  <v-img
                    src="/src/assets/Professional photo.jpeg"
                    cover
                    height="100%"
                    min-height="200px"
                  ></v-img>
                </v-col>

                <v-col cols="8" sm="9" md="10">
                  <v-card-item class="pl-6">
                    <v-card-title class="text-h5 text-md-h4">
                      Welcome to Hannah T. Nguyen's Adventure
                    </v-card-title>
                    <v-divider color="green" class="my-2"></v-divider>
                    <v-card-text class="pa-0">
                      Electrical and Computer Engineering Student
                    </v-card-text>
                  </v-card-item>

                  <v-card-actions class="pl-6">
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
</style>
