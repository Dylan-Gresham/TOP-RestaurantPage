/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    background-color: #f1f1f1;
}

body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    border: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}

a {
    cursor: pointer;
}

body > #content {
    grid-column: 1;
    grid-row: 1;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.50fr 5fr 0.1fr;
    
    margin: 0;
    border: 0;
    padding: 0;
}

body > #content > #navContainer {
    display: flex;
    align-items: start;
    grid-row: 1;
    grid-column: 1 / span 3;
    padding: 4px 4px 0 4px;
}

body > #content > #navContainer > #nav {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
    padding-right: 4px;

    -webkit-box-shadow: 0 2px 2px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0 2px 2px 1px rgba(0,0,0,0.75);
    box-shadow: 0 2px 2px 1px rgba(0,0,0,0.75);
}

body > #content > #navContainer > #nav > #navLinksDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
}

body > #content > #navContainer > #nav > #navLinksDiv > #navLinksLeft {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
}

body > #content > #navContainer > #nav > #navLinksDiv > #navLinksRight {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
}

body > #content > #footerContainer {
    grid-row: 3;
    grid-column: 1 / span 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.75rem;

    -webkit-box-shadow: 0 -1px 1px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0 -1px 1px -1px rgba(0,0,0,0.75);
    box-shadow: 0 -1px 1px -1px rgba(0,0,0,0.75);
}

body > #content > #locationsContainer {
    grid-row: 2;
    grid-column: 1 / span 3;
    margin-top: 12px;
    padding: 12px 12px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 12px;
}

#logoImg {
    width: 150px;
    height: 75px;
    cursor: pointer;
}

body > #content > #menuContainer {
    grid-row: 2;
    grid-column: 1 / span 3;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: start;
    align-items: center;
}

body > #content > #aboutContainer {
    grid-row: 2;
    grid-column: 1 / span 3;
    margin-top: 1rem;
    margin-bottom: auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
}

body > #content > #aboutContainer > div {
    display: flex;
    flex-direction: column;
}

#footerLink {
    color: rgba(0, 0, 0, 0.75);
}

.textLink {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.socialIcons {
    width: 25px;
    height: 25px;
}

.locationBox {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    border: 1px solid rgb(0, 0, 0, 0.5);
    background-color: white;
    justify-items: center;
}

.locationImg {
    margin-top: 6px;
    grid-row: 1;
    grid-column: 1;
    background-color: white;
    width: 225px;
    height: 113px;
}

.locationNameContainer {
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.locationName {
    grid-row: 2;
    grid-column: 1;
    font-size: 2rem;
    color: black;
    background-color: white;
}

.menuHeader, .menuItem {
    color: rgba(0, 0, 0, 0.75);
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;IACT,UAAU;IACV,SAAS;IACT,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,WAAW;;IAEX,aAAa;IACb,kCAAkC;IAClC,oCAAoC;;IAEpC,SAAS;IACT,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,QAAQ;IACR,kBAAkB;;IAElB,kDAAkD;IAClD,+CAA+C;IAC/C,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;;IAEpB,oDAAoD;IACpD,iDAAiD;IACjD,4CAA4C;AAChD;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,gBAAgB;IAChB,oBAAoB;IACpB,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,mCAAmC;IACnC,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,cAAc;IACd,uBAAuB;IACvB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,eAAe;IACf,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,0BAA0B;AAC9B","sourcesContent":["* {\n    background-color: #f1f1f1;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n}\n\na {\n    cursor: pointer;\n}\n\nbody > #content {\n    grid-column: 1;\n    grid-row: 1;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 0.50fr 5fr 0.1fr;\n    \n    margin: 0;\n    border: 0;\n    padding: 0;\n}\n\nbody > #content > #navContainer {\n    display: flex;\n    align-items: start;\n    grid-row: 1;\n    grid-column: 1 / span 3;\n    padding: 4px 4px 0 4px;\n}\n\nbody > #content > #navContainer > #nav {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    gap: 8px;\n    padding-right: 4px;\n\n    -webkit-box-shadow: 0 2px 2px 1px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0 2px 2px 1px rgba(0,0,0,0.75);\n    box-shadow: 0 2px 2px 1px rgba(0,0,0,0.75);\n}\n\nbody > #content > #navContainer > #nav > #navLinksDiv {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 90%;\n}\n\nbody > #content > #navContainer > #nav > #navLinksDiv > #navLinksLeft {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n}\n\nbody > #content > #navContainer > #nav > #navLinksDiv > #navLinksRight {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n}\n\nbody > #content > #footerContainer {\n    grid-row: 3;\n    grid-column: 1 / span 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 0.75rem;\n\n    -webkit-box-shadow: 0 -1px 1px -1px rgba(0,0,0,0.75);\n    -moz-box-shadow: 0 -1px 1px -1px rgba(0,0,0,0.75);\n    box-shadow: 0 -1px 1px -1px rgba(0,0,0,0.75);\n}\n\nbody > #content > #locationsContainer {\n    grid-row: 2;\n    grid-column: 1 / span 3;\n    margin-top: 12px;\n    padding: 12px 12px 0;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 12px;\n}\n\n#logoImg {\n    width: 150px;\n    height: 75px;\n    cursor: pointer;\n}\n\nbody > #content > #menuContainer {\n    grid-row: 2;\n    grid-column: 1 / span 3;\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    justify-content: start;\n    align-items: center;\n}\n\nbody > #content > #aboutContainer {\n    grid-row: 2;\n    grid-column: 1 / span 3;\n    margin-top: 1rem;\n    margin-bottom: auto;\n    padding: 0 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\nbody > #content > #aboutContainer > div {\n    display: flex;\n    flex-direction: column;\n}\n\n#footerLink {\n    color: rgba(0, 0, 0, 0.75);\n}\n\n.textLink {\n    text-decoration: underline;\n    text-underline-offset: 0.15rem;\n}\n\n.socialIcons {\n    width: 25px;\n    height: 25px;\n}\n\n.locationBox {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    border: 1px solid rgb(0, 0, 0, 0.5);\n    background-color: white;\n    justify-items: center;\n}\n\n.locationImg {\n    margin-top: 6px;\n    grid-row: 1;\n    grid-column: 1;\n    background-color: white;\n    width: 225px;\n    height: 113px;\n}\n\n.locationNameContainer {\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.locationName {\n    grid-row: 2;\n    grid-column: 1;\n    font-size: 2rem;\n    color: black;\n    background-color: white;\n}\n\n.menuHeader, .menuItem {\n    color: rgba(0, 0, 0, 0.75);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SampleLogo: () => (/* reexport default export from named module */ _images_Restaurant_Sample_Logo_jpg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _images_Restaurant_Sample_Logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Restaurant_Sample_Logo.jpg */ "./src/images/Restaurant_Sample_Logo.jpg");
/* harmony import */ var _images_Instagram_Icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Instagram_Icon.png */ "./src/images/Instagram_Icon.png");
/* harmony import */ var _images_Facebook_Icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Facebook_Icon.png */ "./src/images/Facebook_Icon.png");
/* harmony import */ var _images_McDonald_s_Logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/McDonald's_Logo.svg */ "./src/images/McDonald's_Logo.svg");
/* harmony import */ var _images_Chick_fil_A_Logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Chick-fil-A_Logo.svg */ "./src/images/Chick-fil-A_Logo.svg");
/* harmony import */ var _images_Wendy_s_Logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/Wendy's_Logo.svg */ "./src/images/Wendy's_Logo.svg");
/* harmony import */ var _images_KFC_Logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/KFC_Logo.svg */ "./src/images/KFC_Logo.svg");
// Imports








