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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyGroup; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MyGroupItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyGroupItem */ \"./components/MyGroupItem.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_management_slices_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state_management/slices/group */ \"./state_management/slices/group.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MyGroup() {\n    var _this = this;\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), latestCreated = ref1[0], setLatestCreated = ref1[1];\n    var ref2 = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractRead)({\n        address: \"0x5FbDB2315678afecb367f032d93F642f64180aa3\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"getAllGroup\",\n        isFetchedAfterMount: true\n    }), data = ref2.data, isLoading = ref2.isLoading, isSuccess = ref2.isSuccess;\n    (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractEvent)({\n        address: \"0x5FbDB2315678afecb367f032d93F642f64180aa3\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        eventName: \"NewGroupCreated\",\n        listener: function listener(log) {\n            console.log(\"Group created log\", log, log[0].args[0]);\n            // setTimeout(() => {\n            setLatestCreated((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(data ? data : []).concat([\n                log[0].args[0]\n            ]));\n        // }, 1000);\n        }\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (data) {\n            dispatch((0,_state_management_slices_group__WEBPACK_IMPORTED_MODULE_5__.updateGroup)(data));\n        }\n    }, [\n        data,\n        dispatch\n    ]);\n    console.log(data, isLoading, isSuccess);\n    // console.log([...(data ? data : []), ...(latestCreated ? latestCreated : [])]);\n    var finalSet = new Set((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(data ? data : []).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(latestCreated)));\n    console.log(\"final set\", (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(finalSet));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default().myGroup),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default().MyGroupItem),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Balance\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Person\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Status\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {}, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            (ref = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(finalSet)) === null || ref === void 0 ? void 0 : ref.map(function(x) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyGroupItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    address: x,\n                    children: \" \"\n                }, x, false, {\n                    fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(MyGroup, \"B7t205tXxpuez0H4NwsAZZ3A0pY=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractRead,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractEvent,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = MyGroup;\nvar _c;\n$RefreshReg$(_c, \"MyGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVEsR0FBRyxDQUFDLFNBQUNDLENBQUMsRUFBSztnQkFDekIscUJBQ0UsOERBQUMvQixvREFBVztvQkFBU00sT0FBTyxFQUFFeUIsQ0FBQzs4QkFDNUIsR0FBRzttQkFEWUEsQ0FBQzs7Ozt5QkFFTCxDQUNkO1lBQ0osQ0FBQyxDQUFDOzs7Ozs7WUFVRSxDQUNOO0FBQ0osQ0FBQztHQTlEdUI1QixPQUFPOztRQUVVVixrREFBZTtRQU90REQsbURBQWdCO1FBV0NTLG9EQUFXOzs7QUFwQk5FLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUdyb3VwLmpzeD9kNjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRyYWN0RXZlbnQsIHVzZUNvbnRyYWN0UmVhZCwgdXNlQ29udHJhY3RXcml0ZSB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvTXlHcm91cC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBncm91cF9hYmkgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNeUdyb3VwSXRlbSBmcm9tIFwiLi9NeUdyb3VwSXRlbVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVwZGF0ZUdyb3VwIH0gZnJvbSBcIi4uL3N0YXRlX21hbmFnZW1lbnQvc2xpY2VzL2dyb3VwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15R3JvdXAoKSB7XG4gIGNvbnN0IFtsYXRlc3RDcmVhdGVkLCBzZXRMYXRlc3RDcmVhdGVkXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzU3VjY2VzcyB9ID0gdXNlQ29udHJhY3RSZWFkKHtcbiAgICBhZGRyZXNzOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUk9VUF9DT05UUkFDVF9BRERSRVNTLFxuICAgIGFiaTogZ3JvdXBfYWJpLFxuICAgIGZ1bmN0aW9uTmFtZTogXCJnZXRBbGxHcm91cFwiLFxuICAgIGlzRmV0Y2hlZEFmdGVyTW91bnQ6IHRydWUsXG4gIH0pO1xuXG4gIHVzZUNvbnRyYWN0RXZlbnQoe1xuICAgIGFkZHJlc3M6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dST1VQX0NPTlRSQUNUX0FERFJFU1MsXG4gICAgYWJpOiBncm91cF9hYmksXG4gICAgZXZlbnROYW1lOiBcIk5ld0dyb3VwQ3JlYXRlZFwiLFxuICAgIGxpc3RlbmVyKGxvZykge1xuICAgICAgY29uc29sZS5sb2coXCJHcm91cCBjcmVhdGVkIGxvZ1wiLCBsb2csIGxvZ1swXS5hcmdzWzBdKTtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TGF0ZXN0Q3JlYXRlZChbLi4uKGRhdGEgPyBkYXRhIDogW10pLCBsb2dbMF0uYXJnc1swXV0pO1xuICAgICAgLy8gfSwgMTAwMCk7XG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVHcm91cChkYXRhKSk7XG4gICAgfVxuICB9LCBbZGF0YSwgZGlzcGF0Y2hdKTtcblxuICBjb25zb2xlLmxvZyhkYXRhLCBpc0xvYWRpbmcsIGlzU3VjY2Vzcyk7XG4gIC8vIGNvbnNvbGUubG9nKFsuLi4oZGF0YSA/IGRhdGEgOiBbXSksIC4uLihsYXRlc3RDcmVhdGVkID8gbGF0ZXN0Q3JlYXRlZCA6IFtdKV0pO1xuXG4gIGxldCBmaW5hbFNldCA9IG5ldyBTZXQoWy4uLihkYXRhID8gZGF0YSA6IFtdKSwgLi4ubGF0ZXN0Q3JlYXRlZF0pO1xuICBjb25zb2xlLmxvZyhcImZpbmFsIHNldFwiLCBbLi4uZmluYWxTZXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9e1N0eWxlcy5teUdyb3VwfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuTXlHcm91cEl0ZW19PlxuICAgICAgICA8aDQ+QWRkcmVzczwvaDQ+XG4gICAgICAgIDxoND5OYW1lPC9oND5cbiAgICAgICAgPGg0PkJhbGFuY2U8L2g0PlxuICAgICAgICA8aDQ+UGVyc29uPC9oND5cbiAgICAgICAgPGg0PlN0YXR1czwvaDQ+XG4gICAgICAgIDxoMz48L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICB7Wy4uLmZpbmFsU2V0XT8ubWFwKCh4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE15R3JvdXBJdGVtIGtleT17eH0gYWRkcmVzcz17eH0+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPC9NeUdyb3VwSXRlbT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgey8qIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzPXtTdHlsZXMubmFtZUlucHV0fVxuICAgICAgICBpZD1cIm5hbWUtaW5wdXRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIlxuICAgICAgLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZXMuY3JlYXRlQnV0dG9ufSBvbkNsaWNrPXtjcmVhdGVHcm91cH0+XG4gICAgICAgIENyZWF0ZVxuICAgICAgPC9idXR0b24+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRyYWN0RXZlbnQiLCJ1c2VDb250cmFjdFJlYWQiLCJ1c2VDb250cmFjdFdyaXRlIiwiU3R5bGVzIiwiZ3JvdXBfYWJpIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk15R3JvdXBJdGVtIiwidXNlRGlzcGF0Y2giLCJ1cGRhdGVHcm91cCIsIk15R3JvdXAiLCJsYXRlc3RDcmVhdGVkIiwic2V0TGF0ZXN0Q3JlYXRlZCIsImFkZHJlc3MiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR1JPVVBfQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsImZ1bmN0aW9uTmFtZSIsImlzRmV0Y2hlZEFmdGVyTW91bnQiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNTdWNjZXNzIiwiZXZlbnROYW1lIiwibGlzdGVuZXIiLCJsb2ciLCJjb25zb2xlIiwiYXJncyIsImRpc3BhdGNoIiwiZmluYWxTZXQiLCJTZXQiLCJkaXYiLCJjbGFzcyIsIm15R3JvdXAiLCJjbGFzc05hbWUiLCJoNCIsImgzIiwibWFwIiwieCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MyGroup.jsx\n"));

/***/ })

});