export { getDocumentProps };

function getDocumentProps(apolloInitialState) {
  const _title =
    apolloInitialState[Object.keys(apolloInitialState)[0]].attributes.meta
      .title;
  return { title: _title };
}
