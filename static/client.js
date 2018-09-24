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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/nanoassert/index.js":
/*!******************************************!*\
  !*** ./node_modules/nanoassert/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

assert.notEqual = notEqual
assert.notOk = notOk
assert.equal = equal
assert.ok = assert

module.exports = assert

function equal (a, b, m) {
  assert(a == b, m) // eslint-disable-line eqeqeq
}

function notEqual (a, b, m) {
  assert(a != b, m) // eslint-disable-line eqeqeq
}

function notOk (t, m) {
  assert(!t, m)
}

function assert (t, m) {
  if (!t) throw new Error(m || 'AssertionError')
}


/***/ }),

/***/ "./node_modules/nanomorph/index.js":
/*!*****************************************!*\
  !*** ./node_modules/nanomorph/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! assert */ "./node_modules/nanoassert/index.js")
var morph = __webpack_require__(/*! ./lib/morph */ "./node_modules/nanomorph/lib/morph.js")

var TEXT_NODE = 3
// var DEBUG = false

module.exports = nanomorph

// Morph one tree into another tree
//
// no parent
//   -> same: diff and walk children
//   -> not same: replace and return
// old node doesn't exist
//   -> insert new node
// new node doesn't exist
//   -> delete old node
// nodes are not the same
//   -> diff nodes and apply patch to old node
// nodes are the same
//   -> walk all child nodes and append to old node
function nanomorph (oldTree, newTree) {
  // if (DEBUG) {
  //   console.log(
  //   'nanomorph\nold\n  %s\nnew\n  %s',
  //   oldTree && oldTree.outerHTML,
  //   newTree && newTree.outerHTML
  // )
  // }
  assert.equal(typeof oldTree, 'object', 'nanomorph: oldTree should be an object')
  assert.equal(typeof newTree, 'object', 'nanomorph: newTree should be an object')
  var tree = walk(newTree, oldTree)
  // if (DEBUG) console.log('=> morphed\n  %s', tree.outerHTML)
  return tree
}

// Walk and morph a dom tree
function walk (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'walk\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  if (!oldNode) {
    return newNode
  } else if (!newNode) {
    return null
  } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
    return oldNode
  } else if (newNode.tagName !== oldNode.tagName) {
    return newNode
  } else {
    morph(newNode, oldNode)
    updateChildren(newNode, oldNode)
    return oldNode
  }
}

// Update the children of elements
// (obj, obj) -> null
function updateChildren (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'updateChildren\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  var oldChild, newChild, morphed, oldMatch

  // The offset is only ever increased, and used for [i - offset] in the loop
  var offset = 0

  for (var i = 0; ; i++) {
    oldChild = oldNode.childNodes[i]
    newChild = newNode.childNodes[i - offset]
    // if (DEBUG) {
    //   console.log(
    //   '===\n- old\n  %s\n- new\n  %s',
    //   oldChild && oldChild.outerHTML,
    //   newChild && newChild.outerHTML
    // )
    // }
    // Both nodes are empty, do nothing
    if (!oldChild && !newChild) {
      break

    // There is no new child, remove old
    } else if (!newChild) {
      oldNode.removeChild(oldChild)
      i--

    // There is no old child, add new
    } else if (!oldChild) {
      oldNode.appendChild(newChild)
      offset++

    // Both nodes are the same, morph
    } else if (same(newChild, oldChild)) {
      morphed = walk(newChild, oldChild)
      if (morphed !== oldChild) {
        oldNode.replaceChild(morphed, oldChild)
        offset++
      }

    // Both nodes do not share an ID or a placeholder, try reorder
    } else {
      oldMatch = null

      // Try and find a similar node somewhere in the tree
      for (var j = i; j < oldNode.childNodes.length; j++) {
        if (same(oldNode.childNodes[j], newChild)) {
          oldMatch = oldNode.childNodes[j]
          break
        }
      }

      // If there was a node with the same ID or placeholder in the old list
      if (oldMatch) {
        morphed = walk(newChild, oldMatch)
        if (morphed !== oldMatch) offset++
        oldNode.insertBefore(morphed, oldChild)

      // It's safe to morph two nodes in-place if neither has an ID
      } else if (!newChild.id && !oldChild.id) {
        morphed = walk(newChild, oldChild)
        if (morphed !== oldChild) {
          oldNode.replaceChild(morphed, oldChild)
          offset++
        }

      // Insert the node at the index if we couldn't morph or find a matching node
      } else {
        oldNode.insertBefore(newChild, oldChild)
        offset++
      }
    }
  }
}

