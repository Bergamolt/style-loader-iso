export const ssrCss = new Set();

function getStyleSheets() {
  return [...ssrCss];
}

export { getStyleSheets };
