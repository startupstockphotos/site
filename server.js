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

var _preact = __webpack_require__("preact");

var _Link = _interopRequireDefault(__webpack_require__("./app/components/Link.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */
function App(_ref) {
  var children = _ref.children;
  return (0, _preact.h)("main", null, (0, _preact.h)("nav", null, (0, _preact.h)(_Link.default, {
    href: "/"
  }, "Home"), (0, _preact.h)(_Link.default, {
    href: "/about"
  }, "About"), (0, _preact.h)(_Link.default, {
    href: "/account/login"
  }, "Login")), children);
}

/***/ }),

/***/ "./app/components/Link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = __webpack_require__("preact");

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

  return (0, _preact.h)("a", _extends({
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

/***/ "./app/components/Photos.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = __webpack_require__("preact");

var _connect = _interopRequireDefault(__webpack_require__("./app/state/connect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */
var _default = (0, _connect.default)(function (state) {
  return {
    photos: state.photos
  };
})(function (props) {
  return (0, _preact.h)("ul", null, props.photos.map(function (p) {
    return (0, _preact.h)("li", null, p.id);
  }));
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

var _preact = __webpack_require__("preact");

var _scouter = __webpack_require__("scouter");

var _Home = _interopRequireDefault(__webpack_require__("./app/routes/Home.js"));

var _About = _interopRequireDefault(__webpack_require__("./app/routes/About.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */
var _default = (0, _scouter.router)(_Home.default, _About.default);

exports.default = _default;

/***/ }),

/***/ "./app/routes/About.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = __webpack_require__("preact");

var _scouter = __webpack_require__("scouter");

var _App = _interopRequireDefault(__webpack_require__("./app/App.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */
var path = '/about';

function component(props) {
  return (0, _preact.h)(_App.default, null, (0, _preact.h)("h1", null, "About"));
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

var _preact = __webpack_require__("preact");

var _scouter = __webpack_require__("scouter");

var _App = _interopRequireDefault(__webpack_require__("./app/App.js"));

var _Photos = _interopRequireDefault(__webpack_require__("./app/components/Photos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */
var path = '/';

function component(props) {
  return (0, _preact.h)(_App.default, null, (0, _preact.h)("h1", null, "Home"), (0, _preact.h)(_Photos.default, null));
}

var _default = (0, _scouter.route)({
  path: path,
  component: component
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

var _default = (0, _picostate.default)({});

exports.default = _default;

/***/ }),

/***/ "./index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = _interopRequireDefault(__webpack_require__("express"));

var _compression = _interopRequireDefault(__webpack_require__("compression"));

var _preact = __webpack_require__("preact");

var _preactRenderToString = _interopRequireDefault(__webpack_require__("preact-render-to-string"));

var _router = _interopRequireDefault(__webpack_require__("./app/router.js"));

var _store = _interopRequireDefault(__webpack_require__("./app/state/store.js"));

var _nodeFetch = _interopRequireDefault(__webpack_require__("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx h */
var app = (0, _express.default)();
app.use((0, _compression.default)());
app.use(_express.default.static('./public'));
app.get('*', function (req, res) {
  _router.default.resolve(req.originalUrl).then(function (_ref) {
    var Comp = _ref.component,
        params = _ref.params,
        options = _ref.options;
    (0, _nodeFetch.default)('https://ssp-api.now.sh/photos').then(function (res) {
      return res.json();
    }).then(function (photos) {
      _store.default.hydrate({
        photos: photos
      });

      res.send("\n          <html>\n            <head>\n              <title>Startup Stock Photos</title>\n              <script src='/index.js' defer></script>\n              <script>window.__hydrate__ = ".concat(JSON.stringify(_store.default.state), "</script>\n            </head>\n            <body>\n              ").concat((0, _preactRenderToString.default)((0, _preact.h)(Comp, null)), "\n            </body>\n          </html>\n        "));
    });
  });
});
app.listen(3000);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzExMGRhZTA5ZDYyNWY1NjYzMjYiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MaW5rLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1Bob3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcm91dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9yb3V0ZXMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JvdXRlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0ZS9jb25uZWN0LmpzIiwid2VicGFjazovLy8uL2FwcC9zdGF0ZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGljb3N0YXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJlYWN0LXJlbmRlci10by1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzY291dGVyXCIiXSwibmFtZXMiOlsiQXBwIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInN0YXRlIiwiTGluayIsImhyZWYiLCJoeWRyYXRlIiwicHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJwaG90b3MiLCJtYXAiLCJwIiwiaWQiLCJwYXRoIiwiY29tcG9uZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiYXBwIiwidXNlIiwic3RhdGljIiwiZ2V0IiwicmVxIiwicmVzIiwicmVzb2x2ZSIsIm9yaWdpbmFsVXJsIiwidGhlbiIsIkNvbXAiLCJwYXJhbXMiLCJvcHRpb25zIiwianNvbiIsInNl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S0FBUjtBQUFBLEdBQTFCO0FBQUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKZjs7OztlQUVlLHdCQUFZLEVBQVosQzs7Ozs7Ozs7Ozs7O0FDRGY7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFSQTtBQVVBLElBQU1ZLE1BQU0sdUJBQVo7QUFDQUEsSUFBSUMsR0FBSixDQUFRLDJCQUFSO0FBQ0FELElBQUlDLEdBQUosQ0FBUSxpQkFBUUMsTUFBUixDQUFlLFVBQWYsQ0FBUjtBQUVBRixJQUFJRyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3pCLGtCQUFPQyxPQUFQLENBQWVGLElBQUlHLFdBQW5CLEVBQWdDQyxJQUFoQyxDQUFxQyxnQkFBMEM7QUFBQSxRQUE1QkMsSUFBNEIsUUFBdkNaLFNBQXVDO0FBQUEsUUFBdEJhLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLFFBQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM3RSw0QkFBTSwrQkFBTixFQUNHSCxJQURILENBQ1E7QUFBQSxhQUFPSCxJQUFJTyxJQUFKLEVBQVA7QUFBQSxLQURSLEVBRUdKLElBRkgsQ0FFUSxrQkFBVTtBQUNkLHFCQUFNcEIsT0FBTixDQUFjO0FBQUVJO0FBQUYsT0FBZDs7QUFFQWEsVUFBSVEsSUFBSix3TUFLcUNDLEtBQUtDLFNBQUwsQ0FBZSxlQUFNOUIsS0FBckIsQ0FMckMsK0VBUVEsbUNBQU8sZUFBQyxJQUFELE9BQVAsQ0FSUjtBQVlELEtBakJIO0FBa0JELEdBbkJEO0FBb0JELENBckJEO0FBdUJBZSxJQUFJZ0IsTUFBSixDQUFXLElBQVgsRTs7Ozs7OztBQ3JDQSx3Qzs7Ozs7OztBQ0FBLG9DOzs7Ozs7O0FDQUEsdUM7Ozs7Ozs7QUNBQSxzQzs7Ozs7OztBQ0FBLG1DOzs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzExMGRhZTA5ZDYyNWY1NjYzMjYiLCIvKiogQGpzeCBoICovXG5pbXBvcnQgeyBoIH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnLi9jb21wb25lbnRzL0xpbmsuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCAoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8bmF2PlxuICAgICAgICA8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPkFib3V0PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPScvYWNjb3VudC9sb2dpbic+TG9naW48L0xpbms+XG4gICAgICA8L25hdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9BcHAuanMiLCIvKiogQGpzeCBoICovXG5pbXBvcnQgeyBoIH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnc3RhdGUvY29ubmVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb25cbn0pKShcbiAgZnVuY3Rpb24gTGluayAoeyBocmVmLCBjaGlsZHJlbiwgaHlkcmF0ZSwgLi4ucHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXtocmVmfSB7Li4ucHJvcHN9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaHlkcmF0ZSh7IGxvY2F0aW9uOiBocmVmIH0pKClcbiAgICAgIH19PntjaGlsZHJlbn08L2E+XG4gICAgKVxuICB9XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9MaW5rLmpzIiwiLyoqIEBqc3ggaCAqL1xuaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCdcbmltcG9ydCBjb25uZWN0IGZyb20gJ3N0YXRlL2Nvbm5lY3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgcGhvdG9zOiBzdGF0ZS5waG90b3Ncbn0pKShcbiAgcHJvcHMgPT4gKFxuICAgIDx1bD5cbiAgICAgIHtwcm9wcy5waG90b3MubWFwKHAgPT4gKFxuICAgICAgICA8bGk+e3AuaWR9PC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIClcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1Bob3Rvcy5qcyIsIi8qKiBAanN4IGggKi9cbmltcG9ydCB7IGggfSBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyByb3V0ZXIsIHJvdXRlIH0gZnJvbSAnc2NvdXRlcidcblxuaW1wb3J0IEhvbWUgZnJvbSAncm91dGVzL0hvbWUuanMnXG5pbXBvcnQgQWJvdXQgZnJvbSAncm91dGVzL0Fib3V0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIoXG4gIEhvbWUsXG4gIEFib3V0XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcm91dGVyLmpzIiwiLyoqIEBqc3ggaCAqL1xuaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCdcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSAnc2NvdXRlcidcbmltcG9ydCBBcHAgZnJvbSAnYXBwL0FwcC5qcydcblxuY29uc3QgcGF0aCA9ICcvYWJvdXQnXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPGgxPkFib3V0PC9oMT5cbiAgICA8L0FwcD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZSh7IHBhdGgsIGNvbXBvbmVudCB9KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JvdXRlcy9BYm91dC5qcyIsIi8qKiBAanN4IGggKi9cbmltcG9ydCB7IGggfSBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gJ3Njb3V0ZXInXG5pbXBvcnQgQXBwIGZyb20gJ2FwcC9BcHAuanMnXG5pbXBvcnQgUGhvdG9zIGZyb20gJ2NvbXBvbmVudHMvUGhvdG9zLmpzJ1xuXG5jb25zdCBwYXRoID0gJy8nXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPGgxPkhvbWU8L2gxPlxuXG4gICAgICA8UGhvdG9zIC8+XG4gICAgPC9BcHA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGUoeyBwYXRoLCBjb21wb25lbnQgfSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yb3V0ZXMvSG9tZS5qcyIsIi8qKiBAanN4IGggKi9cbmltcG9ydCB7IGggfSBmcm9tICdwcmVhY3QnXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RhdGUvc3RvcmUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IChtYXAgPSBzdGF0ZSA9PiBzdGF0ZSkgPT4gQ29tcCA9PiBwcm9wcyA9PiAoXG4gIDxDb21wIHsuLi5PYmplY3QuYXNzaWduKHt9LCBwcm9wcywgbWFwKHN0b3JlLnN0YXRlKSl9IGh5ZHJhdGU9e3N0b3JlLmh5ZHJhdGV9IC8+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc3RhdGUvY29ubmVjdC5qcyIsImltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICdwaWNvc3RhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHt9KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3N0YXRlL3N0b3JlLmpzIiwiLyoqIEBqc3ggaCAqL1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbidcblxuaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCdcbmltcG9ydCByZW5kZXIgZnJvbSAncHJlYWN0LXJlbmRlci10by1zdHJpbmcnXG5pbXBvcnQgcm91dGVyIGZyb20gJ2FwcC9yb3V0ZXIuanMnXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RhdGUvc3RvcmUuanMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCcuL3B1YmxpYycpKVxuXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJvdXRlci5yZXNvbHZlKHJlcS5vcmlnaW5hbFVybCkudGhlbigoeyBjb21wb25lbnQ6IENvbXAsIHBhcmFtcywgb3B0aW9ucyB9KSA9PiB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vc3NwLWFwaS5ub3cuc2gvcGhvdG9zJylcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4ocGhvdG9zID0+IHtcbiAgICAgICAgc3RvcmUuaHlkcmF0ZSh7IHBob3RvcyB9KVxuXG4gICAgICAgIHJlcy5zZW5kKGBcbiAgICAgICAgICA8aHRtbD5cbiAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICA8dGl0bGU+U3RhcnR1cCBTdG9jayBQaG90b3M8L3RpdGxlPlxuICAgICAgICAgICAgICA8c2NyaXB0IHNyYz0nL2luZGV4LmpzJyBkZWZlcj48L3NjcmlwdD5cbiAgICAgICAgICAgICAgPHNjcmlwdD53aW5kb3cuX19oeWRyYXRlX18gPSAke0pTT04uc3RyaW5naWZ5KHN0b3JlLnN0YXRlKX08L3NjcmlwdD5cbiAgICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAke3JlbmRlcig8Q29tcCAvPil9XG4gICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICAgPC9odG1sPlxuICAgICAgICBgKVxuICAgICAgfSlcbiAgfSlcbn0pXG5cbmFwcC5saXN0ZW4oMzAwMClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSBjb21wcmVzc2lvblxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSBleHByZXNzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IG5vZGUtZmV0Y2hcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGljb3N0YXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGljb3N0YXRlXCJcbi8vIG1vZHVsZSBpZCA9IHBpY29zdGF0ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gcHJlYWN0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByZWFjdC1yZW5kZXItdG8tc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJlYWN0LXJlbmRlci10by1zdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gcHJlYWN0LXJlbmRlci10by1zdHJpbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2NvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNjb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gc2NvdXRlclxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9