function same (a, b) {
  if (a.id) return a.id === b.id
  if (a.isSameNode) return a.isSameNode(b)
  if (a.tagName !== b.tagName) return false
  if (a.type === TEXT_NODE) return a.nodeValue === b.nodeValue
  return false
}


/***/ }),

/***/ "./node_modules/nanomorph/lib/events.js":
/*!**********************************************!*\
  !*** ./node_modules/nanomorph/lib/events.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'onmouseenter',
  'onmouseleave',
  'ontouchcancel',
  'ontouchend',
  'ontouchmove',
  'ontouchstart',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]


/***/ }),

/***/ "./node_modules/nanomorph/lib/morph.js":
/*!*********************************************!*\
  !*** ./node_modules/nanomorph/lib/morph.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var events = __webpack_require__(/*! ./events */ "./node_modules/nanomorph/lib/events.js")
var eventsLength = events.length

var ELEMENT_NODE = 1
var TEXT_NODE = 3
var COMMENT_NODE = 8

module.exports = morph

// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph (newNode, oldNode) {
  var nodeType = newNode.nodeType
  var nodeName = newNode.nodeName

  if (nodeType === ELEMENT_NODE) {
    copyAttrs(newNode, oldNode)
  }

  if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
    if (oldNode.nodeValue !== newNode.nodeValue) {
      oldNode.nodeValue = newNode.nodeValue
    }
  }

  // Some DOM nodes are weird
  // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
  if (nodeName === 'INPUT') updateInput(newNode, oldNode)
  else if (nodeName === 'OPTION') updateOption(newNode, oldNode)
  else if (nodeName === 'TEXTAREA') updateTextarea(newNode, oldNode)

  copyEvents(newNode, oldNode)
}

function copyAttrs (newNode, oldNode) {
  var oldAttrs = oldNode.attributes
  var newAttrs = newNode.attributes
  var attrNamespaceURI = null
  var attrValue = null
  var fromValue = null
  var attrName = null
  var attr = null

  for (var i = newAttrs.length - 1; i >= 0; --i) {
    attr = newAttrs[i]
    attrName = attr.name
    attrNamespaceURI = attr.namespaceURI
    attrValue = attr.value
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName
      fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName)
      if (fromValue !== attrValue) {
        oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue)
      }
    } else {
      if (!oldNode.hasAttribute(attrName)) {
        oldNode.setAttribute(attrName, attrValue)
      } else {
        fromValue = oldNode.getAttribute(attrName)
        if (fromValue !== attrValue) {
          // apparently values are always cast to strings, ah well
          if (attrValue === 'null' || attrValue === 'undefined') {
            oldNode.removeAttribute(attrName)
          } else {
            oldNode.setAttribute(attrName, attrValue)
          }
        }
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  for (var j = oldAttrs.length - 1; j >= 0; --j) {
    attr = oldAttrs[j]
    if (attr.specified !== false) {
      attrName = attr.name
      attrNamespaceURI = attr.namespaceURI

      if (attrNamespaceURI) {
        attrName = attr.localName || attrName
        if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          oldNode.removeAttributeNS(attrNamespaceURI, attrName)
        }
      } else {
        if (!newNode.hasAttributeNS(null, attrName)) {
          oldNode.removeAttribute(attrName)
        }
      }
    }
  }
}

function copyEvents (newNode, oldNode) {
  for (var i = 0; i < eventsLength; i++) {
    var ev = events[i]
    if (newNode[ev]) {           // if new element has a whitelisted attribute
      oldNode[ev] = newNode[ev]  // update existing element
    } else if (oldNode[ev]) {    // if existing element has it and new one doesnt
      oldNode[ev] = undefined    // remove it from existing element
    }
  }
}

