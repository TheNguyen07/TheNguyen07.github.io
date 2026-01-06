<template>
  <section class="section-wrapper">
    <v-container class="content-container">
      <h2 class="section-title">My Journey</h2>

      <v-row style="align-content: center;">
        <v-col cols="12" md="3" class="icon-col">
          <v-icon size="64" color="#6fbf73">mdi-sword-cross</v-icon>
        </v-col>

        <v-col cols="12" md="9">
          <p class="section-text">
            I am an engineering student from the University of Tulsa who enjoys building and inventing.
            My full degree title is Electrical and Computer Engineering with minors in Computer Science and Math.
            My interests include embedded systems, software development, and creating projects that balance function with design.
          </p>

          <p class="section-text">
            Languages: 
          </p>

          <p class="section-text">
            I am always looking for an opportunity to challenge myself and learn new things. Knowledge is power after all.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.section-wrapper {
  width: 100%;
  background-color: #000000;
  border-top: 2px solid #2e7d32;
  border-bottom: 2px solid #2e7d32;
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

.section-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #e6e6e6;
  margin-bottom: 16px;
}

.icon-col {
  text-align: center;
}
</style>