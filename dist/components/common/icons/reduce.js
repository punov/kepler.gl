"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("./base"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Reduce = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Reduce, _Component);

  var _super = _createSuper(Reduce);

  function Reduce() {
    (0, _classCallCheck2["default"])(this, Reduce);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Reduce, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(12.000000, 12.000000)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M36.5208333,13.9791667 L31.7291666,9.1875 L37.75,3.2083334 L34.7916666,0.25 L28.8125,6.2708334 L24.0208333,1.4791667 L24.0208333,13.9791667 L36.5208333,13.9791667 Z M13.9791667,1.4791667 L9.1875,6.2708334 L3.2083334,0.25 L0.25,3.2083334 L6.2708334,9.1875 L1.4791667,13.9791667 L13.9791667,13.9791667 L13.9791667,1.4791667 Z M1.4791667,24.0208333 L6.2708334,28.8125 L0.25,34.7916666 L3.2083334,37.75 L9.1875,31.7291666 L13.9791667,36.5208333 L13.9791667,24.0208333 L1.4791667,24.0208333 Z M24.0208333,36.5208333 L28.8125,31.7291666 L34.7916666,37.75 L37.75,34.7916666 L31.7291666,28.8125 L36.5208333,24.0208333 L24.0208333,24.0208333 L24.0208333,36.5208333 Z",
        id: "Shape"
      })));
    }
  }]);
  return Reduce;
}(_react.Component);

exports["default"] = Reduce;
(0, _defineProperty2["default"])(Reduce, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Reduce, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-reduce'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9yZWR1Y2UuanMiXSwibmFtZXMiOlsiUmVkdWNlIiwicHJvcHMiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7O1dBV25CLGtCQUFTO0FBQ1AsMEJBQ0UsZ0NBQUMsZ0JBQUQsRUFBVSxLQUFLQyxLQUFmLGVBQ0U7QUFBRyxRQUFBLFNBQVMsRUFBQztBQUFiLHNCQUNFO0FBQ0UsUUFBQSxDQUFDLEVBQUMsbXBCQURKO0FBRUUsUUFBQSxFQUFFLEVBQUM7QUFGTCxRQURGLENBREYsQ0FERjtBQVVEOzs7RUF0QmlDQyxnQjs7O2lDQUFmRixNLGVBQ0E7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUM7QUFGRCxDO2lDQURBTCxNLGtCQU1HO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkcsRUFBQUEsbUJBQW1CLEVBQUU7QUFGRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkdWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKiogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24sIGV4LiAnMTZweCcgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogJzE2cHgnLFxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLXJlZHVjZSdcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEyLjAwMDAwMCwgMTIuMDAwMDAwKVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTM2LjUyMDgzMzMsMTMuOTc5MTY2NyBMMzEuNzI5MTY2Niw5LjE4NzUgTDM3Ljc1LDMuMjA4MzMzNCBMMzQuNzkxNjY2NiwwLjI1IEwyOC44MTI1LDYuMjcwODMzNCBMMjQuMDIwODMzMywxLjQ3OTE2NjcgTDI0LjAyMDgzMzMsMTMuOTc5MTY2NyBMMzYuNTIwODMzMywxMy45NzkxNjY3IFogTTEzLjk3OTE2NjcsMS40NzkxNjY3IEw5LjE4NzUsNi4yNzA4MzM0IEwzLjIwODMzMzQsMC4yNSBMMC4yNSwzLjIwODMzMzQgTDYuMjcwODMzNCw5LjE4NzUgTDEuNDc5MTY2NywxMy45NzkxNjY3IEwxMy45NzkxNjY3LDEzLjk3OTE2NjcgTDEzLjk3OTE2NjcsMS40NzkxNjY3IFogTTEuNDc5MTY2NywyNC4wMjA4MzMzIEw2LjI3MDgzMzQsMjguODEyNSBMMC4yNSwzNC43OTE2NjY2IEwzLjIwODMzMzQsMzcuNzUgTDkuMTg3NSwzMS43MjkxNjY2IEwxMy45NzkxNjY3LDM2LjUyMDgzMzMgTDEzLjk3OTE2NjcsMjQuMDIwODMzMyBMMS40NzkxNjY3LDI0LjAyMDgzMzMgWiBNMjQuMDIwODMzMywzNi41MjA4MzMzIEwyOC44MTI1LDMxLjcyOTE2NjYgTDM0Ljc5MTY2NjYsMzcuNzUgTDM3Ljc1LDM0Ljc5MTY2NjYgTDMxLjcyOTE2NjYsMjguODEyNSBMMzYuNTIwODMzMywyNC4wMjA4MzMzIEwyNC4wMjA4MzMzLDI0LjAyMDgzMzMgTDI0LjAyMDgzMzMsMzYuNTIwODMzMyBaXCJcbiAgICAgICAgICAgIGlkPVwiU2hhcGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=