export { onBeforeRender };

async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      redirectTo: '/videos/1',
    },
  };
}
