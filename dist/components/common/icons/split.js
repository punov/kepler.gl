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

var Split = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Split, _Component);

  var _super = _createSuper(Split);

  function Split() {
    (0, _classCallCheck2["default"])(this, Split);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Split, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(7.500000, 7.500000)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M19.5,47.4137931 C19.5,48.8421157 20.6192881,50 22,50 C23.3807119,50 24.5,48.8421157 24.5,47.4137931 L24.5,2.5862069 C24.5,1.15788427 23.3807119,0 22,0 C20.6192881,0 19.5,1.15788427 19.5,2.5862069 L19.5,47.4137931 Z"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: "4",
        width: "44",
        height: "5",
        rx: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        transform: "translate(2.500000, 24.500000) rotate(90.000000) translate(-2.500000, -24.500000) ",
        x: "-18",
        y: "22",
        width: "41",
        height: "5",
        rx: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        transform: "translate(41.500000, 25.000000) rotate(90.000000) translate(-41.500000, -25.000000) ",
        x: "20.5",
        y: "22.5",
        width: "42",
        height: "5",
        rx: "2.5"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "0",
        y: "41",
        width: "44",
        height: "5",
        rx: "2.5"
      })));
    }
  }]);
  return Split;
}(_react.Component);

exports["default"] = Split;
(0, _defineProperty2["default"])(Split, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Split, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-split'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9zcGxpdC5qcyJdLCJuYW1lcyI6WyJTcGxpdCIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7OztXQVduQixrQkFBUztBQUNQLDBCQUNFLGdDQUFDLGdCQUFELEVBQVUsS0FBS0MsS0FBZixlQUNFO0FBQUcsUUFBQSxTQUFTLEVBQUM7QUFBYixzQkFDRTtBQUFNLFFBQUEsQ0FBQyxFQUFDO0FBQVIsUUFERixlQUVFO0FBQU0sUUFBQSxDQUFDLEVBQUMsR0FBUjtBQUFZLFFBQUEsQ0FBQyxFQUFDLEdBQWQ7QUFBa0IsUUFBQSxLQUFLLEVBQUMsSUFBeEI7QUFBNkIsUUFBQSxNQUFNLEVBQUMsR0FBcEM7QUFBd0MsUUFBQSxFQUFFLEVBQUM7QUFBM0MsUUFGRixlQUdFO0FBQ0UsUUFBQSxTQUFTLEVBQUMsb0ZBRFo7QUFFRSxRQUFBLENBQUMsRUFBQyxLQUZKO0FBR0UsUUFBQSxDQUFDLEVBQUMsSUFISjtBQUlFLFFBQUEsS0FBSyxFQUFDLElBSlI7QUFLRSxRQUFBLE1BQU0sRUFBQyxHQUxUO0FBTUUsUUFBQSxFQUFFLEVBQUM7QUFOTCxRQUhGLGVBV0U7QUFDRSxRQUFBLFNBQVMsRUFBQyxzRkFEWjtBQUVFLFFBQUEsQ0FBQyxFQUFDLE1BRko7QUFHRSxRQUFBLENBQUMsRUFBQyxNQUhKO0FBSUUsUUFBQSxLQUFLLEVBQUMsSUFKUjtBQUtFLFFBQUEsTUFBTSxFQUFDLEdBTFQ7QUFNRSxRQUFBLEVBQUUsRUFBQztBQU5MLFFBWEYsZUFtQkU7QUFBTSxRQUFBLENBQUMsRUFBQyxHQUFSO0FBQVksUUFBQSxDQUFDLEVBQUMsSUFBZDtBQUFtQixRQUFBLEtBQUssRUFBQyxJQUF6QjtBQUE4QixRQUFBLE1BQU0sRUFBQyxHQUFyQztBQUF5QyxRQUFBLEVBQUUsRUFBQztBQUE1QyxRQW5CRixDQURGLENBREY7QUF5QkQ7OztFQXJDZ0NDLGdCOzs7aUNBQWRGLEssZUFDQTtBQUNqQjtBQUNBRyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQztBQUZELEM7aUNBREFMLEssa0JBTUc7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCRyxFQUFBQSxtQkFBbUIsRUFBRTtBQUZELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGxpdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy1zcGxpdCdcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcuNTAwMDAwLCA3LjUwMDAwMClcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE5LjUsNDcuNDEzNzkzMSBDMTkuNSw0OC44NDIxMTU3IDIwLjYxOTI4ODEsNTAgMjIsNTAgQzIzLjM4MDcxMTksNTAgMjQuNSw0OC44NDIxMTU3IDI0LjUsNDcuNDEzNzkzMSBMMjQuNSwyLjU4NjIwNjkgQzI0LjUsMS4xNTc4ODQyNyAyMy4zODA3MTE5LDAgMjIsMCBDMjAuNjE5Mjg4MSwwIDE5LjUsMS4xNTc4ODQyNyAxOS41LDIuNTg2MjA2OSBMMTkuNSw0Ny40MTM3OTMxIFpcIiAvPlxuICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjRcIiB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNVwiIHJ4PVwiMi41XCIgLz5cbiAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIuNTAwMDAwLCAyNC41MDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMi41MDAwMDAsIC0yNC41MDAwMDApIFwiXG4gICAgICAgICAgICB4PVwiLTE4XCJcbiAgICAgICAgICAgIHk9XCIyMlwiXG4gICAgICAgICAgICB3aWR0aD1cIjQxXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjVcIlxuICAgICAgICAgICAgcng9XCIyLjVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0MS41MDAwMDAsIDI1LjAwMDAwMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC00MS41MDAwMDAsIC0yNS4wMDAwMDApIFwiXG4gICAgICAgICAgICB4PVwiMjAuNVwiXG4gICAgICAgICAgICB5PVwiMjIuNVwiXG4gICAgICAgICAgICB3aWR0aD1cIjQyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjVcIlxuICAgICAgICAgICAgcng9XCIyLjVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiNDFcIiB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNVwiIHJ4PVwiMi41XCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==