function updateOption (newNode, oldNode) {
  updateAttribute(newNode, oldNode, 'selected')
}

// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput (newNode, oldNode) {
  var newValue = newNode.value
  var oldValue = oldNode.value

  updateAttribute(newNode, oldNode, 'checked')
  updateAttribute(newNode, oldNode, 'disabled')

  if (newValue !== oldValue) {
    oldNode.setAttribute('value', newValue)
    oldNode.value = newValue
  }

  if (newValue === 'null') {
    oldNode.value = ''
    oldNode.removeAttribute('value')
  }

  if (!newNode.hasAttributeNS(null, 'value')) {
    oldNode.removeAttribute('value')
  } else if (oldNode.type === 'range') {
    // this is so elements like slider move their UI thingy
    oldNode.value = newValue
  }
}

function updateTextarea (newNode, oldNode) {
  var newValue = newNode.value
  if (newValue !== oldNode.value) {
    oldNode.value = newValue
  }

  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
    // Needed for IE. Apparently IE sets the placeholder as the
    // node value and vise versa. This ignores an empty update.
    if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
      return
    }

    oldNode.firstChild.nodeValue = newValue
  }
}

function updateAttribute (newNode, oldNode, name) {
  if (newNode[name] !== oldNode[name]) {
    oldNode[name] = newNode[name]
    if (newNode[name]) {
      oldNode.setAttribute(name, '')
    } else {
      oldNode.removeAttribute(name)
    }
  }
}


/***/ }),

