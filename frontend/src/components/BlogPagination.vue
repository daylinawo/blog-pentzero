<template>
  <div
    v-if="pageTotal"
    class="pagination"
  >
    <Link
      v-for="p in pageTotal"
      :href="`/videos/${p}`"
      >{{ p }}</Link
    >
    >
  </div>
</template>

<script setup lang="ts">
import Link from '@/renderer/Link.vue';

const props = defineProps({
  pageTotal: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  a {
    font-size: 1.5em;
    --size: 3ch;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--size);
    box-sizing: border-box;
    color: var(--tertiary);
  }

  .active {
    color: var(--primary);
    border-top: 1px solid var(--primary);
  }
}
</style>
