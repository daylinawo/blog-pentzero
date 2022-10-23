<!-- Videos page -->

<template>
  <Hero />
  <div class="container">
    <BlogCardList
      v-if="posts"
      :posts="posts"
      :title="'Videos'"
      :page-number="page"
      :page-total="pageTotal!"
    />
    <p v-if="loading">loading...</p>
  </div>
</template>

<script setup lang="ts">
import useVideos from './useVideos';
import { computed } from '@vue/reactivity';
import useHome from '@/composables/UseHome';
import { usePageContext } from '@/renderer/usePageContext';
import { filterPostsData } from '@/composables/filterPostsData';
import Hero from '@/components/Hero.vue';
import BlogCardList from '@/components/BlogCardList.vue';

const pageContext = usePageContext();

const { result: homeRes, error: homeErr, loading: homeLoading } = useHome();

const postsPerPage = homeRes.value?.home?.data?.attributes?.PostsPerPage;

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
  const ppp = postsPerPage ? postsPerPage : 7;
  const offset = (page.value - 1) * ppp;
  return {
    limit: 7,
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
