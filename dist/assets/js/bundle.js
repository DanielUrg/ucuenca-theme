/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/components/MenuPrincipal.js":
/*!***************************************************!*\
  !*** ./src/assets/js/components/MenuPrincipal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it["return"] != null) it["return"]();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}var MenuPrincipal = /*#__PURE__*/function () {
  // 1. Instancia del objeto
  function MenuPrincipal() {_classCallCheck(this, MenuPrincipal);
    this.mainMenuModal = document.getElementById("main-nav-bar");
    this.modal = document.getElementById("modal-bg");
    this.openMainNabBtn = document.getElementById("open-main-nav-bar");
    this.closeMainNabBtn = document.getElementById("close-main-nav-bar");
    this.accordions = document.getElementsByClassName("accordion-principal");

    this.init();
    this.events();
  }
  // 2. Eventos
  _createClass(MenuPrincipal, [{ key: "events", value: function events() {var _this = this;
      this.openMainNabBtn.addEventListener("click", function () {return _this.addMainActive();});
      this.closeMainNabBtn.addEventListener("click", function () {return (
          _this.removeMainActive());});

      this.modal.addEventListener("click", function () {return _this.removeMainActive();});
    }
    // 3. Métodos
  }, { key: "init", value: function init() {var _iterator = _createForOfIteratorHelper(
      this.accordions),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var accordion = _step.value;
          var plus = accordion.querySelector(".accordion__plus");
          plus.addEventListener("click", function () {
            this.accordions = document.getElementsByClassName(
            "accordion-principal");
            // revisar
            this.classList.toggle("plus-active");var _iterator2 = _createForOfIteratorHelper(
            this.accordions),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _accordion = _step2.value;
                if (_accordion != this.parentNode) {
                  _accordion.
                  querySelector(".accordion__plus").
                  classList.remove("plus-active");
                  var nextElement = _accordion.nextElementSibling;
                  if (nextElement.classList.contains("primari-nav__submenu")) {
                    nextElement.style.maxHeight = null;
                  }
                }
              }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
            var panel = this.parentNode.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
    } }, { key: "addMainActive", value:
    function addMainActive() {
      this.mainMenuModal.classList.add("main-nav-bar--active");
      this.modal.classList.add("modal-bg--active");
    } }, { key: "removeMainActive", value:
    function removeMainActive() {
      this.mainMenuModal.classList.remove("main-nav-bar--active");
      this.modal.classList.remove("modal-bg--active");
    } }]);return MenuPrincipal;}();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPrincipal);

/***/ }),

/***/ "./src/assets/js/components/MenuSecundario.js":
/*!****************************************************!*\
  !*** ./src/assets/js/components/MenuSecundario.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it["return"] != null) it["return"]();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}var MenuPrincipal = /*#__PURE__*/function () {
  // 1. Instancia del objeto
  function MenuPrincipal() {_classCallCheck(this, MenuPrincipal);
    this.accordions = document.getElementsByClassName("accordion-secundario");
    this.init();
    this.events();
  }
  // 2. Eventos
  _createClass(MenuPrincipal, [{ key: "events", value: function events() {}
    // 3. Métodos
  }, { key: "init", value: function init() {var _iterator = _createForOfIteratorHelper(
      this.accordions),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var accordion = _step.value;
          var plus = accordion.querySelector(".accordion__plus");
          plus.addEventListener("click", function () {
            this.accordions = document.getElementsByClassName(
            "accordion-secundario");
            // revisar
            this.classList.toggle("plus-active");var _iterator2 = _createForOfIteratorHelper(
            this.accordions),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _accordion = _step2.value;
                if (_accordion != this.parentNode) {
                  _accordion.
                  querySelector(".accordion__plus").
                  classList.remove("plus-active");
                  var nextElement = _accordion.nextElementSibling;
                  if (nextElement.classList.contains("primari-nav__submenu")) {
                    nextElement.style.maxHeight = null;
                  }
                }
              }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
            var panel = this.parentNode.nextElementSibling;

            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
    } }]);return MenuPrincipal;}();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuPrincipal);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MenuPrincipal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MenuPrincipal */ "./src/assets/js/components/MenuPrincipal.js");
