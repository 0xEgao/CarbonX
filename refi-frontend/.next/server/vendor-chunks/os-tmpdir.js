"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/os-tmpdir";
exports.ids = ["vendor-chunks/os-tmpdir"];
exports.modules = {

/***/ "(ssr)/./node_modules/os-tmpdir/index.js":
/*!*****************************************!*\
  !*** ./node_modules/os-tmpdir/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar isWindows = process.platform === 'win32';\nvar trailingSlashRe = isWindows ? /[^:]\\\\$/ : /.\\/$/;\n\n// https://github.com/nodejs/node/blob/3e7a14381497a3b73dda68d05b5130563cdab420/lib/os.js#L25-L43\nmodule.exports = function () {\n\tvar path;\n\n\tif (isWindows) {\n\t\tpath = process.env.TEMP ||\n\t\t\tprocess.env.TMP ||\n\t\t\t(process.env.SystemRoot || process.env.windir) + '\\\\temp';\n\t} else {\n\t\tpath = process.env.TMPDIR ||\n\t\t\tprocess.env.TMP ||\n\t\t\tprocess.env.TEMP ||\n\t\t\t'/tmp';\n\t}\n\n\tif (trailingSlashRe.test(path)) {\n\t\tpath = path.slice(0, -1);\n\t}\n\n\treturn path;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb3MtdG1wZGlyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiL2hvbWUvc2tpZC1raWQvQ2FyYm9uWC9yZWZpLWZyb250ZW5kL25vZGVfbW9kdWxlcy9vcy10bXBkaXIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyIGlzV2luZG93cyA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMic7XG52YXIgdHJhaWxpbmdTbGFzaFJlID0gaXNXaW5kb3dzID8gL1teOl1cXFxcJC8gOiAvLlxcLyQvO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi8zZTdhMTQzODE0OTdhM2I3M2RkYTY4ZDA1YjUxMzA1NjNjZGFiNDIwL2xpYi9vcy5qcyNMMjUtTDQzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHBhdGg7XG5cblx0aWYgKGlzV2luZG93cykge1xuXHRcdHBhdGggPSBwcm9jZXNzLmVudi5URU1QIHx8XG5cdFx0XHRwcm9jZXNzLmVudi5UTVAgfHxcblx0XHRcdChwcm9jZXNzLmVudi5TeXN0ZW1Sb290IHx8IHByb2Nlc3MuZW52LndpbmRpcikgKyAnXFxcXHRlbXAnO1xuXHR9IGVsc2Uge1xuXHRcdHBhdGggPSBwcm9jZXNzLmVudi5UTVBESVIgfHxcblx0XHRcdHByb2Nlc3MuZW52LlRNUCB8fFxuXHRcdFx0cHJvY2Vzcy5lbnYuVEVNUCB8fFxuXHRcdFx0Jy90bXAnO1xuXHR9XG5cblx0aWYgKHRyYWlsaW5nU2xhc2hSZS50ZXN0KHBhdGgpKSB7XG5cdFx0cGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xuXHR9XG5cblx0cmV0dXJuIHBhdGg7XG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/os-tmpdir/index.js\n");

/***/ })

};
;