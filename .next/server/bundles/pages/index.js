module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AboutMe/AboutMe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AboutMe_style__ = __webpack_require__("./components/AboutMe/AboutMe.style.js");
var _jsxFileName = "/Users/paulcoroneos/Repos/pcoroneos-nextjs/components/AboutMe/AboutMe.js";



var AboutMe = function AboutMe() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__AboutMe_style__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "AboutMe"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Hello"));
};

/* harmony default export */ __webpack_exports__["a"] = (AboutMe);

/***/ }),

/***/ "./components/AboutMe/AboutMe.style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-size: 48px;\n  color: ", ";\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StyledHeader = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.h1(_templateObject, function (props) {
  return props.theme.primaryText;
});
/* harmony default export */ __webpack_exports__["a"] = (StyledHeader);

/***/ }),

/***/ "./components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
var _jsxFileName = "/Users/paulcoroneos/Repos/pcoroneos-nextjs/components/Header/Header.js";




var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Home")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "About")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_link___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Portfolio")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header_Header__ = __webpack_require__("./components/Header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AboutMe_AboutMe__ = __webpack_require__("./components/AboutMe/AboutMe.js");
var _jsxFileName = "/Users/paulcoroneos/Repos/pcoroneos-nextjs/pages/index.js";




var theme = {
  primaryText: "#000000",
  primaryBackground: "#FFFFFF"
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_components__["ThemeProvider"], {
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

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map