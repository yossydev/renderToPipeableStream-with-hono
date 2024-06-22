/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/App.js":
/*!***********************!*\
  !*** ./client/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = App;\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\nvar _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != _typeof(e) && \"function\" != typeof e) return { \"default\": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n[\"default\"] = e, t && t.set(e, n), n; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction App() {\n  var _useState = (0, _react.useState)(0),\n    _useState2 = _slicedToArray(_useState, 2),\n    count = _useState2[0],\n    setCount = _useState2[1];\n  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {\n    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(\"h1\", {\n      children: count\n    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(\"button\", {\n      onClick: function onClick() {\n        return setCount(count + 1);\n      },\n      children: \"Increment\"\n    })]\n  });\n}\n\n//# sourceURL=webpack://react-ssr-example/./client/App.js?");

/***/ }),

/***/ "./client/HTML.js":
/*!************************!*\
  !*** ./client/HTML.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = Layout;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\nfunction Layout(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(\"html\", {\n    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(\"head\", {\n      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(\"meta\", {\n        charSet: \"utf-8\"\n      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(\"title\", {\n        children: \"React Server Side Rendring\"\n      })]\n    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(\"body\", {\n      id: \"root\",\n      children: children\n    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(\"script\", {\n      src: \"bundle.js\"\n    })]\n  });\n}\n\n//# sourceURL=webpack://react-ssr-example/./client/HTML.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _hono = __webpack_require__(/*! hono */ \"hono\");\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _server = _interopRequireDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ../client/App */ \"./client/App.js\"));\nvar _HTML = _interopRequireDefault(__webpack_require__(/*! ../client/HTML */ \"./client/HTML.js\"));\nvar _nodeServer = __webpack_require__(/*! @hono/node-server */ \"@hono/node-server\");\nvar _response = __webpack_require__(/*! @hono/node-server/utils/response */ \"@hono/node-server/utils/response\");\nvar _serveStatic = __webpack_require__(/*! @hono/node-server/serve-static */ \"@hono/node-server/serve-static\");\nvar _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\nvar app = new _hono.Hono();\napp.use(\"/*\", (0, _serveStatic.serveStatic)({\n  root: \"./dist\",\n  index: \"\"\n}));\napp.get(\"/*\", function (c) {\n  var _ReactDOMServer$rende = _server[\"default\"].renderToPipeableStream( /*#__PURE__*/(0, _jsxRuntime.jsx)(_HTML[\"default\"], {\n      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_App[\"default\"], {})\n    })),\n    pipe = _ReactDOMServer$rende.pipe;\n  pipe(c.env.outgoing);\n  return _response.RESPONSE_ALREADY_SENT;\n});\n(0, _nodeServer.serve)({\n  fetch: app.fetch,\n  port: 3002\n}, function (info) {\n  console.log(\"Listening on \".concat(info.address, \":\").concat(info.port));\n});\nvar _default = exports[\"default\"] = app;\n\n//# sourceURL=webpack://react-ssr-example/./server/index.js?");

/***/ }),

/***/ "@hono/node-server":
/*!************************************!*\
  !*** external "@hono/node-server" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@hono/node-server");

/***/ }),

/***/ "@hono/node-server/serve-static":
/*!*************************************************!*\
  !*** external "@hono/node-server/serve-static" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@hono/node-server/serve-static");

/***/ }),

/***/ "@hono/node-server/utils/response":
/*!***************************************************!*\
  !*** external "@hono/node-server/utils/response" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@hono/node-server/utils/response");

/***/ }),

/***/ "hono":
/*!***********************!*\
  !*** external "hono" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("hono");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;