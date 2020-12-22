/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_src/Directives/Directives.ts":
/*!***************************************!*\
  !*** ./_src/Directives/Directives.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelloWorldDirective\": () => /* binding */ HelloWorldDirective,\n/* harmony export */   \"TestDirective\": () => /* binding */ TestDirective\n/* harmony export */ });\n/* harmony import */ var _HelloWorld_hello_world_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld/hello-world.directive */ \"./_src/Directives/HelloWorld/hello-world.directive.ts\");\n/* harmony import */ var _Test_test_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Test/test.directive */ \"./_src/Directives/Test/test.directive.ts\");\n\r\n\r\nvar HelloWorldDirective = _HelloWorld_hello_world_directive__WEBPACK_IMPORTED_MODULE_0__.HelloWorldDirective;\r\nvar TestDirective = _Test_test_directive__WEBPACK_IMPORTED_MODULE_1__.TestDirective;\r\n\n\n//# sourceURL=webpack://AlloyJS/./_src/Directives/Directives.ts?");

/***/ }),

/***/ "./_src/Directives/HelloWorld/_hello-world.model.ts":
/*!**********************************************************!*\
  !*** ./_src/Directives/HelloWorld/_hello-world.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelloWorld\": () => /* binding */ HelloWorld\n/* harmony export */ });\n/* harmony import */ var _models_Directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_models/Directive */ \"./_src/_models/Directive.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar HelloWorld = (function (_super) {\r\n    __extends(HelloWorld, _super);\r\n    function HelloWorld(name, el) {\r\n        return _super.call(this, name, el) || this;\r\n    }\r\n    return HelloWorld;\r\n}(_models_Directive__WEBPACK_IMPORTED_MODULE_0__.Directive));\r\n\r\n\n\n//# sourceURL=webpack://AlloyJS/./_src/Directives/HelloWorld/_hello-world.model.ts?");

/***/ }),

/***/ "./_src/Directives/HelloWorld/hello-world.directive.ts":
/*!*************************************************************!*\
  !*** ./_src/Directives/HelloWorld/hello-world.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelloWorldDirective\": () => /* binding */ HelloWorldDirective\n/* harmony export */ });\n/* harmony import */ var _helpers_get_elements_get_elements_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_helpers/get-elements/_get-elements.helper */ \"./_src/_helpers/get-elements/_get-elements.helper.ts\");\n/* harmony import */ var _hello_world_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hello-world.model */ \"./_src/Directives/HelloWorld/_hello-world.model.ts\");\n\r\n\r\nvar selector = 'data-alloy-hello-world';\r\nvar HelloWorldDirective = function () {\r\n    var helloWorldEls = (0,_helpers_get_elements_get_elements_helper__WEBPACK_IMPORTED_MODULE_0__._getElements)(selector);\r\n    if (helloWorldEls.length > 0) {\r\n        helloWorldEls.forEach(function (el) {\r\n            var helloWorld = new _hello_world_model__WEBPACK_IMPORTED_MODULE_1__.HelloWorld(selector, el);\r\n            helloWorld.buildScope();\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://AlloyJS/./_src/Directives/HelloWorld/hello-world.directive.ts?");

/***/ }),

/***/ "./_src/Directives/Test/_test.model.ts":
/*!*********************************************!*\
  !*** ./_src/Directives/Test/_test.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Test\": () => /* binding */ Test\n/* harmony export */ });\n/* harmony import */ var _models_Directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_models/Directive */ \"./_src/_models/Directive.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Test = (function (_super) {\r\n    __extends(Test, _super);\r\n    function Test(name, el) {\r\n        return _super.call(this, name, el) || this;\r\n    }\r\n    return Test;\r\n}(_models_Directive__WEBPACK_IMPORTED_MODULE_0__.Directive));\r\n\r\n\n\n//# sourceURL=webpack://AlloyJS/./_src/Directives/Test/_test.model.ts?");

/***/ }),

/***/ "./_src/Directives/Test/test.directive.ts":
/*!************************************************!*\
  !*** ./_src/Directives/Test/test.directive.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TestDirective\": () => /* binding */ TestDirective\n/* harmony export */ });\n/* harmony import */ var _helpers_get_elements_get_elements_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_helpers/get-elements/_get-elements.helper */ \"./_src/_helpers/get-elements/_get-elements.helper.ts\");\n/* harmony import */ var _test_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_test.model */ \"./_src/Directives/Test/_test.model.ts\");\n\r\n\r\nvar TestDirective = function () {\r\n    var selector = 'data-alloy-test';\r\n    var helloWorldEls = (0,_helpers_get_elements_get_elements_helper__WEBPACK_IMPORTED_MODULE_0__._getElements)(selector);\r\n    if (helloWorldEls) {\r\n        helloWorldEls.forEach(function (el) {\r\n            return new _test_model__WEBPACK_IMPORTED_MODULE_1__.Test(selector, el);\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://AlloyJS/./_src/Directives/Test/test.directive.ts?");

/***/ }),

