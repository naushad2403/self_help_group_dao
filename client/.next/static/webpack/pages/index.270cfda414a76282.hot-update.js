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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyGroupItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyGroupItem(param) {\n    var address = param.address;\n    _s();\n    // const { data, isLoading, isSuccess } = useContractRead({\n    //   address: add,\n    //   abi: group_abi,\n    //   functionName: ,\n    // });\n    // console.log(\"props\", props);\n    var createGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        write({\n            args: [\n                \"Naushad\"\n            ]\n        });\n    });\n    // console.log(data, isLoading, isSuccess);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_3___default().MyGroupItem),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"https://www.w3schools.com/${}\",\n            children: address.substr(-5)\n        }, void 0, false, {\n            fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(MyGroupItem, \"JbbPKcEpG1RSZsWEYH6a+hP0z6E=\");\n_c = MyGroupItem;\nvar _c;\n$RefreshReg$(_c, \"MyGroupItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015R3JvdXBJdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUEwRDtBQUNOO0FBQ2hCO0FBQ0E7QUFFckIsU0FBU0ssV0FBVyxDQUFDLEtBQVcsRUFBRTtRQUFiLE9BQVMsR0FBVCxLQUFXLENBQVRDLE9BQU87O0lBQzNDLDJEQUEyRDtJQUMzRCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixNQUFNO0lBRU4sK0JBQStCO0lBQy9CLElBQU1DLFdBQVcsR0FBR0gsa0RBQVcsQ0FBQyxXQUFNO1FBQ3BDSSxLQUFLLENBQUM7WUFDSkMsSUFBSSxFQUFFO2dCQUFDLFNBQVM7YUFBQztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFFRiwyQ0FBMkM7SUFFM0MscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFVCwrRUFBa0I7a0JBQ2hDLDRFQUFDVSxHQUFDO1lBQUNDLElBQUksRUFBQywrQkFBK0I7c0JBQUVQLE9BQU8sQ0FBQ1EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztnQkFBSzs7Ozs7WUFDNUQsQ0FDTjtBQUNKLENBQUM7R0FyQnVCVCxXQUFXO0FBQVhBLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUdyb3VwSXRlbS5qc3g/Mzc2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250cmFjdFJlYWQsIHVzZUNvbnRyYWN0V3JpdGUgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL015R3JvdXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ3JvdXBfYWJpIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15R3JvdXBJdGVtKHsgYWRkcmVzcyB9KSB7XG4gIC8vIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MgfSA9IHVzZUNvbnRyYWN0UmVhZCh7XG4gIC8vICAgYWRkcmVzczogYWRkLFxuICAvLyAgIGFiaTogZ3JvdXBfYWJpLFxuICAvLyAgIGZ1bmN0aW9uTmFtZTogLFxuICAvLyB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhcInByb3BzXCIsIHByb3BzKTtcbiAgY29uc3QgY3JlYXRlR3JvdXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgd3JpdGUoe1xuICAgICAgYXJnczogW1wiTmF1c2hhZFwiXSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5NeUdyb3VwSXRlbX0+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS8ke31cIj57YWRkcmVzcy5zdWJzdHIoLTUpfTwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250cmFjdFJlYWQiLCJ1c2VDb250cmFjdFdyaXRlIiwiU3R5bGVzIiwiZ3JvdXBfYWJpIiwidXNlQ2FsbGJhY2siLCJNeUdyb3VwSXRlbSIsImFkZHJlc3MiLCJjcmVhdGVHcm91cCIsIndyaXRlIiwiYXJncyIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwic3Vic3RyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MyGroupItem.jsx\n"));

/***/ })

});