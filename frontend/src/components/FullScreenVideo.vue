<template>
  <div :class="$style.player">
    <div :class="$style.wrapper">
      <video
        :class="$style.video"
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
<script lang="ts">
export default {
  name: 'AppFullScreenVideo',
};
</script>
<style lang="scss" module>
.player {
  display: none;
  position: relative;
  background-color: black;
  margin-top: -2rem;
  height: 100vh;

  @include breakpoint(xlarge) {
    display: block;
  }
}

.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}

.video {
  min-width: 100%;
  min-height: 100%;
}
</style>
