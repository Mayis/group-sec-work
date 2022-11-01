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

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = [\r\n  {\r\n    id: Math.random(),\r\n    title: \"London\",\r\n    src: \"https://a.cdn-hotels.com/gdcs/production29/d1870/6a5ec560-bb25-11e8-970b-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Paris\",\r\n    src: \"https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/vue-a%C3%A9rienne-paris-tour-eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-fotolia/19544352-1-fre-FR/Vue-a%C3%A9rienne-Paris-Tour-Eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-Fotolia.jpg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"New York\",\r\n    src: \"https://i.natgeofe.com/n/874df281-d3e0-489a-98c0-6b840023b828/newyork_NationalGeographic_2328428.jpg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Yerevan\",\r\n    src: \"https://cdn.britannica.com/85/133085-050-FF7058E4/Yerevan-peaks-Arm-background-Mount-Ararat.jpg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Moscow\",\r\n    src: \"https://images5.alphacoders.com/527/thumb-1920-527084.jpg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Amsterdam\",\r\n    src: \"https://static.euronews.com/articles/stories/06/83/28/68/1000x563_cmsv2_289d33f1-1c26-5b27-89bc-e35e09883314-6832868.jpg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Rome\",\r\n    src: \"https://deih43ym53wif.cloudfront.net/forum-romanum-rome-shutterstock_1486313342_98790c5210.jpeg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Hong Kong\",\r\n    src: \"https://magnifissance.com/wp-content/uploads/2022/02/Traditional-Chinese-Architecture-1.jpg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Brussel\",\r\n    src: \"https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/bltb5cb5d32753041a6/61bc44b0abe5293e65780e91/US_Brussels_Belgium_Header.jpg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Santorini\",\r\n    src: \"https://i0.wp.com/www.hachettebookgroup.com/wp-content/uploads/2020/03/Santorini.png?resize=1024%2C684&ssl=1\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Rio\",\r\n    src: \"https://upload.wikimedia.org/wikipedia/commons/9/98/Cidade_Maravilhosa.jpg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Madrid\",\r\n    src: \"https://www.travelandleisure.com/thmb/2I1sDNmheYfpBUu1vI5kvZWPVBQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/madrid-spain-city-landscape-WELLSPENTMADRID1221-4b8d575977a745b8b0da3416d1764355.jpg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Berlin\",\r\n    src: \"https://www.germany.travel/media/redaktion/content/bundeslaender/berlin/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Sidney\",\r\n    src: \"https://assets.enuygun.com/media/lib/750x525/uploads/image/5595.jpeg\",\r\n  },\r\n  {\r\n    id: Math.random(),\r\n    title: \"Deli\",\r\n    src: \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/cb/ed/caption.jpg?w=600&h=400&s=1\",\r\n  },\r\n];\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\r\n\n\n//# sourceURL=webpack://group-work-2/./src/data/data.js?");

/***/ }),

/***/ "./src/js/childSlider.js":
/*!*******************************!*\
  !*** ./src/js/childSlider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ childSlider)\n/* harmony export */ });\nfunction childSlider(parent, data, width) {\r\n  const child = document.createElement(\"div\");\r\n  child.className = \"childSlider\";\r\n  child.style.cssText = `\r\n    width:${width + \"px\"}\r\n  `;\r\n  child.innerHTML = `\r\n        <img src=\"${data.src}\" class=\"slider-img\"/>\r\n        <h1 class=\"slider-title\">${data.title}</h1>\r\n    `;\r\n  parent.appendChild(child);\r\n}\r\n\n\n//# sourceURL=webpack://group-work-2/./src/js/childSlider.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ \"./src/data/data.js\");\n/* harmony import */ var _parentSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parentSlider */ \"./src/js/parentSlider.js\");\n\r\n\r\n\r\n// ---------------------------------------\r\nconst root = document.querySelector(\"#root\");\r\n// ---------------------\r\nconst width = 300;\r\nconst autoMode = false;\r\nlet counter = 4;\r\n\r\n// RESIZE METHOD--------------\r\nwindow.onresize = displayWindowSize;\r\nwindow.onload = displayWindowSize;\r\nfunction displayWindowSize() {\r\n  const winWidth = window.innerWidth;\r\n  if (winWidth < 1100) counter = 3;\r\n  if (winWidth < 910) counter = 2;\r\n  if (winWidth < 610) counter = 1;\r\n\r\n  root.innerHTML = \"\";\r\n  (0,_parentSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(root, _data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"], width, counter, autoMode);\r\n}\r\n\n\n//# sourceURL=webpack://group-work-2/./src/js/index.js?");

/***/ }),

/***/ "./src/js/parentSlider.js":
/*!********************************!*\
  !*** ./src/js/parentSlider.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parentSlider)\n/* harmony export */ });\n/* harmony import */ var _childSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./childSlider */ \"./src/js/childSlider.js\");\n\r\n\r\nfunction parentSlider(\r\n  root,\r\n  data,\r\n  width,\r\n  counter = 1,\r\n  autoModeSelector = true\r\n) {\r\n  const container = document.createElement(\"div\");\r\n  const container2 = document.createElement(\"div\");\r\n  const btnDiv = document.createElement(\"div\");\r\n  btnDiv.className = \"btnDiv\";\r\n  const leftBtn = document.createElement(\"button\");\r\n  const rightBtn = document.createElement(\"button\");\r\n  leftBtn.textContent = \"<\";\r\n  rightBtn.textContent = \">\";\r\n  leftBtn.className = \"leftBtn\";\r\n  rightBtn.className = \"rightBtn\";\r\n  btnDiv.append(leftBtn, rightBtn);\r\n  container2.className = \"secContainer\";\r\n  container.append(container2, btnDiv);\r\n  container.id = \"container\";\r\n  root.appendChild(container);\r\n\r\n  container.style.cssText = `width:${width * counter}px`;\r\n  const fullWidth = data.length * width;\r\n  container2.style.width = fullWidth;\r\n  //   ---------------------\r\n\r\n  data.forEach((slider, i) => (0,_childSlider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(container2, slider, width));\r\n  //   -----------------\r\n  leftBtn.addEventListener(\"click\", () =>\r\n    goLeft(container2, width, fullWidth, counter)\r\n  );\r\n  rightBtn.addEventListener(\"click\", () =>\r\n    goRight(container2, width, fullWidth, counter)\r\n  );\r\n  if (autoModeSelector) autoMode(container2, width, fullWidth, counter);\r\n}\r\n// -------------------------------------------------\r\n// with left-right\r\nlet offSet = 0;\r\nfunction goRight(element, width, fullWidth, counter) {\r\n  offSet += width * counter;\r\n  if (offSet > fullWidth - width) offSet = 0;\r\n  element.style.left = -offSet + \"px\";\r\n}\r\nfunction goLeft(element, width, fullWidth, counter) {\r\n  offSet -= width * counter;\r\n  if (offSet < 0) offSet = fullWidth - width;\r\n\r\n  element.style.left = -offSet + \"px\";\r\n}\r\n// --------------------------------------------------\r\nlet id;\r\nfunction autoMode(element, width, fullWidth, counter) {\r\n  if (id) {\r\n    clearInterval(id);\r\n  }\r\n  id = setInterval(() => {\r\n    goRight(element, width, fullWidth, counter);\r\n    autoMode(element, width, fullWidth, counter);\r\n  }, 5000);\r\n}\r\n\n\n//# sourceURL=webpack://group-work-2/./src/js/parentSlider.js?");

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