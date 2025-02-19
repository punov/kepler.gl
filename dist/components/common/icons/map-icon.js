"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var MapIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MapIcon, _Component);

  var _super = _createSuper(MapIcon);

  function MapIcon() {
    (0, _classCallCheck2["default"])(this, MapIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MapIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({}, this.props, {
        viewBox: '0 0 602 602'
      }), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M573.864,323.679l25.6-201.737L409.988,50.046L197.993,151.289L0,67.678l27.935,220.105L2.223,506.009l208.665,39.135 l200.136-38.125l189.865,43.823L573.864,323.679z M210.855,522.625L26.64,488.076l23.732-199.335L26.803,103.007l171.761,72.543 L410.987,74.083l164.331,62.361l-23.755,187.142l23.648,198.602l-163.764-37.782L210.855,522.625z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M506.021,405.449c-5.509,0-10.604,1.596-15.049,4.167c-17.531-12.832-35.583-27.904-36.47-47.735 c-1.217-27.195,15.439-53.227-3.623-78.182c-18.625-24.382-66.301-7.944-84.73-26.264c2.873-4.617,4.593-10.01,4.593-15.844 c0-16.671-13.519-30.192-30.187-30.192c-16.68,0-30.192,13.515-30.192,30.192c0,9.561,4.534,17.98,11.467,23.513 c-2.907,7.358-4.729,15.167-5.048,23.141c-0.496,12.596,3.121,25.126,0.391,37.634c-2.252,10.391-16.875,9.729-24.757,9.788 c-19.875,0.177-48.202-3.57-61.023,10.462c-3.783-2.843-8.207-4.812-13.077-5.621c-2.87-25.848,2.098-51.102-20.824-70.985 c-14.736-12.794-38.846-18.344-52.438-32.719c2.873-4.619,4.61-10.031,4.61-15.871c0-16.674-13.515-30.198-30.189-30.198 c-16.668,0-30.192,13.515-30.192,30.198c0,16.668,13.515,30.183,30.192,30.183c5.562,0,10.707-1.604,15.179-4.229 c10.048,10.083,23.915,16.784,36.892,23.56c16.529,8.627,28.844,19.698,31.108,39.283c1.241,10.734,0.762,21.291,1.46,31.854 c-12.135,3.918-20.978,15.16-20.978,28.602c0,16.681,13.515,30.192,30.195,30.192c16.668,0,30.189-13.512,30.189-30.192 c0-3.942-0.81-7.701-2.189-11.159c10.024-18.063,56.066-5.745,73.423-11.55c12.644-4.238,17.13-16.083,18.247-28.365 c1.063-11.473-2.637-22.757-0.91-34.283c0.686-4.69,1.867-9.224,3.439-13.55c1.644,0.271,3.311,0.502,5.024,0.502 c5.308,0,10.22-1.489,14.559-3.904c18.684,18.713,55.768,6.174,79.328,20.271c28.017,16.754-0.792,64.046,8.051,89.309 c6.123,17.472,22.13,30.499,37.994,42.232c-2.902,4.64-4.664,10.084-4.664,15.953c0,16.681,13.507,30.192,30.198,30.192 c16.657,0,30.192-13.512,30.192-30.192C536.213,418.979,522.689,405.449,506.021,405.449z"
      })));
    }
  }]);
  return MapIcon;
}(_react.Component);

