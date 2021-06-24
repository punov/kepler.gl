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

var _base = _interopRequireDefault(require("../../components/common/icons/base"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HexagonLayerIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(HexagonLayerIcon, _Component);

  var _super = _createSuper(HexagonLayerIcon);

  function HexagonLayerIcon() {
    (0, _classCallCheck2["default"])(this, HexagonLayerIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(HexagonLayerIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr1",
        points: "23.9,10 30.9,14 30.9,22.1 23.9,26.2 16.8,22.1 16.8,14 ",
        style: {
          opacity: 0.6
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr2",
        points: "23.9,37.8 30.9,41.9 30.9,50 23.9,54 16.8,50 16.8,41.9 ",
        style: {
          opacity: 0.4
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr6",
        points: "40.1,10 47.2,14 47.2,22.1 40.1,26.2 33.1,22.1 33.1,14 "
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr3",
        points: "40.1,37.8 47.2,41.9 47.2,50 40.1,54 33.1,50 33.1,41.9 ",
        style: {
          opacity: 0.8
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr1",
        points: "15.8,23.9 22.8,27.9 22.8,36.1 15.8,40.1 8.7,36.1 8.7,27.9 "
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr4",
        points: "32,23.9 39,27.9 39,36.1 32,40.1 25,36.1 25,27.9 ",
        style: {
          opacity: 0.8
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr5",
        points: "48.2,23.9 55.3,27.9 55.3,36.1 48.2,40.1 41.2,36.1 41.2,27.9 ",
        style: {
          opacity: 0.4
        }
      }));
    }
  }]);
  return HexagonLayerIcon;
}(_react.Component);

exports["default"] = HexagonLayerIcon;
(0, _defineProperty2["default"])(HexagonLayerIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(HexagonLayerIcon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'hexagon-layer-icon',
  totalColor: 6
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGV4YWdvbi1sYXllci9oZXhhZ29uLWxheWVyLWljb24uanMiXSwibmFtZXMiOlsiSGV4YWdvbkxheWVySWNvbiIsInByb3BzIiwib3BhY2l0eSIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsImNvbG9ycyIsImFycmF5T2YiLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIiwidG90YWxDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7V0FhbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLE1BQU0sRUFBQyx3REFGVDtBQUdFLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLE9BQU8sRUFBRTtBQUFWO0FBSFQsUUFERixlQU1FO0FBQ0UsUUFBQSxTQUFTLEVBQUMsS0FEWjtBQUVFLFFBQUEsTUFBTSxFQUFDLHdEQUZUO0FBR0UsUUFBQSxLQUFLLEVBQUU7QUFBQ0EsVUFBQUEsT0FBTyxFQUFFO0FBQVY7QUFIVCxRQU5GLGVBV0U7QUFBUyxRQUFBLFNBQVMsRUFBQyxLQUFuQjtBQUF5QixRQUFBLE1BQU0sRUFBQztBQUFoQyxRQVhGLGVBWUU7QUFDRSxRQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsUUFBQSxNQUFNLEVBQUMsd0RBRlQ7QUFHRSxRQUFBLEtBQUssRUFBRTtBQUFDQSxVQUFBQSxPQUFPLEVBQUU7QUFBVjtBQUhULFFBWkYsZUFpQkU7QUFDRSxRQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsUUFBQSxNQUFNLEVBQUM7QUFGVCxRQWpCRixlQXFCRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLE1BQU0sRUFBQyxrREFGVDtBQUdFLFFBQUEsS0FBSyxFQUFFO0FBQUNBLFVBQUFBLE9BQU8sRUFBRTtBQUFWO0FBSFQsUUFyQkYsZUEwQkU7QUFDRSxRQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsUUFBQSxNQUFNLEVBQUMsOERBRlQ7QUFHRSxRQUFBLEtBQUssRUFBRTtBQUFDQSxVQUFBQSxPQUFPLEVBQUU7QUFBVjtBQUhULFFBMUJGLENBREY7QUFrQ0Q7OztFQWhEMkNDLGdCOzs7aUNBQXpCSCxnQixlQUNBO0FBQ2pCO0FBQ0FJLEVBQUFBLE1BQU0sRUFBRUMsc0JBQVVDLE1BRkQ7QUFHakJDLEVBQUFBLE1BQU0sRUFBRUYsc0JBQVVHLE9BQVYsQ0FBa0JILHNCQUFVQyxNQUE1QjtBQUhTLEM7aUNBREFOLGdCLGtCQU9HO0FBQ3BCSSxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkssRUFBQUEsbUJBQW1CLEVBQUUsb0JBRkQ7QUFHcEJDLEVBQUFBLFVBQVUsRUFBRTtBQUhRLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucy9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGV4YWdvbkxheWVySWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbG9yczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogJzE2cHgnLFxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdoZXhhZ29uLWxheWVyLWljb24nLFxuICAgIHRvdGFsQ29sb3I6IDZcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJjcjFcIlxuICAgICAgICAgIHBvaW50cz1cIjIzLjksMTAgMzAuOSwxNCAzMC45LDIyLjEgMjMuOSwyNi4yIDE2LjgsMjIuMSAxNi44LDE0IFwiXG4gICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OiAwLjZ9fVxuICAgICAgICAvPlxuICAgICAgICA8cG9seWdvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyMlwiXG4gICAgICAgICAgcG9pbnRzPVwiMjMuOSwzNy44IDMwLjksNDEuOSAzMC45LDUwIDIzLjksNTQgMTYuOCw1MCAxNi44LDQxLjkgXCJcbiAgICAgICAgICBzdHlsZT17e29wYWNpdHk6IDAuNH19XG4gICAgICAgIC8+XG4gICAgICAgIDxwb2x5Z29uIGNsYXNzTmFtZT1cImNyNlwiIHBvaW50cz1cIjQwLjEsMTAgNDcuMiwxNCA0Ny4yLDIyLjEgNDAuMSwyNi4yIDMzLjEsMjIuMSAzMy4xLDE0IFwiIC8+XG4gICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3IzXCJcbiAgICAgICAgICBwb2ludHM9XCI0MC4xLDM3LjggNDcuMiw0MS45IDQ3LjIsNTAgNDAuMSw1NCAzMy4xLDUwIDMzLjEsNDEuOSBcIlxuICAgICAgICAgIHN0eWxlPXt7b3BhY2l0eTogMC44fX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJjcjFcIlxuICAgICAgICAgIHBvaW50cz1cIjE1LjgsMjMuOSAyMi44LDI3LjkgMjIuOCwzNi4xIDE1LjgsNDAuMSA4LjcsMzYuMSA4LjcsMjcuOSBcIlxuICAgICAgICAvPlxuICAgICAgICA8cG9seWdvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyNFwiXG4gICAgICAgICAgcG9pbnRzPVwiMzIsMjMuOSAzOSwyNy45IDM5LDM2LjEgMzIsNDAuMSAyNSwzNi4xIDI1LDI3LjkgXCJcbiAgICAgICAgICBzdHlsZT17e29wYWNpdHk6IDAuOH19XG4gICAgICAgIC8+XG4gICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3I1XCJcbiAgICAgICAgICBwb2ludHM9XCI0OC4yLDIzLjkgNTUuMywyNy45IDU1LjMsMzYuMSA0OC4yLDQwLjEgNDEuMiwzNi4xIDQxLjIsMjcuOSBcIlxuICAgICAgICAgIHN0eWxlPXt7b3BhY2l0eTogMC40fX1cbiAgICAgICAgLz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=