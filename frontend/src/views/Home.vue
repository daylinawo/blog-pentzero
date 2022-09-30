<template>
  <div>
    <BlogList
      v-if="posts"
      :posts="posts"
      :title="title!"
      :page-number="page"
      :page-total="pageTotal!"
    />
    <p v-if="videosLoading">loading...</p>
    <p v-if="articlesLoading">loading...</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/runtime-core';
import BlogList from '@/components/BlogList.vue';
import { useRoute } from 'vue-router';
import { POSTS_PER_PAGE } from '@/constants/settings';
import useVideos from '@/composables/useVideos';
import useArticles from '@/composables/useArticles';

const route = useRoute();

// variables for posts queries
const queryVars = computed(() => {
  const offset = (page.value - 1) * POSTS_PER_PAGE;
  return {
    limit: POSTS_PER_PAGE,
    start: offset,
    orderBy: 'publishedAt:desc',
  };
});

// get current post type
const postType = computed(() => {
  return route.path.substring(1).split('/')[0];
});

// current page number
const page = computed(() => {
  if (typeof route.params.page === 'string')
    return parseInt(route.params.page, 10);
  else return 1;
});

// fetch all posts data from database to create blog feed
const {
  videos,
  error: videosError,
  loading: videosLoading,
} = useVideos(queryVars);

const {
  articles,
  error: articlesError,
  loading: articlesLoading,
} = useArticles(queryVars);

// all posts from [postType]
const posts = computed(() => {
  if (postType.value == 'videos')
    return getPosts(videos?.value?.videos?.data.slice());
  else if (postType.value == 'articles')
    return getPosts(articles?.value?.articles?.data.slice());
});

// total number of pages for current post type
const pageTotal = computed(() => {
  if (postType.value == 'videos')
    return videos.value?.videos?.meta.pagination.pageCount;
  else if (postType.value == 'articles')
    return articles.value?.articles?.meta.pagination.pageCount;
});

// get the titlte
const title = computed(() => {
  if (postType.value == 'videos') return 'Videos';
  else if (postType.value == 'articles') return 'Articles';
});

function getPosts(posts: any) {
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

<style lang="scss"></style>