/***/ "./_src/_helpers/data-helpers/_get-data.ts":
/*!*************************************************!*\
  !*** ./_src/_helpers/data-helpers/_get-data.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetData\": () => /* binding */ GetData\n/* harmony export */ });\nfunction GetData(data) {\r\n    if (data) {\r\n        var str = data.trim();\r\n        var type = str.charAt(0);\r\n        var toParse = str.replace(/^([oasn],)/, \"\").trim();\r\n        var output = void 0;\r\n        switch (type) {\r\n            case 'o':\r\n            case 'a':\r\n                try {\r\n                    output = JSON.parse(toParse);\r\n                }\r\n                catch (err) {\r\n                    console.error(\"Data is not valid JSON \\n \" + err + \" \\n \" + toParse);\r\n                    return false;\r\n                }\r\n                break;\r\n            case 's':\r\n                if (typeof (toParse) === 'string') {\r\n                    output = toParse;\r\n                }\r\n                else {\r\n                    console.error(\"Not a valid string:\\n\" + toParse);\r\n                    return false;\r\n                }\r\n                break;\r\n            case 'n':\r\n                if (typeof (parseFloat(toParse)) === 'number') {\r\n                    output = parseFloat(toParse);\r\n                }\r\n                else {\r\n                    console.error(\"Not a number:\\n\" + toParse);\r\n                    return false;\r\n                }\r\n                break;\r\n            default:\r\n                console.error(\"Types should be prefixed o | a | s | n\\ne.g: data-alloy-example='o, {\\\"name\\\": \\\"exampleName\\\"}'\\no = Object;\\na = Array;\\nn = Number;\\ns = string\\n You entered \" + toParse);\r\n        }\r\n        return output;\r\n    }\r\n    else {\r\n        return {};\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://AlloyJS/./_src/_helpers/data-helpers/_get-data.ts?");

/***/ }),

/***/ "./_src/_helpers/data-helpers/_get-dataset-key.ts":
/*!********************************************************!*\
  !*** ./_src/_helpers/data-helpers/_get-dataset-key.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetDatasetKey\": () => /* binding */ GetDatasetKey\n/* harmony export */ });\nvar GetDatasetKey = function (str) {\r\n    var strArr = str.split('-');\r\n    if (strArr[0] === 'data') {\r\n        strArr.splice(0, 1);\r\n    }\r\n    var datasetKey;\r\n    strArr.map(function (str, i) {\r\n        if (i === 0) {\r\n            datasetKey = str;\r\n        }\r\n        else {\r\n            var breakStringArr = str.split('');\r\n            breakStringArr[0] = breakStringArr[0].toUpperCase();\r\n            var capitalized = breakStringArr.join('');\r\n            datasetKey += capitalized;\r\n        }\r\n    });\r\n    return datasetKey;\r\n};\r\n\n\n//# sourceURL=webpack://AlloyJS/./_src/_helpers/data-helpers/_get-dataset-key.ts?");

/***/ }),

/***/ "./_src/_helpers/get-elements/_get-elements.helper.ts":
/*!************************************************************!*\
  !*** ./_src/_helpers/get-elements/_get-elements.helper.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_getElements\": () => /* binding */ _getElements\n/* harmony export */ });\nvar _getElements = function (elName, parent) {\r\n    var elNodeList;\r\n    if (parent) {\r\n        elNodeList = parent.querySelectorAll(\"[\" + elName + \"]\");\r\n    }\r\n    else {\r\n        elNodeList = document.querySelectorAll(\"[\" + elName + \"]\");\r\n    }\r\n    if (elNodeList.length > 0) {\r\n        return Array.from(elNodeList);\r\n    }\r\n    else {\r\n        console.warn(\"Warning: GetElements - No matching html elements with the attribute: \" + elName + \". Don't import if not required!\");\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://AlloyJS/./_src/_helpers/get-elements/_get-elements.helper.ts?");

/***/ }),

/***/ "./_src/_models/Directive.ts":
/*!***********************************!*\
  !*** ./_src/_models/Directive.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Directive\": () => /* binding */ Directive\n/* harmony export */ });\n/* harmony import */ var _helpers_data_helpers_get_dataset_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers/data-helpers/_get-dataset-key */ \"./_src/_helpers/data-helpers/_get-dataset-key.ts\");\n/* harmony import */ var _helpers_data_helpers_get_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/data-helpers/_get-data */ \"./_src/_helpers/data-helpers/_get-data.ts\");\n\r\n\r\nvar Directive = (function () {\r\n    function Directive(name, el) {\r\n        this.name = (0,_helpers_data_helpers_get_dataset_key__WEBPACK_IMPORTED_MODULE_0__.GetDatasetKey)(name);\r\n        this.el = el;\r\n    }\r\n    Directive.prototype.buildScope = function () {\r\n        this.scope = (0,_helpers_data_helpers_get_data__WEBPACK_IMPORTED_MODULE_1__.GetData)(this.el.dataset[this.name]);\r\n    };\r\n    return Directive;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://AlloyJS/./_src/_models/Directive.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./_src/Directives/Directives.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;