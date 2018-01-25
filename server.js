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
        (0, _unfetch.default)("http://localhost:3001/photos?q=".concat(val)).then(function (res) {
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
var app = (0, _express.default)();
app.use((0, _compression.default)());
app.use(_express.default.static('./public'));
var cache;

function getPhotos(query) {
  if (query) {
    return (0, _nodeFetch.default)(PROD ? "https://ssp-api.now.sh/photos?q=".concat(query) : "http://localhost:3001/photos?q=".concat(query)).then(function (res) {
      return res.json();
    });
  }

  if (!cache) {
    cache = null;
    cache = (0, _nodeFetch.default)(PROD ? 'https://ssp-api.now.sh/photos' : 'http://localhost:3001/photos').then(function (res) {
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

      res.send("\n        <html>\n          <head>\n            <title>Startup Stock Photos</title>\n            <script src='/index.js' defer></script>\n            <link rel='stylesheet' href='/style.css'/>\n            <script>window.__hydrate__ = ".concat(JSON.stringify(_store.default.state), "</script>\n          </head>\n          <body>\n            ").concat((0, _preactRenderToString.default)((0, _preact.h)(Comp, null)), "\n          </body>\n        </html>\n      "));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjY3ZDI1OWZjZWUzZGE1YzU1YWEiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaW5rLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTmF2LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL091dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Bob3RvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QaG90b0dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JvdXRlcy9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRlL2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0YXRlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBpY29zdGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByZWFjdC1yZW5kZXItdG8tc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2NvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZmV0Y2hcIiJdLCJuYW1lcyI6WyJBcHAiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwic3RhdGUiLCJMaW5rIiwiaHJlZiIsImh5ZHJhdGUiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkxvZ28iLCJoZWlnaHQiLCJ3aWR0aCIsIk5hdiIsIm1hcmdpblJpZ2h0IiwiT3V0ZXIiLCJQaG90b0NhcmQiLCJwaG90byIsImZpbGUiLCJ1cmwiLCJwaG90b3MiLCJtYXAiLCJwIiwidGltZW91dCIsInF1ZXJ5IiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGhlbiIsInJlcyIsImpzb24iLCJsZW5ndGgiLCJwYXRoIiwiY29tcG9uZW50Iiwib3B0aW9ucyIsInRpdGxlIiwiT2JqZWN0IiwiYXNzaWduIiwiUFJPRCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsInVzZSIsInN0YXRpYyIsImNhY2hlIiwiZ2V0UGhvdG9zIiwiZ2V0IiwicmVxIiwicmVzb2x2ZSIsIm9yaWdpbmFsVXJsIiwiQ29tcCIsInBhcmFtcyIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzZXQiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTs7QUFDQTs7OztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7QUN2THRDLHdDOzs7Ozs7O0FDQUEsb0M7Ozs7Ozs7QUNBQSx1Qzs7Ozs7OztBQ0FBLHNDOzs7Ozs7O0FDQUEsbUM7Ozs7Ozs7QUNBQSxvRDs7Ozs7OztBQ0FBLG9DOzs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY2N2QyNTlmY2VlM2RhNWM1NWFhIiwiLyoqIEBqc3ggcHJlYWN0LmggKi9cbmltcG9ydCBwcmVhY3QgZnJvbSAncHJlYWN0J1xuaW1wb3J0IE5hdiBmcm9tICcuL2NvbXBvbmVudHMvTmF2LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAgKHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPE5hdiAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL0FwcC5qcyIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcbmltcG9ydCBjb25uZWN0IGZyb20gJ3N0YXRlL2Nvbm5lY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uXG59KSkoXG4gIGZ1bmN0aW9uIExpbmsgKHsgaHJlZiwgY2hpbGRyZW4sIGh5ZHJhdGUsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgaHJlZj17aHJlZn0gey4uLnByb3BzfSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGh5ZHJhdGUoeyBsb2NhdGlvbjogaHJlZiB9KSgpXG4gICAgICB9fT57Y2hpbGRyZW59PC9hPlxuICAgIClcbiAgfVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvTGluay5qcyIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIGNsYXNzTmFtZT0nbG9nbycgd2lkdGg9JzI2JyBoZWlnaHQ9JzEyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNiAxMicgc3R5bGU9e3tcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB3aWR0aDogJzIuMWVtJ1xuICAgIH19PlxuICAgICAgPHBhdGggZD0nTTYuNTUyNiAzLjMyMjljLS4wNzUtLjUzMS0uMzA1MS0uOTQ4My0uNjkwNy0xLjI1MTgtLjM4NTUtLjMwMzQtLjkwMDItLjQ1NTItMS41NDQtLjQ1NTItLjY2NjQgMC0xLjE5MjMuMTQ5OS0xLjU3NzguNDQ5NS0uMzg1Ni4yOTk3LS41Nzg0LjY5MjMtLjU3ODQgMS4xNzc4IDAgLjQyMTEuMTc2Ljc2NjMuNTI3OCAxLjAzNTYuMzUxOS4yNjkzLjg4NTMuNTEwMiAxLjYwMDMuNzIyNmwuODcwMy4yNTZjMS4wODU1LjMyNjMgMS45MDcxLjc0MzUgMi40NjQ5IDEuMjUxOC41NTc3LjUwODMuODM2NiAxLjE4OTIuODM2NiAyLjA0MjcgMCAuNjUyNS0uMTU3MiAxLjIzODUtLjQ3MTYgMS43NTgyLS4zMTQ1LjUxOTctLjc4MjQuOTMxMi0xLjQwMzggMS4yMzQ3QzUuOTY1IDExLjg0ODMgNS4xOTU2IDEyIDQuMjc4NSAxMmMtLjc3ODYgMC0xLjQ4Ni0uMTM1Ni0yLjEyMjQtLjQwNjgtLjYzNjMtLjI3MTItMS4xNDczLS42Njg2LTEuNTMyOC0xLjE5MkMuMjM3NyA5Ljg3NzYuMDI5OSA5LjI0MjIgMCA4LjQ5NWgxLjg0MTdjLjA1OTkuNjEwNy4zMTcyIDEuMDc3My43NzIgMS4zOTk3LjQ1NDguMzIyNSAxLjAzNzguNDgzNyAxLjc0OS40ODM3LjcgMCAxLjI1NC0uMTY3OSAxLjY2Mi0uNTAzNi40MDgtLjMzNTcuNjEyLS43NS42MTItMS4yNDMyIDAtLjQ0LS4xNzUtLjgwNi0uNTI1LTEuMDk4Mi0uMzUtLjI5Mi0uOTMxLS41NjE0LTEuNzQzMy0uODA4bC0uOTk5NS0uMjkwMUMyLjQyOTQgNi4xNTgzIDEuNjg3MyA1Ljc4IDEuMTQyNiA1LjMuNTk4IDQuODIwMy4zMjU2IDQuMTQwNC4zMjU2IDMuMjYwM2MwLS42NTYyLjE3NzktMS4yMjkuNTMzNS0xLjcxODMuMzU1Ni0uNDg5NC44Mzk0LS44Njg3IDEuNDUxNC0xLjEzOEMyLjkyMjUuMTM0NyAzLjYxMDQgMCA0LjM3NCAwYy43NzEgMCAxLjQ1MTQuMTQwMyAyLjA0MS40MjEuNTg5Ni4yODA4IDEuMDU1Ni42NzA1IDEuMzk4IDEuMTY5My4zNDI2LjQ5ODguNTI1IDEuMDc2NC41NDc1IDEuNzMyNmgtMS44MDh6bTkuNzk5OSAwYy0uMDc0OS0uNTMxLS4zMDUxLS45NDgzLS42OTA3LTEuMjUxOC0uMzg1NS0uMzAzNC0uOTAwMi0uNDU1Mi0xLjU0NC0uNDU1Mi0uNjY2MyAwLTEuMTkyMy4xNDk5LTEuNTc3OC40NDk1LS4zODU2LjI5OTctLjU3ODQuNjkyMy0uNTc4NCAxLjE3NzggMCAuNDIxMS4xNzYuNzY2My41Mjc4IDEuMDM1Ni4zNTIuMjY5My44ODUzLjUxMDIgMS42MDAzLjcyMjZsLjg3MDMuMjU2YzEuMDg1NS4zMjYzIDEuOTA3Mi43NDM1IDIuNDY1IDEuMjUxOC41NTc3LjUwODMuODM2NSAxLjE4OTIuODM2NSAyLjA0MjcgMCAuNjUyNS0uMTU3MiAxLjIzODUtLjQ3MTYgMS43NTgyLS4zMTQ1LjUxOTctLjc4MjQuOTMxMi0xLjQwMzcgMS4yMzQ3LS42MjE0LjMwMzUtMS4zOTA3LjQ1NTItMi4zMDc4LjQ1NTItLjc3ODUgMC0xLjQ4Ni0uMTM1Ni0yLjEyMjQtLjQwNjgtLjYzNjMtLjI3MTItMS4xNDczLS42Njg2LTEuNTMyOC0xLjE5Mi0uMzg1Ni0uNTIzNS0uNTkzMy0xLjE1ODktLjYyMzMtMS45MDYyaDEuODQxN2MuMDU5OS42MTA3LjMxNzIgMS4wNzczLjc3MiAxLjM5OTcuNDU0OC4zMjI1IDEuMDM3OS40ODM3IDEuNzQ5LjQ4MzcuNyAwIDEuMjU0LS4xNjc5IDEuNjYyLS41MDM2LjQwOC0uMzM1Ny42MTItLjc1LjYxMi0xLjI0MzIgMC0uNDQtLjE3NDktLjgwNi0uNTI0OS0xLjA5ODItLjM1LS4yOTItLjkzMTEtLjU2MTQtMS43NDM0LS44MDhsLS45OTk1LS4yOTAxYy0uOTM5NS0uMjc3LTEuNjgxNi0uNjU1My0yLjIyNjMtMS4xMzUyLS41NDQ2LS40Nzk4LS44MTctMS4xNTk3LS44MTctMi4wMzk4IDAtLjY1NjIuMTc3OS0xLjIyOS41MzM1LTEuNzE4My4zNTU2LS40ODk0LjgzOTQtLjg2ODcgMS40NTE0LTEuMTM4QzEyLjcyMjQuMTM0NyAxMy40MTAzIDAgMTQuMTc0IDBjLjc3MTEgMCAxLjQ1MTQuMTQwMyAyLjA0MS40MjEuNTg5Ni4yODA4IDEuMDU1Ni42NzA1IDEuMzk4MSAxLjE2OTMuMzQyNS40OTg4LjUyNSAxLjA3NjQuNTQ3NSAxLjczMjZoLTEuODA4em00LjcyOTcgOC42NDg3Yy0uMzE0NSAwLS41ODMtLjExMzgtLjgwNTgtLjM0MTQtLjIyMjctLjIyNzYtLjMzNC0uNTAyNi0uMzM0LS44MjUgMC0uMzIyNS4xMTIyLS41OTM3LjMzNjgtLjgxMzcuMjI0Ni0uMjIuNDkyMy0uMzMuODAzLS4zMy4zMTgxIDAgLjU4ODYuMTExOS44MTEzLjMzNTdzLjMzNDEuNDkzLjMzNDEuODA4YzAgLjMyMjQtLjExMTQuNTk3NC0uMzM0LjgyNS0uMjIyOC4yMjc2LS40OTMzLjM0MTQtLjgxMTQuMzQxNHptMi4xMDI5LTYuNjgyaC0xLjIyNzh2Mi43NDYzaC0xLjczNjlWLjI2NzNoMi45NjQ3QzI0Ljk4MTguMjY3MyAyNiAxLjM1OTcgMjYgMi44NDY3YzAgMS40NzE4LTEuMDE4MiAyLjQ0MjgtMi44MTUgMi40NDI4em0tMS4yMjc4LTMuNTY1N1YzLjg0OGgxLjIyNzhjLjc3ODYtLjAxNTIgMS4wNzgtLjQ4NTUgMS4wNzgtMS4wNzczIDAtLjU2MTQtLjI5OTQtMS4wNjItMS4wNzgtMS4wNDdoLTEuMjI3OHonIGZpbGw9J2N1cnJlbnRDb2xvcicgZmlsbFJ1bGU9J2V2ZW5vZGQnLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvTG9nby5qcyIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcbmltcG9ydCBjb25uZWN0IGZyb20gJ3N0YXRlL2Nvbm5lY3QnXG5pbXBvcnQgT3V0ZXIgZnJvbSAnY29tcG9uZW50cy9PdXRlci5qcydcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvTG9nby5qcydcbmltcG9ydCBMaW5rIGZyb20gJ2NvbXBvbmVudHMvTGluay5qcydcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnY29tcG9uZW50cy9TZWFyY2hCYXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uXG59KSkoXG4gIGZ1bmN0aW9uIE5hdiAoeyBsb2NhdGlvbiwgaHlkcmF0ZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nbmF2IGZpeCB0b3AgbGVmdCByaWdodCB4IHoxJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2X19pbm5lcic+XG4gICAgICAgICAgICA8T3V0ZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmIGpjYiBhaWMnPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2X19sb2dvJyBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J2YgYWljIGpjZSc+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvZG9uYXRlJyBjbGFzc05hbWU9J2NhcHMgaDYnIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMmVtJyB9fT5Eb25hdGU8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnIGNsYXNzTmFtZT0nY2FwcyBoNic+QWJvdXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9PdXRlcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZfX3NlYXJjaCc+XG4gICAgICAgICAgICA8T3V0ZXI+XG4gICAgICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgICAgIDwvT3V0ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItc3BhY2VyJyAvPlxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfVxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvTmF2LmpzIiwiLyoqIEBqc3ggcHJlYWN0LmggKi9cbmltcG9ydCBwcmVhY3QgZnJvbSAncHJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdXRlciAoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J291dGVyIHJlbCc+e2NoaWxkcmVufTwvZGl2PlxuICApXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9PdXRlci5qcyIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvdG9DYXJkICh7IHBob3RvIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZmlndXJlIGNsYXNzTmFtZT0ncGhvdG8tY2FyZCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGhvdG8tY2FyZF9faW1nIHJlbCc+XG4gICAgICAgIDxpbWcgc3JjPXtwaG90by5maWxlLnVybCArICc/Zm09anBnJmZsPXByb2dyZXNzaXZlJnc9ODAwJ30gY2xhc3NOYW1lPSd4IHkgYWJzIGZpbGwnIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2ZpZ3VyZT5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUGhvdG9DYXJkLmpzIiwiLyoqIEBqc3ggcHJlYWN0LmggKi9cbmltcG9ydCBwcmVhY3QgZnJvbSAncHJlYWN0J1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnc3RhdGUvY29ubmVjdC5qcydcbmltcG9ydCBPdXRlciBmcm9tICdjb21wb25lbnRzL091dGVyLmpzJ1xuaW1wb3J0IFBob3RvQ2FyZCBmcm9tICdjb21wb25lbnRzL1Bob3RvQ2FyZC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICBwaG90b3M6IHN0YXRlLnBob3Rvc1xufSkpKFxuICBwcm9wcyA9PiAoXG4gICAgPE91dGVyPlxuICAgICAgPHVsIGNsYXNzTmFtZT0ncGhvdG8tZ3JpZCBmIGFpYyBmdyc+XG4gICAgICAgIHtwcm9wcy5waG90b3MubWFwKHAgPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3Bob3RvLWdyaWRfX3Bob3RvJz5cbiAgICAgICAgICAgIDxQaG90b0NhcmQgcGhvdG89e3B9IC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvT3V0ZXI+XG4gIClcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1Bob3RvR3JpZC5qcyIsIi8qKiBAanN4IHByZWFjdC5oICovXG5pbXBvcnQgcHJlYWN0IGZyb20gJ3ByZWFjdCdcbmltcG9ydCBjb25uZWN0IGZyb20gJ3N0YXRlL2Nvbm5lY3QuanMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCdcblxubGV0IHRpbWVvdXRcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICBxdWVyeTogc3RhdGUucXVlcnksXG4gIHBob3Rvczogc3RhdGUucGhvdG9zXG59KSkoXG4gICh7IHBob3RvcywgcXVlcnksIGh5ZHJhdGUgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2ggZiBhaWMgamNiJz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPSdzZWFyY2gnXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgc29tZXRoaW5nJ1xuICAgICAgICBvbktleXVwPXtlID0+IHtcbiAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgIGh5ZHJhdGUoeyBxdWVyeTogdmFsLCBsb2NhdGlvbjogdmFsIH0pXG4gICAgICAgICAgdGltZW91dCAmJiBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3Bob3Rvcz9xPSR7dmFsfWApXG4gICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAudGhlbihwaG90b3MgPT4ge1xuICAgICAgICAgICAgICAgIGh5ZHJhdGUoeyBwaG90b3MgfSkoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfX0gLz5cblxuICAgICAgPHAgY2xhc3NOYW1lPSdjdzIgbXkwJz57cGhvdG9zLmxlbmd0aH0gcGhvdG9zPC9wPlxuICAgIDwvZGl2PlxuICApXG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9TZWFyY2hCYXIuanMiLCIvKiogQGpzeCBwcmVhY3QuaCAqL1xuaW1wb3J0IHByZWFjdCBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyByb3V0ZXIsIHJvdXRlIH0gZnJvbSAnc2NvdXRlcidcblxuaW1wb3J0IEhvbWUgZnJvbSAncm91dGVzL0hvbWUuanMnXG5pbXBvcnQgQWJvdXQgZnJvbSAncm91dGVzL0Fib3V0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIoXG4gIEFib3V0LFxuICBIb21lLFxuICByb3V0ZSh7XG4gICAgcGF0aDogJyonLFxuICAgIGNvbXBvbmVudDogcHJvcHMgPT4gPGgxPjQwNDwvaDE+XG4gIH0pXG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcm91dGVyLmpzIiwiLyoqIEBqc3ggcHJlYWN0LmggKi9cbmltcG9ydCBwcmVhY3QgZnJvbSAncHJlYWN0J1xuaW1wb3J0IHsgcm91dGUgfSBmcm9tICdzY291dGVyJ1xuaW1wb3J0IEFwcCBmcm9tICdhcHAvQXBwLmpzJ1xuXG5jb25zdCBwYXRoID0gJy9hYm91dCdcblxuZnVuY3Rpb24gY29tcG9uZW50IChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcHA+XG4gICAgICA8aDE+QWJvdXQ8L2gxPlxuICAgIDwvQXBwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlKHsgcGF0aCwgY29tcG9uZW50IH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcm91dGVzL0Fib3V0LmpzIiwiLyoqIEBqc3ggcHJlYWN0LmggKi9cbmltcG9ydCBwcmVhY3QgZnJvbSAncHJlYWN0J1xuaW1wb3J0IHsgcm91dGUgfSBmcm9tICdzY291dGVyJ1xuaW1wb3J0IEFwcCBmcm9tICdhcHAvQXBwLmpzJ1xuaW1wb3J0IFBob3RvR3JpZCBmcm9tICdjb21wb25lbnRzL1Bob3RvR3JpZC5qcydcblxuY29uc3QgcGF0aCA9ICc6cXVlcnknXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPFBob3RvR3JpZCAvPlxuICAgIDwvQXBwPlxuICApXG59XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHRpdGxlOiBzdGF0ZSA9PiAoc3RhdGUucXVlcnkgPyAoXG4gICAgYCR7c3RhdGUucXVlcnl9IHwgYFxuICApIDogJycpICsgJ1N0YXJ0dXAgU3RvY2sgUGhvdG9zJ1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZSh7IHBhdGgsIGNvbXBvbmVudCwgb3B0aW9ucyB9KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JvdXRlcy9Ib21lLmpzIiwiLyoqIEBqc3ggaCAqL1xuaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCdcbmltcG9ydCBzdG9yZSBmcm9tICdzdGF0ZS9zdG9yZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgKG1hcCA9IHN0YXRlID0+IHN0YXRlKSA9PiBDb21wID0+IHByb3BzID0+IChcbiAgPENvbXAgey4uLk9iamVjdC5hc3NpZ24oe30sIHByb3BzLCBtYXAoc3RvcmUuc3RhdGUpKX0gaHlkcmF0ZT17c3RvcmUuaHlkcmF0ZX0gLz5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zdGF0ZS9jb25uZWN0LmpzIiwiaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJ3BpY29zdGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xuICBxdWVyeTogJydcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc3RhdGUvc3RvcmUuanMiLCIvKiogQGpzeCBoICovXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJ1xuXG5pbXBvcnQgeyBoIH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IHJlbmRlciBmcm9tICdwcmVhY3QtcmVuZGVyLXRvLXN0cmluZydcbmltcG9ydCByb3V0ZXIgZnJvbSAnYXBwL3JvdXRlci5qcydcbmltcG9ydCBzdG9yZSBmcm9tICdzdGF0ZS9zdG9yZS5qcydcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xuXG5jb25zdCBQUk9EID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmFwcC51c2UoY29tcHJlc3Npb24oKSlcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJy4vcHVibGljJykpXG5cbmxldCBjYWNoZVxuZnVuY3Rpb24gZ2V0UGhvdG9zIChxdWVyeSkge1xuICBpZiAocXVlcnkpIHtcbiAgICByZXR1cm4gZmV0Y2goUFJPRCA/IChcbiAgICAgIGBodHRwczovL3NzcC1hcGkubm93LnNoL3Bob3Rvcz9xPSR7cXVlcnl9YFxuICAgICkgOiAoXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAxL3Bob3Rvcz9xPSR7cXVlcnl9YFxuICAgICkpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIH1cbiAgaWYgKCFjYWNoZSkge1xuICAgIGNhY2hlID0gbnVsbFxuICAgIGNhY2hlID0gZmV0Y2goUFJPRCA/IChcbiAgICAgICdodHRwczovL3NzcC1hcGkubm93LnNoL3Bob3RvcydcbiAgICApIDogKFxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9waG90b3MnXG4gICAgKSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgfVxuICByZXR1cm4gY2FjaGVcbn1cblxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xuICByb3V0ZXIucmVzb2x2ZShyZXEub3JpZ2luYWxVcmwpLnRoZW4oKHsgY29tcG9uZW50OiBDb21wLCBwYXJhbXMsIG9wdGlvbnMgfSkgPT4ge1xuICAgIGdldFBob3RvcyhwYXJhbXMucXVlcnkpLnRoZW4ocGhvdG9zID0+IHtcbiAgICAgIHN0b3JlLmh5ZHJhdGUoeyBwaG90b3MgfSlcblxuICAgICAgcmVzLnNlbmQoYFxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5TdGFydHVwIFN0b2NrIFBob3RvczwvdGl0bGU+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz0nL2luZGV4LmpzJyBkZWZlcj48L3NjcmlwdD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nL3N0eWxlLmNzcycvPlxuICAgICAgICAgICAgPHNjcmlwdD53aW5kb3cuX19oeWRyYXRlX18gPSAke0pTT04uc3RyaW5naWZ5KHN0b3JlLnN0YXRlKX08L3NjcmlwdD5cbiAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAke3JlbmRlcig8Q29tcCAvPil9XG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+XG4gICAgICBgKVxuXG4gICAgICBzdG9yZS5yZXNldCgpXG4gICAgfSlcbiAgfSlcbn0pXG5cbmFwcC5saXN0ZW4oMzAwMClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gY29tcHJlc3Npb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gZXhwcmVzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSBub2RlLWZldGNoXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBpY29zdGF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBpY29zdGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSBwaWNvc3RhdGVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IHByZWFjdFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmVhY3QtcmVuZGVyLXRvLXN0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByZWFjdC1yZW5kZXItdG8tc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IHByZWFjdC1yZW5kZXItdG8tc3RyaW5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNjb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzY291dGVyXCJcbi8vIG1vZHVsZSBpZCA9IHNjb3V0ZXJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5mZXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVuZmV0Y2hcIlxuLy8gbW9kdWxlIGlkID0gdW5mZXRjaFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9