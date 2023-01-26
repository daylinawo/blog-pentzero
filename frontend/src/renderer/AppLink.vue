<template>
  <a
    ref="link"
    :class="[isActive() && 'active ' + props.activeClass]"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue';
import { usePageContext } from './usePageContext';
const pageContext = usePageContext();

const props = defineProps({
  activeClass: {
    type: String,
    required: false,
  },
});

const attrs = useAttrs();

const isActive = () => {
  return pageContext.urlPathname === attrs.href;
};

const addActiveClass = () => {
  if (isActive()) {
    if (props.activeClass) {
      return 'active ' + props.activeClass;
    } else {
      return 'active';
    }
  }
  return '';
};
</script>

<style lang="scss" module>
a {
  transition: linear 200ms;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
}
</style>
