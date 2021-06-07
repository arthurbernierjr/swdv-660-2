/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.mamba","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.mamba":
/*!**********************************!*\
  !*** ./src/components/App.mamba ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! teact */ \"./node_modules/teact/lib/teact.js\");\n/* harmony import */ var teact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(teact__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Generated by MambaScript 0.2.2 \nvar present = console.log; \n// Generated by MambaScript 0.2.2 \nvar $, App, Component, crel;\n \n var crel = teact__WEBPACK_IMPORTED_MODULE_0__[\"crel\"];\n \n var Component = react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"];\n$ = crel;\nApp = function (super$) {\n  extends$(App, super$);\n  function App(props) {\n    var instance$;\n    instance$ = this;\n    this.handleChange = function (a) {\n      return App.prototype.handleChange.apply(instance$, arguments);\n    };\n    this.state = {\n      name: 'Arthur',\n      age: 33\n    };\n  }\n  App.prototype.handleChange = function (e) {\n    var newState;\n    newState = {};\n    newState[e.target.id] = e.target.value;\n    return this.setState(newState);\n  };\n  App.prototype.render = function () {\n    return $('div', { className: 'container' }, function (this$) {\n      return function () {\n        $('form', { className: 'task-form' }, function (this$1) {\n          return function () {\n            $('h1', {\n              onClick: function (e) {\n                return alert('i have been clicked');\n              }\n            }, 'Hello World');\n            $('label', function (this$2) {\n              return function () {\n                $.text('Name');\n                return $('input', {\n                  id: 'name',\n                  type: 'text',\n                  onChange: this$2.handleChange,\n                  value: this$2.state.name\n                });\n              };\n            }(this$1));\n            $('label', function (this$2) {\n              return function () {\n                $.text('Age');\n                return $('input', {\n                  id: 'age',\n                  type: 'text',\n                  onChange: this$2.handleChange,\n                  value: this$2.state.age\n                });\n              };\n            }(this$1));\n            return $('button', 'Click Me For No Reason');\n          };\n        }(this$));\n        return $('h2', '' + this$.state.name + ' is ' + this$.state.age);\n      };\n    }(this));\n  };\n  return App;\n}(Component);\n/* harmony default export */ __webpack_exports__[\"a\"] = (App);\nfunction isOwn$(o, p) {\n  return {}.hasOwnProperty.call(o, p);\n}\nfunction extends$(child, parent) {\n  for (var key in parent)\n    if (isOwn$(parent, key))\n      child[key] = parent[key];\n  function ctor() {\n    this.constructor = child;\n  }\n  ctor.prototype = parent.prototype;\n  child.prototype = new ctor;\n  child.__super__ = parent.prototype;\n  return child;\n}\n\n//# sourceURL=webpack:///./src/components/App.mamba?");

/***/ }),

/***/ "./src/index.mamba":
/*!*************************!*\
  !*** ./src/index.mamba ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var teact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! teact */ \"./node_modules/teact/lib/teact.js\");\n/* harmony import */ var teact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(teact__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App_mamba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App.mamba */ \"./src/components/App.mamba\");\n// Generated by MambaScript 0.2.2 \nvar present = console.log; \n// Generated by MambaScript 0.2.2 \nvar App, crel, ReactDOM, T;\n \n var T = teact__WEBPACK_IMPORTED_MODULE_0___default.a;\n \n var ReactDOM = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a;\n \n var App = _components_App_mamba__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"];\n \n var crel = teact__WEBPACK_IMPORTED_MODULE_0__[\"crel\"];\nReactDOM.render(crel(App), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/index.mamba?");

/***/ })

/******/ });