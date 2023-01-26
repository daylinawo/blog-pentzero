<template>
  <div class="details">
    <h3 class="details__title">
      {{ meta.title }}
    </h3>
    <div class="meta">
      <div class="meta__views">300,000 views</div>
      <AppDate
        :timestamp="meta.publishedAt"
        class="meta__date"
      />
    </div>

    <div class="details__description">
      <Markdown :source="meta.desc" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Markdown from 'vue3-markdown-it';
import { BlogDetailMeta } from '@/utils/types';
import { PropType } from 'vue';

const props = defineProps({
  meta: { type: Object as PropType<BlogDetailMeta>, required: true },
});
</script>

<style lang="scss">
.details {
  &__title {
    margin-bottom: 1rem;
    font-size: 2.5em;
    font-weight: 600;
    letter-spacing: -0.03em;
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
    font-weight: 600;
  }

  &__date {
    font-size: 0.875em;
    font-weight: 600;
  }
}
</style>