function initialize(content) {
    // Create the main containers
    const navContainer = document.createElement('div');
    navContainer.id = 'navContainer';
    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footerContainer';

    // Begin Create nav bar
    const nav = document.createElement('nav');
    nav.id = 'nav';

    // Create and Add logo
    const logoImg = new Image();
    logoImg.src = _images_Restaurant_Sample_Logo_jpg__WEBPACK_IMPORTED_MODULE_0__;
    logoImg.id = 'logoImg';
    logoImg.addEventListener('click', (event) => {
       makeLocationsContainer(mainContainer);

       event.stopPropagation();
    });
    nav.appendChild(logoImg);

    // Create and Add Links
    const linksDiv = document.createElement('div');
    linksDiv.id = 'navLinksDiv';

    const leftLinksDiv = document.createElement('div');
    leftLinksDiv.id = 'navLinksLeft';

    const linkOne = document.createElement('a'); // Locations
    linkOne.id = 'locationsLink';
    linkOne.classList.add('textLink');
    linkOne.textContent = 'Locations';
    const linkTwo = document.createElement('a'); // Menu
    linkTwo.id = 'menuLink';
    linkTwo.classList.add('textLink');
    linkTwo.textContent = 'Menu';
    const linkThree = document.createElement('a'); // About
    linkThree.id = 'aboutLink';
    linkThree.classList.add('textLink');
    linkThree.textContent = 'About';
    leftLinksDiv.append(linkOne, linkTwo, linkThree);

    const rightLinksDiv = document.createElement('div');
    rightLinksDiv.id = 'navLinksRight';

    const socialOne = document.createElement('a');
    socialOne.id = 'igLink';
    const igIcon = new Image();
    igIcon.src = _images_Instagram_Icon_png__WEBPACK_IMPORTED_MODULE_1__;
    igIcon.classList.add('socialIcons');
    socialOne.appendChild(igIcon);
    const socialTwo = document.createElement('a');
    socialTwo.id = 'fbLink';
    const fbIcon = new Image();
    fbIcon.src = _images_Facebook_Icon_png__WEBPACK_IMPORTED_MODULE_2__;
    fbIcon.classList.add('socialIcons');
    socialTwo.appendChild(fbIcon);
    rightLinksDiv.append(socialOne, socialTwo);
    linksDiv.append(leftLinksDiv, rightLinksDiv);
    nav.appendChild(linksDiv);

    navContainer.appendChild(nav);
    // Finish Create nav bar

    // Begin Create content section
    makeLocationsContainer(mainContainer);
    // Finish Create content section

    // Begin Create footer
    const footerLink = document.createElement('a');
    footerLink.id = 'footerLink';
    footerLink.setAttribute('href', 'https://github.com/Dylan-Gresham/TOP-RestaurantPage');
    footerLink.setAttribute('target', '_blank');
    footerLink.textContent = 'GitHub';

    footerContainer.appendChild(footerLink);
    // Finish Create footer

    // Add button listeners
    linkOne.addEventListener('click', (event) => {
        makeLocationsContainer(mainContainer);

        event.stopPropagation();
    });

    linkTwo.addEventListener('click', (event) => {
       makeMenuContainer(mainContainer);

       event.stopPropagation();
    });

    linkThree.addEventListener('click', (event) => {
       makeAboutContainer(mainContainer);

       event.stopPropagation();
    });

    // Append containers to content div
    content.append(navContainer, mainContainer, footerContainer);
}

function emptyElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function makeLocationsContainer(container) {
    container.id = 'locationsContainer';
    // Empty the container
    emptyElement(container);

    // Create the contents
    const locationOne = document.createElement('div');
    locationOne.classList.add('locationBox');
    locationOne.id = 'locationBoxOne';
    const locationTwo = document.createElement('div');
    locationTwo.classList.add('locationBox');
    locationTwo.id = 'locationBoxTwo';
    const locationThree = document.createElement('div');
    locationThree.classList.add('locationBox');
    locationThree.id = 'locationBoxThree';
    const locationFour = document.createElement('div');
    locationFour.classList.add('locationBox');
    locationFour.id = 'locationBoxFour';

    const locationBoxes = [locationOne, locationTwo, locationThree, locationFour];
    const locationImgs = [_images_McDonald_s_Logo_svg__WEBPACK_IMPORTED_MODULE_3__, _images_Chick_fil_A_Logo_svg__WEBPACK_IMPORTED_MODULE_4__, _images_Wendy_s_Logo_svg__WEBPACK_IMPORTED_MODULE_5__, _images_KFC_Logo_svg__WEBPACK_IMPORTED_MODULE_6__];
    let i = 1;
    locationBoxes.forEach( (location) => {
        let idIndex;
        if(i === 1) {
            idIndex = 'One';
        } else if(i === 2) {
            idIndex = 'Two';
        } else if(i === 3) {
            idIndex = 'Three';
        } else {
            idIndex = 'Four';
        }

        const locationImg = new Image();
        locationImg.src = locationImgs[i - 1];
        locationImg.id = `locationImg${idIndex}`;
        locationImg.classList.add('locationImg');

        const locationNameContainer = document.createElement('div');
        locationNameContainer.classList.add('locationNameContainer');
        locationNameContainer.id = `locationNameContainer${idIndex}`;

        const locationName = document.createElement('p');
        locationName.id = `locationName${idIndex}`;
        locationName.classList.add('locationName');
        locationName.textContent = 'City, State';
        locationNameContainer.appendChild(locationName);

        location.append(locationImg, locationNameContainer);

        i++;
    });
    container.append(locationOne, locationTwo, locationThree, locationFour);
}

function makeMenuContainer(container) {
    container.id = 'menuContainer';
    // Empty the container
    emptyElement(container);

    // Create the content containers
    const appetizers = document.createElement('div');
    const entrees = document.createElement('div');
    const desserts = document.createElement('div');
    const drinks = document.createElement('div');

    // Create the information for the different containers

    // Create info for appetizers
    const appetizersHeader = document.createElement('h2');
    appetizersHeader.textContent = 'Appetizers';
    appetizersHeader.classList.add('menuHeader');
    appetizersHeader.id = 'appetizersHeader';
    appetizers.appendChild(appetizersHeader);

    for(let i = 0; i < 5; i++) {
        const appetizer = document.createElement('p');
        appetizer.classList.add('menuItem');
        appetizer.textContent = `Insert appetizer ${i + 1} here...`;
        appetizers.appendChild(appetizer);
    }

    // Create info for entrées
    const entreesHeader = document.createElement('h2');
    entreesHeader.textContent = 'Entrees';
    entreesHeader.classList.add('menuHeader');
    entreesHeader.id = 'entreesHeader';
    entrees.appendChild(entreesHeader);

    for(let i = 0; i < 10; i++) {
        const entree = document.createElement('p');
        entree.classList.add('menuItem');
        entree.textContent = `Insert entree ${i + 1} here...`;
        entrees.appendChild(entree);
    }

    // Create info for desserts
    const dessertsHeader = document.createElement('h2');
    dessertsHeader.textContent = 'Desserts';
    dessertsHeader.classList.add('menuHeader');
    dessertsHeader.id = 'dessertsHeader';
    desserts.appendChild(dessertsHeader);

    for(let i = 0; i < 5; i++) {
        const dessert = document.createElement('p');
        dessert.classList.add('menuItem');
        dessert.textContent = `Insert dessert ${i + 1} here...`;
        desserts.appendChild(dessert);
    }

    // Create info for drinks
    const drinksHeader = document.createElement('h2');
    drinksHeader.textContent = 'Drinks';
    drinksHeader.classList.add('menuHeader');
    drinksHeader.id = 'drinksHeader';
    drinks.appendChild(drinksHeader);

    for(let i = 0; i < 10; i++) {
        const drink = document.createElement('p');
        drink.classList.add('menuItem');
        drink.textContent = `Insert dessert ${i + 1} here...`;
        drinks.appendChild(drink);
    }

    // Add elements to container
    container.append(appetizers, entrees, desserts, drinks);
}

