"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mimic-fn";
exports.ids = ["vendor-chunks/mimic-fn"];
exports.modules = {

/***/ "(ssr)/./node_modules/mimic-fn/index.js":
/*!****************************************!*\
  !*** ./node_modules/mimic-fn/index.js ***!
  \****************************************/
/***/ ((module) => {

eval("\n\nconst mimicFn = (to, from) => {\n\tfor (const prop of Reflect.ownKeys(from)) {\n\t\tObject.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));\n\t}\n\n\treturn to;\n};\n\nmodule.exports = mimicFn;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = mimicFn;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWltaWMtZm4vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXNCIiwic291cmNlcyI6WyIvaG9tZS9za2lkLWtpZC9DYXJib25YL3JlZmktZnJvbnRlbmQvbm9kZV9tb2R1bGVzL21pbWljLWZuL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWltaWNGbiA9ICh0bywgZnJvbSkgPT4ge1xuXHRmb3IgKGNvbnN0IHByb3Agb2YgUmVmbGVjdC5vd25LZXlzKGZyb20pKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRvLCBwcm9wLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGZyb20sIHByb3ApKTtcblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWltaWNGbjtcbi8vIFRPRE86IFJlbW92ZSB0aGlzIGZvciB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbWltaWNGbjtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mimic-fn/index.js\n");

/***/ })

};
;