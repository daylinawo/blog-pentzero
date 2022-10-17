import {
  GetVideosDocument,
  GetVideosQuery,
  GetVideosQueryVariables,
} from '@/types.d';

import { useQuery } from '@vue/apollo-composable';

const useVideos = (params: GetVideosQueryVariables) => {
  const { result, error, loading } = useQuery<
    GetVideosQuery,
    GetVideosQueryVariables
  >(GetVideosDocument, params);

  return { result, error, loading };
};

export default useVideos;
