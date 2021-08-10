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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreasnotokusumo/React Project/moonlight_inn/components/carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // images must be an array of urls , if using Next JS this could something like\n\nvar images = ['/item-1.png', '/item-2.jpg', '/item-3.jpg', '/item-4.png']; // images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\n\nvar Carousel = function Carousel() {\n  _s();\n\n  // We will start by storing the index of the current image in the state.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentImage = _useState[0],\n      setCurrentImage = _useState[1]; // We are using react ref to 'tag' each of the images. Below will create an array of\n  // objects with numbered keys. We will use those numbers (i) later to access a ref of a\n  // specific image in this array.\n\n\n  var refs = images.reduce(function (acc, val, i) {\n    acc[i] = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    return acc;\n  }, {});\n\n  var scrollToImage = function scrollToImage(i) {\n    // First let's set the index of the image we want to see next\n    setCurrentImage(i); // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,\n    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into\n    // your current view! To do so we pass an index of the image, which is then use to identify our current\n    // image's ref in 'refs' array above.\n\n    refs[i].current.scrollIntoView({\n      //     Defines the transition animation.\n      behavior: 'smooth',\n      //      Defines vertical alignment.\n      block: 'nearest',\n      //      Defines horizontal alignment.\n      inline: 'start'\n    });\n  }; // Some validation for checking the array length could be added if needed\n\n\n  var totalImages = images.length; // Below functions will assure that after last image we'll scroll back to the start,\n  // or another way round - first to last in previousImage method.\n\n  var nextImage = function nextImage() {\n    if (currentImage >= totalImages - 1) {\n      scrollToImage(0);\n    } else {\n      scrollToImage(currentImage + 1);\n    }\n  };\n\n  var previousImage = function previousImage() {\n    if (currentImage === 0) {\n      scrollToImage(totalImages - 1);\n    } else {\n      scrollToImage(currentImage - 1);\n    }\n  }; // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.\n\n\n  var arrowStyle = 'absolute text-2xl z-10 h-10 w-10 flex items-center justify-center';\n\n  var sliderControl = function sliderControl(isLeft) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: isLeft ? previousImage : nextImage,\n      className: \"\".concat(arrowStyle, \" \").concat(isLeft ? 'left-2' : 'right-2'),\n      style: {\n        top: '40%'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        role: \"img\",\n        \"aria-label\": \"Arrow \".concat(isLeft ? 'left' : 'right'),\n        children: isLeft ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsChevronLeft, {\n          style: {\n            color: \"black\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 19\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsChevronRight, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 63\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"p-12 inline-flex justify-center w-screen items-center \",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"relative w-full\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel\",\n        children: [sliderControl(true), images.map(function (img, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-shrink-0 w-full self-center px-0 lg:px-36\",\n            ref: refs[i],\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"flex justify-center align-center lg:justify-start w-screen\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: img,\n                className: \"w-64\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-column justify-center align-middle max-w-3xl pl-20\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                  className: \"text-2xl text-black font-semibold font-header pb-4\",\n                  children: \"Waterdeep: The Long Trolltide\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: \"px-1 py-2 mb-6 bg-tertiary w-24 flex justify-center rounded-sm\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm font-semibold font-heading\",\n                    children: \"Favorite\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                  className: \"text-md text-black font-body hidden lg:flex align-center break-words\",\n                  children: \"Waterdeep: The Long Trolltide is an epic campaign adventures that take place on the great city of Waterdeep. The story focuses on players as a enforcer known as The City Watch, where they will be faced to a brilliant criminal mastermind that has been going around for 3 months.  Will justice prevail in these such indecent times? \"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 91,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                  className: \"bg-secondary hover:bg-red-800 text-white mt-6 py-2 px-4 rounded shadow font-body\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \"Read more\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 93,\n                    columnNumber: 25\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, _this)\n          }, img, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this);\n        }), sliderControl()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"cnc9rbhP80fTHOrqNEzwhjBY+h0=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcz81ODMyIl0sIm5hbWVzIjpbImltYWdlcyIsIkNhcm91c2VsIiwidXNlU3RhdGUiLCJjdXJyZW50SW1hZ2UiLCJzZXRDdXJyZW50SW1hZ2UiLCJyZWZzIiwicmVkdWNlIiwiYWNjIiwidmFsIiwiaSIsImNyZWF0ZVJlZiIsInNjcm9sbFRvSW1hZ2UiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwidG90YWxJbWFnZXMiLCJsZW5ndGgiLCJuZXh0SW1hZ2UiLCJwcmV2aW91c0ltYWdlIiwiYXJyb3dTdHlsZSIsInNsaWRlckNvbnRyb2wiLCJpc0xlZnQiLCJ0b3AiLCJjb2xvciIsIm1hcCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQixhQUEvQixFQUE4QyxhQUE5QyxDQUFmLEMsQ0FDQTtBQUNBOztBQUdBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckI7QUFEcUIsa0JBRW1CQywrQ0FBUSxDQUFDLENBQUQsQ0FGM0I7QUFBQSxNQUVkQyxZQUZjO0FBQUEsTUFFQUMsZUFGQSxpQkFJckI7QUFDQTtBQUNBOzs7QUFDQSxNQUFNQyxJQUFJLEdBQUdMLE1BQU0sQ0FBQ00sTUFBUCxDQUFjLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxDQUFYLEVBQWlCO0FBQzFDRixPQUFHLENBQUNFLENBQUQsQ0FBSCxnQkFBU0MsZ0RBQVMsRUFBbEI7QUFDQSxXQUFPSCxHQUFQO0FBQ0QsR0FIWSxFQUdWLEVBSFUsQ0FBYjs7QUFLQSxNQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFGLENBQUMsRUFBSTtBQUN6QjtBQUNBTCxtQkFBZSxDQUFDSyxDQUFELENBQWYsQ0FGeUIsQ0FHekI7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QTtBQUFBO0FBQUEseUJBTEosZUFNSTtBQUFRLDJCQUFTLEVBQUMsa0ZBQWxCO0FBQUEseUNBQ0k7QUFBRyw2QkFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFxRUEsR0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQVgsQ0FGSCxFQW1CR0wsYUFBYSxFQW5CaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQTlGRDs7R0FBTXJCLFE7O0tBQUFBLFE7QUFnR04sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCc0NoZXZyb25SaWdodCwgQnNDaGV2cm9uTGVmdH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5cbi8vIGltYWdlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHVybHMgLCBpZiB1c2luZyBOZXh0IEpTIHRoaXMgY291bGQgc29tZXRoaW5nIGxpa2VcbmNvbnN0IGltYWdlcyA9IFsnL2l0ZW0tMS5wbmcnLCAnL2l0ZW0tMi5qcGcnLCAnL2l0ZW0tMy5qcGcnLCAnL2l0ZW0tNC5wbmcnXVxuLy8gaW1hZ2VzIG11c3QgYmUgYW4gYXJyYXkgb2YgdXJscyAsIGlmIHVzaW5nIE5leHQgSlMgdGhpcyBjb3VsZCBzb21ldGhpbmcgbGlrZVxuLy8gY29uc3QgaW1hZ2VzID0gWycvaW1nL2ltZzEucG5nJywgJy9pbWcvaW1nMi5wbmcnLCAnL2ltZy9pbWczLnBuZyddXG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAoKSA9PiB7XG4gIC8vIFdlIHdpbGwgc3RhcnQgYnkgc3RvcmluZyB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgaW1hZ2UgaW4gdGhlIHN0YXRlLlxuICBjb25zdCBbY3VycmVudEltYWdlLCBzZXRDdXJyZW50SW1hZ2VdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gV2UgYXJlIHVzaW5nIHJlYWN0IHJlZiB0byAndGFnJyBlYWNoIG9mIHRoZSBpbWFnZXMuIEJlbG93IHdpbGwgY3JlYXRlIGFuIGFycmF5IG9mXG4gIC8vIG9iamVjdHMgd2l0aCBudW1iZXJlZCBrZXlzLiBXZSB3aWxsIHVzZSB0aG9zZSBudW1iZXJzIChpKSBsYXRlciB0byBhY2Nlc3MgYSByZWYgb2YgYVxuICAvLyBzcGVjaWZpYyBpbWFnZSBpbiB0aGlzIGFycmF5LlxuICBjb25zdCByZWZzID0gaW1hZ2VzLnJlZHVjZSgoYWNjLCB2YWwsIGkpID0+IHtcbiAgICBhY2NbaV0gPSBjcmVhdGVSZWYoKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9JbWFnZSA9IGkgPT4ge1xuICAgIC8vIEZpcnN0IGxldCdzIHNldCB0aGUgaW5kZXggb2YgdGhlIGltYWdlIHdlIHdhbnQgdG8gc2VlIG5leHRcbiAgICBzZXRDdXJyZW50SW1hZ2UoaSk7XG4gICAgLy8gTm93LCB0aGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zLiBXZSAndGFnZ2VkJyBlYWNoIG9uZSBvZiB0aGUgaW1hZ2VzIHdpdGggYSByZWYsXG4gICAgLy8gd2UgY2FuIHRoZW4gdXNlIGJ1aWx0LWluIHNjcm9sbEludG9WaWV3IEFQSSB0byBkbyBlYXhhY3RseSB3aGF0IGl0IHNheXMgb24gdGhlIGJveCAtIHNjcm9sbCBpdCBpbnRvXG4gICAgLy8geW91ciBjdXJyZW50IHZpZXchIFRvIGRvIHNvIHdlIHBhc3MgYW4gaW5kZXggb2YgdGhlIGltYWdlLCB3aGljaCBpcyB0aGVuIHVzZSB0byBpZGVudGlmeSBvdXIgY3VycmVudFxuICAgIC8vIGltYWdlJ3MgcmVmIGluICdyZWZzJyBhcnJheSBhYm92ZS5cbiAgICByZWZzW2ldLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgLy8gICAgIERlZmluZXMgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uLlxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgLy8gICAgICBEZWZpbmVzIHZlcnRpY2FsIGFsaWdubWVudC5cbiAgICAgIGJsb2NrOiAnbmVhcmVzdCcsXG4gICAgICAvLyAgICAgIERlZmluZXMgaG9yaXpvbnRhbCBhbGlnbm1lbnQuXG4gICAgICBpbmxpbmU6ICdzdGFydCcsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gU29tZSB2YWxpZGF0aW9uIGZvciBjaGVja2luZyB0aGUgYXJyYXkgbGVuZ3RoIGNvdWxkIGJlIGFkZGVkIGlmIG5lZWRlZFxuICBjb25zdCB0b3RhbEltYWdlcyA9IGltYWdlcy5sZW5ndGg7XG5cbiAgLy8gQmVsb3cgZnVuY3Rpb25zIHdpbGwgYXNzdXJlIHRoYXQgYWZ0ZXIgbGFzdCBpbWFnZSB3ZSdsbCBzY3JvbGwgYmFjayB0byB0aGUgc3RhcnQsXG4gIC8vIG9yIGFub3RoZXIgd2F5IHJvdW5kIC0gZmlyc3QgdG8gbGFzdCBpbiBwcmV2aW91c0ltYWdlIG1ldGhvZC5cbiAgY29uc3QgbmV4dEltYWdlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50SW1hZ2UgPj0gdG90YWxJbWFnZXMgLSAxKSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKGN1cnJlbnRJbWFnZSArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmV2aW91c0ltYWdlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50SW1hZ2UgPT09IDApIHtcbiAgICAgIHNjcm9sbFRvSW1hZ2UodG90YWxJbWFnZXMgLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVG9JbWFnZShjdXJyZW50SW1hZ2UgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGFpbHdpbmQgc3R5bGVzLiBNb3N0IGltcG9ydGFudGx5IG5vdGljZSBwb3NpdGlvbiBhYnNvbHV0ZSwgdGhpcyB3aWxsIHNpdCByZWxhdGl2ZSB0byB0aGUgY2Fyb3VzZWwncyBvdXRlciBkaXYuXG4gIGNvbnN0IGFycm93U3R5bGUgPVxuICAgICdhYnNvbHV0ZSB0ZXh0LTJ4bCB6LTEwIGgtMTAgdy0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic7XG5cbiAgY29uc3Qgc2xpZGVyQ29udHJvbCA9IGlzTGVmdCA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXtpc0xlZnQgPyBwcmV2aW91c0ltYWdlIDogbmV4dEltYWdlfVxuICAgICAgY2xhc3NOYW1lPXtgJHthcnJvd1N0eWxlfSAke2lzTGVmdCA/ICdsZWZ0LTInIDogJ3JpZ2h0LTInfWB9XG4gICAgICBzdHlsZT17eyB0b3A6ICc0MCUnIH19XG4gICAgPlxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9e2BBcnJvdyAke2lzTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCd9YH0+XG4gICAgICAgIHtpc0xlZnQgPyA8QnNDaGV2cm9uTGVmdCBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCJ9fS8+IDogPEJzQ2hldnJvblJpZ2h0Lz59XG4gICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTIgaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgdy1zY3JlZW4gaXRlbXMtY2VudGVyIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgIHtzbGlkZXJDb250cm9sKHRydWUpfVxuICAgICAgICAgIHtpbWFnZXMubWFwKChpbWcsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LWZ1bGwgc2VsZi1jZW50ZXIgcHgtMCBsZzpweC0zNlwiIGtleT17aW1nfSByZWY9e3JlZnNbaV19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBsZzpqdXN0aWZ5LXN0YXJ0IHctc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gY2xhc3NOYW1lPVwidy02NFwiIC8+ICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sdW1uIGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSBtYXgtdy0zeGwgcGwtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtYmxhY2sgZm9udC1zZW1pYm9sZCBmb250LWhlYWRlciBwYi00XCI+V2F0ZXJkZWVwOiBUaGUgTG9uZyBUcm9sbHRpZGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEgcHktMiBtYi02IGJnLXRlcnRpYXJ5IHctMjQgZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nXCI+RmF2b3JpdGU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtYmxhY2sgZm9udC1ib2R5IGhpZGRlbiBsZzpmbGV4IGFsaWduLWNlbnRlciBicmVhay13b3Jkc1wiPldhdGVyZGVlcDogVGhlIExvbmcgVHJvbGx0aWRlIGlzIGFuIGVwaWMgY2FtcGFpZ24gYWR2ZW50dXJlcyB0aGF0IHRha2UgcGxhY2Ugb24gdGhlIGdyZWF0IGNpdHkgb2YgV2F0ZXJkZWVwLiBUaGUgc3RvcnkgZm9jdXNlcyBvbiBwbGF5ZXJzIGFzIGEgZW5mb3JjZXIga25vd24gYXMgVGhlIENpdHkgV2F0Y2gsIHdoZXJlIHRoZXkgd2lsbCBiZSBmYWNlZCB0byBhIGJyaWxsaWFudCBjcmltaW5hbCBtYXN0ZXJtaW5kIHRoYXQgaGFzIGJlZW4gZ29pbmcgYXJvdW5kIGZvciAzIG1vbnRocy4gIFdpbGwganVzdGljZSBwcmV2YWlsIGluIHRoZXNlIHN1Y2ggaW5kZWNlbnQgdGltZXM/IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgaG92ZXI6YmctcmVkLTgwMCB0ZXh0LXdoaXRlIG10LTYgcHktMiBweC00IHJvdW5kZWQgc2hhZG93IGZvbnQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlJlYWQgbW9yZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtzbGlkZXJDb250cm9sKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ })

});