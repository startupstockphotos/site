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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/App.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

var _Nav = _interopRequireDefault(__webpack_require__("./app/components/Nav.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx preact.h */
function App(_ref) {
  var children = _ref.children;
  return _preact.default.h("main", null, _preact.default.h(_Nav.default, null), children);
}

/***/ }),

/***/ "./app/components/Link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

var _connect = _interopRequireDefault(__webpack_require__("./app/state/connect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var _default = (0, _connect.default)(function (state) {
  return {
    location: state.location
  };
})(function Link(_ref) {
  var href = _ref.href,
      children = _ref.children,
      hydrate = _ref.hydrate,
      props = _objectWithoutProperties(_ref, ["href", "children", "hydrate"]);

  return _preact.default.h("a", _extends({
    href: href
  }, props, {
    onClick: function onClick(e) {
      e.preventDefault();
      hydrate({
        location: href
      })();
    }
  }), children);
});

exports.default = _default;

/***/ }),

/***/ "./app/components/Logo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Logo;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx preact.h */
function Logo(props) {
  return _preact.default.h("svg", {
    className: "logo",
    width: "26",
    height: "12",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 26 12",
    style: {
      height: '1em',
      width: '2.1em'
    }
  }, _preact.default.h("path", {
    d: "M6.5526 3.3229c-.075-.531-.3051-.9483-.6907-1.2518-.3855-.3034-.9002-.4552-1.544-.4552-.6664 0-1.1923.1499-1.5778.4495-.3856.2997-.5784.6923-.5784 1.1778 0 .4211.176.7663.5278 1.0356.3519.2693.8853.5102 1.6003.7226l.8703.256c1.0855.3263 1.9071.7435 2.4649 1.2518.5577.5083.8366 1.1892.8366 2.0427 0 .6525-.1572 1.2385-.4716 1.7582-.3145.5197-.7824.9312-1.4038 1.2347C5.965 11.8483 5.1956 12 4.2785 12c-.7786 0-1.486-.1356-2.1224-.4068-.6363-.2712-1.1473-.6686-1.5328-1.192C.2377 9.8776.0299 9.2422 0 8.495h1.8417c.0599.6107.3172 1.0773.772 1.3997.4548.3225 1.0378.4837 1.749.4837.7 0 1.254-.1679 1.662-.5036.408-.3357.612-.75.612-1.2432 0-.44-.175-.806-.525-1.0982-.35-.292-.931-.5614-1.7433-.808l-.9995-.2901C2.4294 6.1583 1.6873 5.78 1.1426 5.3.598 4.8203.3256 4.1404.3256 3.2603c0-.6562.1779-1.229.5335-1.7183.3556-.4894.8394-.8687 1.4514-1.138C2.9225.1347 3.6104 0 4.374 0c.771 0 1.4514.1403 2.041.421.5896.2808 1.0556.6705 1.398 1.1693.3426.4988.525 1.0764.5475 1.7326h-1.808zm9.7999 0c-.0749-.531-.3051-.9483-.6907-1.2518-.3855-.3034-.9002-.4552-1.544-.4552-.6663 0-1.1923.1499-1.5778.4495-.3856.2997-.5784.6923-.5784 1.1778 0 .4211.176.7663.5278 1.0356.352.2693.8853.5102 1.6003.7226l.8703.256c1.0855.3263 1.9072.7435 2.465 1.2518.5577.5083.8365 1.1892.8365 2.0427 0 .6525-.1572 1.2385-.4716 1.7582-.3145.5197-.7824.9312-1.4037 1.2347-.6214.3035-1.3907.4552-2.3078.4552-.7785 0-1.486-.1356-2.1224-.4068-.6363-.2712-1.1473-.6686-1.5328-1.192-.3856-.5235-.5933-1.1589-.6233-1.9062h1.8417c.0599.6107.3172 1.0773.772 1.3997.4548.3225 1.0379.4837 1.749.4837.7 0 1.254-.1679 1.662-.5036.408-.3357.612-.75.612-1.2432 0-.44-.1749-.806-.5249-1.0982-.35-.292-.9311-.5614-1.7434-.808l-.9995-.2901c-.9395-.277-1.6816-.6553-2.2263-1.1352-.5446-.4798-.817-1.1597-.817-2.0398 0-.6562.1779-1.229.5335-1.7183.3556-.4894.8394-.8687 1.4514-1.138C12.7224.1347 13.4103 0 14.174 0c.7711 0 1.4514.1403 2.041.421.5896.2808 1.0556.6705 1.3981 1.1693.3425.4988.525 1.0764.5475 1.7326h-1.808zm4.7297 8.6487c-.3145 0-.583-.1138-.8058-.3414-.2227-.2276-.334-.5026-.334-.825 0-.3225.1122-.5937.3368-.8137.2246-.22.4923-.33.803-.33.3181 0 .5886.1119.8113.3357s.3341.493.3341.808c0 .3224-.1114.5974-.334.825-.2228.2276-.4933.3414-.8114.3414zm2.1029-6.682h-1.2278v2.7463h-1.7369V.2673h2.9647C24.9818.2673 26 1.3597 26 2.8467c0 1.4718-1.0182 2.4428-2.815 2.4428zm-1.2278-3.5657V3.848h1.2278c.7786-.0152 1.078-.4855 1.078-1.0773 0-.5614-.2994-1.062-1.078-1.047h-1.2278z",
    fill: "currentColor",
    fillRule: "evenodd"
  }));
}

