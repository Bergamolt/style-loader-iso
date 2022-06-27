const { ssrCss } = require("../getStyleSheets");

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  ssrCss.add(css);

  if (typeof document !== "undefined") {
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      while (styleElement.firstChild) {
        styleElement.removeChild(styleElement.firstChild);
      }

      styleElement.appendChild(document.createTextNode(css));
    }
  }
}

module.exports = styleTagTransform;
