"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hexagonVisConfigs = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _layers = require("@deck.gl/layers");

var _aggregationLayer = _interopRequireDefault(require("../aggregation-layer"));

var _enhancedHexagonLayer = _interopRequireDefault(require("../../deckgl-layers/hexagon-layer/enhanced-hexagon-layer"));

var _hexagonUtils = require("./hexagon-utils");

var _hexagonLayerIcon = _interopRequireDefault(require("./hexagon-layer-icon"));

var _dataUtils = require("../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var hexagonVisConfigs = {
  opacity: 'opacity',
  worldUnitSize: 'worldUnitSize',
  resolution: 'resolution',
  colorRange: 'colorRange',
  coverage: 'coverage',
  sizeRange: 'elevationRange',
  percentile: 'percentile',
  elevationPercentile: 'elevationPercentile',
  elevationScale: 'elevationScale',
  enableElevationZoomFactor: 'enableElevationZoomFactor',
  colorAggregation: 'aggregation',
  sizeAggregation: 'sizeAggregation',
  enable3d: 'enable3d'
};
exports.hexagonVisConfigs = hexagonVisConfigs;

var HexagonLayer = /*#__PURE__*/function (_AggregationLayer) {
  (0, _inherits2["default"])(HexagonLayer, _AggregationLayer);

  var _super = _createSuper(HexagonLayer);

  function HexagonLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HexagonLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(hexagonVisConfigs);

    _this.visConfigSettings.worldUnitSize.label = 'columns.hexagon.worldUnitSize';
    return _this;
  }

  (0, _createClass2["default"])(HexagonLayer, [{
    key: "type",
    get: function get() {
      return 'hexagon';
    }
  }, {
    key: "name",
    get: function get() {
      return 'Hexbin';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _hexagonLayerIcon["default"];
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState;
      var zoomFactor = this.getZoomFactor(mapState);
      var visConfig = this.config.visConfig;
      var radius = visConfig.worldUnitSize * 1000;
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return [new _enhancedHexagonLayer["default"](_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultAggregationLayerProp(opts)), data), {}, {
        wrapLongitude: false,
        radius: radius
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject && !visConfig.enable3d ? [new _layers.GeoJsonLayer(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), {}, {
        wrapLongitude: false,
        data: [(0, _hexagonUtils.hexagonToPolygonGeo)(hoveredObject, {}, radius * visConfig.coverage, mapState)].filter(function (d) {
          return d;
        }),
        getLineColor: this.config.highlightColor,
        lineWidthScale: (0, _dataUtils.clamp)([1, 100], radius * 0.1 * zoomFactor)
      }))] : []));
    }
  }]);
  return HexagonLayer;
}(_aggregationLayer["default"]);

