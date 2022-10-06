<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }">
    <slot />
  </a>
</template>
<style scoped>
a.active {
}
</style>
<script lang="ts" setup>
import { usePageContext } from './usePageContext';
const pageContext = usePageContext();
</script>
