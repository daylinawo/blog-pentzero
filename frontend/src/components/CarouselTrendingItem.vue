<template>
  <div>
    <AppThumbnail
      :src="`${apiUrl}${post.imagePath}`"
      :icon="`icon-${post.type}`"
      :url="`/${post.type}/${post.slug}`"
    />
    <AppLink
      :href="`/${post.type}/${post.slug}`"
      :class="$style.title"
      >{{ post.title }}</AppLink
    >
    <div :class="$style.meta">
      <AppDate :timestamp="post.publishedAt" />
      <span>129k views</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CarouselTrendingItem',
};
</script>

<script setup lang="ts">
import AppThumbnail from './AppThumbnail.vue';

import { BlogPostInfo } from '@/utils/types';
import { PropType } from 'vue';

const apiUrl = import.meta.env.VITE_STRAPI_API_URL;

const props = defineProps({
  post: {
    type: Object as PropType<BlogPostInfo>,
    required: true,
  },
});
</script>

<style lang="scss" module>
.title {
  font-weight: bold;
  color: var(--white);
  margin-top: 0.5rem;
  display: inline-block;
}

.meta {
  & span {
    color: var(--color-gray-300);
    font-size: 13px;
    position: relative;

    &:not(:last-child) {
      padding-right: 10px;
      &::after {
        font-size: 2em;
        content: '\b7';
        position: absolute;
        top: -50%;
        left: calc(100% - 9px);
      }
    }
  }
}
</style>
