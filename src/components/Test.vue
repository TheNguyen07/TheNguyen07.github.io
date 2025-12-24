<template>
  <v-sheet class="hero-container">
    <div class="hero-box">
      <h1>Welcome to My Portfolio</h1>
      <p>I’m a Web Developer & Designer</p>

      <v-btn variant="outlined">
        View My Work
      </v-btn>
    </div>
  </v-sheet>
</template>

<style scoped>
.hero-container {
  margin-top: 70px;
  width: 100%;
  margin-right: 100px;
  justify-content: center;
}

.hero-box {
  width: 100%;
  /* max-width: 1200px; YOU control desktop width */
  padding: 60px;
  text-align: center;
  background: linear-gradient(180deg, #2e7d32, #1b5e20);
  border: 3px solid #3fa34d;
}
</style>
