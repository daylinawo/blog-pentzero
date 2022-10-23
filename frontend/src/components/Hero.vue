<template>
  <div class="hero">
    <div class="hero__video-wrapper">
      <video
        class="hero__video"
        autoplay
        muted
        loop
      >
        <source src="../assets/videos/mansion.mp4" />
        <source src="../assets/videos/mansion.webm" />
      </video>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.hero {
  position: relative;
  background-color: black;
  margin-top: -2rem;
  margin-bottom: 3em;
  height: 100vh;

  @include breakpoint-down(large) {
    display: none;
  }

  &__video-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  &__video {
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
