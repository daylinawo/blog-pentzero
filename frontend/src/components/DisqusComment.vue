<template>
  <Disqus :identifier="identifier" />
</template>

<script setup lang="ts">
import { usePageContext } from '@/renderer/usePageContext';
const pageContext = usePageContext();
const identifier = pageContext.urlPathname;
</script>
<style></style>
