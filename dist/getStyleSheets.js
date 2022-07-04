"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyleSheets = getStyleSheets;
exports.ssrCss = void 0;
const ssrCss = new Set();
exports.ssrCss = ssrCss;

function getStyleSheets() {
  return [...ssrCss];
}