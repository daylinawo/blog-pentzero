<template>
  <BlogList
    v-if="posts"
    :posts="posts"
    :title="'Articles'"
    :page-number="page"
    :page-total="pageTotal!"
  />
  <p v-if="loading">loading...</p>
</template>

<script setup lang="ts">
import useArticles from '@/composables/useArticles';
import { usePageContext } from '@/renderer/usePageContext';
import { computed } from '@vue/reactivity';
import BlogList from '@/components/BlogList.vue';

import { POSTS_PER_PAGE } from '@/constants/settings';

const pageContext = usePageContext();

const page = computed(() => {
  if (typeof pageContext.routeParams!.page === 'string')
    return parseInt(pageContext.routeParams!.page, 10);
  else return 1;
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

// total page count
const pageTotal = computed(() => {
  return result.value?.articles?.meta.pagination.pageCount;
});

// get all article posts
const posts = computed(() => {
  return formatData(result?.value?.articles?.data.slice());
});

// format the all posts data to make it easier to access
function formatData(posts: any) {
  return posts.map((post: any) => {
    const photoUrl = post.attributes.meta.thumbnail.data.attributes.formats
      .medium
      ? post.attributes.meta.thumbnail.data.attributes.formats.medium.url
      : post.attributes.meta.thumbnail.data.attributes.formats.small.url;

    return {
      id: post.id,
      createdAt: new Date(post.attributes.publishedAt),
      type: post.attributes.__typename,
      title: post.attributes.meta.title,
      photo_url: photoUrl,
      category: post.attributes.category.data.attributes.name,
    };
  });
}
</script>
