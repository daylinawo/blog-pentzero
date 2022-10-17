<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h3 class="sidebar__title">More posts like this</h3>
    </div>
    <div class="sidebar__body">
      <div
        class="card"
        v-for="post in posts"
        :key="post.id"
      >
        <Link
          class="card__link"
          href="#"
        >
          <div class="card__photo card__photo--16-9">
            <img :src="`${api_url}${post.photo_url}`" />
          </div>
          <div class="card__meta">
            <h3 class="card__title">{{ post.title }}</h3>
          </div>
        </Link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Link from '@/renderer/Link.vue';
import PostDetails from '@/types/PostDetails';
import { PropType } from 'vue';

const api_url = import.meta.env.VITE_STRAPI_API_URL;

const props = defineProps({
  posts: { type: Array as PropType<PostDetails[]>, required: true },
});
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;

  &__link {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.625rem;

    padding: 0.375rem;
    transition: background-color 400ms;

    &:hover {
      background-color: var(--scrollColor);
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
    color: var(--neutralLightest);
    font-size: 14px;
  }
}

.sidebar {
  background: var(--neutralDarker);
  padding: 0.625rem;

  &__title {
    font-size: 0.6875em;
    margin-bottom: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.5ch;
    color: var(--neutralLightest);
    font-weight: 500;
  }

  &__body {
    padding-right: 0.625rem;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 600px;
  }
}
</style>
