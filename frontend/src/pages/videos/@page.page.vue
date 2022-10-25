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
import { useLazyVideos } from './useVideos';
import { computed } from '@vue/reactivity';
import { usePageContext } from '@/renderer/usePageContext';
import { filterPostsData } from '@/composables/filterPostsData';
import useHome from '@/composables/UseHome';
import Hero from '@/components/Hero.vue';
import BlogCardList from '@/components/BlogCardList.vue';

import { GetVideosDocument, GetVideosQueryVariables } from '@/types.d';
import { watchEffect, ref } from 'vue';

const pageContext = usePageContext();

// current page number
const page = computed(() => {
  return parseInt(pageContext.routeParams!.page, 10);
});

const postsPerPage = ref<number | null>(null);
const posts = ref(null);
const videoQueryVars = ref<GetVideosQueryVariables>();

const { result: homeRes, error: homeErr, loading: homeLoading } = useHome();
const { result, error, loading, load } = useLazyVideos();

watchEffect(() => {
  postsPerPage.value = homeRes?.value?.home?.data?.attributes?.PostsPerPage!;

  if (postsPerPage.value) {
    //update GRAPHQL query vars
    videoQueryVars.value = {
      limit: postsPerPage.value,
      start: (page.value - 1) * postsPerPage.value!,
      orderBy: 'publishedAt:desc',
    };

    //load graphql query
    load(GetVideosDocument, videoQueryVars.value);
  }

  // get all posts data from database
  if (result.value)
    posts.value = filterPostsData(result?.value?.videos?.data.slice());
});

// total number of pages for posts
const pageTotal = computed(() => {
  return result.value?.videos?.meta.pagination.pageCount;
});
</script>

<script lang="ts">
export const documentProps = { title: 'Videos | Pentzero' };
</script>