/***/ }),

/***/ "./app/components/Nav.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

var _connect = _interopRequireDefault(__webpack_require__("./app/state/connect.js"));

var _Outer = _interopRequireDefault(__webpack_require__("./app/components/Outer.js"));

var _Logo = _interopRequireDefault(__webpack_require__("./app/components/Logo.js"));

var _Link = _interopRequireDefault(__webpack_require__("./app/components/Link.js"));

var _SearchBar = _interopRequireDefault(__webpack_require__("./app/components/SearchBar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx preact.h */
var _default = (0, _connect.default)(function (state) {
  return {
    location: state.location
  };
})(function Nav(_ref) {
  var location = _ref.location,
      hydrate = _ref.hydrate;
  return _preact.default.h("span", null, _preact.default.h("header", {
    className: "nav fix top left right x z1"
  }, _preact.default.h("div", {
    className: "nav__inner"
  }, _preact.default.h(_Outer.default, null, _preact.default.h("div", {
    className: "f jcb aic"
  }, _preact.default.h(_Link.default, {
    className: "nav__logo",
    href: "/"
  }, _preact.default.h(_Logo.default, null)), _preact.default.h("nav", {
    className: "f aic jce"
  }, _preact.default.h(_Link.default, {
    href: "/donate",
    className: "caps h6",
    style: {
      marginRight: '2em'
    }
  }, "Donate"), _preact.default.h(_Link.default, {
    href: "/about",
    className: "caps h6"
  }, "About"))))), _preact.default.h("div", {
    className: "nav__search"
  }, _preact.default.h(_Outer.default, null, _preact.default.h(_SearchBar.default, null)))), _preact.default.h("div", {
    className: "header-spacer"
  }));
});

exports.default = _default;

/***/ }),

/***/ "./app/components/Outer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Outer;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx preact.h */
function Outer(_ref) {
  var children = _ref.children;
  return _preact.default.h("div", {
    className: "outer rel"
  }, children);
}

/***/ }),

/***/ "./app/components/PhotoCard.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PhotoCard;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx preact.h */
function PhotoCard(_ref) {
  var photo = _ref.photo;
  return _preact.default.h("figure", {
    className: "photo-card"
  }, _preact.default.h("div", {
    className: "photo-card__img rel"
  }, _preact.default.h("img", {
    src: photo.file.url + '?fm=jpg&fl=progressive&w=800',
    className: "x y abs fill"
  })));
}

/***/ }),

/***/ "./app/components/PhotoGrid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

var _connect = _interopRequireDefault(__webpack_require__("./app/state/connect.js"));

var _Outer = _interopRequireDefault(__webpack_require__("./app/components/Outer.js"));

var _PhotoCard = _interopRequireDefault(__webpack_require__("./app/components/PhotoCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx preact.h */
var _default = (0, _connect.default)(function (state) {
  return {
    photos: state.photos
  };
})(function (props) {
  return _preact.default.h(_Outer.default, null, _preact.default.h("ul", {
    className: "photo-grid f aic fw"
  }, props.photos.map(function (p) {
    return _preact.default.h("li", {
      className: "photo-grid__photo"
    }, _preact.default.h(_PhotoCard.default, {
      photo: p
    }));
  })));
});

exports.default = _default;

/***/ }),

/***/ "./app/components/SearchBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

var _connect = _interopRequireDefault(__webpack_require__("./app/state/connect.js"));

