<script setup>
defineProps({
  // Which side accent to use for the rod caps - lets us vary the metal tone slightly per section if wanted later
  variant: { type: String, default: 'gold' },
})
</script>

<template>
  <div class="scroll-panel">
    <div class="scroll-rod scroll-rod--top" aria-hidden="true">
      <span class="scroll-knob left"></span>
      <span class="scroll-knob right"></span>
    </div>
    <div class="scroll-body">
      <slot />
    </div>
    <div class="scroll-rod scroll-rod--bottom" aria-hidden="true">
      <span class="scroll-knob left"></span>
      <span class="scroll-knob right"></span>
    </div>
  </div>
</template>
