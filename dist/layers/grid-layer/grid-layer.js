"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.gridVisConfigs = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _layers = require("@deck.gl/layers");

var _enhancedCpuGridLayer = _interopRequireDefault(require("../../deckgl-layers/grid-layer/enhanced-cpu-grid-layer"));

var _aggregationLayer = _interopRequireDefault(require("../aggregation-layer"));

var _gridUtils = require("./grid-utils");

var _gridLayerIcon = _interopRequireDefault(require("./grid-layer-icon"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var gridVisConfigs = {
  opacity: 'opacity',
  worldUnitSize: 'worldUnitSize',
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
exports.gridVisConfigs = gridVisConfigs;

var GridLayer = /*#__PURE__*/function (_AggregationLayer) {
  (0, _inherits2["default"])(GridLayer, _AggregationLayer);

  var _super = _createSuper(GridLayer);

  function GridLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GridLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(gridVisConfigs);

    _this.visConfigSettings.worldUnitSize.label = 'columns.grid.worldUnitSize';
    return _this;
  }

  (0, _createClass2["default"])(GridLayer, [{
    key: "type",
    get: function get() {
      return 'grid';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _gridLayerIcon["default"];
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState;
      var zoomFactor = this.getZoomFactor(mapState);
      var visConfig = this.config.visConfig;
      var cellSize = visConfig.worldUnitSize * 1000;
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return [new _enhancedCpuGridLayer["default"](_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultAggregationLayerProp(opts)), data), {}, {
        wrapLongitude: false,
        cellSize: cellSize
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject && !visConfig.enable3d ? [new _layers.GeoJsonLayer(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), {}, {
        wrapLongitude: false,
        data: [(0, _gridUtils.pointToPolygonGeo)({
          object: hoveredObject,
          cellSize: cellSize,
          coverage: visConfig.coverage,
          mapState: mapState
        })],
        getLineColor: this.config.highlightColor,
        lineWidthScale: 8 * zoomFactor
      }))] : []));
    }
  }]);
  return GridLayer;
}(_aggregationLayer["default"]);