function makeAboutContainer(container) {
    container.id = 'aboutContainer';
    // Empty the container
    emptyElement(container);

    // Create content
    const descriptionContainer = document.createElement('div');
    const descriptionHeader = document.createElement('h1');
    descriptionHeader.id = 'descriptionHeader';
    descriptionHeader.textContent = 'RESTAURANT NAME';

    const description = document.createElement('p');
    description.id = 'description';
    description.textContent = 'Insert description of restaurant here';
    descriptionContainer.append(descriptionHeader, description);

    const historyContainer = document.createElement('div');
    const historyHeader = document.createElement('h2');
    historyHeader.id = 'historyHeader';
    historyHeader.textContent = 'HISTORY';

    const history = document.createElement('p');
    history.id = 'history';
    history.textContent = 'Insert history of restaurant here';
    historyContainer.append(historyHeader, history);

    const futureContainer = document.createElement('div');
    const futureHeader = document.createElement('h2');
    futureHeader.id = 'futureHeader';
    futureHeader.textContent = 'FUTURE PLANS';

    const future = document.createElement('p');
    future.id = 'future';
    future.textContent = 'Insert plans for the future of the restaurant here.'
    futureContainer.append(futureHeader, future);

    container.append(descriptionContainer, historyContainer, futureContainer);
}



/***/ }),

/***/ "./src/images/Chick-fil-A_Logo.svg":
/*!*****************************************!*\
  !*** ./src/images/Chick-fil-A_Logo.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4815fca215659aed033.svg";

/***/ }),

/***/ "./src/images/Facebook_Icon.png":
/*!**************************************!*\
  !*** ./src/images/Facebook_Icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52b57b179ca591ffb2a4.png";

/***/ }),

/***/ "./src/images/Instagram_Icon.png":
/*!***************************************!*\
  !*** ./src/images/Instagram_Icon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "776d16d0e9daa177afd5.png";

/***/ }),

/***/ "./src/images/KFC_Logo.svg":
/*!*********************************!*\
  !*** ./src/images/KFC_Logo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad049c66c01229426e9c.svg";

/***/ }),

/***/ "./src/images/McDonald's_Logo.svg":
/*!****************************************!*\
  !*** ./src/images/McDonald's_Logo.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3950c61979d9c5dca18.svg";

/***/ }),

/***/ "./src/images/Restaurant_Sample_Logo.jpg":
/*!***********************************************!*\
  !*** ./src/images/Restaurant_Sample_Logo.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f69e4f79c4a96469aa87.jpg";

/***/ }),

/***/ "./src/images/Wendy's_Logo.svg":
/*!*************************************!*\
  !*** ./src/images/Wendy's_Logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3026c0c13b8446f219e1.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _initialize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialize.js */ "./src/initialize.js");
// Imports



// Code
const contentDiv = document.createElement('div');
contentDiv.id = 'content';

// Initialize page
(0,_initialize_js__WEBPACK_IMPORTED_MODULE_1__.initialize)(contentDiv);

