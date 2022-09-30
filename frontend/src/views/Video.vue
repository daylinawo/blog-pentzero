<template>
  <div>
    <h3>{{ videoObject?.video?.data?.attributes?.meta?.title }}</h3>
    <div class="description">
      {{ videoObject?.video?.data?.attributes?.description }}
    </div>
    <Player :url="videoObject?.video?.data?.attributes?.url" />
  </div>
</template>

<script setup lang="ts">
import {
  GetVideoDocument,
  GetVideoQuery,
  GetVideoQueryVariables,
} from '@/types.d';
import { useQuery } from '@vue/apollo-composable';

const props = defineProps(['id']);

const {
  error,
  loading,
  result: videoObject,
} = useQuery<GetVideoQuery, GetVideoQueryVariables>(GetVideoDocument, {
  id: props.id,
});
</script>

<style></style>
