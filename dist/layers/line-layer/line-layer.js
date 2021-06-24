"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.lineVisConfigs = exports.lineColumnLabels = exports.lineOptionalColumns = exports.lineRequiredColumns = exports.linePosAccessor = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extensions = require("@deck.gl/extensions");

var _layerFactory = require("../layer-factory");

var _lineLayerIcon = _interopRequireDefault(require("./line-layer-icon"));

var _arcLayer = _interopRequireDefault(require("../arc-layer/arc-layer"));

var _lineLayer = _interopRequireDefault(require("../../deckgl-layers/line-layer/line-layer"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var linePosAccessor = function linePosAccessor(_ref) {
  var lat0 = _ref.lat0,
      lng0 = _ref.lng0,
      lat1 = _ref.lat1,
      lng1 = _ref.lng1,
      alt0 = _ref.alt0,
      alt1 = _ref.alt1;
  return function (d) {
    return [d.data[lng0.fieldIdx], d.data[lat0.fieldIdx], (alt0 === null || alt0 === void 0 ? void 0 : alt0.fieldIdx) > -1 ? d.data[alt0.fieldIdx] : 0, d.data[lng1.fieldIdx], d.data[lat1.fieldIdx], (alt1 === null || alt1 === void 0 ? void 0 : alt1.fieldIdx) > -1 ? d.data[alt1.fieldIdx] : 0];
  };
};

exports.linePosAccessor = linePosAccessor;
var lineRequiredColumns = ['lat0', 'lng0', 'lat1', 'lng1'];
exports.lineRequiredColumns = lineRequiredColumns;
var lineOptionalColumns = ['alt0', 'alt1'];
exports.lineOptionalColumns = lineOptionalColumns;
var lineColumnLabels = {
  lat0: 'arc.lat0',
  lng0: 'arc.lng0',
  lat1: 'arc.lat1',
  lng1: 'arc.lng1',
  alt0: 'line.alt0',
  alt1: 'line.alt1'
};
exports.lineColumnLabels = lineColumnLabels;
var lineVisConfigs = {
  opacity: 'opacity',
  thickness: 'thickness',
  colorRange: 'colorRange',
  sizeRange: 'strokeWidthRange',
  targetColor: 'targetColor',
  elevationScale: _objectSpread(_objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.elevationScale), {}, {
    defaultValue: 1
  })
};
exports.lineVisConfigs = lineVisConfigs;

var LineLayer = /*#__PURE__*/function (_ArcLayer) {
  (0, _inherits2["default"])(LineLayer, _ArcLayer);

  var _super = _createSuper(LineLayer);

  function LineLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, LineLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(lineVisConfigs);

    _this.getPositionAccessor = function () {
      return linePosAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(LineLayer, [{
    key: "type",
    get: function get() {
      return 'line';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _lineLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return lineRequiredColumns;
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return lineOptionalColumns;
    }
  }, {
    key: "columnLabels",
    get: function get() {
      return lineColumnLabels;
    }
  }, {
    key: "visualChannels",
    get: function get() {
      var visualChannels = (0, _get2["default"])((0, _getPrototypeOf2["default"])(LineLayer.prototype), "visualChannels", this);
      return _objectSpread(_objectSpread({}, visualChannels), {}, {
        sourceColor: _objectSpread(_objectSpread({}, visualChannels.sourceColor), {}, {
          accessor: 'getColor'
        })
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          interactionConfig = opts.interactionConfig;
      var layerProps = {
        widthScale: this.config.visConfig.thickness,
        elevationScale: this.config.visConfig.elevationScale
      };

      var updateTriggers = _objectSpread({
        getPosition: this.config.columns,
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      }, this.getVisualChannelUpdateTriggers());

      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return [// base layer
      new _lineLayer["default"](_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), this.getBrushingExtensionProps(interactionConfig, 'source_target')), data), layerProps), {}, {
        updateTriggers: updateTriggers,
        extensions: [].concat((0, _toConsumableArray2["default"])(defaultLayerProps.extensions), [new _extensions.BrushingExtension()])
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject ? [new _lineLayer["default"](_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), layerProps), {}, {
        data: [hoveredObject],
        getColor: this.config.highlightColor,
        getTargetColor: this.config.highlightColor,
        getWidth: data.getWidth
      }))] : []));
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref2) {
      var _ref2$fieldPairs = _ref2.fieldPairs,
          fieldPairs = _ref2$fieldPairs === void 0 ? [] : _ref2$fieldPairs;

      if (fieldPairs.length < 2) {
        return {
          props: []
        };
      }

      var props = {}; // connect the first two point layer with line

      props.columns = {
        lat0: fieldPairs[0].pair.lat,
        lng0: fieldPairs[0].pair.lng,
        alt0: {
          value: null,
          fieldIdx: -1,
          optional: true
        },
        lat1: fieldPairs[1].pair.lat,
        lng1: fieldPairs[1].pair.lng,
        alt1: {
          value: null,
          fieldIdx: -1,
          optional: true
        }
      };
      props.label = "".concat(fieldPairs[0].defaultName, " -> ").concat(fieldPairs[1].defaultName, " line");
      return {
        props: [props]
      };
    }
  }]);
  return LineLayer;
}(_arcLayer["default"]);

