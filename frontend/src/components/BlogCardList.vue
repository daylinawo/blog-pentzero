<template>
  <div id="blog-list">
    <div
      :class="$style.header"
      class="mt-1 mb-2 py-1 col-xs-12"
    >
      <h3 :class="$style.title">{{ props.title }}</h3>
    </div>
    <BlogCardListNavigation class="col-xs-12" />

    <div class="row gx-1 gy-3">
      <BlogCardListItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        class="col-sm-12 col-md-6 col-lg-4 col-xl-3"
      />
      <BlogCardListPagination
        class="col-xs-12"
        :page-total="pageTotal!"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BlogCardList',
};
</script>

<script setup lang="ts">
import { PropType } from 'vue';
import { BlogPostInfo } from '@/utils/types';
import BlogCardListItem from './BlogCardListItem.vue';
import BlogCardListNavigation from '@/components/BlogCardListNavigation.vue';
import BlogCardListPagination from '@/components/BlogCardListPagination.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  posts: {
    type: Object as PropType<BlogPostInfo[]>,
    required: true,
  },
  pageNumber: {
    type: Number,
    required: true,
  },
  pageTotal: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" module>
.blog-list {
}
.header {
  display: flex;
  flex-direction: column;
  border-block: 1px solid var(--color-border);
}
.title {
  text-transform: uppercase;
  font-weight: 400;
}
</style>
