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

/***/ "./_framework/_src/Directives/Directives.ts":
/*!**************************************************!*\
  !*** ./_framework/_src/Directives/Directives.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelloWorldDirective\": () => /* binding */ HelloWorldDirective,\n/* harmony export */   \"TestDirective\": () => /* binding */ TestDirective\n/* harmony export */ });\n/* harmony import */ var _HelloWorld_hello_world_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld/hello-world.directive */ \"./_framework/_src/Directives/HelloWorld/hello-world.directive.ts\");\n/* harmony import */ var _Test_test_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Test/test.directive */ \"./_framework/_src/Directives/Test/test.directive.ts\");\n\r\n\r\nconst HelloWorldDirective = _HelloWorld_hello_world_directive__WEBPACK_IMPORTED_MODULE_0__.HelloWorldDirective;\r\nconst TestDirective = _Test_test_directive__WEBPACK_IMPORTED_MODULE_1__.TestDirective;\r\n\n\n//# sourceURL=webpack://AlloyJS/./_framework/_src/Directives/Directives.ts?");

/***/ }),

/***/ "./_framework/_src/Directives/HelloWorld/_hello-world.model.ts":
/*!*********************************************************************!*\
  !*** ./_framework/_src/Directives/HelloWorld/_hello-world.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelloWorld\": () => /* binding */ HelloWorld\n/* harmony export */ });\n/* harmony import */ var _models_Directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_models/Directive */ \"./_framework/_src/_models/Directive.ts\");\n\r\nclass HelloWorld extends _models_Directive__WEBPACK_IMPORTED_MODULE_0__.Directive {\r\n    constructor(name, el) {\r\n        super(name, el);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://AlloyJS/./_framework/_src/Directives/HelloWorld/_hello-world.model.ts?");

/***/ }),

/***/ "./_framework/_src/Directives/HelloWorld/hello-world.directive.ts":
/*!************************************************************************!*\
  !*** ./_framework/_src/Directives/HelloWorld/hello-world.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelloWorldDirective\": () => /* binding */ HelloWorldDirective\n/* harmony export */ });\n/* harmony import */ var _helpers_get_elements_get_elements_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_helpers/get-elements/_get-elements.helper */ \"./_framework/_src/_helpers/get-elements/_get-elements.helper.ts\");\n/* harmony import */ var _hello_world_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hello-world.model */ \"./_framework/_src/Directives/HelloWorld/_hello-world.model.ts\");\n\r\n\r\nconst selector = 'data-alloy-hello-world';\r\nconst HelloWorldDirective = () => {\r\n    const helloWorldEls = (0,_helpers_get_elements_get_elements_helper__WEBPACK_IMPORTED_MODULE_0__._getElements)(selector);\r\n    if (helloWorldEls.length > 0) {\r\n        helloWorldEls.forEach(el => {\r\n            const helloWorld = new _hello_world_model__WEBPACK_IMPORTED_MODULE_1__.HelloWorld(selector, el);\r\n            helloWorld.buildScope();\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://AlloyJS/./_framework/_src/Directives/HelloWorld/hello-world.directive.ts?");

/***/ }),

/***/ "./_framework/_src/Directives/Test/_test.model.ts":
/*!********************************************************!*\
  !*** ./_framework/_src/Directives/Test/_test.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Test\": () => /* binding */ Test\n/* harmony export */ });\n/* harmony import */ var _models_Directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_models/Directive */ \"./_framework/_src/_models/Directive.ts\");\n\r\nclass Test extends _models_Directive__WEBPACK_IMPORTED_MODULE_0__.Directive {\r\n    constructor(name, el) {\r\n        super(name, el);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://AlloyJS/./_framework/_src/Directives/Test/_test.model.ts?");

/***/ }),

/***/ "./_framework/_src/Directives/Test/test.directive.ts":
/*!***********************************************************!*\
  !*** ./_framework/_src/Directives/Test/test.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TestDirective\": () => /* binding */ TestDirective\n/* harmony export */ });\n/* harmony import */ var _helpers_get_elements_get_elements_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_helpers/get-elements/_get-elements.helper */ \"./_framework/_src/_helpers/get-elements/_get-elements.helper.ts\");\n/* harmony import */ var _test_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_test.model */ \"./_framework/_src/Directives/Test/_test.model.ts\");\n\r\n\r\nconst TestDirective = () => {\r\n    const selector = 'data-alloy-test';\r\n    const helloWorldEls = (0,_helpers_get_elements_get_elements_helper__WEBPACK_IMPORTED_MODULE_0__._getElements)(selector);\r\n    if (helloWorldEls) {\r\n        helloWorldEls.forEach((el) => {\r\n            return new _test_model__WEBPACK_IMPORTED_MODULE_1__.Test(selector, el);\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://AlloyJS/./_framework/_src/Directives/Test/test.directive.ts?");

/***/ }),