var _unfetch = _interopRequireDefault(__webpack_require__("unfetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx preact.h */
var timeout;

var _default = (0, _connect.default)(function (state) {
  return {
    query: state.query,
    photos: state.photos
  };
})(function (_ref) {
  var photos = _ref.photos,
      query = _ref.query,
      hydrate = _ref.hydrate;
  return _preact.default.h("div", {
    className: "search f aic jcb"
  }, _preact.default.h("input", {
    type: "search",
    value: query,
    placeholder: "Type something",
    onKeyup: function onKeyup(e) {
      var val = e.target.value;
      hydrate({
        query: val,
        location: val
      });
      timeout && clearTimeout(timeout);
      timeout = setTimeout(function () {
        (0, _unfetch.default)("".concat(window.__api__, "/photos?q=").concat(val)).then(function (res) {
          return res.json();
        }).then(function (photos) {
          hydrate({
            photos: photos
          })();
        });
      }, 500);
    }
  }), _preact.default.h("p", {
    className: "cw2 my0"
  }, photos.length, " photos"));
});

exports.default = _default;

/***/ }),

/***/ "./app/router.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

var _scouter = __webpack_require__("scouter");

var _Home = _interopRequireDefault(__webpack_require__("./app/routes/Home.js"));

var _About = _interopRequireDefault(__webpack_require__("./app/routes/About.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx preact.h */
var _default = (0, _scouter.router)(_About.default, _Home.default, (0, _scouter.route)({
  path: '*',
  component: function component(props) {
    return _preact.default.h("h1", null, "404");
  }
}));

exports.default = _default;

/***/ }),

/***/ "./app/routes/About.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

var _scouter = __webpack_require__("scouter");

var _App = _interopRequireDefault(__webpack_require__("./app/App.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx preact.h */
var path = '/about';

function component(props) {
  return _preact.default.h(_App.default, null, _preact.default.h("h1", null, "About"));
}

var _default = (0, _scouter.route)({
  path: path,
  component: component
});

exports.default = _default;

/***/ }),

/***/ "./app/routes/Home.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = _interopRequireDefault(__webpack_require__("preact"));

var _scouter = __webpack_require__("scouter");

var _App = _interopRequireDefault(__webpack_require__("./app/App.js"));

var _PhotoGrid = _interopRequireDefault(__webpack_require__("./app/components/PhotoGrid.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx preact.h */
var path = ':query';

function component(props) {
  return _preact.default.h(_App.default, null, _preact.default.h(_PhotoGrid.default, null));
}

var options = {
  title: function title(state) {
    return (state.query ? "".concat(state.query, " | ") : '') + 'Startup Stock Photos';
  }
};

var _default = (0, _scouter.route)({
  path: path,
  component: component,
  options: options
});

exports.default = _default;

/***/ }),

/***/ "./app/state/connect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = __webpack_require__("preact");

