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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MyGroupItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyGroupItem */ \"./components/MyGroupItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MyGroup() {\n    var _this = this;\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead)({\n        address: \"0x8A791620dd6260079BF849Dc5567aDC3F2FdC318\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"getAllGroup\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess;\n    var createGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        write({\n            args: [\n                \"Naushad\"\n            ]\n        });\n    });\n    // console.log(data, isLoading, isSuccess);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_5___default().myGroup),\n        children: data === null || data === void 0 ? void 0 : data.map(function(x) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyGroupItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    \" address= \",\n                    x,\n                    \" \"\n                ]\n            }, x, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                lineNumber: 25,\n                columnNumber: 16\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(MyGroup, \"uL+byXFzsG6KxsdtsfddrwQR/qo=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead\n    ];\n});\n_c = MyGroup;\nvar _c;\n$RefreshReg$(_c, \"MyGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015R3JvdXAuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEQ7QUFDTjtBQUNoQjtBQUNBO0FBQ0k7QUFFekIsU0FBU00sT0FBTyxHQUFHOzs7SUFDaEMsSUFBdUNOLEdBSXJDLEdBSnFDQSxzREFBZSxDQUFDO1FBQ3JETyxPQUFPLEVBQUUsNENBQTRDO1FBQ3JEQyxHQUFHLEVBQUVMLDRDQUFTO1FBQ2RNLFlBQVksRUFBRSxhQUFhO0tBQzVCLENBQUMsRUFKTUMsSUFBSSxHQUEyQlYsR0FJckMsQ0FKTVUsSUFBSSxFQUFFQyxTQUFTLEdBQWdCWCxHQUlyQyxDQUpZVyxTQUFTLEVBQUVDLFNBQVMsR0FBS1osR0FJckMsQ0FKdUJZLFNBQVM7SUFNbEMsSUFBTUMsV0FBVyxHQUFHVCxrREFBVyxDQUFDLFdBQU07UUFDcENVLEtBQUssQ0FBQztZQUNKQyxJQUFJLEVBQUU7Z0JBQUMsU0FBUzthQUFDO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLDJDQUEyQztJQUUzQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxLQUFLLEVBQUVmLDJFQUFjO2tCQUN2QlEsSUFBSSxhQUFKQSxJQUFJLFdBQUssR0FBVEEsS0FBQUEsQ0FBUyxHQUFUQSxJQUFJLENBQUVTLEdBQUcsQ0FBQyxTQUFDQyxDQUFDLEVBQUs7WUFDaEIscUJBQU8sOERBQUNmLG9EQUFXOztvQkFBUyxZQUFVO29CQUFDZSxDQUFDO29CQUFDLEdBQUM7O2VBQWpCQSxDQUFDOzs7O3FCQUE4QixDQUFDO1FBQzNELENBQUMsQ0FBQzs7Ozs7WUFVRSxDQUNOO0FBQ0osQ0FBQztHQS9CdUJkLE9BQU87O1FBQ1VOLGtEQUFlOzs7QUFEaENNLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUdyb3VwLmpzeD9kNjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRyYWN0UmVhZCwgdXNlQ29udHJhY3RXcml0ZSB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvTXlHcm91cC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBncm91cF9hYmkgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNeUdyb3VwSXRlbSBmcm9tIFwiLi9NeUdyb3VwSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUdyb3VwKCkge1xuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNTdWNjZXNzIH0gPSB1c2VDb250cmFjdFJlYWQoe1xuICAgIGFkZHJlc3M6IFwiMHg4QTc5MTYyMGRkNjI2MDA3OUJGODQ5RGM1NTY3YURDM0YyRmRDMzE4XCIsXG4gICAgYWJpOiBncm91cF9hYmksXG4gICAgZnVuY3Rpb25OYW1lOiBcImdldEFsbEdyb3VwXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGNyZWF0ZUdyb3VwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHdyaXRlKHtcbiAgICAgIGFyZ3M6IFtcIk5hdXNoYWRcIl0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEsIGlzTG9hZGluZywgaXNTdWNjZXNzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9e1N0eWxlcy5teUdyb3VwfT5cbiAgICAgIHtkYXRhPy5tYXAoKHgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxNeUdyb3VwSXRlbSBrZXk9e3h9PiBhZGRyZXNzPSB7eH0gPC9NeUdyb3VwSXRlbT47XG4gICAgICB9KX1cbiAgICAgIHsvKiA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzcz17U3R5bGVzLm5hbWVJbnB1dH1cbiAgICAgICAgaWQ9XCJuYW1lLWlucHV0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBncm91cCBuYW1lXCJcbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGVzLmNyZWF0ZUJ1dHRvbn0gb25DbGljaz17Y3JlYXRlR3JvdXB9PlxuICAgICAgICBDcmVhdGVcbiAgICAgIDwvYnV0dG9uPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250cmFjdFJlYWQiLCJ1c2VDb250cmFjdFdyaXRlIiwiU3R5bGVzIiwiZ3JvdXBfYWJpIiwidXNlQ2FsbGJhY2siLCJNeUdyb3VwSXRlbSIsIk15R3JvdXAiLCJhZGRyZXNzIiwiYWJpIiwiZnVuY3Rpb25OYW1lIiwiZGF0YSIsImlzTG9hZGluZyIsImlzU3VjY2VzcyIsImNyZWF0ZUdyb3VwIiwid3JpdGUiLCJhcmdzIiwiZGl2IiwiY2xhc3MiLCJteUdyb3VwIiwibWFwIiwieCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MyGroup.jsx\n"));

/***/ })

});