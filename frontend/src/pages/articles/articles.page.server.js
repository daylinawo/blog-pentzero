export { onBeforeRender };

async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      redirectTo: '/articles/1',
    },
  };
}
