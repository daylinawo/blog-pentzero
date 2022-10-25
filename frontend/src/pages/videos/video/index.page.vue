<template>
  <div class="l-grid l-grid--main">
    <div class="header-wrapper">
      <div class="l-grid l-grid--header">
        <VideoPlayer :url="result?.findSlug!.data.attributes.url" />
        <SidebarWidget :posts="posts" />
      </div>
    </div>

    <div class="left-wrapper">
      <BlogPostMeta :meta="postDetails"></BlogPostMeta>
    </div>
    <div class="img"><img src="../../../assets/images/photo_1.jpg" /></div>
  </div>
</template>

<script setup lang="ts">
import { usePageContext } from '@/renderer/usePageContext';

import SidebarWidget from '@/components/SidebarWidget.vue';
import useVideoBySlug from './useVideoBySlug';
import useVideos from '../useVideos';
import VideoPlayer from '@/components/VideoPlayer.vue';
import BlogPostMeta from '@/components/BlogPostMeta.vue';
import PostMeta from '@/custom-types/PostMeta';

import { filterPostsData } from '@/composables/filterPostsData';
import { computed } from 'vue';

const pageContext = usePageContext();

const { result, loading, error } = useVideoBySlug({
  slug: pageContext.routeParams!.slug,
});

const postDetails = computed(() => {
  let details: PostMeta = {
    publishedAt: result?.value!.findSlug?.data?.attributes.publishedAt,
    title: result?.value!.findSlug?.data?.attributes.title,
    desc: result?.value!.findSlug?.data?.attributes.description,
    category: result?.value!.findSlug?.data?.attributes.category,
  };

  return details;
});

// FETCH SIDEBAR CONTENT

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

<style lang="scss" scoped>
.l-grid {
  margin-block: 60px;
  display: grid;
  &--main {
    grid-template-rows: minmax(250px, 650px) auto;
    grid-template-columns: 3fr minmax(300px, 800px) 1fr minmax(300px, 400px) 3fr;
    grid-template-areas:
      'header header header header header'
      '...... main     .    side   ......  ';
  }
  &--header {
    grid-template-columns: 3fr 1fr;
    max-width: var(--max-width);
    margin: auto;
  }

  &--body {
  }
}
.left-wrapper {
  grid-area: main;
}

.header-wrapper {
  grid-area: header;
  background-color: black;
  margin-top: -2rem;
  padding-top: 3rem;
  max-height: 600px;
  overflow: hidden;
}

.img {
  grid-area: side;
  img {
    max-width: 100%;
  }
}
</style>