/***/ "./node_modules/operator/dist/operator.es.js":
/*!***************************************************!*\
  !*** ./node_modules/operator/dist/operator.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function t(t,n){for(var e=0,r=t.length;e<r;e++)if(!n(t[e],e,t))return!1;return!0}const n="/",[e,r,o,i]=[0,1,2,3],[a,u,l,c]=[47,58,42,63];function f(t){if(t===n)return t;t.charCodeAt(0)===a&&(t=t.substring(1));var e=t.length-1;return t.charCodeAt(e)===a?t.substring(0,e):t}function s(t){return(t=f(t))===n?[n]:t.split(n)}function d(a,u){let l,c,f=s(a),d=f.length,p=0,h=(t,o)=>(function(t,o){return o.val===t&&o.type===e||(t===n?o.type>r:o.type!==e)})(f[o],t);for(;p<u.length;p++)if(((l=(c=u[p]).length)===d||l<d&&c[l-1].type===o||l>d&&c[l-1].type===i)&&t(c,h))return c;return[]}function p(t){if(t===n)return[{old:t,type:e,val:t}];let s,d,p,h=f(t),g=-1,v=0,y=h.length,m=[];for(;++g<y;)if((s=h.charCodeAt(g))!==u)if(s!==l){for(v=g;g<y&&h.charCodeAt(g)!==a;)++g;m.push({old:t,type:e,val:h.substring(v,g)}),h=h.substring(g),y-=g,g=v=0}else m.push({old:t,type:o,val:h.substring(g)});else{for(v=g+1,p=r,d=0;g<y&&h.charCodeAt(g)!==a;)h.charCodeAt(g)===c&&(d=g,p=i),g++;m.push({old:t,type:p,val:h.substring(v,d||g)}),h=h.substring(g),y-=g,g=0}return m}var h=new Map;function g(t){return t.replace(window.location.origin,"")}function v(t,e){var r="",o="",a=t.split(/#|\?/),u=a[0],l=a.slice(1);u=(u=u.replace(/\/$/g,""))||"/";for(var c=0;c<l.length;c++){var f=t.split(l[c])[0];"?"===f[f.length-1]&&(o=l[c]),"#"===f[f.length-1]&&(r=l[c])}var p=d(u,e.map(function(t){return t[1]}));return p[0]?{handler:e.filter(function(t){return t[0]===p[0].old})[0][2],params:function(t,e){let r,o,a=0,u=s(t),l={};for(;a<e.length;a++)o=e[a],(r=u[a])!==n&&void 0!==r&&o.type|2===i&&(l[o.val]=r);return l}(u,p),hash:r,search:o,pathname:u,location:t}:null}/* harmony default export */ __webpack_exports__["default"] = (function(t,n){void 0===n&&(n=["*"]);var e,r=document.querySelector(t),o=[],i={};n=n.reduce(function(t,n){return"function"==typeof n?(o.push(n),t):(t.push([].concat(n)),t)},[]).map(function(t){return t.pop?[t[0],p(t[0]),t[1]]:[t,p(t),null]}),"scrollRestoration"in history&&(history.scrollRestoration="manual");var a=v(g(window.location.href),n),u=Object.assign({title:document.title},a);function l(t){return i[t]?i[t].map(function(t){return t(u)}):[]}function c(t,n,e,i){u.title=t.title,Promise.all(o.concat(e.handler||[]).map(function(t){return t(u)})).then(function(){window.scrollTo(0,0),requestAnimationFrame(function(){r.innerHTML=n,l("after")})})}function f(n,e,r){if(!e)return window.location.href=n;fetch(n,{credentials:"include"}).then(function(t){return t.text()}).then(function(o){var i=(new window.DOMParser).parseFromString(o,"text/html"),a=[i,i.querySelector(t).innerHTML];h.set(n,a),r&&r(a[0],a[1],e)})}function s(t,n,r){e=function(){var e=h.get(t);e?c(e[0],e[1],n):f(t,n,c)},u=Object.assign(u,n),Promise.all(l("before")).then(e)}function d(t){var e=g(t);return[e,v(e,n)]}return document.body.addEventListener("click",function(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.defaultPrevented)){for(var n=t.target;n&&(!n.href||"A"!==n.nodeName);)n=n.parentNode;if(n&&window.location.origin===n.origin&&!n.hasAttribute("download")&&"_blank"!==n.target&&!/mailto|tel/.test(n.href)){t.preventDefault();var e=d(n.pathname);return u.location!==e[0]&&s.apply(void 0,e.concat([!1])),!1}}}),window.addEventListener("popstate",function(t){return s.apply(void 0,d(t.target.location.href).concat([!0])),!1}),{get state(){return u},go:function(t){e=null,s.apply(void 0,d(t).concat([!1]))},load:function(t,n){return f.apply(void 0,d(t).concat([n]))},on:function(t,n){return i[t]=i[t]?i[t].concat(n):[n],function(){return i[t].slice(i[t].indexOf(n),1)}}}});;
//# sourceMappingURL=operator.es.js.map


/***/ }),

/***/ "./node_modules/picoapp/dist/picoapp.es.js":
/*!*************************************************!*\
  !*** ./node_modules/picoapp/dist/picoapp.es.js ***!
  \*************************************************/
/*! exports provided: default, component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return t; });
function n(n,t,e){return{node:n,actions:t,hydrate:e.hydrate,get state(){return e.state}}}function t(t){return function(e,r,o){var u=t(n(e,r,o))||{};return u.onStateChange&&o.listen(u.onStateChange),u}}/* harmony default export */ __webpack_exports__["default"] = (function(t,e,r){void 0===t&&(t={}),void 0===r&&(r={});var o=[],u=function(n){var t=Object.assign({},n),e=[],r=[];return{get state(){return t},hydrate:function(n){return t=Object.assign({},t,"function"==typeof n?n(t):n),function(n){for(var o=0,u=e;o<u.length;o+=1)(0,u[o])(t);for(;r.length;)r.pop()(t);n&&n()}},listen:function(n){return e.indexOf(n)<0&&e.push(n),function(){return e.splice(e.indexOf(n),1)}},once:function(n){r.indexOf(n)<0&&r.push(n)},reset:function(){t=n},replace:function(n){t=n}}}(e||{}),i=Object.keys(r).reduce(function(n,t){return n[t]=function(n){return Promise.resolve(r[t](n)(u.state)).then(function(n){return u.hydrate(n)()})},n},{});return{actions:i,hydrate:u.hydrate,get state(){return u.state},add:function(n){Object.assign(t,n)},mount:function(n){void 0===n&&(n="data-component"),n=[].concat(n);for(var e=0;e<n.length;e++)for(var r=n[e],c=[].slice.call(document.querySelectorAll("["+r+"]"));c.length;){var a=c.pop(),f=a.getAttribute(r),s=t[f];if(s){a.removeAttribute(r);var l=void 0;try{l=s(a,i,u)}catch(n){console.error("picoapp - "+f+" failed - "+(n.message||n))}l&&o.push(l)}}},unmount:function(){return Promise.all(o.filter(function(n){return n.onUnmount}).map(function(t){var e=t.onUnmount;return Promise.resolve("function"==typeof e?e(n(t.node,i,u)):null)})).then(function(){o=o.filter(function(n){return!n.onUnmount}).filter(function(n){return!document.documentElement.contains(n.node)})})}}});;
//# sourceMappingURL=picoapp.es.js.map


