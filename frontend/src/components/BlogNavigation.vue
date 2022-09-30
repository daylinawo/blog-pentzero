<template>
  <div class="blog-nav">
    <ul class="links">
      <li>
        <router-link
          :class="{ active: isVideosPage }"
          :to="{ name: 'Videos', params: { page: 1 } }"
        >
          Videos</router-link
        >
      </li>
      <li>
        <router-link
          :class="{ active: isArticlesPage }"
          :to="{ name: 'Articles', params: { page: 1 } }"
          >Articles</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
const route = useRoute();

const page = computed(() => {
  return route.path.substring(1).split('/')[0];
});

const isVideosPage = ref<boolean>(false);
const isArticlesPage = ref<boolean>(false);

watchEffect(() => {
  if (page.value == 'videos') isVideosPage.value = true;
  else if (page.value == 'articles') isArticlesPage.value = true;
});
</script>

<style lang="scss">
.blog-nav {
  display: flex;
  justify-content: center;
  margin-top: 4em;
  //border-bottom: 1px solid var(--secondary);

  .links {
    display: flex;
  }
  li {
    list-style: none;
    margin-left: 1em;

    a {
      font-size: 0.9rem;
      color: var(--tertiary);
      text-transform: uppercase;
      transition: color 0.3s;

      &:hover {
        color: var(--primary);
      }

      &.active {
        border-top: 1px solid var(--tertiary);
        padding-top: 0.1875em;
      }
    }
  }
}
</style>
