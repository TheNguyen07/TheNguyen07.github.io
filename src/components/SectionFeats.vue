
<script setup>
import { reactive } from 'vue'
import { seals, IconChevron } from '../icons.js'
import { feats } from '../data.js'
import ScrollPanel from './ScrollPanel.vue'

// Tracks which project titles are currently expanded.
const openTitles = reactive(new Set())

function toggle(title) {
  if (openTitles.has(title)) {
    openTitles.delete(title)
  } else {
    openTitles.add(title)
  }
}
</script>

<template>
  <section id="feats">
    <div class="section-head">
      <div class="seal-icon" v-html="seals.scroll"></div>
      <div>
        <span class="kicker">Chapter Five</span>
        <h2>Feats of Craftsmanship</h2>
      </div>
    </div>

    <ScrollPanel v-reveal>
      <div class="feats-list">
        <div
          class="feat-entry"
          v-for="f in feats"
          :key="f.title"
          :class="{ 'is-open': openTitles.has(f.title) }"
        >
          <button
            class="feat-header"
            type="button"
            :aria-expanded="openTitles.has(f.title)"
            :aria-controls="'feat-body-' + f.title"
            @click="toggle(f.title)"
          >
            <span class="feat-chevron" v-html="IconChevron"></span>

            <span class="feat-heading">
              <span class="feat-when">{{ f.when }}</span>
              <h3 class="feat-title">{{ f.title }}</h3>
              <p class="feat-teaser">{{ f.text }}</p>
            </span>
          </button>

          <div
            class="feat-body-wrap"
            :id="'feat-body-' + f.title"
          >
            <div class="feat-body-inner">
              <div class="feat-body-content">

                <!-- Images -->
                <div
                  class="feat-gallery"
                  v-if="f.images?.length"
                >
                  <figure
                    class="feat-photo-frame"
                    v-for="(img, i) in f.images"
                    :key="'img-' + i"
                  >
                    <img
                      class="feat-photo"
                      :src="img.src"
                      :alt="img.alt || f.title"
                      loading="lazy"
                    />

                    <figcaption v-if="img.caption">
                      {{ img.caption }}
                    </figcaption>
                  </figure>
                </div>

                <!-- Videos -->
                <div
                  class="feat-gallery feat-video-gallery"
                  v-if="f.videos?.length"
                >
                  <figure
                    class="feat-photo-frame feat-video-frame"
                    v-for="(video, i) in f.videos"
                    :key="'video-' + i"
                  >

                    <!-- YouTube Videos -->
                    <iframe
                      v-if="video.type === 'youtube'"
                      class="feat-video"
                      :src="video.src"
                      :title="video.alt || f.title"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>

                    <!-- Local MP4 Videos -->
                    <video
                      v-else
                      class="feat-video"
                      controls
                      playsinline
                      preload="metadata"
                    >
                      <source
                        :src="video.src"
                        :type="video.type || 'video/mp4'"
                      />
                      Your browser does not support video playback.
                    </video>

                    <figcaption v-if="video.caption">
                      {{ video.caption }}
                    </figcaption>

                  </figure>
                </div>

                <!-- Project Details -->
                <p
                  v-for="(paragraph, i) in f.details"
                  :key="i"
                >
                  {{ paragraph }}
                </p>

                <!-- Project Link -->
                <a
                  v-if="f.link"
                  :href="f.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ f.linkLabel || f.link }}
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollPanel>
  </section>
</template>
