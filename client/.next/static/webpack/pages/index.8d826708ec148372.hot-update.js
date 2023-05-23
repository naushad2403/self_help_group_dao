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

/***/ "./components/CreateGroup.jsx":
/*!************************************!*\
  !*** ./components/CreateGroup.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/CreateGroup.module.css */ \"./styles/CreateGroup.module.css\");\n/* harmony import */ var _styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CreateGroup() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractWrite)({\n        address: \"0x8A791620dd6260079BF849Dc5567aDC3F2FdC318\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"createNewGroup\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess, write = ref.write;\n    var createGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        write({\n            args: [\n                \"Naushad\"\n            ]\n        });\n    });\n    console.log(data, isLoading, isSuccess, write);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().componentContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                class: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().nameInput),\n                id: \"name-input\",\n                placeholder: \"Enter group name\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().createButton),\n                onClick: createGroup,\n                children: \"Create\"\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateGroup, \"QAnHmj+J1TQw70JZM/6i2v33F+s=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractWrite\n    ];\n});\n_c = CreateGroup;\nvar _c;\n$RefreshReg$(_c, \"CreateGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZUdyb3VwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEQ7QUFDRjtBQUNwQjtBQUNBO0FBRXJCLFNBQVNLLFdBQVcsR0FBRzs7SUFDcEMsSUFBOENKLEdBSTVDLEdBSjRDQSx1REFBZ0IsQ0FBQztRQUM3REssT0FBTyxFQUFFLDRDQUE0QztRQUNyREMsR0FBRyxFQUFFSiw0Q0FBUztRQUNkSyxZQUFZLEVBQUUsZ0JBQWdCO0tBQy9CLENBQUMsRUFKTUMsSUFBSSxHQUFrQ1IsR0FJNUMsQ0FKTVEsSUFBSSxFQUFFQyxTQUFTLEdBQXVCVCxHQUk1QyxDQUpZUyxTQUFTLEVBQUVDLFNBQVMsR0FBWVYsR0FJNUMsQ0FKdUJVLFNBQVMsRUFBRUMsS0FBSyxHQUFLWCxHQUk1QyxDQUprQ1csS0FBSztJQU16QyxJQUFNQyxXQUFXLEdBQUdULGtEQUFXLENBQUMsV0FBTTtRQUNwQ1EsS0FBSyxDQUFDO1lBQ0pFLElBQUksRUFBRTtnQkFBQyxTQUFTO2FBQUM7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLENBQUMsQ0FBQztJQUUvQyxxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxLQUFLLEVBQUVoQiwwRkFBeUI7OzBCQUNuQyw4REFBQ2tCLE9BQUs7Z0JBQ0pDLElBQUksRUFBQyxNQUFNO2dCQUNYSCxLQUFLLEVBQUVoQixpRkFBZ0I7Z0JBQ3ZCcUIsRUFBRSxFQUFDLFlBQVk7Z0JBQ2ZDLFdBQVcsRUFBQyxrQkFBa0I7Ozs7O29CQUM5QjswQkFDRiw4REFBQ0MsUUFBTTtnQkFBQ0MsU0FBUyxFQUFFeEIsb0ZBQW1CO2dCQUFFMEIsT0FBTyxFQUFFZixXQUFXOzBCQUFFLFFBRTlEOzs7OztvQkFBUzs7Ozs7O1lBQ0wsQ0FDTjtBQUNKLENBQUM7R0E1QnVCUixXQUFXOztRQUNhSixtREFBZ0I7OztBQUR4Q0ksS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NyZWF0ZUdyb3VwLmpzeD9mNDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRyYWN0UmVhZCwgdXNlQ29udHJhY3RXcml0ZSB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvQ3JlYXRlR3JvdXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ3JvdXBfYWJpIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUdyb3VwKCkge1xuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNTdWNjZXNzLCB3cml0ZSB9ID0gdXNlQ29udHJhY3RXcml0ZSh7XG4gICAgYWRkcmVzczogXCIweDhBNzkxNjIwZGQ2MjYwMDc5QkY4NDlEYzU1NjdhREMzRjJGZEMzMThcIixcbiAgICBhYmk6IGdyb3VwX2FiaSxcbiAgICBmdW5jdGlvbk5hbWU6IFwiY3JlYXRlTmV3R3JvdXBcIixcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlR3JvdXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgd3JpdGUoe1xuICAgICAgYXJnczogW1wiTmF1c2hhZFwiXSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIHdyaXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3M9e1N0eWxlcy5jb21wb25lbnRDb250YWluZXJ9PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9e1N0eWxlcy5uYW1lSW5wdXR9XG4gICAgICAgIGlkPVwibmFtZS1pbnB1dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlcy5jcmVhdGVCdXR0b259IG9uQ2xpY2s9e2NyZWF0ZUdyb3VwfT5cbiAgICAgICAgQ3JlYXRlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250cmFjdFJlYWQiLCJ1c2VDb250cmFjdFdyaXRlIiwiU3R5bGVzIiwiZ3JvdXBfYWJpIiwidXNlQ2FsbGJhY2siLCJDcmVhdGVHcm91cCIsImFkZHJlc3MiLCJhYmkiLCJmdW5jdGlvbk5hbWUiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNTdWNjZXNzIiwid3JpdGUiLCJjcmVhdGVHcm91cCIsImFyZ3MiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3MiLCJjb21wb25lbnRDb250YWluZXIiLCJpbnB1dCIsInR5cGUiLCJuYW1lSW5wdXQiLCJpZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiY3JlYXRlQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CreateGroup.jsx\n"));

/***/ })

});