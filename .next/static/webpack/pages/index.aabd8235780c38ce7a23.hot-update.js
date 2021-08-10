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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreasnotokusumo/React Project/moonlight_inn/components/carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // images must be an array of urls , if using Next JS this could something like\n\nvar images = ['/item-1.png', '/item-2.jpg', '/item-3.jpg, /item-4.png']; // images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\n\nvar Carousel = function Carousel() {\n  _s();\n\n  // We will start by storing the index of the current image in the state.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentImage = _useState[0],\n      setCurrentImage = _useState[1]; // We are using react ref to 'tag' each of the images. Below will create an array of\n  // objects with numbered keys. We will use those numbers (i) later to access a ref of a\n  // specific image in this array.\n\n\n  var refs = images.reduce(function (acc, val, i) {\n    acc[i] = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    return acc;\n  }, {});\n\n  var scrollToImage = function scrollToImage(i) {\n    // First let's set the index of the image we want to see next\n    setCurrentImage(i); // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,\n    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into\n    // your current view! To do so we pass an index of the image, which is then use to identify our current\n    // image's ref in 'refs' array above.\n\n    refs[i].current.scrollIntoView({\n      //     Defines the transition animation.\n      behavior: 'smooth',\n      //      Defines vertical alignment.\n      block: 'nearest',\n      //      Defines horizontal alignment.\n      inline: 'start'\n    });\n  }; // Some validation for checking the array length could be added if needed\n\n\n  var totalImages = images.length; // Below functions will assure that after last image we'll scroll back to the start,\n  // or another way round - first to last in previousImage method.\n\n  var nextImage = function nextImage() {\n    if (currentImage >= totalImages - 1) {\n      scrollToImage(0);\n    } else {\n      scrollToImage(currentImage + 1);\n    }\n  };\n\n  var previousImage = function previousImage() {\n    if (currentImage === 0) {\n      scrollToImage(totalImages - 1);\n    } else {\n      scrollToImage(currentImage - 1);\n    }\n  }; // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.\n\n\n  var arrowStyle = 'absolute text-2xl z-10 h-10 w-10 flex items-center justify-center';\n\n  var sliderControl = function sliderControl(isLeft) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: isLeft ? previousImage : nextImage,\n      className: \"\".concat(arrowStyle, \" \").concat(isLeft ? 'left-2' : 'right-2'),\n      style: {\n        top: '40%'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        role: \"img\",\n        \"aria-label\": \"Arrow \".concat(isLeft ? 'left' : 'right'),\n        children: isLeft ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsChevronLeft, {\n          style: {\n            color: \"black\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 19\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsChevronRight, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 63\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"p-12 inline-flex justify-center w-screen items-center \",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"relative w-full\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel\",\n        children: [sliderControl(true), images.map(function (img, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-shrink-0 w-full self-center px-36\",\n            ref: refs[i],\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"flex lg:flex-row justify-center lg:justify-around\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: img,\n                className: \"w-64\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-md text-black font-body lg:px-2\",\n                children: [\"Waterdeep: The Long Trolltide is an epic campaign adventures that take place on the great city of Waterdeep.\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 177\n                }, _this), \" The story focuses on players as a enforcer known as The City Watch,\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 250\n                }, _this), \" where they will be faced to a brilliant criminal mastermind that has been going around for 3 months. \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 357\n                }, _this), \" Will justice prevail in these such indecent times? \"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, _this)\n          }, img, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this);\n        }), sliderControl()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"cnc9rbhP80fTHOrqNEzwhjBY+h0=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcz81ODMyIl0sIm5hbWVzIjpbImltYWdlcyIsIkNhcm91c2VsIiwidXNlU3RhdGUiLCJjdXJyZW50SW1hZ2UiLCJzZXRDdXJyZW50SW1hZ2UiLCJyZWZzIiwicmVkdWNlIiwiYWNjIiwidmFsIiwiaSIsImNyZWF0ZVJlZiIsInNjcm9sbFRvSW1hZ2UiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwidG90YWxJbWFnZXMiLCJsZW5ndGgiLCJuZXh0SW1hZ2UiLCJwcmV2aW91c0ltYWdlIiwiYXJyb3dTdHlsZSIsInNsaWRlckNvbnRyb2wiLCJpc0xlZnQiLCJ0b3AiLCJjb2xvciIsIm1hcCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQiwwQkFBL0IsQ0FBZixDLENBQ0E7QUFDQTs7QUFHQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCO0FBRHFCLGtCQUVtQkMsK0NBQVEsQ0FBQyxDQUFELENBRjNCO0FBQUEsTUFFZEMsWUFGYztBQUFBLE1BRUFDLGVBRkEsaUJBSXJCO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHTCxNQUFNLENBQUNNLE1BQVAsQ0FBYyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsQ0FBWCxFQUFpQjtBQUMxQ0YsT0FBRyxDQUFDRSxDQUFELENBQUgsZ0JBQVNDLGdEQUFTLEVBQWxCO0FBQ0EsV0FBT0gsR0FBUDtBQUNELEdBSFksRUFHVixFQUhVLENBQWI7O0FBS0EsTUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBRixDQUFDLEVBQUk7QUFDekI7QUFDQUwsbUJBQWUsQ0FBQ0ssQ0FBRCxDQUFmLENBRnlCLENBR3pCO0FBQ0E7QUFDQTtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBckZEOztHQUFNckIsUTs7S0FBQUEsUTtBQXVGTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2Fyb3VzZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JzQ2hldnJvblJpZ2h0LCBCc0NoZXZyb25MZWZ0fSBmcm9tICdyZWFjdC1pY29ucy9icydcblxuLy8gaW1hZ2VzIG11c3QgYmUgYW4gYXJyYXkgb2YgdXJscyAsIGlmIHVzaW5nIE5leHQgSlMgdGhpcyBjb3VsZCBzb21ldGhpbmcgbGlrZVxuY29uc3QgaW1hZ2VzID0gWycvaXRlbS0xLnBuZycsICcvaXRlbS0yLmpwZycsICcvaXRlbS0zLmpwZywgL2l0ZW0tNC5wbmcnXVxuLy8gaW1hZ2VzIG11c3QgYmUgYW4gYXJyYXkgb2YgdXJscyAsIGlmIHVzaW5nIE5leHQgSlMgdGhpcyBjb3VsZCBzb21ldGhpbmcgbGlrZVxuLy8gY29uc3QgaW1hZ2VzID0gWycvaW1nL2ltZzEucG5nJywgJy9pbWcvaW1nMi5wbmcnLCAnL2ltZy9pbWczLnBuZyddXG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAoKSA9PiB7XG4gIC8vIFdlIHdpbGwgc3RhcnQgYnkgc3RvcmluZyB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgaW1hZ2UgaW4gdGhlIHN0YXRlLlxuICBjb25zdCBbY3VycmVudEltYWdlLCBzZXRDdXJyZW50SW1hZ2VdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gV2UgYXJlIHVzaW5nIHJlYWN0IHJlZiB0byAndGFnJyBlYWNoIG9mIHRoZSBpbWFnZXMuIEJlbG93IHdpbGwgY3JlYXRlIGFuIGFycmF5IG9mXG4gIC8vIG9iamVjdHMgd2l0aCBudW1iZXJlZCBrZXlzLiBXZSB3aWxsIHVzZSB0aG9zZSBudW1iZXJzIChpKSBsYXRlciB0byBhY2Nlc3MgYSByZWYgb2YgYVxuICAvLyBzcGVjaWZpYyBpbWFnZSBpbiB0aGlzIGFycmF5LlxuICBjb25zdCByZWZzID0gaW1hZ2VzLnJlZHVjZSgoYWNjLCB2YWwsIGkpID0+IHtcbiAgICBhY2NbaV0gPSBjcmVhdGVSZWYoKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9JbWFnZSA9IGkgPT4ge1xuICAgIC8vIEZpcnN0IGxldCdzIHNldCB0aGUgaW5kZXggb2YgdGhlIGltYWdlIHdlIHdhbnQgdG8gc2VlIG5leHRcbiAgICBzZXRDdXJyZW50SW1hZ2UoaSk7XG4gICAgLy8gTm93LCB0aGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zLiBXZSAndGFnZ2VkJyBlYWNoIG9uZSBvZiB0aGUgaW1hZ2VzIHdpdGggYSByZWYsXG4gICAgLy8gd2UgY2FuIHRoZW4gdXNlIGJ1aWx0LWluIHNjcm9sbEludG9WaWV3IEFQSSB0byBkbyBlYXhhY3RseSB3aGF0IGl0IHNheXMgb24gdGhlIGJveCAtIHNjcm9sbCBpdCBpbnRvXG4gICAgLy8geW91ciBjdXJyZW50IHZpZXchIFRvIGRvIHNvIHdlIHBhc3MgYW4gaW5kZXggb2YgdGhlIGltYWdlLCB3aGljaCBpcyB0aGVuIHVzZSB0byBpZGVudGlmeSBvdXIgY3VycmVudFxuICAgIC8vIGltYWdlJ3MgcmVmIGluICdyZWZzJyBhcnJheSBhYm92ZS5cbiAgICByZWZzW2ldLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgLy8gICAgIERlZmluZXMgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uLlxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgLy8gICAgICBEZWZpbmVzIHZlcnRpY2FsIGFsaWdubWVudC5cbiAgICAgIGJsb2NrOiAnbmVhcmVzdCcsXG4gICAgICAvLyAgICAgIERlZmluZXMgaG9yaXpvbnRhbCBhbGlnbm1lbnQuXG4gICAgICBpbmxpbmU6ICdzdGFydCcsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gU29tZSB2YWxpZGF0aW9uIGZvciBjaGVja2luZyB0aGUgYXJyYXkgbGVuZ3RoIGNvdWxkIGJlIGFkZGVkIGlmIG5lZWRlZFxuICBjb25zdCB0b3RhbEltYWdlcyA9IGltYWdlcy5sZW5ndGg7XG5cbiAgLy8gQmVsb3cgZnVuY3Rpb25zIHdpbGwgYXNzdXJlIHRoYXQgYWZ0ZXIgbGFzdCBpbWFnZSB3ZSdsbCBzY3JvbGwgYmFjayB0byB0aGUgc3RhcnQsXG4gIC8vIG9yIGFub3RoZXIgd2F5IHJvdW5kIC0gZmlyc3QgdG8gbGFzdCBpbiBwcmV2aW91c0ltYWdlIG1ldGhvZC5cbiAgY29uc3QgbmV4dEltYWdlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50SW1hZ2UgPj0gdG90YWxJbWFnZXMgLSAxKSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKGN1cnJlbnRJbWFnZSArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmV2aW91c0ltYWdlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50SW1hZ2UgPT09IDApIHtcbiAgICAgIHNjcm9sbFRvSW1hZ2UodG90YWxJbWFnZXMgLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVG9JbWFnZShjdXJyZW50SW1hZ2UgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGFpbHdpbmQgc3R5bGVzLiBNb3N0IGltcG9ydGFudGx5IG5vdGljZSBwb3NpdGlvbiBhYnNvbHV0ZSwgdGhpcyB3aWxsIHNpdCByZWxhdGl2ZSB0byB0aGUgY2Fyb3VzZWwncyBvdXRlciBkaXYuXG4gIGNvbnN0IGFycm93U3R5bGUgPVxuICAgICdhYnNvbHV0ZSB0ZXh0LTJ4bCB6LTEwIGgtMTAgdy0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic7XG5cbiAgY29uc3Qgc2xpZGVyQ29udHJvbCA9IGlzTGVmdCA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXtpc0xlZnQgPyBwcmV2aW91c0ltYWdlIDogbmV4dEltYWdlfVxuICAgICAgY2xhc3NOYW1lPXtgJHthcnJvd1N0eWxlfSAke2lzTGVmdCA/ICdsZWZ0LTInIDogJ3JpZ2h0LTInfWB9XG4gICAgICBzdHlsZT17eyB0b3A6ICc0MCUnIH19XG4gICAgPlxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9e2BBcnJvdyAke2lzTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCd9YH0+XG4gICAgICAgIHtpc0xlZnQgPyA8QnNDaGV2cm9uTGVmdCBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCJ9fS8+IDogPEJzQ2hldnJvblJpZ2h0Lz59XG4gICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTIgaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgdy1zY3JlZW4gaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgIHtzbGlkZXJDb250cm9sKHRydWUpfVxuICAgICAgICAgIHtpbWFnZXMubWFwKChpbWcsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LWZ1bGwgc2VsZi1jZW50ZXIgcHgtMzZcIiBrZXk9e2ltZ30gcmVmPXtyZWZzW2ldfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBsZzpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGNsYXNzTmFtZT1cInctNjRcIiAvPiAgXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWJsYWNrIGZvbnQtYm9keSBsZzpweC0yXCI+V2F0ZXJkZWVwOiBUaGUgTG9uZyBUcm9sbHRpZGUgaXMgYW4gZXBpYyBjYW1wYWlnbiBhZHZlbnR1cmVzIHRoYXQgdGFrZSBwbGFjZSBvbiB0aGUgZ3JlYXQgY2l0eSBvZiBXYXRlcmRlZXAuPGJyLz4gVGhlIHN0b3J5IGZvY3VzZXMgb24gcGxheWVycyBhcyBhIGVuZm9yY2VyIGtub3duIGFzIFRoZSBDaXR5IFdhdGNoLDxici8+IHdoZXJlIHRoZXkgd2lsbCBiZSBmYWNlZCB0byBhIGJyaWxsaWFudCBjcmltaW5hbCBtYXN0ZXJtaW5kIHRoYXQgaGFzIGJlZW4gZ29pbmcgYXJvdW5kIGZvciAzIG1vbnRocy4gPGJyLz4gV2lsbCBqdXN0aWNlIHByZXZhaWwgaW4gdGhlc2Ugc3VjaCBpbmRlY2VudCB0aW1lcz8gPC9wPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7c2xpZGVyQ29udHJvbCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ })

});