"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnimationSpeedSliderFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rangeSlider = _interopRequireDefault(require("../range-slider"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _defaultSettings = require("../../../constants/default-settings");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SliderWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"])));

var SpeedSliderContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  bottom: 50px;\n  right: calc(0% - 32px);\n  width: 180px;\n  padding: 2px 8px 2px 12px;\n  background-color: ", ";\n  box-shadow: -2px -2px 0 0 rgba(0, 0, 0, 0.1);\n\n  .kg-range-slider__input {\n    width: 48px;\n    padding: 6px;\n  }\n"])), function (props) {
  return props.theme.bottomWidgetBgd;
});

AnimationSpeedSliderFactory.deps = [_rangeSlider["default"]];

function AnimationSpeedSliderFactory(RangeSlider) {
  var AnimationSpeedSlider = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(AnimationSpeedSlider, _Component);

    var _super = _createSuper(AnimationSpeedSlider);

    function AnimationSpeedSlider() {
      var _this;

      (0, _classCallCheck2["default"])(this, AnimationSpeedSlider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
        _this.props.onHide();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (v) {
        return _this.props.updateAnimationSpeed(v[1]);
      });
      return _this;
    }

    (0, _createClass2["default"])(AnimationSpeedSlider, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(SpeedSliderContainer, {
          className: "animation-control__speed-slider"
        }, /*#__PURE__*/_react["default"].createElement(SliderWrapper, null, /*#__PURE__*/_react["default"].createElement(RangeSlider, {
          range: _defaultSettings.SPEED_CONTROL_RANGE,
          step: _defaultSettings.SPEED_CONTROL_STEP,
          value0: 0,
          value1: this.props.speed,
          onChange: this._onChange,
          isRanged: false,
          showTooltip: true,
          showInput: true,
          inputTheme: "secondary",
          inputSize: "tiny"
        })));
      }
    }]);
    return AnimationSpeedSlider;
  }(_react.Component);

  return (0, _reactOnclickoutside["default"])(AnimationSpeedSlider);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9hbmltYXRpb24tc3BlZWQtc2xpZGVyLmpzIl0sIm5hbWVzIjpbIlNsaWRlcldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJTcGVlZFNsaWRlckNvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJib3R0b21XaWRnZXRCZ2QiLCJBbmltYXRpb25TcGVlZFNsaWRlckZhY3RvcnkiLCJkZXBzIiwiUmFuZ2VTbGlkZXJGYWN0b3J5IiwiUmFuZ2VTbGlkZXIiLCJBbmltYXRpb25TcGVlZFNsaWRlciIsImUiLCJvbkhpZGUiLCJ2IiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJTUEVFRF9DT05UUk9MX1JBTkdFIiwiU1BFRURfQ09OVFJPTF9TVEVQIiwic3BlZWQiLCJfb25DaGFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyw2QkFBT0MsR0FBViwrR0FBbkI7O0FBSUEsSUFBTUMsb0JBQW9CLEdBQUdGLDZCQUFPQyxHQUFWLGtXQU1KLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsZUFBaEI7QUFBQSxDQU5ELENBQTFCOztBQWVBQywyQkFBMkIsQ0FBQ0MsSUFBNUIsR0FBbUMsQ0FBQ0MsdUJBQUQsQ0FBbkM7O0FBRWUsU0FBU0YsMkJBQVQsQ0FBcUNHLFdBQXJDLEVBQWtEO0FBQUEsTUFDekRDLG9CQUR5RDtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkdBRXhDLFVBQUFDLENBQUMsRUFBSTtBQUN4QixjQUFLUixLQUFMLENBQVdTLE1BQVg7QUFDRCxPQUo0RDtBQUFBLG9HQU1qRCxVQUFBQyxDQUFDO0FBQUEsZUFBSSxNQUFLVixLQUFMLENBQVdXLG9CQUFYLENBQWdDRCxDQUFDLENBQUMsQ0FBRCxDQUFqQyxDQUFKO0FBQUEsT0FOZ0Q7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxhQVE3RCxrQkFBUztBQUNQLDRCQUNFLGdDQUFDLG9CQUFEO0FBQXNCLFVBQUEsU0FBUyxFQUFDO0FBQWhDLHdCQUNFLGdDQUFDLGFBQUQscUJBQ0UsZ0NBQUMsV0FBRDtBQUNFLFVBQUEsS0FBSyxFQUFFRSxvQ0FEVDtBQUVFLFVBQUEsSUFBSSxFQUFFQyxtQ0FGUjtBQUdFLFVBQUEsTUFBTSxFQUFFLENBSFY7QUFJRSxVQUFBLE1BQU0sRUFBRSxLQUFLYixLQUFMLENBQVdjLEtBSnJCO0FBS0UsVUFBQSxRQUFRLEVBQUUsS0FBS0MsU0FMakI7QUFNRSxVQUFBLFFBQVEsRUFBRSxLQU5aO0FBT0UsVUFBQSxXQUFXLE1BUGI7QUFRRSxVQUFBLFNBQVMsTUFSWDtBQVNFLFVBQUEsVUFBVSxFQUFDLFdBVGI7QUFVRSxVQUFBLFNBQVMsRUFBQztBQVZaLFVBREYsQ0FERixDQURGO0FBa0JEO0FBM0I0RDtBQUFBO0FBQUEsSUFDNUJDLGdCQUQ0Qjs7QUE4Qi9ELFNBQU8scUNBQWVULG9CQUFmLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmFuZ2VTbGlkZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3JhbmdlLXNsaWRlcic7XG5pbXBvcnQgb25DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xuaW1wb3J0IHtTUEVFRF9DT05UUk9MX1JBTkdFLCBTUEVFRF9DT05UUk9MX1NURVB9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFNwZWVkU2xpZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiBjYWxjKDAlIC0gMzJweCk7XG4gIHdpZHRoOiAxODBweDtcbiAgcGFkZGluZzogMnB4IDhweCAycHggMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3R0b21XaWRnZXRCZ2R9O1xuICBib3gtc2hhZG93OiAtMnB4IC0ycHggMCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAua2ctcmFuZ2Utc2xpZGVyX19pbnB1dCB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgcGFkZGluZzogNnB4O1xuICB9XG5gO1xuXG5BbmltYXRpb25TcGVlZFNsaWRlckZhY3RvcnkuZGVwcyA9IFtSYW5nZVNsaWRlckZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRpb25TcGVlZFNsaWRlckZhY3RvcnkoUmFuZ2VTbGlkZXIpIHtcbiAgY2xhc3MgQW5pbWF0aW9uU3BlZWRTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGhhbmRsZUNsaWNrT3V0c2lkZSA9IGUgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcbiAgICB9O1xuXG4gICAgX29uQ2hhbmdlID0gdiA9PiB0aGlzLnByb3BzLnVwZGF0ZUFuaW1hdGlvblNwZWVkKHZbMV0pO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNwZWVkU2xpZGVyQ29udGFpbmVyIGNsYXNzTmFtZT1cImFuaW1hdGlvbi1jb250cm9sX19zcGVlZC1zbGlkZXJcIj5cbiAgICAgICAgICA8U2xpZGVyV3JhcHBlcj5cbiAgICAgICAgICAgIDxSYW5nZVNsaWRlclxuICAgICAgICAgICAgICByYW5nZT17U1BFRURfQ09OVFJPTF9SQU5HRX1cbiAgICAgICAgICAgICAgc3RlcD17U1BFRURfQ09OVFJPTF9TVEVQfVxuICAgICAgICAgICAgICB2YWx1ZTA9ezB9XG4gICAgICAgICAgICAgIHZhbHVlMT17dGhpcy5wcm9wcy5zcGVlZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfVxuICAgICAgICAgICAgICBpc1JhbmdlZD17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dUb29sdGlwXG4gICAgICAgICAgICAgIHNob3dJbnB1dFxuICAgICAgICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgaW5wdXRTaXplPVwidGlueVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU2xpZGVyV3JhcHBlcj5cbiAgICAgICAgPC9TcGVlZFNsaWRlckNvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9uQ2xpY2tPdXRzaWRlKEFuaW1hdGlvblNwZWVkU2xpZGVyKTtcbn1cbiJdfQ==