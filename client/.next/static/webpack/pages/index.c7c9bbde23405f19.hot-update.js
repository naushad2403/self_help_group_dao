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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyGroupItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyGroupItem(param) {\n    var address = param.address;\n    var ref, ref1;\n    _s();\n    var nameInfo = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead)({\n        address: address,\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.shg_abi,\n        functionName: \"name\"\n    });\n    var balanceInfo = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useBalance)({\n        address: address\n    });\n    console.log(nameInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().MyGroupItem),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"https://www.w3schools.com/${}\",\n                children: \"Address: ...\" + address.substr(-5)\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Name: \",\n                    nameInfo === null || nameInfo === void 0 ? void 0 : nameInfo.data\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    \"Balance: \",\n                    balanceInfo === null || balanceInfo === void 0 ? void 0 : (ref = balanceInfo.data) === null || ref === void 0 ? void 0 : ref.formatted,\n                    \" \",\n                    balanceInfo === null || balanceInfo === void 0 ? void 0 : (ref1 = balanceInfo.data) === null || ref1 === void 0 ? void 0 : ref1.symbol\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Persons: 100\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \" Withdraw money\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \" View/Submit proposals\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroupItem.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(MyGroupItem, \"IhEgRins3Xl3mrcAs4A+cma+CrQ=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useBalance\n    ];\n});\n_c = MyGroupItem;\nvar _c;\n$RefreshReg$(_c, \"MyGroupItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015R3JvdXBJdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBc0U7QUFDbEI7QUFDbEI7QUFDRTtBQUVyQixTQUFTTSxXQUFXLENBQUMsS0FBVyxFQUFFO1FBQWIsT0FBUyxHQUFULEtBQVcsQ0FBVEMsT0FBTztRQXFCM0JDLEdBQWlCLEVBQWNBLElBQWlCOztJQXBCaEUsSUFBTUMsUUFBUSxHQUFHUixzREFBZSxDQUFDO1FBQy9CTSxPQUFPLEVBQUVBLE9BQU87UUFDaEJHLEdBQUcsRUFBRU4sMENBQU87UUFDWk8sWUFBWSxFQUFFLE1BQU07S0FDckIsQ0FBQztJQUVGLElBQU1ILFdBQVcsR0FBR1IsaURBQVUsQ0FBQztRQUM3Qk8sT0FBTyxFQUFFQSxPQUFPO0tBQ2pCLENBQUM7SUFFRkssT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVEsQ0FBQyxDQUFDO0lBRXRCLHFCQUNFLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBRVosK0VBQWtCOzswQkFDaEMsOERBQUNhLEdBQUM7Z0JBQUNDLElBQUksRUFBQywrQkFBK0I7MEJBQ3BDLGNBQWMsR0FBR1YsT0FBTyxDQUFDVyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O29CQUNsQzswQkFDSiw4REFBQ0MsR0FBQzs7b0JBQUMsUUFBTTtvQkFBQ1YsUUFBUSxhQUFSQSxRQUFRLFdBQU0sR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxRQUFRLENBQUVXLElBQUk7Ozs7OztvQkFBSzswQkFDN0IsOERBQUNELEdBQUM7O29CQUNDLEdBQUc7b0JBQUMsV0FDSTtvQkFBQ1gsV0FBVyxhQUFYQSxXQUFXLFdBQU0sR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxDQUFBQSxHQUFpQixHQUFqQkEsV0FBVyxDQUFFWSxJQUFJLGNBQWpCWixHQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLEdBQWlCLENBQUVhLFNBQVM7b0JBQUMsR0FBQztvQkFBQ2IsV0FBVyxhQUFYQSxXQUFXLFdBQU0sR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxDQUFBQSxJQUFpQixHQUFqQkEsV0FBVyxDQUFFWSxJQUFJLGNBQWpCWixJQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLElBQWlCLENBQUVjLE1BQU07Ozs7OztvQkFDaEU7MEJBQ0osOERBQUNILEdBQUM7MEJBQUMsY0FBWTs7Ozs7b0JBQUk7MEJBQ25CLDhEQUFDSSxRQUFNOzBCQUFDLGlCQUFlOzs7OztvQkFBUzswQkFDaEMsOERBQUNBLFFBQU07MEJBQUMsd0JBQXNCOzs7OztvQkFBUzs7Ozs7O1lBQ25DLENBQ047QUFDSixDQUFDO0dBNUJ1QmpCLFdBQVc7O1FBQ2hCTCxrREFBZTtRQU1aRCw2Q0FBVTs7O0FBUFJNLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUdyb3VwSXRlbS5qc3g/Mzc2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VCYWxhbmNlLCB1c2VDb250cmFjdFJlYWQsIHVzZUNvbnRyYWN0V3JpdGUgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL015R3JvdXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgc2hnX2FiaSB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUdyb3VwSXRlbSh7IGFkZHJlc3MgfSkge1xuICBjb25zdCBuYW1lSW5mbyA9IHVzZUNvbnRyYWN0UmVhZCh7XG4gICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICBhYmk6IHNoZ19hYmksXG4gICAgZnVuY3Rpb25OYW1lOiBcIm5hbWVcIixcbiAgfSk7XG5cbiAgY29uc3QgYmFsYW5jZUluZm8gPSB1c2VCYWxhbmNlKHtcbiAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhuYW1lSW5mbyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLk15R3JvdXBJdGVtfT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tLyR7fVwiPlxuICAgICAgICB7XCJBZGRyZXNzOiAuLi5cIiArIGFkZHJlc3Muc3Vic3RyKC01KX1cbiAgICAgIDwvYT5cbiAgICAgIDxwPk5hbWU6IHtuYW1lSW5mbz8uZGF0YX08L3A+XG4gICAgICA8cD5cbiAgICAgICAge1wiIFwifVxuICAgICAgICBCYWxhbmNlOiB7YmFsYW5jZUluZm8/LmRhdGE/LmZvcm1hdHRlZH0ge2JhbGFuY2VJbmZvPy5kYXRhPy5zeW1ib2x9XG4gICAgICA8L3A+XG4gICAgICA8cD5QZXJzb25zOiAxMDA8L3A+XG4gICAgICA8YnV0dG9uPiBXaXRoZHJhdyBtb25leTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbj4gVmlldy9TdWJtaXQgcHJvcG9zYWxzPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQmFsYW5jZSIsInVzZUNvbnRyYWN0UmVhZCIsInVzZUNvbnRyYWN0V3JpdGUiLCJTdHlsZXMiLCJzaGdfYWJpIiwidXNlQ2FsbGJhY2siLCJNeUdyb3VwSXRlbSIsImFkZHJlc3MiLCJiYWxhbmNlSW5mbyIsIm5hbWVJbmZvIiwiYWJpIiwiZnVuY3Rpb25OYW1lIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwic3Vic3RyIiwicCIsImRhdGEiLCJmb3JtYXR0ZWQiLCJzeW1ib2wiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MyGroupItem.jsx\n"));

/***/ })

});