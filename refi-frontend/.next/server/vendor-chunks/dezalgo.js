/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/dezalgo";
exports.ids = ["vendor-chunks/dezalgo"];
exports.modules = {

/***/ "(rsc)/./node_modules/dezalgo/dezalgo.js":
/*!*****************************************!*\
  !*** ./node_modules/dezalgo/dezalgo.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var wrappy = __webpack_require__(/*! wrappy */ \"(rsc)/./node_modules/wrappy/wrappy.js\")\nmodule.exports = wrappy(dezalgo)\n\nvar asap = __webpack_require__(/*! asap */ \"(rsc)/./node_modules/asap/asap.js\")\n\nfunction dezalgo (cb) {\n  var sync = true\n  asap(function () {\n    sync = false\n  })\n\n  return function zalgoSafe() {\n    var args = arguments\n    var me = this\n    if (sync)\n      asap(function() {\n        cb.apply(me, args)\n      })\n    else\n      cb.apply(me, args)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGV6YWxnby9kZXphbGdvLmpzIiwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyxxREFBUTtBQUM3Qjs7QUFFQSxXQUFXLG1CQUFPLENBQUMsK0NBQU07O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9ob21lL2thcnRpay9Xb3JrL1NvbGFuYS9IYWNrL0NhcmJvblgvcmVmaS1mcm9udGVuZC9ub2RlX21vZHVsZXMvZGV6YWxnby9kZXphbGdvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB3cmFwcHkgPSByZXF1aXJlKCd3cmFwcHknKVxubW9kdWxlLmV4cG9ydHMgPSB3cmFwcHkoZGV6YWxnbylcblxudmFyIGFzYXAgPSByZXF1aXJlKCdhc2FwJylcblxuZnVuY3Rpb24gZGV6YWxnbyAoY2IpIHtcbiAgdmFyIHN5bmMgPSB0cnVlXG4gIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgIHN5bmMgPSBmYWxzZVxuICB9KVxuXG4gIHJldHVybiBmdW5jdGlvbiB6YWxnb1NhZmUoKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHNcbiAgICB2YXIgbWUgPSB0aGlzXG4gICAgaWYgKHN5bmMpXG4gICAgICBhc2FwKGZ1bmN0aW9uKCkge1xuICAgICAgICBjYi5hcHBseShtZSwgYXJncylcbiAgICAgIH0pXG4gICAgZWxzZVxuICAgICAgY2IuYXBwbHkobWUsIGFyZ3MpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/dezalgo/dezalgo.js\n");

/***/ })

};
;