"use strict";

/* istanbul ignore next  */
function insertStyleElement(options) {
  if (typeof document !== "undefined") {
    var element = document.createElement("style");
    options.setAttributes(element, options.attributes);
    options.insert(element, options.options);
    return element;
  }

  return null;
}

module.exports = insertStyleElement;