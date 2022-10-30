<template>
  <div class="wrapper__main"></div>
  <div class="l-grid">
    <div class="l-grid__content">
      <VideoPlayer :url="result?.findSlug!.data.attributes.url" />
      <div class="wrapper__meta">
        <PostMeta :meta="blogPostMeta" />
      </div>
      <ClientOnly>
        <div class="wrapper__comments">
          <DisqusComment />
        </div>
      </ClientOnly>
    </div>

    <div class="l-grid__aside">
      <div class="wrapper__sidebar">
        <SidebarWidget :posts="posts" />
      </div>
      <div class="wrapper__ad">
        <img src="../../../assets/images/photo_1.jpg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageContext } from '@/renderer/usePageContext';

import SidebarWidget from '@/components/SidebarWidget.vue';
import useVideoBySlug from './useVideoBySlug';
import useVideos from '../useVideos';
import VideoPlayer from '@/components/VideoPlayer.vue';
import PostMeta from '@/components/PostMeta.vue';
import { filterPostsData } from '@/composables/filterPostsData';
import { computed } from 'vue';
import { DisqusCount } from 'vue-disqus';
import DisqusComment from '@/components/DisqusComment.vue';

const pageContext = usePageContext();

const { result, loading, error } = useVideoBySlug({
  slug: pageContext.routeParams!.slug,
});

const blogPostMeta = computed(() => {
  return {
    publishedAt: new Date(
      result?.value!.findSlug?.data?.attributes.publishedAt
    ),
    title: result?.value!.findSlug?.data?.attributes.title,
    desc: result?.value!.findSlug?.data?.attributes.description,
    category: result?.value!.findSlug?.data?.attributes.category,
  };
});

// ============== SIDEBAR CONTENT ==============

// vars for useVideos query
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
const posts = computed(() => {
  return filterPostsData(sidebarResults?.value?.videos?.data.slice());
});
</script>

<style lang="scss">
.l-grid {
  display: grid;
  margin-block: 120px;
  margin-inline: auto;
  grid-template-columns: repeat(9, 1fr) minmax(300px, 3fr);

  grid-gap: 20px;
  max-width: var(--max-width);

  &__content {
    grid-column: 1 / span 9;
  }

  &__aside {
    grid-column: 10 / -1;
    margin: auto;
    height: 100%;
  }
}
.wrapper {
  &__video {
  }

  &__meta {
    margin-top: 1rem;
  }

  &__sidebar {
    overflow: hidden;
  }

  &__comments {
    margin-top: 1em;
  }

  &__ad {
    margin-top: 1em;
    img {
      max-width: 100%;
    }
  }
}
</style>
