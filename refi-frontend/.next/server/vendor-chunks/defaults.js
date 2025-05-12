/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/defaults";
exports.ids = ["vendor-chunks/defaults"];
exports.modules = {

/***/ "(ssr)/./node_modules/defaults/index.js":
/*!****************************************!*\
  !*** ./node_modules/defaults/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var clone = __webpack_require__(/*! clone */ \"(ssr)/./node_modules/clone/clone.js\");\n\nmodule.exports = function(options, defaults) {\n  options = options || {};\n\n  Object.keys(defaults).forEach(function(key) {\n    if (typeof options[key] === 'undefined') {\n      options[key] = clone(defaults[key]);\n    }\n  });\n\n  return options;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVmYXVsdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxtQkFBTyxDQUFDLGtEQUFPOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBIiwic291cmNlcyI6WyIvaG9tZS9za2lkLWtpZC9DYXJib25YL3JlZmktZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2RlZmF1bHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjbG9uZSA9IHJlcXVpcmUoJ2Nsb25lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgT2JqZWN0LmtleXMoZGVmYXVsdHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRpb25zW2tleV0gPSBjbG9uZShkZWZhdWx0c1trZXldKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvcHRpb25zO1xufTsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/defaults/index.js\n");

/***/ })

};
;