"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultRadius = exports.defaultLineWidth = exports.defaultElevation = exports.featureAccessor = exports.geoJsonRequiredColumns = exports.geojsonVisConfigs = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _typeAnalyzer = require("type-analyzer");

var _baseLayer = _interopRequireWildcard(require("../base-layer"));

var _layers = require("@deck.gl/layers");

var _geojsonUtils = require("./geojson-utils");

var _geojsonLayerIcon = _interopRequireDefault(require("./geojson-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

var _layerFactory = require("../layer-factory");

var _SUPPORTED_ANALYZER_T;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SUPPORTED_ANALYZER_TYPES = (_SUPPORTED_ANALYZER_T = {}, (0, _defineProperty2["default"])(_SUPPORTED_ANALYZER_T, _typeAnalyzer.DATA_TYPES.GEOMETRY, true), (0, _defineProperty2["default"])(_SUPPORTED_ANALYZER_T, _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING, true), (0, _defineProperty2["default"])(_SUPPORTED_ANALYZER_T, _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING, true), _SUPPORTED_ANALYZER_T);
var geojsonVisConfigs = {
  opacity: 'opacity',
  strokeOpacity: _objectSpread(_objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.opacity), {}, {
    property: 'strokeOpacity'
  }),
  thickness: _objectSpread(_objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.thickness), {}, {
    defaultValue: 0.5
  }),
  strokeColor: 'strokeColor',
  colorRange: 'colorRange',
  strokeColorRange: 'strokeColorRange',
  radius: 'radius',
  sizeRange: 'strokeWidthRange',
  radiusRange: 'radiusRange',
  heightRange: 'elevationRange',
  elevationScale: 'elevationScale',
  enableElevationZoomFactor: 'enableElevationZoomFactor',
  stroked: 'stroked',
  filled: 'filled',
  enable3d: 'enable3d',
  wireframe: 'wireframe'
};
exports.geojsonVisConfigs = geojsonVisConfigs;
var geoJsonRequiredColumns = ['geojson'];
exports.geoJsonRequiredColumns = geoJsonRequiredColumns;

var featureAccessor = function featureAccessor(_ref) {
  var geojson = _ref.geojson;
  return function (d) {
    return d[geojson.fieldIdx];
  };
}; // access feature properties from geojson sub layer


exports.featureAccessor = featureAccessor;
var defaultElevation = 500;
exports.defaultElevation = defaultElevation;
var defaultLineWidth = 1;
exports.defaultLineWidth = defaultLineWidth;
var defaultRadius = 1;
exports.defaultRadius = defaultRadius;

var GeoJsonLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(GeoJsonLayer, _Layer);

  var _super = _createSuper(GeoJsonLayer);

  function GeoJsonLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GeoJsonLayer);
    _this = _super.call(this, props);
    _this.dataToFeature = [];

    _this.registerVisConfig(geojsonVisConfigs);

    _this.getPositionAccessor = function () {
      return featureAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(GeoJsonLayer, [{
    key: "type",
    get: function get() {
      return 'geojson';
    }
  }, {
    key: "name",
    get: function get() {
      return 'Polygon';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _geojsonLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return geoJsonRequiredColumns;
    }
  }, {
    key: "visualChannels",
    get: function get() {
      var visualChannels = (0, _get2["default"])((0, _getPrototypeOf2["default"])(GeoJsonLayer.prototype), "visualChannels", this);
      return {
        color: _objectSpread(_objectSpread({}, visualChannels.color), {}, {
          accessor: 'getFillColor',
          condition: function condition(config) {
            return config.visConfig.filled;
          },
          nullValue: visualChannels.color.nullValue,
          getAttributeValue: function getAttributeValue(config) {
            return function (d) {
              return d.properties.fillColor || config.color;
            };
          },
          // used this to get updateTriggers
          defaultValue: function defaultValue(config) {
            return config.color;
          }
        }),
        strokeColor: {
          property: 'strokeColor',
          field: 'strokeColorField',
          scale: 'strokeColorScale',
          domain: 'strokeColorDomain',
          range: 'strokeColorRange',
          key: 'strokeColor',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color,
          accessor: 'getLineColor',
          condition: function condition(config) {
            return config.visConfig.stroked;
          },
          nullValue: visualChannels.color.nullValue,
          getAttributeValue: function getAttributeValue(config) {
            return function (d) {
              return d.properties.lineColor || config.visConfig.strokeColor || config.color;
            };
          },
          // used this to get updateTriggers
          defaultValue: function defaultValue(config) {
            return config.visConfig.strokeColor || config.color;
          }
        },
        size: _objectSpread(_objectSpread({}, visualChannels.size), {}, {
          property: 'stroke',
          accessor: 'getLineWidth',
          condition: function condition(config) {
            return config.visConfig.stroked;
          },
          nullValue: 0,
          getAttributeValue: function getAttributeValue() {
            return function (d) {
              return d.properties.lineWidth || defaultLineWidth;
            };
          }
        }),
        height: {
          property: 'height',
          field: 'heightField',
          scale: 'heightScale',
          domain: 'heightDomain',
          range: 'heightRange',
          key: 'height',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size,
          accessor: 'getElevation',
          condition: function condition(config) {
            return config.visConfig.enable3d;
          },
          nullValue: 0,
          getAttributeValue: function getAttributeValue() {
            return function (d) {
              return d.properties.elevation || defaultElevation;
            };
          }
        },
        radius: {
          property: 'radius',
          field: 'radiusField',
          scale: 'radiusScale',
          domain: 'radiusDomain',
          range: 'radiusRange',
          key: 'radius',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.radius,
          accessor: 'getRadius',
          nullValue: 0,
          getAttributeValue: function getAttributeValue() {
            return function (d) {
              return d.properties.radius || defaultRadius;
            };
          }
        }
      };
    }
  }, {
    key: "getPositionAccessor",
    value: function getPositionAccessor() {
      return this.getFeature(this.config.columns);
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(GeoJsonLayer.prototype), "getDefaultLayerConfig", this).call(this, props)), {}, {
        // add height visual channel
        heightField: null,
        heightDomain: [0, 1],
        heightScale: 'linear',
        // add radius visual channel
        radiusField: null,
        radiusDomain: [0, 1],
        radiusScale: 'linear',
        // add stroke color visual channel
        strokeColorField: null,
        strokeColorDomain: [0, 1],
        strokeColorScale: 'quantile'
      });
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object, allData) {
      // index of allData is saved to feature.properties
      return allData[object.properties.index];
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getPosition) {
      var _this2 = this;

      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      return filteredIndex.map(function (i) {
        return _this2.dataToFeature[i];
      }).filter(function (d) {
        return d;
      });
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _datasets$this$config = datasets[this.config.dataId],
          allData = _datasets$this$config.allData,
          gpuFilter = _datasets$this$config.gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      var valueAccessor = function valueAccessor(f) {
        return allData[f.properties.index];
      };

      var indexAccessor = function indexAccessor(f) {
        return f.properties.index;
      };

      var accessors = this.getAttributeAccessors(valueAccessor);
      return _objectSpread({
        data: data,
        getFilterValue: gpuFilter.filterValueAccessor(indexAccessor, valueAccessor)
      }, accessors);
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      var getFeature = this.getPositionAccessor();
      this.dataToFeature = (0, _geojsonUtils.getGeojsonDataMaps)(allData, getFeature); // get bounds from features

      var bounds = (0, _geojsonUtils.getGeojsonBounds)(this.dataToFeature); // if any of the feature has properties.radius set to be true

      var fixedRadius = Boolean(this.dataToFeature.find(function (d) {
        return d && d.properties && d.properties.radius;
      })); // keep a record of what type of geometry the collection has

      var featureTypes = (0, _geojsonUtils.getGeojsonFeatureTypes)(this.dataToFeature);
      this.updateMeta({
        bounds: bounds,
        fixedRadius: fixedRadius,
        featureTypes: featureTypes
      });
    }
  }, {
    key: "setInitialLayerConfig",
    value: function setInitialLayerConfig(_ref3) {
      var allData = _ref3.allData;
      this.updateLayerMeta(allData);
      var featureTypes = this.meta.featureTypes; // default settings is stroke: true, filled: false

      if (featureTypes && featureTypes.polygon) {
        // set both fill and stroke to true
        return this.updateLayerVisConfig({
          filled: true,
          stroked: true,
          strokeColor: _baseLayer.colorMaker.next().value
        });
      } else if (featureTypes && featureTypes.point) {
        // set fill to true if detect point
        return this.updateLayerVisConfig({
          filled: true,
          stroked: false
        });
      }

      return this;
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState,
          interactionConfig = opts.interactionConfig;
      var _this$meta = this.meta,
          fixedRadius = _this$meta.fixedRadius,
          featureTypes = _this$meta.featureTypes;
      var radiusScale = this.getRadiusScaleByZoom(mapState, fixedRadius);
      var zoomFactor = this.getZoomFactor(mapState);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var visConfig = this.config.visConfig;
      var layerProps = {
        lineWidthScale: visConfig.thickness * zoomFactor * 8,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        pointRadiusScale: radiusScale,
        lineMiterLimit: 4
      };

      var updateTriggers = _objectSpread(_objectSpread({}, this.getVisualChannelUpdateTriggers()), {}, {
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      });

      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var opaOverwrite = {
        opacity: visConfig.strokeOpacity
      };
      var pickable = interactionConfig.tooltip.enabled;
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return [new _layers.GeoJsonLayer(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), layerProps), data), {}, {
        pickable: pickable,
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        autoHighlight: visConfig.enable3d && pickable,
        stroked: visConfig.stroked,
        filled: visConfig.filled,
        extruded: visConfig.enable3d,
        wireframe: visConfig.wireframe,
        wrapLongitude: false,
        lineMiterLimit: 2,
        rounded: true,
        updateTriggers: updateTriggers,
        _subLayerProps: _objectSpread(_objectSpread(_objectSpread({}, featureTypes.polygon ? {
          'polygons-stroke': opaOverwrite
        } : {}), featureTypes.line ? {
          'line-strings': opaOverwrite
        } : {}), featureTypes.point ? {
          points: {
            lineOpacity: visConfig.strokeOpacity
          }
        } : {})
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject && !visConfig.enable3d ? [new _layers.GeoJsonLayer(_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), layerProps), {}, {
        wrapLongitude: false,
        data: [hoveredObject],
        getLineWidth: data.getLineWidth,
        getRadius: data.getRadius,
        getElevation: data.getElevation,
        getLineColor: this.config.highlightColor,
        getFillColor: this.config.highlightColor,
        // always draw outline
        stroked: true,
        filled: false
      }))] : []));
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref4) {
      var _this3 = this;

      var label = _ref4.label,
          _ref4$fields = _ref4.fields,
          fields = _ref4$fields === void 0 ? [] : _ref4$fields;
      var geojsonColumns = fields.filter(function (f) {
        return f.type === 'geojson' && SUPPORTED_ANALYZER_TYPES[f.analyzerType];
      }).map(function (f) {
        return f.name;
      });
      var defaultColumns = {
        geojson: (0, _lodash["default"])([].concat((0, _toConsumableArray2["default"])(_defaultSettings.GEOJSON_FIELDS.geojson), (0, _toConsumableArray2["default"])(geojsonColumns)))
      };
      var foundColumns = this.findDefaultColumnField(defaultColumns, fields);

      if (!foundColumns || !foundColumns.length) {
        return {
          props: []
        };
      }

      return {
        props: foundColumns.map(function (columns) {
          return {
            label: typeof label === 'string' && label.replace(/\.[^/.]+$/, '') || _this3.type,
            columns: columns,
            isVisible: true
          };
        })
      };
    }
  }]);
  return GeoJsonLayer;
}(_baseLayer["default"]);

