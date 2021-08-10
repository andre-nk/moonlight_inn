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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar _reactJsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\nvar _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n\nvar _jsxFileName = \"/Users/andreasnotokusumo/React Project/moonlight_inn/components/carousel.js\",\n    _this = this,\n    _s = $RefreshSig$();\n\nvar images = ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80']; // images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\n// images must be an array of urls , if using Next JS this could something like\n// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']\n\nvar Carousel = function Carousel() {\n  _s();\n\n  // We will start by storing the index of the current image in the state.\n  var _React$useState = React.useState(0),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      currentImage = _React$useState2[0],\n      setCurrentImage = _React$useState2[1]; // We are using react ref to 'tag' each of the images. Below will create an array of\n  // objects with numbered keys. We will use those numbers (i) later to access a ref of a\n  // specific image in this array.\n\n\n  var refs = images.reduce(function (acc, val, i) {\n    acc[i] = React.createRef();\n    return acc;\n  }, {});\n\n  var scrollToImage = function scrollToImage(i) {\n    // First let's set the index of the image we want to see next\n    setCurrentImage(i); // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,\n    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into\n    // your current view! To do so we pass an index of the image, which is then use to identify our current\n    // image's ref in 'refs' array above.\n\n    refs[i].current.scrollIntoView({\n      //     Defines the transition animation.\n      behavior: 'smooth',\n      //      Defines vertical alignment.\n      block: 'nearest',\n      //      Defines horizontal alignment.\n      inline: 'start'\n    });\n  }; // Some validation for checking the array length could be added if needed\n\n\n  var totalImages = images.length; // Below functions will assure that after last image we'll scroll back to the start,\n  // or another way round - first to last in previousImage method.\n\n  var nextImage = function nextImage() {\n    if (currentImage >= totalImages - 1) {\n      scrollToImage(0);\n    } else {\n      scrollToImage(currentImage + 1);\n    }\n  };\n\n  var previousImage = function previousImage() {\n    if (currentImage === 0) {\n      scrollToImage(totalImages - 1);\n    } else {\n      scrollToImage(currentImage - 1);\n    }\n  }; // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.\n\n\n  var arrowStyle = 'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center'; // Let's create dynamic buttons. It can be either left or right. Using\n  // isLeft boolean we can determine which side we'll be rendering our button\n  // as well as change its position and content.\n\n  var sliderControl = function sliderControl(isLeft) {\n    return /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(\"button\", {\n      type: \"button\",\n      onClick: isLeft ? previousImage : nextImage,\n      className: \"\".concat(arrowStyle, \" \").concat(isLeft ? 'left-2' : 'right-2'),\n      style: {\n        top: '40%'\n      },\n      children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(\"span\", {\n        role: \"img\",\n        \"aria-label\": \"Arrow \".concat(isLeft ? 'left' : 'right'),\n        children: isLeft ? '◀' : '▶'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return (\n    /*#__PURE__*/\n    // Images are placed using inline flex. We then wrap an image in a div\n    // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.\n    // Finally the image itself will be 100% of a parent div. Outer div is\n    // set with position relative, so we can place our cotrol buttons using\n    // absolute positioning on each side of the image.\n    _reactJsxDevRuntime.jsxDEV(\"div\", {\n      className: \"p-12 flex justify-center w-screen md:w-1/2 items-center\",\n      children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(\"div\", {\n        className: \"relative w-full\",\n        children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(\"div\", {\n          className: \"carousel\",\n          children: [sliderControl(true), images.map(function (img, i) {\n            return /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(\"div\", {\n              className: \"w-full flex-shrink-0\",\n              ref: refs[i],\n              children: /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(\"img\", {\n                src: img,\n                className: \"w-full object-contain\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 15\n              }, _this)\n            }, img, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 13\n            }, _this);\n          }), sliderControl()]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }, _this)\n  );\n};\n\n_s(Carousel, \"cnc9rbhP80fTHOrqNEzwhjBY+h0=\");\n\n_c = Carousel;\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcz81ODMyIl0sIm5hbWVzIjpbImltYWdlcyIsIkNhcm91c2VsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbWFnZSIsInNldEN1cnJlbnRJbWFnZSIsInJlZnMiLCJyZWR1Y2UiLCJhY2MiLCJ2YWwiLCJpIiwiY3JlYXRlUmVmIiwic2Nyb2xsVG9JbWFnZSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJpbmxpbmUiLCJ0b3RhbEltYWdlcyIsImxlbmd0aCIsIm5leHRJbWFnZSIsInByZXZpb3VzSW1hZ2UiLCJhcnJvd1N0eWxlIiwic2xpZGVyQ29udHJvbCIsImlzTGVmdCIsInRvcCIsIm1hcCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLENBQUMsa0tBQUQsRUFBcUssa0tBQXJLLEVBQXlVLGtLQUF6VSxDQUFmLEMsQ0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCO0FBRHFCLHdCQUVtQkMsS0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUZuQjtBQUFBO0FBQUEsTUFFZEMsWUFGYztBQUFBLE1BRUFDLGVBRkEsd0JBSXJCO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHTixNQUFNLENBQUNPLE1BQVAsQ0FBYyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsQ0FBWCxFQUFpQjtBQUMxQ0YsT0FBRyxDQUFDRSxDQUFELENBQUgsR0FBU1IsS0FBSyxDQUFDUyxTQUFOLEVBQVQ7QUFDQSxXQUFPSCxHQUFQO0FBQ0QsR0FIWSxFQUdWLEVBSFUsQ0FBYjs7QUFLQSxNQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFGLENBQUMsRUFBSTtBQUN6QjtBQUNBTCxtQkFBZSxDQUFDSyxDQUFELENBQWYsQ0FGeUIsQ0FHekI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FKLFFBQUksQ0FBQ0ksQ0FBRCxDQUFKLENBQVFHLE9BQVIsQ0FBZ0JDLGNBQWhCLENBQStCO0FBQzdCO0FBQ0FDLGNBQVEsRUFBRSxRQUZtQjtBQUc3QjtBQUNBQyxXQUFLLEVBQUUsU0FKc0I7QUFLN0I7QUFDQUMsWUFBTSxFQUFFO0FBTnFCLEtBQS9CO0FBUUQsR0FmRCxDQVpxQixDQTZCckI7OztBQUNBLE1BQU1DLFdBQVcsR0FBR2xCLE1BQU0sQ0FBQ21CLE1BQTNCLENBOUJxQixDQWdDckI7QUFDQTs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQUloQixZQUFZLElBQUljLFdBQVcsR0FBRyxDQUFsQyxFQUFxQztBQUNuQ04sbUJBQWEsQ0FBQyxDQUFELENBQWI7QUFDRCxLQUZELE1BRU87QUFDTEEsbUJBQWEsQ0FBQ1IsWUFBWSxHQUFHLENBQWhCLENBQWI7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTWlCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFJakIsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQ3RCUSxtQkFBYSxDQUFDTSxXQUFXLEdBQUcsQ0FBZixDQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0xOLG1CQUFhLENBQUNSLFlBQVksR0FBRyxDQUFoQixDQUFiO0FBQ0Q7QUFDRixHQU5ELENBMUNxQixDQWtEckI7OztBQUNBLE1BQU1rQixVQUFVLEdBQ2QsK0dBREYsQ0FuRHFCLENBc0RyQjtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxNQUFNO0FBQUEsd0JBQzFCO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFPLEVBQUVBLE1BQU0sR0FBR0gsYUFBSCxHQUFtQkQsU0FGcEM7QUFHRSxlQUFTLFlBQUtFLFVBQUwsY0FBbUJFLE1BQU0sR0FBRyxRQUFILEdBQWMsU0FBdkMsQ0FIWDtBQUlFLFdBQUssRUFBRTtBQUFFQyxXQUFHLEVBQUU7QUFBUCxPQUpUO0FBQUEsNkJBTUU7QUFBTSxZQUFJLEVBQUMsS0FBWDtBQUFpQixzQ0FBcUJELE1BQU0sR0FBRyxNQUFILEdBQVksT0FBdkMsQ0FBakI7QUFBQSxrQkFDR0EsTUFBTSxHQUFHLEdBQUgsR0FBUztBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQwQjtBQUFBLEdBQTVCOztBQWFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFBSyxlQUFTLEVBQUMseURBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLHFCQUNHRCxhQUFhLENBQUMsSUFBRCxDQURoQixFQUVHdkIsTUFBTSxDQUFDMEIsR0FBUCxDQUFXLFVBQUNDLEdBQUQsRUFBTWpCLENBQU47QUFBQSxnQ0FDVjtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBZ0QsaUJBQUcsRUFBRUosSUFBSSxDQUFDSSxDQUFELENBQXpEO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFFaUIsR0FBVjtBQUFlLHlCQUFTLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQTJDQSxHQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURVO0FBQUEsV0FBWCxDQUZILEVBT0dKLGFBQWEsRUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQW9CRCxDQTFGRDs7R0FBTXRCLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBpbWFnZXMgPSBbJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2NTAxMTM5MTc0LTA5OTAyMmRmNTI2MD9peGxpYj1yYi0xLjIuMSZpeGlkPU1Yd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHclM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMzUxJnE9ODAnLCAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjM0MzgwOTcyMDEtNTEyYWU3ZDU5YzQ0P2l4bGliPXJiLTEuMi4xJml4aWQ9TVh3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIdyUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEzNTAmcT04MCcsICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMzAyNjcwNTc1My1iYzNmZmZjYThiZjQ/aXhsaWI9cmItMS4yLjEmaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwJ11cbi8vIGltYWdlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHVybHMgLCBpZiB1c2luZyBOZXh0IEpTIHRoaXMgY291bGQgc29tZXRoaW5nIGxpa2Vcbi8vIGNvbnN0IGltYWdlcyA9IFsnL2ltZy9pbWcxLnBuZycsICcvaW1nL2ltZzIucG5nJywgJy9pbWcvaW1nMy5wbmcnXVxuLy8gaW1hZ2VzIG11c3QgYmUgYW4gYXJyYXkgb2YgdXJscyAsIGlmIHVzaW5nIE5leHQgSlMgdGhpcyBjb3VsZCBzb21ldGhpbmcgbGlrZVxuLy8gY29uc3QgaW1hZ2VzID0gWycvaW1nL2ltZzEucG5nJywgJy9pbWcvaW1nMi5wbmcnLCAnL2ltZy9pbWczLnBuZyddXG5cblxuY29uc3QgQ2Fyb3VzZWwgPSAoKSA9PiB7XG4gIC8vIFdlIHdpbGwgc3RhcnQgYnkgc3RvcmluZyB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgaW1hZ2UgaW4gdGhlIHN0YXRlLlxuICBjb25zdCBbY3VycmVudEltYWdlLCBzZXRDdXJyZW50SW1hZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgLy8gV2UgYXJlIHVzaW5nIHJlYWN0IHJlZiB0byAndGFnJyBlYWNoIG9mIHRoZSBpbWFnZXMuIEJlbG93IHdpbGwgY3JlYXRlIGFuIGFycmF5IG9mXG4gIC8vIG9iamVjdHMgd2l0aCBudW1iZXJlZCBrZXlzLiBXZSB3aWxsIHVzZSB0aG9zZSBudW1iZXJzIChpKSBsYXRlciB0byBhY2Nlc3MgYSByZWYgb2YgYVxuICAvLyBzcGVjaWZpYyBpbWFnZSBpbiB0aGlzIGFycmF5LlxuICBjb25zdCByZWZzID0gaW1hZ2VzLnJlZHVjZSgoYWNjLCB2YWwsIGkpID0+IHtcbiAgICBhY2NbaV0gPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9JbWFnZSA9IGkgPT4ge1xuICAgIC8vIEZpcnN0IGxldCdzIHNldCB0aGUgaW5kZXggb2YgdGhlIGltYWdlIHdlIHdhbnQgdG8gc2VlIG5leHRcbiAgICBzZXRDdXJyZW50SW1hZ2UoaSk7XG4gICAgLy8gTm93LCB0aGlzIGlzIHdoZXJlIHRoZSBtYWdpYyBoYXBwZW5zLiBXZSAndGFnZ2VkJyBlYWNoIG9uZSBvZiB0aGUgaW1hZ2VzIHdpdGggYSByZWYsXG4gICAgLy8gd2UgY2FuIHRoZW4gdXNlIGJ1aWx0LWluIHNjcm9sbEludG9WaWV3IEFQSSB0byBkbyBlYXhhY3RseSB3aGF0IGl0IHNheXMgb24gdGhlIGJveCAtIHNjcm9sbCBpdCBpbnRvXG4gICAgLy8geW91ciBjdXJyZW50IHZpZXchIFRvIGRvIHNvIHdlIHBhc3MgYW4gaW5kZXggb2YgdGhlIGltYWdlLCB3aGljaCBpcyB0aGVuIHVzZSB0byBpZGVudGlmeSBvdXIgY3VycmVudFxuICAgIC8vIGltYWdlJ3MgcmVmIGluICdyZWZzJyBhcnJheSBhYm92ZS5cbiAgICByZWZzW2ldLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgLy8gICAgIERlZmluZXMgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uLlxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgLy8gICAgICBEZWZpbmVzIHZlcnRpY2FsIGFsaWdubWVudC5cbiAgICAgIGJsb2NrOiAnbmVhcmVzdCcsXG4gICAgICAvLyAgICAgIERlZmluZXMgaG9yaXpvbnRhbCBhbGlnbm1lbnQuXG4gICAgICBpbmxpbmU6ICdzdGFydCcsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gU29tZSB2YWxpZGF0aW9uIGZvciBjaGVja2luZyB0aGUgYXJyYXkgbGVuZ3RoIGNvdWxkIGJlIGFkZGVkIGlmIG5lZWRlZFxuICBjb25zdCB0b3RhbEltYWdlcyA9IGltYWdlcy5sZW5ndGg7XG5cbiAgLy8gQmVsb3cgZnVuY3Rpb25zIHdpbGwgYXNzdXJlIHRoYXQgYWZ0ZXIgbGFzdCBpbWFnZSB3ZSdsbCBzY3JvbGwgYmFjayB0byB0aGUgc3RhcnQsXG4gIC8vIG9yIGFub3RoZXIgd2F5IHJvdW5kIC0gZmlyc3QgdG8gbGFzdCBpbiBwcmV2aW91c0ltYWdlIG1ldGhvZC5cbiAgY29uc3QgbmV4dEltYWdlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50SW1hZ2UgPj0gdG90YWxJbWFnZXMgLSAxKSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKGN1cnJlbnRJbWFnZSArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmV2aW91c0ltYWdlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50SW1hZ2UgPT09IDApIHtcbiAgICAgIHNjcm9sbFRvSW1hZ2UodG90YWxJbWFnZXMgLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVG9JbWFnZShjdXJyZW50SW1hZ2UgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGFpbHdpbmQgc3R5bGVzLiBNb3N0IGltcG9ydGFudGx5IG5vdGljZSBwb3NpdGlvbiBhYnNvbHV0ZSwgdGhpcyB3aWxsIHNpdCByZWxhdGl2ZSB0byB0aGUgY2Fyb3VzZWwncyBvdXRlciBkaXYuXG4gIGNvbnN0IGFycm93U3R5bGUgPVxuICAgICdhYnNvbHV0ZSB0ZXh0LXdoaXRlIHRleHQtMnhsIHotMTAgYmctYmxhY2sgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBvcGFjaXR5LTc1IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJztcblxuICAvLyBMZXQncyBjcmVhdGUgZHluYW1pYyBidXR0b25zLiBJdCBjYW4gYmUgZWl0aGVyIGxlZnQgb3IgcmlnaHQuIFVzaW5nXG4gIC8vIGlzTGVmdCBib29sZWFuIHdlIGNhbiBkZXRlcm1pbmUgd2hpY2ggc2lkZSB3ZSdsbCBiZSByZW5kZXJpbmcgb3VyIGJ1dHRvblxuICAvLyBhcyB3ZWxsIGFzIGNoYW5nZSBpdHMgcG9zaXRpb24gYW5kIGNvbnRlbnQuXG4gIGNvbnN0IHNsaWRlckNvbnRyb2wgPSBpc0xlZnQgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17aXNMZWZ0ID8gcHJldmlvdXNJbWFnZSA6IG5leHRJbWFnZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7YXJyb3dTdHlsZX0gJHtpc0xlZnQgPyAnbGVmdC0yJyA6ICdyaWdodC0yJ31gfVxuICAgICAgc3R5bGU9e3sgdG9wOiAnNDAlJyB9fVxuICAgID5cbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPXtgQXJyb3cgJHtpc0xlZnQgPyAnbGVmdCcgOiAncmlnaHQnfWB9PlxuICAgICAgICB7aXNMZWZ0ID8gJ+KXgCcgOiAn4pa2J31cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAvLyBJbWFnZXMgYXJlIHBsYWNlZCB1c2luZyBpbmxpbmUgZmxleC4gV2UgdGhlbiB3cmFwIGFuIGltYWdlIGluIGEgZGl2XG4gIC8vIHdpdGggZmxleC1zaHJpbmstMCB0byBzdG9wIGl0IGZyb20gJ3Nocmlua2luZycgdG8gZml0IHRoZSBvdXRlciBkaXYuXG4gIC8vIEZpbmFsbHkgdGhlIGltYWdlIGl0c2VsZiB3aWxsIGJlIDEwMCUgb2YgYSBwYXJlbnQgZGl2LiBPdXRlciBkaXYgaXNcbiAgLy8gc2V0IHdpdGggcG9zaXRpb24gcmVsYXRpdmUsIHNvIHdlIGNhbiBwbGFjZSBvdXIgY290cm9sIGJ1dHRvbnMgdXNpbmdcbiAgLy8gYWJzb2x1dGUgcG9zaXRpb25pbmcgb24gZWFjaCBzaWRlIG9mIHRoZSBpbWFnZS5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTIgZmxleCBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlbiBtZDp3LTEvMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICB7c2xpZGVyQ29udHJvbCh0cnVlKX1cbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4LXNocmluay0wXCIga2V5PXtpbWd9IHJlZj17cmVmc1tpXX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGNsYXNzTmFtZT1cInctZnVsbCBvYmplY3QtY29udGFpblwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7c2xpZGVyQ29udHJvbCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/carousel */ \"./components/carousel.js\");\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/andreasnotokusumo/React Project/moonlight_inn/pages/index.js\";\n\n\n\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col items-center justify-center min-h-screen bg-white\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Moonlight Inn - Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-col align-center justify-center min-w-full min-h-screen -mb-32 relative z-0 lg:flex-row lg:-mb-24 lg:justify-around lg:px-3\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"self-center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          className: \"font-header font-semibold text-4xl lg:text-5xl lg:text-left text-center\",\n          children: \"Moonlight Inn.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"font-body text-lg leading-8 pt-5 lg:leading-9 lg:text-xl lg:text-left text-center\",\n          children: [\"A curation of \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n            children: \" free, epic and definitely critical \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 122\n          }, this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 176\n          }, this), \" D&D resources for your next campaign.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"min-w-full hidden justify-center lg:justify-start lg:flex\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"bg-secondary hover:bg-red-800 text-white mt-6 font-semibold py-3.5 px-6 rounded shadow font-body\",\n            children: \"Discover 100+ resources\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"self-center pt-8 relative lg:hidden overflow-visible\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/mobile-landing.png\",\n          height: \"180px\",\n          width: \"550px\",\n          className: \"absolute z-0 animate__fadeIn\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"self-start hidden lg:block\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n          src: \"/landing.png\",\n          height: \"702px\",\n          width: \"600px\",\n          className: \"absolute mr-20 z-0 animate__fadeIn\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"px-8 py-0 top-0 -m-1 min-w-full bg-primary relative lg:py-10\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-w-full mt-4 mb-10 flex justify-center lg:justify-start lg:hidden\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"bg-secondary hover:bg-red-800 text-white mt-6 font-semibold py-3.5 px-6 rounded shadow font-body\",\n          children: \"Discover 100+ resources\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-2xl pb-2 font-header font-semibold\",\n        children: \"Featured Resources\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlFQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxlQUFTLEVBQUMsdUlBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyx5RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyxtRkFBYjtBQUFBLG9EQUErRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBL0csb0JBQXFLO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUssbUJBQVMsRUFBQywyREFBZjtBQUFBLGlDQUNFO0FBQVEscUJBQVMsRUFBQyxrR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUU7QUFBSyxpQkFBUyxFQUFDLHNEQUFmO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUMscUJBQVg7QUFBaUMsZ0JBQU0sRUFBQyxPQUF4QztBQUFnRCxlQUFLLEVBQUMsT0FBdEQ7QUFBOEQsbUJBQVMsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLGVBYUU7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUMsY0FBWDtBQUEwQixnQkFBTSxFQUFDLE9BQWpDO0FBQXlDLGVBQUssRUFBQyxPQUEvQztBQUF1RCxtQkFBUyxFQUFDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFzQkU7QUFBSyxlQUFTLEVBQUMsOERBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsc0VBQWY7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLEVBQUMsa0dBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBSSxpQkFBUyxFQUFDLHlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEO0tBbkN1QkEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJvdXNlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctd2hpdGVcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TW9vbmxpZ2h0IElubiAtIEhvbWU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi13LWZ1bGwgbWluLWgtc2NyZWVuIC1tYi0zMiByZWxhdGl2ZSB6LTAgbGc6ZmxleC1yb3cgbGc6LW1iLTI0IGxnOmp1c3RpZnktYXJvdW5kIGxnOnB4LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxmLWNlbnRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWhlYWRlciBmb250LXNlbWlib2xkIHRleHQtNHhsIGxnOnRleHQtNXhsIGxnOnRleHQtbGVmdCB0ZXh0LWNlbnRlclwiPk1vb25saWdodCBJbm4uPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvZHkgdGV4dC1sZyBsZWFkaW5nLTggcHQtNSBsZzpsZWFkaW5nLTkgbGc6dGV4dC14bCBsZzp0ZXh0LWxlZnQgdGV4dC1jZW50ZXJcIj5BIGN1cmF0aW9uIG9mIDxzdHJvbmc+IGZyZWUsIGVwaWMgYW5kIGRlZmluaXRlbHkgY3JpdGljYWwgPC9zdHJvbmc+IDxiciAvPiBEJkQgcmVzb3VyY2VzIGZvciB5b3VyIG5leHQgY2FtcGFpZ24uPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctZnVsbCBoaWRkZW4ganVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1zdGFydCBsZzpmbGV4XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBob3ZlcjpiZy1yZWQtODAwIHRleHQtd2hpdGUgbXQtNiBmb250LXNlbWlib2xkIHB5LTMuNSBweC02IHJvdW5kZWQgc2hhZG93IGZvbnQtYm9keVwiPlxuICAgICAgICAgICAgICBEaXNjb3ZlciAxMDArIHJlc291cmNlc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGYtY2VudGVyIHB0LTggcmVsYXRpdmUgbGc6aGlkZGVuIG92ZXJmbG93LXZpc2libGVcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL21vYmlsZS1sYW5kaW5nLnBuZ1wiIGhlaWdodD1cIjE4MHB4XCIgd2lkdGg9XCI1NTBweFwiIGNsYXNzTmFtZT1cImFic29sdXRlIHotMCBhbmltYXRlX19mYWRlSW5cIj48L0ltYWdlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxmLXN0YXJ0IGhpZGRlbiBsZzpibG9ja1wiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbGFuZGluZy5wbmdcIiBoZWlnaHQ9XCI3MDJweFwiIHdpZHRoPVwiNjAwcHhcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBtci0yMCB6LTAgYW5pbWF0ZV9fZmFkZUluXCI+PC9JbWFnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtOCBweS0wIHRvcC0wIC1tLTEgbWluLXctZnVsbCBiZy1wcmltYXJ5IHJlbGF0aXZlIGxnOnB5LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctZnVsbCBtdC00IG1iLTEwIGZsZXgganVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1zdGFydCBsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IGhvdmVyOmJnLXJlZC04MDAgdGV4dC13aGl0ZSBtdC02IGZvbnQtc2VtaWJvbGQgcHktMy41IHB4LTYgcm91bmRlZCBzaGFkb3cgZm9udC1ib2R5XCI+XG4gICAgICAgICAgICAgIERpc2NvdmVyIDEwMCsgcmVzb3VyY2VzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHBiLTIgZm9udC1oZWFkZXIgZm9udC1zZW1pYm9sZFwiPkZlYXR1cmVkIFJlc291cmNlczwvaDI+XG4gICAgICAgIDxDYXJvdXNlbC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});