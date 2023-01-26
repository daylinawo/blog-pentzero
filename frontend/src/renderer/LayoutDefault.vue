<template>
  <TheHeader />

  <main :class="`content ${$options.name}__main`">
    <slot />
  </main>
  <TheFooter />
</template>

<script lang="ts">
export default {
  name: 'LayoutDefault',
};
</script>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.LayoutDefault {
  &__main {
    @include wrapper();
    margin-bottom: 6em;
  }
}
</style>
