<template>
  <v-container class="hero-container">
    <div class="hero-box">
      <h1>Welcome to My Portfolio</h1>
      <p>I’m a Web Developer & Designer</p>

      <v-btn class="hero-btn" variant="outlined">
        View My Work
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped>
.hero-container {
  margin-top: 60px;
  /* margin-bottom: 80px; */
}

.hero-box {
  background: linear-gradient(180deg, #2e7d32, #1b5e20);
  border: 3px solid #3fa34d;
  padding: 60px;
  text-align: center;
}

.hero-box h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.hero-box p {
  font-size: 1.2rem;
  margin-bottom: 32px;
}

.hero-btn {
  color: #e6e6e6;
  border-color: #e6e6e6;
}
</style>