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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Carousel\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_andreasnotokusumo_React_Project_moonlight_inn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/andreasnotokusumo/React Project/moonlight_inn/components/carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar images = ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']; // images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\n// images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\n\nvar Carousel = function Carousel() {\n  _s();\n\n  // We will start by storing the index of the current image in the state.\n  var _React$useState = React.useState(0),\n      _React$useState2 = (0,_Users_andreasnotokusumo_React_Project_moonlight_inn_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      currentImage = _React$useState2[0],\n      setCurrentImage = _React$useState2[1]; // We are using react ref to 'tag' each of the images. Below will create an array of\n  // objects with numbered keys. We will use those numbers (i) later to access a ref of a\n  // specific image in this array.\n\n\n  var refs = images.reduce(function (acc, val, i) {\n    acc[i] = React.createRef();\n    return acc;\n  }, {});\n\n  var scrollToImage = function scrollToImage(i) {\n    // First let's set the index of the image we want to see next\n    setCurrentImage(i); // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,\n    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into\n    // your current view! To do so we pass an index of the image, which is then use to identify our current\n    // image's ref in 'refs' array above.\n\n    refs[i].current.scrollIntoView({\n      //     Defines the transition animation.\n      behavior: 'smooth',\n      //      Defines vertical alignment.\n      block: 'nearest',\n      //      Defines horizontal alignment.\n      inline: 'start'\n    });\n  }; // Some validation for checking the array length could be added if needed\n\n\n  var totalImages = images.length; // Below functions will assure that after last image we'll scroll back to the start,\n  // or another way round - first to last in previousImage method.\n\n  var nextImage = function nextImage() {\n    if (currentImage >= totalImages - 1) {\n      scrollToImage(0);\n    } else {\n      scrollToImage(currentImage + 1);\n    }\n  };\n\n  var previousImage = function previousImage() {\n    if (currentImage === 0) {\n      scrollToImage(totalImages - 1);\n    } else {\n      scrollToImage(currentImage - 1);\n    }\n  }; // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.\n\n\n  var arrowStyle = 'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center'; // Let's create dynamic buttons. It can be either left or right. Using\n  // isLeft boolean we can determine which side we'll be rendering our button\n  // as well as change its position and content.\n\n  var sliderControl = function sliderControl(isLeft) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: isLeft ? previousImage : nextImage,\n      className: \"\".concat(arrowStyle, \" \").concat(isLeft ? 'left-2' : 'right-2'),\n      style: {\n        top: '40%'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        role: \"img\",\n        \"aria-label\": \"Arrow \".concat(isLeft ? 'left' : 'right'),\n        children: isLeft ? '◀' : '▶'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return (\n    /*#__PURE__*/\n    // Images are placed using inline flex. We then wrap an image in a div\n    // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.\n    // Finally the image itself will be 100% of a parent div. Outer div is\n    // set with position relative, so we can place our cotrol buttons using\n    // absolute positioning on each side of the image.\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"p-12 flex justify-center w-screen md:w-1/2 items-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"carousel\",\n          children: [sliderControl(true), images.map(function (img, i) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"w-full flex-shrink-0\",\n              ref: refs[i],\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: img,\n                className: \"w-full object-contain\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 15\n              }, _this)\n            }, img, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 13\n            }, _this);\n          }), sliderControl()]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }, _this)\n  );\n};\n\n_s(Carousel, \"cnc9rbhP80fTHOrqNEzwhjBY+h0=\");\n\n_c = Carousel;\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcz81ODMyIl0sIm5hbWVzIjpbImltYWdlcyIsIkNhcm91c2VsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbWFnZSIsInNldEN1cnJlbnRJbWFnZSIsInJlZnMiLCJyZWR1Y2UiLCJhY2MiLCJ2YWwiLCJpIiwiY3JlYXRlUmVmIiwic2Nyb2xsVG9JbWFnZSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJpbmxpbmUiLCJ0b3RhbEltYWdlcyIsImxlbmd0aCIsIm5leHRJbWFnZSIsInByZXZpb3VzSW1hZ2UiLCJhcnJvd1N0eWxlIiwic2xpZGVyQ29udHJvbCIsImlzTGVmdCIsInRvcCIsIm1hcCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLENBQUMsa0tBQUQsRUFBcUssa0tBQXJLLEVBQXlVLGtLQUF6VSxDQUFmLEMsQ0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQzVCO0FBRDRCLHdCQUVZQyxLQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRlo7QUFBQTtBQUFBLE1BRXJCQyxZQUZxQjtBQUFBLE1BRVBDLGVBRk8sd0JBSTVCO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHTixNQUFNLENBQUNPLE1BQVAsQ0FBYyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsQ0FBWCxFQUFpQjtBQUMxQ0YsT0FBRyxDQUFDRSxDQUFELENBQUgsR0FBU1IsS0FBSyxDQUFDUyxTQUFOLEVBQVQ7QUFDQSxXQUFPSCxHQUFQO0FBQ0QsR0FIWSxFQUdWLEVBSFUsQ0FBYjs7QUFLQSxNQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFGLENBQUMsRUFBSTtBQUN6QjtBQUNBTCxtQkFBZSxDQUFDSyxDQUFELENBQWYsQ0FGeUIsQ0FHekI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FKLFFBQUksQ0FBQ0ksQ0FBRCxDQUFKLENBQVFHLE9BQVIsQ0FBZ0JDLGNBQWhCLENBQStCO0FBQzdCO0FBQ0FDLGNBQVEsRUFBRSxRQUZtQjtBQUc3QjtBQUNBQyxXQUFLLEVBQUUsU0FKc0I7QUFLN0I7QUFDQUMsWUFBTSxFQUFFO0FBTnFCLEtBQS9CO0FBUUQsR0FmRCxDQVo0QixDQTZCNUI7OztBQUNBLE1BQU1DLFdBQVcsR0FBR2xCLE1BQU0sQ0FBQ21CLE1BQTNCLENBOUI0QixDQWdDNUI7QUFDQTs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQUloQixZQUFZLElBQUljLFdBQVcsR0FBRyxDQUFsQyxFQUFxQztBQUNuQ04sbUJBQWEsQ0FBQyxDQUFELENBQWI7QUFDRCxLQUZELE1BRU87QUFDTEEsbUJBQWEsQ0FBQ1IsWUFBWSxHQUFHLENBQWhCLENBQWI7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTWlCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFJakIsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQ3RCUSxtQkFBYSxDQUFDTSxXQUFXLEdBQUcsQ0FBZixDQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0xOLG1CQUFhLENBQUNSLFlBQVksR0FBRyxDQUFoQixDQUFiO0FBQ0Q7QUFDRixHQU5ELENBMUM0QixDQWtENUI7OztBQUNBLE1BQU1rQixVQUFVLEdBQ2QsK0dBREYsQ0FuRDRCLENBc0Q1QjtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxNQUFNO0FBQUEsd0JBQzFCO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFPLEVBQUVBLE1BQU0sR0FBR0gsYUFBSCxHQUFtQkQsU0FGcEM7QUFHRSxlQUFTLFlBQUtFLFVBQUwsY0FBbUJFLE1BQU0sR0FBRyxRQUFILEdBQWMsU0FBdkMsQ0FIWDtBQUlFLFdBQUssRUFBRTtBQUFFQyxXQUFHLEVBQUU7QUFBUCxPQUpUO0FBQUEsNkJBTUU7QUFBTSxZQUFJLEVBQUMsS0FBWDtBQUFpQixzQ0FBcUJELE1BQU0sR0FBRyxNQUFILEdBQVksT0FBdkMsQ0FBakI7QUFBQSxrQkFDR0EsTUFBTSxHQUFHLEdBQUgsR0FBUztBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQwQjtBQUFBLEdBQTVCOztBQWFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFBSyxlQUFTLEVBQUMseURBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLHFCQUNHRCxhQUFhLENBQUMsSUFBRCxDQURoQixFQUVHdkIsTUFBTSxDQUFDMEIsR0FBUCxDQUFXLFVBQUNDLEdBQUQsRUFBTWpCLENBQU47QUFBQSxnQ0FDVjtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBZ0QsaUJBQUcsRUFBRUosSUFBSSxDQUFDSSxDQUFELENBQXpEO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFFaUIsR0FBVjtBQUFlLHlCQUFTLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQTJDQSxHQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURVO0FBQUEsV0FBWCxDQUZILEVBT0dKLGFBQWEsRUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQW9CRCxDQTFGTTs7R0FBTXRCLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBpbWFnZXMgPSBbJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2NTAxMTM5MTc0LTA5OTAyMmRmNTI2MD9peGxpYj1yYi0xLjIuMSZpeGlkPU1Yd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHclM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMzUxJnE9ODAnLCAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjM0MzgwOTcyMDEtNTEyYWU3ZDU5YzQ0P2l4bGliPXJiLTEuMi4xJml4aWQ9TVh3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIdyUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEzNTAmcT04MCcsICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMzAyNjcwNTc1My1iYzNmZmZjYThiZjQ/aXhsaWI9cmItMS4yLjEmaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwJ11cbi8vIGltYWdlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHVybHMgLCBpZiB1c2luZyBOZXh0IEpTIHRoaXMgY291bGQgc29tZXRoaW5nIGxpa2Vcbi8vIGNvbnN0IGltYWdlcyA9IFsnL2ltZy9pbWcxLnBuZycsICcvaW1nL2ltZzIucG5nJywgJy9pbWcvaW1nMy5wbmcnXVxuLy8gaW1hZ2VzIG11c3QgYmUgYW4gYXJyYXkgb2YgdXJscyAsIGlmIHVzaW5nIE5leHQgSlMgdGhpcyBjb3VsZCBzb21ldGhpbmcgbGlrZVxuLy8gY29uc3QgaW1hZ2VzID0gWycvaW1nL2ltZzEucG5nJywgJy9pbWcvaW1nMi5wbmcnLCAnL2ltZy9pbWczLnBuZyddXG5cblxuZXhwb3J0IGNvbnN0IENhcm91c2VsID0gKCkgPT4ge1xuICAvLyBXZSB3aWxsIHN0YXJ0IGJ5IHN0b3JpbmcgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGltYWdlIGluIHRoZSBzdGF0ZS5cbiAgY29uc3QgW2N1cnJlbnRJbWFnZSwgc2V0Q3VycmVudEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIC8vIFdlIGFyZSB1c2luZyByZWFjdCByZWYgdG8gJ3RhZycgZWFjaCBvZiB0aGUgaW1hZ2VzLiBCZWxvdyB3aWxsIGNyZWF0ZSBhbiBhcnJheSBvZlxuICAvLyBvYmplY3RzIHdpdGggbnVtYmVyZWQga2V5cy4gV2Ugd2lsbCB1c2UgdGhvc2UgbnVtYmVycyAoaSkgbGF0ZXIgdG8gYWNjZXNzIGEgcmVmIG9mIGFcbiAgLy8gc3BlY2lmaWMgaW1hZ2UgaW4gdGhpcyBhcnJheS5cbiAgY29uc3QgcmVmcyA9IGltYWdlcy5yZWR1Y2UoKGFjYywgdmFsLCBpKSA9PiB7XG4gICAgYWNjW2ldID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIGNvbnN0IHNjcm9sbFRvSW1hZ2UgPSBpID0+IHtcbiAgICAvLyBGaXJzdCBsZXQncyBzZXQgdGhlIGluZGV4IG9mIHRoZSBpbWFnZSB3ZSB3YW50IHRvIHNlZSBuZXh0XG4gICAgc2V0Q3VycmVudEltYWdlKGkpO1xuICAgIC8vIE5vdywgdGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVucy4gV2UgJ3RhZ2dlZCcgZWFjaCBvbmUgb2YgdGhlIGltYWdlcyB3aXRoIGEgcmVmLFxuICAgIC8vIHdlIGNhbiB0aGVuIHVzZSBidWlsdC1pbiBzY3JvbGxJbnRvVmlldyBBUEkgdG8gZG8gZWF4YWN0bHkgd2hhdCBpdCBzYXlzIG9uIHRoZSBib3ggLSBzY3JvbGwgaXQgaW50b1xuICAgIC8vIHlvdXIgY3VycmVudCB2aWV3ISBUbyBkbyBzbyB3ZSBwYXNzIGFuIGluZGV4IG9mIHRoZSBpbWFnZSwgd2hpY2ggaXMgdGhlbiB1c2UgdG8gaWRlbnRpZnkgb3VyIGN1cnJlbnRcbiAgICAvLyBpbWFnZSdzIHJlZiBpbiAncmVmcycgYXJyYXkgYWJvdmUuXG4gICAgcmVmc1tpXS5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgIC8vICAgICBEZWZpbmVzIHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvbi5cbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIC8vICAgICAgRGVmaW5lcyB2ZXJ0aWNhbCBhbGlnbm1lbnQuXG4gICAgICBibG9jazogJ25lYXJlc3QnLFxuICAgICAgLy8gICAgICBEZWZpbmVzIGhvcml6b250YWwgYWxpZ25tZW50LlxuICAgICAgaW5saW5lOiAnc3RhcnQnLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIFNvbWUgdmFsaWRhdGlvbiBmb3IgY2hlY2tpbmcgdGhlIGFycmF5IGxlbmd0aCBjb3VsZCBiZSBhZGRlZCBpZiBuZWVkZWRcbiAgY29uc3QgdG90YWxJbWFnZXMgPSBpbWFnZXMubGVuZ3RoO1xuXG4gIC8vIEJlbG93IGZ1bmN0aW9ucyB3aWxsIGFzc3VyZSB0aGF0IGFmdGVyIGxhc3QgaW1hZ2Ugd2UnbGwgc2Nyb2xsIGJhY2sgdG8gdGhlIHN0YXJ0LFxuICAvLyBvciBhbm90aGVyIHdheSByb3VuZCAtIGZpcnN0IHRvIGxhc3QgaW4gcHJldmlvdXNJbWFnZSBtZXRob2QuXG4gIGNvbnN0IG5leHRJbWFnZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudEltYWdlID49IHRvdGFsSW1hZ2VzIC0gMSkge1xuICAgICAgc2Nyb2xsVG9JbWFnZSgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVG9JbWFnZShjdXJyZW50SW1hZ2UgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJldmlvdXNJbWFnZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudEltYWdlID09PSAwKSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKHRvdGFsSW1hZ2VzIC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbFRvSW1hZ2UoY3VycmVudEltYWdlIC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRhaWx3aW5kIHN0eWxlcy4gTW9zdCBpbXBvcnRhbnRseSBub3RpY2UgcG9zaXRpb24gYWJzb2x1dGUsIHRoaXMgd2lsbCBzaXQgcmVsYXRpdmUgdG8gdGhlIGNhcm91c2VsJ3Mgb3V0ZXIgZGl2LlxuICBjb25zdCBhcnJvd1N0eWxlID1cbiAgICAnYWJzb2x1dGUgdGV4dC13aGl0ZSB0ZXh0LTJ4bCB6LTEwIGJnLWJsYWNrIGgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgb3BhY2l0eS03NSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic7XG5cbiAgLy8gTGV0J3MgY3JlYXRlIGR5bmFtaWMgYnV0dG9ucy4gSXQgY2FuIGJlIGVpdGhlciBsZWZ0IG9yIHJpZ2h0LiBVc2luZ1xuICAvLyBpc0xlZnQgYm9vbGVhbiB3ZSBjYW4gZGV0ZXJtaW5lIHdoaWNoIHNpZGUgd2UnbGwgYmUgcmVuZGVyaW5nIG91ciBidXR0b25cbiAgLy8gYXMgd2VsbCBhcyBjaGFuZ2UgaXRzIHBvc2l0aW9uIGFuZCBjb250ZW50LlxuICBjb25zdCBzbGlkZXJDb250cm9sID0gaXNMZWZ0ID0+IChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9e2lzTGVmdCA/IHByZXZpb3VzSW1hZ2UgOiBuZXh0SW1hZ2V9XG4gICAgICBjbGFzc05hbWU9e2Ake2Fycm93U3R5bGV9ICR7aXNMZWZ0ID8gJ2xlZnQtMicgOiAncmlnaHQtMid9YH1cbiAgICAgIHN0eWxlPXt7IHRvcDogJzQwJScgfX1cbiAgICA+XG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD17YEFycm93ICR7aXNMZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0J31gfT5cbiAgICAgICAge2lzTGVmdCA/ICfil4AnIDogJ+KWtid9XG4gICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgLy8gSW1hZ2VzIGFyZSBwbGFjZWQgdXNpbmcgaW5saW5lIGZsZXguIFdlIHRoZW4gd3JhcCBhbiBpbWFnZSBpbiBhIGRpdlxuICAvLyB3aXRoIGZsZXgtc2hyaW5rLTAgdG8gc3RvcCBpdCBmcm9tICdzaHJpbmtpbmcnIHRvIGZpdCB0aGUgb3V0ZXIgZGl2LlxuICAvLyBGaW5hbGx5IHRoZSBpbWFnZSBpdHNlbGYgd2lsbCBiZSAxMDAlIG9mIGEgcGFyZW50IGRpdi4gT3V0ZXIgZGl2IGlzXG4gIC8vIHNldCB3aXRoIHBvc2l0aW9uIHJlbGF0aXZlLCBzbyB3ZSBjYW4gcGxhY2Ugb3VyIGNvdHJvbCBidXR0b25zIHVzaW5nXG4gIC8vIGFic29sdXRlIHBvc2l0aW9uaW5nIG9uIGVhY2ggc2lkZSBvZiB0aGUgaW1hZ2UuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTEyIGZsZXgganVzdGlmeS1jZW50ZXIgdy1zY3JlZW4gbWQ6dy0xLzIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsXCI+XG4gICAgICAgICAge3NsaWRlckNvbnRyb2wodHJ1ZSl9XG4gICAgICAgICAge2ltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleC1zaHJpbmstMFwiIGtleT17aW1nfSByZWY9e3JlZnNbaV19PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9XCJ3LWZ1bGwgb2JqZWN0LWNvbnRhaW5cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3NsaWRlckNvbnRyb2woKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ })

});