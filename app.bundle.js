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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/normalize.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/style/normalize.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/style.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/style/style.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "html {\n  background-color: #20b2aa;\n  font-family: 'Comfortaa', cursive; }\n\n* {\n  box-sizing: border-box; }\n\nul, li {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.slider {\n  width: 1360px;\n  margin-top: 10%;\n  position: relative;\n  overflow: hidden;\n  left: 0; }\n\n.item-container {\n  left: 0;\n  position: relative;\n  display: flex;\n  flex-flow: row nowrap;\n  transition: left 1s ease-in-out; }\n\n.item {\n  min-width: 320px;\n  height: 488px;\n  margin: 0 10px;\n  background-color: #fff;\n  box-shadow: 5px 0.5vh 5px 0px rgba(0, 0, 0, 0.25);\n  overflow: hidden; }\n\n.item__information {\n  padding: 10px; }\n\n.item__list li {\n  padding-bottom: 10px; }\n\n.item__general {\n  text-align: center;\n  font-weight: 900;\n  color: #555555; }\n\n.item__general i {\n  float: left;\n  font-size: 1.5em; }\n\n.item__list a {\n  text-decoration: none;\n  color: #000; }\n\n.item__title {\n  color: #157570; }\n\n.item__title:hover {\n  color: #20b2aa; }\n\n.item__description {\n  padding-top: 10px; }\n\n.search-form {\n  margin: 30px auto;\n  max-width: 80%; }\n\n.search-form__input {\n  padding: 10px;\n  font-size: 17px;\n  border: 1px solid #20b2aa;\n  float: left;\n  width: 90%;\n  background: #f1f1f1; }\n\n.search-form__button {\n  float: left;\n  width: 10%;\n  padding: 10px;\n  background: #37bd80;\n  color: white;\n  font-size: 17px;\n  border: 1px solid #20b2aa;\n  border-left: none;\n  cursor: pointer;\n  transition: 0.4s; }\n\n.search-form__button:hover {\n  background: #157570; }\n\n.search-form::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-self: flex-end; }\n\n.navigation-list {\n  margin-top: 2%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-self: flex-end; }\n\n.navigation li {\n  margin: 0.5em;\n  width: 2em;\n  height: 2em;\n  text-align: center;\n  line-height: 1.8em;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  user-select: none;\n  cursor: pointer; }\n\nli.navigation-list__item--active {\n  background-color: #fff;\n  color: #20b2aa;\n  border-radius: 50%;\n  display: block !important;\n  animation: bummer 0.5s;\n  transform: scale(1.2, 1.2);\n  animation-fill-mode: forwards; }\n\n@keyframes bummer {\n  100% {\n    transform: scale(1, 1); } }\n\n.navigation-list__item--next,\n.navigation-list__item--prev {\n  display: block !important; }\n\n.navigation-list__item {\n  color: #fff;\n  display: none; }\n\n.navigation-list__item\n.navigation li:hover:not(.navigation-list__item--active) {\n  background-color: rgba(221, 221, 221, 0.705);\n  border-radius: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/api/request.js":
/*!****************************!*\
  !*** ./src/api/request.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ui */ "./src/components/ui.js");
 // eslint-disable-line

class Request {
  constructor() {
    this.MAX_RESULTS = '15';
    this.KEY = 'AIzaSyCAPIO5MgtciOBx79hI1QcClEVXG9FD8PQ';
    this.STATISTIC_URL = `https://www.googleapis.com/youtube/v3/videos?key=${this.KEY}&part=snippet,contentDetails,statistics&id=`;
    this.PAGE_TOKEN = null;
    this.NEXT_PAGE = `https://www.googleapis.com/youtube/v3/search?key=${this.KEY}&part=snippet&type=video&maxResults=${this.MAX_RESULTS}&pageToken=`;
    this.DATA = [];
  }

  makeVideosUrl(query) {
    this.VIDEOS_URL = `https://www.googleapis.com/youtube/v3/search?key=${this.KEY}&q=${query}&part=snippet&maxResults=${this.MAX_RESULTS}&type=video`;

    if (this.PAGE_TOKEN !== null) {
      this.NEXT_PAGE = `${this.NEXT_PAGE}${this.PAGE_TOKEN}`;
      return this.NEXT_PAGE;
    }

    return this.VIDEOS_URL;
  }

  makeRequest(url, token) {
    fetch(url).then(res => res.json()).then(data => {
      this.makeNextPageURL(data.nextPageToken);
      return data.items.map(item => item.id.videoId);
    }).then(ids => fetch(this.STATISTIC_URL + ids)).then(res => res.json()).then(data => {
      if (!token) {
        this.renderPage(data.items);
      } else {
        this.refreshPages(data.items);
      }
    });
  }

  renderPage(vid) {
    this.DATA.push(vid);
    _components_ui__WEBPACK_IMPORTED_MODULE_0__["default"].renderVideos(vid);
    _components_ui__WEBPACK_IMPORTED_MODULE_0__["default"].createNavigation();
  }

  refreshPages(vid) {
    this.DATA.push(vid);
    _components_ui__WEBPACK_IMPORTED_MODULE_0__["default"].addPages(vid);
  }

  makeNextPageURL(pt) {
    this.PAGE_TOKEN = pt;
    this.NEXT_PAGE = `${this.NEXT_PAGE}${this.PAGE_TOKEN}`;
    return this.NEXT_PAGE;
  }

  getData() {
    return this.DATA;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Request());

/***/ }),

/***/ "./src/components/ui.js":
/*!******************************!*\
  !*** ./src/components/ui.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/request */ "./src/api/request.js");

 // eslint-disable-line

class Ui {
  constructor() {
    this.data = [];
    this.resultsPerPage = 4;
    this.resultsPerPageOld = 0;
    this.pagesCount = 0;
    this.currentScreen = 'none';
    this.previousWidth = 0;
    this.startX = 0;
    this.endX = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.swipeMinLength = 100;
    this.swipeMaxDuration = 800;
  }

