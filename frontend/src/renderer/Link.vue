<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }">
    <slot />
  </a>
</template>
<style scoped>
a.active {
}
</style>

<script setup lang="ts">
import { usePageContext } from './usePageContext';
const pageContext = usePageContext();
</script>
