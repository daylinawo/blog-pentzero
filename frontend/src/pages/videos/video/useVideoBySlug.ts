import {
  GetVideoBySlugDocument,
  GetVideoBySlugQuery,
  GetVideoBySlugQueryVariables,
} from '@/types.d';

import { useQuery } from '@vue/apollo-composable';

const useVideoBySlug = (params: GetVideoBySlugQueryVariables) => {
  const { result, error, loading } = useQuery<
    GetVideoBySlugQuery,
    GetVideoBySlugQueryVariables
  >(GetVideoBySlugDocument, params);

  return { result, error, loading };
};

export default useVideoBySlug;
