import {
  GetArticlesDocument,
  GetArticlesQuery,
  GetArticlesQueryVariables,
} from '@/types.d';
import { useLazyQuery, useQuery } from '@vue/apollo-composable';

export const useLazyArticles = (queryVars: GetArticlesQueryVariables) => {
  const {
    result: articles,
    load,
    loading,
    error,
  } = useLazyQuery(GetArticlesDocument, queryVars);
  return { articles, error, loading, load };
};

const useArticles = (params: GetArticlesQueryVariables) => {
  const {
    result: articles,
    error,
    loading,
  } = useQuery<GetArticlesQuery, GetArticlesQueryVariables>(
    GetArticlesDocument,
    params
  );

  return { articles, error, loading };
};

export default useArticles;
