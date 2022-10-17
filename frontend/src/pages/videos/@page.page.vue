<template>
  <Hero />
  <Container>
    <BlogList
      v-if="posts"
      :posts="posts"
      :title="'Videos'"
      :page-number="page"
      :page-total="pageTotal!"
    />
    <p v-if="loading">loading...</p>
  </Container>
</template>

<script setup lang="ts">
import useVideos from './useVideos';
import { computed } from '@vue/reactivity';
import BlogList from '@/components/BlogList.vue';
import { usePageContext } from '@/renderer/usePageContext';

import { POSTS_PER_PAGE } from '@/constants/settings';
import { filterPostsData } from '@/composables/filterPostsData';
import Hero from '@/components/Hero.vue';
import Container from '@/components/Container.vue';

const pageContext = usePageContext();

// current page number
const page = computed(() => {
  return parseInt(pageContext.routeParams!.page, 10);
});

// get all video posts
const posts = computed(() => {
  return filterPostsData(result?.value?.videos?.data.slice());
});

// total number of pages for video posts
const pageTotal = computed(() => {
  return result.value?.videos?.meta.pagination.pageCount;
});

// variables for GRAPHQL query
const queryVars = computed(() => {
  const offset = (page.value - 1) * POSTS_PER_PAGE;
  return {
    limit: POSTS_PER_PAGE,
    start: offset,
    orderBy: 'publishedAt:desc',
  };
});

// get all video posts data from database
const { result, error, loading } = useVideos(queryVars);
</script>

<script lang="ts">
export const documentProps = { title: 'Videos | Pentzero' };
</script>
