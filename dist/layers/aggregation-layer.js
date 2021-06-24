"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.aggregateRequiredColumns = exports.getFilterDataFunc = exports.getValueAggrFunc = exports.pointPosResolver = exports.pointPosAccessor = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _baseLayer = _interopRequireDefault(require("./base-layer"));

var _colorUtils = require("../utils/color-utils");

var _aggregateUtils = require("../utils/aggregate-utils");

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var pointPosAccessor = function pointPosAccessor(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;
  return function (d) {
    return [d.data[lng.fieldIdx], d.data[lat.fieldIdx]];
  };
};

exports.pointPosAccessor = pointPosAccessor;

var pointPosResolver = function pointPosResolver(_ref2) {
  var lat = _ref2.lat,
      lng = _ref2.lng;
  return "".concat(lat.fieldIdx, "-").concat(lng.fieldIdx);
};

exports.pointPosResolver = pointPosResolver;

var getValueAggrFunc = function getValueAggrFunc(field, aggregation) {
  return function (points) {
    return field ? (0, _aggregateUtils.aggregate)(points.map(function (p) {
      return field.valueAccessor(p.data);
    }), aggregation) : points.length;
  };
};

exports.getValueAggrFunc = getValueAggrFunc;

var getFilterDataFunc = function getFilterDataFunc(filterRange, getFilterValue) {
  return function (pt) {
    return getFilterValue(pt).every(function (val, i) {
      return val >= filterRange[i][0] && val <= filterRange[i][1];
    });
  };
};

exports.getFilterDataFunc = getFilterDataFunc;

var getLayerColorRange = function getLayerColorRange(colorRange) {
  return colorRange.colors.map(_colorUtils.hexToRgb);
};

var aggregateRequiredColumns = ['lat', 'lng'];
exports.aggregateRequiredColumns = aggregateRequiredColumns;

var AggregationLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(AggregationLayer, _Layer);

  var _super = _createSuper(AggregationLayer);

  function AggregationLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AggregationLayer);
    _this = _super.call(this, props);

    _this.getPositionAccessor = function () {
      return pointPosAccessor(_this.config.columns);
    };

    _this.getColorRange = (0, _lodash["default"])(getLayerColorRange);
    return _this;
  }

  (0, _createClass2["default"])(AggregationLayer, [{
    key: "isAggregated",
    get: function get() {
      return true;
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return aggregateRequiredColumns;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return [].concat((0, _toConsumableArray2["default"])((0, _get2["default"])((0, _getPrototypeOf2["default"])(AggregationLayer.prototype), "noneLayerDataAffectingProps", this)), ['enable3d', 'colorRange', 'colorDomain', 'sizeRange', 'sizeScale', 'sizeDomain', 'percentile', 'coverage', 'elevationPercentile', 'elevationScale', 'enableElevationZoomFactor']);
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
        },
        size: {
          aggregation: 'sizeAggregation',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.sizeAggr,
          condition: function condition(config) {
            return config.visConfig.enable3d;
          },
          defaultMeasure: 'property.pointCount',
          domain: 'sizeDomain',
          field: 'sizeField',
          key: 'size',
          property: 'height',
          range: 'sizeRange',
          scale: 'sizeScale'
        }
      };
    }
    /**
     * Get the description of a visualChannel config
     * @param key
     * @returns {{label: string, measure: (string|string)}}
     */

  }, {
    key: "getVisualChannelDescription",
    value: function getVisualChannelDescription(key) {
      // e.g. label: Color, measure: Average of ETA
      var _this$visualChannels$ = this.visualChannels[key],
          range = _this$visualChannels$.range,
          field = _this$visualChannels$.field,
          defaultMeasure = _this$visualChannels$.defaultMeasure,
          aggregation = _this$visualChannels$.aggregation;
      return {
        label: this.visConfigSettings[range].label,
        measure: this.config[field] ? "".concat(this.config.visConfig[aggregation], " of ").concat(this.config[field].displayName) : defaultMeasure
      };
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object) {
      // return aggregated object
      return object;
    }
    /**
     * Aggregation layer handles visual channel aggregation inside deck.gl layer
     */

  }, {
    key: "updateLayerVisualChannel",
    value: function updateLayerVisualChannel(_ref3, channel) {
      var data = _ref3.data,
          allData = _ref3.allData;
      this.validateVisualChannel(channel);
    }
    /**
     * Validate aggregation type on top of basic layer visual channel validation
     * @param channel
     */

  }, {
    key: "validateVisualChannel",
    value: function validateVisualChannel(channel) {
      // field type decides aggregation type decides scale type
      this.validateFieldType(channel);
      this.validateAggregationType(channel);
      this.validateScale(channel);
    }
    /**
     * Validate aggregation type based on selected field
     */

  }, {
    key: "validateAggregationType",
    value: function validateAggregationType(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          aggregation = visualChannel.aggregation;
      var aggregationOptions = this.getAggregationOptions(channel);

      if (!aggregation) {
        return;
      }

      if (!aggregationOptions.length) {
        // if field cannot be aggregated, set field to null
        this.updateLayerConfig((0, _defineProperty2["default"])({}, field, null));
      } else if (!aggregationOptions.includes(this.config.visConfig[aggregation])) {
        // current aggregation type is not supported by this field
        // set aggregation to the first supported option
        this.updateLayerVisConfig((0, _defineProperty2["default"])({}, aggregation, aggregationOptions[0]));
      }
    }
  }, {
    key: "getAggregationOptions",
    value: function getAggregationOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          channelScaleType = visualChannel.channelScaleType;
      return Object.keys(this.config[field] ? _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType] : _defaultSettings.DEFAULT_AGGREGATION[channelScaleType]);
    }
    /**
     * Get scale options based on current field and aggregation type
     * @param {string} channel
     * @returns {string[]}
     */

  }, {
    key: "getScaleOptions",
    value: function getScaleOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          aggregation = visualChannel.aggregation,
          channelScaleType = visualChannel.channelScaleType;
      var aggregationType = this.config.visConfig[aggregation];
      return this.config[field] ? // scale options based on aggregation
      _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType][aggregationType] : // default scale options for point count
      _defaultSettings.DEFAULT_AGGREGATION[channelScaleType][aggregationType];
    }
    /**
     * Aggregation layer handles visual channel aggregation inside deck.gl layer
     */

  }, {
    key: "updateLayerDomain",
    value: function updateLayerDomain(datasets, newFilter) {
      return this;
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getPosition) {
      // get bounds from points
      var bounds = this.getPointsBounds(allData, function (d) {
        return getPosition({
          data: d
        });
      });
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref4, getPosition) {
      var allData = _ref4.allData,
          filteredIndex = _ref4.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var pos = getPosition({
          data: allData[index]
        }); // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null

        if (pos.every(Number.isFinite)) {
          data.push({
            index: index,
            data: allData[index]
          });
        }
      }

      return data;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var getPosition = this.getPositionAccessor(); // if (

      var gpuFilter = datasets[this.config.dataId].gpuFilter;
      var getColorValue = getValueAggrFunc(this.config.colorField, this.config.visConfig.colorAggregation);
      var getElevationValue = getValueAggrFunc(this.config.sizeField, this.config.visConfig.sizeAggregation);
      var hasFilter = Object.values(gpuFilter.filterRange).some(function (arr) {
        return arr.some(function (v) {
          return v !== 0;
        });
      });
      var getFilterValue = gpuFilter.filterValueAccessor();
      var filterData = hasFilter ? getFilterDataFunc(gpuFilter.filterRange, getFilterValue) : undefined;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      return _objectSpread(_objectSpread({
        data: data,
        getPosition: getPosition,
        _filterData: filterData
      }, getColorValue ? {
        getColorValue: getColorValue
      } : {}), getElevationValue ? {
        getElevationValue: getElevationValue
      } : {});
    }
  }, {
    key: "getDefaultDeckLayerProps",
    value: function getDefaultDeckLayerProps(opts) {
      var baseProp = (0, _get2["default"])((0, _getPrototypeOf2["default"])(AggregationLayer.prototype), "getDefaultDeckLayerProps", this).call(this, opts);
      return _objectSpread(_objectSpread({}, baseProp), {}, {
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        // gpu data filtering is not supported in aggregation layer
        extensions: [],
        autoHighlight: this.config.visConfig.enable3d
      });
    }
  }, {
    key: "getDefaultAggregationLayerProp",
    value: function getDefaultAggregationLayerProp(opts) {
      var gpuFilter = opts.gpuFilter,
          mapState = opts.mapState,
          _opts$layerCallbacks = opts.layerCallbacks,
          layerCallbacks = _opts$layerCallbacks === void 0 ? {} : _opts$layerCallbacks;
      var visConfig = this.config.visConfig;
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var updateTriggers = {
        getColorValue: {
          colorField: this.config.colorField,
          colorAggregation: this.config.visConfig.colorAggregation
        },
        getElevationValue: {
          sizeField: this.config.sizeField,
          sizeAggregation: this.config.visConfig.sizeAggregation
        },
        _filterData: _objectSpread({
          filterRange: gpuFilter.filterRange
        }, gpuFilter.filterValueUpdateTriggers)
      };
      return _objectSpread(_objectSpread({}, this.getDefaultDeckLayerProps(opts)), {}, {
        coverage: visConfig.coverage,
        // color
        colorRange: this.getColorRange(visConfig.colorRange),
        colorScaleType: this.config.colorScale,
        upperPercentile: visConfig.percentile[1],
        lowerPercentile: visConfig.percentile[0],
        colorAggregation: visConfig.colorAggregation,
        // elevation
        extruded: visConfig.enable3d,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        elevationScaleType: this.config.sizeScale,
        elevationRange: visConfig.sizeRange,
        elevationLowerPercentile: visConfig.elevationPercentile[0],
        elevationUpperPercentile: visConfig.elevationPercentile[1],
        // updateTriggers
        updateTriggers: updateTriggers,
        // callbacks
        onSetColorDomain: layerCallbacks.onSetLayerDomain
      });
    }
  }]);
  return AggregationLayer;
}(_baseLayer["default"]);

