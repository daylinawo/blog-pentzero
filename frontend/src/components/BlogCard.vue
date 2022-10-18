<!-- Blog card component -->

<template>
  <div class="card">
    <div class="card__photo card__photo--16-9 card__photo--rounded-edges">
      <Link :href="`/${componentName}/${post.slug}`">
        <img :src="`${api_url}${post.photo_url}`" />
        <div
          class="card__icon"
          v-if="props.post.type == 'Video'"
        >
          <VideoIcon />
        </div>
      </Link>
      <div
        class="card__icon"
        v-if="props.post.type == 'Article'"
      >
        <ArticleIcon />
      </div>
    </div>

    <Link
      class="card__title"
      :href="`/${componentName}/${post.slug}`"
    >
      {{ post.title }}
    </Link>

    <div class="card__meta-wrapper">
      <div class="card__meta">
        <span class="card__category">{{ post.category }}</span>
        <span class="card__date">{{
          moment(post.createdAt).format('MMMM Do YYYY')
        }}</span>
      </div>
      <div class="card__meta card__meta--row">
        <span>100k <ViewsIcon class="card__meta-icon" /></span>
        <span> 80 <CommentsIcon class="card__meta-icon" /></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/runtime-core';
import { PropType } from 'vue';
import PostDetails from '@/types/PostDetails';
import moment from 'moment';
import VideoIcon from '@/assets/images/icon-video.svg?component';
import ArticleIcon from '@/assets/images/icon-article.svg?component';
import CommentsIcon from '@/assets/images/icon-comments.svg?component';
import ViewsIcon from '@/assets/images/icon-views.svg?component';
import Link from '@/renderer/Link.vue';

const props = defineProps({
  post: {
    type: Object as PropType<PostDetails>,
    required: true,
  },
});

const api_url = import.meta.env.VITE_STRAPI_API_URL;

const componentName = computed(() => {
  if (props.post.type == 'Video') return 'video';
  else if (props.post.type == 'Article') return 'article';
  else if (props.post.type == 'Gallery') return 'gallery';
  else return '';
});
</script>

<style lang="scss">
.card {
  box-sizing: border-box;

  &__photo {
    margin-bottom: 1em;
  }

  &__meta-wrapper {
    margin-top: 0.4375em;
  }

  &__meta {
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.8125em;
      line-height: 1.375em;
      font-weight: 600;
    }

    &--row {
      flex-direction: row;

      span {
        position: relative;

        &:not(:first-child) {
          margin-left: 1em;
        }
      }
    }
  }
  &__category {
    text-transform: uppercase;
    letter-spacing: 0.125em;
  }

  &__date {
    color: var(--neutralLight);
    margin-bottom: 0.5em;
  }

  &__title {
    font-size: 1.5rem;
    color: var(--neutralDarkest);
    text-decoration: underline 0.08em rgba(0, 0, 0, 0);
    letter-spacing: -0.01em;
    transition: text-decoration-color 700ms;
    line-height: 1em;
    font-weight: 600;

    &:hover {
      text-decoration-color: rgba(0, 0, 0, 1);
    }
  }
  &__photo {
    position: relative;

    &--rounded-edges {
      border-radius: 0.4em;
    }

    &--16-9 {
      width: 100%;
      padding-top: 56.25%;
      overflow: hidden;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
      }
    }
  }

  &__icon {
    position: absolute;
    bottom: 0.5em;
    left: 0.5em;
    width: 3em;
    height: 3em;
    background: #eeb781ce;
    display: flex;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    svg {
      width: 50%;
      margin-left: 3px;
    }
  }

  &__meta-icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    margin-bottom: 0.1em;
    fill: var(--neutralDarkest);
  }
}
</style>
