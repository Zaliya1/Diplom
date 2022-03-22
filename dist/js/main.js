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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerModal */ \"./modules/headerModal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n\r\n\r\n\r\n\r\n(0,_modules_headerModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('31 march 2022');\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/headerModal.js":
/*!********************************!*\
  !*** ./modules/headerModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerModal = () => {\r\n    const buttons = document.querySelectorAll('a[href=\"#callback\"]');\r\n    const modal = document.querySelector('.header-modal');\r\n    const overlay = document.querySelector('.overlay');\r\n    const closeModal = document.querySelector('.header-modal__close');\r\n    buttons.forEach(button => {\r\n        button.addEventListener('click', () => {\r\n            modal.style.display = \"block\";\r\n            overlay.style.display = \"block\";\r\n        });\r\n    });\r\n    closeModal.addEventListener('click', () => {\r\n        modal.style.display = \"none\";\r\n        overlay.style.display = \"none\"\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerModal);\n\n//# sourceURL=webpack:///./modules/headerModal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    let swiperClients = new Swiper('.benefits-inner', {\r\n        slidesPerView: \"auto\",\r\n        centeredSlides: false,\r\n        centeredSlidesBounds: true,\r\n        autoplay: {\r\n            delay: 3000,\r\n        },\r\n        loop: true,\r\n        navigation: {\r\n            nextEl: '.benefits__arrow--right',\r\n            prevEl: '.benefits__arrow--left',\r\n        },\r\n    });\r\n    const benefitsWrap = document.querySelector('.benefits-wrap');\r\n    benefitsWrap.style.height = \"70%\";\r\n    \r\n    let swiperServices = new Swiper('.row1', {\r\n        slidesPerView: \"auto\",\r\n        centeredSlides: false,\r\n        centeredSlidesBounds: true,\r\n        autoplay: {\r\n            delay: 3000,\r\n        },\r\n        loop: true,\r\n        navigation: {\r\n            nextEl: '.services__arrow--right',\r\n            prevEl: '.services__arrow--left',\r\n        },\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelector('.count_1 > span');\r\n    const timerHours = document.querySelector('.count_2 > span');\r\n    const timerMinutes = document.querySelector('.count_3 > span');\r\n    const timerSeconds = document.querySelector('.count_4 > span');\r\n    const getTimeRemaining = () => {\r\n        const deadlineTime = new Date(deadline).getTime();\r\n        const today = new Date().getTime();\r\n        let timeRemaining = (deadlineTime - today) / 1000; // время до дедлайна в секундах\r\n        let days = Math.floor( timeRemaining/60/60/24 );\r\n        let hours = Math.floor( timeRemaining/60/60%24 );\r\n        let minutes = Math.floor( timeRemaining/60%60 );\r\n        let seconds = Math.floor( timeRemaining%60 );\r\n        return {timeRemaining, days, hours, minutes, seconds};\r\n    };\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            if (String(getTime.days).length === 1) {\r\n                timerDays.textContent = \"0\" + getTime.days;\r\n            } else {timerDays.textContent = getTime.days;}\r\n\r\n            if (String(getTime.hours).length === 1) {\r\n                timerHours.textContent = \"0\" + getTime.hours;\r\n            } else {timerHours.textContent = getTime.hours;}\r\n\r\n            if (String(getTime.minutes).length === 1) {\r\n                timerMinutes.textContent = \"0\" + getTime.minutes;\r\n            } else {timerMinutes.textContent = getTime.minutes;}\r\n\r\n            if (String(getTime.seconds).length === 1) {\r\n                timerSeconds.textContent = \"0\" + getTime.seconds;\r\n            } else {timerSeconds.textContent = getTime.seconds;}\r\n        } else {\r\n            clearInterval(idInterval);\r\n            timerDays.textContent = \"00\";\r\n            timerHours.textContent = \"00\";\r\n            timerMinutes.textContent = \"00\";\r\n            timerSeconds.textContent = \"00\";\r\n        }\r\n    };\r\n    updateClock();\r\n    let idInterval = setInterval(updateClock, 1000);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;