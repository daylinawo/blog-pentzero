<template>
  <div :class="$style.card">
    <div class="mb-1">
      <AppThumbnail
        :src="`${api_url}${post.imagePath}`"
        :icon="`icon-${post.type}`"
        :url="`/${post.type}/${post.slug}`"
        :ratio="PictureRatio.Fourbythree"
      />
    </div>

    <div :class="$style.metadata">
      <div :class="$style.block">
        <span :class="$style.category">{{ post.category }}</span>
      </div>
    </div>

    <AppLink
      :class="$style.link"
      :href="`/${post.type}/${post.slug}`"
    >
      <h3
        class="mb-1"
        :class="$style.title"
      >
        {{ post.title }}
      </h3>
    </AppLink>
    <div :class="$style.metadata">
      <div :class="$style.inlineItem">
        <DisqusCount :identifier="`/${post.type}/${post.slug}`" />
        <AppIcon
          :svg="`icon-comments`"
          :class="$style.icon"
        />
      </div>
      <div :class="$style.inlineItem">
        <span>100k</span>
        <AppIcon
          :svg="`icon-views`"
          :class="$style.icon"
        />
      </div>

      <div :class="$style.block">
        <AppDate :timestamp="post.publishedAt" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BlogCard',
};
</script>

<script setup lang="ts">
import { PropType } from 'vue';
import { BlogPostInfo, PictureRatio } from '@/utils/types';
import AppThumbnail from './AppThumbnail.vue';

const props = defineProps({
  post: {
    type: Object as PropType<BlogPostInfo>,
    required: true,
  },
});

const api_url = import.meta.env.VITE_STRAPI_API_URL;
</script>

<style module lang="scss">
.card {
  box-sizing: border-box;
}

.link {
  text-decoration: underline 0.05em rgba(0, 0, 0, 0);
  display: block;

  &:hover {
    text-decoration-color: rgba(0, 0, 0, 1);
    color: inherit;
  }
}

.title {
  letter-spacing: -0.01em;
  font-weight: 600;
  text-transform: capitalize;
  font-size: var(--fs-400);
}

.metadata {
  font-size: var(--fs-300);
}

.inline-item {
  display: inline-block;

  &:not(:first-child):before {
    content: '•';
    margin: 0 4px;
  }
}

.category {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5em;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  margin-bottom: 0.125rem;
  margin-left: 0.125rem;
}
.block {
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
}
</style>
