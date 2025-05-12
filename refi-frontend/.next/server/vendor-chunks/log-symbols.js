"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/log-symbols";
exports.ids = ["vendor-chunks/log-symbols"];
exports.modules = {

/***/ "(ssr)/./node_modules/log-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/log-symbols/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst chalk = __webpack_require__(/*! chalk */ \"(ssr)/./node_modules/chalk/source/index.js\");\nconst isUnicodeSupported = __webpack_require__(/*! is-unicode-supported */ \"(ssr)/./node_modules/is-unicode-supported/index.js\");\n\nconst main = {\n\tinfo: chalk.blue('ℹ'),\n\tsuccess: chalk.green('✔'),\n\twarning: chalk.yellow('⚠'),\n\terror: chalk.red('✖')\n};\n\nconst fallback = {\n\tinfo: chalk.blue('i'),\n\tsuccess: chalk.green('√'),\n\twarning: chalk.yellow('‼'),\n\terror: chalk.red('×')\n};\n\nmodule.exports = isUnicodeSupported() ? main : fallback;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbG9nLXN5bWJvbHMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixjQUFjLG1CQUFPLENBQUMseURBQU87QUFDN0IsMkJBQTJCLG1CQUFPLENBQUMsZ0ZBQXNCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyIvaG9tZS9za2lkLWtpZC9DYXJib25YL3JlZmktZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2xvZy1zeW1ib2xzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKTtcbmNvbnN0IGlzVW5pY29kZVN1cHBvcnRlZCA9IHJlcXVpcmUoJ2lzLXVuaWNvZGUtc3VwcG9ydGVkJyk7XG5cbmNvbnN0IG1haW4gPSB7XG5cdGluZm86IGNoYWxrLmJsdWUoJ+KEuScpLFxuXHRzdWNjZXNzOiBjaGFsay5ncmVlbign4pyUJyksXG5cdHdhcm5pbmc6IGNoYWxrLnllbGxvdygn4pqgJyksXG5cdGVycm9yOiBjaGFsay5yZWQoJ+KclicpXG59O1xuXG5jb25zdCBmYWxsYmFjayA9IHtcblx0aW5mbzogY2hhbGsuYmx1ZSgnaScpLFxuXHRzdWNjZXNzOiBjaGFsay5ncmVlbign4oiaJyksXG5cdHdhcm5pbmc6IGNoYWxrLnllbGxvdygn4oC8JyksXG5cdGVycm9yOiBjaGFsay5yZWQoJ8OXJylcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmljb2RlU3VwcG9ydGVkKCkgPyBtYWluIDogZmFsbGJhY2s7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/log-symbols/index.js\n");

/***/ })

};
;