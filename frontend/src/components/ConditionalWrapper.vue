<script lang="ts">
export default { inheritAttrs: false };
</script>

<script setup lang="ts">
defineProps<{ is: any }>();
</script>

<template>
  <component
    v-if="is"
    :is="is"
    v-bind="$attrs"
  >
    <slot />
  </component>
  <slot v-else />
</template>
