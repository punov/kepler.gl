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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper component in modals contain cloud providers.
 * It set default provider by checking which provider has logged in
 * @component
 */
var ProviderModalContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ProviderModalContainer, _Component);

  var _super = _createSuper(ProviderModalContainer);

  function ProviderModalContainer() {
    (0, _classCallCheck2["default"])(this, ProviderModalContainer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ProviderModalContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setDefaultProvider();
    }
  }, {
    key: "_setDefaultProvider",
    value: function _setDefaultProvider() {
      if (!this.props.currentProvider && this.props.cloudProviders.length) {
        var connected = this.props.cloudProviders.find(function (p) {
          return typeof p.getAccessToken === 'function' && p.getAccessToken();
        });

        if (connected && typeof this.props.onSetCloudProvider === 'function') {
          this.props.onSetCloudProvider(connected.name);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.props.children);
    }
  }]);
  return ProviderModalContainer;
}(_react.Component);

exports["default"] = ProviderModalContainer;
(0, _defineProperty2["default"])(ProviderModalContainer, "propTypes", {
  onSetCloudProvider: _propTypes["default"].func.isRequired,
  cloudProviders: _propTypes["default"].arrayOf(_propTypes["default"].object),
  currentProvider: _propTypes["default"].string
});
(0, _defineProperty2["default"])(ProviderModalContainer, "defaultProps", {
  cloudProviders: [],
  currentProvider: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9wcm92aWRlci1tb2RhbC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiUHJvdmlkZXJNb2RhbENvbnRhaW5lciIsIl9zZXREZWZhdWx0UHJvdmlkZXIiLCJwcm9wcyIsImN1cnJlbnRQcm92aWRlciIsImNsb3VkUHJvdmlkZXJzIiwibGVuZ3RoIiwiY29ubmVjdGVkIiwiZmluZCIsInAiLCJnZXRBY2Nlc3NUb2tlbiIsIm9uU2V0Q2xvdWRQcm92aWRlciIsIm5hbWUiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ3FCQSxzQjs7Ozs7Ozs7Ozs7O1dBWW5CLDZCQUFvQjtBQUNsQixXQUFLQyxtQkFBTDtBQUNEOzs7V0FFRCwrQkFBc0I7QUFDcEIsVUFBSSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0MsZUFBWixJQUErQixLQUFLRCxLQUFMLENBQVdFLGNBQVgsQ0FBMEJDLE1BQTdELEVBQXFFO0FBQ25FLFlBQU1DLFNBQVMsR0FBRyxLQUFLSixLQUFMLENBQVdFLGNBQVgsQ0FBMEJHLElBQTFCLENBQ2hCLFVBQUFDLENBQUM7QUFBQSxpQkFBSSxPQUFPQSxDQUFDLENBQUNDLGNBQVQsS0FBNEIsVUFBNUIsSUFBMENELENBQUMsQ0FBQ0MsY0FBRixFQUE5QztBQUFBLFNBRGUsQ0FBbEI7O0FBSUEsWUFBSUgsU0FBUyxJQUFJLE9BQU8sS0FBS0osS0FBTCxDQUFXUSxrQkFBbEIsS0FBeUMsVUFBMUQsRUFBc0U7QUFDcEUsZUFBS1IsS0FBTCxDQUFXUSxrQkFBWCxDQUE4QkosU0FBUyxDQUFDSyxJQUF4QztBQUNEO0FBQ0Y7QUFDRjs7O1dBRUQsa0JBQVM7QUFDUCwwQkFBTyxrRUFBRyxLQUFLVCxLQUFMLENBQVdVLFFBQWQsQ0FBUDtBQUNEOzs7RUE5QmlEQyxnQjs7O2lDQUEvQmIsc0IsZUFDQTtBQUNqQlUsRUFBQUEsa0JBQWtCLEVBQUVJLHNCQUFVQyxJQUFWLENBQWVDLFVBRGxCO0FBRWpCWixFQUFBQSxjQUFjLEVBQUVVLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksTUFBNUIsQ0FGQztBQUdqQmYsRUFBQUEsZUFBZSxFQUFFVyxzQkFBVUs7QUFIVixDO2lDQURBbkIsc0Isa0JBT0c7QUFDcEJJLEVBQUFBLGNBQWMsRUFBRSxFQURJO0FBRXBCRCxFQUFBQSxlQUFlLEVBQUU7QUFGRyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEEgd3JhcHBlciBjb21wb25lbnQgaW4gbW9kYWxzIGNvbnRhaW4gY2xvdWQgcHJvdmlkZXJzLlxuICogSXQgc2V0IGRlZmF1bHQgcHJvdmlkZXIgYnkgY2hlY2tpbmcgd2hpY2ggcHJvdmlkZXIgaGFzIGxvZ2dlZCBpblxuICogQGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlck1vZGFsQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvblNldENsb3VkUHJvdmlkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2xvdWRQcm92aWRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIGN1cnJlbnRQcm92aWRlcjogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xvdWRQcm92aWRlcnM6IFtdLFxuICAgIGN1cnJlbnRQcm92aWRlcjogbnVsbFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRQcm92aWRlcigpO1xuICB9XG5cbiAgX3NldERlZmF1bHRQcm92aWRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY3VycmVudFByb3ZpZGVyICYmIHRoaXMucHJvcHMuY2xvdWRQcm92aWRlcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjb25uZWN0ZWQgPSB0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzLmZpbmQoXG4gICAgICAgIHAgPT4gdHlwZW9mIHAuZ2V0QWNjZXNzVG9rZW4gPT09ICdmdW5jdGlvbicgJiYgcC5nZXRBY2Nlc3NUb2tlbigpXG4gICAgICApO1xuXG4gICAgICBpZiAoY29ubmVjdGVkICYmIHR5cGVvZiB0aGlzLnByb3BzLm9uU2V0Q2xvdWRQcm92aWRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2V0Q2xvdWRQcm92aWRlcihjb25uZWN0ZWQubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvPjtcbiAgfVxufVxuIl19