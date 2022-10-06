const express = require('express');
const compression = require('compression');
const { renderPage } = require('vite-plugin-ssr');

const isProduction = false;
const root = `${__dirname}/..`;
const fetch = require('cross-fetch');
const {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} = require('@apollo/client/core');
startServer();

async function startServer() {
  const app = express();

  app.use(compression());

  if (isProduction) {
    app.use(express.static(`${root}/dist/client`));
  } else {
    const vite = require('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  app.get('*', async (req, res, next) => {
    const apolloClient = makeApolloClient();
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      apolloClient,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse, redirectTo } = pageContext;

    if (redirectTo) {
      res.redirect(307, redirectTo);
    } else if (!httpResponse) {
      return next();
    } else {
      const { body, statusCode, contentType } = httpResponse;
      res.status(statusCode).type(contentType).send(body);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}

function makeApolloClient() {
  const apolloClient = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://localhost:1338/graphql',
      fetch,
    }),
    cache: new InMemoryCache(),
  });
  return apolloClient;
}
