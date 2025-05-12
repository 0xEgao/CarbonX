"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cli-width";
exports.ids = ["vendor-chunks/cli-width"];
exports.modules = {

/***/ "(ssr)/./node_modules/cli-width/index.js":
/*!*****************************************!*\
  !*** ./node_modules/cli-width/index.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nexports = module.exports = cliWidth;\n\nfunction normalizeOpts(options) {\n  let defaultOpts = {\n    defaultWidth: 0,\n    output: process.stdout,\n    tty: __webpack_require__(/*! tty */ \"tty\"),\n  };\n\n  if (!options) {\n    return defaultOpts;\n  }\n\n  Object.keys(defaultOpts).forEach(function (key) {\n    if (!options[key]) {\n      options[key] = defaultOpts[key];\n    }\n  });\n\n  return options;\n}\n\nfunction cliWidth(options) {\n  let opts = normalizeOpts(options);\n\n  if (opts.output.getWindowSize) {\n    return opts.output.getWindowSize()[0] || opts.defaultWidth;\n  }\n\n  if (opts.tty.getWindowSize) {\n    return opts.tty.getWindowSize()[1] || opts.defaultWidth;\n  }\n\n  if (opts.output.columns) {\n    return opts.output.columns;\n  }\n\n  if (process.env.CLI_WIDTH) {\n    let width = parseInt(process.env.CLI_WIDTH, 10);\n\n    if (!isNaN(width) && width !== 0) {\n      return width;\n    }\n  }\n\n  return opts.defaultWidth;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2xpLXdpZHRoL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLGdCQUFLO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiL2hvbWUvc2tpZC1raWQvQ2FyYm9uWC9yZWZpLWZyb250ZW5kL25vZGVfbW9kdWxlcy9jbGktd2lkdGgvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNsaVdpZHRoO1xuXG5mdW5jdGlvbiBub3JtYWxpemVPcHRzKG9wdGlvbnMpIHtcbiAgbGV0IGRlZmF1bHRPcHRzID0ge1xuICAgIGRlZmF1bHRXaWR0aDogMCxcbiAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0LFxuICAgIHR0eTogcmVxdWlyZShcInR0eVwiKSxcbiAgfTtcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gZGVmYXVsdE9wdHM7XG4gIH1cblxuICBPYmplY3Qua2V5cyhkZWZhdWx0T3B0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFvcHRpb25zW2tleV0pIHtcbiAgICAgIG9wdGlvbnNba2V5XSA9IGRlZmF1bHRPcHRzW2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gY2xpV2lkdGgob3B0aW9ucykge1xuICBsZXQgb3B0cyA9IG5vcm1hbGl6ZU9wdHMob3B0aW9ucyk7XG5cbiAgaWYgKG9wdHMub3V0cHV0LmdldFdpbmRvd1NpemUpIHtcbiAgICByZXR1cm4gb3B0cy5vdXRwdXQuZ2V0V2luZG93U2l6ZSgpWzBdIHx8IG9wdHMuZGVmYXVsdFdpZHRoO1xuICB9XG5cbiAgaWYgKG9wdHMudHR5LmdldFdpbmRvd1NpemUpIHtcbiAgICByZXR1cm4gb3B0cy50dHkuZ2V0V2luZG93U2l6ZSgpWzFdIHx8IG9wdHMuZGVmYXVsdFdpZHRoO1xuICB9XG5cbiAgaWYgKG9wdHMub3V0cHV0LmNvbHVtbnMpIHtcbiAgICByZXR1cm4gb3B0cy5vdXRwdXQuY29sdW1ucztcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5DTElfV0lEVEgpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludChwcm9jZXNzLmVudi5DTElfV0lEVEgsIDEwKTtcblxuICAgIGlmICghaXNOYU4od2lkdGgpICYmIHdpZHRoICE9PSAwKSB7XG4gICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9wdHMuZGVmYXVsdFdpZHRoO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/cli-width/index.js\n");

/***/ })

};
;