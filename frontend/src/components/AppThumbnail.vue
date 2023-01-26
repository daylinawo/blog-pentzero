<template>
  <ConditionalWrapper
    :is="shouldWrap ? 'AppLink' : null"
    :href="url"
  >
    <div :class="`thumbnail thumbnail--${props.ratio}`">
      <img :src="src" />
      <div
        v-if="icon"
        class="thumbnail__icon"
      >
        <AppIcon :svg="icon" />
      </div>
    </div>
  </ConditionalWrapper>
</template>

<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue';
import ConditionalWrapper from './ConditionalWrapper.vue';
import { PictureRatio } from '@/utils/types';

const props = defineProps({
  src: { type: String, required: true },
  icon: { type: String, required: false },
  url: { type: String, required: false },
  ratio: {
    type: String as PropType<PictureRatio>,
    default: PictureRatio.Sixteenbynine,
  },
});

const shouldWrap = ref(false);

onMounted(() => {
  if (props.url) shouldWrap.value = true;
});
</script>

<style lang="scss">
.thumbnail {
  position: relative;
  width: 100%;
  overflow: hidden;

  &--4\/3 {
    padding-top: 75%;
  }
  &--16\/9 {
    padding-top: 56.25%;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  &__icon {
    position: absolute;
    bottom: 0em;
    left: 0em;
    width: 3em;
    height: 3em;
    background: var(--color-primary-trans);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 40%;
      margin-left: 3px;
    }
  }
}
</style>
