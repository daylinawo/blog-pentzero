import { createSSRApp, defineComponent, h, provide, markRaw } from 'vue';
import LayoutDefault from './LayoutDefault.vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { setPageContext } from './usePageContext';
import type { PageContext } from './types';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client/core';
import { registerComponents } from './registerComponents';
import VueDisqus from 'vue-disqus';

import '@/assets/scss/main.scss';

export { createApp };

function createApp(
  pageContext: PageContext,
  apolloClient: ApolloClient<NormalizedCacheObject>
) {
  const { Page, pageProps } = pageContext;

  let rootComponent;

  const PageWithWrapper = defineComponent({
    data: () => ({
      Page: markRaw(Page),
      pageProps: markRaw(pageContext.pageProps || {}),
      Layout: markRaw(pageContext.exports.Layout || LayoutDefault),
    }),

    setup() {
      provide(DefaultApolloClient, apolloClient);
    },
    render() {
      return h(
        this.Layout,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        }
      );
    },
  });

  const app = createSSRApp(PageWithWrapper);

  app.use(VueDisqus, {
    shortname: 'pentdemo',
  });

  registerComponents(app);
  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext);

  return app;
}