/***/ }),

/***/ "./node_modules/tickl/dist/tickl.es.js":
/*!*********************************************!*\
  !*** ./node_modules/tickl/dist/tickl.es.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var t=null,n=[];function e(t){for(var e=t.clientX,o=t.clientY,r=0;r<n.length;r++)n[r](e,o)}/* harmony default export */ __webpack_exports__["default"] = (function(o,r){function i(t,n){var e=o.getBoundingClientRect(),i=e.top,a=e.height,l=e.width;if(t>e.left&&t<e.right&&n>i&&n<e.bottom)for(var f=function(e){var o=[].concat(r[e]),f=o[0],u=o[1];void 0===u&&(u=0);var c=(t-l/2)*u,s=(n-(a/2+i))*u;requestAnimationFrame(function(){f.style.transform="translateX("+c+"px) translateY("+s+"px)"})},u=0;u<r.length;u++)f(u);else for(var c=0;c<r.length;c++)r[c][0].style.transform=""}return void 0===o&&(o=document.body),t||(t=document.addEventListener("mousemove",e)),n.push(i),function(){n.splice(n.indexOf(i),1)}});;
//# sourceMappingURL=tickl.es.js.map


/***/ }),

/***/ "./node_modules/unfetch/dist/unfetch.es.js":
/*!*************************************************!*\
  !*** ./node_modules/unfetch/dist/unfetch.es.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var index = typeof fetch=='function' ? fetch.bind() : function(url, options) {
	options = options || {};
	return new Promise( function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url, true);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials=='include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body);

		function response() {
			var keys = [],
				all = [],
				headers = {},
				header;

			request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (m, key, value) {
				keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? (header + "," + value) : value;
			});

			return {
				ok: (request.status/100|0) == 2,		// 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function () { return Promise.resolve(request.responseText); },
				json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
				blob: function () { return Promise.resolve(new Blob([request.response])); },
				headers: {
					keys: function () { return keys; },
					entries: function () { return all; },
					get: function (n) { return headers[n.toLowerCase()]; },
					has: function (n) { return n.toLowerCase() in headers; }
				}
			};
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=unfetch.es.js.map


/***/ }),

/***/ "./node_modules/vsbl/dist/vsbl.es.js":
/*!*******************************************!*\
  !*** ./node_modules/vsbl/dist/vsbl.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var n,e,t,i,r,o,f,p,a,u=[];function v(n){return e=window.pageXOffset,i=window.pageYOffset,o=window.innerHeight,p=window.innerWidth,i===r&&e===t&&o===f&&p===a||(w(n),t=e,r=i,f=o,a=p),requestAnimationFrame(v)}function w(n){for(var v=0;v<u.length;v++)u[v]({x:e,y:i,px:t,py:r,vh:o,pvh:f,vw:p,pvw:a},n)}/* harmony default export */ __webpack_exports__["default"] = (function(e){return function(t,i){var r,o=!1;return u.indexOf(r=function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var f=n[0],p=f.y,a=f.vh,u=e.getBoundingClientRect(),v=u.top+p,w=v+u.height>=p&&v<=p+a;w&&!o?(o=!0,t&&t.apply(void 0,n)):!w&&o&&(o=!1,i&&i.apply(void 0,n))})<0&&u.push(r),n=n||v(performance.now()),w(performance.now()),function(){return u.splice(u.indexOf(r),1)}}});;
