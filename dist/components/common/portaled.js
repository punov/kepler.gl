"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getChildPos = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _lodash2 = _interopRequireDefault(require("lodash.isequal"));

var _exenv = require("exenv");

var _styledComponents = require("styled-components");

var _context = require("../context");

var _reactModal = _interopRequireDefault(require("react-modal"));

var _window = _interopRequireDefault(require("global/window"));

var _base = require("../../styles/base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var listeners = {};

var startListening = function startListening() {
  return Object.keys(listeners).forEach(function (key) {
    return listeners[key]();
  });
};

var getPageOffset = function getPageOffset() {
  return {
    x: _window["default"].pageXOffset !== undefined ? _window["default"].pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
    y: _window["default"].pageYOffset !== undefined ? _window["default"].pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
  };
};

var addEventListeners = function addEventListeners() {
  if (document && document.body) document.body.addEventListener('mousewheel', (0, _lodash["default"])(startListening, 100, true));

  _window["default"].addEventListener('resize', (0, _lodash["default"])(startListening, 50, true));
};

var getChildPos = function getChildPos(_ref) {
  var offsets = _ref.offsets,
      rect = _ref.rect,
      childRect = _ref.childRect,
      pageOffset = _ref.pageOffset,
      padding = _ref.padding;
  var topOffset = offsets.topOffset,
      leftOffset = offsets.leftOffset,
      rightOffset = offsets.rightOffset;
  var anchorLeft = leftOffset !== undefined;

  var pos = _objectSpread({
    top: pageOffset.y + rect.top + (topOffset || 0)
  }, anchorLeft ? {
    left: pageOffset.x + rect.left + leftOffset
  } : {
    right: _window["default"].innerWidth - rect.right - pageOffset.x + (rightOffset || 0)
  });

  var leftOrRight = anchorLeft ? 'left' : 'right';

  if (pos[leftOrRight] && pos[leftOrRight] < 0) {
    pos[leftOrRight] = padding;
  } else if (pos[leftOrRight] && pos[leftOrRight] + childRect.width > _window["default"].innerWidth) {
    pos[leftOrRight] = _window["default"].innerWidth - childRect.width - padding;
  }

  if (pos.top < 0) {
    pos.top = padding;
  } else if (pos.top + childRect.height > _window["default"].innerHeight) {
    pos.top = _window["default"].innerHeight - childRect.height - padding;
  }

  return pos;
};

exports.getChildPos = getChildPos;

if (_exenv.canUseDOM) {
  if (document.body) {
    addEventListeners();
  } else {
    document.addEventListener('DOMContentLoaded', addEventListeners);
  }
}

var listenerIdCounter = 0;

function subscribe(fn) {
  listenerIdCounter += 1;
  var id = listenerIdCounter;
  listeners[id] = fn;
  return function () {
    return delete listeners[id];
  };
}

var defaultModalStyle = {
  content: {
    top: 0,
    left: 0,
    border: 0,
    right: 'auto',
    bottom: 'auto',
    padding: '0px 0px 0px 0px'
  },
  overlay: {
    right: 'auto',
    bottom: 'auto',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }
};
var WINDOW_PAD = 40;

var noop = function noop() {};

var Portaled = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Portaled, _Component);

  var _super = _createSuper(Portaled);

  function Portaled() {
    var _this;

    (0, _classCallCheck2["default"])(this, Portaled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      pos: null,
      isVisible: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "element", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "child", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleScroll", function () {
      if (_this.child.current) {
        var rect = _this.element.current.getBoundingClientRect();

        var childRect = _this.child.current && _this.child.current.getBoundingClientRect();

        var pageOffset = getPageOffset();
        var _this$props = _this.props,
            topOffset = _this$props.top,
            leftOffset = _this$props.left,
            rightOffset = _this$props.right;
        var pos = getChildPos({
          offsets: {
            topOffset: topOffset,
            leftOffset: leftOffset,
            rightOffset: rightOffset
          },
          rect: rect,
          childRect: childRect,
          pageOffset: pageOffset,
          padding: WINDOW_PAD
        });

        if (!(0, _lodash2["default"])(pos, _this.state.pos)) {
          _this.setState({
            pos: pos
          });
        }
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Portaled, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // relative
      this.unsubscribe = subscribe(this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var didOpen = this.props.isOpened && !prevProps.isOpened;
      var didClose = !this.props.isOpened && prevProps.isOpened;

      if (didOpen || didClose) {
        _window["default"].requestAnimationFrame(function () {
          if (_this2._unmounted) return;

          _this2.setState({
            isVisible: didOpen
          });
        });
      }

      this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unmounted = true; // @ts-ignore

      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          Comp = _this$props2.component,
          overlayZIndex = _this$props2.overlayZIndex,
          isOpened = _this$props2.isOpened,
          onClose = _this$props2.onClose,
          children = _this$props2.children,
          modalProps = _this$props2.modalProps,
          _this$props2$modalSty = _this$props2.modalStyle,
          modalStyle = _this$props2$modalSty === void 0 ? {} : _this$props2$modalSty;
      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          pos = _this$state.pos;

      var newModalStyle = _objectSpread(_objectSpread({}, defaultModalStyle), {}, {
        content: _objectSpread({}, modalStyle.content || {}),
        overlay: _objectSpread(_objectSpread(_objectSpread({}, defaultModalStyle.overlay), modalStyle.overlay || {}), {}, {
          // needs to be on top of existing modal
          zIndex: overlayZIndex || 9999
        })
      });

      return /*#__PURE__*/_react["default"].createElement(_context.RootContext.Consumer, null, function (context) {
        return /*#__PURE__*/_react["default"].createElement(Comp, {
          ref: _this3.element
        }, isOpened ? /*#__PURE__*/_react["default"].createElement(_reactModal["default"], (0, _extends2["default"])({
          className: "modal-portal"
        }, modalProps, {
          ariaHideApp: false,
          isOpen: true,
          style: newModalStyle,
          parentSelector: function parentSelector() {
            // React modal issue: https://github.com/reactjs/react-modal/issues/769
            // failed to execute removeChild on parent node when it is already unmounted
            return (// @ts-ignore
              context && context.current || {
                removeChild: function removeChild() {},
                appendChild: function appendChild() {}
              }
            );
          },
          onRequestClose: onClose
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "portaled-content",
          key: "item",
          style: _objectSpread({
            position: 'fixed',
            opacity: isVisible ? 1 : 0,
            top: _this3.state.top,
            transition: _this3.props.theme.transition,
            marginTop: isVisible ? '0px' : '14px'
          }, pos)
        }, /*#__PURE__*/_react["default"].createElement("div", {
          ref: _this3.child,
          style: {
            position: 'absolute',
            zIndex: overlayZIndex ? overlayZIndex + 1 : 10000
          }
        }, children))) : null);
      });
    }
  }]);
  return Portaled;
}(_react.Component);

