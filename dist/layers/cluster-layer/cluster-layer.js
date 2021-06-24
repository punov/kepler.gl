"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clusterVisConfigs = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _aggregationLayer = _interopRequireDefault(require("../aggregation-layer"));

var _layers = require("@deck.gl/layers");

var _clusterLayer = _interopRequireDefault(require("../../deckgl-layers/cluster-layer/cluster-layer"));

var _defaultSettings = require("../../constants/default-settings");

var _clusterLayerIcon = _interopRequireDefault(require("./cluster-layer-icon"));

var _excluded = ["_filterData"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var clusterVisConfigs = {
  opacity: 'opacity',
  clusterRadius: 'clusterRadius',
  colorRange: 'colorRange',
  radiusRange: 'clusterRadiusRange',
  colorAggregation: 'aggregation'
};
exports.clusterVisConfigs = clusterVisConfigs;

var ClusterLayer = /*#__PURE__*/function (_AggregationLayer) {
  (0, _inherits2["default"])(ClusterLayer, _AggregationLayer);

  var _super = _createSuper(ClusterLayer);

  function ClusterLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ClusterLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(clusterVisConfigs);

    return _this;
  }

  (0, _createClass2["default"])(ClusterLayer, [{
    key: "type",
    get: function get() {
      return 'cluster';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _clusterLayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: {
          aggregation: 'colorAggregation',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.colorAggr,
          defaultMeasure: 'property.pointCount',
          domain: 'colorDomain',
          field: 'colorField',
          key: 'color',
          property: 'color',
          range: 'colorRange',
          scale: 'colorScale'
        }
      };
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var visConfig = this.config.visConfig;
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState,
          layerCallbacks = opts.layerCallbacks;
      var updateTriggers = {
        getColorValue: {
          colorField: this.config.colorField,
          colorAggregation: this.config.visConfig.colorAggregation
        },
        filterData: _objectSpread({
          filterRange: gpuFilter.filterRange
        }, gpuFilter.filterValueUpdateTriggers)
      };
      var filterData = data._filterData,
          clusterData = (0, _objectWithoutProperties2["default"])(data, _excluded);
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return [new _clusterLayer["default"](_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultDeckLayerProps(opts)), clusterData), {}, {
        filterData: filterData,
        // radius
        radiusScale: 1,
        radiusRange: visConfig.radiusRange,
        clusterRadius: visConfig.clusterRadius,
        // color
        colorRange: this.getColorRange(visConfig.colorRange),
        colorScaleType: this.config.colorScale,
        colorAggregation: visConfig.colorAggregation,
        zoom: Math.round(mapState.zoom),
        width: mapState.width,
        height: mapState.height,
        // updateTriggers
        updateTriggers: updateTriggers,
        // call back from layer after calculate clusters
        onSetColorDomain: layerCallbacks.onSetLayerDomain
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject ? [new _layers.ScatterplotLayer({
        id: "".concat(this.id, "-hovered"),
        data: [hoveredObject],
        getFillColor: this.config.highlightColor,
        getRadius: function getRadius(d) {
          return d.radius;
        },
        radiusScale: 1,
        pickable: false
      })] : []));
    }
  }]);
  return ClusterLayer;
}(_aggregationLayer["default"]);

