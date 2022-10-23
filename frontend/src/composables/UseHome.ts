import {
  GetHomeDocument,
  GetHomeQuery,
  GetHomeQueryVariables,
} from '@/types.d';

import { useQuery } from '@vue/apollo-composable';

const useHome = () => {
  const { result, error, loading } = useQuery<
    GetHomeQuery,
    GetHomeQueryVariables
  >(GetHomeDocument);

  return { result, error, loading };
};

export default useHome;
