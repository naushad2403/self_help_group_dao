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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MyGroupItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyGroupItem */ \"./components/MyGroupItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AllGroup() {\n    var _this = this;\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead)({\n        address: \"0x8A791620dd6260079BF849Dc5567aDC3F2FdC318\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"getAllGroup\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess;\n    var createGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        write({\n            args: [\n                \"Naushad\"\n            ]\n        });\n    });\n    console.log(data, isLoading, isSuccess);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().myGroup),\n        children: data === null || data === void 0 ? void 0 : data.map(function(x) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyGroupItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    \" \",\n                    x,\n                    \" \"\n                ]\n            }, x, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/AllGroup.jsx\",\n                lineNumber: 25,\n                columnNumber: 16\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/AllGroup.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(AllGroup, \"uL+byXFzsG6KxsdtsfddrwQR/qo=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead\n    ];\n});\n_c = AllGroup;\nvar _c;\n$RefreshReg$(_c, \"AllGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsbEdyb3VwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBEO0FBQ047QUFDaEI7QUFDQTtBQUNJO0FBRXpCLFNBQVNNLFFBQVEsR0FBRzs7O0lBQ2pDLElBQXVDTixHQUlyQyxHQUpxQ0Esc0RBQWUsQ0FBQztRQUNyRE8sT0FBTyxFQUFFLDRDQUE0QztRQUNyREMsR0FBRyxFQUFFTCw0Q0FBUztRQUNkTSxZQUFZLEVBQUUsYUFBYTtLQUM1QixDQUFDLEVBSk1DLElBQUksR0FBMkJWLEdBSXJDLENBSk1VLElBQUksRUFBRUMsU0FBUyxHQUFnQlgsR0FJckMsQ0FKWVcsU0FBUyxFQUFFQyxTQUFTLEdBQUtaLEdBSXJDLENBSnVCWSxTQUFTO0lBTWxDLElBQU1DLFdBQVcsR0FBR1Qsa0RBQVcsQ0FBQyxXQUFNO1FBQ3BDVSxLQUFLLENBQUM7WUFDSkMsSUFBSSxFQUFFO2dCQUFDLFNBQVM7YUFBQztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLENBQUMsQ0FBQztJQUV4QyxxQkFDRSw4REFBQ00sS0FBRztRQUFDQyxLQUFLLEVBQUVqQiwyRUFBYztrQkFDdkJRLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFVyxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFLO1lBQ2hCLHFCQUFPLDhEQUFDakIsb0RBQVc7O29CQUFTLEdBQUM7b0JBQUNpQixDQUFDO29CQUFDLEdBQUM7O2VBQVJBLENBQUM7Ozs7cUJBQXFCLENBQUM7UUFDbEQsQ0FBQyxDQUFDOzs7OztZQVVFLENBQ047QUFDSixDQUFDO0dBL0J1QmhCLFFBQVE7O1FBQ1NOLGtEQUFlOzs7QUFEaENNLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGxHcm91cC5qc3g/NmZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250cmFjdFJlYWQsIHVzZUNvbnRyYWN0V3JpdGUgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL015R3JvdXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ3JvdXBfYWJpIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTXlHcm91cEl0ZW0gZnJvbSBcIi4vTXlHcm91cEl0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsR3JvdXAoKSB7XG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MgfSA9IHVzZUNvbnRyYWN0UmVhZCh7XG4gICAgYWRkcmVzczogXCIweDhBNzkxNjIwZGQ2MjYwMDc5QkY4NDlEYzU1NjdhREMzRjJGZEMzMThcIixcbiAgICBhYmk6IGdyb3VwX2FiaSxcbiAgICBmdW5jdGlvbk5hbWU6IFwiZ2V0QWxsR3JvdXBcIixcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlR3JvdXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgd3JpdGUoe1xuICAgICAgYXJnczogW1wiTmF1c2hhZFwiXSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz17U3R5bGVzLm15R3JvdXB9PlxuICAgICAge2RhdGE/Lm1hcCgoeCkgPT4ge1xuICAgICAgICByZXR1cm4gPE15R3JvdXBJdGVtIGtleT17eH0+IHt4fSA8L015R3JvdXBJdGVtPjtcbiAgICAgIH0pfVxuICAgICAgey8qIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzPXtTdHlsZXMubmFtZUlucHV0fVxuICAgICAgICBpZD1cIm5hbWUtaW5wdXRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIlxuICAgICAgLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZXMuY3JlYXRlQnV0dG9ufSBvbkNsaWNrPXtjcmVhdGVHcm91cH0+XG4gICAgICAgIENyZWF0ZVxuICAgICAgPC9idXR0b24+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRyYWN0UmVhZCIsInVzZUNvbnRyYWN0V3JpdGUiLCJTdHlsZXMiLCJncm91cF9hYmkiLCJ1c2VDYWxsYmFjayIsIk15R3JvdXBJdGVtIiwiQWxsR3JvdXAiLCJhZGRyZXNzIiwiYWJpIiwiZnVuY3Rpb25OYW1lIiwiZGF0YSIsImlzTG9hZGluZyIsImlzU3VjY2VzcyIsImNyZWF0ZUdyb3VwIiwid3JpdGUiLCJhcmdzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzIiwibXlHcm91cCIsIm1hcCIsIngiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AllGroup.jsx\n"));

/***/ })

});