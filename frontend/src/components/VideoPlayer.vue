<template>
  <div class="player">
    <iframe
      allowFullScreen="allowFullScreen"
      :src="`${url}/?ecver=1&amp;autoplay=1&amp;iv_load_policy=1&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=760&amp;width=760`"
      width="760"
      height="415"
      allowtransparency="true"
      frameborder="0"
    >
    </iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  url: { type: String, required: true },
});

const url = computed(() => {
  return props.url.replace('watch?v=', 'embed/');
});
</script>
<style lang="scss">
.player {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