(0, _defineProperty2["default"])(MapIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(MapIcon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-map-icon',
  totalColor: 1
});
var _default = MapIcon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9tYXAtaWNvbi5qcyJdLCJuYW1lcyI6WyJNYXBJY29uIiwicHJvcHMiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJjb2xvcnMiLCJhcnJheU9mIiwicHJlZGVmaW5lZENsYXNzTmFtZSIsInRvdGFsQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7Ozs7Ozs7O1dBYUosa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxnQ0FBVSxLQUFLQyxLQUFmO0FBQXNCLFFBQUEsT0FBTyxFQUFFO0FBQS9CLHVCQUNFLHdEQUNFO0FBQ0UsUUFBQSxDQUFDLEVBQUM7QUFESixRQURGLGVBTUU7QUFDRSxRQUFBLENBQUMsRUFBQztBQURKLFFBTkYsQ0FERixDQURGO0FBMkJEOzs7RUF6Q21CQyxnQjs7aUNBQWhCRixPLGVBQ2U7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUMsTUFGRDtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFRixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVDLE1BQTVCO0FBSFMsQztpQ0FEZkwsTyxrQkFPa0I7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCSyxFQUFBQSxtQkFBbUIsRUFBRSx3QkFGRDtBQUdwQkMsRUFBQUEsVUFBVSxFQUFFO0FBSFEsQztlQXFDVFQsTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbmNsYXNzIE1hcEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy1tYXAtaWNvbicsXG4gICAgdG90YWxDb2xvcjogMVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2Ugey4uLnRoaXMucHJvcHN9IHZpZXdCb3g9eycwIDAgNjAyIDYwMid9PlxuICAgICAgICA8Zz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk01NzMuODY0LDMyMy42NzlsMjUuNi0yMDEuNzM3TDQwOS45ODgsNTAuMDQ2TDE5Ny45OTMsMTUxLjI4OUwwLDY3LjY3OGwyNy45MzUsMjIwLjEwNUwyLjIyMyw1MDYuMDA5bDIwOC42NjUsMzkuMTM1XG5cdFx0XHRsMjAwLjEzNi0zOC4xMjVsMTg5Ljg2NSw0My44MjNMNTczLjg2NCwzMjMuNjc5eiBNMjEwLjg1NSw1MjIuNjI1TDI2LjY0LDQ4OC4wNzZsMjMuNzMyLTE5OS4zMzVMMjYuODAzLDEwMy4wMDdsMTcxLjc2MSw3Mi41NDNcblx0XHRcdEw0MTAuOTg3LDc0LjA4M2wxNjQuMzMxLDYyLjM2MWwtMjMuNzU1LDE4Ny4xNDJsMjMuNjQ4LDE5OC42MDJsLTE2My43NjQtMzcuNzgyTDIxMC44NTUsNTIyLjYyNXpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNTA2LjAyMSw0MDUuNDQ5Yy01LjUwOSwwLTEwLjYwNCwxLjU5Ni0xNS4wNDksNC4xNjdjLTE3LjUzMS0xMi44MzItMzUuNTgzLTI3LjkwNC0zNi40Ny00Ny43MzVcblx0XHRcdGMtMS4yMTctMjcuMTk1LDE1LjQzOS01My4yMjctMy42MjMtNzguMTgyYy0xOC42MjUtMjQuMzgyLTY2LjMwMS03Ljk0NC04NC43My0yNi4yNjRjMi44NzMtNC42MTcsNC41OTMtMTAuMDEsNC41OTMtMTUuODQ0XG5cdFx0XHRjMC0xNi42NzEtMTMuNTE5LTMwLjE5Mi0zMC4xODctMzAuMTkyYy0xNi42OCwwLTMwLjE5MiwxMy41MTUtMzAuMTkyLDMwLjE5MmMwLDkuNTYxLDQuNTM0LDE3Ljk4LDExLjQ2NywyMy41MTNcblx0XHRcdGMtMi45MDcsNy4zNTgtNC43MjksMTUuMTY3LTUuMDQ4LDIzLjE0MWMtMC40OTYsMTIuNTk2LDMuMTIxLDI1LjEyNiwwLjM5MSwzNy42MzRjLTIuMjUyLDEwLjM5MS0xNi44NzUsOS43MjktMjQuNzU3LDkuNzg4XG5cdFx0XHRjLTE5Ljg3NSwwLjE3Ny00OC4yMDItMy41Ny02MS4wMjMsMTAuNDYyYy0zLjc4My0yLjg0My04LjIwNy00LjgxMi0xMy4wNzctNS42MjFjLTIuODctMjUuODQ4LDIuMDk4LTUxLjEwMi0yMC44MjQtNzAuOTg1XG5cdFx0XHRjLTE0LjczNi0xMi43OTQtMzguODQ2LTE4LjM0NC01Mi40MzgtMzIuNzE5YzIuODczLTQuNjE5LDQuNjEtMTAuMDMxLDQuNjEtMTUuODcxYzAtMTYuNjc0LTEzLjUxNS0zMC4xOTgtMzAuMTg5LTMwLjE5OFxuXHRcdFx0Yy0xNi42NjgsMC0zMC4xOTIsMTMuNTE1LTMwLjE5MiwzMC4xOThjMCwxNi42NjgsMTMuNTE1LDMwLjE4MywzMC4xOTIsMzAuMTgzYzUuNTYyLDAsMTAuNzA3LTEuNjA0LDE1LjE3OS00LjIyOVxuXHRcdFx0YzEwLjA0OCwxMC4wODMsMjMuOTE1LDE2Ljc4NCwzNi44OTIsMjMuNTZjMTYuNTI5LDguNjI3LDI4Ljg0NCwxOS42OTgsMzEuMTA4LDM5LjI4M2MxLjI0MSwxMC43MzQsMC43NjIsMjEuMjkxLDEuNDYsMzEuODU0XG5cdFx0XHRjLTEyLjEzNSwzLjkxOC0yMC45NzgsMTUuMTYtMjAuOTc4LDI4LjYwMmMwLDE2LjY4MSwxMy41MTUsMzAuMTkyLDMwLjE5NSwzMC4xOTJjMTYuNjY4LDAsMzAuMTg5LTEzLjUxMiwzMC4xODktMzAuMTkyXG5cdFx0XHRjMC0zLjk0Mi0wLjgxLTcuNzAxLTIuMTg5LTExLjE1OWMxMC4wMjQtMTguMDYzLDU2LjA2Ni01Ljc0NSw3My40MjMtMTEuNTVjMTIuNjQ0LTQuMjM4LDE3LjEzLTE2LjA4MywxOC4yNDctMjguMzY1XG5cdFx0XHRjMS4wNjMtMTEuNDczLTIuNjM3LTIyLjc1Ny0wLjkxLTM0LjI4M2MwLjY4Ni00LjY5LDEuODY3LTkuMjI0LDMuNDM5LTEzLjU1YzEuNjQ0LDAuMjcxLDMuMzExLDAuNTAyLDUuMDI0LDAuNTAyXG5cdFx0XHRjNS4zMDgsMCwxMC4yMi0xLjQ4OSwxNC41NTktMy45MDRjMTguNjg0LDE4LjcxMyw1NS43NjgsNi4xNzQsNzkuMzI4LDIwLjI3MWMyOC4wMTcsMTYuNzU0LTAuNzkyLDY0LjA0Niw4LjA1MSw4OS4zMDlcblx0XHRcdGM2LjEyMywxNy40NzIsMjIuMTMsMzAuNDk5LDM3Ljk5NCw0Mi4yMzJjLTIuOTAyLDQuNjQtNC42NjQsMTAuMDg0LTQuNjY0LDE1Ljk1M2MwLDE2LjY4MSwxMy41MDcsMzAuMTkyLDMwLjE5OCwzMC4xOTJcblx0XHRcdGMxNi42NTcsMCwzMC4xOTItMTMuNTEyLDMwLjE5Mi0zMC4xOTJDNTM2LjIxMyw0MTguOTc5LDUyMi42ODksNDA1LjQ0OSw1MDYuMDIxLDQwNS40NDl6XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L0Jhc2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBJY29uO1xuIl19