/* harmony import */ var _components_MenuSecundario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MenuSecundario */ "./src/assets/js/components/MenuSecundario.js");
 // Menú dropdown del menú principal
 // Menú dropdown del menú principal

var menuPrincipal = new _components_MenuPrincipal__WEBPACK_IMPORTED_MODULE_0__["default"]();
var menuSecundario = new _components_MenuSecundario__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFaLEdBQXdCLElBQXhCO1lBQ0QsQ0FGRCxNQUVPO2NBQ0xDLEtBQUssQ0FBQ0YsS0FBTixDQUFZQyxTQUFaLEdBQXdCQyxLQUFLLENBQUNDLFlBQU4sR0FBcUIsSUFBN0M7WUFDRDtVQUNGLENBdkJEO1FBd0JELENBM0JJO0lBNEJOOzs7QUFHSCxpRUFBZTNCLGFBQWY7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztDQ053RDtDQUNFOztBQUUxRCxJQUFNOEIsYUFBYSxHQUFHLElBQUk5QixpRUFBSixFQUF0QjtBQUNBLElBQU0rQixjQUFjLEdBQUcsSUFBSUYsa0VBQUosRUFBdkIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VjdWVuY2FfdGhlbWUvLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWVudVByaW5jaXBhbC5qcyIsIndlYnBhY2s6Ly91Y3VlbmNhX3RoZW1lLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL01lbnVTZWN1bmRhcmlvLmpzIiwid2VicGFjazovL3VjdWVuY2FfdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdWN1ZW5jYV90aGVtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdWN1ZW5jYV90aGVtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VjdWVuY2FfdGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91Y3VlbmNhX3RoZW1lLy4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWVudVByaW5jaXBhbCB7XHJcbiAgLy8gMS4gSW5zdGFuY2lhIGRlbCBvYmpldG9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWFpbk1lbnVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXYtYmFyXCIpO1xyXG4gICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYmdcIik7XHJcbiAgICB0aGlzLm9wZW5NYWluTmFiQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuLW1haW4tbmF2LWJhclwiKTtcclxuICAgIHRoaXMuY2xvc2VNYWluTmFiQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tYWluLW5hdi1iYXJcIik7XHJcbiAgICB0aGlzLmFjY29yZGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWNjb3JkaW9uLXByaW5jaXBhbFwiKTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgfVxyXG4gIC8vIDIuIEV2ZW50b3NcclxuICBldmVudHMoKSB7XHJcbiAgICB0aGlzLm9wZW5NYWluTmFiQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmFkZE1haW5BY3RpdmUoKSk7XHJcbiAgICB0aGlzLmNsb3NlTWFpbk5hYkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgdGhpcy5yZW1vdmVNYWluQWN0aXZlKClcclxuICAgICk7XHJcbiAgICB0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnJlbW92ZU1haW5BY3RpdmUoKSk7XHJcbiAgfVxyXG4gIC8vIDMuIE3DqXRvZG9zXHJcbiAgaW5pdCgpIHtcclxuICAgIGZvciAobGV0IGFjY29yZGlvbiBvZiB0aGlzLmFjY29yZGlvbnMpIHtcclxuICAgICAgbGV0IHBsdXMgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvcihcIi5hY2NvcmRpb25fX3BsdXNcIik7XHJcbiAgICAgIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjY29yZGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgXCJhY2NvcmRpb24tcHJpbmNpcGFsXCJcclxuICAgICAgICApOyAvLyByZXZpc2FyXHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwicGx1cy1hY3RpdmVcIik7XHJcbiAgICAgICAgZm9yIChsZXQgYWNjb3JkaW9uIG9mIHRoaXMuYWNjb3JkaW9ucykge1xyXG4gICAgICAgICAgaWYgKGFjY29yZGlvbiAhPSB0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgYWNjb3JkaW9uXHJcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3JkaW9uX19wbHVzXCIpXHJcbiAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJwbHVzLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbGV0IG5leHRFbGVtZW50ID0gYWNjb3JkaW9uLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgaWYgKG5leHRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInByaW1hcmktbmF2X19zdWJtZW51XCIpKSB7XHJcbiAgICAgICAgICAgICAgbmV4dEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFuZWwgPSB0aGlzLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcclxuICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRNYWluQWN0aXZlKCkge1xyXG4gICAgdGhpcy5tYWluTWVudU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluLW5hdi1iYXItLWFjdGl2ZVwiKTtcclxuICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJnLS1hY3RpdmVcIik7XHJcbiAgfVxyXG4gIHJlbW92ZU1haW5BY3RpdmUoKSB7XHJcbiAgICB0aGlzLm1haW5NZW51TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tbmF2LWJhci0tYWN0aXZlXCIpO1xyXG4gICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtYmctLWFjdGl2ZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVQcmluY2lwYWw7XHJcbiIsImNsYXNzIE1lbnVQcmluY2lwYWwge1xyXG4gIC8vIDEuIEluc3RhbmNpYSBkZWwgb2JqZXRvXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFjY29yZGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWNjb3JkaW9uLXNlY3VuZGFyaW9cIik7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgfVxyXG4gIC8vIDIuIEV2ZW50b3NcclxuICBldmVudHMoKSB7fVxyXG4gIC8vIDMuIE3DqXRvZG9zXHJcbiAgaW5pdCgpIHtcclxuICAgIGZvciAobGV0IGFjY29yZGlvbiBvZiB0aGlzLmFjY29yZGlvbnMpIHtcclxuICAgICAgbGV0IHBsdXMgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvcihcIi5hY2NvcmRpb25fX3BsdXNcIik7XHJcbiAgICAgIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjY29yZGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgXCJhY2NvcmRpb24tc2VjdW5kYXJpb1wiXHJcbiAgICAgICAgKTsgLy8gcmV2aXNhclxyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcInBsdXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGFjY29yZGlvbiBvZiB0aGlzLmFjY29yZGlvbnMpIHtcclxuICAgICAgICAgIGlmIChhY2NvcmRpb24gIT0gdGhpcy5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIGFjY29yZGlvblxyXG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmFjY29yZGlvbl9fcGx1c1wiKVxyXG4gICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwicGx1cy1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGxldCBuZXh0RWxlbWVudCA9IGFjY29yZGlvbi5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGlmIChuZXh0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmltYXJpLW5hdl9fc3VibWVudVwiKSkge1xyXG4gICAgICAgICAgICAgIG5leHRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhbmVsID0gdGhpcy5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xyXG4gICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51UHJpbmNpcGFsO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBNZW51UHJpbmNpcGFsIGZyb20gXCIuL2NvbXBvbmVudHMvTWVudVByaW5jaXBhbFwiOyAvLyBNZW7DuiBkcm9wZG93biBkZWwgbWVuw7ogcHJpbmNpcGFsXHJcbmltcG9ydCBNZW51U2VjdW5kYXJpbyBmcm9tIFwiLi9jb21wb25lbnRzL01lbnVTZWN1bmRhcmlvXCI7IC8vIE1lbsO6IGRyb3Bkb3duIGRlbCBtZW7DuiBwcmluY2lwYWxcclxuXHJcbmNvbnN0IG1lbnVQcmluY2lwYWwgPSBuZXcgTWVudVByaW5jaXBhbCgpO1xyXG5jb25zdCBtZW51U2VjdW5kYXJpbyA9IG5ldyBNZW51U2VjdW5kYXJpbygpO1xyXG4iXSwibmFtZXMiOlsiTWVudVByaW5jaXBhbCIsIm1haW5NZW51TW9kYWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW9kYWwiLCJvcGVuTWFpbk5hYkJ0biIsImNsb3NlTWFpbk5hYkJ0biIsImFjY29yZGlvbnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5pdCIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRNYWluQWN0aXZlIiwicmVtb3ZlTWFpbkFjdGl2ZSIsImFjY29yZGlvbiIsInBsdXMiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicGFyZW50Tm9kZSIsInJlbW92ZSIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY29udGFpbnMiLCJzdHlsZSIsIm1heEhlaWdodCIsInBhbmVsIiwic2Nyb2xsSGVpZ2h0IiwiYWRkIiwiTWVudVNlY3VuZGFyaW8iLCJtZW51UHJpbmNpcGFsIiwibWVudVNlY3VuZGFyaW8iXSwic291cmNlUm9vdCI6IiJ9