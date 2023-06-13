exports.id = 671;
exports.ids = [671];
exports.modules = {

/***/ 288:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"card": "Home_card___LpL1",
	"grid": "Home_grid__GxQ85",
	"navigation": "Home_navigation__fu8yo",
	"wallet": "Home_wallet__iOS9t",
	"group": "Home_group__EwTBz",
	"createGroup": "Home_createGroup__1MObM"
};


/***/ }),

/***/ 545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports fetchGroup, updateGroup */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const groupSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "group",
    initialState: {
        list: [],
        info: {}
    },
    reducers: {
        fetchGroup (state, action) {
            state?.list.push(action.payload);
            return state;
        },
        updateGroup (state, action) {
            let oldInfo = state.info[action.payload.address] || {};
            let newInfo = action?.payload?.info;
            state.info[action.payload.address] = {
                ...oldInfo,
                ...newInfo
            };
            return state;
        }
    }
});
// Extract the action creators object and the reducer
const { actions , reducer  } = groupSlice;
// Extract and export each action creator by name
const { fetchGroup , updateGroup  } = actions;
// Export the reducer, either as a default or named export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ })

};
;