<template>
  <div
    id="blog-list-navigation"
    :class="$style.nav"
  >
    <ul :class="$style.links">
      <li v-for="route in routes">
        <AppLink
          :href="`${route.to}`"
          class="small-text"
          :activeClass="$style.active"
        >
          {{ route.title }}</AppLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const routes = [
  {
    title: 'videos',
    to: '/videos/1',
  },
  {
    title: 'articles',
    to: '/articles/1',
  },
  {
    title: 'galleries',
    to: '/galleries/1',
  },
];
</script>
<script lang="ts">
export default {
  name: 'BlogCardListNav',
};
</script>

<style lang="scss" module>
.nav {
  display: flex;
}

.links {
  display: flex;
}

.links li {
  list-style: none;
  &:not(:first-child) {
    margin-left: 1em;
  }
}

.links li a {
  text-transform: uppercase;
  transition: color 0.3s;

  &:hover {
    color: color(primary);
  }

  &.active {
    border-top: 1px solid var(--color-border);
    padding-top: 0.1875em;
    font-weight: 600;
  }
}
</style>
