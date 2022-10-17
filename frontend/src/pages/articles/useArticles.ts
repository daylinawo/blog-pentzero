import {
  GetArticlesDocument,
  GetArticlesQuery,
  GetArticlesQueryVariables,
} from '@/types.d';
import { useQuery } from '@vue/apollo-composable';

const useArticles = (params: GetArticlesQueryVariables) => {
  const { result, error, loading } = useQuery<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >(GetArticlesDocument, params);

  return { result, error, loading };
};

export default useArticles;
