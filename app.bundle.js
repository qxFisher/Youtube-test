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
exports.push([module.i, "html {\n  background-color: #20b2aa;\n  font-family: 'Comfortaa', cursive; }\n\n* {\n  box-sizing: border-box; }\n\nul, li {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.container {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.slider {\n  width: 1360px;\n  margin-top: 10%;\n  position: relative;\n  overflow: hidden;\n  left: 0; }\n\n.item-container {\n  left: 0;\n  position: relative;\n  display: flex;\n  flex-flow: row nowrap;\n  transition: left 1s ease-in-out; }\n\n.item {\n  min-width: 320px;\n  height: 488px;\n  margin: 0 10px;\n  background-color: #fff;\n  box-shadow: 5px 0.5vh 5px 0px rgba(0, 0, 0, 0.25);\n  overflow: hidden; }\n\n.item__information {\n  padding: 10px; }\n\n.item__list li {\n  padding-bottom: 10px; }\n\n.item__general {\n  text-align: center;\n  font-weight: 900;\n  color: #555555; }\n\n.item__general i {\n  float: left;\n  font-size: 1.5em; }\n\n.item__list a {\n  text-decoration: none;\n  color: #000; }\n\n.item__title {\n  color: #157570; }\n\n.item__title:hover {\n  color: #20b2aa; }\n\n.item__description {\n  padding-top: 10px; }\n\n.item-container {\n  --n: 1;\n  transform: translate(calc(var(--tx, 0px) + var(--i, 0)/var(--n)*-100%)); }\n\n.smooth {\n  transition: transform calc(var(--f, 1)*.5s) ease-out; }\n\n.search-form {\n  margin: 30px auto;\n  max-width: 80%; }\n\n.search-form__input {\n  padding: 10px;\n  font-size: 17px;\n  border: 1px solid #20b2aa;\n  float: left;\n  width: 90%;\n  background: #f1f1f1; }\n\n.search-form__button {\n  float: left;\n  width: 10%;\n  padding: 10px;\n  background: #37bd80;\n  color: white;\n  font-size: 17px;\n  border: 1px solid #20b2aa;\n  border-left: none;\n  cursor: pointer;\n  transition: 0.4s; }\n\n.search-form__button:hover {\n  background: #157570; }\n\n.search-form::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-self: flex-end; }\n\n.navigation-list {\n  margin-top: 2%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-self: flex-end; }\n\n.navigation li {\n  margin: 0.5em;\n  width: 2em;\n  height: 2em;\n  text-align: center;\n  line-height: 1.8em;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  cursor: pointer;\n  user-select: none; }\n\nli.navigation-list__item--active {\n  background-color: #fff;\n  color: #20b2aa;\n  border-radius: 50%;\n  display: block !important; }\n\n.navigation-list__item--next,\n.navigation-list__item--prev {\n  display: block !important; }\n\n.navigation-list__item {\n  color: #fff;\n  display: none; }\n\n.navigation-list__item\n.navigation li:hover:not(.navigation-list__item--active) {\n  background-color: rgba(221, 221, 221, 0.705);\n  border-radius: 100%; }\n", ""]);

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