exports["default"] = AggregationLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvYWdncmVnYXRpb24tbGF5ZXIuanMiXSwibmFtZXMiOlsicG9pbnRQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImQiLCJkYXRhIiwiZmllbGRJZHgiLCJwb2ludFBvc1Jlc29sdmVyIiwiZ2V0VmFsdWVBZ2dyRnVuYyIsImZpZWxkIiwiYWdncmVnYXRpb24iLCJwb2ludHMiLCJtYXAiLCJwIiwidmFsdWVBY2Nlc3NvciIsImxlbmd0aCIsImdldEZpbHRlckRhdGFGdW5jIiwiZmlsdGVyUmFuZ2UiLCJnZXRGaWx0ZXJWYWx1ZSIsInB0IiwiZXZlcnkiLCJ2YWwiLCJpIiwiZ2V0TGF5ZXJDb2xvclJhbmdlIiwiY29sb3JSYW5nZSIsImNvbG9ycyIsImhleFRvUmdiIiwiYWdncmVnYXRlUmVxdWlyZWRDb2x1bW5zIiwiQWdncmVnYXRpb25MYXllciIsInByb3BzIiwiZ2V0UG9zaXRpb25BY2Nlc3NvciIsImNvbmZpZyIsImNvbHVtbnMiLCJnZXRDb2xvclJhbmdlIiwiZGVmYXVsdFBvaW50Q29sdW1uUGFpcnMiLCJjb2xvciIsImNoYW5uZWxTY2FsZVR5cGUiLCJDSEFOTkVMX1NDQUxFUyIsImNvbG9yQWdnciIsImRlZmF1bHRNZWFzdXJlIiwiZG9tYWluIiwia2V5IiwicHJvcGVydHkiLCJyYW5nZSIsInNjYWxlIiwic2l6ZSIsInNpemVBZ2dyIiwiY29uZGl0aW9uIiwidmlzQ29uZmlnIiwiZW5hYmxlM2QiLCJ2aXN1YWxDaGFubmVscyIsImxhYmVsIiwidmlzQ29uZmlnU2V0dGluZ3MiLCJtZWFzdXJlIiwiZGlzcGxheU5hbWUiLCJvYmplY3QiLCJjaGFubmVsIiwiYWxsRGF0YSIsInZhbGlkYXRlVmlzdWFsQ2hhbm5lbCIsInZhbGlkYXRlRmllbGRUeXBlIiwidmFsaWRhdGVBZ2dyZWdhdGlvblR5cGUiLCJ2YWxpZGF0ZVNjYWxlIiwidmlzdWFsQ2hhbm5lbCIsImFnZ3JlZ2F0aW9uT3B0aW9ucyIsImdldEFnZ3JlZ2F0aW9uT3B0aW9ucyIsInVwZGF0ZUxheWVyQ29uZmlnIiwiaW5jbHVkZXMiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsIk9iamVjdCIsImtleXMiLCJGSUVMRF9PUFRTIiwidHlwZSIsIkRFRkFVTFRfQUdHUkVHQVRJT04iLCJhZ2dyZWdhdGlvblR5cGUiLCJkYXRhc2V0cyIsIm5ld0ZpbHRlciIsImdldFBvc2l0aW9uIiwiYm91bmRzIiwiZ2V0UG9pbnRzQm91bmRzIiwidXBkYXRlTWV0YSIsImZpbHRlcmVkSW5kZXgiLCJpbmRleCIsInBvcyIsIk51bWJlciIsImlzRmluaXRlIiwicHVzaCIsIm9sZExheWVyRGF0YSIsImdwdUZpbHRlciIsImRhdGFJZCIsImdldENvbG9yVmFsdWUiLCJjb2xvckZpZWxkIiwiY29sb3JBZ2dyZWdhdGlvbiIsImdldEVsZXZhdGlvblZhbHVlIiwic2l6ZUZpZWxkIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiaGFzRmlsdGVyIiwidmFsdWVzIiwic29tZSIsImFyciIsInYiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiZmlsdGVyRGF0YSIsInVuZGVmaW5lZCIsInVwZGF0ZURhdGEiLCJfZmlsdGVyRGF0YSIsIm9wdHMiLCJiYXNlUHJvcCIsImhpZ2hsaWdodENvbG9yIiwiSElHSExJR0hfQ09MT1JfM0QiLCJleHRlbnNpb25zIiwiYXV0b0hpZ2hsaWdodCIsIm1hcFN0YXRlIiwibGF5ZXJDYWxsYmFja3MiLCJlbGVab29tRmFjdG9yIiwiZ2V0RWxldmF0aW9uWm9vbUZhY3RvciIsInVwZGF0ZVRyaWdnZXJzIiwiZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycyIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsImNvdmVyYWdlIiwiY29sb3JTY2FsZVR5cGUiLCJjb2xvclNjYWxlIiwidXBwZXJQZXJjZW50aWxlIiwicGVyY2VudGlsZSIsImxvd2VyUGVyY2VudGlsZSIsImV4dHJ1ZGVkIiwiZWxldmF0aW9uU2NhbGUiLCJlbGV2YXRpb25TY2FsZVR5cGUiLCJzaXplU2NhbGUiLCJlbGV2YXRpb25SYW5nZSIsInNpemVSYW5nZSIsImVsZXZhdGlvbkxvd2VyUGVyY2VudGlsZSIsImVsZXZhdGlvblBlcmNlbnRpbGUiLCJlbGV2YXRpb25VcHBlclBlcmNlbnRpbGUiLCJvblNldENvbG9yRG9tYWluIiwib25TZXRMYXllckRvbWFpbiIsIkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBSU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUVDLEdBQUYsUUFBRUEsR0FBRjtBQUFBLE1BQU9DLEdBQVAsUUFBT0EsR0FBUDtBQUFBLFNBQWdCLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQUNBLENBQUMsQ0FBQ0MsSUFBRixDQUFPRixHQUFHLENBQUNHLFFBQVgsQ0FBRCxFQUF1QkYsQ0FBQyxDQUFDQyxJQUFGLENBQU9ILEdBQUcsQ0FBQ0ksUUFBWCxDQUF2QixDQUFKO0FBQUEsR0FBakI7QUFBQSxDQUF6Qjs7OztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFTCxHQUFGLFNBQUVBLEdBQUY7QUFBQSxNQUFPQyxHQUFQLFNBQU9BLEdBQVA7QUFBQSxtQkFBbUJELEdBQUcsQ0FBQ0ksUUFBdkIsY0FBbUNILEdBQUcsQ0FBQ0csUUFBdkM7QUFBQSxDQUF6Qjs7OztBQUVBLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFRQyxXQUFSLEVBQXdCO0FBQ3RELFNBQU8sVUFBQUMsTUFBTSxFQUFJO0FBQ2YsV0FBT0YsS0FBSyxHQUNSLCtCQUNFRSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsYUFBSUosS0FBSyxDQUFDSyxhQUFOLENBQW9CRCxDQUFDLENBQUNSLElBQXRCLENBQUo7QUFBQSxLQUFaLENBREYsRUFFRUssV0FGRixDQURRLEdBS1JDLE1BQU0sQ0FBQ0ksTUFMWDtBQU1E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QUFlRUMsUUFBQUEsY0FBYyxFQUFFaEYsU0FBUyxDQUFDaUYsU0FmNUI7QUFnQkVDLFFBQUFBLHdCQUF3QixFQUFFbEYsU0FBUyxDQUFDbUYsbUJBQVYsQ0FBOEIsQ0FBOUIsQ0FoQjVCO0FBaUJFQyxRQUFBQSx3QkFBd0IsRUFBRXBGLFNBQVMsQ0FBQ21GLG1CQUFWLENBQThCLENBQTlCLENBakI1QjtBQW1CRTtBQUNBaEIsUUFBQUEsY0FBYyxFQUFkQSxjQXBCRjtBQXNCRTtBQUNBa0IsUUFBQUEsZ0JBQWdCLEVBQUVyQixjQUFjLENBQUNzQjtBQXZCbkM7QUF5QkQ7OztFQWpSMkNDLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLm1lbW9pemUnO1xuaW1wb3J0IExheWVyIGZyb20gJy4vYmFzZS1sYXllcic7XG5pbXBvcnQge2hleFRvUmdifSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XG5pbXBvcnQge2FnZ3JlZ2F0ZX0gZnJvbSAndXRpbHMvYWdncmVnYXRlLXV0aWxzJztcbmltcG9ydCB7SElHSExJR0hfQ09MT1JfM0R9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuaW1wb3J0IHtDSEFOTkVMX1NDQUxFUywgRklFTERfT1BUUywgREVGQVVMVF9BR0dSRUdBVElPTn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5leHBvcnQgY29uc3QgcG9pbnRQb3NBY2Nlc3NvciA9ICh7bGF0LCBsbmd9KSA9PiBkID0+IFtkLmRhdGFbbG5nLmZpZWxkSWR4XSwgZC5kYXRhW2xhdC5maWVsZElkeF1dO1xuXG5leHBvcnQgY29uc3QgcG9pbnRQb3NSZXNvbHZlciA9ICh7bGF0LCBsbmd9KSA9PiBgJHtsYXQuZmllbGRJZHh9LSR7bG5nLmZpZWxkSWR4fWA7XG5cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUFnZ3JGdW5jID0gKGZpZWxkLCBhZ2dyZWdhdGlvbikgPT4ge1xuICByZXR1cm4gcG9pbnRzID0+IHtcbiAgICByZXR1cm4gZmllbGRcbiAgICAgID8gYWdncmVnYXRlKFxuICAgICAgICAgIHBvaW50cy5tYXAocCA9PiBmaWVsZC52YWx1ZUFjY2Vzc29yKHAuZGF0YSkpLFxuICAgICAgICAgIGFnZ3JlZ2F0aW9uXG4gICAgICAgIClcbiAgICAgIDogcG9pbnRzLmxlbmd0aDtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJEYXRhRnVuYyA9IChmaWx0ZXJSYW5nZSwgZ2V0RmlsdGVyVmFsdWUpID0+IHB0ID0+XG4gIGdldEZpbHRlclZhbHVlKHB0KS5ldmVyeSgodmFsLCBpKSA9PiB2YWwgPj0gZmlsdGVyUmFuZ2VbaV1bMF0gJiYgdmFsIDw9IGZpbHRlclJhbmdlW2ldWzFdKTtcblxuY29uc3QgZ2V0TGF5ZXJDb2xvclJhbmdlID0gY29sb3JSYW5nZSA9PiBjb2xvclJhbmdlLmNvbG9ycy5tYXAoaGV4VG9SZ2IpO1xuXG5leHBvcnQgY29uc3QgYWdncmVnYXRlUmVxdWlyZWRDb2x1bW5zID0gWydsYXQnLCAnbG5nJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFnZ3JlZ2F0aW9uTGF5ZXIgZXh0ZW5kcyBMYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yID0gKCkgPT4gcG9pbnRQb3NBY2Nlc3Nvcih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcbiAgICB0aGlzLmdldENvbG9yUmFuZ2UgPSBtZW1vaXplKGdldExheWVyQ29sb3JSYW5nZSk7XG4gIH1cblxuICBnZXQgaXNBZ2dyZWdhdGVkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVkTGF5ZXJDb2x1bW5zKCkge1xuICAgIHJldHVybiBhZ2dyZWdhdGVSZXF1aXJlZENvbHVtbnM7XG4gIH1cblxuICBnZXQgY29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFBvaW50Q29sdW1uUGFpcnM7XG4gIH1cblxuICBnZXQgbm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi5zdXBlci5ub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMsXG4gICAgICAnZW5hYmxlM2QnLFxuICAgICAgJ2NvbG9yUmFuZ2UnLFxuICAgICAgJ2NvbG9yRG9tYWluJyxcbiAgICAgICdzaXplUmFuZ2UnLFxuICAgICAgJ3NpemVTY2FsZScsXG4gICAgICAnc2l6ZURvbWFpbicsXG4gICAgICAncGVyY2VudGlsZScsXG4gICAgICAnY292ZXJhZ2UnLFxuICAgICAgJ2VsZXZhdGlvblBlcmNlbnRpbGUnLFxuICAgICAgJ2VsZXZhdGlvblNjYWxlJyxcbiAgICAgICdlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yJ1xuICAgIF07XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIGFnZ3JlZ2F0aW9uOiAnY29sb3JBZ2dyZWdhdGlvbicsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLmNvbG9yQWdncixcbiAgICAgICAgZGVmYXVsdE1lYXN1cmU6ICdwcm9wZXJ0eS5wb2ludENvdW50JyxcbiAgICAgICAgZG9tYWluOiAnY29sb3JEb21haW4nLFxuICAgICAgICBmaWVsZDogJ2NvbG9yRmllbGQnLFxuICAgICAgICBrZXk6ICdjb2xvcicsXG4gICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxuICAgICAgICByYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICAgICAgICBzY2FsZTogJ2NvbG9yU2NhbGUnXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBhZ2dyZWdhdGlvbjogJ3NpemVBZ2dyZWdhdGlvbicsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnNpemVBZ2dyLFxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICBkZWZhdWx0TWVhc3VyZTogJ3Byb3BlcnR5LnBvaW50Q291bnQnLFxuICAgICAgICBkb21haW46ICdzaXplRG9tYWluJyxcbiAgICAgICAgZmllbGQ6ICdzaXplRmllbGQnLFxuICAgICAgICBrZXk6ICdzaXplJyxcbiAgICAgICAgcHJvcGVydHk6ICdoZWlnaHQnLFxuICAgICAgICByYW5nZTogJ3NpemVSYW5nZScsXG4gICAgICAgIHNjYWxlOiAnc2l6ZVNjYWxlJ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZXNjcmlwdGlvbiBvZiBhIHZpc3VhbENoYW5uZWwgY29uZmlnXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHJldHVybnMge3tsYWJlbDogc3RyaW5nLCBtZWFzdXJlOiAoc3RyaW5nfHN0cmluZyl9fVxuICAgKi9cbiAgZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKGtleSkge1xuICAgIC8vIGUuZy4gbGFiZWw6IENvbG9yLCBtZWFzdXJlOiBBdmVyYWdlIG9mIEVUQVxuICAgIGNvbnN0IHtyYW5nZSwgZmllbGQsIGRlZmF1bHRNZWFzdXJlLCBhZ2dyZWdhdGlvbn0gPSB0aGlzLnZpc3VhbENoYW5uZWxzW2tleV07XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzW3JhbmdlXS5sYWJlbCxcbiAgICAgIG1lYXN1cmU6IHRoaXMuY29uZmlnW2ZpZWxkXVxuICAgICAgICA/IGAke3RoaXMuY29uZmlnLnZpc0NvbmZpZ1thZ2dyZWdhdGlvbl19IG9mICR7dGhpcy5jb25maWdbZmllbGRdLmRpc3BsYXlOYW1lfWBcbiAgICAgICAgOiBkZWZhdWx0TWVhc3VyZVxuICAgIH07XG4gIH1cblxuICBnZXRIb3ZlckRhdGEob2JqZWN0KSB7XG4gICAgLy8gcmV0dXJuIGFnZ3JlZ2F0ZWQgb2JqZWN0XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGlvbiBsYXllciBoYW5kbGVzIHZpc3VhbCBjaGFubmVsIGFnZ3JlZ2F0aW9uIGluc2lkZSBkZWNrLmdsIGxheWVyXG4gICAqL1xuICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWwoe2RhdGEsIGFsbERhdGF9LCBjaGFubmVsKSB7XG4gICAgdGhpcy52YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgYWdncmVnYXRpb24gdHlwZSBvbiB0b3Agb2YgYmFzaWMgbGF5ZXIgdmlzdWFsIGNoYW5uZWwgdmFsaWRhdGlvblxuICAgKiBAcGFyYW0gY2hhbm5lbFxuICAgKi9cbiAgdmFsaWRhdGVWaXN1YWxDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAvLyBmaWVsZCB0eXBlIGRlY2lkZXMgYWdncmVnYXRpb24gdHlwZSBkZWNpZGVzIHNjYWxlIHR5cGVcbiAgICB0aGlzLnZhbGlkYXRlRmllbGRUeXBlKGNoYW5uZWwpO1xuICAgIHRoaXMudmFsaWRhdGVBZ2dyZWdhdGlvblR5cGUoY2hhbm5lbCk7XG4gICAgdGhpcy52YWxpZGF0ZVNjYWxlKGNoYW5uZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIGFnZ3JlZ2F0aW9uIHR5cGUgYmFzZWQgb24gc2VsZWN0ZWQgZmllbGRcbiAgICovXG4gIHZhbGlkYXRlQWdncmVnYXRpb25UeXBlKGNoYW5uZWwpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcbiAgICBjb25zdCB7ZmllbGQsIGFnZ3JlZ2F0aW9ufSA9IHZpc3VhbENoYW5uZWw7XG4gICAgY29uc3QgYWdncmVnYXRpb25PcHRpb25zID0gdGhpcy5nZXRBZ2dyZWdhdGlvbk9wdGlvbnMoY2hhbm5lbCk7XG5cbiAgICBpZiAoIWFnZ3JlZ2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFhZ2dyZWdhdGlvbk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAvLyBpZiBmaWVsZCBjYW5ub3QgYmUgYWdncmVnYXRlZCwgc2V0IGZpZWxkIHRvIG51bGxcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tmaWVsZF06IG51bGx9KTtcbiAgICB9IGVsc2UgaWYgKCFhZ2dyZWdhdGlvbk9wdGlvbnMuaW5jbHVkZXModGhpcy5jb25maWcudmlzQ29uZmlnW2FnZ3JlZ2F0aW9uXSkpIHtcbiAgICAgIC8vIGN1cnJlbnQgYWdncmVnYXRpb24gdHlwZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgZmllbGRcbiAgICAgIC8vIHNldCBhZ2dyZWdhdGlvbiB0byB0aGUgZmlyc3Qgc3VwcG9ydGVkIG9wdGlvblxuICAgICAgdGhpcy51cGRhdGVMYXllclZpc0NvbmZpZyh7W2FnZ3JlZ2F0aW9uXTogYWdncmVnYXRpb25PcHRpb25zWzBdfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWdncmVnYXRpb25PcHRpb25zKGNoYW5uZWwpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcbiAgICBjb25zdCB7ZmllbGQsIGNoYW5uZWxTY2FsZVR5cGV9ID0gdmlzdWFsQ2hhbm5lbDtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhcbiAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXVxuICAgICAgICA/IEZJRUxEX09QVFNbdGhpcy5jb25maWdbZmllbGRdLnR5cGVdLnNjYWxlW2NoYW5uZWxTY2FsZVR5cGVdXG4gICAgICAgIDogREVGQVVMVF9BR0dSRUdBVElPTltjaGFubmVsU2NhbGVUeXBlXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjYWxlIG9wdGlvbnMgYmFzZWQgb24gY3VycmVudCBmaWVsZCBhbmQgYWdncmVnYXRpb24gdHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhbm5lbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBnZXRTY2FsZU9wdGlvbnMoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtmaWVsZCwgYWdncmVnYXRpb24sIGNoYW5uZWxTY2FsZVR5cGV9ID0gdmlzdWFsQ2hhbm5lbDtcbiAgICBjb25zdCBhZ2dyZWdhdGlvblR5cGUgPSB0aGlzLmNvbmZpZy52aXNDb25maWdbYWdncmVnYXRpb25dO1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ1tmaWVsZF1cbiAgICAgID8gLy8gc2NhbGUgb3B0aW9ucyBiYXNlZCBvbiBhZ2dyZWdhdGlvblxuICAgICAgICBGSUVMRF9PUFRTW3RoaXMuY29uZmlnW2ZpZWxkXS50eXBlXS5zY2FsZVtjaGFubmVsU2NhbGVUeXBlXVthZ2dyZWdhdGlvblR5cGVdXG4gICAgICA6IC8vIGRlZmF1bHQgc2NhbGUgb3B0aW9ucyBmb3IgcG9pbnQgY291bnRcbiAgICAgICAgREVGQVVMVF9BR0dSRUdBVElPTltjaGFubmVsU2NhbGVUeXBlXVthZ2dyZWdhdGlvblR5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFnZ3JlZ2F0aW9uIGxheWVyIGhhbmRsZXMgdmlzdWFsIGNoYW5uZWwgYWdncmVnYXRpb24gaW5zaWRlIGRlY2suZ2wgbGF5ZXJcbiAgICovXG4gIHVwZGF0ZUxheWVyRG9tYWluKGRhdGFzZXRzLCBuZXdGaWx0ZXIpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRQb3NpdGlvbikge1xuICAgIC8vIGdldCBib3VuZHMgZnJvbSBwb2ludHNcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldFBvaW50c0JvdW5kcyhhbGxEYXRhLCBkID0+IGdldFBvc2l0aW9uKHtkYXRhOiBkfSkpO1xuXG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHN9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRQb3NpdGlvbikge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xuICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XG5cbiAgICAgIC8vIGlmIGRvZXNuJ3QgaGF2ZSBwb2ludCBsYXQgb3IgbG5nLCBkbyBub3QgYWRkIHRoZSBwb2ludFxuICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXG4gICAgICBpZiAocG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkpIHtcbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhKSB7XG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTsgLy8gaWYgKFxuICAgIGNvbnN0IHtncHVGaWx0ZXJ9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcblxuICAgIGNvbnN0IGdldENvbG9yVmFsdWUgPSBnZXRWYWx1ZUFnZ3JGdW5jKFxuICAgICAgdGhpcy5jb25maWcuY29sb3JGaWVsZCxcbiAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZy5jb2xvckFnZ3JlZ2F0aW9uXG4gICAgKTtcblxuICAgIGNvbnN0IGdldEVsZXZhdGlvblZhbHVlID0gZ2V0VmFsdWVBZ2dyRnVuYyhcbiAgICAgIHRoaXMuY29uZmlnLnNpemVGaWVsZCxcbiAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZy5zaXplQWdncmVnYXRpb25cbiAgICApO1xuICAgIGNvbnN0IGhhc0ZpbHRlciA9IE9iamVjdC52YWx1ZXMoZ3B1RmlsdGVyLmZpbHRlclJhbmdlKS5zb21lKGFyciA9PiBhcnIuc29tZSh2ID0+IHYgIT09IDApKTtcbiAgICBjb25zdCBnZXRGaWx0ZXJWYWx1ZSA9IGdwdUZpbHRlci5maWx0ZXJWYWx1ZUFjY2Vzc29yKCk7XG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGhhc0ZpbHRlclxuICAgICAgPyBnZXRGaWx0ZXJEYXRhRnVuYyhncHVGaWx0ZXIuZmlsdGVyUmFuZ2UsIGdldEZpbHRlclZhbHVlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIGdldFBvc2l0aW9uLFxuICAgICAgX2ZpbHRlckRhdGE6IGZpbHRlckRhdGEsXG4gICAgICAuLi4oZ2V0Q29sb3JWYWx1ZSA/IHtnZXRDb2xvclZhbHVlfSA6IHt9KSxcbiAgICAgIC4uLihnZXRFbGV2YXRpb25WYWx1ZSA/IHtnZXRFbGV2YXRpb25WYWx1ZX0gOiB7fSlcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpIHtcbiAgICBjb25zdCBiYXNlUHJvcCA9IHN1cGVyLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uYmFzZVByb3AsXG4gICAgICBoaWdobGlnaHRDb2xvcjogSElHSExJR0hfQ09MT1JfM0QsXG4gICAgICAvLyBncHUgZGF0YSBmaWx0ZXJpbmcgaXMgbm90IHN1cHBvcnRlZCBpbiBhZ2dyZWdhdGlvbiBsYXllclxuICAgICAgZXh0ZW5zaW9uczogW10sXG4gICAgICBhdXRvSGlnaGxpZ2h0OiB0aGlzLmNvbmZpZy52aXNDb25maWcuZW5hYmxlM2RcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdEFnZ3JlZ2F0aW9uTGF5ZXJQcm9wKG9wdHMpIHtcbiAgICBjb25zdCB7Z3B1RmlsdGVyLCBtYXBTdGF0ZSwgbGF5ZXJDYWxsYmFja3MgPSB7fX0gPSBvcHRzO1xuICAgIGNvbnN0IHt2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgZWxlWm9vbUZhY3RvciA9IHRoaXMuZ2V0RWxldmF0aW9uWm9vbUZhY3RvcihtYXBTdGF0ZSk7XG5cbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHtcbiAgICAgIGdldENvbG9yVmFsdWU6IHtcbiAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcbiAgICAgICAgY29sb3JBZ2dyZWdhdGlvbjogdGhpcy5jb25maWcudmlzQ29uZmlnLmNvbG9yQWdncmVnYXRpb25cbiAgICAgIH0sXG4gICAgICBnZXRFbGV2YXRpb25WYWx1ZToge1xuICAgICAgICBzaXplRmllbGQ6IHRoaXMuY29uZmlnLnNpemVGaWVsZCxcbiAgICAgICAgc2l6ZUFnZ3JlZ2F0aW9uOiB0aGlzLmNvbmZpZy52aXNDb25maWcuc2l6ZUFnZ3JlZ2F0aW9uXG4gICAgICB9LFxuICAgICAgX2ZpbHRlckRhdGE6IHtcbiAgICAgICAgZmlsdGVyUmFuZ2U6IGdwdUZpbHRlci5maWx0ZXJSYW5nZSxcbiAgICAgICAgLi4uZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnNcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpLFxuICAgICAgY292ZXJhZ2U6IHZpc0NvbmZpZy5jb3ZlcmFnZSxcblxuICAgICAgLy8gY29sb3JcbiAgICAgIGNvbG9yUmFuZ2U6IHRoaXMuZ2V0Q29sb3JSYW5nZSh2aXNDb25maWcuY29sb3JSYW5nZSksXG4gICAgICBjb2xvclNjYWxlVHlwZTogdGhpcy5jb25maWcuY29sb3JTY2FsZSxcbiAgICAgIHVwcGVyUGVyY2VudGlsZTogdmlzQ29uZmlnLnBlcmNlbnRpbGVbMV0sXG4gICAgICBsb3dlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5wZXJjZW50aWxlWzBdLFxuICAgICAgY29sb3JBZ2dyZWdhdGlvbjogdmlzQ29uZmlnLmNvbG9yQWdncmVnYXRpb24sXG5cbiAgICAgIC8vIGVsZXZhdGlvblxuICAgICAgZXh0cnVkZWQ6IHZpc0NvbmZpZy5lbmFibGUzZCxcbiAgICAgIGVsZXZhdGlvblNjYWxlOiB2aXNDb25maWcuZWxldmF0aW9uU2NhbGUgKiBlbGVab29tRmFjdG9yLFxuICAgICAgZWxldmF0aW9uU2NhbGVUeXBlOiB0aGlzLmNvbmZpZy5zaXplU2NhbGUsXG4gICAgICBlbGV2YXRpb25SYW5nZTogdmlzQ29uZmlnLnNpemVSYW5nZSxcbiAgICAgIGVsZXZhdGlvbkxvd2VyUGVyY2VudGlsZTogdmlzQ29uZmlnLmVsZXZhdGlvblBlcmNlbnRpbGVbMF0sXG4gICAgICBlbGV2YXRpb25VcHBlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5lbGV2YXRpb25QZXJjZW50aWxlWzFdLFxuXG4gICAgICAvLyB1cGRhdGVUcmlnZ2Vyc1xuICAgICAgdXBkYXRlVHJpZ2dlcnMsXG5cbiAgICAgIC8vIGNhbGxiYWNrc1xuICAgICAgb25TZXRDb2xvckRvbWFpbjogbGF5ZXJDYWxsYmFja3Mub25TZXRMYXllckRvbWFpblxuICAgIH07XG4gIH1cbn1cbiJdfQ==