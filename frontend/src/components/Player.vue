<template>
  <div class="c-player">
    <vue-vimeo-player
      ref="player"
      :options="options"
      @play="play"
      @pause="pause"
    />

    <button
      @click="player.pause()"
      v-if="isPlaying"
    >
      Pause
    </button>
    <button
      @click="player.play()"
      v-if="!isPlaying"
    >
      play
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { vueVimeoPlayer } from 'vue-vimeo-player';

const props = defineProps(['url']);

const player = ref(null);
const isPlaying = ref(null);

const options = {
  url: props.url,
  autoplay: true,
  controls: false,
  height: 600,
  width: 1000,
};

const pause = () => {
  isPlaying.value = false;
};

const play = () => {
  isPlaying.value = true;
};
</script>

<style lang="scss">
.c-player {
  button {
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
