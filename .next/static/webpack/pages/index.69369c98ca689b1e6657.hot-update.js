/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/carousel.js":
/*!********************************!*\
  !*** ./components/carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreasnotokusumo/React Project/moonlight_inn/components/carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // images must be an array of urls , if using Next JS this could something like\n\nvar images = ['/item-1.png', '/item-2.jpg', '/item-3.jpg, /item-4.png']; // images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\n\nvar Carousel = function Carousel() {\n  _s();\n\n  // We will start by storing the index of the current image in the state.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentImage = _useState[0],\n      setCurrentImage = _useState[1]; // We are using react ref to 'tag' each of the images. Below will create an array of\n  // objects with numbered keys. We will use those numbers (i) later to access a ref of a\n  // specific image in this array.\n\n\n  var refs = images.reduce(function (acc, val, i) {\n    acc[i] = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    return acc;\n  }, {});\n\n  var scrollToImage = function scrollToImage(i) {\n    // First let's set the index of the image we want to see next\n    setCurrentImage(i); // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,\n    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into\n    // your current view! To do so we pass an index of the image, which is then use to identify our current\n    // image's ref in 'refs' array above.\n\n    refs[i].current.scrollIntoView({\n      //     Defines the transition animation.\n      behavior: 'smooth',\n      //      Defines vertical alignment.\n      block: 'nearest',\n      //      Defines horizontal alignment.\n      inline: 'start'\n    });\n  }; // Some validation for checking the array length could be added if needed\n\n\n  var totalImages = images.length; // Below functions will assure that after last image we'll scroll back to the start,\n  // or another way round - first to last in previousImage method.\n\n  var nextImage = function nextImage() {\n    if (currentImage >= totalImages - 1) {\n      scrollToImage(0);\n    } else {\n      scrollToImage(currentImage + 1);\n    }\n  };\n\n  var previousImage = function previousImage() {\n    if (currentImage === 0) {\n      scrollToImage(totalImages - 1);\n    } else {\n      scrollToImage(currentImage - 1);\n    }\n  }; // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.\n\n\n  var arrowStyle = 'absolute text-2xl z-10 h-10 w-10 flex items-center justify-center';\n\n  var sliderControl = function sliderControl(isLeft) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: isLeft ? previousImage : nextImage,\n      className: \"\".concat(arrowStyle, \" \").concat(isLeft ? 'left-2' : 'right-2'),\n      style: {\n        top: '40%'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        role: \"img\",\n        \"aria-label\": \"Arrow \".concat(isLeft ? 'left' : 'right'),\n        children: isLeft ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsChevronLeft, {\n          style: {\n            color: \"black\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 19\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsChevronRight, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 63\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"p-12 inline-flex justify-center w-screen items-center \",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"relative w-full\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel\",\n        children: [sliderControl(true), images.map(function (img, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-shrink-0 w-full self-center px-0 lg:px-36\",\n            ref: refs[i],\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"flex justify-center align-center lg:justify-start w-screen\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: img,\n                className: \"w-64\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-column justify-evenly align-middle max-w-3xl pl-20\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                  className: \"text-2xl text-black font-semibold font-header pb-4\",\n                  children: \"Waterdeep: The Long Trolltide\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  className: \"text-md text-black font-body hidden lg:flex align-center break-words\",\n                  children: \"Waterdeep: The Long Trolltide is an epic campaign adventures that take place on the great city of Waterdeep. The story focuses on players as a enforcer known as The City Watch, where they will be faced to a brilliant criminal mastermind that has been going around for 3 months.  Will justice prevail in these such indecent times? \"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                  className: \"bg-secondary hover:bg-red-800 text-white mt-6 font-semibold py-3.5 px-6 rounded shadow font-body\",\n                  children: \"Discover 100+ resources\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 89,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, _this)\n          }, img, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this);\n        }), sliderControl()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"cnc9rbhP80fTHOrqNEzwhjBY+h0=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcz81ODMyIl0sIm5hbWVzIjpbImltYWdlcyIsIkNhcm91c2VsIiwidXNlU3RhdGUiLCJjdXJyZW50SW1hZ2UiLCJzZXRDdXJyZW50SW1hZ2UiLCJyZWZzIiwicmVkdWNlIiwiYWNjIiwidmFsIiwiaSIsImNyZWF0ZVJlZiIsInNjcm9sbFRvSW1hZ2UiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwidG90YWxJbWFnZXMiLCJsZW5ndGgiLCJuZXh0SW1hZ2UiLCJwcmV2aW91c0ltYWdlIiwiYXJyb3dTdHlsZSIsInNsaWRlckNvbnRyb2wiLCJpc0xlZnQiLCJ0b3AiLCJjb2xvciIsIm1hcCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQiwwQkFBL0IsQ0FBZixDLENBQ0E7QUFDQTs7QUFHQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCO0FBRHFCLGtCQUVtQkMsK0NBQVEsQ0FBQyxDQUFELENBRjNCO0FBQUEsTUFFZEMsWUFGYztBQUFBLE1BRUFDLGVBRkEsaUJBSXJCO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHTCxNQUFNLENBQUNNLE1BQVAsQ0FBYyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsQ0FBWCxFQUFpQjtBQUMxQ0YsT0FBRyxDQUFDRSxDQUFELENBQUgsZ0JBQVNDLGdEQUFTLEVBQWxCO0FBQ0EsV0FBT0gsR0FBUDtBQUNELEdBSFksRUFHVixFQUhVLENBQWI7O0FBS0EsTUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBRixDQUFDLEVBQUk7QUFDekI7QUFDQUwsbUJBQWUsQ0FBQ0ssQ0FBRCxDQUFmLENBRnlCLENBR3pCO0FBQ0E7QUFDQTtB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O0FBQUE7QUFERixhQUFxRUEsR0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQVgsQ0FGSCxFQWdCR0wsYUFBYSxFQWhCaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQTNGRDs7R0FBTXJCLFE7O0tBQUFBLFE7QUE2Rk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCc0NoZXZyb25SaWdodCwgQnNDaGV2cm9uTGVmdH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5cbi8vIGltYWdlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHVybHMgLCBpZiB1c2luZyBOZXh0IEpTIHRoaXMgY291bGQgc29tZXRoaW5nIGxpa2VcbmNvbnN0IGltYWdlcyA9IFsnL2l0ZW0tMS5wbmcnLCAnL2l0ZW0tMi5qcGcnLCAnL2l0ZW0tMy5qcGcsIC9pdGVtLTQucG5nJ11cbi8vIGltYWdlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHVybHMgLCBpZiB1c2luZyBOZXh0IEpTIHRoaXMgY291bGQgc29tZXRoaW5nIGxpa2Vcbi8vIGNvbnN0IGltYWdlcyA9IFsnL2ltZy9pbWcxLnBuZycsICcvaW1nL2ltZzIucG5nJywgJy9pbWcvaW1nMy5wbmcnXVxuXG5cbmNvbnN0IENhcm91c2VsID0gKCkgPT4ge1xuICAvLyBXZSB3aWxsIHN0YXJ0IGJ5IHN0b3JpbmcgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGltYWdlIGluIHRoZSBzdGF0ZS5cbiAgY29uc3QgW2N1cnJlbnRJbWFnZSwgc2V0Q3VycmVudEltYWdlXSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIFdlIGFyZSB1c2luZyByZWFjdCByZWYgdG8gJ3RhZycgZWFjaCBvZiB0aGUgaW1hZ2VzLiBCZWxvdyB3aWxsIGNyZWF0ZSBhbiBhcnJheSBvZlxuICAvLyBvYmplY3RzIHdpdGggbnVtYmVyZWQga2V5cy4gV2Ugd2lsbCB1c2UgdGhvc2UgbnVtYmVycyAoaSkgbGF0ZXIgdG8gYWNjZXNzIGEgcmVmIG9mIGFcbiAgLy8gc3BlY2lmaWMgaW1hZ2UgaW4gdGhpcyBhcnJheS5cbiAgY29uc3QgcmVmcyA9IGltYWdlcy5yZWR1Y2UoKGFjYywgdmFsLCBpKSA9PiB7XG4gICAgYWNjW2ldID0gY3JlYXRlUmVmKCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIGNvbnN0IHNjcm9sbFRvSW1hZ2UgPSBpID0+IHtcbiAgICAvLyBGaXJzdCBsZXQncyBzZXQgdGhlIGluZGV4IG9mIHRoZSBpbWFnZSB3ZSB3YW50IHRvIHNlZSBuZXh0XG4gICAgc2V0Q3VycmVudEltYWdlKGkpO1xuICAgIC8vIE5vdywgdGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVucy4gV2UgJ3RhZ2dlZCcgZWFjaCBvbmUgb2YgdGhlIGltYWdlcyB3aXRoIGEgcmVmLFxuICAgIC8vIHdlIGNhbiB0aGVuIHVzZSBidWlsdC1pbiBzY3JvbGxJbnRvVmlldyBBUEkgdG8gZG8gZWF4YWN0bHkgd2hhdCBpdCBzYXlzIG9uIHRoZSBib3ggLSBzY3JvbGwgaXQgaW50b1xuICAgIC8vIHlvdXIgY3VycmVudCB2aWV3ISBUbyBkbyBzbyB3ZSBwYXNzIGFuIGluZGV4IG9mIHRoZSBpbWFnZSwgd2hpY2ggaXMgdGhlbiB1c2UgdG8gaWRlbnRpZnkgb3VyIGN1cnJlbnRcbiAgICAvLyBpbWFnZSdzIHJlZiBpbiAncmVmcycgYXJyYXkgYWJvdmUuXG4gICAgcmVmc1tpXS5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgIC8vICAgICBEZWZpbmVzIHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvbi5cbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIC8vICAgICAgRGVmaW5lcyB2ZXJ0aWNhbCBhbGlnbm1lbnQuXG4gICAgICBibG9jazogJ25lYXJlc3QnLFxuICAgICAgLy8gICAgICBEZWZpbmVzIGhvcml6b250YWwgYWxpZ25tZW50LlxuICAgICAgaW5saW5lOiAnc3RhcnQnLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFNvbWUgdmFsaWRhdGlvbiBmb3IgY2hlY2tpbmcgdGhlIGFycmF5IGxlbmd0aCBjb3VsZCBiZSBhZGRlZCBpZiBuZWVkZWRcbiAgY29uc3QgdG90YWxJbWFnZXMgPSBpbWFnZXMubGVuZ3RoO1xuXG4gIC8vIEJlbG93IGZ1bmN0aW9ucyB3aWxsIGFzc3VyZSB0aGF0IGFmdGVyIGxhc3QgaW1hZ2Ugd2UnbGwgc2Nyb2xsIGJhY2sgdG8gdGhlIHN0YXJ0LFxuICAvLyBvciBhbm90aGVyIHdheSByb3VuZCAtIGZpcnN0IHRvIGxhc3QgaW4gcHJldmlvdXNJbWFnZSBtZXRob2QuXG4gIGNvbnN0IG5leHRJbWFnZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudEltYWdlID49IHRvdGFsSW1hZ2VzIC0gMSkge1xuICAgICAgc2Nyb2xsVG9JbWFnZSgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVG9JbWFnZShjdXJyZW50SW1hZ2UgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJldmlvdXNJbWFnZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudEltYWdlID09PSAwKSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKHRvdGFsSW1hZ2VzIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbFRvSW1hZ2UoY3VycmVudEltYWdlIC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRhaWx3aW5kIHN0eWxlcy4gTW9zdCBpbXBvcnRhbnRseSBub3RpY2UgcG9zaXRpb24gYWJzb2x1dGUsIHRoaXMgd2lsbCBzaXQgcmVsYXRpdmUgdG8gdGhlIGNhcm91c2VsJ3Mgb3V0ZXIgZGl2LlxuICBjb25zdCBhcnJvd1N0eWxlID1cbiAgICAnYWJzb2x1dGUgdGV4dC0yeGwgei0xMCBoLTEwIHctMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInO1xuXG4gIGNvbnN0IHNsaWRlckNvbnRyb2wgPSBpc0xlZnQgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17aXNMZWZ0ID8gcHJldmlvdXNJbWFnZSA6IG5leHRJbWFnZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7YXJyb3dTdHlsZX0gJHtpc0xlZnQgPyAnbGVmdC0yJyA6ICdyaWdodC0yJ31gfVxuICAgICAgc3R5bGU9e3sgdG9wOiAnNDAlJyB9fVxuICAgID5cbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPXtgQXJyb3cgJHtpc0xlZnQgPyAnbGVmdCcgOiAncmlnaHQnfWB9PlxuICAgICAgICB7aXNMZWZ0ID8gPEJzQ2hldnJvbkxlZnQgc3R5bGU9e3tjb2xvcjogXCJibGFja1wifX0vPiA6IDxCc0NoZXZyb25SaWdodC8+fVxuICAgICAgPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTEyIGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHctc2NyZWVuIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICB7c2xpZGVyQ29udHJvbCh0cnVlKX1cbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy1mdWxsIHNlbGYtY2VudGVyIHB4LTAgbGc6cHgtMzZcIiBrZXk9e2ltZ30gcmVmPXtyZWZzW2ldfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXIgbGc6anVzdGlmeS1zdGFydCB3LXNjcmVlblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGNsYXNzTmFtZT1cInctNjRcIiAvPiAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbHVtbiBqdXN0aWZ5LWV2ZW5seSBhbGlnbi1taWRkbGUgbWF4LXctM3hsIHBsLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkZXIgcGItNFwiPldhdGVyZGVlcDogVGhlIExvbmcgVHJvbGx0aWRlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWJsYWNrIGZvbnQtYm9keSBoaWRkZW4gbGc6ZmxleCBhbGlnbi1jZW50ZXIgYnJlYWstd29yZHNcIj5XYXRlcmRlZXA6IFRoZSBMb25nIFRyb2xsdGlkZSBpcyBhbiBlcGljIGNhbXBhaWduIGFkdmVudHVyZXMgdGhhdCB0YWtlIHBsYWNlIG9uIHRoZSBncmVhdCBjaXR5IG9mIFdhdGVyZGVlcC4gVGhlIHN0b3J5IGZvY3VzZXMgb24gcGxheWVycyBhcyBhIGVuZm9yY2VyIGtub3duIGFzIFRoZSBDaXR5IFdhdGNoLCB3aGVyZSB0aGV5IHdpbGwgYmUgZmFjZWQgdG8gYSBicmlsbGlhbnQgY3JpbWluYWwgbWFzdGVybWluZCB0aGF0IGhhcyBiZWVuIGdvaW5nIGFyb3VuZCBmb3IgMyBtb250aHMuICBXaWxsIGp1c3RpY2UgcHJldmFpbCBpbiB0aGVzZSBzdWNoIGluZGVjZW50IHRpbWVzPyA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IGhvdmVyOmJnLXJlZC04MDAgdGV4dC13aGl0ZSBtdC02IGZvbnQtc2VtaWJvbGQgcHktMy41IHB4LTYgcm91bmRlZCBzaGFkb3cgZm9udC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlciAxMDArIHJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3NsaWRlckNvbnRyb2woKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ })

});