/***/ "./src/components/request.js":
/*!***********************************!*\
  !*** ./src/components/request.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/components/ui.js");
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
      if (!token) this.renderPage(data.items);else this.refreshPages(data.items);
    });
  }

  renderPage(vid) {
    this.DATA.push(vid);
    _ui__WEBPACK_IMPORTED_MODULE_0__["default"].renderVideos(vid);
    _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createNavigation();
  }

  refreshPages(vid) {
    this.DATA.push(vid);
    _ui__WEBPACK_IMPORTED_MODULE_0__["default"].addPages(vid);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/components/request.js");

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
    this.default = null;
    const container = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('div');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(container, 'container');
    container.addEventListener('mousedown', this.downEvent.bind(this));
    container.addEventListener('mouseup', this.upEvent.bind(this));
    container.addEventListener('touchstart', this.downEvent.bind(this));
    container.addEventListener('touchend', this.upEvent.bind(this));
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('body'), container);
    const slider = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('div');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(slider, 'slider');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.container'), slider);
    const itemContainer = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('div');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(itemContainer, 'item-container');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.slider'), itemContainer);

    const renderVideos = videos => videos.reduce((acc, video) => _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(acc, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].inner(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('div'), 'item'), `
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
    `)), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.item-container'));

    renderVideos(vid);
  }

  addPages(vid) {
    this.default = null;
    const pages = this.calculatePages();

    const renderVideos = videos => videos.reduce((acc, video) => _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(acc, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].inner(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('div'), 'item'), `
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
    `)), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.item-container'));

    renderVideos(vid);
    this.refreshNavigationList(pages);
  }

  refreshNavigationList(pages) {
    this.default = this.default;
    const pagesCounter = this.calculatePages();
    const elemsContainer = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list');
    const navigationLi = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('li');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(navigationLi, 'navigation-list__item');

    for (let i = pages; i < pagesCounter; i += 1) {
      const navigationItem = navigationLi.cloneNode(true);
      navigationItem.innerHTML = i + 1;
      elemsContainer.appendChild(navigationItem);
    }
  }

  createSearchForm() {
    this.createMediaQueries();
    const form = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('form');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(form, 'search-form');
    const input = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('input');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(input, 'search-form__input');
    const button = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('button');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(button, 'search-form__button');
    const icon = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('i');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(icon, 'fa');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(icon, 'fa-search');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('body'), form);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.search-form'), input);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.search-form'), button);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.search-form__button'), icon);
  }

  createNavigation() {
    this.createMediaQueries();
    const body = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('body');
    const navigation = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('div');
    navigation.className = 'navigation';
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(body, navigation);
    const navigationList = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('ul');
    navigationList.className = 'navigation-list';
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].append(navigation, navigationList);
    this.createNavigationList();
    this.previousWidth = document.querySelector('.item-container').clientWidth;
    navigationList.addEventListener('click', this.pageChange);
  }

  createNavigationList() {
    this.default = null;
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
    const elemsContainer = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list');
    const navigationLi = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].create('li');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(navigationLi, 'navigation-list__item');

    for (let i = 0; i < pagesCounter; i += 1) {
      const navigationItem = navigationLi.cloneNode(true);
      navigationItem.innerHTML = i + 1;
      elemsContainer.appendChild(navigationItem);
    }

    elemsContainer.children[activeItem].classList.add('navigation-list__item--active');
    elemsContainer.children[activeItem + 1].classList.add('navigation-list__item--next');
    if (activeItem !== 0) elemsContainer.children[activeItem - 1].classList.add('navigation-list__item--prev');
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation').appendChild(elemsContainer);
  }

  rebuild() {
    this.resultsPerPageOld = this.resultsPerPage;
    this.createMediaQueries();
    const itemContainer = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.item-container');

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
      if (!slider.style.left) slider.style.left = 0;
      const sliderLeft = parseInt(slider.style.left, 10);
      const currentPos = parseInt(current.innerText, 10);
      const targetPos = parseInt(target.innerText, 10);
      const left = sliderLeft - (targetPos - currentPos) * width;
      current.classList.remove('navigation-list__item--active');
      target.classList.add('navigation-list__item--active');
      slider.style.left = `${left}px`;
      this.style.left = '-10px';
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--next')) _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--next').classList.remove('navigation-list__item--next');
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--prev')) _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--prev').classList.remove('navigation-list__item--prev');
      const activeItem = Math.abs(Math.floor(left / width));
      const elemsContainer = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list');
      if (elemsContainer.children[activeItem + 1]) elemsContainer.children[activeItem + 1].classList.add('navigation-list__item--next');
      if (activeItem !== 0) elemsContainer.children[activeItem - 1].classList.add('navigation-list__item--prev');

      if (elemsContainer.hasChildNodes()) {
        const children = elemsContainer.childNodes;

        if (activeItem > children.length - 1 - 5) {
          const url = _request__WEBPACK_IMPORTED_MODULE_1__["default"].makeVideosUrl();
          _request__WEBPACK_IMPORTED_MODULE_1__["default"].makeRequest(url, 'Refresh');
        }
      }
    }
  }

  calculatePages() {
    this.pagesCount = Math.ceil(Array.from(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$$('.item')).length / this.resultsPerPage);
    return this.pagesCount;
  }

  resetUi() {
    this.data = [];
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.container').remove();
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation').remove();
  }

  createMediaQueries() {
    const large = window.matchMedia('(min-width: 1025px) and (max-width: 1345px)').matches;
    const small = window.matchMedia('(max-width: 767px)').matches;
    const medium = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;
    const max = window.matchMedia('(min-width: 1346px)').matches;
    if (large === true) this.currentScreen = 'large';
    if (medium === true) this.currentScreen = 'medium';
    if (small === true) this.currentScreen = 'small';
    if (max === true) this.currentScreen = 'max';
    const iC = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.item-container');
    const slider = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.slider');

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
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--next')) _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--next').click();
    }

    if (swipeLenght > +this.swipeMinLength && swipeDuration < this.swipeMaxDuration) {
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--prev')) _utils__WEBPACK_IMPORTED_MODULE_0__["default"].$('.navigation-list__item--prev').click();
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Ui());

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  $,
  create,
  append,
  addClass,
  inner,
  $$
  /* eslint-enable */

});

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
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/utils */ "./src/components/utils.js");
/* harmony import */ var _components_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/request */ "./src/components/request.js");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ui */ "./src/components/ui.js");






function userRequest(event) {
  event.preventDefault();
  if (_components_utils__WEBPACK_IMPORTED_MODULE_2__["default"].$('.container')) _components_ui__WEBPACK_IMPORTED_MODULE_4__["default"].resetUi();
  const searchInput = _components_utils__WEBPACK_IMPORTED_MODULE_2__["default"].$('.search-form__input');
  const userInput = searchInput.value;
  const url = _components_request__WEBPACK_IMPORTED_MODULE_3__["default"].makeVideosUrl(userInput);
  _components_request__WEBPACK_IMPORTED_MODULE_3__["default"].makeRequest(url);
  this.blur();
}

