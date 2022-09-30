<template>
  <div
    v-if="pageTotal"
    class="pagination"
  >
    <router-link
      v-for="p in pageTotal"
      :to="paginate(p)"
      >{{ p }}</router-link
    >
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  pageTotal: {
    type: Number,
    required: true,
  },
});

// generate all page numbers
const paginate = (pageTo: number) => {
  return {
    params: {
      page: pageTo,
    },
  };
};
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

  .router-link-active {
    color: var(--primary);
    border-top: 1px solid var(--primary);
  }
}
</style>