exports["default"] = ClusterLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvY2x1c3Rlci1sYXllci9jbHVzdGVyLWxheWVyLmpzIl0sIm5hbWVzIjpbImNsdXN0ZXJWaXNDb25maWdzIiwib3BhY2l0eSIsImNsdXN0ZXJSYWRpdXMiLCJjb2xvclJhbmdlIiwicmFkaXVzUmFuZ2UiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiQ2x1c3RlckxheWVyIiwicHJvcHMiLCJyZWdpc3RlclZpc0NvbmZpZyIsIkNsdXN0ZXJMYXllckljb24iLCJjb2xvciIsImFnZ3JlZ2F0aW9uIiwiY2hhbm5lbFNjYWxlVHlwZSIsIkNIQU5ORUxfU0NBTEVTIiwiY29sb3JBZ2dyIiwiZGVmYXVsdE1lYXN1cmUiLCJkb21haW4iLCJmaWVsZCIsImtleSIsInByb3BlcnR5IiwicmFuZ2UiLCJzY2FsZSIsIm9wdHMiLCJ2aXNDb25maWciLCJjb25maWciLCJkYXRhIiwiZ3B1RmlsdGVyIiwib2JqZWN0SG92ZXJlZCIsIm1hcFN0YXRlIiwibGF5ZXJDYWxsYmFja3MiLCJ1cGRhdGVUcmlnZ2VycyIsImdldENvbG9yVmFsdWUiLCJjb2xvckZpZWxkIiwiZmlsdGVyRGF0YSIsImZpbHRlclJhbmdlIiwiZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycyIsIl9maWx0ZXJEYXRhIiwiY2x1c3RlckRhdGEiLCJob3ZlcmVkT2JqZWN0IiwiaGFzSG92ZXJlZE9iamVjdCIsIkRlY2tHTENsdXN0ZXJMYXllciIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsInJhZGl1c1NjYWxlIiwiZ2V0Q29sb3JSYW5nZSIsImNvbG9yU2NhbGVUeXBlIiwiY29sb3JTY2FsZSIsInpvb20iLCJNYXRoIiwicm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm9uU2V0Q29sb3JEb21haW4iLCJvblNldExheWVyRG9tYWluIiwiU2NhdHRlcnBsb3RMYXllciIsImlkIiwiZ2V0RmlsbENvbG9yIiwiaGlnaGxpZ2h0Q29sb3IiLCJnZXRSYWRpdXMiLCJkIiwicmFkaXVzIiwi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UyxDQUFDbEIsZ0JBYjlCO0FBZUV5QyxRQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXcEIsUUFBUSxDQUFDa0IsSUFBcEIsQ0FmUjtBQWdCRUcsUUFBQUEsS0FBSyxFQUFFckIsUUFBUSxDQUFDcUIsS0FoQmxCO0FBaUJFQyxRQUFBQSxNQUFNLEVBQUV0QixRQUFRLENBQUNzQixNQWpCbkI7QUFtQkU7QUFDQXBCLFFBQUFBLGNBQWMsRUFBZEEsY0FwQkY7QUFzQkU7QUFDQXFCLFFBQUFBLGdCQUFnQixFQUFFdEIsY0FBYyxDQUFDdUI7QUF2Qm5DLFNBREYsNkNBMkJNZCxhQUFhLEdBQ2IsQ0FDRSxJQUFJZSx3QkFBSixDQUFxQjtBQUNuQkMsUUFBQUEsRUFBRSxZQUFLLEtBQUtBLEVBQVYsYUFEaUI7QUFFbkI3QixRQUFBQSxJQUFJLEVBQUUsQ0FBQ2EsYUFBRCxDQUZhO0FBR25CaUIsUUFBQUEsWUFBWSxFQUFFLEtBQUsvQixNQUFMLENBQVlnQyxjQUhQO0FBSW5CQyxRQUFBQSxTQUFTLEVBQUUsbUJBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDQyxNQUFOO0FBQUEsU0FKTztBQUtuQmpCLFFBQUFBLFdBQVcsRUFBRSxDQUxNO0FBTW5Ca0IsUUFBQUEsUUFBUSxFQUFFO0FBTlMsT0FBckIsQ0FERixDQURhLEdBV2IsRUF0Q047QUF3Q0Q7OztFQXZGdUNDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IEFnZ3JlZ2F0aW9uTGF5ZXIgZnJvbSAnLi4vYWdncmVnYXRpb24tbGF5ZXInO1xuaW1wb3J0IHtTY2F0dGVycGxvdExheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xuXG5pbXBvcnQgRGVja0dMQ2x1c3RlckxheWVyIGZyb20gJ2RlY2tnbC1sYXllcnMvY2x1c3Rlci1sYXllci9jbHVzdGVyLWxheWVyJztcbmltcG9ydCB7Q0hBTk5FTF9TQ0FMRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCBDbHVzdGVyTGF5ZXJJY29uIGZyb20gJy4vY2x1c3Rlci1sYXllci1pY29uJztcblxuZXhwb3J0IGNvbnN0IGNsdXN0ZXJWaXNDb25maWdzID0ge1xuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIGNsdXN0ZXJSYWRpdXM6ICdjbHVzdGVyUmFkaXVzJyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICByYWRpdXNSYW5nZTogJ2NsdXN0ZXJSYWRpdXNSYW5nZScsXG4gIGNvbG9yQWdncmVnYXRpb246ICdhZ2dyZWdhdGlvbidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsdXN0ZXJMYXllciBleHRlbmRzIEFnZ3JlZ2F0aW9uTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKGNsdXN0ZXJWaXNDb25maWdzKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnY2x1c3Rlcic7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBDbHVzdGVyTGF5ZXJJY29uO1xuICB9XG5cbiAgZ2V0IHZpc3VhbENoYW5uZWxzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICBhZ2dyZWdhdGlvbjogJ2NvbG9yQWdncmVnYXRpb24nLFxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5jb2xvckFnZ3IsXG4gICAgICAgIGRlZmF1bHRNZWFzdXJlOiAncHJvcGVydHkucG9pbnRDb3VudCcsXG4gICAgICAgIGRvbWFpbjogJ2NvbG9yRG9tYWluJyxcbiAgICAgICAgZmllbGQ6ICdjb2xvckZpZWxkJyxcbiAgICAgICAga2V5OiAnY29sb3InLFxuICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcbiAgICAgICAgcmFuZ2U6ICdjb2xvclJhbmdlJyxcbiAgICAgICAgc2NhbGU6ICdjb2xvclNjYWxlJ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZW5kZXJMYXllcihvcHRzKSB7XG4gICAgY29uc3Qge3Zpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCB7ZGF0YSwgZ3B1RmlsdGVyLCBvYmplY3RIb3ZlcmVkLCBtYXBTdGF0ZSwgbGF5ZXJDYWxsYmFja3N9ID0gb3B0cztcblxuICAgIGNvbnN0IHVwZGF0ZVRyaWdnZXJzID0ge1xuICAgICAgZ2V0Q29sb3JWYWx1ZToge1xuICAgICAgICBjb2xvckZpZWxkOiB0aGlzLmNvbmZpZy5jb2xvckZpZWxkLFxuICAgICAgICBjb2xvckFnZ3JlZ2F0aW9uOiB0aGlzLmNvbmZpZy52aXNDb25maWcuY29sb3JBZ2dyZWdhdGlvblxuICAgICAgfSxcbiAgICAgIGZpbHRlckRhdGE6IHtcbiAgICAgICAgZmlsdGVyUmFuZ2U6IGdwdUZpbHRlci5maWx0ZXJSYW5nZSxcbiAgICAgICAgLi4uZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnNcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHtfZmlsdGVyRGF0YTogZmlsdGVyRGF0YSwgLi4uY2x1c3RlckRhdGF9ID0gZGF0YTtcbiAgICBjb25zdCBob3ZlcmVkT2JqZWN0ID0gdGhpcy5oYXNIb3ZlcmVkT2JqZWN0KG9iamVjdEhvdmVyZWQpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBEZWNrR0xDbHVzdGVyTGF5ZXIoe1xuICAgICAgICAuLi50aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKSxcbiAgICAgICAgLi4uY2x1c3RlckRhdGEsXG4gICAgICAgIGZpbHRlckRhdGEsXG5cbiAgICAgICAgLy8gcmFkaXVzXG4gICAgICAgIHJhZGl1c1NjYWxlOiAxLFxuICAgICAgICByYWRpdXNSYW5nZTogdmlzQ29uZmlnLnJhZGl1c1JhbmdlLFxuICAgICAgICBjbHVzdGVyUmFkaXVzOiB2aXNDb25maWcuY2x1c3RlclJhZGl1cyxcblxuICAgICAgICAvLyBjb2xvclxuICAgICAgICBjb2xvclJhbmdlOiB0aGlzLmdldENvbG9yUmFuZ2UodmlzQ29uZmlnLmNvbG9yUmFuZ2UpLFxuICAgICAgICBjb2xvclNjYWxlVHlwZTogdGhpcy5jb25maWcuY29sb3JTY2FsZSxcbiAgICAgICAgY29sb3JBZ2dyZWdhdGlvbjogdmlzQ29uZmlnLmNvbG9yQWdncmVnYXRpb24sXG5cbiAgICAgICAgem9vbTogTWF0aC5yb3VuZChtYXBTdGF0ZS56b29tKSxcbiAgICAgICAgd2lkdGg6IG1hcFN0YXRlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG1hcFN0YXRlLmhlaWdodCxcblxuICAgICAgICAvLyB1cGRhdGVUcmlnZ2Vyc1xuICAgICAgICB1cGRhdGVUcmlnZ2VycyxcblxuICAgICAgICAvLyBjYWxsIGJhY2sgZnJvbSBsYXllciBhZnRlciBjYWxjdWxhdGUgY2x1c3RlcnNcbiAgICAgICAgb25TZXRDb2xvckRvbWFpbjogbGF5ZXJDYWxsYmFja3Mub25TZXRMYXllckRvbWFpblxuICAgICAgfSksXG4gICAgICAvLyBob3ZlciBsYXllclxuICAgICAgLi4uKGhvdmVyZWRPYmplY3RcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgU2NhdHRlcnBsb3RMYXllcih7XG4gICAgICAgICAgICAgIGlkOiBgJHt0aGlzLmlkfS1ob3ZlcmVkYCxcbiAgICAgICAgICAgICAgZGF0YTogW2hvdmVyZWRPYmplY3RdLFxuICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRSYWRpdXM6IGQgPT4gZC5yYWRpdXMsXG4gICAgICAgICAgICAgIHJhZGl1c1NjYWxlOiAxLFxuICAgICAgICAgICAgICBwaWNrYWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==