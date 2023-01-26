<template>
  <span :title="humanFriendlyDate"> {{ diffForHumans }} ago </span>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { formatDate } from '@/utils/dateUtil';

const props = defineProps({
  timestamp: { type: Date, required: true },
});

const humanFriendlyDate = computed(() => {
  return formatDate(props.timestamp.toDateString(), 'human-friendly');
});

const diffForHumans = computed(() => {
  return formatDate(props.timestamp.toDateString(), 'time-ago');
});
</script>
<style></style>
