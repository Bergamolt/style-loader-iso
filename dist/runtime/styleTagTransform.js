"use strict";

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (typeof document !== "undefined") {
    if (styleElement && styleElement.styleSheet) {
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