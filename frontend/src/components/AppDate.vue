<template>
  <span :title="humanFriendlyDate"> {{ diffForHumans }} ago </span>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity';
import moment from 'moment';

const props = defineProps({
  timestamp: { type: Date, required: true },
});

const humanFriendlyDate = computed(() => {
  return moment(props.timestamp).format('MMMM Do YYYY h:mm:ss a');
});

const diffForHumans = computed(() => {
  return moment(props.timestamp).fromNow(true);
});
</script>
<style></style>
