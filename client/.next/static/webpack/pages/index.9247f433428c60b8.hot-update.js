"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AllGroup.jsx":
/*!*********************************!*\
  !*** ./components/AllGroup.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AllGroup() {\n    var _this = this;\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead)({\n        address: \"0x8A791620dd6260079BF849Dc5567aDC3F2FdC318\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"getAllGroup\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess;\n    var createGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        write({\n            args: [\n                \"Naushad\"\n            ]\n        });\n    });\n    console.log(data, isLoading, isSuccess);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().myGroup),\n        children: data === null || data === void 0 ? void 0 : data.map(function(x) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    \" \",\n                    x,\n                    \" \"\n                ]\n            }, x, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/AllGroup.jsx\",\n                lineNumber: 24,\n                columnNumber: 16\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/AllGroup.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(AllGroup, \"uL+byXFzsG6KxsdtsfddrwQR/qo=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead\n    ];\n});\n_c = AllGroup;\nvar _c;\n$RefreshReg$(_c, \"AllGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsbEdyb3VwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEQ7QUFDTjtBQUNoQjtBQUNBO0FBRXJCLFNBQVNLLFFBQVEsR0FBRzs7O0lBQ2pDLElBQXVDTCxHQUlyQyxHQUpxQ0Esc0RBQWUsQ0FBQztRQUNyRE0sT0FBTyxFQUFFLDRDQUE0QztRQUNyREMsR0FBRyxFQUFFSiw0Q0FBUztRQUNkSyxZQUFZLEVBQUUsYUFBYTtLQUM1QixDQUFDLEVBSk1DLElBQUksR0FBMkJULEdBSXJDLENBSk1TLElBQUksRUFBRUMsU0FBUyxHQUFnQlYsR0FJckMsQ0FKWVUsU0FBUyxFQUFFQyxTQUFTLEdBQUtYLEdBSXJDLENBSnVCVyxTQUFTO0lBTWxDLElBQU1DLFdBQVcsR0FBR1Isa0RBQVcsQ0FBQyxXQUFNO1FBQ3BDUyxLQUFLLENBQUM7WUFDSkMsSUFBSSxFQUFFO2dCQUFDLFNBQVM7YUFBQztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLENBQUMsQ0FBQztJQUV4QyxxQkFDRSw4REFBQ00sS0FBRztRQUFDQyxLQUFLLEVBQUVoQiwyRUFBYztrQkFDdkJPLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFVyxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFLO1lBQ2hCLHFCQUFPLDhEQUFDQyxJQUFFOztvQkFBUyxHQUFDO29CQUFDRCxDQUFDO29CQUFDLEdBQUM7O2VBQVJBLENBQUM7Ozs7cUJBQVksQ0FBQztRQUNoQyxDQUFDLENBQUM7Ozs7O1lBVUUsQ0FDTjtBQUNKLENBQUM7R0EvQnVCaEIsUUFBUTs7UUFDU0wsa0RBQWU7OztBQURoQ0ssS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FsbEdyb3VwLmpzeD82ZmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRyYWN0UmVhZCwgdXNlQ29udHJhY3RXcml0ZSB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvTXlHcm91cC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBncm91cF9hYmkgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsR3JvdXAoKSB7XG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MgfSA9IHVzZUNvbnRyYWN0UmVhZCh7XG4gICAgYWRkcmVzczogXCIweDhBNzkxNjIwZGQ2MjYwMDc5QkY4NDlEYzU1NjdhREMzRjJGZEMzMThcIixcbiAgICBhYmk6IGdyb3VwX2FiaSxcbiAgICBmdW5jdGlvbk5hbWU6IFwiZ2V0QWxsR3JvdXBcIixcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlR3JvdXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgd3JpdGUoe1xuICAgICAgYXJnczogW1wiTmF1c2hhZFwiXSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz17U3R5bGVzLm15R3JvdXB9PlxuICAgICAge2RhdGE/Lm1hcCgoeCkgPT4ge1xuICAgICAgICByZXR1cm4gPGg0IGtleT17eH0+IHt4fSA8L2g0PjtcbiAgICAgIH0pfVxuICAgICAgey8qIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzPXtTdHlsZXMubmFtZUlucHV0fVxuICAgICAgICBpZD1cIm5hbWUtaW5wdXRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIlxuICAgICAgLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZXMuY3JlYXRlQnV0dG9ufSBvbkNsaWNrPXtjcmVhdGVHcm91cH0+XG4gICAgICAgIENyZWF0ZVxuICAgICAgPC9idXR0b24+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRyYWN0UmVhZCIsInVzZUNvbnRyYWN0V3JpdGUiLCJTdHlsZXMiLCJncm91cF9hYmkiLCJ1c2VDYWxsYmFjayIsIkFsbEdyb3VwIiwiYWRkcmVzcyIsImFiaSIsImZ1bmN0aW9uTmFtZSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJjcmVhdGVHcm91cCIsIndyaXRlIiwiYXJncyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzcyIsIm15R3JvdXAiLCJtYXAiLCJ4IiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AllGroup.jsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_CreateGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CreateGroup */ \"./components/CreateGroup.jsx\");\n/* harmony import */ var _components_MyGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyGroup */ \"./components/MyGroup.jsx\");\n/* harmony import */ var _components_AllGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AllGroup */ \"./components/AllGroup.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"RainbowKit App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        content: \"Generated by @rainbow-me/create-rainbowkit\",\n                        name: \"description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"/favicon.ico\",\n                        rel: \"icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().navigation),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().wallet),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.ConnectButton, {}, void 0, false, {\n                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().group), \" \").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().createGroup)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" Create Group\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateGroup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().group),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" My Group\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().group),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" All Group\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AllGroup__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUQ7QUFFMUI7QUFDa0I7QUFDSztBQUNSO0FBQ0U7QUFFOUMsSUFBTU0sSUFBSSxHQUFhLFdBQU07SUFDM0IscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ0Qsa0RBQUk7O2tDQUNILDhEQUFDUyxPQUFLO2tDQUFDLGdCQUFjOzs7Ozs2QkFBUTtrQ0FDN0IsOERBQUNDLE1BQUk7d0JBQ0hDLE9BQU8sRUFBQyw0Q0FBNEM7d0JBQ3BEQyxJQUFJLEVBQUMsYUFBYTs7Ozs7NkJBQ2xCO2tDQUNGLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07Ozs7OzZCQUFHOzs7Ozs7cUJBQ2xDOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDVCxTQUFTLEVBQUVOLHFFQUFXOztrQ0FDMUIsOERBQUNLLEtBQUc7d0JBQUNDLFNBQVMsRUFBRU4sMkVBQWlCO2tDQUMvQiw0RUFBQ0ssS0FBRzs0QkFBQ0MsU0FBUyxFQUFFTix1RUFBYTtzQ0FDM0IsNEVBQUNGLGlFQUFhOzs7O3FDQUFHOzs7OztpQ0FDYjs7Ozs7NkJBQ0Y7a0NBQ04sOERBQUNPLEtBQUc7d0JBQUNDLFNBQVMsRUFBRSxFQUFDLENBQWtCTixNQUFrQixDQUFsQ0Esc0VBQVksRUFBQyxHQUFDLENBQXFCLFFBQW5CQSw0RUFBa0IsQ0FBRTs7MENBQ3JELDhEQUFDb0IsSUFBRTswQ0FBQyxlQUFhOzs7OztxQ0FBSzswQ0FDdEIsOERBQUNuQiwrREFBVzs7OztxQ0FBZTs7Ozs7OzZCQUN2QjtrQ0FDTiw4REFBQ0ksS0FBRzt3QkFBQ0MsU0FBUyxFQUFFTixzRUFBWTs7MENBQzFCLDhEQUFDb0IsSUFBRTswQ0FBQyxXQUFTOzs7OztxQ0FBSzswQ0FDbEIsOERBQUNsQiwyREFBTzs7OztxQ0FBVzs7Ozs7OzZCQUNmO2tDQUNOLDhEQUFDRyxLQUFHO3dCQUFDQyxTQUFTLEVBQUVOLHNFQUFZOzswQ0FDMUIsOERBQUNvQixJQUFFOzBDQUFDLFlBQVU7Ozs7O3FDQUFLOzBDQUNuQiw4REFBQ2pCLDREQUFROzs7O3FDQUFZOzs7Ozs7NkJBQ2pCOzs7Ozs7cUJBc0REOzs7Ozs7YUFPSCxDQUNOO0FBQ0osQ0FBQztBQTVGS0MsS0FBQUEsSUFBSTtBQThGViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IENyZWF0ZUdyb3VwIGZyb20gXCIuLi9jb21wb25lbnRzL0NyZWF0ZUdyb3VwXCI7XG5pbXBvcnQgTXlHcm91cCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUdyb3VwXCI7XG5pbXBvcnQgQWxsR3JvdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWxsR3JvdXBcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SYWluYm93S2l0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgY29udGVudD1cIkdlbmVyYXRlZCBieSBAcmFpbmJvdy1tZS9jcmVhdGUtcmFpbmJvd2tpdFwiXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9mYXZpY29uLmljb1wiIHJlbD1cImljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9ufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhbGxldH0+XG4gICAgICAgICAgICA8Q29ubmVjdEJ1dHRvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ncm91cH0gJHtzdHlsZXMuY3JlYXRlR3JvdXB9YH0+XG4gICAgICAgICAgPGgyPiBDcmVhdGUgR3JvdXA8L2gyPlxuICAgICAgICAgIDxDcmVhdGVHcm91cD48L0NyZWF0ZUdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncm91cH0+XG4gICAgICAgICAgPGgyPiBNeSBHcm91cDwvaDI+XG4gICAgICAgICAgPE15R3JvdXA+PC9NeUdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncm91cH0+XG4gICAgICAgICAgPGgyPiBBbGwgR3JvdXA8L2gyPlxuICAgICAgICAgIDxBbGxHcm91cD48L0FsbEdyb3VwPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCJcIj5SYWluYm93S2l0PC9hPiArIDxhIGhyZWY9XCJcIj53YWdtaTwvYT4gK3snICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5neycgJ31cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5wYWdlcy9pbmRleC50c3g8L2NvZGU+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IGhyZWY9XCJodHRwczovL3JhaW5ib3draXQuY29tXCI+XG4gICAgICAgICAgICA8aDI+UmFpbmJvd0tpdCBEb2N1bWVudGF0aW9uICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5MZWFybiBob3cgdG8gY3VzdG9taXplIHlvdXIgd2FsbGV0IGNvbm5lY3Rpb24gZmxvdy48L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gaHJlZj1cImh0dHBzOi8vd2FnbWkuc2hcIj5cbiAgICAgICAgICAgIDxoMj53YWdtaSBEb2N1bWVudGF0aW9uICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5MZWFybiBob3cgdG8gaW50ZXJhY3Qgd2l0aCBFdGhlcmV1bS48L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JhaW5ib3ctbWUvcmFpbmJvd2tpdC90cmVlL21haW4vZXhhbXBsZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5SYWluYm93S2l0IEV4YW1wbGVzICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5EaXNjb3ZlciBib2lsZXJwbGF0ZSBleGFtcGxlIFJhaW5ib3dLaXQgcHJvamVjdHMuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jc1wiPlxuICAgICAgICAgICAgPGgyPk5leHQuanMgRG9jdW1lbnRhdGlvbiAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyPk5leHQuanMgRXhhbXBsZXMgJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vbmV3P3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+RGVwbG95ICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L21haW4+XG4gICAgICB7LyogXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JhaW5ib3cubWVcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgTWFkZSB3aXRoIOKdpO+4jyBieSB5b3VyIGZyZW5zIGF0IPCfjIhcbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJDb25uZWN0QnV0dG9uIiwiSGVhZCIsInN0eWxlcyIsIkNyZWF0ZUdyb3VwIiwiTXlHcm91cCIsIkFsbEdyb3VwIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJuYW1lIiwibGluayIsImhyZWYiLCJyZWwiLCJtYWluIiwibmF2aWdhdGlvbiIsIndhbGxldCIsImdyb3VwIiwiY3JlYXRlR3JvdXAiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});