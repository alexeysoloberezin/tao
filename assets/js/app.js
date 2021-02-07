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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nAOS.init({\r\n  duration: 1000,\r\n});\r\nvar homebody = document.querySelector('#homebody-slider');\r\nvar homebodyslider = new Swiper('#homebody-slider',{\r\n  loop: true,\r\n  autoplay: {\r\n    delay: 4000,\r\n  },\r\n  speed: 1000,\r\n});\r\nhomebody.addEventListener('mouseenter', function (e){\r\n  homebodyslider.autoplay.stop(); \r\n});\r\nhomebody.addEventListener('mouseleave', function (e){\r\n  homebodyslider.autoplay.start(); \r\n});\r\nvar swiper = new Swiper('#slider-items', {\r\n  grabCursor: true,\r\n  centeredSlides: true,\r\n  effect: 'coverflow',\r\n  loop: true,\r\n  initialSlide: 2,  \r\n  breakpoints: {\r\n    // when window width is >= 320px\r\n    0: {     \r\n      slidesPerView: 1.35,\r\n      spaceBetween:5,\r\n    },\r\n    360: {     \r\n      slidesPerView: 1.5,\r\n      spaceBetween:20,\r\n    },\r\n    450: {     \r\n      slidesPerView: 2,\r\n      spaceBetween:30,\r\n    },\r\n    625: {  \r\n      slidesPerView: '2.9',\r\n      spaceBetween:30,\r\n      coverflowEffect: {\r\n        rotate: 0,\r\n        stretch: 0,\r\n        depth: 100,\r\n        modifier: 1,\r\n        slideShadows: true,\r\n      }\r\n    },\r\n    625: {\r\n      slidesPerView: '2.9',\r\n      spaceBetween:30,\r\n      coverflowEffect: {\r\n        rotate: 28,\r\n        stretch: 0,\r\n        depth: 100,\r\n        modifier: 1,\r\n        slideShadows: true,\r\n      }\r\n    },\r\n    830: {\r\n      slidesPerView: '3.1',\r\n      spaceBetween:50,      \r\n    },\r\n    1120: {\r\n      spaceBetween: 40, \r\n      slidesPerView: '4.6',\r\n      coverflowEffect: {\r\n        rotate: 24,\r\n        stretch: 0,\r\n        depth: 100,\r\n        modifier: 1,\r\n        slideShadows: true,\r\n      }\r\n    },   \r\n    1400: {\r\n      spaceBetween: 90, \r\n      slidesPerView: '4.3',\r\n      coverflowEffect: {\r\n        rotate: 28,       \r\n      }\r\n    }\r\n  }\r\n});\r\nvar swiper = new Swiper('#slider-news', { \r\n  pagination: {\r\n    el: '.swiper-pagination',\r\n    clickable: true,\r\n  },\r\n  navigation: {\r\n    nextEl: '.swiper-button-next',\r\n    prevEl: '.swiper-button-prev',\r\n  },\r\n  breakpoints: {\r\n    0: {     \r\n      slidesPerView: 1.1,\r\n      spaceBetween: 15,\r\n      centeredSlides: true,\r\n      slidesPerGroup: 1,\r\n      loop: true,\r\n    },\r\n    400: {     \r\n      slidesPerView: 1.2,\r\n      spaceBetween: 20,    \r\n      slidesPerGroup: 1, \r\n      centeredSlides: true,\r\n      loop: true,\r\n    },\r\n    520: {     \r\n      slidesPerView: 2,\r\n      spaceBetween: 25,\r\n      slidesPerGroup: 2,\r\n      centeredSlides: false,\r\n      loop: false,\r\n    },   \r\n    800: {     \r\n      slidesPerView: 3,\r\n      spaceBetween: 25,\r\n      slidesPerGroup: 3,\r\n      centeredSlides: false,\r\n      loop: false,\r\n    },\r\n    1060: {     \r\n      slidesPerView: 4,\r\n      centeredSlides: false,\r\n      spaceBetween: 30,\r\n      slidesPerGroup: 3,\r\n      loop: false,\r\n    },\r\n  }\r\n});\r\n\r\nvar burger = document.querySelector('.burger');\r\nvar menu = document.querySelector('.header__mobmenu');\r\nvar closemenu = document.querySelector('.closemenu');\r\nvar body = document.querySelector('body');\r\nvar window = document.querySelector('.window');\r\n\r\nburger.addEventListener('click', function(){\r\n  menu.classList.add('active');  \r\n  window.classList.add('active');  \r\n  body.classList.add('fixed'); \r\n   \r\n});\r\n\r\nclosemenu.addEventListener('click', function(){\r\n  menu.classList.remove('active');  \r\n  body.classList.remove('fixed');  \r\n  window.classList.remove('active');  \r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/select.js":
/*!*********************************!*\
  !*** ./src/assets/js/select.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//Select\r\n\r\nlet selects = document.getElementsByTagName('select');\r\nif (selects.length > 0) {\r\n\tselects_init();\r\n}\r\nfunction selects_init() {\r\n\tfor (let index = 0; index < selects.length; index++) {\r\n\t\tconst select = selects[index];\r\n\t\tselect_init(select);\r\n\t}\r\n\t//select_callback();\r\n\tdocument.addEventListener('click', function (e) {\r\n\t\tselects_close(e);\r\n\t});\r\n\tdocument.addEventListener('keydown', function (e) {\r\n\t\tif (e.which == 27) {\r\n\t\t\tselects_close(e);\r\n\t\t}\r\n\t});\r\n}\r\nfunction selects_close(e) {\r\n\tconst selects = document.querySelectorAll('.select');\r\n\tif (!e.target.closest('.select')) {\r\n\t\tfor (let index = 0; index < selects.length; index++) {\r\n\t\t\tconst select = selects[index];\r\n\t\t\tconst select_body_options = select.querySelector('.select__options');\r\n\t\t\tselect.classList.remove('_active');\r\n\t\t\t_slideUp(select_body_options, 100);\r\n\t\t}\r\n\t}\r\n}\r\nfunction select_init(select) {\r\n\tconst select_parent = select.parentElement;\r\n\tconst select_modifikator = select.getAttribute('class');\r\n\tconst select_selected_option = select.querySelector('option:checked');\r\n\tselect.setAttribute('data-default', select_selected_option.value);\r\n\tselect.style.display = 'none';\r\n\r\n\tselect_parent.insertAdjacentHTML('beforeend', '<div class=\"select select_' + select_modifikator + '\"></div>');\r\n\r\n\tlet new_select = select.parentElement.querySelector('.select');\r\n\tnew_select.appendChild(select);\r\n\tselect_item(select);\r\n}\r\nfunction select_item(select) {\r\n\tconst select_parent = select.parentElement;\r\n\tconst select_items = select_parent.querySelector('.select__item');\r\n\tconst select_options = select.querySelectorAll('option');\r\n\tconst select_selected_option = select.querySelector('option:checked');\r\n\tconst select_selected_text = select_selected_option.text;\r\n\tconst select_type = select.getAttribute('data-type');\r\n\r\n\tif (select_items) {\r\n\t\tselect_items.remove();\r\n\t}\r\n\r\n\tlet select_type_content = '';\r\n\tif (select_type == 'input') {\r\n\t\tselect_type_content = '<div class=\"select__value\"><input autocomplete=\"off\" type=\"text\" name=\"form[]\" value=\"' + select_selected_text + '\" data-error=\"Ошибка\" data-value=\"' + select_selected_text + '\" class=\"select__input\"></div>';\r\n\t} else {\r\n\t\tselect_type_content = '<div class=\"select__value\"><span>' + select_selected_text + '</span></div>';\r\n\t}\r\n\r\n\tselect_parent.insertAdjacentHTML('beforeend',\r\n\t\t'<div class=\"select__item\">' +\r\n\t\t'<div class=\"select__title\">' + select_type_content + '</div>' +\r\n\t\t'<div class=\"select__options\">' + select_get_options(select_options) + '</div>' +\r\n\t\t'</div></div>');\r\n\r\n\tselect_actions(select, select_parent);\r\n}\r\nfunction select_actions(original, select) {\r\n\tconst select_item = select.querySelector('.select__item');\r\n\tconst select_body_options = select.querySelector('.select__options');\r\n\tconst select_options = select.querySelectorAll('.select__option');\r\n\tconst select_type = original.getAttribute('data-type');\r\n\tconst select_input = select.querySelector('.select__input');\r\n\r\n\tselect_item.addEventListener('click', function () {\r\n\t\tlet selects = document.querySelectorAll('.select');\r\n\t\tfor (let index = 0; index < selects.length; index++) {\r\n\t\t\tconst select = selects[index];\r\n\t\t\tconst select_body_options = select.querySelector('.select__options');\r\n\t\t\tif (select != select_item.closest('.select')) {\r\n\t\t\t\tselect.classList.remove('_active');\r\n\t\t\t\t_slideUp(select_body_options, 100);\r\n\t\t\t}\r\n\t\t}\r\n\t\t_slideToggle(select_body_options, 100);\r\n\t\tselect.classList.toggle('_active');\r\n\t});\r\n\r\n\tfor (let index = 0; index < select_options.length; index++) {\r\n\t\tconst select_option = select_options[index];\r\n\t\tconst select_option_value = select_option.getAttribute('data-value');\r\n\t\tconst select_option_text = select_option.innerHTML;\r\n\r\n\t\tif (select_type == 'input') {\r\n\t\t\tselect_input.addEventListener('keyup', select_search);\r\n\t\t} else {\r\n\t\t\tif (select_option.getAttribute('data-value') == original.value) {\r\n\t\t\t\tselect_option.style.display = 'none';\r\n\t\t\t}\r\n\t\t}\r\n\t\tselect_option.addEventListener('click', function () {\r\n\t\t\tfor (let index = 0; index < select_options.length; index++) {\r\n\t\t\t\tconst el = select_options[index];\r\n\t\t\t\tel.style.display = 'block';\r\n\t\t\t}\r\n\t\t\tif (select_type == 'input') {\r\n\t\t\t\tselect_input.value = select_option_text;\r\n\t\t\t\toriginal.value = select_option_value;\r\n\t\t\t} else {\r\n\t\t\t\tselect.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';\r\n\t\t\t\toriginal.value = select_option_value;\r\n\t\t\t\tselect_option.style.display = 'none';\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n}\r\nfunction select_get_options(select_options) {\r\n\tif (select_options) {\r\n\t\tlet select_options_content = '';\r\n\t\tfor (let index = 0; index < select_options.length; index++) {\r\n\t\t\tconst select_option = select_options[index];\r\n\t\t\tconst select_option_value = select_option.value;\r\n\t\t\tif (select_option_value != '') {\r\n\t\t\t\tconst select_option_text = select_option.text;\r\n\t\t\t\tselect_options_content = select_options_content + '<div data-value=\"' + select_option_value + '\" class=\"select__option\">' + select_option_text + '</div>';\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn select_options_content;\r\n\t}\r\n}\r\nfunction select_search(e) {\r\n\tlet select_block = e.target.closest('.select ').querySelector('.select__options');\r\n\tlet select_options = e.target.closest('.select ').querySelectorAll('.select__option');\r\n\tlet select_search_text = e.target.value.toUpperCase();\r\n\r\n\tfor (let i = 0; i < select_options.length; i++) {\r\n\t\tlet select_option = select_options[i];\r\n\t\tlet select_txt_value = select_option.textContent || select_option.innerText;\r\n\t\tif (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {\r\n\t\t\tselect_option.style.display = \"\";\r\n\t\t} else {\r\n\t\t\tselect_option.style.display = \"none\";\r\n\t\t}\r\n\t}\r\n}\r\nfunction selects_update_all() {\r\n\tlet selects = document.querySelectorAll('select');\r\n\tif (selects) {\r\n\t\tfor (let index = 0; index < selects.length; index++) {\r\n\t\t\tconst select = selects[index];\r\n\t\t\tselect_item(select);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\r\nlet _slideUp = (target, duration = 500) => {\r\n\ttarget.style.transitionProperty = 'height, margin, padding';\r\n\ttarget.style.transitionDuration = duration + 'ms';\r\n\ttarget.style.height = target.offsetHeight + 'px';\r\n\ttarget.offsetHeight;\r\n\ttarget.style.overflow = 'hidden';\r\n\ttarget.style.height = 0;\r\n\ttarget.style.paddingTop = 0;\r\n\ttarget.style.paddingBottom = 0;\r\n\ttarget.style.marginTop = 0;\r\n\ttarget.style.marginBottom = 0;\r\n\twindow.setTimeout(() => {\r\n\t\ttarget.style.display = 'none';\r\n\t\ttarget.style.removeProperty('height');\r\n\t\ttarget.style.removeProperty('padding-top');\r\n\t\ttarget.style.removeProperty('padding-bottom');\r\n\t\ttarget.style.removeProperty('margin-top');\r\n\t\ttarget.style.removeProperty('margin-bottom');\r\n\t\ttarget.style.removeProperty('overflow');\r\n\t\ttarget.style.removeProperty('transition-duration');\r\n\t\ttarget.style.removeProperty('transition-property');\r\n\t\ttarget.classList.remove('_slide');\r\n\t}, duration);\r\n}\r\nlet _slideDown = (target, duration = 500) => {\r\n\ttarget.style.removeProperty('display');\r\n\tlet display = window.getComputedStyle(target).display;\r\n\tif (display === 'none')\r\n\t\tdisplay = 'block';\r\n\r\n\ttarget.style.display = display;\r\n\tlet height = target.offsetHeight;\r\n\ttarget.style.overflow = 'hidden';\r\n\ttarget.style.height = 0;\r\n\ttarget.style.paddingTop = 0;\r\n\ttarget.style.paddingBottom = 0;\r\n\ttarget.style.marginTop = 0;\r\n\ttarget.style.marginBottom = 0;\r\n\ttarget.offsetHeight;\r\n\ttarget.style.transitionProperty = \"height, margin, padding\";\r\n\ttarget.style.transitionDuration = duration + 'ms';\r\n\ttarget.style.height = height + 'px';\r\n\ttarget.style.removeProperty('padding-top');\r\n\ttarget.style.removeProperty('padding-bottom');\r\n\ttarget.style.removeProperty('margin-top');\r\n\ttarget.style.removeProperty('margin-bottom');\r\n\twindow.setTimeout(() => {\r\n\t\ttarget.style.removeProperty('height');\r\n\t\ttarget.style.removeProperty('overflow');\r\n\t\ttarget.style.removeProperty('transition-duration');\r\n\t\ttarget.style.removeProperty('transition-property');\r\n\t\ttarget.classList.remove('_slide');\r\n\t}, duration);\r\n}\r\nlet _slideToggle = (target, duration = 500) => {\r\n\tif (!target.classList.contains('_slide')) {\r\n\t\ttarget.classList.add('_slide');\r\n\t\tif (window.getComputedStyle(target).display === 'none') {\r\n\t\t\treturn _slideDown(target, duration);\r\n\t\t} else {\r\n\t\t\treturn _slideUp(target, duration);\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/select.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ./src/assets/js/select.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\alexe\\Desktop\\taov1 — копия\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\Users\\alexe\\Desktop\\taov1 — копия\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\alexe\\Desktop\\taov1 — копия\\src\\assets\\js\\select.js */\"./src/assets/js/select.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js_./src/assets/js/select.js?");

/***/ })

/******/ });