  renderVideos(vid) {
    const container = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('div');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(container, 'container');
    container.addEventListener('mousedown', this.downEvent.bind(this));
    container.addEventListener('mouseup', this.upEvent.bind(this));
    container.addEventListener('touchstart', this.downEvent.bind(this));
    container.addEventListener('touchend', this.upEvent.bind(this));
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('body'), container);
    const slider = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('div');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(slider, 'slider');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.container'), slider);
    const itemContainer = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('div');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(itemContainer, 'item-container');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.slider'), itemContainer);
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].generateItems(vid);
  }

  addPages(vid) {
    const pages = this.calculatePages();
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].generateItems(vid);
    this.refreshNavigationList(pages);
  }

  refreshNavigationList(pages) {
    this.default = null;
    const pagesCounter = this.calculatePages();
    const elemsContainer = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list');
    const navigationLi = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('li');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(navigationLi, 'navigation-list__item');

    for (let i = pages; i < pagesCounter; i += 1) {
      const navigationItem = navigationLi.cloneNode(true);
      navigationItem.innerHTML = i + 1;
      elemsContainer.appendChild(navigationItem);
    }
  }

  createSearchForm() {
    this.createMediaQueries();
    const form = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('form');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(form, 'search-form');
    const input = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('input');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(input, 'search-form__input');
    const button = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('button');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(button, 'search-form__button');
    const icon = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('i');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(icon, 'fa');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(icon, 'fa-search');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('body'), form);
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.search-form'), input);
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.search-form'), button);
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.search-form__button'), icon);
  }

  createNavigation() {
    this.createMediaQueries();
    const body = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('body');
    const navigation = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('div');
    navigation.className = 'navigation';
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(body, navigation);
    const navigationList = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('ul');
    navigationList.className = 'navigation-list';
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(navigation, navigationList);
    this.createNavigationList();
    this.previousWidth = document.querySelector('.item-container').clientWidth;
    navigationList.addEventListener('click', this.pageChange);
  }

  createNavigationList() {
    const itemContainer = document.querySelector('.item-container');
    const itemContainerWidth = itemContainer.clientWidth;
    const pagesCounter = this.calculatePages();

    if (!itemContainer.style.left) {
      itemContainer.style.left = '0px';
    }

    let left = Math.abs(parseInt(itemContainer.style.left, 10));

    if (left !== 0) {
      const colOfSwipes = Math.abs(Math.ceil(left / this.prePreviousWidth));
      const elem = colOfSwipes * this.resultsPerPageOld;
      const needSwipes = Math.round(elem / this.resultsPerPage);
      left = needSwipes * itemContainerWidth;
      itemContainer.style.left = `-${left}px`;
    }

    const activeItem = Math.floor(left / itemContainerWidth);
    const elemsContainer = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list');
    const navigationLi = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('li');
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(navigationLi, 'navigation-list__item');

    for (let i = 0; i < pagesCounter; i += 1) {
      const navigationItem = navigationLi.cloneNode(true);
      navigationItem.innerHTML = i + 1;
      elemsContainer.appendChild(navigationItem);
    }

    elemsContainer.children[activeItem].classList.add('navigation-list__item--active');
    elemsContainer.children[activeItem + 1].classList.add('navigation-list__item--next');

    if (activeItem !== 0) {
      elemsContainer.children[activeItem - 1].classList.add('navigation-list__item--prev');
    }

    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation').appendChild(elemsContainer);
  }

  rebuild() {
    this.resultsPerPageOld = this.resultsPerPage;
    this.createMediaQueries();
    const itemContainer = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.item-container');

    if (itemContainer) {
      const itemContainerWidth = itemContainer.clientWidth;

      if (this.previousWidth !== itemContainerWidth) {
        this.prePreviousWidth = this.previousWidth;
        const navigationList = document.querySelector('.navigation-list');

        while (navigationList.firstChild) {
          navigationList.removeChild(navigationList.firstChild);
        }

        this.createNavigationList();
        navigationList.addEventListener('click', this.pageChange);
        this.previousWidth = itemContainerWidth;
      }
    }
  }

  pageChange(e) {
    const {
      target
    } = e;

    if (target.classList.contains('navigation-list__item')) {
      const slider = document.querySelector('.item-container');
      const current = document.querySelector('.navigation-list__item--active');
      const width = slider.clientWidth;

      if (!slider.style.left) {
        slider.style.left = 0;
      }

      const sliderLeft = parseInt(slider.style.left, 10);
      const currentPos = parseInt(current.innerText, 10);
      const targetPos = parseInt(target.innerText, 10);
      const left = sliderLeft - (targetPos - currentPos) * width;
      current.classList.remove('navigation-list__item--active');
      target.classList.add('navigation-list__item--active');
      slider.style.left = `${left}px`;
      this.style.left = '0px';

      if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--next')) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--next').classList.remove('navigation-list__item--next');
      }

      if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--prev')) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--prev').classList.remove('navigation-list__item--prev');
      }

      const activeItem = Math.abs(Math.floor(left / width));
      const elemsContainer = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list');

      if (elemsContainer.children[activeItem + 1]) {
        elemsContainer.children[activeItem + 1].classList.add('navigation-list__item--next');
      }

      if (activeItem !== 0) {
        elemsContainer.children[activeItem - 1].classList.add('navigation-list__item--prev');
      }

      if (elemsContainer.hasChildNodes()) {
        const children = elemsContainer.childNodes;

        if (activeItem > children.length - 1 - 5) {
          const url = _api_request__WEBPACK_IMPORTED_MODULE_1__["default"].makeVideosUrl();
          _api_request__WEBPACK_IMPORTED_MODULE_1__["default"].makeRequest(url, 'Refresh');
        }
      }
    }
  }

  calculatePages() {
    this.pagesCount = Math.ceil(Array.from(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$$('.item')).length / this.resultsPerPage);
    return this.pagesCount;
  }

  resetUi() {
    this.data = [];
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.container').remove();
    _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation').remove();
  }

  createMediaQueries() {
    const large = window.matchMedia('(min-width: 1025px) and (max-width: 1345px)').matches;
    const small = window.matchMedia('(max-width: 767px)').matches;
    const medium = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;
    const max = window.matchMedia('(min-width: 1346px)').matches;

    if (large === true) {
      this.currentScreen = 'large';
    }

    if (medium === true) {
      this.currentScreen = 'medium';
    }

    if (small === true) {
      this.currentScreen = 'small';
    }

    if (max === true) {
      this.currentScreen = 'max';
    }

    const iC = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.item-container');
    const slider = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.slider');

    switch (this.currentScreen) {
      case 'max':
        if (iC) {
          iC.style.width = '1360px';
          slider.style.width = '1360px';
        }

        this.resultsPerPage = 4;
        break;

      case 'large':
        if (iC) {
          iC.style.width = '1020px';
          slider.style.width = '1020px';
        }

        this.resultsPerPage = 3;
        break;

      case 'medium':
        if (iC) {
          iC.style.width = '680px';
          slider.style.width = '680px';
        }

        this.resultsPerPage = 2;
        break;

      case 'small':
        if (iC) {
          iC.style.width = '340px';
          slider.style.width = '340px';
        }

        this.resultsPerPage = 1;
        break;

      default:
        break;
    }
  }

  downEvent(e) {
    this.startTime = Date.now();
    this.startX = e.clientX || e.changedTouches[0].clientX;
  }

  upEvent(e) {
    this.endX = e.clientX || e.changedTouches[0].clientX;
    this.endTime = Date.now();
    const swipeLenght = this.endX - this.startX;
    const swipeDuration = this.endTime - this.startTime;

    if (swipeLenght < -this.swipeMinLength && swipeDuration < this.swipeMaxDuration) {
      if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--next')) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--next').click();
      }
    }

    if (swipeLenght > +this.swipeMinLength && swipeDuration < this.swipeMaxDuration) {
      if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--prev')) {
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--prev').click();
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Ui());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_normalize_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/normalize.scss */ "./src/style/normalize.scss");
/* harmony import */ var _style_normalize_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_normalize_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/request */ "./src/api/request.js");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ui */ "./src/components/ui.js");






