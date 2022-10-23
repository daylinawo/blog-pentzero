<template>
  <div class="blog-nav">
    <ul class="blog-nav__links">
      <li>
        <Link href="/videos/1"> Videos</Link>
      </li>
      <li>
        <Link href="/articles/1">Articles</Link>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref, watchEffect } from 'vue';
import Link from '@/renderer/Link.vue';
</script>

<style lang="scss">
.blog-nav {
  display: flex;
  justify-content: center;
  margin-top: 4em;
  //border-bottom: 1px solid var(--secondary);

  &__links {
    display: flex;
    li {
      list-style: none;
      margin-left: 1em;

      a {
        font-size: 0.9rem;
        text-transform: uppercase;
        transition: color 0.3s;

        &:hover {
          color: var(--primary);
        }

        &.active {
          border-top: 1px solid var(--neutralDarkest);
          padding-top: 0.1875em;
        }
      }
    }
  }
}
</style>