(0, _defineProperty2["default"])(Portaled, "defaultProps", {
  component: 'div',
  onClose: noop,
  theme: _base.theme
});

var _default = (0, _styledComponents.withTheme)(Portaled);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9wb3J0YWxlZC5qcyJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJzdGFydExpc3RlbmluZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZ2V0UGFnZU9mZnNldCIsIngiLCJ3aW5kb3ciLCJwYWdlWE9mZnNldCIsInVuZGVmaW5lZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsInBhcmVudE5vZGUiLCJzY3JvbGxMZWZ0IiwieSIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q2hpbGRQb3MiLCJvZmZzZXRzIiwicmVjdCIsImNoaWxkUmVjdCIsInBhZ2VPZmZzZXQiLCJwYWRkaW5nIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInJpZ2h0T2Zmc2V0IiwiYW5jaG9yTGVmdCIsInBvcyIsInRvcCIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJsZWZ0T3JSaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjYW5Vc2VET00iLCJsaXN0ZW5lcklkQ291bnRlciIsInN1YnNjcmliZSIsImZuIiwiaWQiLCJkZWZhdWx0TW9kYWxTdHlsZSIsImNvbnRlbnQiLCJib3JkZXIiLCJib3R0b20iLCJvdmVybGF5IiwiYmFja2dyb3VuZENvbG9yIiwiV0lORE9XX1BBRCIsIm5vb3AiLCJQb3J0YWxlZCIsImlzVmlzaWJsZSIsImNoaWxkIiwiY3VycmVudCIsImVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1bnN1YnNjcmliZSIsImhhbmRsZVNjcm9sbCIsInByZXZQcm9wcyIsImRpZE9wZW4iLCJpc09wZW5lZCIsImRpZENsb3NlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3VubW91bnRlZCIsIkNvbXAiLCJjb21wb25lbnQiLCJvdmVybGF5WkluZGV4Iiwib25DbG9zZSIsImNoaWxkcmVuIiwibW9kYWxQcm9wcyIsIm1vZGFsU3R5bGUiLCJuZXdNb2RhbFN0eWxlIiwiekluZGV4IiwiY29udGV4dCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJwb3NpdGlvbiIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsRUFBbEI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFNBQU1DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxTQUFaLEVBQXVCSSxPQUF2QixDQUErQixVQUFBQyxHQUFHO0FBQUEsV0FBSUwsU0FBUyxDQUFDSyxHQUFELENBQVQsRUFBSjtBQUFBLEdBQWxDLENBQU47QUFBQSxDQUF2Qjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsU0FBTztBQUMzQkMsSUFBQUEsQ0FBQyxFQUNDQyxtQkFBT0MsV0FBUCxLQUF1QkMsU0FBdkIsR0FDSUYsbUJBQU9DLFdBRFgsR0FFSSxDQUFDRSxRQUFRLENBQUNDLGVBQVQsSUFBNEJELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxVQUExQyxJQUF3REgsUUFBUSxDQUFDRSxJQUFsRSxFQUF3RUUsVUFKbkQ7QUFLM0JDLElBQUFBLENBQUMsRUFDQ1IsbUJBQU9TLFdBQVAsS0FBdUJQLFNBQXZCLEdBQ0lGLG1CQUFPUyxXQURYLEdBRUksQ0FBQ04sUUFBUSxDQUFDQyxlQUFULElBQTRCRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsVUFBMUMsSUFBd0RILFFBQVEsQ0FBQ0UsSUFBbEUsRUFBd0VLO0FBUm5ELEdBQVA7QUFBQSxDQUF0Qjs7QUFX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LEVBQUUsVUFETDtBQUVMSixZQUFBQSxNQUFNLEVBQUVOLGFBQWEsR0FBR0EsYUFBYSxHQUFHLENBQW5CLEdBQXVCO0FBRnZDO0FBRlQsV0FPR0UsUUFQSCxDQWJGLENBbkJGLENBRE8sR0E0Q0wsSUE3Q04sQ0FETTtBQUFBLE9BRFYsQ0FERjtBQXFERDs7O0VBaEpvQmEsZ0I7O2lDQUFqQmxDLFEsa0JBQ2tCO0FBQ3BCa0IsRUFBQUEsU0FBUyxFQUFFLEtBRFM7QUFFcEJFLEVBQUFBLE9BQU8sRUFBRXJCLElBRlc7QUFHcEJpQyxFQUFBQSxLQUFLLEVBQUxBO0FBSG9CLEM7O2VBa0pULGlDQUFVaEMsUUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuXG5pbXBvcnQge2NhblVzZURPTX0gZnJvbSAnZXhlbnYnO1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Um9vdENvbnRleHR9IGZyb20gJ2NvbXBvbmVudHMvY29udGV4dCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7dGhlbWV9IGZyb20gJ3N0eWxlcy9iYXNlJztcblxuY29uc3QgbGlzdGVuZXJzID0ge307XG5cbmNvbnN0IHN0YXJ0TGlzdGVuaW5nID0gKCkgPT4gT2JqZWN0LmtleXMobGlzdGVuZXJzKS5mb3JFYWNoKGtleSA9PiBsaXN0ZW5lcnNba2V5XSgpKTtcblxuY29uc3QgZ2V0UGFnZU9mZnNldCA9ICgpID0+ICh7XG4gIHg6XG4gICAgd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgID8gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICA6IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbExlZnQsXG4gIHk6XG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgID8gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICA6IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcFxufSk7XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSlcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBkZWJvdW5jZShzdGFydExpc3RlbmluZywgMTAwLCB0cnVlKSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZShzdGFydExpc3RlbmluZywgNTAsIHRydWUpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDaGlsZFBvcyA9ICh7b2Zmc2V0cywgcmVjdCwgY2hpbGRSZWN0LCBwYWdlT2Zmc2V0LCBwYWRkaW5nfSkgPT4ge1xuICBjb25zdCB7dG9wT2Zmc2V0LCBsZWZ0T2Zmc2V0LCByaWdodE9mZnNldH0gPSBvZmZzZXRzO1xuXG4gIGNvbnN0IGFuY2hvckxlZnQgPSBsZWZ0T2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gIGNvbnN0IHBvcyA9IHtcbiAgICB0b3A6IHBhZ2VPZmZzZXQueSArIHJlY3QudG9wICsgKHRvcE9mZnNldCB8fCAwKSxcbiAgICAuLi4oYW5jaG9yTGVmdFxuICAgICAgPyB7bGVmdDogcGFnZU9mZnNldC54ICsgcmVjdC5sZWZ0ICsgbGVmdE9mZnNldH1cbiAgICAgIDoge3JpZ2h0OiB3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3QucmlnaHQgLSBwYWdlT2Zmc2V0LnggKyAocmlnaHRPZmZzZXQgfHwgMCl9KVxuICB9O1xuXG4gIGNvbnN0IGxlZnRPclJpZ2h0ID0gYW5jaG9yTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cbiAgaWYgKHBvc1tsZWZ0T3JSaWdodF0gJiYgcG9zW2xlZnRPclJpZ2h0XSA8IDApIHtcbiAgICBwb3NbbGVmdE9yUmlnaHRdID0gcGFkZGluZztcbiAgfSBlbHNlIGlmIChwb3NbbGVmdE9yUmlnaHRdICYmIHBvc1tsZWZ0T3JSaWdodF0gKyBjaGlsZFJlY3Qud2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgIHBvc1tsZWZ0T3JSaWdodF0gPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNoaWxkUmVjdC53aWR0aCAtIHBhZGRpbmc7XG4gIH1cblxuICBpZiAocG9zLnRvcCA8IDApIHtcbiAgICBwb3MudG9wID0gcGFkZGluZztcbiAgfSBlbHNlIGlmIChwb3MudG9wICsgY2hpbGRSZWN0LmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIHBvcy50b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBjaGlsZFJlY3QuaGVpZ2h0IC0gcGFkZGluZztcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59O1xuXG5pZiAoY2FuVXNlRE9NKSB7XG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYWRkRXZlbnRMaXN0ZW5lcnMpO1xuICB9XG59XG5cbmxldCBsaXN0ZW5lcklkQ291bnRlciA9IDA7XG5mdW5jdGlvbiBzdWJzY3JpYmUoZm4pIHtcbiAgbGlzdGVuZXJJZENvdW50ZXIgKz0gMTtcbiAgY29uc3QgaWQgPSBsaXN0ZW5lcklkQ291bnRlcjtcbiAgbGlzdGVuZXJzW2lkXSA9IGZuO1xuICByZXR1cm4gKCkgPT4gZGVsZXRlIGxpc3RlbmVyc1tpZF07XG59XG5cbmNvbnN0IGRlZmF1bHRNb2RhbFN0eWxlID0ge1xuICBjb250ZW50OiB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgcGFkZGluZzogJzBweCAwcHggMHB4IDBweCdcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknXG4gIH1cbn07XG5cbmNvbnN0IFdJTkRPV19QQUQgPSA0MDtcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5jbGFzcyBQb3J0YWxlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcG9uZW50OiAnZGl2JyxcbiAgICBvbkNsb3NlOiBub29wLFxuICAgIHRoZW1lXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgcG9zOiBudWxsLFxuICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyByZWxhdGl2ZVxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUodGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgZGlkT3BlbiA9IHRoaXMucHJvcHMuaXNPcGVuZWQgJiYgIXByZXZQcm9wcy5pc09wZW5lZDtcbiAgICBjb25zdCBkaWRDbG9zZSA9ICF0aGlzLnByb3BzLmlzT3BlbmVkICYmIHByZXZQcm9wcy5pc09wZW5lZDtcbiAgICBpZiAoZGlkT3BlbiB8fCBkaWRDbG9zZSkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNWaXNpYmxlOiBkaWRPcGVufSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fdW5tb3VudGVkID0gdHJ1ZTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZWxlbWVudCA9IGNyZWF0ZVJlZigpO1xuICBjaGlsZCA9IGNyZWF0ZVJlZigpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5jaGlsZC5jdXJyZW50KSB7XG4gICAgICBjb25zdCByZWN0ID0gdGhpcy5lbGVtZW50LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBjaGlsZFJlY3QgPSB0aGlzLmNoaWxkLmN1cnJlbnQgJiYgdGhpcy5jaGlsZC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcGFnZU9mZnNldCA9IGdldFBhZ2VPZmZzZXQoKTtcbiAgICAgIGNvbnN0IHt0b3A6IHRvcE9mZnNldCwgbGVmdDogbGVmdE9mZnNldCwgcmlnaHQ6IHJpZ2h0T2Zmc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHBvcyA9IGdldENoaWxkUG9zKHtcbiAgICAgICAgb2Zmc2V0czoge3RvcE9mZnNldCwgbGVmdE9mZnNldCwgcmlnaHRPZmZzZXR9LFxuICAgICAgICByZWN0LFxuICAgICAgICBjaGlsZFJlY3QsXG4gICAgICAgIHBhZ2VPZmZzZXQsXG4gICAgICAgIHBhZGRpbmc6IFdJTkRPV19QQURcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWlzRXF1YWwocG9zLCB0aGlzLnN0YXRlLnBvcykpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9zfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICAvLyByZWxhdGl2ZVxuICAgICAgY29tcG9uZW50OiBDb21wLFxuICAgICAgb3ZlcmxheVpJbmRleCxcbiAgICAgIGlzT3BlbmVkLFxuICAgICAgb25DbG9zZSxcblxuICAgICAgLy8gTW9kYWxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgbW9kYWxQcm9wcyxcbiAgICAgIG1vZGFsU3R5bGUgPSB7fVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge2lzVmlzaWJsZSwgcG9zfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBuZXdNb2RhbFN0eWxlID0ge1xuICAgICAgLi4uZGVmYXVsdE1vZGFsU3R5bGUsXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIC4uLihtb2RhbFN0eWxlLmNvbnRlbnQgfHwge30pXG4gICAgICB9LFxuICAgICAgb3ZlcmxheToge1xuICAgICAgICAuLi5kZWZhdWx0TW9kYWxTdHlsZS5vdmVybGF5LFxuICAgICAgICAuLi4obW9kYWxTdHlsZS5vdmVybGF5IHx8IHt9KSxcbiAgICAgICAgLy8gbmVlZHMgdG8gYmUgb24gdG9wIG9mIGV4aXN0aW5nIG1vZGFsXG4gICAgICAgIHpJbmRleDogb3ZlcmxheVpJbmRleCB8fCA5OTk5XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Um9vdENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHtjb250ZXh0ID0+IChcbiAgICAgICAgICA8Q29tcCByZWY9e3RoaXMuZWxlbWVudH0+XG4gICAgICAgICAgICB7aXNPcGVuZWQgPyAoXG4gICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLXBvcnRhbFwiXG4gICAgICAgICAgICAgICAgey4uLm1vZGFsUHJvcHN9XG4gICAgICAgICAgICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgICAgIHN0eWxlPXtuZXdNb2RhbFN0eWxlfVxuICAgICAgICAgICAgICAgIHBhcmVudFNlbGVjdG9yPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBSZWFjdCBtb2RhbCBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtbW9kYWwvaXNzdWVzLzc2OVxuICAgICAgICAgICAgICAgICAgLy8gZmFpbGVkIHRvIGV4ZWN1dGUgcmVtb3ZlQ2hpbGQgb24gcGFyZW50IG5vZGUgd2hlbiBpdCBpcyBhbHJlYWR5IHVubW91bnRlZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAoY29udGV4dCAmJiBjb250ZXh0LmN1cnJlbnQpIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDaGlsZDogKCkgPT4ge30sXG4gICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQ6ICgpID0+IHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcnRhbGVkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAga2V5PVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogaXNWaXNpYmxlID8gMSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGF0ZS50b3AsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoaXMucHJvcHMudGhlbWUudHJhbnNpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBpc1Zpc2libGUgPyAnMHB4JyA6ICcxNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAuLi5wb3NcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuY2hpbGR9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgekluZGV4OiBvdmVybGF5WkluZGV4ID8gb3ZlcmxheVpJbmRleCArIDEgOiAxMDAwMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvQ29tcD5cbiAgICAgICAgKX1cbiAgICAgIDwvUm9vdENvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoUG9ydGFsZWQpO1xuIl19