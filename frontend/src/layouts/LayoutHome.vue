<template>
  <TheHeader />
  <FullScreenVideo v-if="isVisible" />
  <CarouselTrending v-if="isVisible" />
  <FeaturedVideosList class="my-5" />
  <main :class="`content ${$options.name}__main`">
    <slot />
  </main>
  <TheFooter />
</template>

<script lang="ts">
export default {
  name: 'LayoutHome',
};
</script>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import FullScreenVideo from '@/components/FullScreenVideo.vue';
import CarouselTrending from '@/components/CarouselTrending.vue';
import { usePageContext } from '@/renderer/usePageContext';
import FeaturedVideosList from '@/components/FeaturedVideosList.vue';

const page = usePageContext()
  .urlPathname.split('/')
  .filter((value) => {
    return value !== '';
  })[0];

const isFirstPage = usePageContext().routeParams?.page === '1';

const isVisible = isFirstPage;
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.LayoutHome {
  &__main {
    @include wrapper();
    margin-bottom: 6em;
  }
}
</style>
