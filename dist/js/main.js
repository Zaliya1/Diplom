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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerModal */ \"./modules/headerModal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_servicesModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/servicesModal */ \"./modules/servicesModal.js\");\n/* harmony import */ var _modules_validateForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validateForm */ \"./modules/validateForm.js\");\n/* harmony import */ var _modules_calculate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculate */ \"./modules/calculate.js\");\n/* harmony import */ var _modules_certificate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/certificate */ \"./modules/certificate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_headerModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('31 march 2022');\r\n(0,_modules_servicesModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validateForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_calculate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_certificate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculate.js":
/*!******************************!*\
  !*** ./modules/calculate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculate = () => {\r\n    const calc = document.getElementById('calc');\r\n    const calcType = document.getElementById('calc-type');\r\n    const calcInput = document.getElementById('calc-input');\r\n    const calcTypeMaterial = document.getElementById('calc-type-material');\r\n    const calcTotal = document.getElementById('calc-total');\r\n    let calcTypeValue;\r\n    let calcInputValue;\r\n    let calcTypeMaterialValue;\r\n    \r\n    if (calc) { // если на страницу существует калькулятор\r\n        calcType.addEventListener('change', (e) => {\r\n            calcTypeValue = e.target.value;\r\n        });\r\n        calcInput.addEventListener('input', (e) => {\r\n            calcInputValue = e.target.value;\r\n        });\r\n        calcTypeMaterial.addEventListener('change', (e) => {\r\n            calcTypeMaterialValue = e.target.value;\r\n        });\r\n        calcTotal.setAttribute(\"type\", \"text\"); // изменение на type text, чтобы вписать валюту\r\n\r\n        const countCalc = () => {\r\n            if (calcTypeValue > 0 && calcInputValue > 0 && calcTypeMaterialValue > 0) {\r\n                let calcTotalValue = Math.round(calcTypeValue * calcInputValue * calcTypeMaterialValue * 1000);\r\n                calcTotal.value = calcTotalValue + ' руб.';\r\n            } else {\r\n                calcTotal.value = \"\";\r\n            }\r\n        };\r\n        calc.addEventListener('change', (e)=> {\r\n            if (e.target === calcType || e.target === calcInput || \r\n                e.target === calcTypeMaterial) {\r\n                    countCalc();\r\n                }\r\n        });\r\n\r\n        calcInput.addEventListener('input', (e)=> {\r\n            e.target.value = e.target.value.replace(/[^\\d]/, '');\r\n        });\r\n        calcInput.addEventListener('blur', (e)=> {\r\n            e.target.value = e.target.value.replace(/[^\\d]/, '');\r\n        });\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculate);\n\n//# sourceURL=webpack:///./modules/calculate.js?");

/***/ }),

/***/ "./modules/certificate.js":
/*!********************************!*\
  !*** ./modules/certificate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst certificate = () => {\r\n    const documentOverlay = document.querySelectorAll('.document-overlay');\r\n    const overlay = document.querySelector('.overlay');\r\n    const closeBtn = document.createElement('button');\r\n    closeBtn.textContent = \"X\";\r\n    closeBtn.style.backgroundColor = \"#4f686e\";\r\n    closeBtn.style.borderRadius = \"50%\";\r\n    closeBtn.style.color = \"white\";\r\n    closeBtn.style.width = \"25px\";\r\n    closeBtn.style.height = \"25px\";\r\n\r\n    documentOverlay.forEach(certificate => {\r\n        certificate.style.width = \"200px\";\r\n        certificate.style.left = \"25%\";\r\n\r\n        certificate.addEventListener('mouseover', () => {\r\n            certificate.style.opacity = 1;\r\n        });\r\n        certificate.addEventListener('mouseout', () => {\r\n            certificate.style.opacity = 0;\r\n        });\r\n\r\n        overlay.append(closeBtn)\r\n        certificate.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            overlay.style.display = \"block\";\r\n            overlay.style.backgroundImage = \"url(../images/documents/document4.jpg)\";\r\n            overlay.style.backgroundRepeat = \"no-repeat\";\r\n            overlay.style.backgroundSize = \"contain\";\r\n            overlay.style.backgroundPosition = \"center center\";\r\n        });\r\n        closeBtn.addEventListener('click', () => {\r\n            overlay.style.display = \"none\";\r\n        });\r\n    });\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (certificate);\n\n//# sourceURL=webpack:///./modules/certificate.js?");

/***/ }),

/***/ "./modules/headerModal.js":
/*!********************************!*\
  !*** ./modules/headerModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerModal = () => {\r\n    const buttons = document.querySelectorAll('a[href=\"#callback\"]');\r\n    const modal = document.querySelector('.header-modal');\r\n    const overlay = document.querySelector('.overlay');\r\n    const closeModal = document.querySelector('.header-modal__close');\r\n    buttons.forEach(button => {\r\n        button.addEventListener('click', () => {\r\n            modal.style.display = \"block\";\r\n            overlay.style.display = \"block\";\r\n        });\r\n    });\r\n    closeModal.addEventListener('click', () => {\r\n        modal.style.display = \"none\";\r\n        overlay.style.display = \"none\"\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerModal);\n\n//# sourceURL=webpack:///./modules/headerModal.js?");

/***/ }),