var _store = _interopRequireDefault(__webpack_require__("./app/state/store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default() {
  var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
    return state;
  };
  return function (Comp) {
    return function (props) {
      return (0, _preact.h)(Comp, _extends({}, Object.assign({}, props, map(_store.default.state)), {
        hydrate: _store.default.hydrate
      }));
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./app/state/store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _picostate = _interopRequireDefault(__webpack_require__("picostate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _picostate.default)({
  query: ''
});

exports.default = _default;

/***/ }),

/***/ "./index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _express = _interopRequireDefault(__webpack_require__("express"));

var _compression = _interopRequireDefault(__webpack_require__("compression"));

var _preact = __webpack_require__("preact");

var _preactRenderToString = _interopRequireDefault(__webpack_require__("preact-render-to-string"));

var _router = _interopRequireDefault(__webpack_require__("./app/router.js"));

var _store = _interopRequireDefault(__webpack_require__("./app/state/store.js"));

var _nodeFetch = _interopRequireDefault(__webpack_require__("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */
var PROD = !!process.env.NOW;
var ENDPOINT = PROD ? 'https://ssp-api.now.sh' : 'http://localhost:3001';
var app = (0, _express.default)();
app.use((0, _compression.default)());
app.use(_express.default.static('./public'));
var cache;

function getPhotos(query) {
  if (query) {
    return (0, _nodeFetch.default)("".concat(ENDPOINT, "/photos?q=").concat(query)).then(function (res) {
      return res.json();
    });
  }

  if (!cache) {
    cache = null;
    cache = (0, _nodeFetch.default)("".concat(ENDPOINT, "/photos")).then(function (res) {
      return res.json();
    });
  }

  return cache;
}

app.get('*', function (req, res) {
  _router.default.resolve(req.originalUrl).then(function (_ref) {
    var Comp = _ref.component,
        params = _ref.params,
        options = _ref.options;
    getPhotos(params.query).then(function (photos) {
      _store.default.hydrate({
        photos: photos
      });

      res.send("\n        <html>\n          <head>\n            <title>Startup Stock Photos</title>\n            <script src='/index.js' defer></script>\n            <link rel='stylesheet' href='/style.css'/>\n            <script>window.__hydrate__ = ".concat(JSON.stringify(_store.default.state), "</script>\n            <script>window.__api__ = \"").concat(ENDPOINT, "\"</script>\n          </head>\n          <body>\n            ").concat((0, _preactRenderToString.default)((0, _preact.h)(Comp, null)), "\n          </body>\n        </html>\n      "));

      _store.default.reset();
    });
  });
});
app.listen(3000);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "compression":
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "node-fetch":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "picostate":
/***/ (function(module, exports) {

module.exports = require("picostate");

/***/ }),

/***/ "preact":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "preact-render-to-string":
/***/ (function(module, exports) {

module.exports = require("preact-render-to-string");

/***/ }),

/***/ "scouter":
/***/ (function(module, exports) {

module.exports = require("scouter");

/***/ }),

/***/ "unfetch":
/***/ (function(module, exports) {

module.exports = require("unfetch");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDVjZjliNDc5NzdmMmMwZDU2MTEiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaW5rLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTmF2LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL091dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Bob3RvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QaG90b0dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JvdXRlcy9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRlL2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBpY29zdGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByZWFjdC1yZW5kZXItdG8tc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2NvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZmV0Y2hcIiJdLCJuYW1lcyI6WyJBcHAiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwic3RhdGUiLCJMaW5rIiwiaHJlZiIsImh5ZHJhdGUiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkxvZ28iLCJoZWlnaHQiLCJ3aWR0aCIsIk5hdiIsIm1hcmdpblJpZ2h0IiwiT3V0ZXIiLCJQaG90b0NhcmQiLCJwaG90byIsImZpbGUiLCJ1cmwiLCJwaG90b3MiLCJtYXAiLCJwIiwidGltZW91dCIsInF1ZXJ5IiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwiX19hcGlfXyIsInRoZW4iLCJyZXMiLCJqc29uIiwibGVuZ3RoIiwicGF0aCIsImNvbXBvbmVudCIsIm9wdGlvbnMiLCJ0aXRsZSIsIk9iamVjdCIsImFzc2lnbiIsIlBST0QiLCJwcm9jZXNzIiwiZW52IiwiTk9XIiwiRU5EUE9JTlQiLCJhcHAiLCJ1c2UiLCJzdGF0aWMiLCJjYWNoZSIsImdldFBob3RvcyIsImdldCIsInJlcSIsInJlc29sdmUiLCJvcmlnaW5hbFVybCIsIkNvbXAiLCJwYXJhbXMiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc2V0IiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7O0FDdkx0Qyx3Qzs7Ozs7OztBQ0FBLG9DOzs7Ozs7O0FDQUEsdUM7Ozs7Ozs7QUNBQSxzQzs7Ozs7OztBQ0FBLG1DOzs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7QUNBQSxvQzs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNWNmOWI0Nzk3N2YyYzBkNTYxMSIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcbmltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL05hdi5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwICh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxOYXYgLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9BcHAuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5pbXBvcnQgY29ubmVjdCBmcm9tICdzdGF0ZS9jb25uZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvblxufSkpKFxuICBmdW5jdGlvbiBMaW5rICh7IGhyZWYsIGNoaWxkcmVuLCBoeWRyYXRlLCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e2hyZWZ9IHsuLi5wcm9wc30gb25DbGljaz17ZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBoeWRyYXRlKHsgbG9jYXRpb246IGhyZWYgfSkoKVxuICAgICAgfX0+e2NoaWxkcmVufTwvYT5cbiAgICApXG4gIH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0xpbmsuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28gKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9J2xvZ28nIHdpZHRoPScyNicgaGVpZ2h0PScxMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjYgMTInIHN0eWxlPXt7XG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgd2lkdGg6ICcyLjFlbSdcbiAgICB9fT5cbiAgICAgIDxwYXRoIGQ9J002LjU1MjYgMy4zMjI5Yy0uMDc1LS41MzEtLjMwNTEtLjk0ODMtLjY5MDctMS4yNTE4LS4zODU1LS4zMDM0LS45MDAyLS40NTUyLTEuNTQ0LS40NTUyLS42NjY0IDAtMS4xOTIzLjE0OTktMS41Nzc4LjQ0OTUtLjM4NTYuMjk5Ny0uNTc4NC42OTIzLS41Nzg0IDEuMTc3OCAwIC40MjExLjE3Ni43NjYzLjUyNzggMS4wMzU2LjM1MTkuMjY5My44ODUzLjUxMDIgMS42MDAzLjcyMjZsLjg3MDMuMjU2YzEuMDg1NS4zMjYzIDEuOTA3MS43NDM1IDIuNDY0OSAxLjI1MTguNTU3Ny41MDgzLjgzNjYgMS4xODkyLjgzNjYgMi4wNDI3IDAgLjY1MjUtLjE1NzIgMS4yMzg1LS40NzE2IDEuNzU4Mi0uMzE0NS41MTk3LS43ODI0LjkzMTItMS40MDM4IDEuMjM0N0M1Ljk2NSAxMS44NDgzIDUuMTk1NiAxMiA0LjI3ODUgMTJjLS43Nzg2IDAtMS40ODYtLjEzNTYtMi4xMjI0LS40MDY4LS42MzYzLS4yNzEyLTEuMTQ3My0uNjY4Ni0xLjUzMjgtMS4xOTJDLjIzNzcgOS44Nzc2LjAyOTkgOS4yNDIyIDAgOC40OTVoMS44NDE3Yy4wNTk5LjYxMDcuMzE3MiAxLjA3NzMuNzcyIDEuMzk5Ny40NTQ4LjMyMjUgMS4wMzc4LjQ4MzcgMS43NDkuNDgzNy43IDAgMS4yNTQtLjE2NzkgMS42NjItLjUwMzYuNDA4LS4zMzU3LjYxMi0uNzUuNjEyLTEuMjQzMiAwLS40NC0uMTc1LS44MDYtLjUyNS0xLjA5ODItLjM1LS4yOTItLjkzMS0uNTYxNC0xLjc0MzMtLjgwOGwtLjk5OTUtLjI5MDFDMi40Mjk0IDYuMTU4MyAxLjY4NzMgNS43OCAxLjE0MjYgNS4zLjU5OCA0LjgyMDMuMzI1NiA0LjE0MDQuMzI1NiAzLjI2MDNjMC0uNjU2Mi4xNzc5LTEuMjI5LjUzMzUtMS43MTgzLjM1NTYtLjQ4OTQuODM5NC0uODY4NyAxLjQ1MTQtMS4xMzhDMi45MjI1LjEzNDcgMy42MTA0IDAgNC4zNzQgMGMuNzcxIDAgMS40NTE0LjE0MDMgMi4wNDEuNDIxLjU4OTYuMjgwOCAxLjA1NTYuNjcwNSAxLjM5OCAxLjE2OTMuMzQyNi40OTg4LjUyNSAxLjA3NjQuNTQ3NSAxLjczMjZoLTEuODA4em05Ljc5OTkgMGMtLjA3NDktLjUzMS0uMzA1MS0uOTQ4My0uNjkwNy0xLjI1MTgtLjM4NTUtLjMwMzQtLjkwMDItLjQ1NTItMS41NDQtLjQ1NTItLjY2NjMgMC0xLjE5MjMuMTQ5OS0xLjU3NzguNDQ5NS0uMzg1Ni4yOTk3LS41Nzg0LjY5MjMtLjU3ODQgMS4xNzc4IDAgLjQyMTEuMTc2Ljc2NjMuNTI3OCAxLjAzNTYuMzUyLjI2OTMuODg1My41MTAyIDEuNjAwMy43MjI2bC44NzAzLjI1NmMxLjA4NTUuMzI2MyAxLjkwNzIuNzQzNSAyLjQ2NSAxLjI1MTguNTU3Ny41MDgzLjgzNjUgMS4xODkyLjgzNjUgMi4wNDI3IDAgLjY1MjUtLjE1NzIgMS4yMzg1LS40NzE2IDEuNzU4Mi0uMzE0NS41MTk3LS43ODI0LjkzMTItMS40MDM3IDEuMjM0Ny0uNjIxNC4zMDM1LTEuMzkwNy40NTUyLTIuMzA3OC40NTUyLS43Nzg1IDAtMS40ODYtLjEzNTYtMi4xMjI0LS40MDY4LS42MzYzLS4yNzEyLTEuMTQ3My0uNjY4Ni0xLjUzMjgtMS4xOTItLjM4NTYtLjUyMzUtLjU5MzMtMS4xNTg5LS42MjMzLTEuOTA2MmgxLjg0MTdjLjA1OTkuNjEwNy4zMTcyIDEuMDc3My43NzIgMS4zOTk3LjQ1NDguMzIyNSAxLjAzNzkuNDgzNyAxLjc0OS40ODM3LjcgMCAxLjI1NC0uMTY3OSAxLjY2Mi0uNTAzNi40MDgtLjMzNTcuNjEyLS43NS42MTItMS4yNDMyIDAtLjQ0LS4xNzQ5LS44MDYtLjUyNDktMS4wOTgyLS4zNS0uMjkyLS45MzExLS41NjE0LTEuNzQzNC0uODA4bC0uOTk5NS0uMjkwMWMtLjkzOTUtLjI3Ny0xLjY4MTYtLjY1NTMtMi4yMjYzLTEuMTM1Mi0uNTQ0Ni0uNDc5OC0uODE3LTEuMTU5Ny0uODE3LTIuMDM5OCAwLS42NTYyLjE3NzktMS4yMjkuNTMzNS0xLjcxODMuMzU1Ni0uNDg5NC44Mzk0LS44Njg3IDEuNDUxNC0xLjEzOEMxMi43MjI0LjEzNDcgMTMuNDEwMyAwIDE0LjE3NCAwYy43NzExIDAgMS40NTE0LjE0MDMgMi4wNDEuNDIxLjU4OTYuMjgwOCAxLjA1NTYuNjcwNSAxLjM5ODEgMS4xNjkzLjM0MjUuNDk4OC41MjUgMS4wNzY0LjU0NzUgMS43MzI2aC0xLjgwOHptNC43Mjk3IDguNjQ4N2MtLjMxNDUgMC0uNTgzLS4xMTM4LS44MDU4LS4zNDE0LS4yMjI3LS4yMjc2LS4zMzQtLjUwMjYtLjMzNC0uODI1IDAtLjMyMjUuMTEyMi0uNTkzNy4zMzY4LS44MTM3LjIyNDYtLjIyLjQ5MjMtLjMzLjgwMy0uMzMuMzE4MSAwIC41ODg2LjExMTkuODExMy4zMzU3cy4zMzQxLjQ5My4zMzQxLjgwOGMwIC4zMjI0LS4xMTE0LjU5NzQtLjMzNC44MjUtLjIyMjguMjI3Ni0uNDkzMy4zNDE0LS44MTE0LjM0MTR6bTIuMTAyOS02LjY4MmgtMS4yMjc4djIuNzQ2M2gtMS43MzY5Vi4yNjczaDIuOTY0N0MyNC45ODE4LjI2NzMgMjYgMS4zNTk3IDI2IDIuODQ2N2MwIDEuNDcxOC0xLjAxODIgMi40NDI4LTIuODE1IDIuNDQyOHptLTEuMjI3OC0zLjU2NTdWMy44NDhoMS4yMjc4Yy43Nzg2LS4wMTUyIDEuMDc4LS40ODU1IDEuMDc4LTEuMDc3MyAwLS41NjE0LS4yOTk0LTEuMDYyLTEuMDc4LTEuMDQ3aC0xLjIyNzh6JyBmaWxsPSdjdXJyZW50Q29sb3InIGZpbGxSdWxlPSdldmVub2RkJy8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0xvZ28uanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5pbXBvcnQgY29ubmVjdCBmcm9tICdzdGF0ZS9jb25uZWN0J1xuaW1wb3J0IE91dGVyIGZyb20gJ2NvbXBvbmVudHMvT3V0ZXIuanMnXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL0xvZ28uanMnXG5pbXBvcnQgTGluayBmcm9tICdjb21wb25lbnRzL0xpbmsuanMnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvblxufSkpKFxuICBmdW5jdGlvbiBOYXYgKHsgbG9jYXRpb24sIGh5ZHJhdGUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J25hdiBmaXggdG9wIGxlZnQgcmlnaHQgeCB6MSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9faW5uZXInPlxuICAgICAgICAgICAgPE91dGVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZiBqY2IgYWljJz5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdl9fbG9nbycgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdmIGFpYyBqY2UnPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2RvbmF0ZScgY2xhc3NOYW1lPSdjYXBzIGg2JyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzJlbScgfX0+RG9uYXRlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0JyBjbGFzc05hbWU9J2NhcHMgaDYnPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvT3V0ZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X19zZWFyY2gnPlxuICAgICAgICAgICAgPE91dGVyPlxuICAgICAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgICAgICA8L091dGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLXNwYWNlcicgLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApXG4gIH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL05hdi5qcyIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3V0ZXIgKHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdvdXRlciByZWwnPntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvT3V0ZXIuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBob3RvQ2FyZCAoeyBwaG90byB9KSB7XG4gIHJldHVybiAoXG4gICAgPGZpZ3VyZSBjbGFzc05hbWU9J3Bob3RvLWNhcmQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Bob3RvLWNhcmRfX2ltZyByZWwnPlxuICAgICAgICA8aW1nIHNyYz17cGhvdG8uZmlsZS51cmwgKyAnP2ZtPWpwZyZmbD1wcm9ncmVzc2l2ZSZ3PTgwMCd9IGNsYXNzTmFtZT0neCB5IGFicyBmaWxsJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9maWd1cmU+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1Bob3RvQ2FyZC5qcyIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcbmltcG9ydCBjb25uZWN0IGZyb20gJ3N0YXRlL2Nvbm5lY3QuanMnXG5pbXBvcnQgT3V0ZXIgZnJvbSAnY29tcG9uZW50cy9PdXRlci5qcydcbmltcG9ydCBQaG90b0NhcmQgZnJvbSAnY29tcG9uZW50cy9QaG90b0NhcmQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgcGhvdG9zOiBzdGF0ZS5waG90b3Ncbn0pKShcbiAgcHJvcHMgPT4gKFxuICAgIDxPdXRlcj5cbiAgICAgIDx1bCBjbGFzc05hbWU9J3Bob3RvLWdyaWQgZiBhaWMgZncnPlxuICAgICAgICB7cHJvcHMucGhvdG9zLm1hcChwID0+IChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwaG90by1ncmlkX19waG90byc+XG4gICAgICAgICAgICA8UGhvdG9DYXJkIHBob3RvPXtwfSAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L091dGVyPlxuICApXG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9QaG90b0dyaWQuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5pbXBvcnQgY29ubmVjdCBmcm9tICdzdGF0ZS9jb25uZWN0LmpzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ3VuZmV0Y2gnXG5cbmxldCB0aW1lb3V0XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgcXVlcnk6IHN0YXRlLnF1ZXJ5LFxuICBwaG90b3M6IHN0YXRlLnBob3Rvc1xufSkpKFxuICAoeyBwaG90b3MsIHF1ZXJ5LCBoeWRyYXRlIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoIGYgYWljIGpjYic+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT0nc2VhcmNoJ1xuICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIHNvbWV0aGluZydcbiAgICAgICAgb25LZXl1cD17ZSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICBoeWRyYXRlKHsgcXVlcnk6IHZhbCwgbG9jYXRpb246IHZhbCB9KVxuICAgICAgICAgIHRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZmV0Y2goYCR7d2luZG93Ll9fYXBpX199L3Bob3Rvcz9xPSR7dmFsfWApXG4gICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAudGhlbihwaG90b3MgPT4ge1xuICAgICAgICAgICAgICAgIGh5ZHJhdGUoeyBwaG90b3MgfSkoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfX0gLz5cblxuICAgICAgPHAgY2xhc3NOYW1lPSdjdzIgbXkwJz57cGhvdG9zLmxlbmd0aH0gcGhvdG9zPC9wPlxuICAgIDwvZGl2PlxuICApXG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyByb3V0ZXIsIHJvdXRlIH0gZnJvbSAnc2NvdXRlcidcblxuaW1wb3J0IEhvbWUgZnJvbSAncm91dGVzL0hvbWUuanMnXG5pbXBvcnQgQWJvdXQgZnJvbSAncm91dGVzL0Fib3V0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIoXG4gIEFib3V0LFxuICBIb21lLFxuICByb3V0ZSh7XG4gICAgcGF0aDogJyonLFxuICAgIGNvbXBvbmVudDogcHJvcHMgPT4gPGgxPjQwNDwvaDE+XG4gIH0pXG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcm91dGVyLmpzIiwiLyoqIEBqc3ggcHJlYWN0LmggKi9cbmltcG9ydCBwcmVhY3QgZnJvbSAncHJlYWN0J1xuaW1wb3J0IHsgcm91dGUgfSBmcm9tICdzY291dGVyJ1xuaW1wb3J0IEFwcCBmcm9tICdhcHAvQXBwLmpzJ1xuXG5jb25zdCBwYXRoID0gJy9hYm91dCdcblxuZnVuY3Rpb24gY29tcG9uZW50IChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcHA+XG4gICAgICA8aDE+QWJvdXQ8L2gxPlxuICAgIDwvQXBwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlKHsgcGF0aCwgY29tcG9uZW50IH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcm91dGVzL0Fib3V0LmpzIiwiLyoqIEBqc3ggcHJlYWN0LmggKi9cbmltcG9ydCBwcmVhY3QgZnJvbSAncHJlYWN0J1xuaW1wb3J0IHsgcm91dGUgfSBmcm9tICdzY291dGVyJ1xuaW1wb3J0IEFwcCBmcm9tICdhcHAvQXBwLmpzJ1xuaW1wb3J0IFBob3RvR3JpZCBmcm9tICdjb21wb25lbnRzL1Bob3RvR3JpZC5qcydcblxuY29uc3QgcGF0aCA9ICc6cXVlcnknXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPFBob3RvR3JpZCAvPlxuICAgIDwvQXBwPlxuICApXG59XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHRpdGxlOiBzdGF0ZSA9PiAoc3RhdGUucXVlcnkgPyAoXG4gICAgYCR7c3RhdGUucXVlcnl9IHwgYFxuICApIDogJycpICsgJ1N0YXJ0dXAgU3RvY2sgUGhvdG9zJ1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZSh7IHBhdGgsIGNvbXBvbmVudCwgb3B0aW9ucyB9KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JvdXRlcy9Ib21lLmpzIiwiLyoqIEBqc3ggaCAqL1xuaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCdcbmltcG9ydCBzdG9yZSBmcm9tICdzdGF0ZS9zdG9yZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgKG1hcCA9IHN0YXRlID0+IHN0YXRlKSA9PiBDb21wID0+IHByb3BzID0+IChcbiAgPENvbXAgey4uLk9iamVjdC5hc3NpZ24oe30sIHByb3BzLCBtYXAoc3RvcmUuc3RhdGUpKX0gaHlkcmF0ZT17c3RvcmUuaHlkcmF0ZX0gLz5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zdGF0ZS9jb25uZWN0LmpzIiwiaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJ3BpY29zdGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xuICBxdWVyeTogJydcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc3RhdGUvc3RvcmUuanMiLCIvKiogQGpzeCBoICovXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJ1xuXG5pbXBvcnQgeyBoIH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IHJlbmRlciBmcm9tICdwcmVhY3QtcmVuZGVyLXRvLXN0cmluZydcbmltcG9ydCByb3V0ZXIgZnJvbSAnYXBwL3JvdXRlci5qcydcbmltcG9ydCBzdG9yZSBmcm9tICdzdGF0ZS9zdG9yZS5qcydcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xuXG5jb25zdCBQUk9EID0gISFwcm9jZXNzLmVudi5OT1dcbmNvbnN0IEVORFBPSU5UID0gUFJPRCA/ICdodHRwczovL3NzcC1hcGkubm93LnNoJyA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShjb21wcmVzc2lvbigpKVxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnLi9wdWJsaWMnKSlcblxubGV0IGNhY2hlXG5mdW5jdGlvbiBnZXRQaG90b3MgKHF1ZXJ5KSB7XG4gIGlmIChxdWVyeSkge1xuICAgIHJldHVybiBmZXRjaChgJHtFTkRQT0lOVH0vcGhvdG9zP3E9JHtxdWVyeX1gKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIH1cbiAgaWYgKCFjYWNoZSkge1xuICAgIGNhY2hlID0gbnVsbFxuICAgIGNhY2hlID0gZmV0Y2goYCR7RU5EUE9JTlR9L3Bob3Rvc2ApXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgfVxuICByZXR1cm4gY2FjaGVcbn1cblxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xuICByb3V0ZXIucmVzb2x2ZShyZXEub3JpZ2luYWxVcmwpLnRoZW4oKHsgY29tcG9uZW50OiBDb21wLCBwYXJhbXMsIG9wdGlvbnMgfSkgPT4ge1xuICAgIGdldFBob3RvcyhwYXJhbXMucXVlcnkpLnRoZW4ocGhvdG9zID0+IHtcbiAgICAgIHN0b3JlLmh5ZHJhdGUoeyBwaG90b3MgfSlcblxuICAgICAgcmVzLnNlbmQoYFxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5TdGFydHVwIFN0b2NrIFBob3RvczwvdGl0bGU+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz0nL2luZGV4LmpzJyBkZWZlcj48L3NjcmlwdD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nL3N0eWxlLmNzcycvPlxuICAgICAgICAgICAgPHNjcmlwdD53aW5kb3cuX19oeWRyYXRlX18gPSAke0pTT04uc3RyaW5naWZ5KHN0b3JlLnN0YXRlKX08L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQ+d2luZG93Ll9fYXBpX18gPSBcIiR7RU5EUE9JTlR9XCI8L3NjcmlwdD5cbiAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAke3JlbmRlcig8Q29tcCAvPil9XG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+XG4gICAgICBgKVxuXG4gICAgICBzdG9yZS5yZXNldCgpXG4gICAgfSlcbiAgfSlcbn0pXG5cbmFwcC5saXN0ZW4oMzAwMClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gY29tcHJlc3Npb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gZXhwcmVzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSBub2RlLWZldGNoXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBpY29zdGF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBpY29zdGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSBwaWNvc3RhdGVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IHByZWFjdFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmVhY3QtcmVuZGVyLXRvLXN0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByZWFjdC1yZW5kZXItdG8tc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IHByZWFjdC1yZW5kZXItdG8tc3RyaW5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNjb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzY291dGVyXCJcbi8vIG1vZHVsZSBpZCA9IHNjb3V0ZXJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5mZXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVuZmV0Y2hcIlxuLy8gbW9kdWxlIGlkID0gdW5mZXRjaFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9