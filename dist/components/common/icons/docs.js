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

var Docs = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Docs, _Component);

  var _super = _createSuper(Docs);

  function Docs() {
    (0, _classCallCheck2["default"])(this, Docs);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Docs, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M23.62,23.41a1,1,0,0,1,.39.08,1,1,0,0,0-.78,0A1,1,0,0,1,23.62,23.41Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M32,57.5A24.83,24.83,0,1,1,56.83,32.67,24.86,24.86,0,0,1,32,57.5Zm0-44.86a20,20,0,1,0,20,20A20,20,0,0,0,32,12.64Z"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "28.8",
        y: "29.46",
        width: "6.41",
        height: "16.02",
        rx: "1.6",
        ry: "1.6"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "28.8",
        y: "19.85",
        width: "6.41",
        height: "6.41",
        rx: "1.6",
        ry: "1.6"
      }));
    }
  }]);
  return Docs;
}(_react.Component);

exports["default"] = Docs;
(0, _defineProperty2["default"])(Docs, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Docs, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-docs'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9kb2NzLmpzIl0sIm5hbWVzIjpbIkRvY3MiLCJwcm9wcyIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsInByZWRlZmluZWRDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7V0FXbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRTtBQUFNLFFBQUEsQ0FBQyxFQUFDO0FBQVIsUUFERixlQUVFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQUZGLGVBR0U7QUFBTSxRQUFBLENBQUMsRUFBQyxNQUFSO0FBQWUsUUFBQSxDQUFDLEVBQUMsT0FBakI7QUFBeUIsUUFBQSxLQUFLLEVBQUMsTUFBL0I7QUFBc0MsUUFBQSxNQUFNLEVBQUMsT0FBN0M7QUFBcUQsUUFBQSxFQUFFLEVBQUMsS0FBeEQ7QUFBOEQsUUFBQSxFQUFFLEVBQUM7QUFBakUsUUFIRixlQUlFO0FBQU0sUUFBQSxDQUFDLEVBQUMsTUFBUjtBQUFlLFFBQUEsQ0FBQyxFQUFDLE9BQWpCO0FBQXlCLFFBQUEsS0FBSyxFQUFDLE1BQS9CO0FBQXNDLFFBQUEsTUFBTSxFQUFDLE1BQTdDO0FBQW9ELFFBQUEsRUFBRSxFQUFDLEtBQXZEO0FBQTZELFFBQUEsRUFBRSxFQUFDO0FBQWhFLFFBSkYsQ0FERjtBQVFEOzs7RUFwQitCQyxnQjs7O2lDQUFiRixJLGVBQ0E7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUM7QUFGRCxDO2lDQURBTCxJLGtCQU1HO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkcsRUFBQUEsbUJBQW1CLEVBQUU7QUFGRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy1kb2NzJ1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2Ugey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8cGF0aCBkPVwiTTIzLjYyLDIzLjQxYTEsMSwwLDAsMSwuMzkuMDgsMSwxLDAsMCwwLS43OCwwQTEsMSwwLDAsMSwyMy42MiwyMy40MVpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTMyLDU3LjVBMjQuODMsMjQuODMsMCwxLDEsNTYuODMsMzIuNjcsMjQuODYsMjQuODYsMCwwLDEsMzIsNTcuNVptMC00NC44NmEyMCwyMCwwLDEsMCwyMCwyMEEyMCwyMCwwLDAsMCwzMiwxMi42NFpcIiAvPlxuICAgICAgICA8cmVjdCB4PVwiMjguOFwiIHk9XCIyOS40NlwiIHdpZHRoPVwiNi40MVwiIGhlaWdodD1cIjE2LjAyXCIgcng9XCIxLjZcIiByeT1cIjEuNlwiIC8+XG4gICAgICAgIDxyZWN0IHg9XCIyOC44XCIgeT1cIjE5Ljg1XCIgd2lkdGg9XCI2LjQxXCIgaGVpZ2h0PVwiNi40MVwiIHJ4PVwiMS42XCIgcnk9XCIxLjZcIiAvPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==