exports["default"] = HexagonLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGV4YWdvbi1sYXllci9oZXhhZ29uLWxheWVyLmpzIl0sIm5hbWVzIjpbImhleGFnb25WaXNDb25maWdzIiwib3BhY2l0eSIsIndvcmxkVW5pdFNpemUiLCJyZXNvbHV0aW9uIiwiY29sb3JSYW5nZSIsImNvdmVyYWdlIiwic2l6ZVJhbmdlIiwicGVyY2VudGlsZSIsImVsZXZhdGlvblBlcmNlbnRpbGUiLCJlbGV2YXRpb25TY2FsZSIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3IiLCJjb2xvckFnZ3JlZ2F0aW9uIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiZW5hYmxlM2QiLCJIZXhhZ29uTGF5ZXIiLCJwcm9wcyIsInJlZ2lzdGVyVmlzQ29uZmlnIiwidmlzQ29uZmlnU2V0dGluZ3MiLCJsYWJlbCIsIkhleGFnb25MYXllckljb24iLCJvcHRzIiwiZGF0YSIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsInpvb21GYWN0b3IiLCJnZXRab29tRmFjdG9yIiwidmlzQ29uZmlnIiwiY29uZmlnIiwicmFkaXVzIiwiaG92ZXJlZE9iamVjdCIsImhhc0hvdmVyZWRPYmplY3QiLCJFbmhhbmNlZEhleGFnb25MYXllciIsImdldERlZmF1bHRBZ2dyZWdhdGlvbkxheWVyUHJvcCIsIndyYXBMb25naXR1ZGUiLCJHZW9Kc29uTGF5ZXIiLCJnZXREZWZhdWx0SG92ZXJMYXllclByb3BzIiwiZmlsdGVyIiwiZCIsImdldExpbmVDb2xvciIsImhpZ2hsaWdodENvbG9yIiwibGluZVdpZHRoU2NhbGUiLCJBZ2dyZWdhdGlvbkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU1BLGlCQUFpQixHQUFHO0FBQy9CQyxFQUFBQSxPQUFPLEVBQUUsU0FEc0I7QUFFL0JDLEVBQUFBLGFBQWEsRUFBRSxlQUZnQjtBQUcvQkMsRUFBQUEsVUFBVSxFQUFFLFlBSG1CO0FBSS9CQyxFQUFBQSxVQUFVLEVBQUUsWUFKbUI7QUFLL0JDLEVBQUFBLFFBQVEsRUFBRSxVQUxxQjtBQU0vQkMsRUFBQUEsU0FBUyxFQUFFLGdCQU5vQjtBQU8vQkMsRUFBQUEsVUFBVSxFQUFFLFlBUG1CO0FBUS9CQyxFQUFBQSxtQkFBbUIsRUFBRSxxQkFSVTtBQVMvQkMsRUFBQUEsY0FBYyxFQUFFLGdCQVRlO0FBVS9CQyxFQUFBQSx5QkFBeUIsRUFBRSwyQkFWSTtBQVcvQkMsRUFBQUEsZ0JBQWdCLEVBQUUsYUFYYTtBQVkvQkMsRUFBQUEsZUFBZSxFQUFFLGlCQVpjO0FBYS9CQyxFQUFBQSxRQUFRLEVBQUU7QUFicUIsQ0FBMUI7OztJQWdCY0MsWTs7Ozs7QUFDbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjs7QUFFQSxVQUFLQyxpQkFBTCxDQUF1QmhCLGlCQUF2Qjs7QUFDQSxVQUFLaUIsaUJBQUwsQ0FBdUJmLGFBQXZCLENBQXFDZ0IsS0FBckMsR0FBNkMsK0JBQTdDO0FBSmlCO0FBS2xCOzs7O1NBRUQsZUFBVztBQUNULGFBQU8sU0FBUDtBQUNEOzs7U0FFRCxlQUFXO0FBQ1QsYUFBTyxRQUFQO0FBQ0Q7OztTQUVELGVBQWdCO0FBQ2QsYUFBT0MsNEJBQVA7QUFDRDs7O1dBRUQscUJBQVlDLElBQVosRUFBa0I7QUFDaEIsVUFBT0MsSUFBUCxHQUF3Q0QsSUFBeEMsQ0FBT0MsSUFBUDtBQUFBLFVBQWFDLGFBQWIsR0FBd0NGLElBQXhDLENBQWFFLGFBQWI7QUFBQSxVQUE0QkMsUUFBNUIsR0FBd0NILElBQXhDLENBQTRCRyxRQUE1QjtBQUNBLFVBQU1DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLENBQW1CRixRQUFuQixDQUFuQjtBQUNBLFVBQU9HLFNBQVAsR0FBb0IsS0FBS0MsTUFBekIsQ0FBT0QsU0FBUDtBQUNBLFVBQU1FLE1BQU0sR0FBR0YsU0FBUyxDQUFDeEIsYUFBVixHQUEwQixJQUF6QztBQUNBLFVBQU0yQixhQUFhLEdBQUcsS0FBS0MsZ0JBQUwsQ0FBc0JSLGFBQXRCLENBQXRCO0FBRUEsY0FDRSxJQUFJUyxnQ0FBSiwrQ0FDSyxLQUFLQyw4QkFBTCxDQUFvQ1osSUFBcEMsQ0FETCxHQUVLQyxJQUZMO0FBR0VZLFFBQUFBLGFBQWEsRUFBRSxLQUhqQjtBQUlFTCxRQUFBQSxNQUFNLEVBQU5BO0FBSkYsU0FERiw2Q0FTTUMsYUFBYSxJQUFJLENBQUNILFNBQVMsQ0FBQ2IsUUFBNUIsR0FDQSxDQUNFLElBQUlxQixvQkFBSixpQ0FDSyxLQUFLQyx5QkFBTCxFQURMO0FBRUVGLFFBQUFBLGFBQWEsRUFBRSxLQUZqQjtBQUdFWixRQUFBQSxJQUFJLEVBQUUsQ0FDSix1Q0FBb0JRLGFBQXBCLEVBQW1DLEVBQW5DLEVBQXVDRCxNQUFNLEdBQUdGLFNBQVMsQ0FBQ3JCLFFBQTFELEVBQW9Fa0IsUUFBcEUsQ0FESSxFQUVKYSxNQUZJLENBRUcsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFKO0FBQUEsU0FGSixDQUhSO0FBTUVDLFFBQUFBLFlBQVksRUFBRSxLQUFLWCxNQUFMLENBQVlZLGNBTjVCO0FBT0VDLFFBQUFBLGNBQWMsRUFBRSxzQkFBTSxDQUFDLENBQUQsRUFBSSxHQUFKLENBQU4sRUFBZ0JaLE1BQU0sR0FBRyxHQUFULEdBQWVKLFVBQS9CO0FBUGxCLFNBREYsQ0FEQSxHQVlBLEVBckJOO0FBdUJEOzs7RUFsRHVDaUIsNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0dlb0pzb25MYXllcn0gZnJvbSAnQGRlY2suZ2wvbGF5ZXJzJztcbmltcG9ydCBBZ2dyZWdhdGlvbkxheWVyIGZyb20gJy4uL2FnZ3JlZ2F0aW9uLWxheWVyJztcbmltcG9ydCBFbmhhbmNlZEhleGFnb25MYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzL2hleGFnb24tbGF5ZXIvZW5oYW5jZWQtaGV4YWdvbi1sYXllcic7XG5pbXBvcnQge2hleGFnb25Ub1BvbHlnb25HZW99IGZyb20gJy4vaGV4YWdvbi11dGlscyc7XG5pbXBvcnQgSGV4YWdvbkxheWVySWNvbiBmcm9tICcuL2hleGFnb24tbGF5ZXItaWNvbic7XG5pbXBvcnQge2NsYW1wfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IGhleGFnb25WaXNDb25maWdzID0ge1xuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIHdvcmxkVW5pdFNpemU6ICd3b3JsZFVuaXRTaXplJyxcbiAgcmVzb2x1dGlvbjogJ3Jlc29sdXRpb24nLFxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXG4gIGNvdmVyYWdlOiAnY292ZXJhZ2UnLFxuICBzaXplUmFuZ2U6ICdlbGV2YXRpb25SYW5nZScsXG4gIHBlcmNlbnRpbGU6ICdwZXJjZW50aWxlJyxcbiAgZWxldmF0aW9uUGVyY2VudGlsZTogJ2VsZXZhdGlvblBlcmNlbnRpbGUnLFxuICBlbGV2YXRpb25TY2FsZTogJ2VsZXZhdGlvblNjYWxlJyxcbiAgZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvcjogJ2VuYWJsZUVsZXZhdGlvblpvb21GYWN0b3InLFxuICBjb2xvckFnZ3JlZ2F0aW9uOiAnYWdncmVnYXRpb24nLFxuICBzaXplQWdncmVnYXRpb246ICdzaXplQWdncmVnYXRpb24nLFxuICBlbmFibGUzZDogJ2VuYWJsZTNkJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGV4YWdvbkxheWVyIGV4dGVuZHMgQWdncmVnYXRpb25MYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWdpc3RlclZpc0NvbmZpZyhoZXhhZ29uVmlzQ29uZmlncyk7XG4gICAgdGhpcy52aXNDb25maWdTZXR0aW5ncy53b3JsZFVuaXRTaXplLmxhYmVsID0gJ2NvbHVtbnMuaGV4YWdvbi53b3JsZFVuaXRTaXplJztcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaGV4YWdvbic7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ0hleGJpbic7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBIZXhhZ29uTGF5ZXJJY29uO1xuICB9XG5cbiAgcmVuZGVyTGF5ZXIob3B0cykge1xuICAgIGNvbnN0IHtkYXRhLCBvYmplY3RIb3ZlcmVkLCBtYXBTdGF0ZX0gPSBvcHRzO1xuICAgIGNvbnN0IHpvb21GYWN0b3IgPSB0aGlzLmdldFpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IHt2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgcmFkaXVzID0gdmlzQ29uZmlnLndvcmxkVW5pdFNpemUgKiAxMDAwO1xuICAgIGNvbnN0IGhvdmVyZWRPYmplY3QgPSB0aGlzLmhhc0hvdmVyZWRPYmplY3Qob2JqZWN0SG92ZXJlZCk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEVuaGFuY2VkSGV4YWdvbkxheWVyKHtcbiAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0QWdncmVnYXRpb25MYXllclByb3Aob3B0cyksXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxuICAgICAgICByYWRpdXNcbiAgICAgIH0pLFxuXG4gICAgICAvLyByZW5kZXIgYW4gb3V0bGluZSBvZiBlYWNoIGhleGFnb24gaWYgbm90IGV4dHJ1ZGVkXG4gICAgICAuLi4oaG92ZXJlZE9iamVjdCAmJiAhdmlzQ29uZmlnLmVuYWJsZTNkXG4gICAgICAgID8gW1xuICAgICAgICAgICAgbmV3IEdlb0pzb25MYXllcih7XG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpLFxuICAgICAgICAgICAgICB3cmFwTG9uZ2l0dWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgIGhleGFnb25Ub1BvbHlnb25HZW8oaG92ZXJlZE9iamVjdCwge30sIHJhZGl1cyAqIHZpc0NvbmZpZy5jb3ZlcmFnZSwgbWFwU3RhdGUpXG4gICAgICAgICAgICAgIF0uZmlsdGVyKGQgPT4gZCksXG4gICAgICAgICAgICAgIGdldExpbmVDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAgICAgICAgIGxpbmVXaWR0aFNjYWxlOiBjbGFtcChbMSwgMTAwXSwgcmFkaXVzICogMC4xICogem9vbUZhY3RvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==