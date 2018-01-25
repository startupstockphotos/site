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
    className: "photo-card__img rel",
    style: {
      backgroundColor: "#".concat(photo.color)
    }
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
var PROD = process.env.NODE_ENV === 'production';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGY3Y2MzY2RhNTZiNTlhYThjNWIiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaW5rLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTmF2LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL091dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Bob3RvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QaG90b0dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JvdXRlcy9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRlL2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBpY29zdGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByZWFjdC1yZW5kZXItdG8tc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2NvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZmV0Y2hcIiJdLCJuYW1lcyI6WyJBcHAiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwic3RhdGUiLCJMaW5rIiwiaHJlZiIsImh5ZHJhdGUiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkxvZ28iLCJoZWlnaHQiLCJ3aWR0aCIsIk5hdiIsIm1hcmdpblJpZ2h0IiwiT3V0ZXIiLCJQaG90b0NhcmQiLCJwaG90byIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZmlsZSIsInVybCIsInBob3RvcyIsIm1hcCIsInAiLCJ0aW1lb3V0IiwicXVlcnkiLCJ2YWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJfX2FwaV9fIiwidGhlbiIsInJlcyIsImpzb24iLCJsZW5ndGgiLCJwYXRoIiwiY29tcG9uZW50Iiwib3B0aW9ucyIsInRpdGxlIiwiT2JqZWN0IiwiYXNzaWduIiwiUFJPRCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIkVORFBPSU5UIiwiYXBwIiwidXNlIiwic3RhdGljIiwiY2FjaGUiLCJnZXRQaG90b3MiLCJnZXQiLCJyZXEiLCJyZXNvbHZlIiwib3JpZ2luYWxVcmwiLCJDb21wIiwicGFyYW1zIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNldCIsImxpc3RlbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUEr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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7O0FDdkx0Qyx3Qzs7Ozs7OztBQ0FBLG9DOzs7Ozs7O0FDQUEsdUM7Ozs7Ozs7QUNBQSxzQzs7Ozs7OztBQ0FBLG1DOzs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7QUNBQSxvQzs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkZjdjYzNjZGE1NmI1OWFhOGM1YiIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcbmltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL05hdi5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwICh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxOYXYgLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9BcHAuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5pbXBvcnQgY29ubmVjdCBmcm9tICdzdGF0ZS9jb25uZWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvblxufSkpKFxuICBmdW5jdGlvbiBMaW5rICh7IGhyZWYsIGNoaWxkcmVuLCBoeWRyYXRlLCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e2hyZWZ9IHsuLi5wcm9wc30gb25DbGljaz17ZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBoeWRyYXRlKHsgbG9jYXRpb246IGhyZWYgfSkoKVxuICAgICAgfX0+e2NoaWxkcmVufTwvYT5cbiAgICApXG4gIH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0xpbmsuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28gKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyBjbGFzc05hbWU9J2xvZ28nIHdpZHRoPScyNicgaGVpZ2h0PScxMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjYgMTInIHN0eWxlPXt7XG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgd2lkdGg6ICcyLjFlbSdcbiAgICB9fT5cbiAgICAgIDxwYXRoIGQ9J002LjU1MjYgMy4zMjI5Yy0uMDc1LS41MzEtLjMwNTEtLjk0ODMtLjY5MDctMS4yNTE4LS4zODU1LS4zMDM0LS45MDAyLS40NTUyLTEuNTQ0LS40NTUyLS42NjY0IDAtMS4xOTIzLjE0OTktMS41Nzc4LjQ0OTUtLjM4NTYuMjk5Ny0uNTc4NC42OTIzLS41Nzg0IDEuMTc3OCAwIC40MjExLjE3Ni43NjYzLjUyNzggMS4wMzU2LjM1MTkuMjY5My44ODUzLjUxMDIgMS42MDAzLjcyMjZsLjg3MDMuMjU2YzEuMDg1NS4zMjYzIDEuOTA3MS43NDM1IDIuNDY0OSAxLjI1MTguNTU3Ny41MDgzLjgzNjYgMS4xODkyLjgzNjYgMi4wNDI3IDAgLjY1MjUtLjE1NzIgMS4yMzg1LS40NzE2IDEuNzU4Mi0uMzE0NS41MTk3LS43ODI0LjkzMTItMS40MDM4IDEuMjM0N0M1Ljk2NSAxMS44NDgzIDUuMTk1NiAxMiA0LjI3ODUgMTJjLS43Nzg2IDAtMS40ODYtLjEzNTYtMi4xMjI0LS40MDY4LS42MzYzLS4yNzEyLTEuMTQ3My0uNjY4Ni0xLjUzMjgtMS4xOTJDLjIzNzcgOS44Nzc2LjAyOTkgOS4yNDIyIDAgOC40OTVoMS44NDE3Yy4wNTk5LjYxMDcuMzE3MiAxLjA3NzMuNzcyIDEuMzk5Ny40NTQ4LjMyMjUgMS4wMzc4LjQ4MzcgMS43NDkuNDgzNy43IDAgMS4yNTQtLjE2NzkgMS42NjItLjUwMzYuNDA4LS4zMzU3LjYxMi0uNzUuNjEyLTEuMjQzMiAwLS40NC0uMTc1LS44MDYtLjUyNS0xLjA5ODItLjM1LS4yOTItLjkzMS0uNTYxNC0xLjc0MzMtLjgwOGwtLjk5OTUtLjI5MDFDMi40Mjk0IDYuMTU4MyAxLjY4NzMgNS43OCAxLjE0MjYgNS4zLjU5OCA0LjgyMDMuMzI1NiA0LjE0MDQuMzI1NiAzLjI2MDNjMC0uNjU2Mi4xNzc5LTEuMjI5LjUzMzUtMS43MTgzLjM1NTYtLjQ4OTQuODM5NC0uODY4NyAxLjQ1MTQtMS4xMzhDMi45MjI1LjEzNDcgMy42MTA0IDAgNC4zNzQgMGMuNzcxIDAgMS40NTE0LjE0MDMgMi4wNDEuNDIxLjU4OTYuMjgwOCAxLjA1NTYuNjcwNSAxLjM5OCAxLjE2OTMuMzQyNi40OTg4LjUyNSAxLjA3NjQuNTQ3NSAxLjczMjZoLTEuODA4em05Ljc5OTkgMGMtLjA3NDktLjUzMS0uMzA1MS0uOTQ4My0uNjkwNy0xLjI1MTgtLjM4NTUtLjMwMzQtLjkwMDItLjQ1NTItMS41NDQtLjQ1NTItLjY2NjMgMC0xLjE5MjMuMTQ5OS0xLjU3NzguNDQ5NS0uMzg1Ni4yOTk3LS41Nzg0LjY5MjMtLjU3ODQgMS4xNzc4IDAgLjQyMTEuMTc2Ljc2NjMuNTI3OCAxLjAzNTYuMzUyLjI2OTMuODg1My41MTAyIDEuNjAwMy43MjI2bC44NzAzLjI1NmMxLjA4NTUuMzI2MyAxLjkwNzIuNzQzNSAyLjQ2NSAxLjI1MTguNTU3Ny41MDgzLjgzNjUgMS4xODkyLjgzNjUgMi4wNDI3IDAgLjY1MjUtLjE1NzIgMS4yMzg1LS40NzE2IDEuNzU4Mi0uMzE0NS41MTk3LS43ODI0LjkzMTItMS40MDM3IDEuMjM0Ny0uNjIxNC4zMDM1LTEuMzkwNy40NTUyLTIuMzA3OC40NTUyLS43Nzg1IDAtMS40ODYtLjEzNTYtMi4xMjI0LS40MDY4LS42MzYzLS4yNzEyLTEuMTQ3My0uNjY4Ni0xLjUzMjgtMS4xOTItLjM4NTYtLjUyMzUtLjU5MzMtMS4xNTg5LS42MjMzLTEuOTA2MmgxLjg0MTdjLjA1OTkuNjEwNy4zMTcyIDEuMDc3My43NzIgMS4zOTk3LjQ1NDguMzIyNSAxLjAzNzkuNDgzNyAxLjc0OS40ODM3LjcgMCAxLjI1NC0uMTY3OSAxLjY2Mi0uNTAzNi40MDgtLjMzNTcuNjEyLS43NS42MTItMS4yNDMyIDAtLjQ0LS4xNzQ5LS44MDYtLjUyNDktMS4wOTgyLS4zNS0uMjkyLS45MzExLS41NjE0LTEuNzQzNC0uODA4bC0uOTk5NS0uMjkwMWMtLjkzOTUtLjI3Ny0xLjY4MTYtLjY1NTMtMi4yMjYzLTEuMTM1Mi0uNTQ0Ni0uNDc5OC0uODE3LTEuMTU5Ny0uODE3LTIuMDM5OCAwLS42NTYyLjE3NzktMS4yMjkuNTMzNS0xLjcxODMuMzU1Ni0uNDg5NC44Mzk0LS44Njg3IDEuNDUxNC0xLjEzOEMxMi43MjI0LjEzNDcgMTMuNDEwMyAwIDE0LjE3NCAwYy43NzExIDAgMS40NTE0LjE0MDMgMi4wNDEuNDIxLjU4OTYuMjgwOCAxLjA1NTYuNjcwNSAxLjM5ODEgMS4xNjkzLjM0MjUuNDk4OC41MjUgMS4wNzY0LjU0NzUgMS43MzI2aC0xLjgwOHptNC43Mjk3IDguNjQ4N2MtLjMxNDUgMC0uNTgzLS4xMTM4LS44MDU4LS4zNDE0LS4yMjI3LS4yMjc2LS4zMzQtLjUwMjYtLjMzNC0uODI1IDAtLjMyMjUuMTEyMi0uNTkzNy4zMzY4LS44MTM3LjIyNDYtLjIyLjQ5MjMtLjMzLjgwMy0uMzMuMzE4MSAwIC41ODg2LjExMTkuODExMy4zMzU3cy4zMzQxLjQ5My4zMzQxLjgwOGMwIC4zMjI0LS4xMTE0LjU5NzQtLjMzNC44MjUtLjIyMjguMjI3Ni0uNDkzMy4zNDE0LS44MTE0LjM0MTR6bTIuMTAyOS02LjY4MmgtMS4yMjc4djIuNzQ2M2gtMS43MzY5Vi4yNjczaDIuOTY0N0MyNC45ODE4LjI2NzMgMjYgMS4zNTk3IDI2IDIuODQ2N2MwIDEuNDcxOC0xLjAxODIgMi40NDI4LTIuODE1IDIuNDQyOHptLTEuMjI3OC0zLjU2NTdWMy44NDhoMS4yMjc4Yy43Nzg2LS4wMTUyIDEuMDc4LS40ODU1IDEuMDc4LTEuMDc3MyAwLS41NjE0LS4yOTk0LTEuMDYyLTEuMDc4LTEuMDQ3aC0xLjIyNzh6JyBmaWxsPSdjdXJyZW50Q29sb3InIGZpbGxSdWxlPSdldmVub2RkJy8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL0xvZ28uanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5pbXBvcnQgY29ubmVjdCBmcm9tICdzdGF0ZS9jb25uZWN0J1xuaW1wb3J0IE91dGVyIGZyb20gJ2NvbXBvbmVudHMvT3V0ZXIuanMnXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL0xvZ28uanMnXG5pbXBvcnQgTGluayBmcm9tICdjb21wb25lbnRzL0xpbmsuanMnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvblxufSkpKFxuICBmdW5jdGlvbiBOYXYgKHsgbG9jYXRpb24sIGh5ZHJhdGUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J25hdiBmaXggdG9wIGxlZnQgcmlnaHQgeCB6MSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdl9faW5uZXInPlxuICAgICAgICAgICAgPE91dGVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZiBqY2IgYWljJz5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdl9fbG9nbycgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdmIGFpYyBqY2UnPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2RvbmF0ZScgY2xhc3NOYW1lPSdjYXBzIGg2JyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzJlbScgfX0+RG9uYXRlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0JyBjbGFzc05hbWU9J2NhcHMgaDYnPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvT3V0ZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X19zZWFyY2gnPlxuICAgICAgICAgICAgPE91dGVyPlxuICAgICAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgICAgICA8L091dGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLXNwYWNlcicgLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApXG4gIH1cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL05hdi5qcyIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3V0ZXIgKHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdvdXRlciByZWwnPntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvT3V0ZXIuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBob3RvQ2FyZCAoeyBwaG90byB9KSB7XG4gIHJldHVybiAoXG4gICAgPGZpZ3VyZSBjbGFzc05hbWU9J3Bob3RvLWNhcmQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Bob3RvLWNhcmRfX2ltZyByZWwnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCMke3Bob3RvLmNvbG9yfWAgfX0+XG4gICAgICAgIDxpbWcgc3JjPXtwaG90by5maWxlLnVybCArICc/Zm09anBnJmZsPXByb2dyZXNzaXZlJnc9ODAwJ30gY2xhc3NOYW1lPSd4IHkgYWJzIGZpbGwnIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2ZpZ3VyZT5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUGhvdG9DYXJkLmpzIiwiLyoqIEBqc3ggcHJlYWN0LmggKi9cbmltcG9ydCBwcmVhY3QgZnJvbSAncHJlYWN0J1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnc3RhdGUvY29ubmVjdC5qcydcbmltcG9ydCBPdXRlciBmcm9tICdjb21wb25lbnRzL091dGVyLmpzJ1xuaW1wb3J0IFBob3RvQ2FyZCBmcm9tICdjb21wb25lbnRzL1Bob3RvQ2FyZC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICBwaG90b3M6IHN0YXRlLnBob3Rvc1xufSkpKFxuICBwcm9wcyA9PiAoXG4gICAgPE91dGVyPlxuICAgICAgPHVsIGNsYXNzTmFtZT0ncGhvdG8tZ3JpZCBmIGFpYyBmdyc+XG4gICAgICAgIHtwcm9wcy5waG90b3MubWFwKHAgPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3Bob3RvLWdyaWRfX3Bob3RvJz5cbiAgICAgICAgICAgIDxQaG90b0NhcmQgcGhvdG89e3B9IC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvT3V0ZXI+XG4gIClcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1Bob3RvR3JpZC5qcyIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcbmltcG9ydCBjb25uZWN0IGZyb20gJ3N0YXRlL2Nvbm5lY3QuanMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCdcblxubGV0IHRpbWVvdXRcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICBxdWVyeTogc3RhdGUucXVlcnksXG4gIHBob3Rvczogc3RhdGUucGhvdG9zXG59KSkoXG4gICh7IHBob3RvcywgcXVlcnksIGh5ZHJhdGUgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2ggZiBhaWMgamNiJz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPSdzZWFyY2gnXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgc29tZXRoaW5nJ1xuICAgICAgICBvbktleXVwPXtlID0+IHtcbiAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgIGh5ZHJhdGUoeyBxdWVyeTogdmFsLCBsb2NhdGlvbjogdmFsIH0pXG4gICAgICAgICAgdGltZW91dCAmJiBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmZXRjaChgJHt3aW5kb3cuX19hcGlfX30vcGhvdG9zP3E9JHt2YWx9YClcbiAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgIC50aGVuKHBob3RvcyA9PiB7XG4gICAgICAgICAgICAgICAgaHlkcmF0ZSh7IHBob3RvcyB9KSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9fSAvPlxuXG4gICAgICA8cCBjbGFzc05hbWU9J2N3MiBteTAnPntwaG90b3MubGVuZ3RofSBwaG90b3M8L3A+XG4gICAgPC9kaXY+XG4gIClcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1NlYXJjaEJhci5qcyIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcbmltcG9ydCB7IHJvdXRlciwgcm91dGUgfSBmcm9tICdzY291dGVyJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICdyb3V0ZXMvSG9tZS5qcydcbmltcG9ydCBBYm91dCBmcm9tICdyb3V0ZXMvQWJvdXQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcihcbiAgQWJvdXQsXG4gIEhvbWUsXG4gIHJvdXRlKHtcbiAgICBwYXRoOiAnKicsXG4gICAgY29tcG9uZW50OiBwcm9wcyA9PiA8aDE+NDA0PC9oMT5cbiAgfSlcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yb3V0ZXIuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gJ3Njb3V0ZXInXG5pbXBvcnQgQXBwIGZyb20gJ2FwcC9BcHAuanMnXG5cbmNvbnN0IHBhdGggPSAnL2Fib3V0J1xuXG5mdW5jdGlvbiBjb21wb25lbnQgKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEFwcD5cbiAgICAgIDxoMT5BYm91dDwvaDE+XG4gICAgPC9BcHA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGUoeyBwYXRoLCBjb21wb25lbnQgfSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yb3V0ZXMvQWJvdXQuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gJ3Njb3V0ZXInXG5pbXBvcnQgQXBwIGZyb20gJ2FwcC9BcHAuanMnXG5pbXBvcnQgUGhvdG9HcmlkIGZyb20gJ2NvbXBvbmVudHMvUGhvdG9HcmlkLmpzJ1xuXG5jb25zdCBwYXRoID0gJzpxdWVyeSdcblxuZnVuY3Rpb24gY29tcG9uZW50IChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcHA+XG4gICAgICA8UGhvdG9HcmlkIC8+XG4gICAgPC9BcHA+XG4gIClcbn1cblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgdGl0bGU6IHN0YXRlID0+IChzdGF0ZS5xdWVyeSA/IChcbiAgICBgJHtzdGF0ZS5xdWVyeX0gfCBgXG4gICkgOiAnJykgKyAnU3RhcnR1cCBTdG9jayBQaG90b3MnXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlKHsgcGF0aCwgY29tcG9uZW50LCBvcHRpb25zIH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcm91dGVzL0hvbWUuanMiLCIvKiogQGpzeCBoICovXG5pbXBvcnQgeyBoIH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0YXRlL3N0b3JlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCAobWFwID0gc3RhdGUgPT4gc3RhdGUpID0+IENvbXAgPT4gcHJvcHMgPT4gKFxuICA8Q29tcCB7Li4uT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIG1hcChzdG9yZS5zdGF0ZSkpfSBoeWRyYXRlPXtzdG9yZS5oeWRyYXRlfSAvPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3N0YXRlL2Nvbm5lY3QuanMiLCJpbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAncGljb3N0YXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XG4gIHF1ZXJ5OiAnJ1xufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zdGF0ZS9zdG9yZS5qcyIsIi8qKiBAanN4IGggKi9cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nXG5cbmltcG9ydCB7IGggfSBmcm9tICdwcmVhY3QnXG5pbXBvcnQgcmVuZGVyIGZyb20gJ3ByZWFjdC1yZW5kZXItdG8tc3RyaW5nJ1xuaW1wb3J0IHJvdXRlciBmcm9tICdhcHAvcm91dGVyLmpzJ1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0YXRlL3N0b3JlLmpzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnXG5cbmNvbnN0IFBST0QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5jb25zdCBFTkRQT0lOVCA9IFBST0QgPyAnaHR0cHM6Ly9zc3AtYXBpLm5vdy5zaCcgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmFwcC51c2UoY29tcHJlc3Npb24oKSlcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJy4vcHVibGljJykpXG5cbmxldCBjYWNoZVxuZnVuY3Rpb24gZ2V0UGhvdG9zIChxdWVyeSkge1xuICBpZiAocXVlcnkpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7RU5EUE9JTlR9L3Bob3Rvcz9xPSR7cXVlcnl9YClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICB9XG4gIGlmICghY2FjaGUpIHtcbiAgICBjYWNoZSA9IG51bGxcbiAgICBjYWNoZSA9IGZldGNoKGAke0VORFBPSU5UfS9waG90b3NgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIH1cbiAgcmV0dXJuIGNhY2hlXG59XG5cbmFwcC5nZXQoJyonLCAocmVxLCByZXMpID0+IHtcbiAgcm91dGVyLnJlc29sdmUocmVxLm9yaWdpbmFsVXJsKS50aGVuKCh7IGNvbXBvbmVudDogQ29tcCwgcGFyYW1zLCBvcHRpb25zIH0pID0+IHtcbiAgICBnZXRQaG90b3MocGFyYW1zLnF1ZXJ5KS50aGVuKHBob3RvcyA9PiB7XG4gICAgICBzdG9yZS5oeWRyYXRlKHsgcGhvdG9zIH0pXG5cbiAgICAgIHJlcy5zZW5kKGBcbiAgICAgICAgPGh0bWw+XG4gICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+U3RhcnR1cCBTdG9jayBQaG90b3M8L3RpdGxlPlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9Jy9pbmRleC5qcycgZGVmZXI+PC9zY3JpcHQ+XG4gICAgICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy9zdHlsZS5jc3MnLz5cbiAgICAgICAgICAgIDxzY3JpcHQ+d2luZG93Ll9faHlkcmF0ZV9fID0gJHtKU09OLnN0cmluZ2lmeShzdG9yZS5zdGF0ZSl9PC9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0PndpbmRvdy5fX2FwaV9fID0gXCIke0VORFBPSU5UfVwiPC9zY3JpcHQ+XG4gICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgJHtyZW5kZXIoPENvbXAgLz4pfVxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICAgYClcblxuICAgICAgc3RvcmUucmVzZXQoKVxuICAgIH0pXG4gIH0pXG59KVxuXG5hcHAubGlzdGVuKDMwMDApXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IGNvbXByZXNzaW9uXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IGV4cHJlc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtZmV0Y2hcIlxuLy8gbW9kdWxlIGlkID0gbm9kZS1mZXRjaFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwaWNvc3RhdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwaWNvc3RhdGVcIlxuLy8gbW9kdWxlIGlkID0gcGljb3N0YXRlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSBwcmVhY3Rcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJlYWN0LXJlbmRlci10by1zdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmVhY3QtcmVuZGVyLXRvLXN0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSBwcmVhY3QtcmVuZGVyLXRvLXN0cmluZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzY291dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2NvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSBzY291dGVyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1bmZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IHVuZmV0Y2hcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==