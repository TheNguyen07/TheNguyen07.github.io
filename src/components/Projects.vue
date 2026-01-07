<template>
  <section class="section-wrapper">
    <v-container class="content-container">
      <h2 class="section-title">My Portfolio</h2>

      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.title"
          cols="12"
          md="4"
        >
          <div class="project-card">
            <div class="project-image">
              <img :src="project.photo"
                   :alt="project.title">
            </div>

            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Project One',
    description: 'A personal project focused on clean design and structure.',
    photo: './mylogo.png'
  },
  {
    title: 'Project Two',
    description: 'An engineering-focused build using modern tools.'
  },
  {
    title: 'Project Three',
    description: 'A system designed for reliability and clarity.'
  }
]
</script>

<style scoped>
.section-wrapper {
  width: 100%;
  background-color: #000000;
  padding: 80px 0;
}

.content-container {
  max-width: 1100px;
}

.section-title {
  text-align: center;
  color: #6fbf73;
  font-size: 2.4rem;
  margin-bottom: 48px;
}

.project-card {
  background-color: #000000;
  border: 2px solid #2e7d32;
  padding: 24px;
  height: 100%;
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-6px);
}

.project-image {
  height: 140px;
  border: 2px solid #3fa34d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background-color: #000000;
}

.project-card h3 {
  color: #6fbf73;
  margin-bottom: 8px;
}

.project-card p {
  color: #e6e6e6;
  font-size: 0.95rem;
}
</style>