//# sourceMappingURL=vsbl.es.js.map


/***/ }),

/***/ "./scripts/client.js":
/*!***************************!*\
  !*** ./scripts/client.js ***!
  \***************************/
/*! exports provided: app, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.es.js");
/* harmony import */ var operator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! operator */ "./node_modules/operator/dist/operator.es.js");
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/main.css */ "./styles/main.css");
/* harmony import */ var styles_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var scripts_lib_images_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scripts/lib/images.js */ "./scripts/lib/images.js");
/* harmony import */ var scripts_lib_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scripts/lib/util.js */ "./scripts/lib/util.js");
/* harmony import */ var scripts_components_search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scripts/components/search.js */ "./scripts/components/search.js");
/* harmony import */ var scripts_components_grid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scripts/components/grid.js */ "./scripts/components/grid.js");
/* harmony import */ var scripts_components_header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! scripts/components/header.js */ "./scripts/components/header.js");









var components = {
  search: scripts_components_search_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  grid: scripts_components_grid_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: scripts_components_header_js__WEBPACK_IMPORTED_MODULE_8__["default"]
};
var initialState = Object.assign({
  photoCache: window.__hydrate.photos || []
}, window.__hydrate, {
  hasHistory: !/about|photos/.test(window.location.pathname)
});
var actions = {
  search: function search(query) {
    return function (state) {
      return Object(unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(initialState.api, "/api/v1/search/").concat(query), {
        mode: 'cors'
      }).then(function (r) {
        return r.json();
      }).then(function (photos) {
        return {
          photos: photos,
          photoCache: Object(scripts_lib_util_js__WEBPACK_IMPORTED_MODULE_5__["uniq"])('id', state.photoCache.concat(photos))
        };
      });
    };
  },
  resetSearch: function resetSearch() {
    return function (state) {
      return {
        photos: state.photoCache
      };
    };
  }
};
var app = Object(picoapp__WEBPACK_IMPORTED_MODULE_2__["default"])(components, initialState, actions);
var router = Object(operator__WEBPACK_IMPORTED_MODULE_1__["default"])('#root');
router.on('after', function (state) {
  window.history.pushState({}, '', state.pathname);

  if (!/about|photos/.test(state.pathname) && !app.state.hasHistory) {
    app.hydrate({
      hasHistory: true
    });
  }

  if (/photos\//.test(state.pathname)) {
    document.getElementById('header').classList.add('is-photo-route');
  } else {
    document.getElementById('header').classList.remove('is-photo-route');
  }

  app.mount();
  Object(scripts_lib_images_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
app.mount();
Object(scripts_lib_images_js__WEBPACK_IMPORTED_MODULE_4__["default"])();


/***/ }),

/***/ "./scripts/components/grid.js":
/*!************************************!*\
  !*** ./scripts/components/grid.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var nanomorph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanomorph */ "./node_modules/nanomorph/index.js");
/* harmony import */ var nanomorph__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nanomorph__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scripts_lib_images_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scripts/lib/images.js */ "./scripts/lib/images.js");
/* harmony import */ var templates_components_GridPhoto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! templates/components/GridPhoto.js */ "./templates/components/GridPhoto.js");
/* harmony import */ var templates_components_GridPhoto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(templates_components_GridPhoto_js__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (_ref) {
  var node = _ref.node,
      state = _ref.state,
      actions = _ref.actions;
  return {
    onStateChange: function onStateChange(_ref2) {
      var photos = _ref2.photos;
      var next = node.cloneNode();
      next.innerHTML = photos.reduce(function (str, photo) {
        return str += templates_components_GridPhoto_js__WEBPACK_IMPORTED_MODULE_3___default()(photo);
      }, '');
      nanomorph__WEBPACK_IMPORTED_MODULE_1___default()(node, next);
      Object(scripts_lib_images_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  };
}));

/***/ }),

