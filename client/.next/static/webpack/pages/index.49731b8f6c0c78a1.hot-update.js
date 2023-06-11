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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyGroup; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../styles/MyGroup.module.css */ \"./styles/MyGroup.module.css\");\n/* harmony import */ var _styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MyGroupItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyGroupItem */ \"./components/MyGroupItem.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_management_slices_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state_management/slices/group */ \"./state_management/slices/group.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MyGroup() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), groups = ref[0], setGroups = ref[1];\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractRead)({\n        address: \"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        functionName: \"getAllGroup\",\n        onSettled: function onSettled(data, error) {\n            // console.log(\"Settled\", { data, error });\n            setGroups(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(prev).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(data));\n            });\n        }\n    }), isLoading = ref1.isLoading, isSuccess = ref1.isSuccess;\n    (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractEvent)({\n        address: \"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512\",\n        abi: _util__WEBPACK_IMPORTED_MODULE_1__.group_abi,\n        eventName: \"NewGroupCreated\",\n        listener: function listener(log) {\n            //  console.log(\"NewGroupCreated\", log);\n            setGroups((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(groups).concat([\n                log[0].args[0]\n            ]));\n        }\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    // useEffect(() => {\n    //   if (data) {\n    //     dispatch(updateGroup(data));\n    //   }\n    // }, [data, dispatch]);\n    // console.log(data, isLoading, isSuccess);\n    console.log(groups);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default().myGroup),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_MyGroup_module_css__WEBPACK_IMPORTED_MODULE_8___default().MyGroupItem),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Balance\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Person\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Status\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {}, void 0, false, {\n                        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            groups === null || groups === void 0 ? void 0 : groups.map(function(x) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyGroupItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    address: x,\n                    children: \" \"\n                }, x, false, {\n                    fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naushad/Documents/Blockchain/shg_git/client/components/MyGroup.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(MyGroup, \"3Za4F064Zo/ZTNVlwPToClv11Es=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractRead,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useContractEvent,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = MyGroup;\nvar _c;\n$RefreshReg$(_c, \"MyGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015R3JvdXAuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTRFO0FBQ3hCO0FBQ2hCO0FBQ3FCO0FBQ2pCO0FBQ0U7QUFDcUI7QUFFaEQsU0FBU1csT0FBTyxHQUFHOzs7SUFDaEMsSUFBNEJKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBakNLLE1BQU0sR0FBZUwsR0FBWSxHQUEzQixFQUFFTSxTQUFTLEdBQUlOLEdBQVksR0FBaEI7SUFDeEIsSUFBaUNOLElBUS9CLEdBUitCQSxzREFBZSxDQUFDO1FBQy9DYSxPQUFPLEVBQUVDLDRDQUE4QztRQUN2REcsR0FBRyxFQUFFZCw0Q0FBUztRQUNkZSxZQUFZLEVBQUUsYUFBYTtRQUMzQkMsU0FBUyxFQUFUQSxTQUFBQSxTQUFTLENBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFFO1lBQ3JCLDJDQUEyQztZQUMzQ1QsU0FBUyxDQUFDLFNBQUNVLElBQUk7dUJBQUsscUZBQUlBLElBQUksQ0FBSkEsUUFBTSxxRkFBR0YsSUFBSSxDQUFKQSxDQUFLO2FBQUEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FDRixDQUFDLEVBUk1HLFNBQVMsR0FBZ0J2QixJQVEvQixDQVJNdUIsU0FBUyxFQUFFQyxTQUFTLEdBQUt4QixJQVEvQixDQVJpQndCLFNBQVM7SUFVNUJ6Qix1REFBZ0IsQ0FBQztRQUNmYyxPQUFPLEVBQUVDLDRDQUE4QztRQUN2REcsR0FBRyxFQUFFZCw0Q0FBUztRQUNkc0IsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QkMsUUFBUSxFQUFSQSxTQUFBQSxRQUFRLENBQUNDLEdBQUcsRUFBRTtZQUNaLHdDQUF3QztZQUN4Q2YsU0FBUyxDQUFDLHFGQUFJRCxNQUFNLENBQU5BLFFBQUo7Z0JBQVlnQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFBQyxFQUFDLENBQUM7UUFDekMsQ0FBQztLQUNGLENBQUMsQ0FBQztJQUNILElBQU1DLFFBQVEsR0FBR3JCLHdEQUFXLEVBQUU7SUFFOUIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsTUFBTTtJQUNOLHdCQUF3QjtJQUV4QiwyQ0FBMkM7SUFDM0NzQixPQUFPLENBQUNILEdBQUcsQ0FBQ2hCLE1BQU0sQ0FBQyxDQUFDO0lBRXBCLHFCQUNFLDhEQUFDb0IsS0FBRztRQUFDQyxTQUFTLEVBQUU5QiwyRUFBYzs7MEJBQzVCLDhEQUFDNkIsS0FBRztnQkFBQ0MsU0FBUyxFQUFFOUIsK0VBQWtCOztrQ0FDaEMsOERBQUNnQyxJQUFFO2tDQUFDLFNBQU87Ozs7OzRCQUFLO2tDQUNoQiw4REFBQ0EsSUFBRTtrQ0FBQyxNQUFJOzs7Ozs0QkFBSztrQ0FDYiw4REFBQ0EsSUFBRTtrQ0FBQyxTQUFPOzs7Ozs0QkFBSztrQ0FDaEIsOERBQUNBLElBQUU7a0NBQUMsUUFBTTs7Ozs7NEJBQUs7a0NBQ2YsOERBQUNBLElBQUU7a0NBQUMsUUFBTTs7Ozs7NEJBQUs7a0NBQ2YsOERBQUNDLElBQUU7Ozs7NEJBQU07Ozs7OztvQkFDTDtZQUNMeEIsTUFBTSxhQUFOQSxNQUFNLFdBQUssR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxNQUFNLENBQUV5QixHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFLO2dCQUNsQixxQkFDRSw4REFBQzlCLG9EQUFXO29CQUFTTSxPQUFPLEVBQUV3QixDQUFDOzhCQUM1QixHQUFHO21CQURZQSxDQUFDOzs7O3lCQUVMLENBQ2Q7WUFDSixDQUFDLENBQUM7Ozs7OztZQVVFLENBQ047QUFDSixDQUFDO0dBNUR1QjNCLE9BQU87O1FBRUlWLGtEQUFlO1FBVWhERCxtREFBZ0I7UUFTQ1Msb0RBQVc7OztBQXJCTkUsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL015R3JvdXAuanN4P2Q2MGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udHJhY3RFdmVudCwgdXNlQ29udHJhY3RSZWFkLCB1c2VDb250cmFjdFdyaXRlIH0gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLy4uL3N0eWxlcy9NeUdyb3VwLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdyb3VwX2FiaSB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE15R3JvdXBJdGVtIGZyb20gXCIuL015R3JvdXBJdGVtXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXBkYXRlR3JvdXAgfSBmcm9tIFwiLi4vc3RhdGVfbWFuYWdlbWVudC9zbGljZXMvZ3JvdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlHcm91cCgpIHtcbiAgY29uc3QgW2dyb3Vwcywgc2V0R3JvdXBzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzU3VjY2VzcyB9ID0gdXNlQ29udHJhY3RSZWFkKHtcbiAgICBhZGRyZXNzOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUk9VUF9DT05UUkFDVF9BRERSRVNTLFxuICAgIGFiaTogZ3JvdXBfYWJpLFxuICAgIGZ1bmN0aW9uTmFtZTogXCJnZXRBbGxHcm91cFwiLFxuICAgIG9uU2V0dGxlZChkYXRhLCBlcnJvcikge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJTZXR0bGVkXCIsIHsgZGF0YSwgZXJyb3IgfSk7XG4gICAgICBzZXRHcm91cHMoKHByZXYpID0+IFsuLi5wcmV2LCAuLi5kYXRhXSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgdXNlQ29udHJhY3RFdmVudCh7XG4gICAgYWRkcmVzczogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JPVVBfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICBhYmk6IGdyb3VwX2FiaSxcbiAgICBldmVudE5hbWU6IFwiTmV3R3JvdXBDcmVhdGVkXCIsXG4gICAgbGlzdGVuZXIobG9nKSB7XG4gICAgICAvLyAgY29uc29sZS5sb2coXCJOZXdHcm91cENyZWF0ZWRcIiwgbG9nKTtcbiAgICAgIHNldEdyb3VwcyhbLi4uZ3JvdXBzLCBsb2dbMF0uYXJnc1swXV0pO1xuICAgIH0sXG4gIH0pO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoZGF0YSkge1xuICAvLyAgICAgZGlzcGF0Y2godXBkYXRlR3JvdXAoZGF0YSkpO1xuICAvLyAgIH1cbiAgLy8gfSwgW2RhdGEsIGRpc3BhdGNoXSk7XG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MpO1xuICBjb25zb2xlLmxvZyhncm91cHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5teUdyb3VwfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuTXlHcm91cEl0ZW19PlxuICAgICAgICA8aDQ+QWRkcmVzczwvaDQ+XG4gICAgICAgIDxoND5OYW1lPC9oND5cbiAgICAgICAgPGg0PkJhbGFuY2U8L2g0PlxuICAgICAgICA8aDQ+UGVyc29uPC9oND5cbiAgICAgICAgPGg0PlN0YXR1czwvaDQ+XG4gICAgICAgIDxoMz48L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICB7Z3JvdXBzPy5tYXAoKHgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TXlHcm91cEl0ZW0ga2V5PXt4fSBhZGRyZXNzPXt4fT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8L015R3JvdXBJdGVtPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICB7LyogPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9e1N0eWxlcy5uYW1lSW5wdXR9XG4gICAgICAgIGlkPVwibmFtZS1pbnB1dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlcy5jcmVhdGVCdXR0b259IG9uQ2xpY2s9e2NyZWF0ZUdyb3VwfT5cbiAgICAgICAgQ3JlYXRlXG4gICAgICA8L2J1dHRvbj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3RFdmVudCIsInVzZUNvbnRyYWN0UmVhZCIsInVzZUNvbnRyYWN0V3JpdGUiLCJTdHlsZXMiLCJncm91cF9hYmkiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXlHcm91cEl0ZW0iLCJ1c2VEaXNwYXRjaCIsInVwZGF0ZUdyb3VwIiwiTXlHcm91cCIsImdyb3VwcyIsInNldEdyb3VwcyIsImFkZHJlc3MiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR1JPVVBfQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsImZ1bmN0aW9uTmFtZSIsIm9uU2V0dGxlZCIsImRhdGEiLCJlcnJvciIsInByZXYiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJldmVudE5hbWUiLCJsaXN0ZW5lciIsImxvZyIsImFyZ3MiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJteUdyb3VwIiwiaDQiLCJoMyIsIm1hcCIsIngiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MyGroup.jsx\n"));

/***/ })

});