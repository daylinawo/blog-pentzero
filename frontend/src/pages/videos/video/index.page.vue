<template>
  <div class="video-wrapper">
    <Container>
      <div class="grid grid--video">
        <div class="video-player">
          <iframe
            allowFullScreen="allowFullScreen"
            src="https://www.youtube.com/embed/je9RfCTnRnA?ecver=1&amp;autoplay=1&amp;iv_load_policy=1&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=760&amp;width=760"
            width="760"
            height="415"
            allowtransparency="true"
            frameborder="0"
          >
          </iframe>
        </div>
        <RelatedSidebar :posts="sidebarPosts" />
      </div>
    </Container>
  </div>

  <Container>
    <div class="video-meta">
      <h3 class="video-meta__title">
        {{ result?.video?.data?.attributes?.meta?.title }}
      </h3>
      <div class="video-meta__description">
        {{ result?.video?.data?.attributes?.description }}
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { usePageContext } from '@/renderer/usePageContext';
import { useQuery } from '@vue/apollo-composable';
import {
  GetVideoDocument,
  GetVideoQuery,
  GetVideoQueryVariables,
} from '@/types.d';

import Container from '@/components/Container.vue';
import RelatedSidebar from '@/components/RelatedSidebar.vue';
import { computed } from 'vue';

import useVideos from '../useVideos';
import { filterPostsData } from '@/composables/filterPostsData';

const pageContext = usePageContext();

const { error, loading, result } = useQuery<
  GetVideoQuery,
  GetVideoQueryVariables
>(GetVideoDocument, {
  id: pageContext.routeParams!.id,
});

// variables for GRAPHQL query
const queryVars = computed(() => {
  return {
    limit: 8,
    start: 0,
    orderBy: 'publishedAt:desc',
  };
});

const {
  result: sidebarResults,
  error: sidebarError,
  loading: sidebarLoading,
} = useVideos(queryVars);

// get all video posts
const sidebarPosts = computed(() => {
  return filterPostsData(sidebarResults?.value?.videos?.data.slice());
});

// get all video posts data from database
</script>

<style lang="scss">
.grid {
  display: grid;

  &--video {
    grid-template-columns: 3fr 1fr;
  }
}

.video-wrapper {
  background-color: black;
  margin-top: -2rem;
  padding-top: 3rem;
  max-height: 600px;
  overflow: hidden;
}

.video-player {
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

.video-meta {
  margin-top: 2rem;

  &__title {
    font-size: 1.5em;
  }
}
</style>
