<template>
  <div class="details">
    <h3 class="details__title">
      {{ meta.title }}
    </h3>
    <div class="meta">
      <div class="meta__views">300,000 views</div>
      <div class="meta__date">
        {{ moment(meta.publishedAt).format('MMMM Do YYYY') }}
      </div>
    </div>

    <div class="details__description">
      <Markdown :source="meta.desc" />
    </div>
  </div>
</template>
<script setup lang="ts">
import moment from 'moment';
import Markdown from 'vue3-markdown-it';
import PostMeta from '@/types/PostMeta';
import { PropType } from 'vue';

const props = defineProps({
  meta: { type: Object as PropType<PostMeta>, required: true },
});
</script>

<style lang="scss">
.details {
  margin-top: 1rem;

  &__title {
    margin-bottom: 1rem;
    font-size: 2.5em;
  }
  &__description {
    font-size: 0.875em;
    line-height: 1.5em;
  }
}

.meta {
  margin-block: 1rem;
  display: flex;

  &__views {
    font-size: 0.875em;
    margin-right: 0.75rem;
  }

  &__date {
    font-size: 0.875em;
  }
}
</style>
