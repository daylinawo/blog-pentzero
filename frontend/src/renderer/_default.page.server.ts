// /renderer/_default.page.server.js
// Environment: Node.js

import { renderToString } from '@vue/server-renderer';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import { PageContextServer } from './types';
import { createApp } from './app';

export { render };
export { onBeforeRender };

export const passToClient = [
  'pageProps',
  'urlPathname',
  'apolloInitialState',
  'routeParams',
];

async function render(pageContext: PageContextServer) {
  const { documentProps } = pageContext.exports;
  const { redirectTo } = pageContext;

  if (redirectTo) {
    console.log(redirectTo);
    return {
      pageContext: {
        redirectTo,
      },
    };
  }

  const title = (documentProps && documentProps.title) || 'Pentzero';
  const desc =
    (documentProps && documentProps.description) || 'Lifestyle & Entertainment';

  const { appHtml } = pageContext;

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="${desc}">
      <link rel="icon" href="./favicon.ico">
      <title>${title}</title>
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(appHtml)}</div>
    </body>
  </html>`;

  return {
    documentHtml,
    pageContext: {},
  };
}

async function onBeforeRender(pageContext: PageContextServer) {
  const app = createApp(pageContext, pageContext.apolloClient);
  const appHtml = await renderToString(app);
  const apolloInitialState = pageContext.apolloClient.extract();
  return {
    pageContext: {
      apolloInitialState,
      appHtml,
    },
  };
}
