"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resources/[slug]",{

/***/ "./pages/resources/[slug].js":
/*!***********************************!*\
  !*** ./pages/resources/[slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ResourcesDetails; }\n/* harmony export */ });\n/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/image */ \"./node_modules/next/dist/client/image.js\");\n/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreasnotokusumo/Documents/React Project/moonlight_inn/pages/resources/[slug].js\";\n\n\nvar __N_SSG = true;\nfunction ResourcesDetails(_ref) {\n  var resources = _ref.resources;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"w-full h-64 overflow-hidden\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n        src: \"https:\" + resources.fields[\"cover\"].fields.file.url\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"w-full flex relative justify-center -mt-20\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"relative flex justify-center self-center shadow-sm\",\n        style: {\n          height: 180,\n          width: 130\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_client_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n          layout: \"fill\",\n          src: \"https:\" + resources.fields[\"thumbnail\"].fields.file.url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n_c = ResourcesDetails;\n\nvar _c;\n\n$RefreshReg$(_c, \"ResourcesDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXNvdXJjZXMvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7OztBQStCZSxTQUFTQyxnQkFBVCxPQUF5QztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN0RCxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLDZCQUFmO0FBQUEsNkJBQ0U7QUFDRSxXQUFHLEVBQUUsV0FBV0EsU0FBUyxDQUFDQyxNQUFWLENBQWlCLE9BQWpCLEVBQTBCQSxNQUExQixDQUFpQ0MsSUFBakMsQ0FBc0NDO0FBRHhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFLLGVBQVMsRUFBQyw0Q0FBZjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQyxvREFEWjtBQUVFLGFBQUssRUFBRTtBQUNMQyxVQUFBQSxNQUFNLEVBQUUsR0FESDtBQUVMQyxVQUFBQSxLQUFLLEVBQUU7QUFGRixTQUZUO0FBQUEsK0JBT0UsOERBQUMsK0RBQUQ7QUFDRSxnQkFBTSxFQUFFLE1BRFY7QUFFRSxhQUFHLEVBQUUsV0FBV0wsU0FBUyxDQUFDQyxNQUFWLENBQWlCLFdBQWpCLEVBQThCQSxNQUE5QixDQUFxQ0MsSUFBckMsQ0FBMENDO0FBRjVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEO0tBeEJ1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb3VyY2VzL1tzbHVnXS5qcz9hNzdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJjb250ZW50ZnVsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvaW1hZ2VcIjtcblxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgc3BhY2U6IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5DT05URU5URlVMX0FDQ0VTU19LRVksXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlOiBcInJlc291cmNlc1wiLFxuICB9KTtcblxuICBjb25zdCBwYXRocyA9IHJlcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7IHNsdWc6IGl0ZW0uZmllbGRzLnNsdWcgfSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBpdGVtcyB9ID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogXCJyZXNvdXJjZXNcIixcbiAgICBcImZpZWxkcy5zbHVnXCI6IHBhcmFtcy5zbHVnLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJlc291cmNlczogaXRlbXNbMF0gfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc291cmNlc0RldGFpbHMoeyByZXNvdXJjZXMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTY0IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtcImh0dHBzOlwiICsgcmVzb3VyY2VzLmZpZWxkc1tcImNvdmVyXCJdLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCByZWxhdGl2ZSBqdXN0aWZ5LWNlbnRlciAtbXQtMjBcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgc2VsZi1jZW50ZXIgc2hhZG93LXNtXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAxODAsXG4gICAgICAgICAgICB3aWR0aDogMTMwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGxheW91dD17XCJmaWxsXCJ9XG4gICAgICAgICAgICBzcmM9e1wiaHR0cHM6XCIgKyByZXNvdXJjZXMuZmllbGRzW1widGh1bWJuYWlsXCJdLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVzb3VyY2VzRGV0YWlscyIsInJlc291cmNlcyIsImZpZWxkcyIsImZpbGUiLCJ1cmwiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/resources/[slug].js\n");

/***/ })

});