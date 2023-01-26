<template>
  <div
    :class="$style.carousel"
    class="py-2"
  >
    <div :class="$style.carousel__inner">
      <span
        class="text-small"
        :class="$style.carousel__title"
        >Trending posts</span
      >
      <div
        class="glide"
        v-if="posts"
      >
        <div
          class="glide__track"
          data-glide-el="track"
        >
          <div class="glide__slides">
            <CarouselTrendingItem
              v-for="post in posts"
              :post="post"
              :key="post.id"
              class="glide__slide"
            />
          </div>
        </div>
        <div
          class="carousel-navigation"
          data-glide-el="controls"
        >
          <button
            class="ptBtn ptBtn--medium ptBtn--black-solid ptBtn--round ptBtn--icon-medium carousel-button carousel-button--prev"
            :class="$style.pagerButton"
            data-glide-dir="<"
          ></button>
          <button
            class="ptBtn ptBtn--medium ptBtn--black-solid ptBtn--round ptBtn--icon-medium carousel-button carousel-button--next"
            :class="$style.pagerButton"
            data-glide-dir=">"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CarouselTrending',
};
</script>

<script setup lang="ts">
import { onMounted } from 'vue';
import Glide from '@glidejs/glide';
import useVideos from '@/pages/videos/useVideos';
import { mapToPostInfo } from '@/utils/helpers';
import CarouselTrendingItem from './CarouselTrendingItem.vue';
import { ref } from 'vue';

const api_url = import.meta.env.VITE_STRAPI_API_URL;

const posts = ref();

onMounted(() => {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 3,
    perView: 5,
    dragThreshold: 60,
    gap: 30,
    breakpoints: {
      1440: {
        perView: 3,
      },
      700: {
        perView: 1,
      },
    },
  }).mount();
});

const { result, error, loading } = useVideos({
  limit: -1,
  start: 0,
  orderBy: 'publishedAt:desc',
});

if (!loading.value && !error.value) {
  posts.value = mapToPostInfo(result.value);
}
</script>

<style lang="scss">
@import '@glidejs/glide/dist/css/glide.core.min.css';
</style>

<style lang="scss" module>
.carousel {
  background-color: var(--color-gray-100);

  &__inner {
    @include wrapper();
  }

  &__title {
    color: var(--color-primary);
    font-weight: 300;
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
  }
}

.pager-button {
  top: 40% !important;
}
</style>
