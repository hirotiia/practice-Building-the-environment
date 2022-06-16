/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://built-environment/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (a, b) {\n    return \"Result is \".concat(a + b);\n});\n// オブジェクトの型注釈の書き方\nvar person = {\n    name: 'Jack',\n    age: 20\n};\nconsole.log(person.age);\n// 配列の型注釈\nvar array = ['りんご', 'みかん', 'パイナップル'];\n// Tuple型 配列ないの型の順番まで厳しく審査する\nvar book = ['onepiece', 600, true];\n// でも配列にpushすることはできる[エラーにならないが参照した際にエラーになる]\nbook.push(21);\n// enum 列挙型\nvar CofeeSize;\n(function (CofeeSize) {\n    CofeeSize[\"SHORT\"] = \"SHORT\";\n    CofeeSize[\"TALL\"] = \"TALL\";\n    CofeeSize[\"GRANDE\"] = \"GRANDE\";\n    CofeeSize[\"VENTI\"] = \"VENTI\";\n})(CofeeSize || (CofeeSize = {}));\nvar cofee = {\n    hot: true,\n    size: Cofeesize.TALL\n};\n// TSにおけるany型 javascriptに戻る(typescriptではanyはなるべく使わないように心がける)\nvar anything = true;\nanything = 'Hello';\nanything = 1;\nanything = ['イー', 'アー', 'サー', 'スー'];\nanything = {};\n// ユニオン型\nvar UnionType = 10;\n// ユニオンタイプの値が数字の場合 (numberで使用できるメソッドが使用可能になる)\nUnionType.toUpperCase();\nUnionType = '卍';\n// ユニオンタイプの値が文字の場合 (stringで使用できるメソッドが使用可能になる)\nUnionType.toUpperCase();\n// ユニオン型　　配列バージョン\nvar UnionTypes = [21, 'Hello'];\n// ◎ポイント：constで下記のような記述をした場合リテラル型になるがletで記述した場合にはstring型になる。\n// リテラル型 string型の中の'apple'型という型ができる。もう'apple'しか入れられない。 (どこで使うん....)\n// boolean,numberでも同じく設定可能\nvar apple = 'apple';\nvar grape = 'grape';\nvar size = 'L';\nvar ClothSize = {\n    color: 'red',\n    size: 'M'\n};\nvar Car1 = {\n    color: 'Black',\n    price: 10000000,\n};\n// 関数に対して型注釈を行う場合\n// 型推論はどうなる？ 引き数の方は型推論できないが、返り値には型推論が効く\nfunction add(a, b) {\n    return a + b;\n}\n// Void 何も返さない型 といいつつundifinedを返す\nfunction sayHello() {\n    console.log('Hello');\n}\n// 関数を変数の中に入れた場合の型注釈の返り値は矢印！　=>\nvar anotherAdd = add;\nvar doubleNumber = function (num) { return num * 2; };\n{\n    var doubleNum = cd(num * 2);\n    console.log(doubleNum);\n}\nhandle(21, function (callback) {\n    return doubleNumber;\n});\n{\n    throw new Error(message);\n}\nconsole.log(error('This is an error'));\n// unknown型はメタモン\n\n\n//# sourceURL=webpack://built-environment/./src/js/index.ts?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/js/init.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_init_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.ts */ \"./src/js/index.ts\");\n\n\n\n\n\nconsole.log((0,_index_ts__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(1,2));\nconsole.log(\"success build!\");\n\n//# sourceURL=webpack://built-environment/./src/js/index.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/***/ (() => {

eval("console.log('init.js');\n\n//# sourceURL=webpack://built-environment/./src/js/init.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;