<template>
  <div>
    <h3>{{ videoObject?.video?.data?.attributes?.meta?.title }}</h3>
    <div class="description">
      {{ videoObject?.video?.data?.attributes?.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageContext } from '@/renderer/usePageContext';
import {
  GetVideoDocument,
  GetVideoQuery,
  GetVideoQueryVariables,
} from '@/types.d';
import { useQuery } from '@vue/apollo-composable';

const pageContext = usePageContext();

const {
  error,
  loading,
  result: videoObject,
} = useQuery<GetVideoQuery, GetVideoQueryVariables>(GetVideoDocument, {
  id: pageContext.routeParams!.id,
});
</script>

<style></style>
