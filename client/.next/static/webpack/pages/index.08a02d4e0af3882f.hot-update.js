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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/CreateGroup.module.css */ \"./styles/CreateGroup.module.css\");\n/* harmony import */ var _styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CreateGroup() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractWrite)({\n        address: \"0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"createNewGroup\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess, write = ref.write;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var createGroup = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function() {\n        write({\n            args: [\n                name\n            ]\n        });\n        setName(\"\");\n    });\n    console.log(\"Transaction Completed, Please check the transaction hash: \\n     \".concat(JSON.stringify(data), \"\\n        or Refresh the Groups to see newly created group\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().root),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().componentContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Create a new group by entering a name\"\n                }, void 0, false, {\n                    fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().componentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        class: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().nameInput),\n                        id: \"name-input\",\n                        placeholder: \"Enter group name\",\n                        value: name,\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: name.length == 0,\n                        className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().createButton),\n                        onClick: createGroup,\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().componentContainer),\n                children: [\n                    isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Please check wallet and sign the pending transaction \"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().SuccessfulMessage),\n                        children: [\n                            \"Transaction Completed Please check the transaction hash:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                target: \"_blank\",\n                                className: (_styles_CreateGroup_module_css__WEBPACK_IMPORTED_MODULE_4___default().HashStyle),\n                                href: \"https://etherscan.io/tx/\".concat(data.hash),\n                                rel: \"noreferrer\",\n                                children: [\n                                    \" \",\n                                    data.hash\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            \"or Refresh the Groups to see newly created group\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/CreateGroup.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateGroup, \"HoANJzUdArtWuGY58uhqrJw6em8=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractWrite\n    ];\n});\n_c = CreateGroup;\nvar _c;\n$RefreshReg$(_c, \"CreateGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RHhDSyxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3JlYXRlR3JvdXAuanN4P2Y0NWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udHJhY3RSZWFkLCB1c2VDb250cmFjdFdyaXRlIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLy4uL3N0eWxlcy9DcmVhdGVHcm91cC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBncm91cF9hYmkgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUdyb3VwKCkge1xuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNTdWNjZXNzLCB3cml0ZSB9ID0gdXNlQ29udHJhY3RXcml0ZSh7XG4gICAgYWRkcmVzczogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JPVVBfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICBhYmk6IGdyb3VwX2FiaSxcbiAgICBmdW5jdGlvbk5hbWU6IFwiY3JlYXRlTmV3R3JvdXBcIixcbiAgfSk7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY3JlYXRlR3JvdXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgd3JpdGUoe1xuICAgICAgYXJnczogW25hbWVdLFxuICAgIH0pO1xuICAgIHNldE5hbWUoXCJcIik7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhgVHJhbnNhY3Rpb24gQ29tcGxldGVkLCBQbGVhc2UgY2hlY2sgdGhlIHRyYW5zYWN0aW9uIGhhc2g6IFxuICAgICAke0pTT04uc3RyaW5naWZ5KGRhdGEpfVxuICAgICAgICBvciBSZWZyZXNoIHRoZSBHcm91cHMgdG8gc2VlIG5ld2x5IGNyZWF0ZWQgZ3JvdXBgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbXBvbmVudENvbnRhaW5lcn0+XG4gICAgICAgIDxoND5DcmVhdGUgYSBuZXcgZ3JvdXAgYnkgZW50ZXJpbmcgYSBuYW1lPC9oND5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb21wb25lbnRDb250YWluZXJ9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3M9e1N0eWxlcy5uYW1lSW5wdXR9XG4gICAgICAgICAgaWQ9XCJuYW1lLWlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIlxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17bmFtZS5sZW5ndGggPT0gMH1cbiAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy5jcmVhdGVCdXR0b259XG4gICAgICAgICAgb25DbGljaz17Y3JlYXRlR3JvdXB9XG4gICAgICAgID5cbiAgICAgICAgICBDcmVhdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29tcG9uZW50Q29udGFpbmVyfT5cbiAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgPGg1PlBsZWFzZSBjaGVjayB3YWxsZXQgYW5kIHNpZ24gdGhlIHBlbmRpbmcgdHJhbnNhY3Rpb24gPC9oNT5cbiAgICAgICAgKX1cblxuICAgICAgICB7aXNTdWNjZXNzICYmIChcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtTdHlsZXMuU3VjY2Vzc2Z1bE1lc3NhZ2V9PlxuICAgICAgICAgICAgVHJhbnNhY3Rpb24gQ29tcGxldGVkIFBsZWFzZSBjaGVjayB0aGUgdHJhbnNhY3Rpb24gaGFzaDpcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLkhhc2hTdHlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZXRoZXJzY2FuLmlvL3R4LyR7ZGF0YS5oYXNofWB9XG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIHtkYXRhLmhhc2h9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICBvciBSZWZyZXNoIHRoZSBHcm91cHMgdG8gc2VlIG5ld2x5IGNyZWF0ZWQgZ3JvdXBcbiAgICAgICAgICA8L2g1PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3RSZWFkIiwidXNlQ29udHJhY3RXcml0ZSIsIlN0eWxlcyIsImdyb3VwX2FiaSIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJDcmVhdGVHcm91cCIsImFkZHJlc3MiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR1JPVVBfQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsImZ1bmN0aW9uTmFtZSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJ3cml0ZSIsIm5hbWUiLCJzZXROYW1lIiwiY3JlYXRlR3JvdXAiLCJhcmdzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJyb290IiwiY29tcG9uZW50Q29udGFpbmVyIiwiaDQiLCJpbnB1dCIsInR5cGUiLCJjbGFzcyIsIm5hbWVJbnB1dCIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsImRpc2FibGVkIiwibGVuZ3RoIiwiY3JlYXRlQnV0dG9uIiwib25DbGljayIsImg1IiwiU3VjY2Vzc2Z1bE1lc3NhZ2UiLCJhIiwiSGFzaFN0eWxlIiwiaHJlZiIsImhhc2giLCJyZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CreateGroup.jsx\n"));

