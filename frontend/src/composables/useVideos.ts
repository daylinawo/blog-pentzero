import {
  GetVideosDocument,
  GetVideosQuery,
  GetVideosQueryVariables,
} from '@/types.d';
import { useLazyQuery, useQuery } from '@vue/apollo-composable';
import { ref } from 'vue';

export const useLazyVideos = (queryVars: GetVideosQueryVariables) => {
  const {
    result: videos,
    load,
    loading,
    error,
  } = useLazyQuery(GetVideosDocument, queryVars);
  return { videos, error, loading, load };
};

const useVideos = (params: GetVideosQueryVariables) => {
  const {
    result: videos,
    error,
    loading,
  } = useQuery<GetVideosQuery, GetVideosQueryVariables>(
    GetVideosDocument,
    params
  );

  return { videos, error, loading };
};

export default useVideos;
