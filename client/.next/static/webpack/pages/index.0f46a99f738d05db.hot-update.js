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

/***/ "./components/MyGroup.jsx":
/*!********************************!*\
  !*** ./components/MyGroup.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyGroup() {\n    var _this = this;\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead)({\n        address: \"0x8A791620dd6260079BF849Dc5567aDC3F2FdC318\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"getAllGroup\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess;\n    var createGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        write({\n            args: [\n                \"Naushad\"\n            ]\n        });\n    });\n    console.log(data, isLoading, isSuccess);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().myGroup),\n        children: data === null || data === void 0 ? void 0 : data.map(function(x) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    \" \",\n                    x,\n                    \" \"\n                ]\n            }, x, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                lineNumber: 24,\n                columnNumber: 16\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(MyGroup, \"uL+byXFzsG6KxsdtsfddrwQR/qo=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead\n    ];\n});\n_c = MyGroup;\nvar _c;\n$RefreshReg$(_c, \"MyGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015R3JvdXAuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwRDtBQUNOO0FBQ2hCO0FBQ0E7QUFFckIsU0FBU0ssT0FBTyxHQUFHOzs7SUFDaEMsSUFBdUNMLEdBSXJDLEdBSnFDQSxzREFBZSxDQUFDO1FBQ3JETSxPQUFPLEVBQUUsNENBQTRDO1FBQ3JEQyxHQUFHLEVBQUVKLDRDQUFTO1FBQ2RLLFlBQVksRUFBRSxhQUFhO0tBQzVCLENBQUMsRUFKTUMsSUFBSSxHQUEyQlQsR0FJckMsQ0FKTVMsSUFBSSxFQUFFQyxTQUFTLEdBQWdCVixHQUlyQyxDQUpZVSxTQUFTLEVBQUVDLFNBQVMsR0FBS1gsR0FJckMsQ0FKdUJXLFNBQVM7SUFNbEMsSUFBTUMsV0FBVyxHQUFHUixrREFBVyxDQUFDLFdBQU07UUFDcENTLEtBQUssQ0FBQztZQUNKQyxJQUFJLEVBQUU7Z0JBQUMsU0FBUzthQUFDO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FBQyxDQUFDO0lBRXhDLHFCQUNFLDhEQUFDTSxLQUFHO1FBQUNDLEtBQUssRUFBRWhCLDJFQUFjO2tCQUN2Qk8sSUFBSSxhQUFKQSxJQUFJLFdBQUssR0FBVEEsS0FBQUEsQ0FBUyxHQUFUQSxJQUFJLENBQUVXLEdBQUcsQ0FBQyxTQUFDQyxDQUFDLEVBQUs7WUFDaEIscUJBQU8sOERBQUNDLElBQUU7O29CQUFTLEdBQUM7b0JBQUNELENBQUM7b0JBQUMsR0FBQzs7ZUFBUkEsQ0FBQzs7OztxQkFBWSxDQUFDO1FBQ2hDLENBQUMsQ0FBQzs7Ozs7WUFVRSxDQUNOO0FBQ0osQ0FBQztHQS9CdUJoQixPQUFPOztRQUNVTCxrREFBZTs7O0FBRGhDSyxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXlHcm91cC5qc3g/ZDYwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250cmFjdFJlYWQsIHVzZUNvbnRyYWN0V3JpdGUgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL015R3JvdXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ3JvdXBfYWJpIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15R3JvdXAoKSB7XG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MgfSA9IHVzZUNvbnRyYWN0UmVhZCh7XG4gICAgYWRkcmVzczogXCIweDhBNzkxNjIwZGQ2MjYwMDc5QkY4NDlEYzU1NjdhREMzRjJGZEMzMThcIixcbiAgICBhYmk6IGdyb3VwX2FiaSxcbiAgICBmdW5jdGlvbk5hbWU6IFwiZ2V0QWxsR3JvdXBcIixcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlR3JvdXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgd3JpdGUoe1xuICAgICAgYXJnczogW1wiTmF1c2hhZFwiXSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz17U3R5bGVzLm15R3JvdXB9PlxuICAgICAge2RhdGE/Lm1hcCgoeCkgPT4ge1xuICAgICAgICByZXR1cm4gPGg0IGtleT17eH0+IHt4fSA8L2g0PjtcbiAgICAgIH0pfVxuICAgICAgey8qIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzPXtTdHlsZXMubmFtZUlucHV0fVxuICAgICAgICBpZD1cIm5hbWUtaW5wdXRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIlxuICAgICAgLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZXMuY3JlYXRlQnV0dG9ufSBvbkNsaWNrPXtjcmVhdGVHcm91cH0+XG4gICAgICAgIENyZWF0ZVxuICAgICAgPC9idXR0b24+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRyYWN0UmVhZCIsInVzZUNvbnRyYWN0V3JpdGUiLCJTdHlsZXMiLCJncm91cF9hYmkiLCJ1c2VDYWxsYmFjayIsIk15R3JvdXAiLCJhZGRyZXNzIiwiYWJpIiwiZnVuY3Rpb25OYW1lIiwiZGF0YSIsImlzTG9hZGluZyIsImlzU3VjY2VzcyIsImNyZWF0ZUdyb3VwIiwid3JpdGUiLCJhcmdzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzIiwibXlHcm91cCIsIm1hcCIsIngiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MyGroup.jsx\n"));

/***/ })

});