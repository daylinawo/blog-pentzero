<template>
  <div class="cards__wrap">
    <BlogNavigation />
    <div class="cards__header">
      <h3 class="cards__title">{{ title }}</h3>
      <!--<div class="cards__page-meta">
        <span class="cards__page-number">{{ pageNumber }}</span
        >/<span class="cards__page-total">{{ pageTotal }}</span>
      </div>-->
    </div>

    <div
      class="l-grid l-grid--three-md"
      v-if="posts"
    >
      <BlogCard
        v-for="post in posts"
        :post="post"
        :key="post.id"
      />
    </div>
    <BlogPagination :page-total="pageTotal!" />
  </div>
</template>

<script setup lang="ts">
import BlogCard from './BlogCard.vue';
import { PropType } from 'vue';
import PostDetails from '@/types/PostDetails';
import BlogNavigation from '@/components/BlogNavigation.vue';
import BlogPagination from '@/components/BlogPagination.vue';

const props = defineProps({
  posts: {
    type: Object as PropType<PostDetails[]>,
    required: true,
  },
  title: {
    type: String,
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

<style lang="scss">
.l-grid {
  display: grid;
  gap: 2.75rem;
  grid-template-columns: 1fr;

  &--three-md {
    @include breakpoint(medium) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &--three-lg {
    @include breakpoint(large) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &--four-lg {
    @include breakpoint(large) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

.cards {
  &__header {
    margin-top: 3em;
    margin-bottom: 5em;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 4.25rem;
    text-align: center;
  }

  &__page-meta {
    text-align: center;
    letter-spacing: 4px;
    font-size: 1.5em;
    margin-top: 1em;
  }

  &__page-number {
    font-weight: 600;
    font-size: 2rem;
  }
}
</style>
