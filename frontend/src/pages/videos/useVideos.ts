import {
  GetVideosDocument,
  GetVideosQuery,
  GetVideosQueryVariables,
} from '@/types.d';

import { useQuery, useLazyQuery } from '@vue/apollo-composable';

const useVideos = (params: GetVideosQueryVariables) => {
  const { result, error, loading } = useQuery<
    GetVideosQuery,
    GetVideosQueryVariables
  >(GetVideosDocument, params);

  return { result, error, loading };
};

export { useLazyVideos };

const useLazyVideos = () => {
  const { result, error, loading, load } = useLazyQuery(GetVideosDocument);

  return { result, error, loading, load };
};

export default useVideos;
