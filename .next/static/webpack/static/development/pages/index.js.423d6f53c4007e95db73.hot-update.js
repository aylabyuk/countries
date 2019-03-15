webpackHotUpdate("static/development/pages/index.js",{

/***/ "./constate/AppContainer.js":
/*!**********************************!*\
  !*** ./constate/AppContainer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constate */ "./node_modules/constate/dist/constate.es.js");



var AppContainer = Object(constate__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      count = _useState2[0];

  return count;
});
/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

/***/ "./node_modules/constate/dist/constate.es.js":
/*!***************************************************!*\
  !*** ./node_modules/constate/dist/constate.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function warnNoProvider() {
  // eslint-disable-next-line no-console
  console.warn("[constate] Missing Provider");
} // istanbul ignore next


var canUseProxy =  true && typeof Proxy !== "undefined"; // istanbul ignore next

var defaultValue = canUseProxy ? new Proxy({}, {
  get: warnNoProvider,
  apply: warnNoProvider
}) : {};

function createContainer(useValue, createMemoInputs) {
  var Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue);

  var Provider = function Provider(props) {
    var value = useValue(props); // createMemoInputs won't change between renders

    var memoizedValue = createMemoInputs ? Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
      return value;
    }, createMemoInputs(value)) : value;
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Provider, {
      value: memoizedValue
    }, props.children);
  };

  return {
    Context: Context,
    Provider: Provider
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createContainer);


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constate_AppContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constate/AppContainer */ "./constate/AppContainer.js");
var _jsxFileName = "/home/orielabsin/personals/countries/pages/index.js";



var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_constate_AppContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "App with container"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.423d6f53c4007e95db73.hot-update.js.map