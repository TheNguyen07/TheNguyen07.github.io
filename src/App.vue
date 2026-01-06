<template>
	<v-app>
		<NavBar />
		<v-main>
			<!-- <div id="about" class="scroll-offset">
				<v-card>
					<div class="half-empty-space"></div>
					<h1>About Me</h1>
					<About class="mt-4" />
					<div class="full-empty-space"></div>
				</v-card>
			</div> -->
      <Welcome />
      <div class="half-empty-space"></div>
      <AboutMe />
      <Projects />
      <Test2 />
			<!-- <div class="half-empty-space"></div> -->

			<!-- <div id="projects" class="scroll-offset">
				<v-card>
					<div class="half-empty-space"></div>
					<h1>Projects</h1>
					<Projects class="mt-4" />
					<div class="full-empty-space"></div>
				</v-card>
			</div>

			<div class="half-empty-space"></div>

			<div id="work-experience" class="scroll-offset">
				<v-card>
					<div class="half-empty-space"></div>
					<h1>Work Experience</h1>
					<WorkExperience class="mt-4" />
					<div class="full-empty-space"></div>
				</v-card>
			</div>
			<div class="half-empty-space"></div> -->
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import NavBar from './components/Navigation.vue';
// import Footer from './components/common/Footer.vue'
import About from './components/About.vue';
import Welcome from './components/Welcome.vue';
// import Projects from './views/Projects.vue'
// import WorkExperience from './views/WorkExperience.vue'
import Test2 from './components/Test2.vue';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		NavBar,
		AboutMe,
    Test2,
    Welcome,
    Projects,
    Footer,
	},
}
</script>

<style>
.scroll-offset {
	scroll-margin-top: -40px;
}

html,body {
  height: 100%;
  overflow-y: auto;
}

.v-application {
  overflow-y: visible;
}


@media (max-width: 1919px) {
	.scroll-offset {
		scroll-margin-top: 0px;
	}
}

@media (max-width: 1000px) {
	.scroll-offset {
		scroll-margin-top: 40px;
	}
}

.full-empty-space {
	height: 10vw;
}

.half-empty-space {
	height: 5vw;
}


/* Chrome, Edge, Safari */
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

/* Firefox */
* {
  scrollbar-width: none;
}

/* IE / old Edge */
* {
  -ms-overflow-style: none;
}

/* 
h1 {
	text-align: center;
	font-size: 5rem;

	@media (max-width: 600px) {
		font-size: 3rem;
	}
} */

</style>