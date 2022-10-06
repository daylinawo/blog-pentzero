<template>
  <BlogList
    v-if="posts"
    :posts="posts"
    :title="'Videos'"
    :page-number="page"
    :page-total="pageTotal!"
  />
  <p v-if="videosLoading">loading...</p>
</template>

<script setup lang="ts">
import useVideos from '@/composables/useVideos';
import { computed } from '@vue/reactivity';
import { POSTS_PER_PAGE } from '@/constants/settings';
import BlogList from '@/components/BlogList.vue';
import { usePageContext } from '@/renderer/usePageContext';

const pageContext = usePageContext();
const page = computed(() => {
  if (typeof pageContext.routeParams!.page === 'string')
    return parseInt(pageContext.routeParams!.page, 10);
  else return 1;
});

// variables for posts queries
const queryVars = computed(() => {
  const offset = (page.value - 1) * POSTS_PER_PAGE;
  return {
    limit: POSTS_PER_PAGE,
    start: offset,
    orderBy: 'publishedAt:desc',
  };
});

// get all video posts
const posts = computed(() => {
  return getPosts(videos?.value?.videos?.data.slice());
});

// total number of pages for video posts
const pageTotal = computed(() => {
  return videos.value?.videos?.meta.pagination.pageCount;
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

// fetch all posts data from database to create blog feed
const {
  videos,
  error: videosError,
  loading: videosLoading,
} = useVideos(queryVars);
</script>
