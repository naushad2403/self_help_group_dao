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

/***/ "./components/MyGroupItem.jsx":
/*!************************************!*\
  !*** ./components/MyGroupItem.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyGroupItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyGroupItem(param) {\n    var address = param.address;\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead)({\n        address: address,\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.shg_abi,\n        functionName: \"name\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess;\n    // console.log(\"props\", props);\n    var createGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        write({\n            args: [\n                \"Naushad\"\n            ]\n        });\n    });\n    console.log(data, isLoading, isSuccess);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().MyGroupItem),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"https://www.w3schools.com/${}\",\n                children: \"Address: ...\" + address.substr(-5)\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Name: Naushad\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Balace: 10\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Persons: 100\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \" Withdraw money\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \" View/Submit proposals\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(MyGroupItem, \"uL+byXFzsG6KxsdtsfddrwQR/qo=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead\n    ];\n});\n_c = MyGroupItem;\nvar _c;\n$RefreshReg$(_c, \"MyGroupItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015R3JvdXBJdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEQ7QUFDTjtBQUNsQjtBQUNFO0FBRXJCLFNBQVNLLFdBQVcsQ0FBQyxLQUFXLEVBQUU7UUFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPOztJQUMzQyxJQUF1Q04sR0FJckMsR0FKcUNBLHNEQUFlLENBQUM7UUFDckRNLE9BQU8sRUFBRUEsT0FBTztRQUNoQkMsR0FBRyxFQUFFSiwwQ0FBTztRQUNaSyxZQUFZLEVBQUUsTUFBTTtLQUNyQixDQUFDLEVBSk1DLElBQUksR0FBMkJULEdBSXJDLENBSk1TLElBQUksRUFBRUMsU0FBUyxHQUFnQlYsR0FJckMsQ0FKWVUsU0FBUyxFQUFFQyxTQUFTLEdBQUtYLEdBSXJDLENBSnVCVyxTQUFTO0lBTWxDLCtCQUErQjtJQUMvQixJQUFNQyxXQUFXLEdBQUdSLGtEQUFXLENBQUMsV0FBTTtRQUNwQ1MsS0FBSyxDQUFDO1lBQ0pDLElBQUksRUFBRTtnQkFBQyxTQUFTO2FBQUM7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxDQUFDLENBQUM7SUFFeEMscUJBQ0UsOERBQUNNLEtBQUc7UUFBQ0MsU0FBUyxFQUFFaEIsK0VBQWtCOzswQkFDaEMsOERBQUNpQixHQUFDO2dCQUFDQyxJQUFJLEVBQUMsK0JBQStCOzBCQUNwQyxjQUFjLEdBQUdkLE9BQU8sQ0FBQ2UsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztvQkFDbEM7MEJBQ0osOERBQUNDLEdBQUM7MEJBQUMsZUFBYTs7Ozs7b0JBQUk7MEJBQ3BCLDhEQUFDQSxHQUFDOzBCQUFDLFlBQVU7Ozs7O29CQUFJOzBCQUNqQiw4REFBQ0EsR0FBQzswQkFBQyxjQUFZOzs7OztvQkFBSTswQkFDbkIsOERBQUNDLFFBQU07MEJBQUMsaUJBQWU7Ozs7O29CQUFTOzBCQUNoQyw4REFBQ0EsUUFBTTswQkFBQyx3QkFBc0I7Ozs7O29CQUFTOzs7Ozs7WUFDbkMsQ0FDTjtBQUNKLENBQUM7R0E1QnVCbEIsV0FBVzs7UUFDTUwsa0RBQWU7OztBQURoQ0ssS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL015R3JvdXBJdGVtLmpzeD8zNzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRyYWN0UmVhZCwgdXNlQ29udHJhY3RXcml0ZSB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvTXlHcm91cC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBzaGdfYWJpIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15R3JvdXBJdGVtKHsgYWRkcmVzcyB9KSB7XG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MgfSA9IHVzZUNvbnRyYWN0UmVhZCh7XG4gICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICBhYmk6IHNoZ19hYmksXG4gICAgZnVuY3Rpb25OYW1lOiBcIm5hbWVcIixcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJwcm9wc1wiLCBwcm9wcyk7XG4gIGNvbnN0IGNyZWF0ZUdyb3VwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHdyaXRlKHtcbiAgICAgIGFyZ3M6IFtcIk5hdXNoYWRcIl0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEsIGlzTG9hZGluZywgaXNTdWNjZXNzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuTXlHcm91cEl0ZW19PlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vJHt9XCI+XG4gICAgICAgIHtcIkFkZHJlc3M6IC4uLlwiICsgYWRkcmVzcy5zdWJzdHIoLTUpfVxuICAgICAgPC9hPlxuICAgICAgPHA+TmFtZTogTmF1c2hhZDwvcD5cbiAgICAgIDxwPkJhbGFjZTogMTA8L3A+XG4gICAgICA8cD5QZXJzb25zOiAxMDA8L3A+XG4gICAgICA8YnV0dG9uPiBXaXRoZHJhdyBtb25leTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbj4gVmlldy9TdWJtaXQgcHJvcG9zYWxzPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3RSZWFkIiwidXNlQ29udHJhY3RXcml0ZSIsIlN0eWxlcyIsInNoZ19hYmkiLCJ1c2VDYWxsYmFjayIsIk15R3JvdXBJdGVtIiwiYWRkcmVzcyIsImFiaSIsImZ1bmN0aW9uTmFtZSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJjcmVhdGVHcm91cCIsIndyaXRlIiwiYXJncyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsInN1YnN0ciIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MyGroupItem.jsx\n"));

/***/ })

});