_components_ui__WEBPACK_IMPORTED_MODULE_4__["default"].createSearchForm();
const searchButton = _components_utils__WEBPACK_IMPORTED_MODULE_2__["default"].$('.search-form__button');
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvbm9ybWFsaXplLnNjc3M/MzBhOCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz8xOWQ4Il0sIm5hbWVzIjpbIlJlcXVlc3QiLCJjb25zdHJ1Y3RvciIsIk1BWF9SRVNVTFRTIiwiS0VZIiwiU1RBVElTVElDX1VSTCIsIlBBR0VfVE9LRU4iLCJORVhUX1BBR0UiLCJEQVRBIiwibWFrZVZpZGVvc1VybCIsInF1ZXJ5IiwiVklERU9TX1VSTCIsIm1ha2VSZXF1ZXN0IiwidXJsIiwidG9rZW4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1ha2VOZXh0UGFnZVVSTCIsIm5leHRQYWdlVG9rZW4iLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpZCIsInZpZGVvSWQiLCJpZHMiLCJyZW5kZXJQYWdlIiwicmVmcmVzaFBhZ2VzIiwidmlkIiwicHVzaCIsInVpIiwicmVuZGVyVmlkZW9zIiwiY3JlYXRlTmF2aWdhdGlvbiIsImFkZFBhZ2VzIiwicHQiLCJnZXREYXRhIiwiVWkiLCJyZXN1bHRzUGVyUGFnZSIsInJlc3VsdHNQZXJQYWdlT2xkIiwicGFnZXNDb3VudCIsImN1cnJlbnRTY3JlZW4iLCJwcmV2aW91c1dpZHRoIiwic3RhcnRYIiwiZW5kWCIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJzd2lwZU1pbkxlbmd0aCIsInN3aXBlTWF4RHVyYXRpb24iLCJkZWZhdWx0IiwiY29udGFpbmVyIiwidXRpbHMiLCJjcmVhdGUiLCJhZGRDbGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb3duRXZlbnQiLCJiaW5kIiwidXBFdmVudCIsImFwcGVuZCIsIiQiLCJzbGlkZXIiLCJpdGVtQ29udGFpbmVyIiwidmlkZW9zIiwicmVkdWNlIiwiYWNjIiwidmlkZW8iLCJpbm5lciIsInNuaXBwZXQiLCJ0aHVtYm5haWxzIiwibWVkaXVtIiwidGl0bGUiLCJjaGFubmVsVGl0bGUiLCJwdWJsaXNoZWRBdCIsInN1YnN0ciIsInN0YXRpc3RpY3MiLCJ2aWV3Q291bnQiLCJkZXNjcmlwdGlvbiIsInBhZ2VzIiwiY2FsY3VsYXRlUGFnZXMiLCJyZWZyZXNoTmF2aWdhdGlvbkxpc3QiLCJwYWdlc0NvdW50ZXIiLCJlbGVtc0NvbnRhaW5lciIsIm5hdmlnYXRpb25MaSIsImkiLCJuYXZpZ2F0aW9uSXRlbSIsImNsb25lTm9kZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JlYXRlU2VhcmNoRm9ybSIsImNyZWF0ZU1lZGlhUXVlcmllcyIsImZvcm0iLCJpbnB1dCIsImJ1dHRvbiIsImljb24iLCJib2R5IiwibmF2aWdhdGlvbiIsImNsYXNzTmFtZSIsIm5hdmlnYXRpb25MaXN0IiwiY3JlYXRlTmF2aWdhdGlvbkxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRXaWR0aCIsInBhZ2VDaGFuZ2UiLCJpdGVtQ29udGFpbmVyV2lkdGgiLCJzdHlsZSIsImxlZnQiLCJNYXRoIiwiYWJzIiwicGFyc2VJbnQiLCJjb2xPZlN3aXBlcyIsImNlaWwiLCJwcmVQcmV2aW91c1dpZHRoIiwiZWxlbSIsIm5lZWRTd2lwZXMiLCJyb3VuZCIsImFjdGl2ZUl0ZW0iLCJmbG9vciIsImNoaWxkcmVuIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVidWlsZCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsImN1cnJlbnQiLCJ3aWR0aCIsInNsaWRlckxlZnQiLCJjdXJyZW50UG9zIiwiaW5uZXJUZXh0IiwidGFyZ2V0UG9zIiwicmVtb3ZlIiwiaGFzQ2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJyZXF1ZXN0IiwiQXJyYXkiLCJmcm9tIiwiJCQiLCJyZXNldFVpIiwibGFyZ2UiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInNtYWxsIiwibWF4IiwiaUMiLCJEYXRlIiwibm93IiwiY2xpZW50WCIsImNoYW5nZWRUb3VjaGVzIiwic3dpcGVMZW5naHQiLCJzd2lwZUR1cmF0aW9uIiwiY2xpY2siLCJlbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50IiwiY2hpbGQiLCJ0ZXh0IiwidXNlclJlcXVlc3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoSW5wdXQiLCJ1c2VySW5wdXQiLCJ2YWx1ZSIsImJsdXIiLCJzZWFyY2hCdXR0b24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0FBOEIsT0FBOUIsRUFBdUMyRyxXQUF2QztBQUVBbkIsTUFBTSxDQUFDeEYsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0N2QixzREFBRSxDQUFDeUYsT0FBSCxDQUFXaEUsSUFBWCxDQUFnQnpCLHNEQUFoQixDQUFsQyxFOzs7Ozs7Ozs7Ozs7QUNyQkEsY0FBYyxtQkFBTyxDQUFDLDRNQUF3Rzs7QUFFOUgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbEJmLGNBQWMsbUJBQU8sQ0FBQyxvTUFBb0c7O0FBRTFILDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7IH1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlOyB9XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07IH1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07IH1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7IH1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqLyB9XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07IH1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMGIyYWE7XFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG51bCwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLnNsaWRlciB7XFxuICB3aWR0aDogMTM2MHB4O1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgbGVmdDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDFzIGVhc2UtaW4tb3V0OyB9XFxuXFxuLml0ZW0ge1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogNDg4cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiA1cHggMC41dmggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5pdGVtX19pbmZvcm1hdGlvbiB7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuLml0ZW1fX2xpc3QgbGkge1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cXG5cXG4uaXRlbV9fZ2VuZXJhbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29sb3I6ICM1NTU1NTU7IH1cXG5cXG4uaXRlbV9fZ2VuZXJhbCBpIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxcblxcbi5pdGVtX19saXN0IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uaXRlbV9fdGl0bGUge1xcbiAgY29sb3I6ICMxNTc1NzA7IH1cXG5cXG4uaXRlbV9fdGl0bGU6aG92ZXIge1xcbiAgY29sb3I6ICMyMGIyYWE7IH1cXG5cXG4uaXRlbV9fZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7IH1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgLS1uOiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyh2YXIoLS10eCwgMHB4KSArIHZhcigtLWksIDApL3ZhcigtLW4pKi0xMDAlKSk7IH1cXG5cXG4uc21vb3RoIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBjYWxjKHZhcigtLWYsIDEpKi41cykgZWFzZS1vdXQ7IH1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgbWFyZ2luOiAzMHB4IGF1dG87XFxuICBtYXgtd2lkdGg6IDgwJTsgfVxcblxcbi5zZWFyY2gtZm9ybV9faW5wdXQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMGIyYWE7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyB9XFxuXFxuLnNlYXJjaC1mb3JtX19idXR0b24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6ICMzN2JkODA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjBiMmFhO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzOyB9XFxuXFxuLnNlYXJjaC1mb3JtX19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzE1NzU3MDsgfVxcblxcbi5zZWFyY2gtZm9ybTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjbGVhcjogYm90aDtcXG4gIGRpc3BsYXk6IHRhYmxlOyB9XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kOyB9XFxuXFxuLm5hdmlnYXRpb24tbGlzdCB7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgfVxcblxcbi5uYXZpZ2F0aW9uIGxpIHtcXG4gIG1hcmdpbjogMC41ZW07XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS44ZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG5cXG5saS5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMGIyYWE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XFxuXFxuLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tbmV4dCxcXG4ubmF2aWdhdGlvbi1saXN0X19pdGVtLS1wcmV2IHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cXG5cXG4ubmF2aWdhdGlvbi1saXN0X19pdGVtIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW1cXG4ubmF2aWdhdGlvbiBsaTpob3Zlcjpub3QoLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tYWN0aXZlKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuNzA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgdWkgZnJvbSAnLi91aSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuTUFYX1JFU1VMVFMgPSAnMTUnO1xuICAgIHRoaXMuS0VZID0gJ0FJemFTeUNBUElPNU1ndGNpT0J4NzloSTFRY0NsRVZYRzlGRDhQUSc7XG4gICAgdGhpcy5TVEFUSVNUSUNfVVJMID0gYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zP2tleT0ke3RoaXMuS0VZfSZwYXJ0PXNuaXBwZXQsY29udGVudERldGFpbHMsc3RhdGlzdGljcyZpZD1gO1xuICAgIHRoaXMuUEFHRV9UT0tFTiA9IG51bGw7XG4gICAgdGhpcy5ORVhUX1BBR0UgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2g/a2V5PSR7dGhpcy5LRVl9JnBhcnQ9c25pcHBldCZ0eXBlPXZpZGVvJm1heFJlc3VsdHM9JHt0aGlzLk1BWF9SRVNVTFRTfSZwYWdlVG9rZW49YDtcbiAgICB0aGlzLkRBVEEgPSBbXTtcbiAgfVxuXG4gIG1ha2VWaWRlb3NVcmwocXVlcnkpIHtcbiAgICB0aGlzLlZJREVPU19VUkwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2g/a2V5PSR7dGhpcy5LRVl9JnE9JHtxdWVyeX0mcGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9JHt0aGlzLk1BWF9SRVNVTFRTfSZ0eXBlPXZpZGVvYDtcbiAgICBpZiAodGhpcy5QQUdFX1RPS0VOICE9PSBudWxsKSB7XG4gICAgICB0aGlzLk5FWFRfUEFHRSA9IGAke3RoaXMuTkVYVF9QQUdFfSR7dGhpcy5QQUdFX1RPS0VOfWA7XG4gICAgICByZXR1cm4gdGhpcy5ORVhUX1BBR0U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLlZJREVPU19VUkw7XG4gIH1cblxuICBtYWtlUmVxdWVzdCh1cmwsIHRva2VuKSB7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm1ha2VOZXh0UGFnZVVSTChkYXRhLm5leHRQYWdlVG9rZW4pOyByZXR1cm4gZGF0YS5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmlkLnZpZGVvSWQpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGlkcyA9PiBmZXRjaCh0aGlzLlNUQVRJU1RJQ19VUkwgKyBpZHMpKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoIXRva2VuKSB0aGlzLnJlbmRlclBhZ2UoZGF0YS5pdGVtcyk7XG4gICAgICAgIGVsc2UgdGhpcy5yZWZyZXNoUGFnZXMoZGF0YS5pdGVtcyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclBhZ2UodmlkKSB7XG4gICAgdGhpcy5EQVRBLnB1c2godmlkKTtcbiAgICB1aS5yZW5kZXJWaWRlb3ModmlkKTtcbiAgICB1aS5jcmVhdGVOYXZpZ2F0aW9uKCk7XG4gIH1cblxuICByZWZyZXNoUGFnZXModmlkKSB7XG4gICAgdGhpcy5EQVRBLnB1c2godmlkKTtcbiAgICB1aS5hZGRQYWdlcyh2aWQpO1xuICB9XG5cbiAgbWFrZU5leHRQYWdlVVJMKHB0KSB7XG4gICAgdGhpcy5QQUdFX1RPS0VOID0gcHQ7XG4gICAgdGhpcy5ORVhUX1BBR0UgPSBgJHt0aGlzLk5FWFRfUEFHRX0ke3RoaXMuUEFHRV9UT0tFTn1gO1xuICAgIHJldHVybiB0aGlzLk5FWFRfUEFHRTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuREFUQTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVxdWVzdCgpO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5jbGFzcyBVaSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMucmVzdWx0c1BlclBhZ2UgPSA0O1xuICAgIHRoaXMucmVzdWx0c1BlclBhZ2VPbGQgPSAwO1xuICAgIHRoaXMucGFnZXNDb3VudCA9IDA7XG4gICAgdGhpcy5jdXJyZW50U2NyZWVuID0gJ25vbmUnO1xuICAgIHRoaXMucHJldmlvdXNXaWR0aCA9IDA7XG5cbiAgICB0aGlzLnN0YXJ0WCA9IDA7XG4gICAgdGhpcy5lbmRYID0gMDtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5lbmRUaW1lID0gMDtcbiAgICB0aGlzLnN3aXBlTWluTGVuZ3RoID0gMTAwO1xuICAgIHRoaXMuc3dpcGVNYXhEdXJhdGlvbiA9IDgwMDtcbiAgfVxuXG4gIHJlbmRlclZpZGVvcyh2aWQpIHtcbiAgICB0aGlzLmRlZmF1bHQgPSBudWxsO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZSgnZGl2Jyk7XG4gICAgdXRpbHMuYWRkQ2xhc3MoY29udGFpbmVyLCAnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuZG93bkV2ZW50LmJpbmQodGhpcykpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy51cEV2ZW50LmJpbmQodGhpcykpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5kb3duRXZlbnQuYmluZCh0aGlzKSk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy51cEV2ZW50LmJpbmQodGhpcykpO1xuICAgIHV0aWxzLmFwcGVuZCh1dGlscy4kKCdib2R5JyksIGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBzbGlkZXIgPSB1dGlscy5jcmVhdGUoJ2RpdicpO1xuICAgIHV0aWxzLmFkZENsYXNzKHNsaWRlciwgJ3NsaWRlcicpO1xuICAgIHV0aWxzLmFwcGVuZCh1dGlscy4kKCcuY29udGFpbmVyJyksIHNsaWRlcik7XG5cbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gdXRpbHMuY3JlYXRlKCdkaXYnKTtcbiAgICB1dGlscy5hZGRDbGFzcyhpdGVtQ29udGFpbmVyLCAnaXRlbS1jb250YWluZXInKTtcbiAgICB1dGlscy5hcHBlbmQodXRpbHMuJCgnLnNsaWRlcicpLCBpdGVtQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHJlbmRlclZpZGVvcyA9IHZpZGVvcyA9PiB2aWRlb3MucmVkdWNlKChhY2MsIHZpZGVvKSA9PiB1dGlscy5hcHBlbmQoYWNjLCB1dGlscy5pbm5lcih1dGlscy5hZGRDbGFzcyh1dGlscy5jcmVhdGUoJ2RpdicpLCAnaXRlbScpLCBgXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1fX2hlYWRlclwiPlxuICAgICAgPGltZyBzcmM9XCIke3ZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5tZWRpdW0udXJsfVwiIGFsdD1cIlwiIGhlaWdodD1cIjE4MFwiIHdpZHRoPVwiMzIwXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIml0ZW1fX2luZm9ybWF0aW9uXCI+XG4gICAgICA8dWwgY2xhc3M9XCJpdGVtX19saXN0XCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7dmlkZW8uaWR9XCI+PGxpIGNsYXNzPVwiaXRlbV9fZ2VuZXJhbCBpdGVtX190aXRsZVwiPiR7dmlkZW8uc25pcHBldC50aXRsZX08L2xpPjwvYT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaXRlbV9fZ2VuZXJhbCBpdGVtX19hdXRob3JcIj48aSBjbGFzcz1cImZhIGZhLWFkZHJlc3MtY2FyZFwiPjwvaT4gJHt2aWRlby5zbmlwcGV0LmNoYW5uZWxUaXRsZX08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJpdGVtX19nZW5lcmFsIGl0ZW1fX2RhdGVcIj48aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPiAke3ZpZGVvLnNuaXBwZXQucHVibGlzaGVkQXQuc3Vic3RyKDAsIDkpfTwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIml0ZW1fX2dlbmVyYWwgaXRlbV9fdmlld3NcIj48aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4gJHt2aWRlby5zdGF0aXN0aWNzLnZpZXdDb3VudH08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJpdGVtX19kZXNjcmlwdGlvblwiPiAke3ZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb24uc3Vic3RyKDAsIDE4MCl9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgYCkpLCB1dGlscy4kKCcuaXRlbS1jb250YWluZXInKSk7XG4gICAgcmVuZGVyVmlkZW9zKHZpZCk7XG4gIH1cblxuICBhZGRQYWdlcyh2aWQpIHtcbiAgICB0aGlzLmRlZmF1bHQgPSBudWxsO1xuICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5jYWxjdWxhdGVQYWdlcygpO1xuICAgIGNvbnN0IHJlbmRlclZpZGVvcyA9IHZpZGVvcyA9PiB2aWRlb3MucmVkdWNlKChhY2MsIHZpZGVvKSA9PiB1dGlscy5hcHBlbmQoYWNjLCB1dGlscy5pbm5lcih1dGlscy5hZGRDbGFzcyh1dGlscy5jcmVhdGUoJ2RpdicpLCAnaXRlbScpLCBgXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1fX2hlYWRlclwiPlxuICAgICAgPGltZyBzcmM9XCIke3ZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5tZWRpdW0udXJsfVwiIGFsdD1cIlwiIGhlaWdodD1cIjE4MFwiIHdpZHRoPVwiMzIwXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIml0ZW1fX2luZm9ybWF0aW9uXCI+XG4gICAgICA8dWwgY2xhc3M9XCJpdGVtX19saXN0XCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7dmlkZW8uaWR9XCI+PGxpIGNsYXNzPVwiaXRlbV9fZ2VuZXJhbCBpdGVtX190aXRsZVwiPiR7dmlkZW8uc25pcHBldC50aXRsZX08L2xpPjwvYT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaXRlbV9fZ2VuZXJhbCBpdGVtX19hdXRob3JcIj48aSBjbGFzcz1cImZhIGZhLWFkZHJlc3MtY2FyZFwiPjwvaT4gJHt2aWRlby5zbmlwcGV0LmNoYW5uZWxUaXRsZX08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJpdGVtX19nZW5lcmFsIGl0ZW1fX2RhdGVcIj48aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPiAke3ZpZGVvLnNuaXBwZXQucHVibGlzaGVkQXQuc3Vic3RyKDAsIDkpfTwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIml0ZW1fX2dlbmVyYWwgaXRlbV9fdmlld3NcIj48aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT4gJHt2aWRlby5zdGF0aXN0aWNzLnZpZXdDb3VudH08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJpdGVtX19kZXNjcmlwdGlvblwiPiAke3ZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb24uc3Vic3RyKDAsIDE4MCl9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgYCkpLCB1dGlscy4kKCcuaXRlbS1jb250YWluZXInKSk7XG4gICAgcmVuZGVyVmlkZW9zKHZpZCk7XG5cbiAgICB0aGlzLnJlZnJlc2hOYXZpZ2F0aW9uTGlzdChwYWdlcyk7XG4gIH1cblxuICByZWZyZXNoTmF2aWdhdGlvbkxpc3QocGFnZXMpIHtcbiAgICB0aGlzLmRlZmF1bHQgPSB0aGlzLmRlZmF1bHQ7XG4gICAgY29uc3QgcGFnZXNDb3VudGVyID0gdGhpcy5jYWxjdWxhdGVQYWdlcygpO1xuICAgIGNvbnN0IGVsZW1zQ29udGFpbmVyID0gdXRpbHMuJCgnLm5hdmlnYXRpb24tbGlzdCcpO1xuICAgIGNvbnN0IG5hdmlnYXRpb25MaSA9IHV0aWxzLmNyZWF0ZSgnbGknKTtcbiAgICB1dGlscy5hZGRDbGFzcyhuYXZpZ2F0aW9uTGksICduYXZpZ2F0aW9uLWxpc3RfX2l0ZW0nKTtcblxuICAgIGZvciAobGV0IGkgPSBwYWdlczsgaSA8IHBhZ2VzQ291bnRlcjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbSA9IG5hdmlnYXRpb25MaS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBuYXZpZ2F0aW9uSXRlbS5pbm5lckhUTUwgPSBpICsgMTtcbiAgICAgIGVsZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb25JdGVtKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVTZWFyY2hGb3JtKCkge1xuICAgIHRoaXMuY3JlYXRlTWVkaWFRdWVyaWVzKCk7XG4gICAgY29uc3QgZm9ybSA9IHV0aWxzLmNyZWF0ZSgnZm9ybScpO1xuICAgIHV0aWxzLmFkZENsYXNzKGZvcm0sICdzZWFyY2gtZm9ybScpO1xuICAgIGNvbnN0IGlucHV0ID0gdXRpbHMuY3JlYXRlKCdpbnB1dCcpO1xuICAgIHV0aWxzLmFkZENsYXNzKGlucHV0LCAnc2VhcmNoLWZvcm1fX2lucHV0Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gdXRpbHMuY3JlYXRlKCdidXR0b24nKTtcbiAgICB1dGlscy5hZGRDbGFzcyhidXR0b24sICdzZWFyY2gtZm9ybV9fYnV0dG9uJyk7XG4gICAgY29uc3QgaWNvbiA9IHV0aWxzLmNyZWF0ZSgnaScpO1xuICAgIHV0aWxzLmFkZENsYXNzKGljb24sICdmYScpO1xuICAgIHV0aWxzLmFkZENsYXNzKGljb24sICdmYS1zZWFyY2gnKTtcblxuICAgIHV0aWxzLmFwcGVuZCh1dGlscy4kKCdib2R5JyksIGZvcm0pO1xuICAgIHV0aWxzLmFwcGVuZCh1dGlscy4kKCcuc2VhcmNoLWZvcm0nKSwgaW5wdXQpO1xuICAgIHV0aWxzLmFwcGVuZCh1dGlscy4kKCcuc2VhcmNoLWZvcm0nKSwgYnV0dG9uKTtcbiAgICB1dGlscy5hcHBlbmQodXRpbHMuJCgnLnNlYXJjaC1mb3JtX19idXR0b24nKSwgaWNvbik7XG4gIH1cblxuICBjcmVhdGVOYXZpZ2F0aW9uKCkge1xuICAgIHRoaXMuY3JlYXRlTWVkaWFRdWVyaWVzKCk7XG4gICAgY29uc3QgYm9keSA9IHV0aWxzLiQoJ2JvZHknKTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gdXRpbHMuY3JlYXRlKCdkaXYnKTtcbiAgICBuYXZpZ2F0aW9uLmNsYXNzTmFtZSA9ICduYXZpZ2F0aW9uJztcbiAgICB1dGlscy5hcHBlbmQoYm9keSwgbmF2aWdhdGlvbik7XG5cbiAgICBjb25zdCBuYXZpZ2F0aW9uTGlzdCA9IHV0aWxzLmNyZWF0ZSgndWwnKTtcbiAgICBuYXZpZ2F0aW9uTGlzdC5jbGFzc05hbWUgPSAnbmF2aWdhdGlvbi1saXN0JztcblxuICAgIHV0aWxzLmFwcGVuZChuYXZpZ2F0aW9uLCBuYXZpZ2F0aW9uTGlzdCk7XG4gICAgdGhpcy5jcmVhdGVOYXZpZ2F0aW9uTGlzdCgpO1xuICAgIHRoaXMucHJldmlvdXNXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWNvbnRhaW5lcicpLmNsaWVudFdpZHRoO1xuICAgIG5hdmlnYXRpb25MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wYWdlQ2hhbmdlKTtcbiAgfVxuXG4gIGNyZWF0ZU5hdmlnYXRpb25MaXN0KCkge1xuICAgIHRoaXMuZGVmYXVsdCA9IG51bGw7XG5cbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgaXRlbUNvbnRhaW5lcldpZHRoID0gaXRlbUNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBwYWdlc0NvdW50ZXIgPSB0aGlzLmNhbGN1bGF0ZVBhZ2VzKCk7XG4gICAgaWYgKCFpdGVtQ29udGFpbmVyLnN0eWxlLmxlZnQpIHsgaXRlbUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzBweCc7IH1cblxuICAgIGxldCBsZWZ0ID0gTWF0aC5hYnMocGFyc2VJbnQoaXRlbUNvbnRhaW5lci5zdHlsZS5sZWZ0LCAxMCkpO1xuICAgIGlmIChsZWZ0ICE9PSAwKSB7XG4gICAgICBjb25zdCBjb2xPZlN3aXBlcyA9IE1hdGguYWJzKE1hdGguY2VpbChsZWZ0IC8gdGhpcy5wcmVQcmV2aW91c1dpZHRoKSk7XG4gICAgICBjb25zdCBlbGVtID0gY29sT2ZTd2lwZXMgKiB0aGlzLnJlc3VsdHNQZXJQYWdlT2xkO1xuICAgICAgY29uc3QgbmVlZFN3aXBlcyA9IE1hdGgucm91bmQoZWxlbSAvIHRoaXMucmVzdWx0c1BlclBhZ2UpO1xuICAgICAgbGVmdCA9IG5lZWRTd2lwZXMgKiBpdGVtQ29udGFpbmVyV2lkdGg7XG4gICAgICBpdGVtQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBgLSR7bGVmdH1weGA7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IE1hdGguZmxvb3IobGVmdCAvIGl0ZW1Db250YWluZXJXaWR0aCk7XG5cbiAgICBjb25zdCBlbGVtc0NvbnRhaW5lciA9IHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3QnKTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uTGkgPSB1dGlscy5jcmVhdGUoJ2xpJyk7XG4gICAgdXRpbHMuYWRkQ2xhc3MobmF2aWdhdGlvbkxpLCAnbmF2aWdhdGlvbi1saXN0X19pdGVtJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzQ291bnRlcjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbSA9IG5hdmlnYXRpb25MaS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBuYXZpZ2F0aW9uSXRlbS5pbm5lckhUTUwgPSBpICsgMTtcbiAgICAgIGVsZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb25JdGVtKTtcbiAgICB9XG4gICAgZWxlbXNDb250YWluZXIuY2hpbGRyZW5bYWN0aXZlSXRlbV0uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1hY3RpdmUnKTtcbiAgICBlbGVtc0NvbnRhaW5lci5jaGlsZHJlblthY3RpdmVJdGVtICsgMV0uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1uZXh0Jyk7XG4gICAgaWYgKGFjdGl2ZUl0ZW0gIT09IDApIGVsZW1zQ29udGFpbmVyLmNoaWxkcmVuW2FjdGl2ZUl0ZW0gLSAxXS5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLXByZXYnKTtcblxuICAgIHV0aWxzLiQoJy5uYXZpZ2F0aW9uJykuYXBwZW5kQ2hpbGQoZWxlbXNDb250YWluZXIpO1xuICB9XG5cbiAgcmVidWlsZCgpIHtcbiAgICB0aGlzLnJlc3VsdHNQZXJQYWdlT2xkID0gdGhpcy5yZXN1bHRzUGVyUGFnZTtcbiAgICB0aGlzLmNyZWF0ZU1lZGlhUXVlcmllcygpO1xuXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IHV0aWxzLiQoJy5pdGVtLWNvbnRhaW5lcicpO1xuICAgIGlmIChpdGVtQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBpdGVtQ29udGFpbmVyV2lkdGggPSBpdGVtQ29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgaWYgKHRoaXMucHJldmlvdXNXaWR0aCAhPT0gaXRlbUNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgIHRoaXMucHJlUHJldmlvdXNXaWR0aCA9IHRoaXMucHJldmlvdXNXaWR0aDtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbi1saXN0Jyk7XG5cbiAgICAgICAgd2hpbGUgKG5hdmlnYXRpb25MaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBuYXZpZ2F0aW9uTGlzdC5yZW1vdmVDaGlsZChuYXZpZ2F0aW9uTGlzdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNyZWF0ZU5hdmlnYXRpb25MaXN0KCk7XG5cbiAgICAgICAgbmF2aWdhdGlvbkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBhZ2VDaGFuZ2UpO1xuICAgICAgICB0aGlzLnByZXZpb3VzV2lkdGggPSBpdGVtQ29udGFpbmVyV2lkdGg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGFnZUNoYW5nZShlKSB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdmlnYXRpb24tbGlzdF9faXRlbScpKSB7XG4gICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbi1saXN0X19pdGVtLS1hY3RpdmUnKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gc2xpZGVyLmNsaWVudFdpZHRoO1xuICAgICAgaWYgKCFzbGlkZXIuc3R5bGUubGVmdCkgc2xpZGVyLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgY29uc3Qgc2xpZGVyTGVmdCA9IHBhcnNlSW50KHNsaWRlci5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgICBjb25zdCBjdXJyZW50UG9zID0gcGFyc2VJbnQoY3VycmVudC5pbm5lclRleHQsIDEwKTtcbiAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHBhcnNlSW50KHRhcmdldC5pbm5lclRleHQsIDEwKTtcbiAgICAgIGNvbnN0IGxlZnQgPSBzbGlkZXJMZWZ0IC0gKHRhcmdldFBvcyAtIGN1cnJlbnRQb3MpICogd2lkdGg7XG5cbiAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1hY3RpdmUnKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLWFjdGl2ZScpO1xuXG4gICAgICBzbGlkZXIuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gJy0xMHB4JztcblxuICAgICAgaWYgKHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLW5leHQnKSkgdXRpbHMuJCgnLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tbmV4dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tbGlzdF9faXRlbS0tbmV4dCcpO1xuICAgICAgaWYgKHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLXByZXYnKSkgdXRpbHMuJCgnLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tcHJldicpLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tbGlzdF9faXRlbS0tcHJldicpO1xuICAgICAgY29uc3QgYWN0aXZlSXRlbSA9IE1hdGguYWJzKE1hdGguZmxvb3IobGVmdCAvIHdpZHRoKSk7XG4gICAgICBjb25zdCBlbGVtc0NvbnRhaW5lciA9IHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3QnKTtcbiAgICAgIGlmIChlbGVtc0NvbnRhaW5lci5jaGlsZHJlblthY3RpdmVJdGVtICsgMV0pIGVsZW1zQ29udGFpbmVyLmNoaWxkcmVuW2FjdGl2ZUl0ZW0gKyAxXS5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLW5leHQnKTtcbiAgICAgIGlmIChhY3RpdmVJdGVtICE9PSAwKSBlbGVtc0NvbnRhaW5lci5jaGlsZHJlblthY3RpdmVJdGVtIC0gMV0uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1wcmV2Jyk7XG5cbiAgICAgIGlmIChlbGVtc0NvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtc0NvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgICBpZiAoYWN0aXZlSXRlbSA+IChjaGlsZHJlbi5sZW5ndGggLSAxKSAtIDUpIHtcbiAgICAgICAgICBjb25zdCB1cmwgPSByZXF1ZXN0Lm1ha2VWaWRlb3NVcmwoKTtcbiAgICAgICAgICByZXF1ZXN0Lm1ha2VSZXF1ZXN0KHVybCwgJ1JlZnJlc2gnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZVBhZ2VzKCkge1xuICAgIHRoaXMucGFnZXNDb3VudCA9IE1hdGguY2VpbChBcnJheS5mcm9tKHV0aWxzLiQkKCcuaXRlbScpKS5sZW5ndGggLyB0aGlzLnJlc3VsdHNQZXJQYWdlKTtcbiAgICByZXR1cm4gdGhpcy5wYWdlc0NvdW50O1xuICB9XG5cbiAgcmVzZXRVaSgpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB1dGlscy4kKCcuY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgdXRpbHMuJCgnLm5hdmlnYXRpb24nKS5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZU1lZGlhUXVlcmllcygpIHtcbiAgICBjb25zdCBsYXJnZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMzQ1cHgpJykubWF0Y2hlcztcbiAgICBjb25zdCBzbWFsbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzO1xuICAgIGNvbnN0IG1lZGl1bSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCknKS5tYXRjaGVzO1xuICAgIGNvbnN0IG1heCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMzQ2cHgpJykubWF0Y2hlcztcbiAgICBpZiAobGFyZ2UgPT09IHRydWUpIHRoaXMuY3VycmVudFNjcmVlbiA9ICdsYXJnZSc7XG4gICAgaWYgKG1lZGl1bSA9PT0gdHJ1ZSkgdGhpcy5jdXJyZW50U2NyZWVuID0gJ21lZGl1bSc7XG4gICAgaWYgKHNtYWxsID09PSB0cnVlKSB0aGlzLmN1cnJlbnRTY3JlZW4gPSAnc21hbGwnO1xuICAgIGlmIChtYXggPT09IHRydWUpIHRoaXMuY3VycmVudFNjcmVlbiA9ICdtYXgnO1xuXG4gICAgY29uc3QgaUMgPSB1dGlscy4kKCcuaXRlbS1jb250YWluZXInKTtcbiAgICBjb25zdCBzbGlkZXIgPSB1dGlscy4kKCcuc2xpZGVyJyk7XG5cbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFNjcmVlbikge1xuICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgaWYgKGlDKSB7XG4gICAgICAgICAgaUMuc3R5bGUud2lkdGggPSAnMTM2MHB4JztcbiAgICAgICAgICBzbGlkZXIuc3R5bGUud2lkdGggPSAnMTM2MHB4JztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHNQZXJQYWdlID0gNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgIGlmIChpQykge1xuICAgICAgICAgIGlDLnN0eWxlLndpZHRoID0gJzEwMjBweCc7XG4gICAgICAgICAgc2xpZGVyLnN0eWxlLndpZHRoID0gJzEwMjBweCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzUGVyUGFnZSA9IDM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgaWYgKGlDKSB7XG4gICAgICAgICAgaUMuc3R5bGUud2lkdGggPSAnNjgwcHgnO1xuICAgICAgICAgIHNsaWRlci5zdHlsZS53aWR0aCA9ICc2ODBweCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzUGVyUGFnZSA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICBpZiAoaUMpIHtcbiAgICAgICAgICBpQy5zdHlsZS53aWR0aCA9ICczNDBweCc7XG4gICAgICAgICAgc2xpZGVyLnN0eWxlLndpZHRoID0gJzM0MHB4JztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHNQZXJQYWdlID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBkb3duRXZlbnQoZSkge1xuICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuY2xpZW50WCB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gIH1cblxuICB1cEV2ZW50KGUpIHtcbiAgICB0aGlzLmVuZFggPSBlLmNsaWVudFggfHwgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgIHRoaXMuZW5kVGltZSA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc3dpcGVMZW5naHQgPSB0aGlzLmVuZFggLSB0aGlzLnN0YXJ0WDtcbiAgICBjb25zdCBzd2lwZUR1cmF0aW9uID0gdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgaWYgKHN3aXBlTGVuZ2h0IDwgLXRoaXMuc3dpcGVNaW5MZW5ndGggJiYgc3dpcGVEdXJhdGlvbiA8IHRoaXMuc3dpcGVNYXhEdXJhdGlvbikge1xuICAgICAgaWYgKHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLW5leHQnKSkgdXRpbHMuJCgnLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tbmV4dCcpLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlTGVuZ2h0ID4gK3RoaXMuc3dpcGVNaW5MZW5ndGggJiYgc3dpcGVEdXJhdGlvbiA8IHRoaXMuc3dpcGVNYXhEdXJhdGlvbikge1xuICAgICAgaWYgKHV0aWxzLiQoJy5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLXByZXYnKSkgdXRpbHMuJCgnLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tcHJldicpLmNsaWNrKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVaSgpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbiAgY29uc3QgJCA9IGVsID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICBjb25zdCAkJCA9IGVsID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpO1xuICBjb25zdCBjcmVhdGUgPSBlbCA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcbiAgY29uc3QgYXBwZW5kID0gKHBhcmVudCwgY2hpbGQpID0+IChwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpLCBwYXJlbnQpO1xuICBjb25zdCBhZGRDbGFzcyA9IChlbCwgY2xhc3NOYW1lKSA9PiAoZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLCBlbCk7XG4gIGNvbnN0IGlubmVyID0gKGVsLCB0ZXh0KSA9PiAoZWwuaW5uZXJIVE1MID0gdGV4dCwgZWwpO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAkLCBjcmVhdGUsIGFwcGVuZCwgYWRkQ2xhc3MsIGlubmVyLCAkJFxuICB9XG4gLyogZXNsaW50LWVuYWJsZSAqL1xuIiwiXG5pbXBvcnQgJy4vc3R5bGUvbm9ybWFsaXplLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vY29tcG9uZW50cy91dGlscyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL2NvbXBvbmVudHMvcmVxdWVzdCc7XG5pbXBvcnQgdWkgZnJvbSAnLi9jb21wb25lbnRzL3VpJztcblxuZnVuY3Rpb24gdXNlclJlcXVlc3QoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKHV0aWxzLiQoJy5jb250YWluZXInKSkgdWkucmVzZXRVaSgpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IHV0aWxzLiQoJy5zZWFyY2gtZm9ybV9faW5wdXQnKTtcbiAgY29uc3QgdXNlcklucHV0ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gIGNvbnN0IHVybCA9IHJlcXVlc3QubWFrZVZpZGVvc1VybCh1c2VySW5wdXQpO1xuICByZXF1ZXN0Lm1ha2VSZXF1ZXN0KHVybCk7XG4gIHRoaXMuYmx1cigpO1xufVxuXG51aS5jcmVhdGVTZWFyY2hGb3JtKCk7XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IHV0aWxzLiQoJy5zZWFyY2gtZm9ybV9fYnV0dG9uJyk7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1c2VyUmVxdWVzdCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1aS5yZWJ1aWxkLmJpbmQodWkpKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vcm1hbGl6ZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vcm1hbGl6ZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub3JtYWxpemUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=