exports["default"] = GeoJsonLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvZ2VvanNvbi1sYXllci9nZW9qc29uLWxheWVyLmpzIl0sIm5hbWVzIjpbIlNVUFBPUlRFRF9BTkFMWVpFUl9UWVBFUyIsIkRBVEFfVFlQRVMiLCJHRU9NRVRSWSIsIkdFT01FVFJZX0ZST01fU1RSSU5HIiwiUEFJUl9HRU9NRVRSWV9GUk9NX1NUUklORyIsImdlb2pzb25WaXNDb25maWdzIiwib3BhY2l0eSIsInN0cm9rZU9wYWNpdHkiLCJMQVlFUl9WSVNfQ09ORklHUyIsInByb3BlcnR5IiwidGhpY2tuZXNzIiwiZGVmYXVsdFZhbHVlIiwic3Ryb2tlQ29sb3IiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInJhZGl1cyIsInNpemVSYW5nZSIsInJhZGl1c1JhbmdlIiwiaGVpZ2h0UmFuZ2UiLCJlbGV2YXRpb25TY2FsZSIsImVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3IiLCJzdHJva2VkIiwiZmlsbGVkIiwiZW5hYmxlM2QiLCJ3aXJlZnJhbWUiLCJnZW9Kc29uUmVxdWlyZWRDb2x1bW5zIiwiZmVhdHVyZUFjY2Vzc29yIiwiZ2VvanNvbiIsImQiLCJmaWVsZElkeCIsImRlZmF1bHRFbGV2YXRpb24iLCJkZWZhdWx0TGluZVdpZHRoIiwiZGVmYXVsdFJhZGl1cyIsIkdlb0pzb25MYXllciIsInByb3BzIiwiZGF0YVRvRmVhdHVyZSIsInJlZ2lzdGVyVmlzQ29uZmlnIiwiZ2V0UG9zaXRpb25BY2Nlc3NvciIsImNvbmZpZyIsImNvbHVtbnMiLCJHZW9qc29uTGF5ZXJJY29uIiwidmlzdWFsQ2hhbm5lbHMiLCJjb2xvciIsImFjY2Vzc29yIiwiY29uZGl0aW9uIiwidmlzQ29uZmlnIiwibnVsbFZhbHVlIiwiZ2V0QXR0cmlidXRlVmFsdWUiLCJwcm9wZXJ0aWVzIiwiZmlsbENvbG9yIiwiZmllbGQiLCJzY2FsZSIsImRvbWFpbiIsInJhbmdlIiwia2V5IiwiY2hhbm5lbFNjYWxlVHlwZSIsIkNIQU5ORUxfU0NBTEVTIiwibGluZUNvbG9yIiwic2l6ZSIsImxpbmVXaWR0aCIsImhlaWdodCIsImVsZXZhdGlvbiIsImdldEZlYXR1cmUiLCJoZWlnaHRGaWVsZCIsImhlaWdodERvbWFpbiIsImhlaWdodFNjYWxlIiwicmFkaXVzRmllbGQiLCJyYWRpdXNEb21haW4iLCJyYWRpdXNTY2FsZSIsInN0cm9rZUNvbG9yRmllbGQiLCJzdHJva2VDb2xvckRvbWFpbiIsInN0cm9rZUNvbG9yU2NhbGUiLCJvYmplY3QiLCJhbGxEYXRhIiwiaW5kZXgiLCJnZXRQb3NpdGlvbiIsImZpbHRlcmVkSW5kZXgiLCJtYXAiLCJpIiwiZmlsdGVyIiwiZGF0YXNldHMiLCJvbGRMYXllckRhdGEiLCJkYXRhSWQiLCJncHVGaWx0ZXIiLCJ1cGRhdGVEYXRhIiwiZGF0YSIsInZhbHVlQWNjZXNzb3IiLCJmIiwiaW5kZXhBY2Nlc3NvciIsImFjY2Vzc29ycyIsImdldEF0dHJpYnV0ZUFjY2Vzc29ycyIsImdldEZpbHRlclZhbHVlIiwiZmlsdGVyVmFsdWVBY2Nlc3NvciIsImJvdW5kcyIsImZpeGVkUmFkaXVzIiwiQm9vbGVhbiIsImZpbmQiLCJmZWF0dXJlVHlwZXMiLCJ1cGRhdGVNZXRhIiwidXBkYXRlTGF5ZXJNZXRhIiwibWV0YSIsInBvbHlnb24iLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsImNvbG9yTWFrZXIiLCJuZXh0IiwidmFsdWUiLCJwb2ludCIsIm9wdHMiLCJvYmplY3RIb3ZlcmVkIiwibWFwU3RhdGUiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImdldFJhZGl1c1NjYWxlQnlab29tIiwiem9vbUZhY3RvciIsImdldFpvb21GYWN0b3IiLCJlbGVab29tRmFjdG9yIiwiZ2V0RWxldmF0aW9uWm9vbUZhY3RvciIsImxheWVyUHJvcHMiLCJsaW5lV2lkdGhTY2FsZSIsInBvaW50UmFkaXVzU2NhbGUiLCJsaW5lTWl0ZXJMaW1pdCIsInVwZGF0ZVRyaWdnZXJzIiwiZ2V0VmlzdWFsQ2hhbm5lbFVwZGF0ZVRyaWdnZXJzIiwiZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycyIsImRlZmF1bHRMYXllclByb3BzIiwiZ2V0RGVmYXVsdERlY2tMYXllclByb3BzIiwib3BhT3ZlcndyaXRlIiwicGlja2FibGUiLCJ0b29sdGlwIiwiZW5hYmxlZCIsImhvdmVyZWRPYmplY3QiLCJoYXNIb3ZlcmVkT2JqZWN0IiwiRGVja0dMR2VvSnNvbkxheWVyIiwiaGlnaGxpZ2h0Q29sb3IiLCJISUdITElHSF9DT0xPUl8zRCIsImF1dG9IaWdobGlnaHQiLCJleHRydWRlZCIsIndyYXBMb25naXR1ZGUiLCJyb3VuZGVkIiwiX3N1YkxheWVyUHJvcHMiLCJsaW5lIiwicG9pbnRzIiwibGluZU9wYWNpdHkiLCJnZXREZWZhdWx0SG92ZXJMYXllclByb3BzIiwiZ2V0TGluZVdpZHRoIiwiZ2V0UmFkaXVzIiwiZ2V0RWxldmF0aW9uIiwiZ2V0TGluZUNvbG9yIiwiZ2V0RmlsbENvbG9yIiwibGFiZWwiLCJmaWVsZHMiLCJnZW9qc29uQ29sdW1ucyIsInR5cGUiLCJhbmFseXplclR5cGUiLCJuYW1lIiwiZGVmYXVsdENvbHVtbnMiLCJHRU9KU09OX0ZJRUxEUyIsImZvdW5kQ29sdW1ucyIsImZpbmREZWZhdWx0Q29sdW1uRmllbGQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiaXNWaXNpYmxlIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHdCQUF3Qix3RkFDM0JDLHlCQUFXQyxRQURnQixFQUNMLElBREssMkRBRTNCRCx5QkFBV0Usb0JBRmdCLEVBRU8sSUFGUCwyREFHM0JGLHlCQUFXRyx5QkFIZ0IsRUFHWSxJQUhaLHlCQUE5QjtBQU1PLElBQU1DLGlCQUFpQixHQUFHO0FBQy9CQyxFQUFBQSxPQUFPLEVBQUUsU0FEc0I7QUFFL0JDLEVBQUFBLGFBQWEsa0NBQ1JDLGdDQUFrQkYsT0FEVjtB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QUssRUFBRTtBQUFSLFNBQVA7QUFDRDs7QUFFRCxhQUFPO0FBQ0xBLFFBQUFBLEtBQUssRUFBRTBILFlBQVksQ0FBQy9FLEdBQWIsQ0FBaUIsVUFBQXRDLE9BQU87QUFBQSxpQkFBSztBQUNsQzZHLFlBQUFBLEtBQUssRUFBRyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCQSxLQUFLLENBQUNXLE9BQU4sQ0FBYyxXQUFkLEVBQTJCLEVBQTNCLENBQTlCLElBQWlFLE1BQUksQ0FBQ1IsSUFEM0M7QUFFbENoSCxZQUFBQSxPQUFPLEVBQVBBLE9BRmtDO0FBR2xDeUgsWUFBQUEsU0FBUyxFQUFFO0FBSHVCLFdBQUw7QUFBQSxTQUF4QjtBQURGLE9BQVA7QUFPRDs7O0VBbEh1Q0MscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XG5pbXBvcnQge0RBVEFfVFlQRVN9IGZyb20gJ3R5cGUtYW5hbHl6ZXInO1xuXG5pbXBvcnQgTGF5ZXIsIHtjb2xvck1ha2VyfSBmcm9tICcuLi9iYXNlLWxheWVyJztcbmltcG9ydCB7R2VvSnNvbkxheWVyIGFzIERlY2tHTEdlb0pzb25MYXllcn0gZnJvbSAnQGRlY2suZ2wvbGF5ZXJzJztcbmltcG9ydCB7Z2V0R2VvanNvbkRhdGFNYXBzLCBnZXRHZW9qc29uQm91bmRzLCBnZXRHZW9qc29uRmVhdHVyZVR5cGVzfSBmcm9tICcuL2dlb2pzb24tdXRpbHMnO1xuaW1wb3J0IEdlb2pzb25MYXllckljb24gZnJvbSAnLi9nZW9qc29uLWxheWVyLWljb24nO1xuaW1wb3J0IHtHRU9KU09OX0ZJRUxEUywgSElHSExJR0hfQ09MT1JfM0QsIENIQU5ORUxfU0NBTEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge0xBWUVSX1ZJU19DT05GSUdTfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XG5cbmNvbnN0IFNVUFBPUlRFRF9BTkFMWVpFUl9UWVBFUyA9IHtcbiAgW0RBVEFfVFlQRVMuR0VPTUVUUlldOiB0cnVlLFxuICBbREFUQV9UWVBFUy5HRU9NRVRSWV9GUk9NX1NUUklOR106IHRydWUsXG4gIFtEQVRBX1RZUEVTLlBBSVJfR0VPTUVUUllfRlJPTV9TVFJJTkddOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3QgZ2VvanNvblZpc0NvbmZpZ3MgPSB7XG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcbiAgc3Ryb2tlT3BhY2l0eToge1xuICAgIC4uLkxBWUVSX1ZJU19DT05GSUdTLm9wYWNpdHksXG4gICAgcHJvcGVydHk6ICdzdHJva2VPcGFjaXR5J1xuICB9LFxuICB0aGlja25lc3M6IHtcbiAgICAuLi5MQVlFUl9WSVNfQ09ORklHUy50aGlja25lc3MsXG4gICAgZGVmYXVsdFZhbHVlOiAwLjVcbiAgfSxcbiAgc3Ryb2tlQ29sb3I6ICdzdHJva2VDb2xvcicsXG4gIGNvbG9yUmFuZ2U6ICdjb2xvclJhbmdlJyxcbiAgc3Ryb2tlQ29sb3JSYW5nZTogJ3N0cm9rZUNvbG9yUmFuZ2UnLFxuICByYWRpdXM6ICdyYWRpdXMnLFxuXG4gIHNpemVSYW5nZTogJ3N0cm9rZVdpZHRoUmFuZ2UnLFxuICByYWRpdXNSYW5nZTogJ3JhZGl1c1JhbmdlJyxcbiAgaGVpZ2h0UmFuZ2U6ICdlbGV2YXRpb25SYW5nZScsXG4gIGVsZXZhdGlvblNjYWxlOiAnZWxldmF0aW9uU2NhbGUnLFxuICBlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yOiAnZW5hYmxlRWxldmF0aW9uWm9vbUZhY3RvcicsXG4gIHN0cm9rZWQ6ICdzdHJva2VkJyxcbiAgZmlsbGVkOiAnZmlsbGVkJyxcbiAgZW5hYmxlM2Q6ICdlbmFibGUzZCcsXG4gIHdpcmVmcmFtZTogJ3dpcmVmcmFtZSdcbn07XG5cbmV4cG9ydCBjb25zdCBnZW9Kc29uUmVxdWlyZWRDb2x1bW5zID0gWydnZW9qc29uJ107XG5leHBvcnQgY29uc3QgZmVhdHVyZUFjY2Vzc29yID0gKHtnZW9qc29ufSkgPT4gZCA9PiBkW2dlb2pzb24uZmllbGRJZHhdO1xuLy8gYWNjZXNzIGZlYXR1cmUgcHJvcGVydGllcyBmcm9tIGdlb2pzb24gc3ViIGxheWVyXG5leHBvcnQgY29uc3QgZGVmYXVsdEVsZXZhdGlvbiA9IDUwMDtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TGluZVdpZHRoID0gMTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmFkaXVzID0gMTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvSnNvbkxheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IFtdO1xuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcoZ2VvanNvblZpc0NvbmZpZ3MpO1xuICAgIHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvciA9ICgpID0+IGZlYXR1cmVBY2Nlc3Nvcih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZ2VvanNvbic7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ1BvbHlnb24nO1xuICB9XG5cbiAgZ2V0IGxheWVySWNvbigpIHtcbiAgICByZXR1cm4gR2VvanNvbkxheWVySWNvbjtcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gZ2VvSnNvblJlcXVpcmVkQ29sdW1ucztcbiAgfVxuXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVscyA9IHN1cGVyLnZpc3VhbENoYW5uZWxzO1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICAuLi52aXN1YWxDaGFubmVscy5jb2xvcixcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRGaWxsQ29sb3InLFxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLmZpbGxlZCxcbiAgICAgICAgbnVsbFZhbHVlOiB2aXN1YWxDaGFubmVscy5jb2xvci5udWxsVmFsdWUsXG4gICAgICAgIGdldEF0dHJpYnV0ZVZhbHVlOiBjb25maWcgPT4gZCA9PiBkLnByb3BlcnRpZXMuZmlsbENvbG9yIHx8IGNvbmZpZy5jb2xvcixcbiAgICAgICAgLy8gdXNlZCB0aGlzIHRvIGdldCB1cGRhdGVUcmlnZ2Vyc1xuICAgICAgICBkZWZhdWx0VmFsdWU6IGNvbmZpZyA9PiBjb25maWcuY29sb3JcbiAgICAgIH0sXG4gICAgICBzdHJva2VDb2xvcjoge1xuICAgICAgICBwcm9wZXJ0eTogJ3N0cm9rZUNvbG9yJyxcbiAgICAgICAgZmllbGQ6ICdzdHJva2VDb2xvckZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdzdHJva2VDb2xvclNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnc3Ryb2tlQ29sb3JEb21haW4nLFxuICAgICAgICByYW5nZTogJ3N0cm9rZUNvbG9yUmFuZ2UnLFxuICAgICAgICBrZXk6ICdzdHJva2VDb2xvcicsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLmNvbG9yLFxuICAgICAgICBhY2Nlc3NvcjogJ2dldExpbmVDb2xvcicsXG4gICAgICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCxcbiAgICAgICAgbnVsbFZhbHVlOiB2aXN1YWxDaGFubmVscy5jb2xvci5udWxsVmFsdWUsXG4gICAgICAgIGdldEF0dHJpYnV0ZVZhbHVlOiBjb25maWcgPT4gZCA9PlxuICAgICAgICAgIGQucHJvcGVydGllcy5saW5lQ29sb3IgfHwgY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvciB8fCBjb25maWcuY29sb3IsXG4gICAgICAgIC8vIHVzZWQgdGhpcyB0byBnZXQgdXBkYXRlVHJpZ2dlcnNcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvciB8fCBjb25maWcuY29sb3JcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIC4uLnZpc3VhbENoYW5uZWxzLnNpemUsXG4gICAgICAgIHByb3BlcnR5OiAnc3Ryb2tlJyxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRMaW5lV2lkdGgnLFxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLnN0cm9rZWQsXG4gICAgICAgIG51bGxWYWx1ZTogMCxcbiAgICAgICAgZ2V0QXR0cmlidXRlVmFsdWU6ICgpID0+IGQgPT4gZC5wcm9wZXJ0aWVzLmxpbmVXaWR0aCB8fCBkZWZhdWx0TGluZVdpZHRoXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiB7XG4gICAgICAgIHByb3BlcnR5OiAnaGVpZ2h0JyxcbiAgICAgICAgZmllbGQ6ICdoZWlnaHRGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnaGVpZ2h0U2NhbGUnLFxuICAgICAgICBkb21haW46ICdoZWlnaHREb21haW4nLFxuICAgICAgICByYW5nZTogJ2hlaWdodFJhbmdlJyxcbiAgICAgICAga2V5OiAnaGVpZ2h0JyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuc2l6ZSxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRFbGV2YXRpb24nLFxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICBudWxsVmFsdWU6IDAsXG4gICAgICAgIGdldEF0dHJpYnV0ZVZhbHVlOiAoKSA9PiBkID0+IGQucHJvcGVydGllcy5lbGV2YXRpb24gfHwgZGVmYXVsdEVsZXZhdGlvblxuICAgICAgfSxcbiAgICAgIHJhZGl1czoge1xuICAgICAgICBwcm9wZXJ0eTogJ3JhZGl1cycsXG4gICAgICAgIGZpZWxkOiAncmFkaXVzRmllbGQnLFxuICAgICAgICBzY2FsZTogJ3JhZGl1c1NjYWxlJyxcbiAgICAgICAgZG9tYWluOiAncmFkaXVzRG9tYWluJyxcbiAgICAgICAgcmFuZ2U6ICdyYWRpdXNSYW5nZScsXG4gICAgICAgIGtleTogJ3JhZGl1cycsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnJhZGl1cyxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRSYWRpdXMnLFxuICAgICAgICBudWxsVmFsdWU6IDAsXG4gICAgICAgIGdldEF0dHJpYnV0ZVZhbHVlOiAoKSA9PiBkID0+IGQucHJvcGVydGllcy5yYWRpdXMgfHwgZGVmYXVsdFJhZGl1c1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnZXRQb3NpdGlvbkFjY2Vzc29yKCkge1xuICAgIHJldHVybiB0aGlzLmdldEZlYXR1cmUodGhpcy5jb25maWcuY29sdW1ucyk7XG4gIH1cblxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtsYWJlbCwgZmllbGRzID0gW119KSB7XG4gICAgY29uc3QgZ2VvanNvbkNvbHVtbnMgPSBmaWVsZHNcbiAgICAgIC5maWx0ZXIoZiA9PiBmLnR5cGUgPT09ICdnZW9qc29uJyAmJiBTVVBQT1JURURfQU5BTFlaRVJfVFlQRVNbZi5hbmFseXplclR5cGVdKVxuICAgICAgLm1hcChmID0+IGYubmFtZSk7XG5cbiAgICBjb25zdCBkZWZhdWx0Q29sdW1ucyA9IHtcbiAgICAgIGdlb2pzb246IHVuaXEoWy4uLkdFT0pTT05fRklFTERTLmdlb2pzb24sIC4uLmdlb2pzb25Db2x1bW5zXSlcbiAgICB9O1xuXG4gICAgY29uc3QgZm91bmRDb2x1bW5zID0gdGhpcy5maW5kRGVmYXVsdENvbHVtbkZpZWxkKGRlZmF1bHRDb2x1bW5zLCBmaWVsZHMpO1xuICAgIGlmICghZm91bmRDb2x1bW5zIHx8ICFmb3VuZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge3Byb3BzOiBbXX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiBmb3VuZENvbHVtbnMubWFwKGNvbHVtbnMgPT4gKHtcbiAgICAgICAgbGFiZWw6ICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnICYmIGxhYmVsLnJlcGxhY2UoL1xcLlteLy5dKyQvLCAnJykpIHx8IHRoaXMudHlwZSxcbiAgICAgICAgY29sdW1ucyxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9KSlcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzKSxcblxuICAgICAgLy8gYWRkIGhlaWdodCB2aXN1YWwgY2hhbm5lbFxuICAgICAgaGVpZ2h0RmllbGQ6IG51bGwsXG4gICAgICBoZWlnaHREb21haW46IFswLCAxXSxcbiAgICAgIGhlaWdodFNjYWxlOiAnbGluZWFyJyxcblxuICAgICAgLy8gYWRkIHJhZGl1cyB2aXN1YWwgY2hhbm5lbFxuICAgICAgcmFkaXVzRmllbGQ6IG51bGwsXG4gICAgICByYWRpdXNEb21haW46IFswLCAxXSxcbiAgICAgIHJhZGl1c1NjYWxlOiAnbGluZWFyJyxcblxuICAgICAgLy8gYWRkIHN0cm9rZSBjb2xvciB2aXN1YWwgY2hhbm5lbFxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZDogbnVsbCxcbiAgICAgIHN0cm9rZUNvbG9yRG9tYWluOiBbMCwgMV0sXG4gICAgICBzdHJva2VDb2xvclNjYWxlOiAncXVhbnRpbGUnXG4gICAgfTtcbiAgfVxuXG4gIGdldEhvdmVyRGF0YShvYmplY3QsIGFsbERhdGEpIHtcbiAgICAvLyBpbmRleCBvZiBhbGxEYXRhIGlzIHNhdmVkIHRvIGZlYXR1cmUucHJvcGVydGllc1xuICAgIHJldHVybiBhbGxEYXRhW29iamVjdC5wcm9wZXJ0aWVzLmluZGV4XTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRQb3NpdGlvbikge1xuICAgIHJldHVybiBmaWx0ZXJlZEluZGV4Lm1hcChpID0+IHRoaXMuZGF0YVRvRmVhdHVyZVtpXSkuZmlsdGVyKGQgPT4gZCk7XG4gIH1cblxuICBmb3JtYXRMYXllckRhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSkge1xuICAgIGNvbnN0IHthbGxEYXRhLCBncHVGaWx0ZXJ9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XG4gICAgY29uc3QgdmFsdWVBY2Nlc3NvciA9IGYgPT4gYWxsRGF0YVtmLnByb3BlcnRpZXMuaW5kZXhdO1xuICAgIGNvbnN0IGluZGV4QWNjZXNzb3IgPSBmID0+IGYucHJvcGVydGllcy5pbmRleDtcbiAgICBjb25zdCBhY2Nlc3NvcnMgPSB0aGlzLmdldEF0dHJpYnV0ZUFjY2Vzc29ycyh2YWx1ZUFjY2Vzc29yKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhLFxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZUFjY2Vzc29yKGluZGV4QWNjZXNzb3IsIHZhbHVlQWNjZXNzb3IpLFxuICAgICAgLi4uYWNjZXNzb3JzXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhKSB7XG4gICAgY29uc3QgZ2V0RmVhdHVyZSA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IGdldEdlb2pzb25EYXRhTWFwcyhhbGxEYXRhLCBnZXRGZWF0dXJlKTtcblxuICAgIC8vIGdldCBib3VuZHMgZnJvbSBmZWF0dXJlc1xuICAgIGNvbnN0IGJvdW5kcyA9IGdldEdlb2pzb25Cb3VuZHModGhpcy5kYXRhVG9GZWF0dXJlKTtcbiAgICAvLyBpZiBhbnkgb2YgdGhlIGZlYXR1cmUgaGFzIHByb3BlcnRpZXMucmFkaXVzIHNldCB0byBiZSB0cnVlXG4gICAgY29uc3QgZml4ZWRSYWRpdXMgPSBCb29sZWFuKFxuICAgICAgdGhpcy5kYXRhVG9GZWF0dXJlLmZpbmQoZCA9PiBkICYmIGQucHJvcGVydGllcyAmJiBkLnByb3BlcnRpZXMucmFkaXVzKVxuICAgICk7XG5cbiAgICAvLyBrZWVwIGEgcmVjb3JkIG9mIHdoYXQgdHlwZSBvZiBnZW9tZXRyeSB0aGUgY29sbGVjdGlvbiBoYXNcbiAgICBjb25zdCBmZWF0dXJlVHlwZXMgPSBnZXRHZW9qc29uRmVhdHVyZVR5cGVzKHRoaXMuZGF0YVRvRmVhdHVyZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1ldGEoe2JvdW5kcywgZml4ZWRSYWRpdXMsIGZlYXR1cmVUeXBlc30pO1xuICB9XG5cbiAgc2V0SW5pdGlhbExheWVyQ29uZmlnKHthbGxEYXRhfSkge1xuICAgIHRoaXMudXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEpO1xuXG4gICAgY29uc3Qge2ZlYXR1cmVUeXBlc30gPSB0aGlzLm1ldGE7XG4gICAgLy8gZGVmYXVsdCBzZXR0aW5ncyBpcyBzdHJva2U6IHRydWUsIGZpbGxlZDogZmFsc2VcbiAgICBpZiAoZmVhdHVyZVR5cGVzICYmIGZlYXR1cmVUeXBlcy5wb2x5Z29uKSB7XG4gICAgICAvLyBzZXQgYm90aCBmaWxsIGFuZCBzdHJva2UgdG8gdHJ1ZVxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlTGF5ZXJWaXNDb25maWcoe1xuICAgICAgICBmaWxsZWQ6IHRydWUsXG4gICAgICAgIHN0cm9rZWQ6IHRydWUsXG4gICAgICAgIHN0cm9rZUNvbG9yOiBjb2xvck1ha2VyLm5leHQoKS52YWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChmZWF0dXJlVHlwZXMgJiYgZmVhdHVyZVR5cGVzLnBvaW50KSB7XG4gICAgICAvLyBzZXQgZmlsbCB0byB0cnVlIGlmIGRldGVjdCBwb2ludFxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlTGF5ZXJWaXNDb25maWcoe2ZpbGxlZDogdHJ1ZSwgc3Ryb2tlZDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckxheWVyKG9wdHMpIHtcbiAgICBjb25zdCB7ZGF0YSwgZ3B1RmlsdGVyLCBvYmplY3RIb3ZlcmVkLCBtYXBTdGF0ZSwgaW50ZXJhY3Rpb25Db25maWd9ID0gb3B0cztcblxuICAgIGNvbnN0IHtmaXhlZFJhZGl1cywgZmVhdHVyZVR5cGVzfSA9IHRoaXMubWV0YTtcbiAgICBjb25zdCByYWRpdXNTY2FsZSA9IHRoaXMuZ2V0UmFkaXVzU2NhbGVCeVpvb20obWFwU3RhdGUsIGZpeGVkUmFkaXVzKTtcbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcbiAgICBjb25zdCBlbGVab29tRmFjdG9yID0gdGhpcy5nZXRFbGV2YXRpb25ab29tRmFjdG9yKG1hcFN0YXRlKTtcblxuICAgIGNvbnN0IHt2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XG5cbiAgICBjb25zdCBsYXllclByb3BzID0ge1xuICAgICAgbGluZVdpZHRoU2NhbGU6IHZpc0NvbmZpZy50aGlja25lc3MgKiB6b29tRmFjdG9yICogOCxcbiAgICAgIGVsZXZhdGlvblNjYWxlOiB2aXNDb25maWcuZWxldmF0aW9uU2NhbGUgKiBlbGVab29tRmFjdG9yLFxuICAgICAgcG9pbnRSYWRpdXNTY2FsZTogcmFkaXVzU2NhbGUsXG4gICAgICBsaW5lTWl0ZXJMaW1pdDogNFxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0VmlzdWFsQ2hhbm5lbFVwZGF0ZVRyaWdnZXJzKCksXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnNcbiAgICB9O1xuXG4gICAgY29uc3QgZGVmYXVsdExheWVyUHJvcHMgPSB0aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcbiAgICBjb25zdCBvcGFPdmVyd3JpdGUgPSB7XG4gICAgICBvcGFjaXR5OiB2aXNDb25maWcuc3Ryb2tlT3BhY2l0eVxuICAgIH07XG5cbiAgICBjb25zdCBwaWNrYWJsZSA9IGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuZW5hYmxlZDtcbiAgICBjb25zdCBob3ZlcmVkT2JqZWN0ID0gdGhpcy5oYXNIb3ZlcmVkT2JqZWN0KG9iamVjdEhvdmVyZWQpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBEZWNrR0xHZW9Kc29uTGF5ZXIoe1xuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcbiAgICAgICAgLi4ubGF5ZXJQcm9wcyxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgcGlja2FibGUsXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiBISUdITElHSF9DT0xPUl8zRCxcbiAgICAgICAgYXV0b0hpZ2hsaWdodDogdmlzQ29uZmlnLmVuYWJsZTNkICYmIHBpY2thYmxlLFxuICAgICAgICBzdHJva2VkOiB2aXNDb25maWcuc3Ryb2tlZCxcbiAgICAgICAgZmlsbGVkOiB2aXNDb25maWcuZmlsbGVkLFxuICAgICAgICBleHRydWRlZDogdmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICB3aXJlZnJhbWU6IHZpc0NvbmZpZy53aXJlZnJhbWUsXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxuICAgICAgICBsaW5lTWl0ZXJMaW1pdDogMixcbiAgICAgICAgcm91bmRlZDogdHJ1ZSxcbiAgICAgICAgdXBkYXRlVHJpZ2dlcnMsXG4gICAgICAgIF9zdWJMYXllclByb3BzOiB7XG4gICAgICAgICAgLi4uKGZlYXR1cmVUeXBlcy5wb2x5Z29uID8geydwb2x5Z29ucy1zdHJva2UnOiBvcGFPdmVyd3JpdGV9IDoge30pLFxuICAgICAgICAgIC4uLihmZWF0dXJlVHlwZXMubGluZSA/IHsnbGluZS1zdHJpbmdzJzogb3BhT3ZlcndyaXRlfSA6IHt9KSxcbiAgICAgICAgICAuLi4oZmVhdHVyZVR5cGVzLnBvaW50XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBwb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgIGxpbmVPcGFjaXR5OiB2aXNDb25maWcuc3Ryb2tlT3BhY2l0eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSlcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICAuLi4oaG92ZXJlZE9iamVjdCAmJiAhdmlzQ29uZmlnLmVuYWJsZTNkXG4gICAgICAgID8gW1xuICAgICAgICAgICAgbmV3IERlY2tHTEdlb0pzb25MYXllcih7XG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpLFxuICAgICAgICAgICAgICAuLi5sYXllclByb3BzLFxuICAgICAgICAgICAgICB3cmFwTG9uZ2l0dWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGF0YTogW2hvdmVyZWRPYmplY3RdLFxuICAgICAgICAgICAgICBnZXRMaW5lV2lkdGg6IGRhdGEuZ2V0TGluZVdpZHRoLFxuICAgICAgICAgICAgICBnZXRSYWRpdXM6IGRhdGEuZ2V0UmFkaXVzLFxuICAgICAgICAgICAgICBnZXRFbGV2YXRpb246IGRhdGEuZ2V0RWxldmF0aW9uLFxuICAgICAgICAgICAgICBnZXRMaW5lQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICAvLyBhbHdheXMgZHJhdyBvdXRsaW5lXG4gICAgICAgICAgICAgIHN0cm9rZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGZpbGxlZDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==