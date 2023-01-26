<template>
  <div class="featured-videos">
    <div class="container">
      <div class="row">
        <FeaturedVideoListItem
          v-for="video in videos"
          :key="video.id"
          :image-path="`${base_url}/${video.imagePath}`"
          :title="`${video.title}`"
          class="col-xs-12 col-sm-6"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FeaturedVideosList',
};
</script>

<script setup lang="ts">
import FeaturedVideoListItem from './FeaturedVideoListItem.vue';
const base_url = import.meta.env.VITE_BASE_URL;

const videos = [
  {
    id: 0,
    title: 'Diddy celebrates at club of diamonds',
    imagePath: 'src/assets/images/diddy-poppin.jpg',
  },

  {
    id: 1,
    title: "Gucci Mane's luxury car collection",
    imagePath: 'src/assets/images/gucci-mane.jpg',
  },
];
</script>

<style lang="scss" module></style>
