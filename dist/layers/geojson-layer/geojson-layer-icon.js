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

var GeojsonLayerIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GeojsonLayerIcon, _Component);

  var _super = _createSuper(GeojsonLayerIcon);

  function GeojsonLayerIcon() {
    (0, _classCallCheck2["default"])(this, GeojsonLayerIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GeojsonLayerIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr1",
        points: "25.04 23.08 9.72 31.79 8.19 43.2 19.57 53.83 28.79 53.83 35.6 46.57 39.45 30.08 25.04 23.08"
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr2",
        points: "52.8 26.3 41.74 30.32 37.9 46.75 45.26 53.83 51.45 53.83 55.07 43.51 52.8 26.3",
        style: {
          opacity: 0.8
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr3",
        points: "36.69 48.75 31.93 53.83 41.96 53.83 36.69 48.75",
        style: {
          opacity: 0.4
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr3",
        points: "25.95 20.98 40.84 28.22 52.57 24.06 50.89 11.5 23.24 11.5 25.95 20.98",
        style: {
          opacity: 0.4
        }
      }), /*#__PURE__*/_react["default"].createElement("polygon", {
        className: "cr4",
        points: "20.79 11.9 11.73 15.72 10.08 28.96 23.64 21.25 20.79 11.9",
        style: {
          opacity: 0.8
        }
      }));
    }
  }]);
  return GeojsonLayerIcon;
}(_react.Component);

exports["default"] = GeojsonLayerIcon;
(0, _defineProperty2["default"])(GeojsonLayerIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(GeojsonLayerIcon, "defaultProps", {
  height: null,
  size: 'tiny',
  predefinedClassName: 'geojson-layer-icon'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvZ2VvanNvbi1sYXllci9nZW9qc29uLWxheWVyLWljb24uanMiXSwibmFtZXMiOlsiR2VvanNvbkxheWVySWNvbiIsInByb3BzIiwib3BhY2l0eSIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsImNvbG9ycyIsImFycmF5T2YiLCJzaXplIiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7V0FhbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLE1BQU0sRUFBQztBQUZULFFBREYsZUFLRTtBQUNFLFFBQUEsU0FBUyxFQUFDLEtBRFo7QUFFRSxRQUFBLE1BQU0sRUFBQyxnRkFGVDtBQUdFLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLE9BQU8sRUFBRTtBQUFWO0FBSFQsUUFMRixlQVVFO0FBQ0UsUUFBQSxTQUFTLEVBQUMsS0FEWjtBQUVFLFFBQUEsTUFBTSxFQUFDLGlEQUZUO0FBR0UsUUFBQSxLQUFLLEVBQUU7QUFBQ0EsVUFBQUEsT0FBTyxFQUFFO0FBQVY7QUFIVCxRQVZGLGVBZUU7QUFDRSxRQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsUUFBQSxNQUFNLEVBQUMsdUVBRlQ7QUFHRSxRQUFBLEtBQUssRUFBRTtBQUFDQSxVQUFBQSxPQUFPLEVBQUU7QUFBVjtBQUhULFFBZkYsZUFvQkU7QUFDRSxRQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsUUFBQSxNQUFNLEVBQUMsMkRBRlQ7QUFHRSxRQUFBLEtBQUssRUFBRTtBQUFDQSxVQUFBQSxPQUFPLEVBQUU7QUFBVjtBQUhULFFBcEJGLENBREY7QUE0QkQ7OztFQTFDMkNDLGdCOzs7aUNBQXpCSCxnQixlQUNBO0FBQ2pCO0FBQ0FJLEVBQUFBLE1BQU0sRUFBRUMsc0JBQVVDLE1BRkQ7QUFHakJDLEVBQUFBLE1BQU0sRUFBRUYsc0JBQVVHLE9BQVYsQ0FBa0JILHNCQUFVQyxNQUE1QjtBQUhTLEM7aUNBREFOLGdCLGtCQU9HO0FBQ3BCSSxFQUFBQSxNQUFNLEVBQUUsSUFEWTtBQUVwQkssRUFBQUEsSUFBSSxFQUFFLE1BRmM7QUFHcEJDLEVBQUFBLG1CQUFtQixFQUFFO0FBSEQsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9qc29uTGF5ZXJJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKiogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24sIGV4LiAnMTZweCcgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiBudWxsLFxuICAgIHNpemU6ICd0aW55JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZ2VvanNvbi1sYXllci1pY29uJ1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2Ugey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8cG9seWdvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyMVwiXG4gICAgICAgICAgcG9pbnRzPVwiMjUuMDQgMjMuMDggOS43MiAzMS43OSA4LjE5IDQzLjIgMTkuNTcgNTMuODMgMjguNzkgNTMuODMgMzUuNiA0Ni41NyAzOS40NSAzMC4wOCAyNS4wNCAyMy4wOFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3IyXCJcbiAgICAgICAgICBwb2ludHM9XCI1Mi44IDI2LjMgNDEuNzQgMzAuMzIgMzcuOSA0Ni43NSA0NS4yNiA1My44MyA1MS40NSA1My44MyA1NS4wNyA0My41MSA1Mi44IDI2LjNcIlxuICAgICAgICAgIHN0eWxlPXt7b3BhY2l0eTogMC44fX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJjcjNcIlxuICAgICAgICAgIHBvaW50cz1cIjM2LjY5IDQ4Ljc1IDMxLjkzIDUzLjgzIDQxLjk2IDUzLjgzIDM2LjY5IDQ4Ljc1XCJcbiAgICAgICAgICBzdHlsZT17e29wYWNpdHk6IDAuNH19XG4gICAgICAgIC8+XG4gICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3IzXCJcbiAgICAgICAgICBwb2ludHM9XCIyNS45NSAyMC45OCA0MC44NCAyOC4yMiA1Mi41NyAyNC4wNiA1MC44OSAxMS41IDIzLjI0IDExLjUgMjUuOTUgMjAuOThcIlxuICAgICAgICAgIHN0eWxlPXt7b3BhY2l0eTogMC40fX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJjcjRcIlxuICAgICAgICAgIHBvaW50cz1cIjIwLjc5IDExLjkgMTEuNzMgMTUuNzIgMTAuMDggMjguOTYgMjMuNjQgMjEuMjUgMjAuNzkgMTEuOVwiXG4gICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OiAwLjh9fVxuICAgICAgICAvPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==