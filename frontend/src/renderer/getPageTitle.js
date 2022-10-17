export { getPageTitle };

function getPageTitle(pageContext) {
  const title =
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).title ||
    // For dynamic tiles (defined in the `export { getDocumentProps }` of the page's `.page.server.js`)
    (pageContext.exports.getDocumentProps(pageContext.apolloInitialState) || {})
      .title ||
    'Pentzero';
  return title;
}