exports["default"] = GridLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvZ3JpZC1sYXllci9ncmlkLWxheWVyLmpzIl0sIm5hbWVzIjpbImdyaWRWaXNDb25maWdzIiwib3BhY2l0eSIsIndvcmxkVW5pdFNpemUiLCJjb2xvclJhbmdlIiwiY292ZXJhZ2UiLCJzaXplUmFuZ2UiLCJwZXJjZW50aWxlIiwiZWxldmF0aW9uUGVyY2VudGlsZSIsImVsZXZhdGlvblNjYWxlIiwiZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvciIsImNvbG9yQWdncmVnYXRpb24iLCJzaXplQWdncmVnYXRpb24iLCJlbmFibGUzZCIsIkdyaWRMYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJ2aXNDb25maWdTZXR0aW5ncyIsImxhYmVsIiwiR3JpZExheWVySWNvbiIsIm9wdHMiLCJkYXRhIiwib2JqZWN0SG92ZXJlZCIsIm1hcFN0YXRlIiwiem9vbUZhY3RvciIsImdldFpvb21GYWN0b3IiLCJ2aXNDb25maWciLCJjb25maWciLCJjZWxsU2l6ZSIsImhvdmVyZWRPYmplY3QiLCJoYXNIb3ZlcmVkT2JqZWN0IiwiRW5oYW5jZWRHcmlkTGF5ZXIiLCJnZXREZWZhdWx0QWdncmVnYXRpb25MYXllclByb3AiLCJ3cmFwTG9uZ2l0dWRlIiwiR2VvSnNvbkxheWVyIiwiZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcyIsIm9iamVjdCIsImdldExpbmVDb2xvciIsImhpZ2hsaWdodENvbG9yIiwibGluZVdpZHRoU2NhbGUiLCJBZ2dyZWdhdGlvbkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQU1BLGNBQWMsR0FBRztBQUM1QkMsRUFBQUEsT0FBTyxFQUFFLFNBRG1CO0FBRTVCQyxFQUFBQSxhQUFhLEVBQUUsZUFGYTtBQUc1QkMsRUFBQUEsVUFBVSxFQUFFLFlBSGdCO0FBSTVCQyxFQUFBQSxRQUFRLEVBQUUsVUFKa0I7QUFLNUJDLEVBQUFBLFNBQVMsRUFBRSxnQkFMaUI7QUFNNUJDLEVBQUFBLFVBQVUsRUFBRSxZQU5nQjtBQU81QkMsRUFBQUEsbUJBQW1CLEVBQUUscUJBUE87QUFRNUJDLEVBQUFBLGNBQWMsRUFBRSxnQkFSWTtBQVM1QkMsRUFBQUEseUJBQXlCLEVBQUUsMkJBVEM7QUFVNUJDLEVBQUFBLGdCQUFnQixFQUFFLGFBVlU7QUFXNUJDLEVBQUFBLGVBQWUsRUFBRSxpQkFYVztBQVk1QkMsRUFBQUEsUUFBUSxFQUFFO0FBWmtCLENBQXZCOzs7SUFlY0MsUzs7Ozs7QUFDbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjs7QUFFQSxVQUFLQyxpQkFBTCxDQUF1QmYsY0FBdkI7O0FBQ0EsVUFBS2dCLGlCQUFMLENBQXVCZCxhQUF2QixDQUFxQ2UsS0FBckMsR0FBNkMsNEJBQTdDO0FBSmlCO0FBS2xCOzs7O1NBRUQsZUFBVztBQUNULGFBQU8sTUFBUDtBQUNEOzs7U0FFRCxlQUFnQjtBQUNkLGFBQU9DLHlCQUFQO0FBQ0Q7OztXQUVELHFCQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFVBQU9DLElBQVAsR0FBd0NELElBQXhDLENBQU9DLElBQVA7QUFBQSxVQUFhQyxhQUFiLEdBQXdDRixJQUF4QyxDQUFhRSxhQUFiO0FBQUEsVUFBNEJDLFFBQTVCLEdBQXdDSCxJQUF4QyxDQUE0QkcsUUFBNUI7QUFFQSxVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxDQUFtQkYsUUFBbkIsQ0FBbkI7QUFDQSxVQUFPRyxTQUFQLEdBQW9CLEtBQUtDLE1BQXpCLENBQU9ELFNBQVA7QUFDQSxVQUFNRSxRQUFRLEdBQUdGLFNBQVMsQ0FBQ3ZCLGFBQVYsR0FBMEIsSUFBM0M7QUFDQSxVQUFNMEIsYUFBYSxHQUFHLEtBQUtDLGdCQUFMLENBQXNCUixhQUF0QixDQUF0QjtBQUVBLGNBQ0UsSUFBSVMsZ0NBQUosK0NBQ0ssS0FBS0MsOEJBQUwsQ0FBb0NaLElBQXBDLENBREwsR0FFS0MsSUFGTDtBQUdFWSxRQUFBQSxhQUFhLEVBQUUsS0FIakI7QUFJRUwsUUFBQUEsUUFBUSxFQUFSQTtBQUpGLFNBREYsNkNBU01DLGFBQWEsSUFBSSxDQUFDSCxTQUFTLENBQUNiLFFBQTVCLEdBQ0EsQ0FDRSxJQUFJcUIsb0JBQUosaUNBQ0ssS0FBS0MseUJBQUwsRUFETDtBQUVFRixRQUFBQSxhQUFhLEVBQUUsS0FGakI7QUFHRVosUUFBQUEsSUFBSSxFQUFFLENBQ0osa0NBQWtCO0FBQ2hCZSxVQUFBQSxNQUFNLEVBQUVQLGFBRFE7QUFFaEJELFVBQUFBLFFBQVEsRUFBUkEsUUFGZ0I7QUFHaEJ2QixVQUFBQSxRQUFRLEVBQUVxQixTQUFTLENBQUNyQixRQUhKO0FBSWhCa0IsVUFBQUEsUUFBUSxFQUFSQTtBQUpnQixTQUFsQixDQURJLENBSFI7QUFXRWMsUUFBQUEsWUFBWSxFQUFFLEtBQUtWLE1BQUwsQ0FBWVcsY0FYNUI7QUFZRUMsUUFBQUEsY0FBYyxFQUFFLElBQUlmO0FBWnRCLFNBREYsQ0FEQSxHQWlCQSxFQTFCTjtBQTRCRDs7O0VBcERvQ2dCLDRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtHZW9Kc29uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2xheWVycyc7XG5pbXBvcnQgRW5oYW5jZWRHcmlkTGF5ZXIgZnJvbSAnZGVja2dsLWxheWVycy9ncmlkLWxheWVyL2VuaGFuY2VkLWNwdS1ncmlkLWxheWVyJztcbmltcG9ydCBBZ2dyZWdhdGlvbkxheWVyIGZyb20gJy4uL2FnZ3JlZ2F0aW9uLWxheWVyJztcbmltcG9ydCB7cG9pbnRUb1BvbHlnb25HZW99IGZyb20gJy4vZ3JpZC11dGlscyc7XG5pbXBvcnQgR3JpZExheWVySWNvbiBmcm9tICcuL2dyaWQtbGF5ZXItaWNvbic7XG5cbmV4cG9ydCBjb25zdCBncmlkVmlzQ29uZmlncyA9IHtcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICB3b3JsZFVuaXRTaXplOiAnd29ybGRVbml0U2l6ZScsXG4gIGNvbG9yUmFuZ2U6ICdjb2xvclJhbmdlJyxcbiAgY292ZXJhZ2U6ICdjb3ZlcmFnZScsXG4gIHNpemVSYW5nZTogJ2VsZXZhdGlvblJhbmdlJyxcbiAgcGVyY2VudGlsZTogJ3BlcmNlbnRpbGUnLFxuICBlbGV2YXRpb25QZXJjZW50aWxlOiAnZWxldmF0aW9uUGVyY2VudGlsZScsXG4gIGVsZXZhdGlvblNjYWxlOiAnZWxldmF0aW9uU2NhbGUnLFxuICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yOiAnZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvcicsXG4gIGNvbG9yQWdncmVnYXRpb246ICdhZ2dyZWdhdGlvbicsXG4gIHNpemVBZ2dyZWdhdGlvbjogJ3NpemVBZ2dyZWdhdGlvbicsXG4gIGVuYWJsZTNkOiAnZW5hYmxlM2QnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkTGF5ZXIgZXh0ZW5kcyBBZ2dyZWdhdGlvbkxheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKGdyaWRWaXNDb25maWdzKTtcbiAgICB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzLndvcmxkVW5pdFNpemUubGFiZWwgPSAnY29sdW1ucy5ncmlkLndvcmxkVW5pdFNpemUnO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdncmlkJztcbiAgfVxuXG4gIGdldCBsYXllckljb24oKSB7XG4gICAgcmV0dXJuIEdyaWRMYXllckljb247XG4gIH1cblxuICByZW5kZXJMYXllcihvcHRzKSB7XG4gICAgY29uc3Qge2RhdGEsIG9iamVjdEhvdmVyZWQsIG1hcFN0YXRlfSA9IG9wdHM7XG5cbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcbiAgICBjb25zdCB7dmlzQ29uZmlnfSA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNlbGxTaXplID0gdmlzQ29uZmlnLndvcmxkVW5pdFNpemUgKiAxMDAwO1xuICAgIGNvbnN0IGhvdmVyZWRPYmplY3QgPSB0aGlzLmhhc0hvdmVyZWRPYmplY3Qob2JqZWN0SG92ZXJlZCk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEVuaGFuY2VkR3JpZExheWVyKHtcbiAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0QWdncmVnYXRpb25MYXllclByb3Aob3B0cyksXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxuICAgICAgICBjZWxsU2l6ZVxuICAgICAgfSksXG5cbiAgICAgIC8vIHJlbmRlciBhbiBvdXRsaW5lIG9mIGVhY2ggY2VsbCBpZiBub3QgZXh0cnVkZWRcbiAgICAgIC4uLihob3ZlcmVkT2JqZWN0ICYmICF2aXNDb25maWcuZW5hYmxlM2RcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgR2VvSnNvbkxheWVyKHtcbiAgICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0SG92ZXJMYXllclByb3BzKCksXG4gICAgICAgICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgcG9pbnRUb1BvbHlnb25HZW8oe1xuICAgICAgICAgICAgICAgICAgb2JqZWN0OiBob3ZlcmVkT2JqZWN0LFxuICAgICAgICAgICAgICAgICAgY2VsbFNpemUsXG4gICAgICAgICAgICAgICAgICBjb3ZlcmFnZTogdmlzQ29uZmlnLmNvdmVyYWdlLFxuICAgICAgICAgICAgICAgICAgbWFwU3RhdGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBnZXRMaW5lQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBsaW5lV2lkdGhTY2FsZTogOCAqIHpvb21GYWN0b3JcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==