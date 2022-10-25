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
import { watchEffect, ref } from 'vue';
import { computed } from '@vue/reactivity';
import { filterPostsData } from '@/composables/filterPostsData';

import { PostDetails } from '@/custom-types';
import { GetArticlesDocument, GetArticlesQueryVariables } from '../../types.d';

import UseHome from '@/composables/UseHome';
import { useLazyArticles } from './useArticles';
import { usePageContext } from '@/renderer/usePageContext';

import Hero from '@/components/Hero.vue';
import BlogCardList from '@/components/BlogCardList.vue';

const pageContext = usePageContext();

// current page number
const page = computed(() => {
  return parseInt(pageContext.routeParams!.page, 10);
});

const postsPerPage = ref<number | null>(null);
const posts = ref<PostDetails[]>();
const articleQueryVars = ref<GetArticlesQueryVariables>();

const { result: homeRes, error: homeErr, loading: homeLoading } = UseHome();
const { result, error, loading, load } = useLazyArticles();

watchEffect(() => {
  postsPerPage.value = homeRes.value?.home?.data?.attributes?.PostsPerPage!;

  if (postsPerPage.value) {
    //update GRAPHQL query vars
    articleQueryVars.value = {
      limit: postsPerPage.value,
      start: (page.value - 1) * postsPerPage.value,
      orderBy: 'publishedAt:desc',
    };

    // get all article posts from database
    load(GetArticlesDocument, articleQueryVars.value);
  }

  // get all article posts
  if (result.value)
    posts.value = filterPostsData(result?.value?.articles?.data.slice());
});

// total number of pages for posts
const pageTotal = computed(() => {
  return result.value?.articles?.meta.pagination.pageCount;
});
</script>

<script lang="ts">
export const documentProps = { title: 'Articles | Pentzero' };
</script>
