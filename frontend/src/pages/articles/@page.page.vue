<!-- Articles page -->

<template>
  <Hero />
  <div class="container">
    <BlogCardList
      v-if="posts"
      :posts="posts"
      :title="'Articles'"
      :page-number="page"
      :page-total="pageTotal!"
    />
    <p v-if="loading">loading...</p>
  </div>
</template>

<script setup lang="ts">
import useArticles from './useArticles';
import { usePageContext } from '@/renderer/usePageContext';
import { computed } from '@vue/reactivity';
import BlogCardList from '@/components/BlogCardList.vue';

import { filterPostsData } from '@/composables/filterPostsData';
import { POSTS_PER_PAGE } from '@/constants/settings';
import Hero from '@/components/Hero.vue';

const pageContext = usePageContext();

// current page number
const page = computed(() => {
  return parseInt(pageContext.routeParams!.page, 10);
});

// get all article posts
const posts = computed(() => {
  return filterPostsData(result?.value?.articles?.data.slice());
});

// total page count
const pageTotal = computed(() => {
  return result.value?.articles?.meta.pagination.pageCount;
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

// get all article posts from database
const { result, error, loading } = useArticles(queryVars);
</script>

<script lang="ts">
export const documentProps = { title: 'Articles | Pentzero' };
</script>
