"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cli-cursor";
exports.ids = ["vendor-chunks/cli-cursor"];
exports.modules = {

/***/ "(ssr)/./node_modules/cli-cursor/index.js":
/*!******************************************!*\
  !*** ./node_modules/cli-cursor/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nconst restoreCursor = __webpack_require__(/*! restore-cursor */ \"(ssr)/./node_modules/restore-cursor/index.js\");\n\nlet isHidden = false;\n\nexports.show = (writableStream = process.stderr) => {\n\tif (!writableStream.isTTY) {\n\t\treturn;\n\t}\n\n\tisHidden = false;\n\twritableStream.write('\\u001B[?25h');\n};\n\nexports.hide = (writableStream = process.stderr) => {\n\tif (!writableStream.isTTY) {\n\t\treturn;\n\t}\n\n\trestoreCursor();\n\tisHidden = true;\n\twritableStream.write('\\u001B[?25l');\n};\n\nexports.toggle = (force, writableStream) => {\n\tif (force !== undefined) {\n\t\tisHidden = force;\n\t}\n\n\tif (isHidden) {\n\t\texports.show(writableStream);\n\t} else {\n\t\texports.hide(writableStream);\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2xpLWN1cnNvci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLHNCQUFzQixtQkFBTyxDQUFDLG9FQUFnQjs7QUFFOUM7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvaG9tZS9za2lkLWtpZC9DYXJib25YL3JlZmktZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2NsaS1jdXJzb3IvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgcmVzdG9yZUN1cnNvciA9IHJlcXVpcmUoJ3Jlc3RvcmUtY3Vyc29yJyk7XG5cbmxldCBpc0hpZGRlbiA9IGZhbHNlO1xuXG5leHBvcnRzLnNob3cgPSAod3JpdGFibGVTdHJlYW0gPSBwcm9jZXNzLnN0ZGVycikgPT4ge1xuXHRpZiAoIXdyaXRhYmxlU3RyZWFtLmlzVFRZKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aXNIaWRkZW4gPSBmYWxzZTtcblx0d3JpdGFibGVTdHJlYW0ud3JpdGUoJ1xcdTAwMUJbPzI1aCcpO1xufTtcblxuZXhwb3J0cy5oaWRlID0gKHdyaXRhYmxlU3RyZWFtID0gcHJvY2Vzcy5zdGRlcnIpID0+IHtcblx0aWYgKCF3cml0YWJsZVN0cmVhbS5pc1RUWSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHJlc3RvcmVDdXJzb3IoKTtcblx0aXNIaWRkZW4gPSB0cnVlO1xuXHR3cml0YWJsZVN0cmVhbS53cml0ZSgnXFx1MDAxQls/MjVsJyk7XG59O1xuXG5leHBvcnRzLnRvZ2dsZSA9IChmb3JjZSwgd3JpdGFibGVTdHJlYW0pID0+IHtcblx0aWYgKGZvcmNlICE9PSB1bmRlZmluZWQpIHtcblx0XHRpc0hpZGRlbiA9IGZvcmNlO1xuXHR9XG5cblx0aWYgKGlzSGlkZGVuKSB7XG5cdFx0ZXhwb3J0cy5zaG93KHdyaXRhYmxlU3RyZWFtKTtcblx0fSBlbHNlIHtcblx0XHRleHBvcnRzLmhpZGUod3JpdGFibGVTdHJlYW0pO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cli-cursor/index.js\n");

/***/ })

};
;