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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andreasnotokusumo/React Project/moonlight_inn/components/carousel.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Carousel = function Carousel(_ref) {\n  _s();\n\n  var resources = _ref.resources;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      currentImage = _useState[0],\n      setCurrentImage = _useState[1];\n\n  var refs = resources.reduce(function (acc, val, i) {\n    acc[i] = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n    return acc;\n  }, {});\n\n  var scrollToImage = function scrollToImage(i) {\n    setCurrentImage(i);\n    refs[i].current.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"nearest\",\n      inline: \"start\"\n    });\n  };\n\n  var totalImages = resources.length;\n\n  var nextImage = function nextImage() {\n    if (currentImage >= totalImages - 1) {\n      scrollToImage(0);\n    } else {\n      scrollToImage(currentImage + 1);\n    }\n  };\n\n  var previousImage = function previousImage() {\n    if (currentImage === 0) {\n      scrollToImage(totalImages - 1);\n    } else {\n      scrollToImage(currentImage - 1);\n    }\n  };\n\n  var arrowStyle = \"absolute text-2xl z-10 h-10 w-10 flex items-center justify-center\";\n\n  var sliderControl = function sliderControl(isLeft) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: isLeft ? previousImage : nextImage,\n      className: \"\".concat(arrowStyle, \" \").concat(isLeft ? \"left-2\" : \"right-2\"),\n      style: {\n        top: \"40%\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        role: \"img\",\n        \"aria-label\": \"Arrow \".concat(isLeft ? \"left\" : \"right\"),\n        children: isLeft ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsChevronLeft, {\n          style: {\n            color: \"black\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsChevronRight, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"px-12 pt-8 pb-20 flex justify-center items-center w-screen bg-blue-200\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex justify-center align-bottom w-3/4 bg-green-300\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carousel\",\n        children: [sliderControl(true), resources.map(function (img, i) {\n          console.log(resources[0].fields.slug);\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-shrink-0 w-full self-center px-0 pt-4 lg:px-24 bg-red-600\",\n            ref: refs[i],\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: \"flex justify-end align-center lg:justify-start bg-blue-200\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"https:\" + resources[0].fields[\"thumbnail\"].fields.file.url,\n                width: resources[0].fields[\"thumbnail\"].fields.file.details.image.width + 50,\n                height: resources[i].fields[\"thumbnail\"].fields.file.details.image.height + 50\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden pl-0 lg:flex\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: \"flex-column justify-center align-middle max-w-3xl pl-20\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl text-black font-semibold font-header pb-4\",\n                    children: resources[i].fields[\"title\"]\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 92,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-1.5 px-0.5 mb-6 bg-tertiary w-24 flex justify-center rounded-sm\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                      className: \"text-sm font-semibold font-heading\",\n                      children: \"Favorite\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 96,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 95,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-md text-black font-body hidden lg:flex align-center break-words\",\n                    children: (0,_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__.documentToReactComponents)(resources[i].fields[\"resourceDetails\"])\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 100,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-secondary hover:bg-red-800 text-white mt-6 py-2 px-4 rounded shadow font-body\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                      href: \"resources/\" + resources[i].fields.slug,\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm\",\n                        children: \"Read more\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 105,\n                        columnNumber: 27\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 104,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 103,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 91,\n                  columnNumber: 21\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 17\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, _this);\n        }), sliderControl()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Carousel, \"cnc9rbhP80fTHOrqNEzwhjBY+h0=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcz81ODMyIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwicmVzb3VyY2VzIiwidXNlU3RhdGUiLCJjdXJyZW50SW1hZ2UiLCJzZXRDdXJyZW50SW1hZ2UiLCJyZWZzIiwicmVkdWNlIiwiYWNjIiwidmFsIiwiaSIsImNyZWF0ZVJlZiIsInNjcm9sbFRvSW1hZ2UiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwidG90YWxJbWFnZXMiLCJsZW5ndGgiLCJuZXh0SW1hZ2UiLCJwcmV2aW91c0ltYWdlIiwiYXJyb3dTdHlsZSIsInNsaWRlckNvbnRyb2wiLCJpc0xlZnQiLCJ0b3AiLCJjb2xvciIsIm1hcCIsImltZyIsImNvbnNvbGUiLCJsb2ciLCJmaWVsZHMiLCJzbHVnIiwiZmlsZSIsInVybCIsImRldGFpbHMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsa0JBQ01DLCtDQUFRLENBQUMsQ0FBRCxDQURkO0FBQUEsTUFDM0JDLFlBRDJCO0FBQUEsTUFDYkMsZUFEYTs7QUFHbEMsTUFBTUMsSUFBSSxHQUFHSixTQUFTLENBQUNLLE1BQVYsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLENBQVgsRUFBaUI7QUFDN0NGLE9BQUcsQ0FBQ0UsQ0FBRCxDQUFILGdCQUFTQyxnREFBUyxFQUFsQjtBQUNBLFdBQU9ILEdBQVA7QUFDRCxHQUhZLEVBR1YsRUFIVSxDQUFiOztBQUtBLE1BQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0YsQ0FBRCxFQUFPO0FBQzNCTCxtQkFBZSxDQUFDSyxDQUFELENBQWY7QUFFQUosUUFBSSxDQUFDSSxDQUFELENBQUosQ0FBUUcsT0FBUixDQUFnQkMsY0FBaEIsQ0FBK0I7QUFDN0JDLGNBQVEsRUFBRSxRQURtQjtBQUc3QkMsV0FBSyxFQUFFLFNBSHNCO0FBSzdCQyxZQUFNLEVBQUU7QUFMcUIsS0FBL0I7QUFPRCxHQVZEOztBQVlBLE1BQU1DLFdBQVcsR0FBR2hCLFNBQVMsQ0FBQ2lCLE1BQTlCOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBSWhCLFlBQVksSUFBSWMsV0FBVyxHQUFHLENBQWxDLEVBQXFDO0FBQ25DTixtQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNELEtBRkQsTUFFTztBQUNMQSxtQkFBYSxDQUFDUixZQUFZLEdBQUcsQ0FBaEIsQ0FBYjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNaUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQUlqQixZQUFZLEtBQUssQ0FBckIsRUFBd0I7QUFDdEJRLG1CQUFhLENBQUNNLFdBQVcsR0FBRyxDQUFmLENBQWI7QUFDRCxLQUZELE1BRU87QUFDTE4sbUJBQWEsQ0FBQ1IsWUFBWSxHQUFHLENBQWhCLENBQWI7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTWtCLFVBQVUsR0FDZCxtRUFERjs7QUFHQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLE1BQUQ7QUFBQSx3QkFDcEI7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGFBQU8sRUFBRUEsTUFBTSxHQUFHSCxhQUFILEdBQW1CRCxTQUZwQztBQUdFLGVBQVMsWUFBS0UsVUFBTCxjQUFtQkUsTUFBTSxHQUFHLFFBQUgsR0FBYyxTQUF2QyxDQUhYO0FBSUUsV0FBSyxFQUFFO0FBQUVDLFdBQUcsRUFBRTtBQUFQLE9BSlQ7QUFBQSw2QkFNRTtBQUFNLFlBQUksRUFBQyxLQUFYO0FBQWlCLHNDQUFxQkQsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQUF2QyxDQUFqQjtBQUFBLGtCQUNHQSxNQUFNLGdCQUNMLDhEQUFDLHlEQUFEO0FBQWUsZUFBSyxFQUFFO0FBQUVFLGlCQUFLLEVBQUU7QUFBVDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLGdCQUdMLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURvQjtBQUFBLEdBQXRCOztBQWlCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx3RUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHFEQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxtQkFDR0gsYUFBYSxDQUFDLElBQUQsQ0FEaEIsRUFFR3JCLFNBQVMsQ0FBQ3lCLEdBQVYsQ0FBYyxVQUFDQyxHQUFELEVBQU1sQixDQUFOLEVBQVk7QUFDekJtQixpQkFBTyxDQUFDQyxHQUFSLENBQVk1QixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWE2QixNQUFiLENBQW9CQyxJQUFoQztBQUNBLDhCQUNFO0FBQ0UscUJBQVMsRUFBQyxnRUFEWjtBQUdFLGVBQUcsRUFBRTFCLElBQUksQ0FBQ0ksQ0FBRCxDQUhYO0FBQUEsbUNBS0U7QUFBTSx1QkFBUyxFQUFDLDREQUFoQjtBQUFBLHNDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsbUJBQUcsRUFDRCxXQUFXUixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWE2QixNQUFiLENBQW9CLFdBQXBCLEVBQWlDQSxNQUFqQyxDQUF3Q0UsSUFBeEMsQ0FBNkNDLEdBRjVEO0FBSUUscUJBQUssRUFDSGhDLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYTZCLE1BQWIsQ0FBb0IsV0FBcEIsRUFBaUNBLE1BQWpDLENBQXdDRSxJQUF4QyxDQUE2Q0UsT0FBN0MsQ0FBcURDLEtBQXJELENBQTJEQyxLQUEzRCxHQUFtRSxFQUx2RTtBQU9FLHNCQUFNLEVBQ0puQyxTQUFTLENBQUNRLENBQUQsQ0FBVCxDQUFhcUIsTUFBYixDQUFvQixXQUFwQixFQUFpQ0EsTUFBakMsQ0FBd0NFLElBQXhDLENBQTZDRSxPQUE3QyxDQUFxREMsS0FBckQsQ0FBMkRFLE1BQTNELEdBQW9FO0FBUnhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFZRTtBQUFLLHlCQUFTLEVBQUMscUJBQWY7QUFBQSx1Q0FDRTtBQUFLLDJCQUFTLEVBQUMseURBQWY7QUFBQSwwQ0FDRTtBQUFJLDZCQUFTLEVBQUMsb0RBQWQ7QUFBQSw4QkFDR3BDLFNBQVMsQ0FBQ1EsQ0FBRCxDQUFULENBQWFxQixNQUFiLENBQW9CLE9BQXBCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUlFO0FBQUssNkJBQVMsRUFBQyxvRUFBZjtBQUFBLDJDQUNFO0FBQUcsK0JBQVMsRUFBQyxvQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkYsZUFTRTtBQUFHLDZCQUFTLEVBQUMsc0VBQWI7QUFBQSw4QkFDR1EsK0ZBQXlCLENBQUNyQyxTQUFTLENBQUNRLENBQUQsQ0FBVCxDQUFhcUIsTUFBYixDQUFvQixpQkFBcEIsQ0FBRDtBQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVRGLGVBWUU7QUFBUSw2QkFBUyxFQUFDLGtGQUFsQjtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBRSxlQUFlN0IsU0FBUyxDQUFDUSxDQUFELENBQVQsQ0FBYXFCLE1BQWIsQ0FBb0JDLElBQS9DO0FBQUEsNkNBQ0U7QUFBRyxpQ0FBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGLGFBRU90QixDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUF5Q0QsU0EzQ0EsQ0FGSCxFQThDR2EsYUFBYSxFQTlDaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNERCxDQWhIRDs7R0FBTXRCLFE7O0tBQUFBLFE7QUFrSE4sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBCc0NoZXZyb25SaWdodCwgQnNDaGV2cm9uTGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyB9IGZyb20gXCJAY29udGVudGZ1bC9yaWNoLXRleHQtcmVhY3QtcmVuZGVyZXJcIjtcblxuY29uc3QgQ2Fyb3VzZWwgPSAoeyByZXNvdXJjZXMgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudEltYWdlLCBzZXRDdXJyZW50SW1hZ2VdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgcmVmcyA9IHJlc291cmNlcy5yZWR1Y2UoKGFjYywgdmFsLCBpKSA9PiB7XG4gICAgYWNjW2ldID0gY3JlYXRlUmVmKCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIGNvbnN0IHNjcm9sbFRvSW1hZ2UgPSAoaSkgPT4ge1xuICAgIHNldEN1cnJlbnRJbWFnZShpKTtcblxuICAgIHJlZnNbaV0uY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcblxuICAgICAgYmxvY2s6IFwibmVhcmVzdFwiLFxuXG4gICAgICBpbmxpbmU6IFwic3RhcnRcIixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b3RhbEltYWdlcyA9IHJlc291cmNlcy5sZW5ndGg7XG5cbiAgY29uc3QgbmV4dEltYWdlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50SW1hZ2UgPj0gdG90YWxJbWFnZXMgLSAxKSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxUb0ltYWdlKGN1cnJlbnRJbWFnZSArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmV2aW91c0ltYWdlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50SW1hZ2UgPT09IDApIHtcbiAgICAgIHNjcm9sbFRvSW1hZ2UodG90YWxJbWFnZXMgLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVG9JbWFnZShjdXJyZW50SW1hZ2UgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXJyb3dTdHlsZSA9XG4gICAgXCJhYnNvbHV0ZSB0ZXh0LTJ4bCB6LTEwIGgtMTAgdy0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiO1xuXG4gIGNvbnN0IHNsaWRlckNvbnRyb2wgPSAoaXNMZWZ0KSA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXtpc0xlZnQgPyBwcmV2aW91c0ltYWdlIDogbmV4dEltYWdlfVxuICAgICAgY2xhc3NOYW1lPXtgJHthcnJvd1N0eWxlfSAke2lzTGVmdCA/IFwibGVmdC0yXCIgOiBcInJpZ2h0LTJcIn1gfVxuICAgICAgc3R5bGU9e3sgdG9wOiBcIjQwJVwiIH19XG4gICAgPlxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9e2BBcnJvdyAke2lzTGVmdCA/IFwibGVmdFwiIDogXCJyaWdodFwifWB9PlxuICAgICAgICB7aXNMZWZ0ID8gKFxuICAgICAgICAgIDxCc0NoZXZyb25MZWZ0IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QnNDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTIgcHQtOCBwYi0yMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LXNjcmVlbiBiZy1ibHVlLTIwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWJvdHRvbSB3LTMvNCBiZy1ncmVlbi0zMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgIHtzbGlkZXJDb250cm9sKHRydWUpfVxuICAgICAgICAgIHtyZXNvdXJjZXMubWFwKChpbWcsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc291cmNlc1swXS5maWVsZHMuc2x1Zyk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LWZ1bGwgc2VsZi1jZW50ZXIgcHgtMCBwdC00IGxnOnB4LTI0IGJnLXJlZC02MDBcIlxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICByZWY9e3JlZnNbaV19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGFsaWduLWNlbnRlciBsZzpqdXN0aWZ5LXN0YXJ0IGJnLWJsdWUtMjAwXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOlwiICsgcmVzb3VyY2VzWzBdLmZpZWxkc1tcInRodW1ibmFpbFwiXS5maWVsZHMuZmlsZS51cmxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzWzBdLmZpZWxkc1tcInRodW1ibmFpbFwiXS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRoICsgNTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1xuICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlc1tpXS5maWVsZHNbXCJ0aHVtYm5haWxcIl0uZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS5oZWlnaHQgKyA1MFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gcGwtMCBsZzpmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW4ganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIG1heC13LTN4bCBwbC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkZXIgcGItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jlc291cmNlc1tpXS5maWVsZHNbXCJ0aXRsZVwiXX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMS41IHB4LTAuNSBtYi02IGJnLXRlcnRpYXJ5IHctMjQgZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZhdm9yaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWJsYWNrIGZvbnQtYm9keSBoaWRkZW4gbGc6ZmxleCBhbGlnbi1jZW50ZXIgYnJlYWstd29yZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKHJlc291cmNlc1tpXS5maWVsZHNbXCJyZXNvdXJjZURldGFpbHNcIl0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBob3ZlcjpiZy1yZWQtODAwIHRleHQtd2hpdGUgbXQtNiBweS0yIHB4LTQgcm91bmRlZCBzaGFkb3cgZm9udC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcInJlc291cmNlcy9cIiArIHJlc291cmNlc1tpXS5maWVsZHMuc2x1Z30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5SZWFkIG1vcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAge3NsaWRlckNvbnRyb2woKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ })

});