<template>
  <v-container fluid class="sections">
    <v-row>
      <v-col cols="6">
        <div class="panel">
          <h2>About Me</h2>
          <p>
            A brief description about myself, my skills,
            and my interests goes here.
          </p>
        </div>
      </v-col>

      <v-col cols="6">
        <div class="panel">
          <h2>My Projects</h2>
          <p>
            Examples of my recent work and projects
            showcased here.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.sections {
  margin-bottom: 80px;
}

.panel {
  background-color: #141414;
  border: 2px solid #2e7d32;
  padding: 40px;
  height: 100%;
}

.panel h2 {
  color: #3fa34d;
  margin-bottom: 16px;
}
</style>