function userRequest(event) {
  event.preventDefault();
  if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].$('.container')) _components_ui__WEBPACK_IMPORTED_MODULE_4__["default"].resetUi();
  const searchInput = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].$('.search-form__input');
  const userInput = searchInput.value;
  const url = _api_request__WEBPACK_IMPORTED_MODULE_3__["default"].makeVideosUrl(userInput);
  _api_request__WEBPACK_IMPORTED_MODULE_3__["default"].makeRequest(url);
  this.blur();
}

_components_ui__WEBPACK_IMPORTED_MODULE_4__["default"].createSearchForm();
const searchButton = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].$('.search-form__button');
searchButton.addEventListener('click', userRequest);
window.addEventListener('resize', _components_ui__WEBPACK_IMPORTED_MODULE_4__["default"].rebuild.bind(_components_ui__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/style/normalize.scss":
/*!**********************************!*\
  !*** ./src/style/normalize.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./normalize.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/normalize.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
const $ = el => document.querySelector(el);

const $$ = el => document.querySelectorAll(el);

const create = el => document.createElement(el);

const append = (parent, child) => (parent.appendChild(child), parent);

const addClass = (el, className) => (el.classList.add(className), el);

const inner = (el, text) => (el.innerHTML = text, el);

const generateItems = videos => videos.reduce((acc, video) => append(acc, inner(addClass(create('div'), 'item'), `
  <div class="item__header">
    <img src="${video.snippet.thumbnails.medium.url}" alt="" height="180" width="320">
  </div>
  <div class="item__information">
    <ul class="item__list">
      <a href="https://www.youtube.com/watch?v=${video.id}"><li class="item__general item__title">${video.snippet.title}</li></a>
      <li class="item__general item__author"><i class="fa fa-address-card"></i> ${video.snippet.channelTitle}</li>
      <li class="item__general item__date"><i class="fa fa-calendar"></i> ${video.snippet.publishedAt.substr(0, 9)}</li>
      <li class="item__general item__views"><i class="fa fa-eye"></i> ${video.statistics.viewCount}</li>
      <li class="item__description"> ${video.snippet.description.substr(0, 180)}</li>
    </ul>
  </div>
  `)), $('.item-container'));

/* harmony default export */ __webpack_exports__["default"] = ({
  $,
  create,
  append,
  addClass,
  inner,
  $$,
  generateItems
  /* eslint-enable */

});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9ub3JtYWxpemUuc2Nzcz8zMGE4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzE5ZDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIlJlcXVlc3QiLCJjb25zdHJ1Y3RvciIsIk1BWF9SRVNVTFRTIiwiS0VZIiwiU1RBVElTVElDX1VSTCIsIlBBR0VfVE9LRU4iLCJORVhUX1BBR0UiLCJEQVRBIiwibWFrZVZpZGVvc1VybCIsInF1ZXJ5IiwiVklERU9TX1VSTCIsIm1ha2VSZXF1ZXN0IiwidXJsIiwidG9rZW4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1ha2VOZXh0UGFnZVVSTCIsIm5leHRQYWdlVG9rZW4iLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpZCIsInZpZGVvSWQiLCJpZHMiLCJyZW5kZXJQYWdlIiwicmVmcmVzaFBhZ2VzIiwidmlkIiwicHVzaCIsInVpIiwicmVuZGVyVmlkZW9zIiwiY3JlYXRlTmF2aWdhdGlvbiIsImFkZFBhZ2VzIiwicHQiLCJnZXREYXRhIiwiVWkiLCJyZXN1bHRzUGVyUGFnZSIsInJlc3VsdHNQZXJQYWdlT2xkIiwicGFnZXNDb3VudCIsImN1cnJlbnRTY3JlZW4iLCJwcmV2aW91c1dpZHRoIiwic3RhcnRYIiwiZW5kWCIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJzd2lwZU1pbkxlbmd0aCIsInN3aXBlTWF4RHVyYXRpb24iLCJjb250YWluZXIiLCJ1dGlscyIsImNyZWF0ZSIsImFkZENsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvd25FdmVudCIsImJpbmQiLCJ1cEV2ZW50IiwiYXBwZW5kIiwiJCIsInNsaWRlciIsIml0ZW1Db250YWluZXIiLCJnZW5lcmF0ZUl0ZW1zIiwicGFnZXMiLCJjYWxjdWxhdGVQYWdlcyIsInJlZnJlc2hOYXZpZ2F0aW9uTGlzdCIsImRlZmF1bHQiLCJwYWdlc0NvdW50ZXIiLCJlbGVtc0NvbnRhaW5lciIsIm5hdmlnYXRpb25MaSIsImkiLCJuYXZpZ2F0aW9uSXRlbSIsImNsb25lTm9kZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JlYXRlU2VhcmNoRm9ybSIsImNyZWF0ZU1lZGlhUXVlcmllcyIsImZvcm0iLCJpbnB1dCIsImJ1dHRvbiIsImljb24iLCJib2R5IiwibmF2aWdhdGlvbiIsImNsYXNzTmFtZSIsIm5hdmlnYXRpb25MaXN0IiwiY3JlYXRlTmF2aWdhdGlvbkxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRXaWR0aCIsInBhZ2VDaGFuZ2UiLCJpdGVtQ29udGFpbmVyV2lkdGgiLCJzdHlsZSIsImxlZnQiLCJNYXRoIiwiYWJzIiwicGFyc2VJbnQiLCJjb2xPZlN3aXBlcyIsImNlaWwiLCJwcmVQcmV2aW91c1dpZHRoIiwiZWxlbSIsIm5lZWRTd2lwZXMiLCJyb3VuZCIsImFjdGl2ZUl0ZW0iLCJmbG9vciIsImNoaWxkcmVuIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVidWlsZCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsImN1cnJlbnQiLCJ3aWR0aCIsInNsaWRlckxlZnQiLCJjdXJyZW50UG9zIiwiaW5uZXJUZXh0IiwidGFyZ2V0UG9zIiwicmVtb3ZlIiwiaGFzQ2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJyZXF1ZXN0IiwiQXJyYXkiLCJmcm9tIiwiJCQiLCJyZXNldFVpIiwibGFyZ2UiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInNtYWxsIiwibWVkaXVtIiwibWF4IiwiaUMiLCJEYXRlIiwibm93IiwiY2xpZW50WCIsImNoYW5nZWRUb3VjaGVzIiwic3dpcGVMZW5naHQiLCJzd2lwZUR1cmF0aW9uIiwiY2xpY2siLCJ1c2VyUmVxdWVzdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZWFyY2hJbnB1dCIsInVzZXJJbnB1dCIsInZhbHVlIiwiYmx1ciIsInNlYXJjaEJ1dHRvbiIsImVsIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnQiLCJjaGlsZCIsImlubmVyIiwidGV4dCIsInZpZGVvcyIsInJlZHVjZSIsImFjYyIsInZpZGVvIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJ0aXRsZSIsImNoYW5uZWxUaXRsZSIsInB1Ymxpc2hlZEF0Iiwic3Vic3RyIiwic3RhdGlzdGljcyIsInZpZXdDb3VudCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFDOUUsU0FBSCxHQUFlb0YsSUFBZixFQUFxQk4sRUFBcEMsQ0FBZDs7QUFDQSxNQUFNekYsYUFBYSxHQUFHZ0csTUFBTSxJQUFJQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sS0FBZ0J2RyxNQUFNLENBQUNzRyxHQUFELEVBQU1KLEtBQUssQ0FBQ3ZHLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDLEtBQUQsQ0FBUCxFQUFnQixNQUFoQixDQUFULEVBQW1DOztnQkFFcEc2RyxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QjlCLE1BQXpCLENBQWdDeEgsR0FBSTs7OztpREFJSG9KLEtBQUssQ0FBQ3hJLEVBQUcsMkNBQTBDd0ksS0FBSyxDQUFDQyxPQUFOLENBQWNFLEtBQU07a0ZBQ3RDSCxLQUFLLENBQUNDLE9BQU4sQ0FBY0csWUFBYTs0RUFDakNKLEtBQUssQ0FBQ0MsT0FBTixDQUFjSSxXQUFkLENBQTBCQyxNQUExQixDQUFpQyxDQUFqQyxFQUFvQyxDQUFwQyxDQUF1Qzt3RUFDM0NOLEtBQUssQ0FBQ08sVUFBTixDQUFpQkMsU0FBVTt1Q0FDNURSLEtBQUssQ0FBQ0MsT0FBTixDQUFjUSxXQUFkLENBQTBCSCxNQUExQixDQUFpQyxDQUFqQyxFQUFvQyxHQUFwQyxDQUF5Qzs7O0dBVkMsQ0FBWCxDQUFwQyxFQWEzQjVHLENBQUMsQ0FBQyxpQkFBRCxDQWIwQixDQUFoQzs7QUFjZTtBQUNiQSxHQURhO0FBQ1ZQLFFBRFU7QUFDRk0sUUFERTtBQUNNTCxVQUROO0FBQ2dCdUcsT0FEaEI7QUFDdUI5QixJQUR2QjtBQUMyQmhFO0FBRTNDOztBQUhnQixDQUFmLEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7IH1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlOyB9XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07IH1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07IH1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7IH1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqLyB9XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07IH1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMGIyYWE7XFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG51bCwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuXFxuLnNsaWRlciB7XFxuICB3aWR0aDogMTM2MHB4O1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDFzIGVhc2UtaW4tb3V0OyB9XFxuXFxuLml0ZW0ge1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogNDg4cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiA1cHggMC41dmggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5pdGVtX19pbmZvcm1hdGlvbiB7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLml0ZW1fX2xpc3QgbGkge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cXG5cXG4uaXRlbV9fZ2VuZXJhbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6ICM1NTU1NTU7IH1cXG5cXG4uaXRlbV9fZ2VuZXJhbCBpIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxcblxcbi5pdGVtX19saXN0IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uaXRlbV9fdGl0bGUge1xcbiAgY29sb3I6ICMxNTc1NzA7IH1cXG5cXG4uaXRlbV9fdGl0bGU6aG92ZXIge1xcbiAgY29sb3I6ICMyMGIyYWE7IH1cXG5cXG4uaXRlbV9fZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7IH1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgbWFyZ2luOiAzMHB4IGF1dG87XFxuICBtYXgtd2lkdGg6IDgwJTsgfVxcblxcbi5zZWFyY2gtZm9ybV9faW5wdXQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMGIyYWE7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyB9XFxuXFxuLnNlYXJjaC1mb3JtX19idXR0b24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6ICMzN2JkODA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjBiMmFhO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzOyB9XFxuXFxuLnNlYXJjaC1mb3JtX19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzE1NzU3MDsgfVxcblxcbi5zZWFyY2gtZm9ybTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjbGVhcjogYm90aDtcXG4gIGRpc3BsYXk6IHRhYmxlOyB9XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kOyB9XFxuXFxuLm5hdmlnYXRpb24tbGlzdCB7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgfVxcblxcbi5uYXZpZ2F0aW9uIGxpIHtcXG4gIG1hcmdpbjogMC41ZW07XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS44ZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG5saS5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMGIyYWE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgYW5pbWF0aW9uOiBidW1tZXIgMC41cztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IH1cXG5cXG5Aa2V5ZnJhbWVzIGJ1bW1lciB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTsgfSB9XFxuXFxuLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tbmV4dCxcXG4ubmF2aWdhdGlvbi1saXN0X19pdGVtLS1wcmV2IHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cXG5cXG4ubmF2aWdhdGlvbi1saXN0X19pdGVtIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW1cXG4ubmF2aWdhdGlvbiBsaTpob3Zlcjpub3QoLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tYWN0aXZlKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuNzA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgdWkgZnJvbSAnLi4vY29tcG9uZW50cy91aSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuTUFYX1JFU1VMVFMgPSAnMTUnO1xuICAgIHRoaXMuS0VZID0gJ0FJemFTeUNBUElPNU1ndGNpT0J4NzloSTFRY0NsRVZYRzlGRDhQUSc7XG4gICAgdGhpcy5TVEFUSVNUSUNfVVJMID0gYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zP2tleT0ke3RoaXMuS0VZfSZwYXJ0PXNuaXBwZXQsY29udGVudERldGFpbHMsc3RhdGlzdGljcyZpZD1gO1xuICAgIHRoaXMuUEFHRV9UT0tFTiA9IG51bGw7XG4gICAgdGhpcy5ORVhUX1BBR0UgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2g/a2V5PSR7dGhpcy5LRVl9JnBhcnQ9c25pcHBldCZ0eXBlPXZpZGVvJm1heFJlc3VsdHM9JHt0aGlzLk1BWF9SRVNVTFRTfSZwYWdlVG9rZW49YDtcbiAgICB0aGlzLkRBVEEgPSBbXTtcbiAgfVxuXG4gIG1ha2VWaWRlb3NVcmwocXVlcnkpIHtcbiAgICB0aGlzLlZJREVPU19VUkwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2g/a2V5PSR7dGhpcy5LRVl9JnE9JHtxdWVyeX0mcGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9JHt0aGlzLk1BWF9SRVNVTFRTfSZ0eXBlPXZpZGVvYDtcbiAgICBpZiAodGhpcy5QQUdFX1RPS0VOICE9PSBudWxsKSB7XG4gICAgICB0aGlzLk5FWFRfUEFHRSA9IGAke3RoaXMuTkVYVF9QQUdFfSR7dGhpcy5QQUdFX1RPS0VOfWA7XG4gICAgICByZXR1cm4gdGhpcy5ORVhUX1BBR0U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLlZJREVPU19VUkw7XG4gIH1cblxuICBtYWtlUmVxdWVzdCh1cmwsIHRva2VuKSB7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm1ha2VOZXh0UGFnZVVSTChkYXRhLm5leHRQYWdlVG9rZW4pOyByZXR1cm4gZGF0YS5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmlkLnZpZGVvSWQpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGlkcyA9PiBmZXRjaCh0aGlzLlNUQVRJU1RJQ19VUkwgKyBpZHMpKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKGRhdGEuaXRlbXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVmcmVzaFBhZ2VzKGRhdGEuaXRlbXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclBhZ2UodmlkKSB7XG4gICAgdGhpcy5EQVRBLnB1c2godmlkKTtcbiAgICB1aS5yZW5kZXJWaWRlb3ModmlkKTtcbiAgICB1aS5jcmVhdGVOYXZpZ2F0aW9uKCk7XG4gIH1cblxuICByZWZyZXNoUGFnZXModmlkKSB7XG4gICAgdGhpcy5EQVRBLnB1c2godmlkKTtcbiAgICB1aS5hZGRQYWdlcyh2aWQpO1xuICB9XG5cbiAgbWFrZU5leHRQYWdlVVJMKHB0KSB7XG4gICAgdGhpcy5QQUdFX1RPS0VOID0gcHQ7XG4gICAgdGhpcy5ORVhUX1BBR0UgPSBgJHt0aGlzLk5FWFRfUEFHRX0ke3RoaXMuUEFHRV9UT0tFTn1gO1xuICAgIHJldHVybiB0aGlzLk5FWFRfUEFHRTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuREFUQTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVxdWVzdCgpO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL2FwaS9yZXF1ZXN0JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5jbGFzcyBVaSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMucmVzdWx0c1BlclBhZ2UgPSA0O1xuICAgIHRoaXMucmVzdWx0c1BlclBhZ2VPbGQgPSAwO1xuICAgIHRoaXMucGFnZXNDb3VudCA9IDA7XG4gICAgdGhpcy5jdXJyZW50U2NyZWVuID0gJ25vbmUnO1xuICAgIHRoaXMucHJldmlvdXNXaWR0aCA9IDA7XG5cbiAgICB0aGlzLnN0YXJ0WCA9IDA7XG4gICAgdGhpcy5lbmRYID0gMDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5lbmRUaW1lID0gMDtcbiAgICB0aGlzLnN3aXBlTWluTGVuZ3RoID0gMTAwO1xuICAgIHRoaXMuc3dpcGVNYXhEdXJhdGlvbiA9IDgwMDtcbiAgfVxuXG4gIHJlbmRlclZpZGVvcyh2aWQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB1dGlscy5jcmVhdGUoJ2RpdicpO1xuICAgIHV0aWxzLmFkZENsYXNzKGNvbnRhaW5lciwgJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRvd25FdmVudC5iaW5kKHRoaXMpKTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMudXBFdmVudC5iaW5kKHRoaXMpKTtcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuZG93bkV2ZW50LmJpbmQodGhpcykpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudXBFdmVudC5iaW5kKHRoaXMpKTtcbiAgICB1dGlscy5hcHBlbmQodXRpbHMuJCgnYm9keScpLCBjb250YWluZXIpO1xuXG4gICAgY29uc3Qgc2xpZGVyID0gdXRpbHMuY3JlYXRlKCdkaXYnKTtcbiAgICB1dGlscy5hZGRDbGFzcyhzbGlkZXIsICdzbGlkZXInKTtcbiAgICB1dGlscy5hcHBlbmQodXRpbHMuJCgnLmNvbnRhaW5lcicpLCBzbGlkZXIpO1xuXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZSgnZGl2Jyk7XG4gICAgdXRpbHMuYWRkQ2xhc3MoaXRlbUNvbnRhaW5lciwgJ2l0ZW0tY29udGFpbmVyJyk7XG4gICAgdXRpbHMuYXBwZW5kKHV0aWxzLiQoJy5zbGlkZXInKSwgaXRlbUNvbnRhaW5lcik7XG5cbiAgICB1dGlscy5nZW5lcmF0ZUl0ZW1zKHZpZCk7XG4gIH1cblxuICBhZGRQYWdlcyh2aWQpIHtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMuY2FsY3VsYXRlUGFnZXMoKTtcbiAgICB1dGlscy5nZW5lcmF0ZUl0ZW1zKHZpZCk7XG5cbiAgICB0aGlzLnJlZnJlc2hOYXZpZ2F0aW9uTGlzdChwYWdlcyk7XG4gIH1cblxuICByZWZyZXNoTmF2aWdhdGlvbkxpc3QocGFnZXMpIHtcbiAgICB0aGlzLmRlZmF1bHQgPSBudWxsO1xuICAgIGNvbnN0IHBhZ2VzQ291bnRlciA9IHRoaXMuY2FsY3VsYXRlUGFnZXMoKTtcbiAgICBjb25zdCBlbGVtc0NvbnRhaW5lciA9IHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3QnKTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uTGkgPSB1dGlscy5jcmVhdGUoJ2xpJyk7XG4gICAgdXRpbHMuYWRkQ2xhc3MobmF2aWdhdGlvbkxpLCAnbmF2aWdhdGlvbi1saXN0X19pdGVtJyk7XG5cbiAgICBmb3IgKGxldCBpID0gcGFnZXM7IGkgPCBwYWdlc0NvdW50ZXI7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmF2aWdhdGlvbkl0ZW0gPSBuYXZpZ2F0aW9uTGkuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgbmF2aWdhdGlvbkl0ZW0uaW5uZXJIVE1MID0gaSArIDE7XG4gICAgICBlbGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uSXRlbSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlU2VhcmNoRm9ybSgpIHtcbiAgICB0aGlzLmNyZWF0ZU1lZGlhUXVlcmllcygpO1xuICAgIGNvbnN0IGZvcm0gPSB1dGlscy5jcmVhdGUoJ2Zvcm0nKTtcbiAgICB1dGlscy5hZGRDbGFzcyhmb3JtLCAnc2VhcmNoLWZvcm0nKTtcbiAgICBjb25zdCBpbnB1dCA9IHV0aWxzLmNyZWF0ZSgnaW5wdXQnKTtcbiAgICB1dGlscy5hZGRDbGFzcyhpbnB1dCwgJ3NlYXJjaC1mb3JtX19pbnB1dCcpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IHV0aWxzLmNyZWF0ZSgnYnV0dG9uJyk7XG4gICAgdXRpbHMuYWRkQ2xhc3MoYnV0dG9uLCAnc2VhcmNoLWZvcm1fX2J1dHRvbicpO1xuICAgIGNvbnN0IGljb24gPSB1dGlscy5jcmVhdGUoJ2knKTtcbiAgICB1dGlscy5hZGRDbGFzcyhpY29uLCAnZmEnKTtcbiAgICB1dGlscy5hZGRDbGFzcyhpY29uLCAnZmEtc2VhcmNoJyk7XG5cbiAgICB1dGlscy5hcHBlbmQodXRpbHMuJCgnYm9keScpLCBmb3JtKTtcbiAgICB1dGlscy5hcHBlbmQodXRpbHMuJCgnLnNlYXJjaC1mb3JtJyksIGlucHV0KTtcbiAgICB1dGlscy5hcHBlbmQodXRpbHMuJCgnLnNlYXJjaC1mb3JtJyksIGJ1dHRvbik7XG4gICAgdXRpbHMuYXBwZW5kKHV0aWxzLiQoJy5zZWFyY2gtZm9ybV9fYnV0dG9uJyksIGljb24pO1xuICB9XG5cbiAgY3JlYXRlTmF2aWdhdGlvbigpIHtcbiAgICB0aGlzLmNyZWF0ZU1lZGlhUXVlcmllcygpO1xuICAgIGNvbnN0IGJvZHkgPSB1dGlscy4kKCdib2R5Jyk7XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IHV0aWxzLmNyZWF0ZSgnZGl2Jyk7XG4gICAgbmF2aWdhdGlvbi5jbGFzc05hbWUgPSAnbmF2aWdhdGlvbic7XG4gICAgdXRpbHMuYXBwZW5kKGJvZHksIG5hdmlnYXRpb24pO1xuXG4gICAgY29uc3QgbmF2aWdhdGlvbkxpc3QgPSB1dGlscy5jcmVhdGUoJ3VsJyk7XG4gICAgbmF2aWdhdGlvbkxpc3QuY2xhc3NOYW1lID0gJ25hdmlnYXRpb24tbGlzdCc7XG5cbiAgICB1dGlscy5hcHBlbmQobmF2aWdhdGlvbiwgbmF2aWdhdGlvbkxpc3QpO1xuICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbkxpc3QoKTtcbiAgICB0aGlzLnByZXZpb3VzV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1jb250YWluZXInKS5jbGllbnRXaWR0aDtcbiAgICBuYXZpZ2F0aW9uTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucGFnZUNoYW5nZSk7XG4gIH1cblxuICBjcmVhdGVOYXZpZ2F0aW9uTGlzdCgpIHtcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgaXRlbUNvbnRhaW5lcldpZHRoID0gaXRlbUNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBwYWdlc0NvdW50ZXIgPSB0aGlzLmNhbGN1bGF0ZVBhZ2VzKCk7XG4gICAgaWYgKCFpdGVtQ29udGFpbmVyLnN0eWxlLmxlZnQpIHtcbiAgICAgIGl0ZW1Db250YWluZXIuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIH1cblxuICAgIGxldCBsZWZ0ID0gTWF0aC5hYnMocGFyc2VJbnQoaXRlbUNvbnRhaW5lci5zdHlsZS5sZWZ0LCAxMCkpO1xuICAgIGlmIChsZWZ0ICE9PSAwKSB7XG4gICAgICBjb25zdCBjb2xPZlN3aXBlcyA9IE1hdGguYWJzKE1hdGguY2VpbChsZWZ0IC8gdGhpcy5wcmVQcmV2aW91c1dpZHRoKSk7XG4gICAgICBjb25zdCBlbGVtID0gY29sT2ZTd2lwZXMgKiB0aGlzLnJlc3VsdHNQZXJQYWdlT2xkO1xuICAgICAgY29uc3QgbmVlZFN3aXBlcyA9IE1hdGgucm91bmQoZWxlbSAvIHRoaXMucmVzdWx0c1BlclBhZ2UpO1xuICAgICAgbGVmdCA9IG5lZWRTd2lwZXMgKiBpdGVtQ29udGFpbmVyV2lkdGg7XG4gICAgICBpdGVtQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBgLSR7bGVmdH1weGA7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IE1hdGguZmxvb3IobGVmdCAvIGl0ZW1Db250YWluZXJXaWR0aCk7XG5cbiAgICBjb25zdCBlbGVtc0NvbnRhaW5lciA9IHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3QnKTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uTGkgPSB1dGlscy5jcmVhdGUoJ2xpJyk7XG4gICAgdXRpbHMuYWRkQ2xhc3MobmF2aWdhdGlvbkxpLCAnbmF2aWdhdGlvbi1saXN0X19pdGVtJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzQ291bnRlcjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbSA9IG5hdmlnYXRpb25MaS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBuYXZpZ2F0aW9uSXRlbS5pbm5lckhUTUwgPSBpICsgMTtcbiAgICAgIGVsZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb25JdGVtKTtcbiAgICB9XG4gICAgZWxlbXNDb250YWluZXIuY2hpbGRyZW5bYWN0aXZlSXRlbV0uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1hY3RpdmUnKTtcbiAgICBlbGVtc0NvbnRhaW5lci5jaGlsZHJlblthY3RpdmVJdGVtICsgMV0uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1uZXh0Jyk7XG4gICAgaWYgKGFjdGl2ZUl0ZW0gIT09IDApIHtcbiAgICAgIGVsZW1zQ29udGFpbmVyLmNoaWxkcmVuW2FjdGl2ZUl0ZW0gLSAxXS5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLXByZXYnKTtcbiAgICB9XG5cbiAgICB1dGlscy4kKCcubmF2aWdhdGlvbicpLmFwcGVuZENoaWxkKGVsZW1zQ29udGFpbmVyKTtcbiAgfVxuXG4gIHJlYnVpbGQoKSB7XG4gICAgdGhpcy5yZXN1bHRzUGVyUGFnZU9sZCA9IHRoaXMucmVzdWx0c1BlclBhZ2U7XG4gICAgdGhpcy5jcmVhdGVNZWRpYVF1ZXJpZXMoKTtcblxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSB1dGlscy4kKCcuaXRlbS1jb250YWluZXInKTtcbiAgICBpZiAoaXRlbUNvbnRhaW5lcikge1xuICAgICAgY29uc3QgaXRlbUNvbnRhaW5lcldpZHRoID0gaXRlbUNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzV2lkdGggIT09IGl0ZW1Db250YWluZXJXaWR0aCkge1xuICAgICAgICB0aGlzLnByZVByZXZpb3VzV2lkdGggPSB0aGlzLnByZXZpb3VzV2lkdGg7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24tbGlzdCcpO1xuXG4gICAgICAgIHdoaWxlIChuYXZpZ2F0aW9uTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgbmF2aWdhdGlvbkxpc3QucmVtb3ZlQ2hpbGQobmF2aWdhdGlvbkxpc3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uTGlzdCgpO1xuXG4gICAgICAgIG5hdmlnYXRpb25MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wYWdlQ2hhbmdlKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1dpZHRoID0gaXRlbUNvbnRhaW5lcldpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhZ2VDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZpZ2F0aW9uLWxpc3RfX2l0ZW0nKSkge1xuICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICBjb25zdCB3aWR0aCA9IHNsaWRlci5jbGllbnRXaWR0aDtcbiAgICAgIGlmICghc2xpZGVyLnN0eWxlLmxlZnQpIHtcbiAgICAgICAgc2xpZGVyLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2xpZGVyTGVmdCA9IHBhcnNlSW50KHNsaWRlci5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgICBjb25zdCBjdXJyZW50UG9zID0gcGFyc2VJbnQoY3VycmVudC5pbm5lclRleHQsIDEwKTtcbiAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHBhcnNlSW50KHRhcmdldC5pbm5lclRleHQsIDEwKTtcbiAgICAgIGNvbnN0IGxlZnQgPSBzbGlkZXJMZWZ0IC0gKHRhcmdldFBvcyAtIGN1cnJlbnRQb3MpICogd2lkdGg7XG5cbiAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1hY3RpdmUnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLWFjdGl2ZScpO1xuXG4gICAgICBzbGlkZXIuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gJzBweCc7XG5cbiAgICAgIGlmICh1dGlscy4kKCcubmF2aWdhdGlvbi1saXN0X19pdGVtLS1uZXh0JykpIHtcbiAgICAgICAgdXRpbHMuJCgnLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tbmV4dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tbGlzdF9faXRlbS0tbmV4dCcpO1xuICAgICAgfVxuICAgICAgaWYgKHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLXByZXYnKSkge1xuICAgICAgICB1dGlscy4kKCcubmF2aWdhdGlvbi1saXN0X19pdGVtLS1wcmV2JykuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1wcmV2Jyk7XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RpdmVJdGVtID0gTWF0aC5hYnMoTWF0aC5mbG9vcihsZWZ0IC8gd2lkdGgpKTtcbiAgICAgIGNvbnN0IGVsZW1zQ29udGFpbmVyID0gdXRpbHMuJCgnLm5hdmlnYXRpb24tbGlzdCcpO1xuICAgICAgaWYgKGVsZW1zQ29udGFpbmVyLmNoaWxkcmVuW2FjdGl2ZUl0ZW0gKyAxXSkge1xuICAgICAgICBlbGVtc0NvbnRhaW5lci5jaGlsZHJlblthY3RpdmVJdGVtICsgMV0uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1uZXh0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aXZlSXRlbSAhPT0gMCkge1xuICAgICAgICBlbGVtc0NvbnRhaW5lci5jaGlsZHJlblthY3RpdmVJdGVtIC0gMV0uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1wcmV2Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtc0NvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtc0NvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgICBpZiAoYWN0aXZlSXRlbSA+IChjaGlsZHJlbi5sZW5ndGggLSAxKSAtIDUpIHtcbiAgICAgICAgICBjb25zdCB1cmwgPSByZXF1ZXN0Lm1ha2VWaWRlb3NVcmwoKTtcbiAgICAgICAgICByZXF1ZXN0Lm1ha2VSZXF1ZXN0KHVybCwgJ1JlZnJlc2gnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZVBhZ2VzKCkge1xuICAgIHRoaXMucGFnZXNDb3VudCA9IE1hdGguY2VpbChBcnJheS5mcm9tKHV0aWxzLiQkKCcuaXRlbScpKS5sZW5ndGggLyB0aGlzLnJlc3VsdHNQZXJQYWdlKTtcbiAgICByZXR1cm4gdGhpcy5wYWdlc0NvdW50O1xuICB9XG5cbiAgcmVzZXRVaSgpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB1dGlscy4kKCcuY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgdXRpbHMuJCgnLm5hdmlnYXRpb24nKS5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZU1lZGlhUXVlcmllcygpIHtcbiAgICBjb25zdCBsYXJnZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMzQ1cHgpJykubWF0Y2hlcztcbiAgICBjb25zdCBzbWFsbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzO1xuICAgIGNvbnN0IG1lZGl1bSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCknKS5tYXRjaGVzO1xuICAgIGNvbnN0IG1heCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMzQ2cHgpJykubWF0Y2hlcztcbiAgICBpZiAobGFyZ2UgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9ICdsYXJnZSc7XG4gICAgfVxuICAgIGlmIChtZWRpdW0gPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9ICdtZWRpdW0nO1xuICAgIH1cbiAgICBpZiAoc21hbGwgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9ICdzbWFsbCc7XG4gICAgfVxuICAgIGlmIChtYXggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY3VycmVudFNjcmVlbiA9ICdtYXgnO1xuICAgIH1cbiAgICBjb25zdCBpQyA9IHV0aWxzLiQoJy5pdGVtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNsaWRlciA9IHV0aWxzLiQoJy5zbGlkZXInKTtcblxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50U2NyZWVuKSB7XG4gICAgICBjYXNlICdtYXgnOlxuICAgICAgICBpZiAoaUMpIHtcbiAgICAgICAgICBpQy5zdHlsZS53aWR0aCA9ICcxMzYwcHgnO1xuICAgICAgICAgIHNsaWRlci5zdHlsZS53aWR0aCA9ICcxMzYwcHgnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0c1BlclBhZ2UgPSA0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgaWYgKGlDKSB7XG4gICAgICAgICAgaUMuc3R5bGUud2lkdGggPSAnMTAyMHB4JztcbiAgICAgICAgICBzbGlkZXIuc3R5bGUud2lkdGggPSAnMTAyMHB4JztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHNQZXJQYWdlID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBpZiAoaUMpIHtcbiAgICAgICAgICBpQy5zdHlsZS53aWR0aCA9ICc2ODBweCc7XG4gICAgICAgICAgc2xpZGVyLnN0eWxlLndpZHRoID0gJzY4MHB4JztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHNQZXJQYWdlID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgIGlmIChpQykge1xuICAgICAgICAgIGlDLnN0eWxlLndpZHRoID0gJzM0MHB4JztcbiAgICAgICAgICBzbGlkZXIuc3R5bGUud2lkdGggPSAnMzQwcHgnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0c1BlclBhZ2UgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGRvd25FdmVudChlKSB7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuc3RhcnRYID0gZS5jbGllbnRYIHx8IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgfVxuXG4gIHVwRXZlbnQoZSkge1xuICAgIHRoaXMuZW5kWCA9IGUuY2xpZW50WCB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgdGhpcy5lbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzd2lwZUxlbmdodCA9IHRoaXMuZW5kWCAtIHRoaXMuc3RhcnRYO1xuICAgIGNvbnN0IHN3aXBlRHVyYXRpb24gPSB0aGlzLmVuZFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcbiAgICBpZiAoc3dpcGVMZW5naHQgPCAtdGhpcy5zd2lwZU1pbkxlbmd0aCAmJiBzd2lwZUR1cmF0aW9uIDwgdGhpcy5zd2lwZU1heER1cmF0aW9uKSB7XG4gICAgICBpZiAodXRpbHMuJCgnLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tbmV4dCcpKSB7XG4gICAgICAgIHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLW5leHQnKS5jbGljaygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3dpcGVMZW5naHQgPiArdGhpcy5zd2lwZU1pbkxlbmd0aCAmJiBzd2lwZUR1cmF0aW9uIDwgdGhpcy5zd2lwZU1heER1cmF0aW9uKSB7XG4gICAgICBpZiAodXRpbHMuJCgnLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tcHJldicpKSB7XG4gICAgICAgIHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLXByZXYnKS5jbGljaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVWkoKTtcbiIsIlxuaW1wb3J0ICcuL3N0eWxlL25vcm1hbGl6ZS5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS9zdHlsZS5zY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzL3V0aWxzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vYXBpL3JlcXVlc3QnO1xuaW1wb3J0IHVpIGZyb20gJy4vY29tcG9uZW50cy91aSc7XG5cbmZ1bmN0aW9uIHVzZXJSZXF1ZXN0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICh1dGlscy4kKCcuY29udGFpbmVyJykpIHVpLnJlc2V0VWkoKTtcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSB1dGlscy4kKCcuc2VhcmNoLWZvcm1fX2lucHV0Jyk7XG4gIGNvbnN0IHVzZXJJbnB1dCA9IHNlYXJjaElucHV0LnZhbHVlO1xuICBjb25zdCB1cmwgPSByZXF1ZXN0Lm1ha2VWaWRlb3NVcmwodXNlcklucHV0KTtcbiAgcmVxdWVzdC5tYWtlUmVxdWVzdCh1cmwpO1xuICB0aGlzLmJsdXIoKTtcbn1cblxudWkuY3JlYXRlU2VhcmNoRm9ybSgpO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSB1dGlscy4kKCcuc2VhcmNoLWZvcm1fX2J1dHRvbicpO1xuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXNlclJlcXVlc3QpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdWkucmVidWlsZC5iaW5kKHVpKSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub3JtYWxpemUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub3JtYWxpemUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9ybWFsaXplLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBjb25zdCAkID0gZWwgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gIGNvbnN0ICQkID0gZWwgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbCk7XG4gIGNvbnN0IGNyZWF0ZSA9IGVsID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICBjb25zdCBhcHBlbmQgPSAocGFyZW50LCBjaGlsZCkgPT4gKHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCksIHBhcmVudCk7XG4gIGNvbnN0IGFkZENsYXNzID0gKGVsLCBjbGFzc05hbWUpID0+IChlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksIGVsKTtcbiAgY29uc3QgaW5uZXIgPSAoZWwsIHRleHQpID0+IChlbC5pbm5lckhUTUwgPSB0ZXh0LCBlbCk7XG4gIGNvbnN0IGdlbmVyYXRlSXRlbXMgPSB2aWRlb3MgPT4gdmlkZW9zLnJlZHVjZSgoYWNjLCB2aWRlbykgPT4gYXBwZW5kKGFjYywgaW5uZXIoYWRkQ2xhc3MoY3JlYXRlKCdkaXYnKSwgJ2l0ZW0nKSwgYFxuICA8ZGl2IGNsYXNzPVwiaXRlbV9faGVhZGVyXCI+XG4gICAgPGltZyBzcmM9XCIke3ZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5tZWRpdW0udXJsfVwiIGFsdD1cIlwiIGhlaWdodD1cIjE4MFwiIHdpZHRoPVwiMzIwXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaXRlbV9faW5mb3JtYXRpb25cIj5cbiAgICA8dWwgY2xhc3M9XCJpdGVtX19saXN0XCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke3ZpZGVvLmlkfVwiPjxsaSBjbGFzcz1cIml0ZW1fX2dlbmVyYWwgaXRlbV9fdGl0bGVcIj4ke3ZpZGVvLnNuaXBwZXQudGl0bGV9PC9saT48L2E+XG4gICAgICA8bGkgY2xhc3M9XCJpdGVtX19nZW5lcmFsIGl0ZW1fX2F1dGhvclwiPjxpIGNsYXNzPVwiZmEgZmEtYWRkcmVzcy1jYXJkXCI+PC9pPiAke3ZpZGVvLnNuaXBwZXQuY2hhbm5lbFRpdGxlfTwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpdGVtX19nZW5lcmFsIGl0ZW1fX2RhdGVcIj48aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPiAke3ZpZGVvLnNuaXBwZXQucHVibGlzaGVkQXQuc3Vic3RyKDAsIDkpfTwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpdGVtX19nZW5lcmFsIGl0ZW1fX3ZpZXdzXCI+PGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+ICR7dmlkZW8uc3RhdGlzdGljcy52aWV3Q291bnR9PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cIml0ZW1fX2Rlc2NyaXB0aW9uXCI+ICR7dmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbi5zdWJzdHIoMCwgMTgwKX08L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuICBgKSksICQoJy5pdGVtLWNvbnRhaW5lcicpKTtcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgICQsIGNyZWF0ZSwgYXBwZW5kLCBhZGRDbGFzcywgaW5uZXIsICQkLCBnZW5lcmF0ZUl0ZW1zXG4gIH1cbiAvKiBlc2xpbnQtZW5hYmxlICovXG4iXSwic291cmNlUm9vdCI6IiJ9