exports["default"] = LineLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvbGluZS1sYXllci9saW5lLWxheWVyLmpzIl0sIm5hbWVzIjpbImxpbmVQb3NBY2Nlc3NvciIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJhbHQwIiwiYWx0MSIsImQiLCJkYXRhIiwiZmllbGRJZHgiLCJsaW5lUmVxdWlyZWRDb2x1bW5zIiwibGluZU9wdGlvbmFsQ29sdW1ucyIsImxpbmVDb2x1bW5MYWJlbHMiLCJsaW5lVmlzQ29uZmlncyIsIm9wYWNpdHkiLCJ0aGlja25lc3MiLCJjb2xvclJhbmdlIiwic2l6ZVJhbmdlIiwidGFyZ2V0Q29sb3IiLCJlbGV2YXRpb25TY2FsZSIsIkxBWUVSX1ZJU19DT05GSUdTIiwiZGVmYXVsdFZhbHVlIiwiTGluZUxheWVyIiwicHJvcHMiLCJyZWdpc3RlclZpc0NvbmZpZyIsImdldFBvc2l0aW9uQWNjZXNzb3IiLCJjb25maWciLCJjb2x1bW5zIiwiTGluZUxheWVySWNvbiIsInZpc3VhbENoYW5uZWxzIiwic291cmNlQ29sb3IiLCJhY2Nlc3NvciIsIm9wdHMiLCJncHVGaWx0ZXIiLCJvYmplY3RIb3ZlcmVkIiwiaW50ZXJhY3Rpb25Db25maWciLCJsYXllclByb3BzIiwid2lkdGhTY2FsZSIsInZpc0NvbmZpZyIsInVwZGF0ZVRyaWdnZXJzIiwiZ2V0UG9zaXRpb24iLCJnZXRGaWx0ZXJWYWx1ZSIsImZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMiLCJnZXRWaXN1YWxDaGFubmVsVXBkYXRlVHJpZ2dlcnMiLCJkZWZhdWx0TGF5ZXJQcm9wcyIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsImhvdmVyZWRPYmplY3QiLCJoYXNIb3ZlcmVkT2JqZWN0IiwiRW5oYW5jZWRMaW5lTGF5ZXIiLCJnZXRCcnVzaGluZ0V4dGVuc2lvblByb3BzIiwiZXh0ZW5zaW9ucyIsIkJydXNoaW5nRXh0ZW5zaW9uIiwiZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcyIsImdldENvbG9yIiwiaGlnaGxpZ2h0Q29sb3IiLCJnZXRUYXJnZXRDb2xvciIsImdldFdpZHRoIiwiZmllbGRQYWlycyIsImxlbmd0aCIsInBhaXIiLCJsYXQiLCJsbmciLCJ2YWx1ZSIsIm9wdGlvbmFsIiwibGFiZWwiLCJkZWZhdWx0TmFtZSIsIkFyY0xheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLE1BQVFDLElBQVIsUUFBUUEsSUFBUjtBQUFBLE1BQWNDLElBQWQsUUFBY0EsSUFBZDtBQUFBLE1BQW9CQyxJQUFwQixRQUFvQkEsSUFBcEI7QUFBQSxNQUEwQkMsSUFBMUIsUUFBMEJBLElBQTFCO0FBQUEsTUFBZ0NDLElBQWhDLFFBQWdDQSxJQUFoQztBQUFBLFNBQTBDLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQzVFQSxDQUFDLENBQUNDLElBQUYsQ0FBT04sSUFBSSxDQUFDTyxRQUFaLENBRDRFLEVBRTVFRixDQUFDLENBQUNDLElBQUYsQ0FBT1AsSUFBSSxDQUFDUSxRQUFaLENBRjRFLEVBRzVFLENBQUFKLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFSSxRQUFOLElBQWlCLENBQUMsQ0FBbEIsR0FBc0JGLENBQUMsQ0FBQ0MsSUFBRixDQUFPSCxJQUFJLENBQUNJLFFBQVosQ0FBdEIsR0FBOEMsQ0FIOEIsRUFJNUVGLENBQUMsQ0FBQ0MsSUFBRixDQUFPSixJQUFJLENBQUNLLFFBQVosQ0FKNEUsRUFLNUVGLENBQUMsQ0FBQ0MsSUFBRixDQUFPTCxJQUFJLENBQUNNLFFBQVosQ0FMNEUsRUFNNUUsQ0FBQUgsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVHLFFBQU4sSUFBaUIsQ0FBQyxDQUFsQixHQUFzQkYsQ0FBQyxDQUFDQyxJQUFGLENB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U0FIUTtBQUlkNUQsUUFBQUEsSUFBSSxFQUFFc0QsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjRSxJQUFkLENBQW1CQyxHQUpYO0FBS2R4RCxRQUFBQSxJQUFJLEVBQUVxRCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNFLElBQWQsQ0FBbUJFLEdBTFg7QUFNZHZELFFBQUFBLElBQUksRUFBRTtBQUFDd0QsVUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY3JELFVBQUFBLFFBQVEsRUFBRSxDQUFDLENBQXpCO0FBQTRCc0QsVUFBQUEsUUFBUSxFQUFFO0FBQXRDO0FBTlEsT0FBaEI7QUFRQXhDLE1BQUFBLEtBQUssQ0FBQ3lDLEtBQU4sYUFBaUJQLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1EsV0FBL0IsaUJBQWlEUixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNRLFdBQS9EO0FBRUEsYUFBTztBQUFDMUMsUUFBQUEsS0FBSyxFQUFFLENBQUNBLEtBQUQ7QUFBUixPQUFQO0FBQ0Q7OztFQXpEb0MyQyxvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7QnJ1c2hpbmdFeHRlbnNpb259IGZyb20gJ0BkZWNrLmdsL2V4dGVuc2lvbnMnO1xuXG5pbXBvcnQge0xBWUVSX1ZJU19DT05GSUdTfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XG5pbXBvcnQgTGluZUxheWVySWNvbiBmcm9tICcuL2xpbmUtbGF5ZXItaWNvbic7XG5pbXBvcnQgQXJjTGF5ZXIgZnJvbSAnLi4vYXJjLWxheWVyL2FyYy1sYXllcic7XG5pbXBvcnQgRW5oYW5jZWRMaW5lTGF5ZXIgZnJvbSAnZGVja2dsLWxheWVycy9saW5lLWxheWVyL2xpbmUtbGF5ZXInO1xuXG5leHBvcnQgY29uc3QgbGluZVBvc0FjY2Vzc29yID0gKHtsYXQwLCBsbmcwLCBsYXQxLCBsbmcxLCBhbHQwLCBhbHQxfSkgPT4gZCA9PiBbXG4gIGQuZGF0YVtsbmcwLmZpZWxkSWR4XSxcbiAgZC5kYXRhW2xhdDAuZmllbGRJZHhdLFxuICBhbHQwPy5maWVsZElkeCA+IC0xID8gZC5kYXRhW2FsdDAuZmllbGRJZHhdIDogMCxcbiAgZC5kYXRhW2xuZzEuZmllbGRJZHhdLFxuICBkLmRhdGFbbGF0MS5maWVsZElkeF0sXG4gIGFsdDE/LmZpZWxkSWR4ID4gLTEgPyBkLmRhdGFbYWx0MS5maWVsZElkeF0gOiAwXG5dO1xuXG5leHBvcnQgY29uc3QgbGluZVJlcXVpcmVkQ29sdW1ucyA9IFsnbGF0MCcsICdsbmcwJywgJ2xhdDEnLCAnbG5nMSddO1xuZXhwb3J0IGNvbnN0IGxpbmVPcHRpb25hbENvbHVtbnMgPSBbJ2FsdDAnLCAnYWx0MSddO1xuXG5leHBvcnQgY29uc3QgbGluZUNvbHVtbkxhYmVscyA9IHtcbiAgbGF0MDogJ2FyYy5sYXQwJyxcbiAgbG5nMDogJ2FyYy5sbmcwJyxcbiAgbGF0MTogJ2FyYy5sYXQxJyxcbiAgbG5nMTogJ2FyYy5sbmcxJyxcbiAgYWx0MDogJ2xpbmUuYWx0MCcsXG4gIGFsdDE6ICdsaW5lLmFsdDEnXG59O1xuXG5leHBvcnQgY29uc3QgbGluZVZpc0NvbmZpZ3MgPSB7XG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcbiAgdGhpY2tuZXNzOiAndGhpY2tuZXNzJyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICBzaXplUmFuZ2U6ICdzdHJva2VXaWR0aFJhbmdlJyxcbiAgdGFyZ2V0Q29sb3I6ICd0YXJnZXRDb2xvcicsXG4gIGVsZXZhdGlvblNjYWxlOiB7XG4gICAgLi4uTEFZRVJfVklTX0NPTkZJR1MuZWxldmF0aW9uU2NhbGUsXG4gICAgZGVmYXVsdFZhbHVlOiAxXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVMYXllciBleHRlbmRzIEFyY0xheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKGxpbmVWaXNDb25maWdzKTtcbiAgICB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IgPSAoKSA9PiBsaW5lUG9zQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2xpbmUnO1xuICB9XG5cbiAgZ2V0IGxheWVySWNvbigpIHtcbiAgICByZXR1cm4gTGluZUxheWVySWNvbjtcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gbGluZVJlcXVpcmVkQ29sdW1ucztcbiAgfVxuXG4gIGdldCBvcHRpb25hbENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIGxpbmVPcHRpb25hbENvbHVtbnM7XG4gIH1cblxuICBnZXQgY29sdW1uTGFiZWxzKCkge1xuICAgIHJldHVybiBsaW5lQ29sdW1uTGFiZWxzO1xuICB9XG5cbiAgZ2V0IHZpc3VhbENoYW5uZWxzKCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWxzID0gc3VwZXIudmlzdWFsQ2hhbm5lbHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnZpc3VhbENoYW5uZWxzLFxuICAgICAgc291cmNlQ29sb3I6IHtcbiAgICAgICAgLi4udmlzdWFsQ2hhbm5lbHMuc291cmNlQ29sb3IsXG4gICAgICAgIGFjY2Vzc29yOiAnZ2V0Q29sb3InXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoe2ZpZWxkUGFpcnMgPSBbXX0pIHtcbiAgICBpZiAoZmllbGRQYWlycy5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4ge3Byb3BzOiBbXX07XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0ge307XG5cbiAgICAvLyBjb25uZWN0IHRoZSBmaXJzdCB0d28gcG9pbnQgbGF5ZXIgd2l0aCBsaW5lXG4gICAgcHJvcHMuY29sdW1ucyA9IHtcbiAgICAgIGxhdDA6IGZpZWxkUGFpcnNbMF0ucGFpci5sYXQsXG4gICAgICBsbmcwOiBmaWVsZFBhaXJzWzBdLnBhaXIubG5nLFxuICAgICAgYWx0MDoge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTEsIG9wdGlvbmFsOiB0cnVlfSxcbiAgICAgIGxhdDE6IGZpZWxkUGFpcnNbMV0ucGFpci5sYXQsXG4gICAgICBsbmcxOiBmaWVsZFBhaXJzWzFdLnBhaXIubG5nLFxuICAgICAgYWx0MToge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTEsIG9wdGlvbmFsOiB0cnVlfVxuICAgIH07XG4gICAgcHJvcHMubGFiZWwgPSBgJHtmaWVsZFBhaXJzWzBdLmRlZmF1bHROYW1lfSAtPiAke2ZpZWxkUGFpcnNbMV0uZGVmYXVsdE5hbWV9IGxpbmVgO1xuXG4gICAgcmV0dXJuIHtwcm9wczogW3Byb3BzXX07XG4gIH1cblxuICByZW5kZXJMYXllcihvcHRzKSB7XG4gICAgY29uc3Qge2RhdGEsIGdwdUZpbHRlciwgb2JqZWN0SG92ZXJlZCwgaW50ZXJhY3Rpb25Db25maWd9ID0gb3B0cztcblxuICAgIGNvbnN0IGxheWVyUHJvcHMgPSB7XG4gICAgICB3aWR0aFNjYWxlOiB0aGlzLmNvbmZpZy52aXNDb25maWcudGhpY2tuZXNzLFxuICAgICAgZWxldmF0aW9uU2NhbGU6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5lbGV2YXRpb25TY2FsZVxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHtcbiAgICAgIGdldFBvc2l0aW9uOiB0aGlzLmNvbmZpZy5jb2x1bW5zLFxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzLFxuICAgICAgLi4udGhpcy5nZXRWaXN1YWxDaGFubmVsVXBkYXRlVHJpZ2dlcnMoKVxuICAgIH07XG4gICAgY29uc3QgZGVmYXVsdExheWVyUHJvcHMgPSB0aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcbiAgICBjb25zdCBob3ZlcmVkT2JqZWN0ID0gdGhpcy5oYXNIb3ZlcmVkT2JqZWN0KG9iamVjdEhvdmVyZWQpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGJhc2UgbGF5ZXJcbiAgICAgIG5ldyBFbmhhbmNlZExpbmVMYXllcih7XG4gICAgICAgIC4uLmRlZmF1bHRMYXllclByb3BzLFxuICAgICAgICAuLi50aGlzLmdldEJydXNoaW5nRXh0ZW5zaW9uUHJvcHMoaW50ZXJhY3Rpb25Db25maWcsICdzb3VyY2VfdGFyZ2V0JyksXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIC4uLmxheWVyUHJvcHMsXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzLFxuICAgICAgICBleHRlbnNpb25zOiBbLi4uZGVmYXVsdExheWVyUHJvcHMuZXh0ZW5zaW9ucywgbmV3IEJydXNoaW5nRXh0ZW5zaW9uKCldXG4gICAgICB9KSxcbiAgICAgIC8vIGhvdmVyIGxheWVyXG4gICAgICAuLi4oaG92ZXJlZE9iamVjdFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIG5ldyBFbmhhbmNlZExpbmVMYXllcih7XG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpLFxuICAgICAgICAgICAgICAuLi5sYXllclByb3BzLFxuICAgICAgICAgICAgICBkYXRhOiBbaG92ZXJlZE9iamVjdF0sXG4gICAgICAgICAgICAgIGdldENvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcbiAgICAgICAgICAgICAgZ2V0VGFyZ2V0Q29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRXaWR0aDogZGF0YS5nZXRXaWR0aFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW10pXG4gICAgXTtcbiAgfVxufVxuIl19