document.body.appendChild(contentDiv);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMUI7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzZCO0FBQ2M7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUFVOztBQUVWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS8uL3NyYy9pbml0aWFsaXplLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuXG5hIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHkgPiAjY29udGVudCB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDE7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjUwZnIgNWZyIDAuMWZyO1xuICAgIFxuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSA+ICNjb250ZW50ID4gI25hdkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XG4gICAgcGFkZGluZzogNHB4IDRweCAwIDRweDtcbn1cblxuYm9keSA+ICNjb250ZW50ID4gI25hdkNvbnRhaW5lciA+ICNuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG5cbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XG59XG5cbmJvZHkgPiAjY29udGVudCA+ICNuYXZDb250YWluZXIgPiAjbmF2ID4gI25hdkxpbmtzRGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuYm9keSA+ICNjb250ZW50ID4gI25hdkNvbnRhaW5lciA+ICNuYXYgPiAjbmF2TGlua3NEaXYgPiAjbmF2TGlua3NMZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbn1cblxuYm9keSA+ICNjb250ZW50ID4gI25hdkNvbnRhaW5lciA+ICNuYXYgPiAjbmF2TGlua3NEaXYgPiAjbmF2TGlua3NSaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cHg7XG59XG5cbmJvZHkgPiAjY29udGVudCA+ICNmb290ZXJDb250YWluZXIge1xuICAgIGdyaWQtcm93OiAzO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcblxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAtMXB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIC0xcHggMXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICBib3gtc2hhZG93OiAwIC0xcHggMXB4IC0xcHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cblxuYm9keSA+ICNjb250ZW50ID4gI2xvY2F0aW9uc0NvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBwYWRkaW5nOiAxMnB4IDEycHggMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgZ2FwOiAxMnB4O1xufVxuXG4jbG9nb0ltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHkgPiAjY29udGVudCA+ICNtZW51Q29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYm9keSA+ICNjb250ZW50ID4gI2Fib3V0Q29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYm9keSA+ICNjb250ZW50ID4gI2Fib3V0Q29udGFpbmVyID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNmb290ZXJMaW5rIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLnRleHRMaW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuMTVyZW07XG59XG5cbi5zb2NpYWxJY29ucyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubG9jYXRpb25Cb3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvY2F0aW9uSW1nIHtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGhlaWdodDogMTEzcHg7XG59XG5cbi5sb2NhdGlvbk5hbWVDb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2NhdGlvbk5hbWUge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tZW51SGVhZGVyLCAubWVudUl0ZW0ge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVzs7SUFFWCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG9DQUFvQzs7SUFFcEMsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGtCQUFrQjs7SUFFbEIsa0RBQWtEO0lBQ2xELCtDQUErQztJQUMvQywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjs7SUFFcEIsb0RBQW9EO0lBQ3BELGlEQUFpRDtJQUNqRCw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG5hIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5ID4gI2NvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41MGZyIDVmciAwLjFmcjtcXG4gICAgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5ID4gI2NvbnRlbnQgPiAjbmF2Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxuICAgIHBhZGRpbmc6IDRweCA0cHggMCA0cHg7XFxufVxcblxcbmJvZHkgPiAjY29udGVudCA+ICNuYXZDb250YWluZXIgPiAjbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogOHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxuXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xcbn1cXG5cXG5ib2R5ID4gI2NvbnRlbnQgPiAjbmF2Q29udGFpbmVyID4gI25hdiA+ICNuYXZMaW5rc0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuYm9keSA+ICNjb250ZW50ID4gI25hdkNvbnRhaW5lciA+ICNuYXYgPiAjbmF2TGlua3NEaXYgPiAjbmF2TGlua3NMZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG5ib2R5ID4gI2NvbnRlbnQgPiAjbmF2Q29udGFpbmVyID4gI25hdiA+ICNuYXZMaW5rc0RpdiA+ICNuYXZMaW5rc1JpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG5ib2R5ID4gI2NvbnRlbnQgPiAjZm9vdGVyQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XFxuXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAtMXB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMCAtMXB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC43NSk7XFxuICAgIGJveC1zaGFkb3c6IDAgLTFweCAxcHggLTFweCByZ2JhKDAsMCwwLDAuNzUpO1xcbn1cXG5cXG5ib2R5ID4gI2NvbnRlbnQgPiAjbG9jYXRpb25zQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDEycHggMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuI2xvZ29JbWcge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5ID4gI2NvbnRlbnQgPiAjbWVudUNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ib2R5ID4gI2NvbnRlbnQgPiAjYWJvdXRDb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYm9keSA+ICNjb250ZW50ID4gI2Fib3V0Q29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2Zvb3Rlckxpbmsge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuLnRleHRMaW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4xNXJlbTtcXG59XFxuXFxuLnNvY2lhbEljb25zIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmxvY2F0aW9uQm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbkltZyB7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDIyNXB4O1xcbiAgICBoZWlnaHQ6IDExM3B4O1xcbn1cXG5cXG4ubG9jYXRpb25OYW1lQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9jYXRpb25OYW1lIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51SGVhZGVyLCAubWVudUl0ZW0ge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBTYW1wbGVMb2dvIGZyb20gJy4vaW1hZ2VzL1Jlc3RhdXJhbnRfU2FtcGxlX0xvZ28uanBnJ1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnLi9pbWFnZXMvSW5zdGFncmFtX0ljb24ucG5nJ1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICcuL2ltYWdlcy9GYWNlYm9va19JY29uLnBuZydcbmltcG9ydCBMb2NhdGlvbkltZ09uZSBmcm9tICcuL2ltYWdlcy9NY0RvbmFsZFxcJ3NfTG9nby5zdmcnXG5pbXBvcnQgTG9jYXRpb25JbWdUd28gZnJvbSAnLi9pbWFnZXMvQ2hpY2stZmlsLUFfTG9nby5zdmcnXG5pbXBvcnQgTG9jYXRpb25JbWdUaHJlZSBmcm9tICcuL2ltYWdlcy9XZW5keVxcJ3NfTG9nby5zdmcnXG5pbXBvcnQgTG9jYXRpb25JbWdGb3VyIGZyb20gJy4vaW1hZ2VzL0tGQ19Mb2dvLnN2ZydcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZShjb250ZW50KSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBtYWluIGNvbnRhaW5lcnNcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZDb250YWluZXIuaWQgPSAnbmF2Q29udGFpbmVyJztcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5pZCA9ICdtYWluQ29udGFpbmVyJztcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJDb250YWluZXIuaWQgPSAnZm9vdGVyQ29udGFpbmVyJztcblxuICAgIC8vIEJlZ2luIENyZWF0ZSBuYXYgYmFyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbmF2LmlkID0gJ25hdic7XG5cbiAgICAvLyBDcmVhdGUgYW5kIEFkZCBsb2dvXG4gICAgY29uc3QgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ29JbWcuc3JjID0gU2FtcGxlTG9nbztcbiAgICBsb2dvSW1nLmlkID0gJ2xvZ29JbWcnO1xuICAgIGxvZ29JbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICBtYWtlTG9jYXRpb25zQ29udGFpbmVyKG1haW5Db250YWluZXIpO1xuXG4gICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuXG4gICAgLy8gQ3JlYXRlIGFuZCBBZGQgTGlua3NcbiAgICBjb25zdCBsaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpbmtzRGl2LmlkID0gJ25hdkxpbmtzRGl2JztcblxuICAgIGNvbnN0IGxlZnRMaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRMaW5rc0Rpdi5pZCA9ICduYXZMaW5rc0xlZnQnO1xuXG4gICAgY29uc3QgbGlua09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTsgLy8gTG9jYXRpb25zXG4gICAgbGlua09uZS5pZCA9ICdsb2NhdGlvbnNMaW5rJztcbiAgICBsaW5rT25lLmNsYXNzTGlzdC5hZGQoJ3RleHRMaW5rJyk7XG4gICAgbGlua09uZS50ZXh0Q29udGVudCA9ICdMb2NhdGlvbnMnO1xuICAgIGNvbnN0IGxpbmtUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7IC8vIE1lbnVcbiAgICBsaW5rVHdvLmlkID0gJ21lbnVMaW5rJztcbiAgICBsaW5rVHdvLmNsYXNzTGlzdC5hZGQoJ3RleHRMaW5rJyk7XG4gICAgbGlua1R3by50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjb25zdCBsaW5rVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7IC8vIEFib3V0XG4gICAgbGlua1RocmVlLmlkID0gJ2Fib3V0TGluayc7XG4gICAgbGlua1RocmVlLmNsYXNzTGlzdC5hZGQoJ3RleHRMaW5rJyk7XG4gICAgbGlua1RocmVlLnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgICBsZWZ0TGlua3NEaXYuYXBwZW5kKGxpbmtPbmUsIGxpbmtUd28sIGxpbmtUaHJlZSk7XG5cbiAgICBjb25zdCByaWdodExpbmtzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRMaW5rc0Rpdi5pZCA9ICduYXZMaW5rc1JpZ2h0JztcblxuICAgIGNvbnN0IHNvY2lhbE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBzb2NpYWxPbmUuaWQgPSAnaWdMaW5rJztcbiAgICBjb25zdCBpZ0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBpZ0ljb24uc3JjID0gSW5zdGFncmFtSWNvbjtcbiAgICBpZ0ljb24uY2xhc3NMaXN0LmFkZCgnc29jaWFsSWNvbnMnKTtcbiAgICBzb2NpYWxPbmUuYXBwZW5kQ2hpbGQoaWdJY29uKTtcbiAgICBjb25zdCBzb2NpYWxUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgc29jaWFsVHdvLmlkID0gJ2ZiTGluayc7XG4gICAgY29uc3QgZmJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZmJJY29uLnNyYyA9IEZhY2Vib29rSWNvbjtcbiAgICBmYkljb24uY2xhc3NMaXN0LmFkZCgnc29jaWFsSWNvbnMnKTtcbiAgICBzb2NpYWxUd28uYXBwZW5kQ2hpbGQoZmJJY29uKTtcbiAgICByaWdodExpbmtzRGl2LmFwcGVuZChzb2NpYWxPbmUsIHNvY2lhbFR3byk7XG4gICAgbGlua3NEaXYuYXBwZW5kKGxlZnRMaW5rc0RpdiwgcmlnaHRMaW5rc0Rpdik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGxpbmtzRGl2KTtcblxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIC8vIEZpbmlzaCBDcmVhdGUgbmF2IGJhclxuXG4gICAgLy8gQmVnaW4gQ3JlYXRlIGNvbnRlbnQgc2VjdGlvblxuICAgIG1ha2VMb2NhdGlvbnNDb250YWluZXIobWFpbkNvbnRhaW5lcik7XG4gICAgLy8gRmluaXNoIENyZWF0ZSBjb250ZW50IHNlY3Rpb25cblxuICAgIC8vIEJlZ2luIENyZWF0ZSBmb290ZXJcbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZvb3RlckxpbmsuaWQgPSAnZm9vdGVyTGluayc7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL0R5bGFuLUdyZXNoYW0vVE9QLVJlc3RhdXJhbnRQYWdlJyk7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICBmb290ZXJMaW5rLnRleHRDb250ZW50ID0gJ0dpdEh1Yic7XG5cbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gICAgLy8gRmluaXNoIENyZWF0ZSBmb290ZXJcblxuICAgIC8vIEFkZCBidXR0b24gbGlzdGVuZXJzXG4gICAgbGlua09uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBtYWtlTG9jYXRpb25zQ29udGFpbmVyKG1haW5Db250YWluZXIpO1xuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgbGlua1R3by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgIG1ha2VNZW51Q29udGFpbmVyKG1haW5Db250YWluZXIpO1xuXG4gICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICBsaW5rVGhyZWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICBtYWtlQWJvdXRDb250YWluZXIobWFpbkNvbnRhaW5lcik7XG5cbiAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIC8vIEFwcGVuZCBjb250YWluZXJzIHRvIGNvbnRlbnQgZGl2XG4gICAgY29udGVudC5hcHBlbmQobmF2Q29udGFpbmVyLCBtYWluQ29udGFpbmVyLCBmb290ZXJDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBlbXB0eUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHdoaWxlKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlTG9jYXRpb25zQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5pZCA9ICdsb2NhdGlvbnNDb250YWluZXInO1xuICAgIC8vIEVtcHR5IHRoZSBjb250YWluZXJcbiAgICBlbXB0eUVsZW1lbnQoY29udGFpbmVyKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgY29udGVudHNcbiAgICBjb25zdCBsb2NhdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uT25lLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uQm94Jyk7XG4gICAgbG9jYXRpb25PbmUuaWQgPSAnbG9jYXRpb25Cb3hPbmUnO1xuICAgIGNvbnN0IGxvY2F0aW9uVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb25Ud28uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb25Cb3gnKTtcbiAgICBsb2NhdGlvblR3by5pZCA9ICdsb2NhdGlvbkJveFR3byc7XG4gICAgY29uc3QgbG9jYXRpb25UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uVGhyZWUuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb25Cb3gnKTtcbiAgICBsb2NhdGlvblRocmVlLmlkID0gJ2xvY2F0aW9uQm94VGhyZWUnO1xuICAgIGNvbnN0IGxvY2F0aW9uRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uRm91ci5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbkJveCcpO1xuICAgIGxvY2F0aW9uRm91ci5pZCA9ICdsb2NhdGlvbkJveEZvdXInO1xuXG4gICAgY29uc3QgbG9jYXRpb25Cb3hlcyA9IFtsb2NhdGlvbk9uZSwgbG9jYXRpb25Ud28sIGxvY2F0aW9uVGhyZWUsIGxvY2F0aW9uRm91cl07XG4gICAgY29uc3QgbG9jYXRpb25JbWdzID0gW0xvY2F0aW9uSW1nT25lLCBMb2NhdGlvbkltZ1R3bywgTG9jYXRpb25JbWdUaHJlZSwgTG9jYXRpb25JbWdGb3VyXTtcbiAgICBsZXQgaSA9IDE7XG4gICAgbG9jYXRpb25Cb3hlcy5mb3JFYWNoKCAobG9jYXRpb24pID0+IHtcbiAgICAgICAgbGV0IGlkSW5kZXg7XG4gICAgICAgIGlmKGkgPT09IDEpIHtcbiAgICAgICAgICAgIGlkSW5kZXggPSAnT25lJztcbiAgICAgICAgfSBlbHNlIGlmKGkgPT09IDIpIHtcbiAgICAgICAgICAgIGlkSW5kZXggPSAnVHdvJztcbiAgICAgICAgfSBlbHNlIGlmKGkgPT09IDMpIHtcbiAgICAgICAgICAgIGlkSW5kZXggPSAnVGhyZWUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWRJbmRleCA9ICdGb3VyJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxvY2F0aW9uSW1nLnNyYyA9IGxvY2F0aW9uSW1nc1tpIC0gMV07XG4gICAgICAgIGxvY2F0aW9uSW1nLmlkID0gYGxvY2F0aW9uSW1nJHtpZEluZGV4fWA7XG4gICAgICAgIGxvY2F0aW9uSW1nLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uSW1nJyk7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25OYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxvY2F0aW9uTmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbk5hbWVDb250YWluZXInKTtcbiAgICAgICAgbG9jYXRpb25OYW1lQ29udGFpbmVyLmlkID0gYGxvY2F0aW9uTmFtZUNvbnRhaW5lciR7aWRJbmRleH1gO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbG9jYXRpb25OYW1lLmlkID0gYGxvY2F0aW9uTmFtZSR7aWRJbmRleH1gO1xuICAgICAgICBsb2NhdGlvbk5hbWUuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb25OYW1lJyk7XG4gICAgICAgIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9ICdDaXR5LCBTdGF0ZSc7XG4gICAgICAgIGxvY2F0aW9uTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbk5hbWUpO1xuXG4gICAgICAgIGxvY2F0aW9uLmFwcGVuZChsb2NhdGlvbkltZywgbG9jYXRpb25OYW1lQ29udGFpbmVyKTtcblxuICAgICAgICBpKys7XG4gICAgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChsb2NhdGlvbk9uZSwgbG9jYXRpb25Ud28sIGxvY2F0aW9uVGhyZWUsIGxvY2F0aW9uRm91cik7XG59XG5cbmZ1bmN0aW9uIG1ha2VNZW51Q29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5pZCA9ICdtZW51Q29udGFpbmVyJztcbiAgICAvLyBFbXB0eSB0aGUgY29udGFpbmVyXG4gICAgZW1wdHlFbGVtZW50KGNvbnRhaW5lcik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQgY29udGFpbmVyc1xuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbnRyZWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgaW5mb3JtYXRpb24gZm9yIHRoZSBkaWZmZXJlbnQgY29udGFpbmVyc1xuXG4gICAgLy8gQ3JlYXRlIGluZm8gZm9yIGFwcGV0aXplcnNcbiAgICBjb25zdCBhcHBldGl6ZXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhcHBldGl6ZXJzSGVhZGVyLnRleHRDb250ZW50ID0gJ0FwcGV0aXplcnMnO1xuICAgIGFwcGV0aXplcnNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudUhlYWRlcicpO1xuICAgIGFwcGV0aXplcnNIZWFkZXIuaWQgPSAnYXBwZXRpemVyc0hlYWRlcic7XG4gICAgYXBwZXRpemVycy5hcHBlbmRDaGlsZChhcHBldGl6ZXJzSGVhZGVyKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgY29uc3QgYXBwZXRpemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhcHBldGl6ZXIuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcbiAgICAgICAgYXBwZXRpemVyLnRleHRDb250ZW50ID0gYEluc2VydCBhcHBldGl6ZXIgJHtpICsgMX0gaGVyZS4uLmA7XG4gICAgICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYXBwZXRpemVyKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5mbyBmb3IgZW50csOpZXNcbiAgICBjb25zdCBlbnRyZWVzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBlbnRyZWVzSGVhZGVyLnRleHRDb250ZW50ID0gJ0VudHJlZXMnO1xuICAgIGVudHJlZXNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudUhlYWRlcicpO1xuICAgIGVudHJlZXNIZWFkZXIuaWQgPSAnZW50cmVlc0hlYWRlcic7XG4gICAgZW50cmVlcy5hcHBlbmRDaGlsZChlbnRyZWVzSGVhZGVyKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVudHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cmVlLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XG4gICAgICAgIGVudHJlZS50ZXh0Q29udGVudCA9IGBJbnNlcnQgZW50cmVlICR7aSArIDF9IGhlcmUuLi5gO1xuICAgICAgICBlbnRyZWVzLmFwcGVuZENoaWxkKGVudHJlZSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGluZm8gZm9yIGRlc3NlcnRzXG4gICAgY29uc3QgZGVzc2VydHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGRlc3NlcnRzSGVhZGVyLnRleHRDb250ZW50ID0gJ0Rlc3NlcnRzJztcbiAgICBkZXNzZXJ0c0hlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51SGVhZGVyJyk7XG4gICAgZGVzc2VydHNIZWFkZXIuaWQgPSAnZGVzc2VydHNIZWFkZXInO1xuICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKGRlc3NlcnRzSGVhZGVyKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzc2VydC5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuICAgICAgICBkZXNzZXJ0LnRleHRDb250ZW50ID0gYEluc2VydCBkZXNzZXJ0ICR7aSArIDF9IGhlcmUuLi5gO1xuICAgICAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChkZXNzZXJ0KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgaW5mbyBmb3IgZHJpbmtzXG4gICAgY29uc3QgZHJpbmtzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBkcmlua3NIZWFkZXIudGV4dENvbnRlbnQgPSAnRHJpbmtzJztcbiAgICBkcmlua3NIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudUhlYWRlcicpO1xuICAgIGRyaW5rc0hlYWRlci5pZCA9ICdkcmlua3NIZWFkZXInO1xuICAgIGRyaW5rcy5hcHBlbmRDaGlsZChkcmlua3NIZWFkZXIpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgY29uc3QgZHJpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRyaW5rLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XG4gICAgICAgIGRyaW5rLnRleHRDb250ZW50ID0gYEluc2VydCBkZXNzZXJ0ICR7aSArIDF9IGhlcmUuLi5gO1xuICAgICAgICBkcmlua3MuYXBwZW5kQ2hpbGQoZHJpbmspO1xuICAgIH1cblxuICAgIC8vIEFkZCBlbGVtZW50cyB0byBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kKGFwcGV0aXplcnMsIGVudHJlZXMsIGRlc3NlcnRzLCBkcmlua3MpO1xufVxuXG5mdW5jdGlvbiBtYWtlQWJvdXRDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmlkID0gJ2Fib3V0Q29udGFpbmVyJztcbiAgICAvLyBFbXB0eSB0aGUgY29udGFpbmVyXG4gICAgZW1wdHlFbGVtZW50KGNvbnRhaW5lcik7XG5cbiAgICAvLyBDcmVhdGUgY29udGVudFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGRlc2NyaXB0aW9uSGVhZGVyLmlkID0gJ2Rlc2NyaXB0aW9uSGVhZGVyJztcbiAgICBkZXNjcmlwdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdSRVNUQVVSQU5UIE5BTUUnO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0luc2VydCBkZXNjcmlwdGlvbiBvZiByZXN0YXVyYW50IGhlcmUnO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvbkhlYWRlciwgZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgaGlzdG9yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhpc3RvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhpc3RvcnlIZWFkZXIuaWQgPSAnaGlzdG9yeUhlYWRlcic7XG4gICAgaGlzdG9yeUhlYWRlci50ZXh0Q29udGVudCA9ICdISVNUT1JZJztcblxuICAgIGNvbnN0IGhpc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGlzdG9yeS5pZCA9ICdoaXN0b3J5JztcbiAgICBoaXN0b3J5LnRleHRDb250ZW50ID0gJ0luc2VydCBoaXN0b3J5IG9mIHJlc3RhdXJhbnQgaGVyZSc7XG4gICAgaGlzdG9yeUNvbnRhaW5lci5hcHBlbmQoaGlzdG9yeUhlYWRlciwgaGlzdG9yeSk7XG5cbiAgICBjb25zdCBmdXR1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmdXR1cmVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGZ1dHVyZUhlYWRlci5pZCA9ICdmdXR1cmVIZWFkZXInO1xuICAgIGZ1dHVyZUhlYWRlci50ZXh0Q29udGVudCA9ICdGVVRVUkUgUExBTlMnO1xuXG4gICAgY29uc3QgZnV0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZ1dHVyZS5pZCA9ICdmdXR1cmUnO1xuICAgIGZ1dHVyZS50ZXh0Q29udGVudCA9ICdJbnNlcnQgcGxhbnMgZm9yIHRoZSBmdXR1cmUgb2YgdGhlIHJlc3RhdXJhbnQgaGVyZS4nXG4gICAgZnV0dXJlQ29udGFpbmVyLmFwcGVuZChmdXR1cmVIZWFkZXIsIGZ1dHVyZSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uQ29udGFpbmVyLCBoaXN0b3J5Q29udGFpbmVyLCBmdXR1cmVDb250YWluZXIpO1xufVxuXG5leHBvcnQge1NhbXBsZUxvZ28sIGluaXRpYWxpemV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydHNcbmltcG9ydCBjc3MgZnJvbSAnLi9pbmRleC5jc3MnXG5pbXBvcnQge2luaXRpYWxpemV9IGZyb20gJy4vaW5pdGlhbGl6ZS5qcyc7XG5cbi8vIENvZGVcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRlbnREaXYuaWQgPSAnY29udGVudCc7XG5cbi8vIEluaXRpYWxpemUgcGFnZVxuaW5pdGlhbGl6ZShjb250ZW50RGl2KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==