/***/ }),

/***/ "./components/MyGroup.jsx":
/*!********************************!*\
  !*** ./components/MyGroup.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyGroup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MyGroupItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyGroupItem */ \"./components/MyGroupItem.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_management_slices_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state_management/slices/group */ \"./state_management/slices/group.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MyGroup() {\n    var _this = this;\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractRead)({\n        address: \"0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"getAllGroup\"\n    }), data = ref.data, isLoading = ref.isLoading, isSuccess = ref.isSuccess;\n    (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractEvent)({\n        address: \"0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        eventName: \"NewGroupCreated\",\n        listener: function listener(log) {\n            console.log(\"NewGroupCreated\", log);\n        }\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (data) {\n            dispatch((0,_state_management_slices_group__WEBPACK_IMPORTED_MODULE_5__.updateGroup)(data));\n        }\n    }, [\n        data,\n        dispatch\n    ]);\n    // console.log(data, isLoading, isSuccess);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().myGroup),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_7___default().MyGroupItem),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Balance\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Person\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Status\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {}, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            data === null || data === void 0 ? void 0 : data.map(function(x) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyGroupItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    address: x,\n                    children: \" \"\n                }, x, false, {\n                    fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(MyGroup, \"FzmwMs871hGeFfRgErcK2rKzLqk=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractRead,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractEvent,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = MyGroup;\nvar _c;\n$RefreshReg$(_c, \"MyGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015R3JvdXAuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0RTtBQUN4QjtBQUNoQjtBQUNXO0FBQ1A7QUFDRTtBQUNxQjtBQUVoRCxTQUFTVSxPQUFPLEdBQUc7OztJQUNoQyxJQUF1Q1QsR0FJckMsR0FKcUNBLHNEQUFlLENBQUM7UUFDckRVLE9BQU8sRUFBRUMsNENBQThDO1FBQ3ZERyxHQUFHLEVBQUVYLDRDQUFTO1FBQ2RZLFlBQVksRUFBRSxhQUFhO0tBQzVCLENBQUMsRUFKTUMsSUFBSSxHQUEyQmhCLEdBSXJDLENBSk1nQixJQUFJLEVBQUVDLFNBQVMsR0FBZ0JqQixHQUlyQyxDQUpZaUIsU0FBUyxFQUFFQyxTQUFTLEdBQUtsQixHQUlyQyxDQUp1QmtCLFNBQVM7SUFNbENuQix1REFBZ0IsQ0FBQztRQUNmVyxPQUFPLEVBQUVDLDRDQUE4QztRQUN2REcsR0FBRyxFQUFFWCw0Q0FBUztRQUNkZ0IsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QkMsUUFBUSxFQUFSQSxTQUFBQSxRQUFRLENBQUNDLEdBQUcsRUFBRTtZQUNaQyxPQUFPLENBQUNELEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUEsR0FBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUNGLENBQUMsQ0FBQztJQUNILElBQU1FLFFBQVEsR0FBR2hCLHdEQUFXLEVBQUU7SUFFOUJGLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlXLElBQUksRUFBRTtZQUNSTyxRQUFRLENBQUNmLDJFQUFXLENBQUNRLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUMsRUFBRTtRQUFDQSxJQUFJO1FBQUVPLFFBQVE7S0FBQyxDQUFDLENBQUM7SUFFckIsMkNBQTJDO0lBRTNDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBRXZCLDJFQUFjOzswQkFDeEIsOERBQUNzQixLQUFHO2dCQUFDRyxTQUFTLEVBQUV6QiwrRUFBa0I7O2tDQUNoQyw4REFBQzBCLElBQUU7a0NBQUMsU0FBTzs7Ozs7NEJBQUs7a0NBQ2hCLDhEQUFDQSxJQUFFO2tDQUFDLE1BQUk7Ozs7OzRCQUFLO2tDQUNiLDhEQUFDQSxJQUFFO2tDQUFDLFNBQU87Ozs7OzRCQUFLO2tDQUNoQiw4REFBQ0EsSUFBRTtrQ0FBQyxRQUFNOzs7Ozs0QkFBSztrQ0FDZiw4REFBQ0EsSUFBRTtrQ0FBQyxRQUFNOzs7Ozs0QkFBSztrQ0FDZiw4REFBQ0MsSUFBRTs7Ozs0QkFBTTs7Ozs7O29CQUNMO1lBQ0xiLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFYyxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFLO2dCQUNoQixxQkFDRSw4REFBQ3pCLG9EQUFXO29CQUFTSSxPQUFPLEVBQUVxQixDQUFDOzhCQUM1QixHQUFHO21CQURZQSxDQUFDOzs7O3lCQUVMLENBQ2Q7WUFDSixDQUFDLENBQUM7Ozs7OztZQVVFLENBQ047QUFDSixDQUFDO0dBckR1QnRCLE9BQU87O1FBQ1VULGtEQUFlO1FBTXRERCxtREFBZ0I7UUFRQ1Esb0RBQVc7OztBQWZORSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXlHcm91cC5qc3g/ZDYwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250cmFjdEV2ZW50LCB1c2VDb250cmFjdFJlYWQsIHVzZUNvbnRyYWN0V3JpdGUgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL015R3JvdXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ3JvdXBfYWJpIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNeUdyb3VwSXRlbSBmcm9tIFwiLi9NeUdyb3VwSXRlbVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVwZGF0ZUdyb3VwIH0gZnJvbSBcIi4uL3N0YXRlX21hbmFnZW1lbnQvc2xpY2VzL2dyb3VwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15R3JvdXAoKSB7XG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MgfSA9IHVzZUNvbnRyYWN0UmVhZCh7XG4gICAgYWRkcmVzczogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JPVVBfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICBhYmk6IGdyb3VwX2FiaSxcbiAgICBmdW5jdGlvbk5hbWU6IFwiZ2V0QWxsR3JvdXBcIixcbiAgfSk7XG5cbiAgdXNlQ29udHJhY3RFdmVudCh7XG4gICAgYWRkcmVzczogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JPVVBfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICBhYmk6IGdyb3VwX2FiaSxcbiAgICBldmVudE5hbWU6IFwiTmV3R3JvdXBDcmVhdGVkXCIsXG4gICAgbGlzdGVuZXIobG9nKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5ld0dyb3VwQ3JlYXRlZFwiLCBsb2cpO1xuICAgIH0sXG4gIH0pO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZGlzcGF0Y2godXBkYXRlR3JvdXAoZGF0YSkpO1xuICAgIH1cbiAgfSwgW2RhdGEsIGRpc3BhdGNoXSk7XG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz17U3R5bGVzLm15R3JvdXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5NeUdyb3VwSXRlbX0+XG4gICAgICAgIDxoND5BZGRyZXNzPC9oND5cbiAgICAgICAgPGg0Pk5hbWU8L2g0PlxuICAgICAgICA8aDQ+QmFsYW5jZTwvaDQ+XG4gICAgICAgIDxoND5QZXJzb248L2g0PlxuICAgICAgICA8aDQ+U3RhdHVzPC9oND5cbiAgICAgICAgPGgzPjwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkYXRhPy5tYXAoKHgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TXlHcm91cEl0ZW0ga2V5PXt4fSBhZGRyZXNzPXt4fT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8L015R3JvdXBJdGVtPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICB7LyogPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9e1N0eWxlcy5uYW1lSW5wdXR9XG4gICAgICAgIGlkPVwibmFtZS1pbnB1dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlcy5jcmVhdGVCdXR0b259IG9uQ2xpY2s9e2NyZWF0ZUdyb3VwfT5cbiAgICAgICAgQ3JlYXRlXG4gICAgICA8L2J1dHRvbj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3RFdmVudCIsInVzZUNvbnRyYWN0UmVhZCIsInVzZUNvbnRyYWN0V3JpdGUiLCJTdHlsZXMiLCJncm91cF9hYmkiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIk15R3JvdXBJdGVtIiwidXNlRGlzcGF0Y2giLCJ1cGRhdGVHcm91cCIsIk15R3JvdXAiLCJhZGRyZXNzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dST1VQX0NPTlRSQUNUX0FERFJFU1MiLCJhYmkiLCJmdW5jdGlvbk5hbWUiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNTdWNjZXNzIiwiZXZlbnROYW1lIiwibGlzdGVuZXIiLCJsb2ciLCJjb25zb2xlIiwiZGlzcGF0Y2giLCJkaXYiLCJjbGFzcyIsIm15R3JvdXAiLCJjbGFzc05hbWUiLCJoNCIsImgzIiwibWFwIiwieCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MyGroup.jsx\n"));

/***/ })

});