/***/ "./_framework/_src/_helpers/data-helpers/_get-data.ts":
/*!************************************************************!*\
  !*** ./_framework/_src/_helpers/data-helpers/_get-data.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetData\": () => /* binding */ GetData\n/* harmony export */ });\nfunction GetData(data) {\r\n    if (data) {\r\n        let str = data.trim();\r\n        const type = str.charAt(0);\r\n        const toParse = str.replace(/^([oasn],)/, \"\").trim();\r\n        let output;\r\n        switch (type) {\r\n            case 'o':\r\n            case 'a':\r\n                try {\r\n                    output = JSON.parse(toParse);\r\n                }\r\n                catch (err) {\r\n                    console.error(`Data is not valid JSON \\n ${err} \\n ${toParse}`);\r\n                    return false;\r\n                }\r\n                break;\r\n            case 's':\r\n                if (typeof (toParse) === 'string') {\r\n                    output = toParse;\r\n                }\r\n                else {\r\n                    console.error(`Not a valid string:\\n${toParse}`);\r\n                    return false;\r\n                }\r\n                break;\r\n            case 'n':\r\n                if (typeof (parseFloat(toParse)) === 'number') {\r\n                    output = parseFloat(toParse);\r\n                }\r\n                else {\r\n                    console.error(`Not a number:\\n${toParse}`);\r\n                    return false;\r\n                }\r\n                break;\r\n            default:\r\n                console.error(`Types should be prefixed o | a | s | n\\ne.g: data-alloy-example='o, {\"name\": \"exampleName\"}'\\no = Object;\\na = Array;\\nn = Number;\\ns = string\\n You entered ${toParse}`);\r\n        }\r\n        return output;\r\n    }\r\n    else {\r\n        return {};\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://AlloyJS/./_framework/_src/_helpers/data-helpers/_get-data.ts?");

/***/ }),

/***/ "./_framework/_src/_helpers/data-helpers/_get-dataset-key.ts":
/*!*******************************************************************!*\
  !*** ./_framework/_src/_helpers/data-helpers/_get-dataset-key.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetDatasetKey\": () => /* binding */ GetDatasetKey\n/* harmony export */ });\nconst GetDatasetKey = (str) => {\r\n    let strArr = str.split('-');\r\n    if (strArr[0] === 'data') {\r\n        strArr.splice(0, 1);\r\n    }\r\n    let datasetKey;\r\n    strArr.map((str, i) => {\r\n        if (i === 0) {\r\n            datasetKey = str;\r\n        }\r\n        else {\r\n            const breakStringArr = str.split('');\r\n            breakStringArr[0] = breakStringArr[0].toUpperCase();\r\n            const capitalized = breakStringArr.join('');\r\n            datasetKey += capitalized;\r\n        }\r\n    });\r\n    return datasetKey;\r\n};\r\n\n\n//# sourceURL=webpack://AlloyJS/./_framework/_src/_helpers/data-helpers/_get-dataset-key.ts?");

/***/ }),

/***/ "./_framework/_src/_helpers/get-elements/_get-elements.helper.ts":
/*!***********************************************************************!*\
  !*** ./_framework/_src/_helpers/get-elements/_get-elements.helper.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_getElements\": () => /* binding */ _getElements\n/* harmony export */ });\nconst _getElements = (elName, parent) => {\r\n    let elNodeList;\r\n    if (parent) {\r\n        elNodeList = parent.querySelectorAll(`[${elName}]`);\r\n    }\r\n    else {\r\n        elNodeList = document.querySelectorAll(`[${elName}]`);\r\n    }\r\n    if (elNodeList.length > 0) {\r\n        return Array.from(elNodeList);\r\n    }\r\n    else {\r\n        console.warn(`Warning: GetElements - No matching html elements with the attribute: ${elName}. Don't import if not required!`);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://AlloyJS/./_framework/_src/_helpers/get-elements/_get-elements.helper.ts?");

/***/ }),

/***/ "./_framework/_src/_models/Directive.ts":
/*!**********************************************!*\
  !*** ./_framework/_src/_models/Directive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Directive\": () => /* binding */ Directive\n/* harmony export */ });\n/* harmony import */ var _helpers_data_helpers_get_dataset_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers/data-helpers/_get-dataset-key */ \"./_framework/_src/_helpers/data-helpers/_get-dataset-key.ts\");\n/* harmony import */ var _helpers_data_helpers_get_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/data-helpers/_get-data */ \"./_framework/_src/_helpers/data-helpers/_get-data.ts\");\n\r\n\r\nclass Directive {\r\n    constructor(name, el) {\r\n        this.name = (0,_helpers_data_helpers_get_dataset_key__WEBPACK_IMPORTED_MODULE_0__.GetDatasetKey)(name);\r\n        this.el = el;\r\n    }\r\n    buildScope() {\r\n        this.scope = (0,_helpers_data_helpers_get_data__WEBPACK_IMPORTED_MODULE_1__.GetData)(this.el.dataset[this.name]);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://AlloyJS/./_framework/_src/_models/Directive.ts?");

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _framework_src_Directives_Directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_framework/_src/Directives/Directives */ \"./_framework/_src/Directives/Directives.ts\");\n/* harmony import */ var _framework_src_Directives_Test_test_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_framework/_src/Directives/Test/test.directive */ \"./_framework/_src/Directives/Test/test.directive.ts\");\n\r\n\r\n(0,_framework_src_Directives_Directives__WEBPACK_IMPORTED_MODULE_0__.HelloWorldDirective)();\r\n(0,_framework_src_Directives_Test_test_directive__WEBPACK_IMPORTED_MODULE_1__.TestDirective)();\r\n\n\n//# sourceURL=webpack://AlloyJS/./main.ts?");

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
/******/ 	__webpack_require__("./main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;