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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreasnotokusumo/React Project/moonlight_inn/components/carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // images must be an array of urls , if using Next JS this could something like\n\nvar images = ['/item-1.png', '/item-2.jpg', '/item-3.jpg, /item-4.png']; // images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\n\nvar Carousel = function Carousel() {\n  _s();\n\n  // We will start by storing the index of the current image in the state.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentImage = _useState[0],\n      setCurrentImage = _useState[1]; // We are using react ref to 'tag' each of the images. Below will create an array of\n  // objects with numbered keys. We will use those numbers (i) later to access a ref of a\n  // specific image in this array.\n\n\n  var refs = images.reduce(function (acc, val, i) {\n    acc[i] = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    return acc;\n  }, {});\n\n  var scrollToImage = function scrollToImage(i) {\n    // First let's set the index of the image we want to see next\n    setCurrentImage(i); // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,\n    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into\n    // your current view! To do so we pass an index of the image, which is then use to identify our current\n    // image's ref in 'refs' array above.\n\n    refs[i].current.scrollIntoView({\n      //     Defines the transition animation.\n      behavior: 'smooth',\n      //      Defines vertical alignment.\n      block: 'nearest',\n      //      Defines horizontal alignment.\n      inline: 'start'\n    });\n  }; // Some validation for checking the array length could be added if needed\n\n\n  var totalImages = images.length; // Below functions will assure that after last image we'll scroll back to the start,\n  // or another way round - first to last in previousImage method.\n\n  var nextImage = function nextImage() {\n    if (currentImage >= totalImages - 1) {\n      scrollToImage(0);\n    } else {\n      scrollToImage(currentImage + 1);\n    }\n  };\n\n  var previousImage = function previousImage() {\n    if (currentImage === 0) {\n      scrollToImage(totalImages - 1);\n    } else {\n      scrollToImage(currentImage - 1);\n    }\n  }; // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.\n\n\n  var arrowStyle = 'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';\n\n  var sliderControl = function sliderControl(isLeft) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: isLeft ? previousImage : nextImage,\n      className: \"\".concat(arrowStyle, \" \").concat(isLeft ? 'left-2' : 'right-2'),\n      style: {\n        top: '40%'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        role: \"img\",\n        \"aria-label\": \"Arrow \".concat(isLeft ? 'left' : 'right'),\n        children: isLeft ? '◀' : '▶'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"p-12 inline-flex justify-center w-screen md:w-1/2 items-center \",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"relative w-full\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel\",\n        children: [sliderControl(true), images.map(function (img, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-shrink-0 w-full\",\n            ref: refs[i],\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              src: img,\n              className: \"w-20 object-contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 15\n            }, _this)\n          }, img, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this);\n        }), sliderControl()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"cnc9rbhP80fTHOrqNEzwhjBY+h0=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcz81ODMyIl0sIm5hbWVzIjpbImltYWdlcyIsIkNhcm91c2VsIiwidXNlU3RhdGUiLCJjdXJyZW50SW1hZ2UiLCJzZXRDdXJyZW50SW1hZ2UiLCJyZWZzIiwicmVkdWNlIiwiYWNjIiwidmFsIiwiaSIsImNyZWF0ZVJlZiIsInNjcm9sbFRvSW1hZ2UiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwidG90YWxJbWFnZXMiLCJsZW5ndGgiLCJuZXh0SW1hZ2UiLCJwcmV2aW91c0ltYWdlIiwiYXJyb3dTdHlsZSIsInNsaWRlckNvbnRyb2wiLCJpc0xlZnQiLCJ0b3AiLCJtYXAiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxDQUFDLGFBQUQsRUFBZ0IsYUFBaEIsRUFBK0IsMEJBQS9CLENBQWYsQyxDQUNBO0FBQ0E7O0FBR0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQjtBQURxQixrQkFFbUJDLCtDQUFRLENBQUMsQ0FBRCxDQUYzQjtBQUFBLE1BRWRDLFlBRmM7QUFBQSxNQUVBQyxlQUZBLGlCQUlyQjtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLElBQUksR0FBR0wsTUFBTSxDQUFDTSxNQUFQLENBQWMsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLENBQVgsRUFBaUI7QUFDMUNGLE9BQUcsQ0FBQ0UsQ0FBRCxDQUFILGdCQUFTQyxnREFBUyxFQUFsQjtBQUNBLFdBQU9ILEdBQVA7QUFDRCxHQUhZLEVBR1YsRUFIVSxDQUFiOztBQUtBLE1BQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUYsQ0FBQyxFQUFJO0FBQ3pCO0FBQ0FMLG1CQUFlLENBQUNLLENBQUQsQ0FBZixDQUZ5QixDQUd6QjtBQUNBO0FBQ0E7QUFDQTs7QUFDQUosUUFBSSxDQUFDSSxDQUFELENBQUosQ0FBUUcsT0FBUixDQUFnQkMsY0FBaEIsQ0FBK0I7QUFDN0I7QUFDQUMsY0FBUSxFQUFFLFFBRm1CO0FBRzdCO0FBQ0FDLFdBQUssRUFBRSxTQUpzQjtBQUs3QjtBQUNBQyxZQUFNLEVBQUU7QUFOcUIsS0FBL0I7QUFRRCxHQWZELENBWnFCLENBNkJyQjs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHakIsTUFBTSxDQUFDa0IsTUFBM0IsQ0E5QnFCLENBZ0NyQjtBQUNBOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBSWhCLFlBQVksSUFBSWMsV0FBVyxHQUFHLENBQWxDLEVBQXFDO0FBQ25DTixtQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNELEtBRkQsTUFFTztBQUNMQSxtQkFBYSxDQUFDUixZQUFZLEdBQUcsQ0FBaEIsQ0FBYjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNaUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQUlqQixZQUFZLEtBQUssQ0FBckIsRUFBd0I7QUFDdEJRLG1CQUFhLENBQUNNLFdBQVcsR0FBRyxDQUFmLENBQWI7QUFDRCxLQUZELE1BRU87QUFDTE4sbUJBQWEsQ0FBQ1IsWUFBWSxHQUFHLENBQWhCLENBQWI7QUFDRDtBQUNGLEdBTkQsQ0ExQ3FCLENBa0RyQjs7O0FBQ0EsTUFBTWtCLFVBQVUsR0FDZCwrR0FERjs7QUFHQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLE1BQU07QUFBQSx3QkFDMUI7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGFBQU8sRUFBRUEsTUFBTSxHQUFHSCxhQUFILEdBQW1CRCxTQUZwQztBQUdFLGVBQVMsWUFBS0UsVUFBTCxjQUFtQkUsTUFBTSxHQUFHLFFBQUgsR0FBYyxTQUF2QyxDQUhYO0FBSUUsV0FBSyxFQUFFO0FBQUVDLFdBQUcsRUFBRTtBQUFQLE9BSlQ7QUFBQSw2QkFNRTtBQUFNLFlBQUksRUFBQyxLQUFYO0FBQWlCLHNDQUFxQkQsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQUF2QyxDQUFqQjtBQUFBLGtCQUNHQSxNQUFNLEdBQUcsR0FBSCxHQUFTO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDBCO0FBQUEsR0FBNUI7O0FBYUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUVBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsbUJBQ0dELGFBQWEsQ0FBQyxJQUFELENBRGhCLEVBRUd0QixNQUFNLENBQUN5QixHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNakIsQ0FBTjtBQUFBLDhCQUNWO0FBQUsscUJBQVMsRUFBQyxzQkFBZjtBQUFnRCxlQUFHLEVBQUVKLElBQUksQ0FBQ0ksQ0FBRCxDQUF6RDtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRWlCLEdBQVY7QUFBZSx1QkFBUyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUEyQ0EsR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQVgsQ0FGSCxFQU9HSixhQUFhLEVBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQWxGRDs7R0FBTXJCLFE7O0tBQUFBLFE7QUFvRk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpbWFnZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB1cmxzICwgaWYgdXNpbmcgTmV4dCBKUyB0aGlzIGNvdWxkIHNvbWV0aGluZyBsaWtlXG5jb25zdCBpbWFnZXMgPSBbJy9pdGVtLTEucG5nJywgJy9pdGVtLTIuanBnJywgJy9pdGVtLTMuanBnLCAvaXRlbS00LnBuZyddXG4vLyBpbWFnZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB1cmxzICwgaWYgdXNpbmcgTmV4dCBKUyB0aGlzIGNvdWxkIHNvbWV0aGluZyBsaWtlXG4vLyBjb25zdCBpbWFnZXMgPSBbJy9pbWcvaW1nMS5wbmcnLCAnL2ltZy9pbWcyLnBuZycsICcvaW1nL2ltZzMucG5nJ11cblxuXG5jb25zdCBDYXJvdXNlbCA9ICgpID0+IHtcbiAgLy8gV2Ugd2lsbCBzdGFydCBieSBzdG9yaW5nIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBpbWFnZSBpbiB0aGUgc3RhdGUuXG4gIGNvbnN0IFtjdXJyZW50SW1hZ2UsIHNldEN1cnJlbnRJbWFnZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBXZSBhcmUgdXNpbmcgcmVhY3QgcmVmIHRvICd0YWcnIGVhY2ggb2YgdGhlIGltYWdlcy4gQmVsb3cgd2lsbCBjcmVhdGUgYW4gYXJyYXkgb2ZcbiAgLy8gb2JqZWN0cyB3aXRoIG51bWJlcmVkIGtleXMuIFdlIHdpbGwgdXNlIHRob3NlIG51bWJlcnMgKGkpIGxhdGVyIHRvIGFjY2VzcyBhIHJlZiBvZiBhXG4gIC8vIHNwZWNpZmljIGltYWdlIGluIHRoaXMgYXJyYXkuXG4gIGNvbnN0IHJlZnMgPSBpbWFnZXMucmVkdWNlKChhY2MsIHZhbCwgaSkgPT4ge1xuICAgIGFjY1tpXSA9IGNyZWF0ZVJlZigpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICBjb25zdCBzY3JvbGxUb0ltYWdlID0gaSA9PiB7XG4gICAgLy8gRmlyc3QgbGV0J3Mgc2V0IHRoZSBpbmRleCBvZiB0aGUgaW1hZ2Ugd2Ugd2FudCB0byBzZWUgbmV4dFxuICAgIHNldEN1cnJlbnRJbWFnZShpKTtcbiAgICAvLyBOb3csIHRoaXMgaXMgd2hlcmUgdGhlIG1hZ2ljIGhhcHBlbnMuIFdlICd0YWdnZWQnIGVhY2ggb25lIG9mIHRoZSBpbWFnZXMgd2l0aCBhIHJlZixcbiAgICAvLyB3ZSBjYW4gdGhlbiB1c2UgYnVpbHQtaW4gc2Nyb2xsSW50b1ZpZXcgQVBJIHRvIGRvIGVheGFjdGx5IHdoYXQgaXQgc2F5cyBvbiB0aGUgYm94IC0gc2Nyb2xsIGl0IGludG9cbiAgICAvLyB5b3VyIGN1cnJlbnQgdmlldyEgVG8gZG8gc28gd2UgcGFzcyBhbiBpbmRleCBvZiB0aGUgaW1hZ2UsIHdoaWNoIGlzIHRoZW4gdXNlIHRvIGlkZW50aWZ5IG91ciBjdXJyZW50XG4gICAgLy8gaW1hZ2UncyByZWYgaW4gJ3JlZnMnIGFycmF5IGFib3ZlLlxuICAgIHJlZnNbaV0uY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAvLyAgICAgRGVmaW5lcyB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb24uXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAvLyAgICAgIERlZmluZXMgdmVydGljYWwgYWxpZ25tZW50LlxuICAgICAgYmxvY2s6ICduZWFyZXN0JyxcbiAgICAgIC8vICAgICAgRGVmaW5lcyBob3Jpem9udGFsIGFsaWdubWVudC5cbiAgICAgIGlubGluZTogJ3N0YXJ0JyxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTb21lIHZhbGlkYXRpb24gZm9yIGNoZWNraW5nIHRoZSBhcnJheSBsZW5ndGggY291bGQgYmUgYWRkZWQgaWYgbmVlZGVkXG4gIGNvbnN0IHRvdGFsSW1hZ2VzID0gaW1hZ2VzLmxlbmd0aDtcblxuICAvLyBCZWxvdyBmdW5jdGlvbnMgd2lsbCBhc3N1cmUgdGhhdCBhZnRlciBsYXN0IGltYWdlIHdlJ2xsIHNjcm9sbCBiYWNrIHRvIHRoZSBzdGFydCxcbiAgLy8gb3IgYW5vdGhlciB3YXkgcm91bmQgLSBmaXJzdCB0byBsYXN0IGluIHByZXZpb3VzSW1hZ2UgbWV0aG9kLlxuICBjb25zdCBuZXh0SW1hZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRJbWFnZSA+PSB0b3RhbEltYWdlcyAtIDEpIHtcbiAgICAgIHNjcm9sbFRvSW1hZ2UoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbFRvSW1hZ2UoY3VycmVudEltYWdlICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByZXZpb3VzSW1hZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRJbWFnZSA9PT0gMCkge1xuICAgICAgc2Nyb2xsVG9JbWFnZSh0b3RhbEltYWdlcyAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKGN1cnJlbnRJbWFnZSAtIDEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBUYWlsd2luZCBzdHlsZXMuIE1vc3QgaW1wb3J0YW50bHkgbm90aWNlIHBvc2l0aW9uIGFic29sdXRlLCB0aGlzIHdpbGwgc2l0IHJlbGF0aXZlIHRvIHRoZSBjYXJvdXNlbCdzIG91dGVyIGRpdi5cbiAgY29uc3QgYXJyb3dTdHlsZSA9XG4gICAgJ2Fic29sdXRlIHRleHQtd2hpdGUgdGV4dC0yeGwgei0xMCBiZy1ibGFjayBoLTEwIHctMTAgcm91bmRlZC1mdWxsIG9wYWNpdHktNzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInO1xuXG4gIGNvbnN0IHNsaWRlckNvbnRyb2wgPSBpc0xlZnQgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17aXNMZWZ0ID8gcHJldmlvdXNJbWFnZSA6IG5leHRJbWFnZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7YXJyb3dTdHlsZX0gJHtpc0xlZnQgPyAnbGVmdC0yJyA6ICdyaWdodC0yJ31gfVxuICAgICAgc3R5bGU9e3sgdG9wOiAnNDAlJyB9fVxuICAgID5cbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPXtgQXJyb3cgJHtpc0xlZnQgPyAnbGVmdCcgOiAncmlnaHQnfWB9PlxuICAgICAgICB7aXNMZWZ0ID8gJ+KXgCcgOiAn4pa2J31cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMiBpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlbiBtZDp3LTEvMiBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsXCI+XG4gICAgICAgICAge3NsaWRlckNvbnRyb2wodHJ1ZSl9XG4gICAgICAgICAge2ltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctZnVsbFwiIGtleT17aW1nfSByZWY9e3JlZnNbaV19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9XCJ3LTIwIG9iamVjdC1jb250YWluXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtzbGlkZXJDb250cm9sKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ })

});