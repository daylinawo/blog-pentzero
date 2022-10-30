<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h3 class="sidebar__title">More posts like this</h3>
    </div>
    <div class="sidebar__body">
      <SidebarWidgetCard
        v-for="post in posts"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostDetails } from '@/custom-types';
import { PropType } from 'vue';
import SidebarWidgetCard from './SidebarWidgetCard.vue';

const props = defineProps({
  posts: { type: Array as PropType<PostDetails[]>, required: true },
});
</script>

<style lang="scss" scoped>
.sidebar {
  background: var(--neutralLightest);
  padding-inline: 0.625rem;

  &__title {
    font-size: 0.875em;
    margin-bottom: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.125em;
    color: var(--neutralDark);
    font-weight: 600;
  }

  &__body {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 600px;
  }
}
</style>
