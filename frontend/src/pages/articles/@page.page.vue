<!-- Articles page -->

<template>
  <div class="container">
    <BlogCardList
      v-if="posts"
      :posts="posts"
      :page-number="page"
      :page-total="pageTotal!"
      :title="$options.name!"
    />
    <p v-if="loading">loading...</p>
  </div>
</template>

<script lang="ts">
export default { name: 'articles' };
export const documentProps = { title: 'Articles | Pentzero' };
export { default as Layout } from '@/layouts/LayoutHome.vue';
</script>

<script setup lang="ts">
import BlogCardList from '@/components/BlogCardList.vue';

import useArticles from './useArticles';
import { usePageContext } from '@/renderer/usePageContext';
import { BlogPostInfo } from '@/utils/types';
import { POSTS_PER_PAGE } from '@/utils/constants';
import { mapToPostInfo } from '@/utils/helpers';

import { computed } from '@vue/reactivity';
import { ref, watchEffect } from 'vue';

const pageContext = usePageContext();

// current page number
const page = computed(() => {
  return parseInt(pageContext.routeParams!.page, 10);
});

const queryVars = ref({
  limit: POSTS_PER_PAGE,
  start: (page.value - 1) * POSTS_PER_PAGE,
  orderBy: 'publishedAt:desc',
});

const posts = ref<BlogPostInfo[]>();

const { result, error, loading } = useArticles(queryVars.value);

// get all posts data
watchEffect(() => {
  if (result.value) {
    posts.value = mapToPostInfo(result?.value);
  }
});

// total number of pages for posts
const pageTotal = computed(() => {
  return result.value?.articles?.meta.pagination.pageCount;
});
</script>
