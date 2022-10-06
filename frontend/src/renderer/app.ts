import { createSSRApp, defineComponent, h, provide } from 'vue';
import PageShell from './PageShell.vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { setPageContext } from './usePageContext';
import type { PageContext } from './types';
import '@/assets/styles/main.css';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client/core';

export { createApp };

function createApp(
  pageContext: PageContext,
  apolloClient: ApolloClient<NormalizedCacheObject>
) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = defineComponent({
    setup() {
      provide(DefaultApolloClient, apolloClient);
    },
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        }
      );
    },
  });

  const app = createSSRApp(PageWithLayout);

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext);

  return app;
}
