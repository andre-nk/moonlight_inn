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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreasnotokusumo/React Project/moonlight_inn/components/carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // images must be an array of urls , if using Next JS this could something like\n\nvar images = ['/item-1.png', '/item-2.jpg', '/item-3.jpg, /item-4.png']; // images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\n\nvar Carousel = function Carousel() {\n  _s();\n\n  // We will start by storing the index of the current image in the state.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentImage = _useState[0],\n      setCurrentImage = _useState[1]; // We are using react ref to 'tag' each of the images. Below will create an array of\n  // objects with numbered keys. We will use those numbers (i) later to access a ref of a\n  // specific image in this array.\n\n\n  var refs = images.reduce(function (acc, val, i) {\n    acc[i] = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    return acc;\n  }, {});\n\n  var scrollToImage = function scrollToImage(i) {\n    // First let's set the index of the image we want to see next\n    setCurrentImage(i); // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,\n    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into\n    // your current view! To do so we pass an index of the image, which is then use to identify our current\n    // image's ref in 'refs' array above.\n\n    refs[i].current.scrollIntoView({\n      //     Defines the transition animation.\n      behavior: 'smooth',\n      //      Defines vertical alignment.\n      block: 'nearest',\n      //      Defines horizontal alignment.\n      inline: 'start'\n    });\n  }; // Some validation for checking the array length could be added if needed\n\n\n  var totalImages = images.length; // Below functions will assure that after last image we'll scroll back to the start,\n  // or another way round - first to last in previousImage method.\n\n  var nextImage = function nextImage() {\n    if (currentImage >= totalImages - 1) {\n      scrollToImage(0);\n    } else {\n      scrollToImage(currentImage + 1);\n    }\n  };\n\n  var previousImage = function previousImage() {\n    if (currentImage === 0) {\n      scrollToImage(totalImages - 1);\n    } else {\n      scrollToImage(currentImage - 1);\n    }\n  }; // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.\n\n\n  var arrowStyle = 'absolute text-2xl z-10 h-10 w-10 flex items-center justify-center';\n\n  var sliderControl = function sliderControl(isLeft) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: isLeft ? previousImage : nextImage,\n      className: \"\".concat(arrowStyle, \" \").concat(isLeft ? 'left-2' : 'right-2'),\n      style: {\n        top: '40%'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        role: \"img\",\n        \"aria-label\": \"Arrow \".concat(isLeft ? 'left' : 'right'),\n        children: isLeft ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsChevronLeft, {\n          style: {\n            color: \"black\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 19\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsChevronRight, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 63\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"p-12 inline-flex justify-center w-screen items-center \",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"relative w-full\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel\",\n        children: [sliderControl(true), images.map(function (img, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-shrink-0 w-full self-center px-0 lg:px-36\",\n            ref: refs[i],\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"flex justify-center align-center lg:justify-start w-screen\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: img,\n                className: \"w-64\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-column justify-evenly align-middle max-w-3xl pl-20\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                  className: \"text-2xl text-black font-semibold font-header pb-4\",\n                  children: \"Waterdeep: The Long Trolltide\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: \"px-2 py-4 bg-tertiary w-12\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm font-heading\",\n                    children: \"Read more\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  className: \"text-md text-black font-body hidden lg:flex align-center break-words\",\n                  children: \"Waterdeep: The Long Trolltide is an epic campaign adventures that take place on the great city of Waterdeep. The story focuses on players as a enforcer known as The City Watch, where they will be faced to a brilliant criminal mastermind that has been going around for 3 months.  Will justice prevail in these such indecent times? \"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 91,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                  className: \"bg-secondary hover:bg-red-800 text-white mt-6 py-2 px-4 rounded shadow font-body\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \"Read more\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 93,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, _this)\n          }, img, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this);\n        }), sliderControl()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"cnc9rbhP80fTHOrqNEzwhjBY+h0=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcz81ODMyIl0sIm5hbWVzIjpbImltYWdlcyIsIkNhcm91c2VsIiwidXNlU3RhdGUiLCJjdXJyZW50SW1hZ2UiLCJzZXRDdXJyZW50SW1hZ2UiLCJyZWZzIiwicmVkdWNlIiwiYWNjIiwidmFsIiwiaSIsImNyZWF0ZVJlZiIsInNjcm9sbFRvSW1hZ2UiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwidG90YWxJbWFnZXMiLCJsZW5ndGgiLCJuZXh0SW1hZ2UiLCJwcmV2aW91c0ltYWdlIiwiYXJyb3dTdHlsZSIsInNsaWRlckNvbnRyb2wiLCJpc0xlZnQiLCJ0b3AiLCJjb2xvciIsIm1hcCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQiwwQkFBL0IsQ0FBZixDLENBQ0E7QUFDQTs7QUFHQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCO0FBRHFCLGtCQUVtQkMsK0NBQVEsQ0FBQyxDQUFELENBRjNCO0FBQUEsTUFFZEMsWUFGYztBQUFBLE1BRUFDLGVBRkEsaUJBSXJCO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHTCxNQUFNLENBQUNNLE1BQVAsQ0FBYyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsQ0FBWCxFQUFpQjtBQUMxQ0YsT0FBRyxDQUFDRSxDQUFELENBQUgsZ0JBQVNDLGdEQUFTLEVBQWxCO0FBQ0EsV0FBT0gsR0FBUDtBQUNELEdBSFksRUFHVixFQUhVLENBQWI7O0FBS0EsTUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBRixDQUFDLEVBQUk7QUFDekI7QUFDQUwsbUJBQWUsQ0FBQ0ssQ0FBRCxDQUFmLENBRnlCLENBR3pCO0FBQ0E7QUFDQTtB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LHlCQUxKLGVBTUk7QUFBUSwyQkFBUyxFQUFDLGtGQUFsQjtBQUFBLHlDQUNJO0FBQUcsNkJBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBcUVBLEdBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFU7QUFBQSxTQUFYLENBRkgsRUFtQkdMLGFBQWEsRUFuQmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0E5RkQ7O0dBQU1yQixROztLQUFBQSxRO0FBZ0dOLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QnNDaGV2cm9uUmlnaHQsIEJzQ2hldnJvbkxlZnR9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuXG4vLyBpbWFnZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB1cmxzICwgaWYgdXNpbmcgTmV4dCBKUyB0aGlzIGNvdWxkIHNvbWV0aGluZyBsaWtlXG5jb25zdCBpbWFnZXMgPSBbJy9pdGVtLTEucG5nJywgJy9pdGVtLTIuanBnJywgJy9pdGVtLTMuanBnLCAvaXRlbS00LnBuZyddXG4vLyBpbWFnZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB1cmxzICwgaWYgdXNpbmcgTmV4dCBKUyB0aGlzIGNvdWxkIHNvbWV0aGluZyBsaWtlXG4vLyBjb25zdCBpbWFnZXMgPSBbJy9pbWcvaW1nMS5wbmcnLCAnL2ltZy9pbWcyLnBuZycsICcvaW1nL2ltZzMucG5nJ11cblxuXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcbiAgLy8gV2Ugd2lsbCBzdGFydCBieSBzdG9yaW5nIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBpbWFnZSBpbiB0aGUgc3RhdGUuXG4gIGNvbnN0IFtjdXJyZW50SW1hZ2UsIHNldEN1cnJlbnRJbWFnZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBXZSBhcmUgdXNpbmcgcmVhY3QgcmVmIHRvICd0YWcnIGVhY2ggb2YgdGhlIGltYWdlcy4gQmVsb3cgd2lsbCBjcmVhdGUgYW4gYXJyYXkgb2ZcbiAgLy8gb2JqZWN0cyB3aXRoIG51bWJlcmVkIGtleXMuIFdlIHdpbGwgdXNlIHRob3NlIG51bWJlcnMgKGkpIGxhdGVyIHRvIGFjY2VzcyBhIHJlZiBvZiBhXG4gIC8vIHNwZWNpZmljIGltYWdlIGluIHRoaXMgYXJyYXkuXG4gIGNvbnN0IHJlZnMgPSBpbWFnZXMucmVkdWNlKChhY2MsIHZhbCwgaSkgPT4ge1xuICAgIGFjY1tpXSA9IGNyZWF0ZVJlZigpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICBjb25zdCBzY3JvbGxUb0ltYWdlID0gaSA9PiB7XG4gICAgLy8gRmlyc3QgbGV0J3Mgc2V0IHRoZSBpbmRleCBvZiB0aGUgaW1hZ2Ugd2Ugd2FudCB0byBzZWUgbmV4dFxuICAgIHNldEN1cnJlbnRJbWFnZShpKTtcbiAgICAvLyBOb3csIHRoaXMgaXMgd2hlcmUgdGhlIG1hZ2ljIGhhcHBlbnMuIFdlICd0YWdnZWQnIGVhY2ggb25lIG9mIHRoZSBpbWFnZXMgd2l0aCBhIHJlZixcbiAgICAvLyB3ZSBjYW4gdGhlbiB1c2UgYnVpbHQtaW4gc2Nyb2xsSW50b1ZpZXcgQVBJIHRvIGRvIGVheGFjdGx5IHdoYXQgaXQgc2F5cyBvbiB0aGUgYm94IC0gc2Nyb2xsIGl0IGludG9cbiAgICAvLyB5b3VyIGN1cnJlbnQgdmlldyEgVG8gZG8gc28gd2UgcGFzcyBhbiBpbmRleCBvZiB0aGUgaW1hZ2UsIHdoaWNoIGlzIHRoZW4gdXNlIHRvIGlkZW50aWZ5IG91ciBjdXJyZW50XG4gICAgLy8gaW1hZ2UncyByZWYgaW4gJ3JlZnMnIGFycmF5IGFib3ZlLlxuICAgIHJlZnNbaV0uY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAvLyAgICAgRGVmaW5lcyB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb24uXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAvLyAgICAgIERlZmluZXMgdmVydGljYWwgYWxpZ25tZW50LlxuICAgICAgYmxvY2s6ICduZWFyZXN0JyxcbiAgICAgIC8vICAgICAgRGVmaW5lcyBob3Jpem9udGFsIGFsaWdubWVudC5cbiAgICAgIGlubGluZTogJ3N0YXJ0JyxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTb21lIHZhbGlkYXRpb24gZm9yIGNoZWNraW5nIHRoZSBhcnJheSBsZW5ndGggY291bGQgYmUgYWRkZWQgaWYgbmVlZGVkXG4gIGNvbnN0IHRvdGFsSW1hZ2VzID0gaW1hZ2VzLmxlbmd0aDtcblxuICAvLyBCZWxvdyBmdW5jdGlvbnMgd2lsbCBhc3N1cmUgdGhhdCBhZnRlciBsYXN0IGltYWdlIHdlJ2xsIHNjcm9sbCBiYWNrIHRvIHRoZSBzdGFydCxcbiAgLy8gb3IgYW5vdGhlciB3YXkgcm91bmQgLSBmaXJzdCB0byBsYXN0IGluIHByZXZpb3VzSW1hZ2UgbWV0aG9kLlxuICBjb25zdCBuZXh0SW1hZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRJbWFnZSA+PSB0b3RhbEltYWdlcyAtIDEpIHtcbiAgICAgIHNjcm9sbFRvSW1hZ2UoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbFRvSW1hZ2UoY3VycmVudEltYWdlICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByZXZpb3VzSW1hZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRJbWFnZSA9PT0gMCkge1xuICAgICAgc2Nyb2xsVG9JbWFnZSh0b3RhbEltYWdlcyAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKGN1cnJlbnRJbWFnZSAtIDEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUYWlsd2luZCBzdHlsZXMuIE1vc3QgaW1wb3J0YW50bHkgbm90aWNlIHBvc2l0aW9uIGFic29sdXRlLCB0aGlzIHdpbGwgc2l0IHJlbGF0aXZlIHRvIHRoZSBjYXJvdXNlbCdzIG91dGVyIGRpdi5cbiAgY29uc3QgYXJyb3dTdHlsZSA9XG4gICAgJ2Fic29sdXRlIHRleHQtMnhsIHotMTAgaC0xMCB3LTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJztcblxuICBjb25zdCBzbGlkZXJDb250cm9sID0gaXNMZWZ0ID0+IChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9e2lzTGVmdCA/IHByZXZpb3VzSW1hZ2UgOiBuZXh0SW1hZ2V9XG4gICAgICBjbGFzc05hbWU9e2Ake2Fycm93U3R5bGV9ICR7aXNMZWZ0ID8gJ2xlZnQtMicgOiAncmlnaHQtMid9YH1cbiAgICAgIHN0eWxlPXt7IHRvcDogJzQwJScgfX1cbiAgICA+XG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD17YEFycm93ICR7aXNMZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0J31gfT5cbiAgICAgICAge2lzTGVmdCA/IDxCc0NoZXZyb25MZWZ0IHN0eWxlPXt7Y29sb3I6IFwiYmxhY2tcIn19Lz4gOiA8QnNDaGV2cm9uUmlnaHQvPn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMiBpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlbiBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsXCI+XG4gICAgICAgICAge3NsaWRlckNvbnRyb2wodHJ1ZSl9XG4gICAgICAgICAge2ltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctZnVsbCBzZWxmLWNlbnRlciBweC0wIGxnOnB4LTM2XCIga2V5PXtpbWd9IHJlZj17cmVmc1tpXX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGxnOmp1c3RpZnktc3RhcnQgdy1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9XCJ3LTY0XCIgLz4gIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW4ganVzdGlmeS1ldmVubHkgYWxpZ24tbWlkZGxlIG1heC13LTN4bCBwbC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ibGFjayBmb250LXNlbWlib2xkIGZvbnQtaGVhZGVyIHBiLTRcIj5XYXRlcmRlZXA6IFRoZSBMb25nIFRyb2xsdGlkZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBweS00IGJnLXRlcnRpYXJ5IHctMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1oZWFkaW5nXCI+UmVhZCBtb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWJsYWNrIGZvbnQtYm9keSBoaWRkZW4gbGc6ZmxleCBhbGlnbi1jZW50ZXIgYnJlYWstd29yZHNcIj5XYXRlcmRlZXA6IFRoZSBMb25nIFRyb2xsdGlkZSBpcyBhbiBlcGljIGNhbXBhaWduIGFkdmVudHVyZXMgdGhhdCB0YWtlIHBsYWNlIG9uIHRoZSBncmVhdCBjaXR5IG9mIFdhdGVyZGVlcC4gVGhlIHN0b3J5IGZvY3VzZXMgb24gcGxheWVycyBhcyBhIGVuZm9yY2VyIGtub3duIGFzIFRoZSBDaXR5IFdhdGNoLCB3aGVyZSB0aGV5IHdpbGwgYmUgZmFjZWQgdG8gYSBicmlsbGlhbnQgY3JpbWluYWwgbWFzdGVybWluZCB0aGF0IGhhcyBiZWVuIGdvaW5nIGFyb3VuZCBmb3IgMyBtb250aHMuICBXaWxsIGp1c3RpY2UgcHJldmFpbCBpbiB0aGVzZSBzdWNoIGluZGVjZW50IHRpbWVzPyA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IGhvdmVyOmJnLXJlZC04MDAgdGV4dC13aGl0ZSBtdC02IHB5LTIgcHgtNCByb3VuZGVkIHNoYWRvdyBmb250LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5SZWFkIG1vcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7c2xpZGVyQ29udHJvbCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ })

});