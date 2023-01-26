<template>
  <div :class="`${$options.name}`">
    <a href="#">
      <AppThumbnail
        :src="props.imagePath"
        :ratio="PictureRatio.Sixteenbynine"
      />
      <div :class="`${$options.name}__footer`">
        <button class="ptBtn ptBtn--medium ptBtn--black-solid ptBtn--round">
          <AppIcon svg="icon-play" />
        </button>
        <div class="m-auto">
          <h3>{{ props.title }}</h3>
          <span>3 months</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FeaturedVideoListItem',
};
</script>

<script setup lang="ts">
import AppThumbnail from './AppThumbnail.vue';
import { PictureRatio } from '@/utils/types';

const props = defineProps({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

<style lang="scss">
.FeaturedVideoListItem {
  position: relative;
  text-align: center;

  &__footer {
    width: 100%;
    padding-block: 1rem;
    background: var(--color-gray-200);
    display: flex;
    flex-direction: row;

    h3 {
      font-size: 1.5rem;
      color: var(--white);
      text-transform: uppercase;
    }

    span {
      color: var(--color-gray-400);
    }

    button svg {
      margin-left: 2px;
    }
  }
}
</style>
