<template>
  <div class="card">
    <AppLink
      class="card__link"
      href="#"
    >
      <div class="card__photo card__photo--16-9">
        <img :src="`${api_url}${post.imagePath}`" />
      </div>
      <div class="card__meta">
        <h3 class="card__title">{{ postTitle(post.title) }}</h3>
      </div>
    </AppLink>
  </div>
</template>
<script setup lang="ts">
import { BlogPostInfo } from '@/utils/types';
import { truncateString } from '@/utils/helpers';
import { POST_TITLE_MAX_LENGTH } from '@/utils/constants';
import { PropType } from 'vue';

const props = defineProps({
  post: { type: Object as PropType<BlogPostInfo>, required: true },
});

const api_url = import.meta.env.VITE_STRAPI_API_URL;

const postTitle = (title: string) => {
  return truncateString(title, POST_TITLE_MAX_LENGTH);
};
</script>
<style lang="scss" scoped>
.card {
  box-sizing: border-box;

  &__link {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.625rem;

    padding-block: 0.375rem;
    transition: background-color 400ms;

    &:hover {
      background-color: var(--neutralLighter);
    }
  }

  &__photo {
    position: relative;
    margin-right: 1rem;

    &--16-9 {
      width: 100%;
      padding-bottom: 56.2%;
      overflow: hidden;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left;
      }
    }
  }

  &__meta {
    margin-right: 0.625rem;
  }

  &__title {
    color: var(--neutralDark);
    font-size: 1.125em;
    font-weight: 600;
  }
}
</style>
