webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header_Header__ = __webpack_require__("./components/Header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AboutMe_AboutMe__ = __webpack_require__("./components/AboutMe/AboutMe.js");
var _jsxFileName = "/Users/paulcoroneos/Repos/pcoroneos-nextjs/pages/index.js";




var theme = {
  primaryText: "#000000",
  primaryBackground: "#FFFFFF"
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* ThemeProvider */], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_AboutMe_AboutMe__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.e81b2dc7bcb927790632.hot-update.js.map