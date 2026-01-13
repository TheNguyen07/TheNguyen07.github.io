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
import PCB from '@/assets/Projects/PCB/PCB.png'
import RFID from '@/assets/Projects/RFID/Blocks.png'
import FPGA from '@/assets/Projects/RE_FPGA/Basys.png'
import MIPS from '@/assets/Projects/MIPS/MIPS.png'
import website from '@/assets/Projects/Website/website3.png'

const projects = [
  {
    title: 'IPS Display Module PCB',
    description: 'Designed an IPS Display module using an STM32G0B1CEU6 MCU and ER-TFT0.99-2 in Altium Designer.',
    photo: PCB,
    github: ''
  },
  {
    title: 'RFID Analysis of University IDs',
    description: 'Conducted acapstone research project on reverse engineering TU ID card systems, identifying 3+ software and hardware vulnerabilities. Proposed and documented security solutions including password protection with lock bits, reinforced hardware design, and card number obfuscation.',
    photo: RFID
  },
  {
    title: 'Reverse Engineer a Custom PCB into an FPGA board',
    description: 'Reverse engineered a custom PCB and implemented the functionality on an FGPA board using VHDL.',
    photo: FPGA
  },
  {
    title: 'Assembly Language Projectile Trajectory Simulation',
    description: 'Project involved programming in MARS MIPS assembly to calculate projectile time-of-flight, maximum height, and trajectory angle based on user input. Applied physics equations of motion to model artillery firing scenarios, validated results across both implementations, and documented methodology, findings, and error analysis in a professional report.',
    photo: MIPS
  },
  {
    title: 'Custom Website Hosted on Github',
    description: 'Created, designed, and deployed a personal portfolio website using 4+ front end languages and frameworks. Implemented responsive layouts, interactive features, and GitHub version control to showcase projects and skills.',
    photo: website
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
  background-color: #282828;
  border: 2px solid #2e7d32;
  padding: 24px;
  height: 100%;
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-6px);
}

.project-image {
  height: 250px;
  border: 2px solid #3fa34d;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background-color: #2f2f2f;
}

.project-card h3 {
  color: #6fbf73;
  margin-bottom: 8px;
}

.project-card p {
  color: #e6e6e6;
  font-size: 0.95rem;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>