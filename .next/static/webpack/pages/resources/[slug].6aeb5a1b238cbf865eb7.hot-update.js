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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ResourcesDetails; }\n/* harmony export */ });\n/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/image */ \"./node_modules/next/dist/client/image.js\");\n/* harmony import */ var next_dist_client_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreasnotokusumo/Documents/React Project/moonlight_inn/pages/resources/[slug].js\";\n\n\nvar __N_SSG = true;\nfunction ResourcesDetails(_ref) {\n  var resources = _ref.resources;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"w-full h-24 overflow-hidden\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_client_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"fill\",\n        className: \"w-full object-cover\",\n        src: \"https:\" + resources.fields[\"cover\"].fields.file.url\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"w-full flex relative justify-center top-28\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"relative flex justify-center self-center shadow-xl\",\n        style: {\n          height: 180,\n          width: 130\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_client_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n          layout: \"fill\",\n          src: \"https:\" + resources.fields[\"thumbnail\"].fields.file.url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n      children: resources.fields[\"title\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n_c = ResourcesDetails;\n\nvar _c;\n\n$RefreshReg$(_c, \"ResourcesDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXNvdXJjZXMvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7OztBQStCZSxTQUFTQyxnQkFBVCxPQUF5QztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN0RCxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLDZCQUFmO0FBQUEsNkJBQ0UsOERBQUMsK0RBQUQ7QUFDRSxjQUFNLEVBQUMsTUFEVDtBQUVFLGlCQUFTLEVBQUMscUJBRlo7QUFHRSxXQUFHLEVBQUUsV0FBV0EsU0FBUyxDQUFDQyxNQUFWLENBQWlCLE9BQWpCLEVBQTBCQSxNQUExQixDQUFpQ0MsSUFBakMsQ0FBc0NDO0FBSHhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRTtBQUFLLGVBQVMsRUFBQyw0Q0FBZjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQyxvREFEWjtBQUVFLGFBQUssRUFBRTtBQUNMQyxVQUFBQSxNQUFNLEVBQUUsR0FESDtBQUVMQyxVQUFBQSxLQUFLLEVBQUU7QUFGRixTQUZUO0FBQUEsK0JBT0UsOERBQUMsK0RBQUQ7QUFDRSxnQkFBTSxFQUFFLE1BRFY7QUFFRSxhQUFHLEVBQUUsV0FBV0wsU0FBUyxDQUFDQyxNQUFWLENBQWlCLFdBQWpCLEVBQThCQSxNQUE5QixDQUFxQ0MsSUFBckMsQ0FBMENDO0FBRjVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBc0JFO0FBQUEsZ0JBQUtILFNBQVMsQ0FBQ0MsTUFBVixDQUFpQixPQUFqQjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQ7S0EzQnVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXNvdXJjZXMvW3NsdWddLmpzP2E3N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcImNvbnRlbnRmdWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9pbWFnZVwiO1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBzcGFjZTogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfQUNDRVNTX0tFWSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwicmVzb3VyY2VzXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHBhdGhzID0gcmVzLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHsgc2x1ZzogaXRlbS5maWVsZHMuc2x1ZyB9LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IGl0ZW1zIH0gPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlOiBcInJlc291cmNlc1wiLFxuICAgIFwiZmllbGRzLnNsdWdcIjogcGFyYW1zLnNsdWcsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcmVzb3VyY2VzOiBpdGVtc1swXSB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzb3VyY2VzRGV0YWlscyh7IHJlc291cmNlcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMjQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgIHNyYz17XCJodHRwczpcIiArIHJlc291cmNlcy5maWVsZHNbXCJjb3ZlclwiXS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggcmVsYXRpdmUganVzdGlmeS1jZW50ZXIgdG9wLTI4XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIHNlbGYtY2VudGVyIHNoYWRvdy14bFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogMTgwLFxuICAgICAgICAgICAgd2lkdGg6IDEzMCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBsYXlvdXQ9e1wiZmlsbFwifVxuICAgICAgICAgICAgc3JjPXtcImh0dHBzOlwiICsgcmVzb3VyY2VzLmZpZWxkc1tcInRodW1ibmFpbFwiXS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMj57cmVzb3VyY2VzLmZpZWxkc1tcInRpdGxlXCJdfTwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZXNvdXJjZXNEZXRhaWxzIiwicmVzb3VyY2VzIiwiZmllbGRzIiwiZmlsZSIsInVybCIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/resources/[slug].js\n");

/***/ })

});