/***/ "./modules/servicesModal.js":
/*!**********************************!*\
  !*** ./modules/servicesModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servicesModal = () => {\r\n    const modal = document.querySelector('.services-modal');\r\n    const overlay = document.querySelector('.overlay');\r\n    const btns = document.querySelectorAll('.service-button');\r\n    const closeModal = document.querySelector('.services-modal__close');\r\n    btns.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal.style.display = \"block\";\r\n            overlay.style.display = \"block\";\r\n        });\r\n    });\r\n    closeModal.addEventListener('click', () => {\r\n        modal.style.display = \"none\";\r\n        overlay.style.display = \"none\";\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesModal);\n\n//# sourceURL=webpack:///./modules/servicesModal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    let swiperClients = new Swiper('.benefits-inner', {\r\n        slidesPerView: \"auto\",\r\n        centeredSlides: false,\r\n        centeredSlidesBounds: true,\r\n        autoplay: {\r\n            delay: 3000,\r\n        },\r\n        loop: true,\r\n        navigation: {\r\n            nextEl: '.benefits__arrow--right',\r\n            prevEl: '.benefits__arrow--left',\r\n        },\r\n    });\r\n    const benefitsWrap = document.querySelector('.benefits-wrap');\r\n    benefitsWrap.style.height = \"70%\";\r\n    \r\n    let swiperServices = new Swiper('.row1', {\r\n        slidesPerView: \"auto\",\r\n        centeredSlides: false,\r\n        centeredSlidesBounds: true,\r\n        // autoplay: {\r\n        //     delay: 3000,\r\n        // },\r\n        // loop: true,\r\n        // grid: {\r\n        //     columns: 1,\r\n        //     rows: 2,\r\n        // },\r\n        // slidesPerView: 2,\r\n        // slidesPerColumn: 1,\r\n        // slidesPerColumnFill: 'column',\r\n        navigation: {\r\n            nextEl: '.services__arrow--right',\r\n            prevEl: '.services__arrow--left',\r\n        },\r\n    });\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelector('.count_1 > span');\r\n    const timerHours = document.querySelector('.count_2 > span');\r\n    const timerMinutes = document.querySelector('.count_3 > span');\r\n    const timerSeconds = document.querySelector('.count_4 > span');\r\n    const text = document.querySelector('.countdown-text');\r\n\r\n    const getTimeRemaining = () => {\r\n        const deadlineTime = new Date(deadline).getTime();\r\n        const today = new Date().getTime();\r\n        let timeRemaining = (deadlineTime - today) / 1000; // время до дедлайна в секундах\r\n        let days = Math.floor( timeRemaining/60/60/24 );\r\n        let hours = Math.floor( timeRemaining/60/60%24 );\r\n        let minutes = Math.floor( timeRemaining/60%60 );\r\n        let seconds = Math.floor( timeRemaining%60 );\r\n        return {timeRemaining, days, hours, minutes, seconds};\r\n    };\r\n    const clearTimer = () => {\r\n        text.innerHTML = `Акция закончилась!<div class=\"count-wrap\">\r\n        <div class=\"count count_1\">Дней:</br> <span>00</span></div>\r\n        <div class=\"count count_2\">Часов:</br> <span>00</span></div>\r\n        <div class=\"count count_3\">Минут:</br> <span>00</span></div>\r\n        <div class=\"count count_4\">Секунд:</br> <span>00</span></div>\r\n        </div>`;\r\n        // timerDays.textContent = \"00\";\r\n        // timerHours.textContent = \"00\";\r\n        // timerMinutes.textContent = \"00\";\r\n        // timerSeconds.textContent = \"00\";\r\n    };\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            if (String(getTime.days).length === 1) {\r\n                timerDays.textContent = \"0\" + getTime.days;\r\n            } else {timerDays.textContent = getTime.days;}\r\n\r\n            if (String(getTime.hours).length === 1) {\r\n                timerHours.textContent = \"0\" + getTime.hours;\r\n            } else {timerHours.textContent = getTime.hours;}\r\n\r\n            if (String(getTime.minutes).length === 1) {\r\n                timerMinutes.textContent = \"0\" + getTime.minutes;\r\n            } else {timerMinutes.textContent = getTime.minutes;}\r\n\r\n            if (String(getTime.seconds).length === 1) {\r\n                timerSeconds.textContent = \"0\" + getTime.seconds;\r\n            } else {timerSeconds.textContent = getTime.seconds;}\r\n        } else {\r\n            clearInterval(idInterval);\r\n            clearTimer();\r\n        }\r\n    };\r\n    \r\n    let getTime = getTimeRemaining();\r\n    if (getTime.timeRemaining > 0) {\r\n        updateClock();\r\n        let idInterval = setInterval(updateClock, 1000);\r\n    } else {\r\n        clearTimer();\r\n    }    \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validateForm.js":
/*!*********************************!*\
  !*** ./modules/validateForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validateForm = () => {\r\n    const forms = document.querySelectorAll('.form-horizontal');\r\n    forms.forEach(form => {\r\n        const inputs = document.querySelectorAll('.form-control');\r\n        const inputName = form.querySelector('input[name=\"fio\"]');\r\n        const inputPhone = form.querySelector('input[name=\"phone\"]');\r\n        let errorInputName = true;\r\n        let errorInputPhone = true;\r\n    \r\n        form.setAttribute('novalidate', 'novalidate'); // отключение стадарт. валидации\r\n        inputs.forEach(input => {\r\n            input.setAttribute(\"required\",\"required\"); // все инпуты обязательные\r\n        });\r\n        \r\n        inputName.addEventListener('input', (event) => {\r\n            event.target.value = event.target.value.replace(/[^а-яА-Я\\ ]/, '');\r\n            if (event.target.value.match(/[^а-яА-Я\\ ]/g) !== null || event.target.value.length < 2) {\r\n                errorInputName = true;\r\n            } else {\r\n                inputName.classList.remove('error');\r\n                errorInputName = false;\r\n            }\r\n        });\r\n        inputName.addEventListener('blur', (event) => { //1 буква большая, остальные маленькие\r\n            event.target.value = event.target.value.replace(/([а-яА-Я\\ ]){1,}/g, () => {\r\n                let str = event.target.value;\r\n                if (!str.includes(\" \")) {\r\n                    let updateStr = '';\r\n                    for (let i = 0; i<str.length; i++) {\r\n                        if (i === 0) {\r\n                            updateStr += str[i].toUpperCase(); \r\n                        } else {\r\n                            updateStr += str[i].toLowerCase();\r\n                        }\r\n                    }\r\n                    return updateStr;\r\n                } else {\r\n                    let arr = str.split(\" \");\r\n                    let updateStr = '';\r\n                    for (let n = 0; n<arr.length; n++) {\r\n                        for (let i = 0; i<arr[n].length; i++) {\r\n                            if (i === 0) {\r\n                                updateStr += arr[n][i].toUpperCase(); \r\n                            } else {\r\n                                updateStr += arr[n][i].toLowerCase();\r\n                            }\r\n                        }\r\n                        updateStr += \" \";\r\n                    }\r\n                    updateStr = updateStr.replace(/ $/g, '');\r\n                    return updateStr;\r\n                }\r\n            });\r\n        });\r\n        inputPhone.addEventListener('input', (event) => {\r\n            // если номер телефона слишком короткий, ошибка\r\n            if (event.target.value.length < 19) {\r\n                errorInputPhone = true;\r\n            } else {\r\n                inputPhone.classList.remove('error');\r\n                errorInputPhone = false;\r\n            }\r\n        });\r\n        \r\n        function maskPhone(masked = '+7 (___) ___ __ __') { \r\n            function mask(event) {\r\n                const keyCode = event.keyCode;\r\n                const template = masked,\r\n                    def = template.replace(/\\D/g, \"\"),\r\n                    val = this.value.replace(/\\D/g, \"\");\r\n                let i = 0,\r\n                    newValue = template.replace(/[_\\d]/g, function (a) {\r\n                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n                    });\r\n                i = newValue.indexOf(\"_\");\r\n                if (i != -1) {\r\n                    newValue = newValue.slice(0, i);\r\n                }\r\n                let reg = template.substr(0, this.value.length).replace(/_+/g,\r\n                    function (a) {\r\n                        return \"\\\\d{1,\" + a.length + \"}\";\r\n                    }).replace(/[+()]/g, \"\\\\$&\");\r\n                reg = new RegExp(\"^\" + reg + \"$\");\r\n                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n                    this.value = newValue;\r\n                }\r\n                if (event.type == \"blur\" && this.value.length < 5) {\r\n                    this.value = \"\";\r\n                }\r\n            }\r\n            inputPhone.addEventListener(\"input\", mask);\r\n            inputPhone.addEventListener(\"focus\", mask);\r\n            inputPhone.addEventListener(\"blur\", mask);\r\n        }\r\n    \r\n        const sendData = (data) => {\r\n            return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n                method: \"POST\",\r\n                body: JSON.stringify(data),\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\"\r\n                }\r\n            }).then(res => res.json());\r\n        };\r\n        const submitForm = () => {\r\n            const formData = new FormData(form);\r\n            const formBody = {};\r\n            formData.forEach((val, key) => {\r\n                formBody[key] = val;\r\n            });\r\n            sendData(formBody);\r\n        };\r\n    \r\n        form.addEventListener('submit', (event) => {\r\n            event.preventDefault();\r\n            if (errorInputName) {\r\n                inputName.classList.add('error');\r\n            }\r\n            if (errorInputPhone) {\r\n                inputPhone.classList.add('error');\r\n            }\r\n            else if (!errorInputName && !errorInputPhone) {\r\n                submitForm(); // Если инпуты заполнены верно, отправка данных на сервер\r\n            }\r\n        });\r\n        maskPhone();\r\n    });\r\n    \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForm);\r\n\n\n//# sourceURL=webpack:///./modules/validateForm.js?");

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