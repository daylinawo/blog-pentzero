import {
  GetArticlesDocument,
  GetArticlesQuery,
  GetArticlesQueryVariables,
} from '@/types.d';
import { useQuery, useLazyQuery } from '@vue/apollo-composable';

export { useLazyArticles };

const useLazyArticles = () => {
  const { result, error, loading, load } = useLazyQuery(GetArticlesDocument);

  return { result, error, loading, load };
};

const useArticles = (params: GetArticlesQueryVariables) => {
  const { result, error, loading } = useQuery<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >(GetArticlesDocument, params);

  return { result, error, loading };
};

export default useArticles;