/***/ "./scripts/components/header.js":
/*!**************************************!*\
  !*** ./scripts/components/header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var tickl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tickl */ "./node_modules/tickl/dist/tickl.es.js");
/* harmony import */ var scripts_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scripts/client.js */ "./scripts/client.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (_ref) {
  var node = _ref.node;
  var toggle = document.getElementById('menuToggle');
  var back = document.getElementById('headerBack');

  back.onclick = function (e) {
    scripts_client_js__WEBPACK_IMPORTED_MODULE_2__["app"].state.hasHistory ? window.history.back() : scripts_client_js__WEBPACK_IMPORTED_MODULE_2__["router"].go('/');
  }; // const span = toggle.getElementsByTagName('span')[0]
  // tickl(toggle, [
  //   [span, 0.1]
  // ])

}));

/***/ }),

/***/ "./scripts/components/search.js":
/*!**************************************!*\
  !*** ./scripts/components/search.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (_ref) {
  var form = _ref.node,
      state = _ref.state,
      actions = _ref.actions;

  var _form$getElementsByTa = form.getElementsByTagName('input'),
      _form$getElementsByTa2 = _slicedToArray(_form$getElementsByTa, 1),
      input = _form$getElementsByTa2[0];

  var reset = form.getElementsByTagName('button')[0];
  var timeout;

  function update() {
    window.history.replaceState({}, '', input.value || '/');
    timeout && clearTimeout(timeout);
    timeout = setTimeout(function () {
      input.value ? actions.search(input.value) : actions.resetSearch();
    }, 500);
  }

  input.addEventListener('keyup', update);
  input.addEventListener('change', update);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    update();
  });
  reset.addEventListener('click', function (e) {
    input.value = '';
    update();
  });
  document.addEventListener('keydown', function (e) {
    if (e.metaKey && e.keyCode === 83) {
      e.preventDefault();
      input.focus();
    }
  });
}));

/***/ }),

/***/ "./scripts/lib/images.js":
/*!*******************************!*\
  !*** ./scripts/lib/images.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return images; });
/* harmony import */ var vsbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vsbl */ "./node_modules/vsbl/dist/vsbl.es.js");

function images() {
  [].slice.call(document.querySelectorAll('[data-src]')).map(function (img) {
    var src = img.getAttribute('data-src');
    var int;
    int = Object(vsbl__WEBPACK_IMPORTED_MODULE_0__["default"])(img)(function () {
      var i = document.createElement('img');

      i.onload = function (e) {
        img.src = src;
        int && int();
      };

      i.src = src;
    });
  });
}

/***/ }),

/***/ "./scripts/lib/util.js":
/*!*****************************!*\
  !*** ./scripts/lib/util.js ***!
  \*****************************/
/*! exports provided: uniq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
function uniq(key, arr) {
  var keys = [];

  for (var i = 0; i < arr.length; i++) {
    var id = arr[i][key];
    keys.indexOf(id) < 0 && keys.push(id);
  }

  var results = [];

  outer: for (var k = 0; k < keys.length; k++) {
    inner: for (var a = 0; a < arr.length; a++) {
      if (arr[a][key] === keys[k]) {
        results.push(arr[a]);
        continue outer;
      }
    }
  }

  return results;
}

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./templates/components/GridPhoto.js":
/*!*******************************************!*\
  !*** ./templates/components/GridPhoto.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function Grid(props, children) {
  return "\n    <li id='".concat(props.id, "' class='grid__photo rel'>\n      <img class='x y fill z0' src='").concat(props.images.placeholder, "' data-src='").concat(props.images.display, "' />\n      <a href='/photos/").concat(props.id, "' class='abs fill z1'></a>\n    </li>\n  ");
};

/***/ })

/******/ });
//# sourceMappingURL=client.js.map