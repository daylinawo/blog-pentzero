<template>
  <div
    v-if="pageTotal"
    :class="$style.pagination"
  >
    <AppLink
      class="h3"
      :activeClass="$style.active"
      v-for="pageNum in pageTotal"
      :href="`/${postType}/${pageNum}`"
      >{{ pageNum }}</AppLink
    >
  </div>
</template>
<script lang="ts">
export default {
  name: 'BlogCardListPagination',
};
</script>
<script setup lang="ts">
import { usePageContext } from '@/renderer/usePageContext';

const pageContext = usePageContext();

const postType = pageContext.urlPathname.slice(1).split('/')[0];

const props = defineProps({
  pageTotal: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" module>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    box-sizing: border-box;
  }

  .active {
    color: color(primary);
    border-top: 1px solid color(primary);
  }
}
</style>
