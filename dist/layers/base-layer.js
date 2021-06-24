"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.colorMaker = exports.layerColors = exports.OVERLAY_TYPE = exports.LAYER_ID_LENGTH = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _window = require("global/window");

var _keymirror = _interopRequireDefault(require("keymirror"));

var _extensions = require("@deck.gl/extensions");

var _core = require("@deck.gl/core");

var _layers = require("@deck.gl/layers");

var _defaultLayerIcon = _interopRequireDefault(require("./default-layer-icon"));

var _layerUpdate = require("./layer-update");

var _defaultSettings = require("../constants/default-settings");

var _colorRanges = require("../constants/color-ranges");

var _customColorRanges = require("../constants/custom-color-ranges");

var _layerFactory = require("./layer-factory");

var _utils = require("../utils/utils");

var _dataUtils = require("../utils/data-utils");

var _colorUtils = require("../utils/color-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_regenerator["default"].mark(generateColor);

/** @typedef {import('./index').Layer} LayerClass} */

/**
 * Approx. number of points to sample in a large data set
 * @type {number}
 */
var LAYER_ID_LENGTH = 6;
exports.LAYER_ID_LENGTH = LAYER_ID_LENGTH;
var MAX_SAMPLE_SIZE = 5000;
var defaultDomain = [0, 1];
var dataFilterExtension = new _extensions.DataFilterExtension({
  filterSize: _defaultSettings.MAX_GPU_FILTERS
});

var identity = function identity(d) {
  return d;
};

var defaultDataAccessor = function defaultDataAccessor(d) {
  return d.data;
};

var OVERLAY_TYPE = (0, _keymirror["default"])({
  deckgl: null,
  mapboxgl: null
});
exports.OVERLAY_TYPE = OVERLAY_TYPE;
var layerColors = Object.values(_customColorRanges.DataVizColors).map(_colorUtils.hexToRgb);
exports.layerColors = layerColors;

function generateColor() {
  var index;
  return _regenerator["default"].wrap(function generateColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < layerColors.length + 1)) {
            _context.next = 7;
            break;
          }

          if (index === layerColors.length) {
            index = 0;
          }

          _context.next = 5;
          return layerColors[index++];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var colorMaker = generateColor();
exports.colorMaker = colorMaker;

var defaultGetFieldValue = function defaultGetFieldValue(field, d) {
  return field.valueAccessor(d);
};
/** @type {LayerClass} */


var Layer = /*#__PURE__*/function () {
  function Layer() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Layer);
    this.id = props.id || (0, _utils.generateHashId)(LAYER_ID_LENGTH); // meta

    this.meta = {}; // visConfigSettings

    this.visConfigSettings = {}; // @ts-ignore

    this.config = this.getDefaultLayerConfig(_objectSpread({
      columns: this.getLayerColumns()
    }, props));
  }

  (0, _createClass2["default"])(Layer, [{
    key: "layerIcon",
    get: function get() {
      return _defaultLayerIcon["default"];
    }
  }, {
    key: "overlayType",
    get: function get() {
      return OVERLAY_TYPE.deckgl;
    }
  }, {
    key: "type",
    get: function get() {
      return null;
    }
  }, {
    key: "name",
    get: function get() {
      return this.type;
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return ['label', 'opacity', 'thickness', 'isVisible', 'hidden'];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: {
          property: 'color',
          field: 'colorField',
          scale: 'colorScale',
          domain: 'colorDomain',
          range: 'colorRange',
          key: 'color',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color,
          nullValue: _defaultSettings.NO_VALUE_COLOR,
          defaultValue: function defaultValue(config) {
            return config.color;
          }
        },
        size: {
          property: 'size',
          field: 'sizeField',
          scale: 'sizeScale',
          domain: 'sizeDomain',
          range: 'sizeRange',
          key: 'size',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size,
          nullValue: 0,
          defaultValue: 1
        }
      };
    }
    /*
     * Column pairs maps layer column to a specific field pairs,
     * By default, it is set to null
     */

  }, {
    key: "columnPairs",
    get: function get() {
      return null;
    }
    /*
     * Default point column pairs, can be used for point based layers: point, icon etc.
     */

  }, {
    key: "defaultPointColumnPairs",
    get: function get() {
      return {
        lat: {
          pair: 'lng',
          fieldPairKey: 'lat'
        },
        lng: {
          pair: 'lat',
          fieldPairKey: 'lng'
        }
      };
    }
    /*
     * Default link column pairs, can be used for link based layers: arc, line etc
     */

  }, {
    key: "defaultLinkColumnPairs",
    get: function get() {
      return {
        lat0: {
          pair: 'lng0',
          fieldPairKey: 'lat'
        },
        lng0: {
          pair: 'lat0',
          fieldPairKey: 'lng'
        },
        lat1: {
          pair: 'lng1',
          fieldPairKey: 'lat'
        },
        lng1: {
          pair: 'lat1',
          fieldPairKey: 'lng'
        }
      };
    }
    /**
     * Return a React component for to render layer instructions in a modal
     * @returns {object} - an object
     * @example
     *  return {
     *    id: 'iconInfo',
     *    template: IconInfoModal,
     *    modalProps: {
     *      title: 'How to draw icons'
     *   };
     * }
     */

  }, {
    key: "layerInfoModal",
    get: function get() {
      return null;
    }
    /*
     * Given a dataset, automatically find props to create layer based on it
     * and return the props and previous found layers.
     * By default, no layers will be found
     */

  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        dataId: props.dataId || null,
        label: props.label || 'new layer',
        color: props.color || colorMaker.next().value,
        columns: props.columns || null,
        isVisible: props.isVisible || false,
        isConfigActive: props.isConfigActive || false,
        highlightColor: props.highlightColor || [252, 242, 26, 255],
        hidden: props.hidden || false,
        // TODO: refactor this into separate visual Channel config
        // color by field, domain is set by filters, field, scale type
        colorField: null,
        colorDomain: [0, 1],
        colorScale: _defaultSettings.SCALE_TYPES.quantile,
        // color by size, domain is set by filters, field, scale type
        sizeDomain: [0, 1],
        sizeScale: _defaultSettings.SCALE_TYPES.linear,
        sizeField: null,
        visConfig: {},
        textLabel: [_layerFactory.DEFAULT_TEXT_LABEL],
        colorUI: {
          color: _layerFactory.DEFAULT_COLOR_UI,
          colorRange: _layerFactory.DEFAULT_COLOR_UI
        },
        animation: {
          enabled: false
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
      // e.g. label: Color, measure: Vehicle Type
      return {
        label: this.visConfigSettings[this.visualChannels[key].range].label,
        measure: this.config[this.visualChannels[key].field] ? this.config[this.visualChannels[key].field].name : this.visualChannels[key].defaultMeasure
      };
    }
    /**
     * Assign a field to layer column, return column config
     * @param key - Column Key
     * @param field - Selected field
     * @returns {{}} - Column config
     */

  }, {
    key: "assignColumn",
    value: function assignColumn(key, field) {
      // field value could be null for optional columns
      var update = field ? {
        value: field.name,
        fieldIdx: field.fieldIdx
      } : {
        value: null,
        fieldIdx: -1
      };
      return _objectSpread(_objectSpread({}, this.config.columns), {}, (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, this.config.columns[key]), update)));
    }
    /**
     * Assign a field pair to column config, return column config
     * @param key - Column Key
     * @param pair - field Pair
     * @returns {object} - Column config
     */

  }, {
    key: "assignColumnPairs",
    value: function assignColumnPairs(key, pair) {
      var _this$columnPairs, _this$columnPairs2, _this$columnPairs3, _objectSpread3;

      if (!this.columnPairs || !((_this$columnPairs = this.columnPairs) !== null && _this$columnPairs !== void 0 && _this$columnPairs[key])) {
        // should not end in this state
        return this.config.columns;
      }

      var _this$columnPairs$key = (_this$columnPairs2 = this.columnPairs) === null || _this$columnPairs2 === void 0 ? void 0 : _this$columnPairs2[key],
          partnerKey = _this$columnPairs$key.pair,
          fieldPairKey = _this$columnPairs$key.fieldPairKey;

      var _this$columnPairs$par = (_this$columnPairs3 = this.columnPairs) === null || _this$columnPairs3 === void 0 ? void 0 : _this$columnPairs3[partnerKey],
          partnerFieldPairKey = _this$columnPairs$par.fieldPairKey;

      return _objectSpread(_objectSpread({}, this.config.columns), {}, (_objectSpread3 = {}, (0, _defineProperty2["default"])(_objectSpread3, key, pair[fieldPairKey]), (0, _defineProperty2["default"])(_objectSpread3, partnerKey, pair[partnerFieldPairKey]), _objectSpread3));
    }
    /**
     * Calculate a radius zoom multiplier to render points, so they are visible in all zoom level
     * @param {object} mapState
     * @param {number} mapState.zoom - actual zoom
     * @param {number | void} mapState.zoomOffset - zoomOffset when render in the plot container for export image
     * @returns {number}
     */

  }, {
    key: "getZoomFactor",
    value: function getZoomFactor(_ref) {
      var zoom = _ref.zoom,
          _ref$zoomOffset = _ref.zoomOffset,
          zoomOffset = _ref$zoomOffset === void 0 ? 0 : _ref$zoomOffset;
      return Math.pow(2, Math.max(14 - zoom + zoomOffset, 0));
    }
    /**
     * Calculate a elevation zoom multiplier to render points, so they are visible in all zoom level
     * @param {object} mapState
     * @param {number} mapState.zoom - actual zoom
     * @param {number | void} mapState.zoomOffset - zoomOffset when render in the plot container for export image
     * @returns {number}
     */

  }, {
    key: "getElevationZoomFactor",
    value: function getElevationZoomFactor(_ref2) {
      var zoom = _ref2.zoom,
          _ref2$zoomOffset = _ref2.zoomOffset,
          zoomOffset = _ref2$zoomOffset === void 0 ? 0 : _ref2$zoomOffset;
      return this.config.visConfig.enableElevationZoomFactor ? Math.pow(2, Math.max(8 - zoom + zoomOffset, 0)) : 1;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, filteredIndex) {
      return {};
    }
  }, {
    key: "renderLayer",
    value: function renderLayer() {
      return [];
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object) {
      if (!object) {
        return null;
      } // by default, each entry of layerData should have a data property points
      // to the original item in the allData array
      // each layer can implement its own getHoverData method


      return object.data;
    }
    /**
     * When change layer type, try to copy over layer configs as much as possible
     * @param configToCopy - config to copy over
     * @param visConfigSettings - visConfig settings of config to copy
     */

  }, {
    key: "assignConfigToLayer",
    value: function assignConfigToLayer(configToCopy, visConfigSettings) {
      var _this = this;

      // don't deep merge visualChannel field
      // don't deep merge color range, reversed: is not a key by default
      var shallowCopy = ['colorRange', 'strokeColorRange'].concat(Object.values(this.visualChannels).map(function (v) {
        return v.field;
      })); // don't copy over domain and animation

      var notToCopy = ['animation'].concat(Object.values(this.visualChannels).map(function (v) {
        return v.domain;
      })); // if range is for the same property group copy it, otherwise, not to copy

      Object.values(this.visualChannels).forEach(function (v) {
        if (configToCopy.visConfig[v.range] && _this.visConfigSettings[v.range] && visConfigSettings[v.range].group !== _this.visConfigSettings[v.range].group) {
          notToCopy.push(v.range);
        }
      }); // don't copy over visualChannel range

      var currentConfig = this.config;
      var copied = this.copyLayerConfig(currentConfig, configToCopy, {
        shallowCopy: shallowCopy,
        notToCopy: notToCopy
      });
      this.updateLayerConfig(copied); // validate visualChannel field type and scale types

      Object.keys(this.visualChannels).forEach(function (channel) {
        _this.validateVisualChannel(channel);
      });
    }
    /*
     * Recursively copy config over to an empty layer
     * when received saved config, or copy config over from a different layer type
     * make sure to only copy over value to existing keys
     * @param {object} currentConfig - existing config to be override
     * @param {object} configToCopy - new Config to copy over
     * @param {string[]} shallowCopy - array of properties to not to be deep copied
     * @param {string[]} notToCopy - array of properties not to copy
     * @returns {object} - copied config
     */

  }, {
    key: "copyLayerConfig",
    value: function copyLayerConfig(currentConfig, configToCopy) {
      var _this2 = this;

      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$shallowCopy = _ref3.shallowCopy,
          shallowCopy = _ref3$shallowCopy === void 0 ? [] : _ref3$shallowCopy,
          _ref3$notToCopy = _ref3.notToCopy,
          notToCopy = _ref3$notToCopy === void 0 ? [] : _ref3$notToCopy;

      var copied = {};
      Object.keys(currentConfig).forEach(function (key) {
        if ((0, _utils.isPlainObject)(currentConfig[key]) && (0, _utils.isPlainObject)(configToCopy[key]) && !shallowCopy.includes(key) && !notToCopy.includes(key)) {
          // recursively assign object value
          copied[key] = _this2.copyLayerConfig(currentConfig[key], configToCopy[key], {
            shallowCopy: shallowCopy,
            notToCopy: notToCopy
          });
        } else if ((0, _dataUtils.notNullorUndefined)(configToCopy[key]) && !notToCopy.includes(key)) {
          // copy
          copied[key] = configToCopy[key];
        } else {
          // keep existing
          copied[key] = currentConfig[key];
        }
      });
      return copied;
    }
  }, {
    key: "registerVisConfig",
    value: function registerVisConfig(layerVisConfigs) {
      var _this3 = this;

      Object.keys(layerVisConfigs).forEach(function (item) {
        if (typeof item === 'string' && _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]]) {
          // if assigned one of default LAYER_CONFIGS
          _this3.config.visConfig[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]].defaultValue;
          _this3.visConfigSettings[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]];
        } else if (['type', 'defaultValue'].every(function (p) {
          return layerVisConfigs[item].hasOwnProperty(p);
        })) {
          // if provided customized visConfig, and has type && defaultValue
          // TODO: further check if customized visConfig is valid
          _this3.config.visConfig[item] = layerVisConfigs[item].defaultValue;
          _this3.visConfigSettings[item] = layerVisConfigs[item];
        }
      });
    }
  }, {
    key: "getLayerColumns",
    value: function getLayerColumns() {
      var columnValidators = this.columnValidators || {};
      var required = this.requiredLayerColumns.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, columnValidators[key] ? {
          value: null,
          fieldIdx: -1,
          validator: columnValidators[key]
        } : {
          value: null,
          fieldIdx: -1
        }));
      }, {});
      var optional = this.optionalColumns.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, {
          value: null,
          fieldIdx: -1,
          optional: true
        }));
      }, {});
      return _objectSpread(_objectSpread({}, required), optional);
    }
  }, {
    key: "updateLayerConfig",
    value: function updateLayerConfig(newConfig) {
      this.config = _objectSpread(_objectSpread({}, this.config), newConfig);
      return this;
    }
  }, {
    key: "updateLayerVisConfig",
    value: function updateLayerVisConfig(newVisConfig) {
      this.config.visConfig = _objectSpread(_objectSpread({}, this.config.visConfig), newVisConfig);
      return this;
    }
  }, {
    key: "updateLayerColorUI",
    value: function updateLayerColorUI(prop, newConfig) {
      var _this$config = this.config,
          previous = _this$config.colorUI,
          visConfig = _this$config.visConfig;

      if (!(0, _utils.isPlainObject)(newConfig) || typeof prop !== 'string') {
        return this;
      }

      var colorUIProp = Object.entries(newConfig).reduce(function (accu, _ref4) {
        var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];

        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, (0, _utils.isPlainObject)(accu[key]) && (0, _utils.isPlainObject)(value) ? _objectSpread(_objectSpread({}, accu[key]), value) : value));
      }, previous[prop] || _layerFactory.DEFAULT_COLOR_UI);

      var colorUI = _objectSpread(_objectSpread({}, previous), {}, (0, _defineProperty2["default"])({}, prop, colorUIProp));

      this.updateLayerConfig({
        colorUI: colorUI
      }); // if colorUI[prop] is colorRange

      var isColorRange = visConfig[prop] && visConfig[prop].colors;

      if (isColorRange) {
        this.updateColorUIByColorRange(newConfig, prop);
        this.updateColorRangeByColorUI(newConfig, previous, prop);
        this.updateCustomPalette(newConfig, previous, prop);
      }

      return this;
    }
  }, {
    key: "updateCustomPalette",
    value: function updateCustomPalette(newConfig, previous, prop) {
      if (!newConfig.colorRangeConfig || !newConfig.colorRangeConfig.custom) {
        return;
      }

      var _this$config2 = this.config,
          colorUI = _this$config2.colorUI,
          visConfig = _this$config2.visConfig;
      if (!visConfig[prop]) return;
      var colors = visConfig[prop].colors;

      var customPalette = _objectSpread(_objectSpread({}, colorUI[prop].customPalette), {}, {
        name: 'Custom Palette',
        colors: (0, _toConsumableArray2["default"])(colors)
      });

      this.updateLayerConfig({
        colorUI: _objectSpread(_objectSpread({}, colorUI), {}, (0, _defineProperty2["default"])({}, prop, _objectSpread(_objectSpread({}, colorUI[prop]), {}, {
          customPalette: customPalette
        })))
      });
    }
    /**
     * if open dropdown and prop is color range
     * Automatically set colorRangeConfig's step and reversed
     * @param {*} newConfig
     * @param {*} prop
     */

  }, {
    key: "updateColorUIByColorRange",
    value: function updateColorUIByColorRange(newConfig, prop) {
      if (typeof newConfig.showDropdown !== 'number') return;
      var _this$config3 = this.config,
          colorUI = _this$config3.colorUI,
          visConfig = _this$config3.visConfig;
      this.updateLayerConfig({
        colorUI: _objectSpread(_objectSpread({}, colorUI), {}, (0, _defineProperty2["default"])({}, prop, _objectSpread(_objectSpread({}, colorUI[prop]), {}, {
          colorRangeConfig: _objectSpread(_objectSpread({}, colorUI[prop].colorRangeConfig), {}, {
            steps: visConfig[prop].colors.length,
            reversed: Boolean(visConfig[prop].reversed)
          })
        })))
      });
    }
  }, {
    key: "updateColorRangeByColorUI",
    value: function updateColorRangeByColorUI(newConfig, previous, prop) {
      // only update colorRange if changes in UI is made to 'reversed', 'steps' or steps
      var shouldUpdate = newConfig.colorRangeConfig && ['reversed', 'steps'].some(function (key) {
        return newConfig.colorRangeConfig.hasOwnProperty(key) && newConfig.colorRangeConfig[key] !== (previous[prop] || _layerFactory.DEFAULT_COLOR_UI).colorRangeConfig[key];
      });
      if (!shouldUpdate) return;
      var _this$config4 = this.config,
          colorUI = _this$config4.colorUI,
          visConfig = _this$config4.visConfig;
      var _colorUI$prop$colorRa = colorUI[prop].colorRangeConfig,
          steps = _colorUI$prop$colorRa.steps,
          reversed = _colorUI$prop$colorRa.reversed;
      var colorRange = visConfig[prop]; // find based on step or reversed

      var update;

      if (newConfig.colorRangeConfig.hasOwnProperty('steps')) {
        var group = (0, _colorUtils.getColorGroupByName)(colorRange);

        if (group) {
          var sameGroup = _colorRanges.COLOR_RANGES.filter(function (cr) {
            return (0, _colorUtils.getColorGroupByName)(cr) === group;
          });

          update = sameGroup.find(function (cr) {
            return cr.colors.length === steps;
          });

          if (update && colorRange.reversed) {
            update = (0, _colorUtils.reverseColorRange)(true, update);
          }
        }
      }

      if (newConfig.colorRangeConfig.hasOwnProperty('reversed')) {
        update = (0, _colorUtils.reverseColorRange)(reversed, update || colorRange);
      }

      if (update) {
        this.updateLayerVisConfig((0, _defineProperty2["default"])({}, prop, update));
      }
    }
    /**
     * Check whether layer has all columns
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasAllColumns",
    value: function hasAllColumns() {
      var columns = this.config.columns;
      return columns && Object.values(columns).every(function (v) {
        return Boolean(v.optional || v.value && v.fieldIdx > -1);
      });
    }
    /**
     * Check whether layer has data
     *
     * @param {Array | Object} layerData
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasLayerData",
    value: function hasLayerData(layerData) {
      if (!layerData) {
        return false;
      }

      return Boolean(layerData.data && layerData.data.length);
    }
  }, {
    key: "isValidToSave",
    value: function isValidToSave() {
      return this.type && this.hasAllColumns();
    }
  }, {
    key: "shouldRenderLayer",
    value: function shouldRenderLayer(data) {
      return this.type && this.config.isVisible && this.hasAllColumns() && this.hasLayerData(data) && typeof this.renderLayer === 'function';
    }
  }, {
    key: "getColorScale",
    value: function getColorScale(colorScale, colorDomain, colorRange) {
      if (Array.isArray(colorRange.colorMap)) {
        var cMap = new Map();
        colorRange.colorMap.forEach(function (_ref6) {
          var _ref7 = (0, _slicedToArray2["default"])(_ref6, 2),
              k = _ref7[0],
              v = _ref7[1];

          cMap.set(k, typeof v === 'string' ? (0, _colorUtils.hexToRgb)(v) : v);
        });

        var scale = _defaultSettings.SCALE_FUNC[_defaultSettings.SCALE_TYPES.ordinal]().domain(cMap.keys()).range(cMap.values()).unknown(cMap.get(_layerFactory.UNKNOWN_COLOR_KEY) || _defaultSettings.NO_VALUE_COLOR);

        return scale;
      }

      return this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb));
    }
    /**
     * Mapping from visual channels to deck.gl accesors
     * @param {Function} dataAccessor - access kepler.gl layer data from deck.gl layer
     * @return {Object} attributeAccessors - deck.gl layer attribute accessors
     */

  }, {
    key: "getAttributeAccessors",
    value: function getAttributeAccessors() {
      var _this4 = this;

      var dataAccessor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultDataAccessor;
      var attributeAccessors = {};
      Object.keys(this.visualChannels).forEach(function (channel) {
        var _this4$visualChannels = _this4.visualChannels[channel],
            field = _this4$visualChannels.field,
            fixed = _this4$visualChannels.fixed,
            scale = _this4$visualChannels.scale,
            domain = _this4$visualChannels.domain,
            range = _this4$visualChannels.range,
            accessor = _this4$visualChannels.accessor,
            defaultValue = _this4$visualChannels.defaultValue,
            getAttributeValue = _this4$visualChannels.getAttributeValue,
            nullValue = _this4$visualChannels.nullValue,
            channelScaleType = _this4$visualChannels.channelScaleType;
        var shouldGetScale = _this4.config[field];

        if (shouldGetScale) {
          var args = [_this4.config[scale], _this4.config[domain], _this4.config.visConfig[range]];
          var isFixed = fixed && _this4.config.visConfig[fixed];
          var scaleFunction = channelScaleType === _defaultSettings.CHANNEL_SCALES.color ? _this4.getColorScale.apply(_this4, args) : _this4.getVisChannelScale.apply(_this4, args.concat([isFixed]));

          attributeAccessors[accessor] = function (d) {
            return _this4.getEncodedChannelValue(scaleFunction, dataAccessor(d), _this4.config[field], nullValue);
          };
        } else if (typeof getAttributeValue === 'function') {
          attributeAccessors[accessor] = getAttributeValue(_this4.config);
        } else {
          attributeAccessors[accessor] = typeof defaultValue === 'function' ? defaultValue(_this4.config) : defaultValue;
        }

        if (!attributeAccessors[accessor]) {
          _window.console.warn("Failed to provide accesso function for ".concat(accessor || channel));
        }
      });
      return attributeAccessors;
    }
  }, {
    key: "getVisChannelScale",
    value: function getVisChannelScale(scale, domain, range, fixed) {
      return _defaultSettings.SCALE_FUNC[fixed ? 'linear' : scale]().domain(domain).range(fixed ? domain : range);
    }
  }, {
    key: "getPointsBounds",
    value: function getPointsBounds(allData) {
      var getPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
      // no need to loop through the entire dataset
      // get a sample of data to calculate bounds
      var sampleData = allData.length > MAX_SAMPLE_SIZE ? (0, _dataUtils.getSampleData)(allData, MAX_SAMPLE_SIZE) : allData;
      var points = sampleData.map(getPosition);
      var latBounds = (0, _dataUtils.getLatLngBounds)(points, 1, [-90, 90]);
      var lngBounds = (0, _dataUtils.getLatLngBounds)(points, 0, [-180, 180]);

      if (!latBounds || !lngBounds) {
        return null;
      }

      return [lngBounds[0], latBounds[0], lngBounds[1], latBounds[1]];
    }
  }, {
    key: "getChangedTriggers",
    value: function getChangedTriggers(dataUpdateTriggers) {
      var triggerChanged = (0, _layerUpdate.diffUpdateTriggers)(dataUpdateTriggers, this._oldDataUpdateTriggers);
      this._oldDataUpdateTriggers = dataUpdateTriggers;
      return triggerChanged;
    }
  }, {
    key: "getEncodedChannelValue",
    value: function getEncodedChannelValue(scale, data, field) {
      var nullValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultSettings.NO_VALUE_COLOR;
      var getValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultGetFieldValue;
      var type = field.type;
      var value = getValue(field, data);

      if (!(0, _dataUtils.notNullorUndefined)(value)) {
        return nullValue;
      }

      var attributeValue;

      if (type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
        // shouldn't need to convert here
        // scale Function should take care of it
        attributeValue = scale(new Date(value));
      } else {
        attributeValue = scale(value);
      }

      if (!(0, _dataUtils.notNullorUndefined)(attributeValue)) {
        attributeValue = nullValue;
      }

      return attributeValue;
    }
  }, {
    key: "updateMeta",
    value: function updateMeta(meta) {
      this.meta = _objectSpread(_objectSpread({}, this.meta), meta);
    }
  }, {
    key: "getDataUpdateTriggers",
    value: function getDataUpdateTriggers(_ref8) {
      var filteredIndex = _ref8.filteredIndex,
          id = _ref8.id;
      var columns = this.config.columns;
      return _objectSpread({
        getData: {
          datasetId: id,
          columns: columns,
          filteredIndex: filteredIndex
        },
        getMeta: {
          datasetId: id,
          columns: columns
        }
      }, (this.config.textLabel || []).reduce(function (accu, tl, i) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, "getLabelCharacterSet-".concat(i), tl.field ? tl.field.name : null));
      }, {}));
    }
  }, {
    key: "updateData",
    value: function updateData(datasets, oldLayerData) {
      if (!this.config.dataId) {
        return {};
      }

      var layerDataset = datasets[this.config.dataId];
      var allData = datasets[this.config.dataId].allData;
      var getPosition = this.getPositionAccessor();
      var dataUpdateTriggers = this.getDataUpdateTriggers(layerDataset);
      var triggerChanged = this.getChangedTriggers(dataUpdateTriggers);

      if (triggerChanged.getMeta) {
        this.updateLayerMeta(allData, getPosition);
      }

      var data = [];

      if (!triggerChanged.getData && oldLayerData && oldLayerData.data) {
        // same data
        data = oldLayerData.data;
      } else {
        data = this.calculateDataAttribute(layerDataset, getPosition);
      }

      return {
        data: data,
        triggerChanged: triggerChanged
      };
    }
    /**
     * helper function to update one layer domain when state.data changed
     * if state.data change is due ot update filter, newFiler will be passed
     * called by updateAllLayerDomainData
     * @param {Object} datasets
     * @param {Object} newFilter
     * @returns {object} layer
     */

  }, {
    key: "updateLayerDomain",
    value: function updateLayerDomain(datasets, newFilter) {
      var _this5 = this;

      var table = this.getDataset(datasets);

      if (!table) {
        return this;
      }

      Object.values(this.visualChannels).forEach(function (channel) {
        var scale = channel.scale;
        var scaleType = _this5.config[scale]; // ordinal domain is based on allData, if only filter changed
        // no need to update ordinal domain

        if (!newFilter || scaleType !== _defaultSettings.SCALE_TYPES.ordinal) {
          var domain = channel.domain;

          var updatedDomain = _this5.calculateLayerDomain(table, channel);

          _this5.updateLayerConfig((0, _defineProperty2["default"])({}, domain, updatedDomain));
        }
      });
      return this;
    }
  }, {
    key: "getDataset",
    value: function getDataset(datasets) {
      return this.config.dataId ? datasets[this.config.dataId] : null;
    }
    /**
     * Validate visual channel field and scales based on supported field & scale type
     * @param channel
     */

  }, {
    key: "validateVisualChannel",
    value: function validateVisualChannel(channel) {
      this.validateFieldType(channel);
      this.validateScale(channel);
    }
    /**
     * Validate field type based on channelScaleType
     */

  }, {
    key: "validateFieldType",
    value: function validateFieldType(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          channelScaleType = visualChannel.channelScaleType,
          supportedFieldTypes = visualChannel.supportedFieldTypes;

      if (this.config[field]) {
        // if field is selected, check if field type is supported
        var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];

        if (!channelSupportedFieldTypes.includes(this.config[field].type)) {
          // field type is not supported, set it back to null
          // set scale back to default
          this.updateLayerConfig((0, _defineProperty2["default"])({}, field, null));
        }
      }
    }
    /**
     * Validate scale type based on aggregation
     */

  }, {
    key: "validateScale",
    value: function validateScale(channel) {
      var visualChannel = this.visualChannels[channel];
      var scale = visualChannel.scale;

      if (!scale) {
        // visualChannel doesn't have scale
        return;
      }

      var scaleOptions = this.getScaleOptions(channel); // check if current selected scale is
      // supported, if not, change to default

      if (!scaleOptions.includes(this.config[scale])) {
        this.updateLayerConfig((0, _defineProperty2["default"])({}, scale, scaleOptions[0]));
      }
    }
    /**
     * Get scale options based on current field
     * @param {string} channel
     * @returns {string[]}
     */

  }, {
    key: "getScaleOptions",
    value: function getScaleOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          scale = visualChannel.scale,
          channelScaleType = visualChannel.channelScaleType;
      return this.config[field] ? _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType] : [this.getDefaultLayerConfig()[scale]];
    }
  }, {
    key: "updateLayerVisualChannel",
    value: function updateLayerVisualChannel(dataset, channel) {
      var visualChannel = this.visualChannels[channel];
      this.validateVisualChannel(channel); // calculate layer channel domain

      var updatedDomain = this.calculateLayerDomain(dataset, visualChannel);
      this.updateLayerConfig((0, _defineProperty2["default"])({}, visualChannel.domain, updatedDomain));
    }
  }, {
    key: "getVisualChannelUpdateTriggers",
    value: function getVisualChannelUpdateTriggers() {
      var _this6 = this;

      var updateTriggers = {};
      Object.values(this.visualChannels).forEach(function (visualChannel) {
        var _objectSpread11;

        // field range scale domain
        var accessor = visualChannel.accessor,
            field = visualChannel.field,
            scale = visualChannel.scale,
            domain = visualChannel.domain,
            range = visualChannel.range,
            defaultValue = visualChannel.defaultValue,
            fixed = visualChannel.fixed;
        updateTriggers[accessor] = _objectSpread((_objectSpread11 = {}, (0, _defineProperty2["default"])(_objectSpread11, field, _this6.config[field]), (0, _defineProperty2["default"])(_objectSpread11, scale, _this6.config[scale]), (0, _defineProperty2["default"])(_objectSpread11, domain, _this6.config[domain]), (0, _defineProperty2["default"])(_objectSpread11, range, _this6.config.visConfig[range]), (0, _defineProperty2["default"])(_objectSpread11, "defaultValue", typeof defaultValue === 'function' ? defaultValue(_this6.config) : defaultValue), _objectSpread11), fixed ? (0, _defineProperty2["default"])({}, fixed, _this6.config.visConfig[fixed]) : {});
      });
      return updateTriggers;
    }
  }, {
    key: "calculateLayerDomain",
    value: function calculateLayerDomain(dataset, visualChannel) {
      var scale = visualChannel.scale;
      var scaleType = this.config[scale];
      var field = this.config[visualChannel.field];

      if (!field) {
        // if colorField or sizeField were set back to null
        return defaultDomain;
      }

      return dataset.getColumnLayerDomain(field, scaleType) || defaultDomain;
    }
  }, {
    key: "hasHoveredObject",
    value: function hasHoveredObject(objectInfo) {
      return this.isLayerHovered(objectInfo) && objectInfo.object ? objectInfo.object : null;
    }
  }, {
    key: "isLayerHovered",
    value: function isLayerHovered(objectInfo) {
      var _objectInfo$layer, _objectInfo$layer$pro;

      return (objectInfo === null || objectInfo === void 0 ? void 0 : objectInfo.picked) && (objectInfo === null || objectInfo === void 0 ? void 0 : (_objectInfo$layer = objectInfo.layer) === null || _objectInfo$layer === void 0 ? void 0 : (_objectInfo$layer$pro = _objectInfo$layer.props) === null || _objectInfo$layer$pro === void 0 ? void 0 : _objectInfo$layer$pro.id) === this.id;
    }
  }, {
    key: "getRadiusScaleByZoom",
    value: function getRadiusScaleByZoom(mapState, fixedRadius) {
      var radiusChannel = Object.values(this.visualChannels).find(function (vc) {
        return vc.property === 'radius';
      });

      if (!radiusChannel) {
        return 1;
      }

      var field = radiusChannel.field;
      var fixed = fixedRadius === undefined ? this.config.visConfig.fixedRadius : fixedRadius;
      var radius = this.config.visConfig.radius; // @ts-ignore

      return fixed ? 1 : (this.config[field] ? 1 : radius) * this.getZoomFactor(mapState);
    }
  }, {
    key: "shouldCalculateLayerData",
    value: function shouldCalculateLayerData(props) {
      var _this7 = this;

      return props.some(function (p) {
        return !_this7.noneLayerDataAffectingProps.includes(p);
      });
    }
  }, {
    key: "getBrushingExtensionProps",
    value: function getBrushingExtensionProps(interactionConfig, brushingTarget) {
      var brush = interactionConfig.brush;
      return {
        // brushing
        autoHighlight: !brush.enabled,
        brushingRadius: brush.config.size * 1000,
        brushingTarget: brushingTarget || 'source',
        brushingEnabled: brush.enabled
      };
    }
  }, {
    key: "getDefaultDeckLayerProps",
    value: function getDefaultDeckLayerProps(_ref10) {
      var idx = _ref10.idx,
          gpuFilter = _ref10.gpuFilter,
          mapState = _ref10.mapState;
      return {
        id: this.id,
        idx: idx,
        coordinateSystem: _core.COORDINATE_SYSTEM.LNGLAT,
        pickable: true,
        wrapLongitude: true,
        parameters: {
          depthTest: Boolean(mapState.dragRotate || this.config.visConfig.enable3d)
        },
        hidden: this.config.hidden,
        // visconfig
        opacity: this.config.visConfig.opacity,
        highlightColor: this.config.highlightColor,
        // data filtering
        extensions: [dataFilterExtension],
        filterRange: gpuFilter ? gpuFilter.filterRange : undefined
      };
    }
  }, {
    key: "getDefaultHoverLayerProps",
    value: function getDefaultHoverLayerProps() {
      return {
        id: "".concat(this.id, "-hovered"),
        pickable: false,
        wrapLongitude: true,
        coordinateSystem: _core.COORDINATE_SYSTEM.LNGLAT
      };
    }
  }, {
    key: "renderTextLabelLayer",
    value: function renderTextLabelLayer(_ref11, renderOpts) {
      var _this8 = this;

      var getPosition = _ref11.getPosition,
          getPixelOffset = _ref11.getPixelOffset,
          updateTriggers = _ref11.updateTriggers,
          sharedProps = _ref11.sharedProps;
      var data = renderOpts.data,
          mapState = renderOpts.mapState;
      var textLabel = this.config.textLabel;
      return data.textLabels.reduce(function (accu, d, i) {
        if (d.getText) {
          var _textLabel$i$field, _textLabel$i$field2;

          accu.push(new _layers.TextLayer(_objectSpread(_objectSpread({}, sharedProps), {}, {
            id: "".concat(_this8.id, "-label-").concat((_textLabel$i$field = textLabel[i].field) === null || _textLabel$i$field === void 0 ? void 0 : _textLabel$i$field.name),
            data: data.data,
            getText: d.getText,
            getPosition: getPosition,
            characterSet: d.characterSet,
            getPixelOffset: getPixelOffset(textLabel[i]),
            getSize: 1,
            sizeScale: textLabel[i].size,
            getTextAnchor: textLabel[i].anchor,
            getAlignmentBaseline: textLabel[i].alignment,
            getColor: textLabel[i].color,
            parameters: {
              // text will always show on top of all layers
              depthTest: false
            },
            getFilterValue: data.getFilterValue,
            updateTriggers: _objectSpread(_objectSpread({}, updateTriggers), {}, {
              getText: (_textLabel$i$field2 = textLabel[i].field) === null || _textLabel$i$field2 === void 0 ? void 0 : _textLabel$i$field2.name,
              getPixelOffset: _objectSpread(_objectSpread({}, updateTriggers.getRadius), {}, {
                mapState: mapState,
                anchor: textLabel[i].anchor,
                alignment: textLabel[i].alignment
              }),
              getTextAnchor: textLabel[i].anchor,
              getAlignmentBaseline: textLabel[i].alignment,
              getColor: textLabel[i].color
            })
          })));
        }

        return accu;
      }, []);
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(dataset, getPosition) {
      // implemented in subclasses
      return [];
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getPosition) {// implemented in subclasses
    }
  }, {
    key: "getPositionAccessor",
    value: function getPositionAccessor() {
      // implemented in subclasses
      return function () {
        return null;
      };
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(dataset, foundLayers) {
      return {
        props: [],
        foundLayers: foundLayers
      };
    }
    /**
     * Given a array of preset required column names
     * found field that has the same name to set as layer column
     *
     * @param {object} defaultFields
     * @param {object[]} allFields
     * @returns {object[] | null} all possible required layer column pairs
     */

  }, {
    key: "findDefaultColumnField",
    value: function findDefaultColumnField(defaultFields, allFields) {
      // find all matched fields for each required col
      var requiredColumns = Object.keys(defaultFields).reduce(function (prev, key) {
        var requiredFields = allFields.filter(function (f) {
          return f.name === defaultFields[key] || defaultFields[key].includes(f.name);
        });
        prev[key] = requiredFields.length ? requiredFields.map(function (f) {
          return {
            value: f.name,
            fieldIdx: f.fieldIdx
          };
        }) : null;
        return prev;
      }, {});

      if (!Object.values(requiredColumns).every(Boolean)) {
        // if any field missing, return null
        return null;
      }

      return this.getAllPossibleColumnParis(requiredColumns);
    }
  }, {
    key: "getAllPossibleColumnParis",
    value: function getAllPossibleColumnParis(requiredColumns) {
      // for multiple matched field for one required column, return multiple
      // combinations, e. g. if column a has 2 matched, column b has 3 matched
      // 6 possible column pairs will be returned
      var allKeys = Object.keys(requiredColumns);
      var pointers = allKeys.map(function (k, i) {
        return i === allKeys.length - 1 ? -1 : 0;
      });
      var countPerKey = allKeys.map(function (k) {
        return requiredColumns[k].length;
      });
      var pairs = [];
      /* eslint-disable no-loop-func */

      while (incrementPointers(pointers, countPerKey, pointers.length - 1)) {
        var newPair = pointers.reduce(function (prev, cuur, i) {
          prev[allKeys[i]] = requiredColumns[allKeys[i]][cuur];
          return prev;
        }, {});
        pairs.push(newPair);
      }
      /* eslint-enable no-loop-func */
      // recursively increment pointers


      function incrementPointers(pts, counts, index) {
        if (index === 0 && pts[0] === counts[0] - 1) {
          // nothing to increment
          return false;
        }

        if (pts[index] + 1 < counts[index]) {
          pts[index] = pts[index] + 1;
          return true;
        }

        pts[index] = 0;
        return incrementPointers(pts, counts, index - 1);
      }

      return pairs;
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(c) {
      return (0, _colorUtils.hexToRgb)(c);
    }
  }]);
  return Layer;
}();

var _default = Layer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvYmFzZS1sYXllci5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNvbG9yIiwiTEFZRVJfSURfTEVOR1RIIiwiTUFYX1NBTVBMRV9TSVpFIiwiZGVmYXVsdERvbWFpbiIsImRhdGFGaWx0ZXJFeHRlbnNpb24iLCJEYXRhRmlsdGVyRXh0ZW5zaW9uIiwiZmlsdGVyU2l6ZSIsIk1BWF9HUFVfRklMVEVSUyIsImlkZW50aXR5IiwiZCIsImRlZmF1bHREYXRhQWNjZXNzb3IiLCJkYXRhIiwiT1ZFUkxBWV9UWVBFIiwiZGVja2dsIiwibWFwYm94Z2wiLCJsYXllckNvbG9ycyIsIk9iamVjdCIsInZhbHVlcyIsIkRhdGFWaXpDb2xvcnMiLCJtYXAiLCJoZXhUb1JnYiIsImluZGV4IiwibGVuZ3RoIiwiY29sb3JNYWtlciIsImRlZmF1bHRHZXRGaWVsZFZhbHVlIiwiZmllbGQiLCJ2YWx1ZUFjY2Vzc29yIiwiTGF5ZXIiLCJwcm9wcyIsImlkIiwibWV0YSIsInZpc0NvbmZpZ1NldHRpbmdzIiwiY29uZmlnIiwiZ2V0RGVmYXVsdExheWVyQ29uZmlnIiwiY29sdW1ucyIsImdldExheWVyQ29sdW1ucyIsIkRlZmF1bHRMYXllckljb24iLCJ0eXBlIiwiY29sb3IiLCJwcm9wZXJ0eSIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJudWxsVmFsdWUiLCJOT19WQUxVRV9DT0xPUiIsImRlZmF1bHRWYWx1ZSIsInNpemUiLCJsYXQiLCJwYWlyIiwiZmllbGRQYWlyS2V5IiwibG5nIiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImRhdGFJZCIsImxhYmVsIiwibmV4dCIsInZhbHVlIiwiaXNWaXNpYmxlIiwiaXNDb25maWdBY3RpdmUiLCJoaWdobGlnaHRDb2xvciIsImhpZGRlbiIsImNvbG9yRmllbGQiLCJjb2xvckRvbWFpbiIsImNvbG9yU2NhbGUiLCJTQ0FMRV9UWVBFUyIsInF1YW50aWxlIiwic2l6ZURvbWFpbiIsInNpemVTY2FsZSIsImxpbmVhciIsInNpemVGaWVsZCIsInZpc0NvbmZpZyIsInRleHRMYWJlbCIsIkRFRkFVTFRfVEVYVF9MQUJFTCIsImNvbG9yVUkiLCJERUZBVUxUX0NPTE9SX1VJIiwiY29sb3JSYW5nZSIsImFuaW1hdGlvbiIsImVuYWJsZWQiLCJ2aXN1YWxDaGFubmVscyIsIm1lYXN1cmUiLCJuYW1lIiwiZGVmYXVsdE1lYXN1cmUiLCJ1cGRhdGUiLCJmaWVsZElkeCIsImNvbHVtblBhaXJzIiwicGFydG5lcktleSIsInBhcnRuZXJGaWVsZFBhaXJLZXkiLCJ6b29tIiwiem9vbU9mZnNldCIsIk1hdGgiLCJwb3ciLCJtYXgiLCJlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yIiwiZGF0YXNldHMiLCJmaWx0ZXJlZEluZGV4Iiwib2JqZWN0IiwiY29uZmlnVG9Db3B5Iiwic2hhbGxvd0NvcHkiLCJjb25jYXQiLCJ2Iiwibm90VG9Db3B5IiwiZm9yRWFjaCIsImdyb3VwIiwicHVzaCIsImN1cnJlbnRDb25maWciLCJjb3BpZWQiLCJjb3B5TGF5ZXJDb25maWciLCJ1cGRhdGVMYXllckNvbmZpZyIsImtleXMiLCJjaGFubmVsIiwidmFsaWRhdGVWaXN1YWxDaGFubmVsIiwiaW5jbHVkZXMiLCJsYXllclZpc0NvbmZpZ3MiLCJpdGVtIiwiTEFZRVJfVklTX0NPTkZJR1MiLCJldmVyeSIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbHVtblZhbGlkYXRvcnMiLCJyZXF1aXJlZCIsInJlcXVpcmVkTGF5ZXJDb2x1bW5zIiwicmVkdWNlIiwiYWNjdSIsInZhbGlkYXRvciIsIm9wdGlvbmFsIiwib3B0aW9uYWxDb2x1bW5zIiwibmV3Q29uZmlnIiwibmV3VmlzQ29uZmlnIiwicHJvcCIsInByZXZpb3VzIiwiY29sb3JVSVByb3AiLCJlbnRyaWVzIiwiaXNDb2xvclJhbmdlIiwiY29sb3JzIiwidXBkYXRlQ29sb3JVSUJ5Q29sb3JSYW5nZSIsInVwZGF0ZUNvbG9yUmFuZ2VCeUNvbG9yVUkiLCJ1cGRhdGVDdXN0b21QYWxldHRlIiwiY29sb3JSYW5nZUNvbmZpZyIsImN1c3RvbSIsImN1c3RvbVBhbGV0dGUiLCJzaG93RHJvcGRvd24iLCJzdGVwcyIsInJldmVyc2VkIiwiQm9vbGVhbiIsInNob3VsZFVwZGF0ZSIsInNvbWUiLCJzYW1lR3JvdXAiLCJDT0xPUl9SQU5HRVMiLCJmaWx0ZXIiLCJjciIsImZpbmQiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsImxheWVyRGF0YSIsImhhc0FsbENvbHVtbnMiLCJoYXNMYXllckRhdGEiLCJyZW5kZXJMYXllciIsIkFycmF5IiwiaXNBcnJheSIsImNvbG9yTWFwIiwiY01hcCIsIk1hcCIsImsiLCJzZXQiLCJTQ0FMRV9GVU5DIiwib3JkaW5hbCIsInVua25vd24iLCJnZXQiLCJVTktOT1dOX0NPTE9SX0tFWSIsImdldFZpc0NoYW5uZWxTY2FsZSIsImRhdGFBY2Nlc3NvciIsImF0dHJpYnV0ZUFjY2Vzc29ycyIsImZpeGVkIiwiYWNjZXNzb3IiLCJnZXRBdHRyaWJ1dGVWYWx1ZSIsInNob3VsZEdldFNjYWxlIiwiYXJncyIsImlzRml4ZWQiLCJzY2FsZUZ1bmN0aW9uIiwiZ2V0Q29sb3JTY2FsZSIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJDb25zb2xlIiwid2FybiIsImFsbERhdGEiLCJnZXRQb3NpdGlvbiIsInNhbXBsZURhdGEiLCJwb2ludHMiLCJsYXRCb3VuZHMiLCJsbmdCb3VuZHMiLCJkYXRhVXBkYXRlVHJpZ2dlcnMiLCJ0cmlnZ2VyQ2hhbmdlZCIsIl9vbGREYXRhVXBkYXRlVHJpZ2dlcnMiLCJnZXRWYWx1ZSIsImF0dHJpYnV0ZVZhbHVlIiwiQUxMX0ZJRUxEX1RZUEVTIiwidGltZXN0YW1wIiwiRGF0ZSIsImdldERhdGEiLCJkYXRhc2V0SWQiLCJnZXRNZXRhIiwidGwiLCJpIiwib2xkTGF5ZXJEYXRhIiwibGF5ZXJEYXRhc2V0IiwiZ2V0UG9zaXRpb25BY2Nlc3NvciIsImdldERhdGFVcGRhdGVUcmlnZ2VycyIsImdldENoYW5nZWRUcmlnZ2VycyIsInVwZGF0ZUxheWVyTWV0YSIsImNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUiLCJuZXdGaWx0ZXIiLCJ0YWJsZSIsImdldERhdGFzZXQiLCJzY2FsZVR5cGUiLCJ1cGRhdGVkRG9tYWluIiwiY2FsY3VsYXRlTGF5ZXJEb21haW4iLCJ2YWxpZGF0ZUZpZWxkVHlwZSIsInZhbGlkYXRlU2NhbGUiLCJ2aXN1YWxDaGFubmVsIiwic3VwcG9ydGVkRmllbGRUeXBlcyIsImNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwic2NhbGVPcHRpb25zIiwiZ2V0U2NhbGVPcHRpb25zIiwiRklFTERfT1BUUyIsImRhdGFzZXQiLCJ1cGRhdGVUcmlnZ2VycyIsImdldENvbHVtbkxheWVyRG9tYWluIiwib2JqZWN0SW5mbyIsImlzTGF5ZXJIb3ZlcmVkIiwicGlja2VkIiwibGF5ZXIiLCJtYXBTdGF0ZSIsImZpeGVkUmFkaXVzIiwicmFkaXVzQ2hhbm5lbCIsInZjIiwidW5kZWZpbmVkIiwicmFkaXVzIiwiZ2V0Wm9vbUZhY3RvciIsIm5vbmVMYXllckRhdGFBZmZlY3RpbmdQcm9wcyIsImludGVyYWN0aW9uQ29uZmlnIiwiYnJ1c2hpbmdUYXJnZXQiLCJicnVzaCIsImF1dG9IaWdobGlnaHQiLCJicnVzaGluZ1JhZGl1cyIsImJydXNoaW5nRW5hYmxlZCIsImlkeCIsImdwdUZpbHRlciIsImNvb3JkaW5hdGVTeXN0ZW0iLCJDT09SRElOQVRFX1NZU1RFTSIsIkxOR0xBVCIsInBpY2thYmxlIiwid3JhcExvbmdpdHVkZSIsInBhcmFtZXRlcnMiLCJkZXB0aFRlc3QiLCJkcmFnUm90YXRlIiwiZW5hYmxlM2QiLCJvcGFjaXR5IiwiZXh0ZW5zaW9ucyIsImZpbHRlclJhbmdlIiwicmVuZGVyT3B0cyIsImdldFBpeGVsT2Zmc2V0Iiwic2hhcmVkUHJvcHMiLCJ0ZXh0TGFiZWxzIiwiZ2V0VGV4dCIsIlRleHRMYXllciIsImNoYXJhY3RlclNldCIsImdldFNpemUiLCJnZXRUZXh0QW5jaG9yIiwiYW5jaG9yIiwiZ2V0QWxpZ25tZW50QmFzZWxpbmUiLCJhbGlnbm1lbnQiLCJnZXRDb2xvciIsImdldEZpbHRlclZhbHVlIiwiZ2V0UmFkaXVzIiwiZm91bmRMYXllcnMiLCJkZWZhdWx0RmllbGRzIiwiYWxsRmllbGRzIiwicmVxdWlyZWRDb2x1bW5zIiwicHJldiIsInJlcXVpcmVkRmllbGRzIiwiZiIsImdldEFsbFBvc3NpYmxlQ29sdW1uUGFyaXMiLCJhbGxLZXlzIiwicG9pbnRlcnMiLCJjb3VudFBlcktleSIsInBhaXJzIiwiaW5jcmVtZW50UG9pbnRlcnMiLCJuZXdQYWlyIiwiY3V1ciIsInB0cyIsImNvdW50cyIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFVQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFFQTs7QUFFQTs7Ozs7O3dEQXNCVUEsYTs7QUFwQlY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQyxlQUFlLEdBQUcsQ0FBeEI7O0FBRVAsSUFBTUMsZUFBZSxHQUFHLElBQXhCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBdEI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxJQUFJQywrQkFBSixDQUF3QjtBQUFDQyxFQUFBQSxVQUFVLEVBQUVDO0FBQWIsQ0FBeEIsQ0FBNUI7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsQ0FBQztBQUFBLFNBQUlBLENBQUo7QUFBQSxDQUFsQjs7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFELENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNFLElBQU47QUFBQSxDQUE3Qjs7QUFFTyxJQUFNQyxZQUFZLEdBQUcsMkJBQVU7QUFDcENDLEVBQUFBLE1BQU0sRUFBRSxJ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MkJHLEdBQTNCLEVBQWdDQyxNQUFoQyxFQUF3Q2pSLEtBQXhDLEVBQStDO0FBQzdDLFlBQUlBLEtBQUssS0FBSyxDQUFWLElBQWVnUixHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVdDLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUExQyxFQUE2QztBQUMzQztBQUNBLGlCQUFPLEtBQVA7QUFDRDs7QUFFRCxZQUFJRCxHQUFHLENBQUNoUixLQUFELENBQUgsR0FBYSxDQUFiLEdBQWlCaVIsTUFBTSxDQUFDalIsS0FBRCxDQUEzQixFQUFvQztBQUNsQ2dSLFVBQUFBLEdBQUcsQ0FBQ2hSLEtBQUQsQ0FBSCxHQUFhZ1IsR0FBRyxDQUFDaFIsS0FBRCxDQUFILEdBQWEsQ0FBMUI7QUFDQSxpQkFBTyxJQUFQO0FBQ0Q7O0FBRURnUixRQUFBQSxHQUFHLENBQUNoUixLQUFELENBQUgsR0FBYSxDQUFiO0FBQ0EsZUFBTzZRLGlCQUFpQixDQUFDRyxHQUFELEVBQU1DLE1BQU4sRUFBY2pSLEtBQUssR0FBRyxDQUF0QixDQUF4QjtBQUNEOztBQUVELGFBQU80USxLQUFQO0FBQ0Q7OztXQUVELGtCQUFnQk0sQ0FBaEIsRUFBbUI7QUFDakIsYUFBTywwQkFBU0EsQ0FBVCxDQUFQO0FBQ0Q7Ozs7O2VBNDFCWTVRLEsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQga2V5bWlycm9yIGZyb20gJ2tleW1pcnJvcic7XG5pbXBvcnQge0RhdGFGaWx0ZXJFeHRlbnNpb259IGZyb20gJ0BkZWNrLmdsL2V4dGVuc2lvbnMnO1xuaW1wb3J0IHtDT09SRElOQVRFX1NZU1RFTX0gZnJvbSAnQGRlY2suZ2wvY29yZSc7XG5pbXBvcnQge1RleHRMYXllcn0gZnJvbSAnQGRlY2suZ2wvbGF5ZXJzJztcblxuaW1wb3J0IERlZmF1bHRMYXllckljb24gZnJvbSAnLi9kZWZhdWx0LWxheWVyLWljb24nO1xuaW1wb3J0IHtkaWZmVXBkYXRlVHJpZ2dlcnN9IGZyb20gJy4vbGF5ZXItdXBkYXRlJztcblxuaW1wb3J0IHtcbiAgQUxMX0ZJRUxEX1RZUEVTLFxuICBOT19WQUxVRV9DT0xPUixcbiAgU0NBTEVfVFlQRVMsXG4gIENIQU5ORUxfU0NBTEVTLFxuICBGSUVMRF9PUFRTLFxuICBTQ0FMRV9GVU5DLFxuICBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFMsXG4gIE1BWF9HUFVfRklMVEVSU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge0NPTE9SX1JBTkdFU30gZnJvbSAnY29uc3RhbnRzL2NvbG9yLXJhbmdlcyc7XG5pbXBvcnQge0RhdGFWaXpDb2xvcnN9IGZyb20gJ2NvbnN0YW50cy9jdXN0b20tY29sb3ItcmFuZ2VzJztcbmltcG9ydCB7XG4gIExBWUVSX1ZJU19DT05GSUdTLFxuICBERUZBVUxUX1RFWFRfTEFCRUwsXG4gIERFRkFVTFRfQ09MT1JfVUksXG4gIFVOS05PV05fQ09MT1JfS0VZXG59IGZyb20gJy4vbGF5ZXItZmFjdG9yeSc7XG5cbmltcG9ydCB7Z2VuZXJhdGVIYXNoSWQsIGlzUGxhaW5PYmplY3R9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHtnZXRTYW1wbGVEYXRhLCBnZXRMYXRMbmdCb3VuZHMsIG5vdE51bGxvclVuZGVmaW5lZH0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5cbmltcG9ydCB7aGV4VG9SZ2IsIGdldENvbG9yR3JvdXBCeU5hbWUsIHJldmVyc2VDb2xvclJhbmdlfSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2luZGV4JykuTGF5ZXJ9IExheWVyQ2xhc3N9ICovXG5cbi8qKlxuICogQXBwcm94LiBudW1iZXIgb2YgcG9pbnRzIHRvIHNhbXBsZSBpbiBhIGxhcmdlIGRhdGEgc2V0XG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgTEFZRVJfSURfTEVOR1RIID0gNjtcblxuY29uc3QgTUFYX1NBTVBMRV9TSVpFID0gNTAwMDtcbmNvbnN0IGRlZmF1bHREb21haW4gPSBbMCwgMV07XG5jb25zdCBkYXRhRmlsdGVyRXh0ZW5zaW9uID0gbmV3IERhdGFGaWx0ZXJFeHRlbnNpb24oe2ZpbHRlclNpemU6IE1BWF9HUFVfRklMVEVSU30pO1xuY29uc3QgaWRlbnRpdHkgPSBkID0+IGQ7XG5jb25zdCBkZWZhdWx0RGF0YUFjY2Vzc29yID0gZCA9PiBkLmRhdGE7XG5cbmV4cG9ydCBjb25zdCBPVkVSTEFZX1RZUEUgPSBrZXltaXJyb3Ioe1xuICBkZWNrZ2w6IG51bGwsXG4gIG1hcGJveGdsOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxheWVyQ29sb3JzID0gT2JqZWN0LnZhbHVlcyhEYXRhVml6Q29sb3JzKS5tYXAoaGV4VG9SZ2IpO1xuZnVuY3Rpb24qIGdlbmVyYXRlQ29sb3IoKSB7XG4gIGxldCBpbmRleCA9IDA7XG4gIHdoaWxlIChpbmRleCA8IGxheWVyQ29sb3JzLmxlbmd0aCArIDEpIHtcbiAgICBpZiAoaW5kZXggPT09IGxheWVyQ29sb3JzLmxlbmd0aCkge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICB5aWVsZCBsYXllckNvbG9yc1tpbmRleCsrXTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sb3JNYWtlciA9IGdlbmVyYXRlQ29sb3IoKTtcbmNvbnN0IGRlZmF1bHRHZXRGaWVsZFZhbHVlID0gKGZpZWxkLCBkKSA9PiBmaWVsZC52YWx1ZUFjY2Vzc29yKGQpO1xuXG4vKiogQHR5cGUge0xheWVyQ2xhc3N9ICovXG5jbGFzcyBMYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICB0aGlzLmlkID0gcHJvcHMuaWQgfHwgZ2VuZXJhdGVIYXNoSWQoTEFZRVJfSURfTEVOR1RIKTtcblxuICAgIC8vIG1ldGFcbiAgICB0aGlzLm1ldGEgPSB7fTtcblxuICAgIC8vIHZpc0NvbmZpZ1NldHRpbmdzXG4gICAgdGhpcy52aXNDb25maWdTZXR0aW5ncyA9IHt9O1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXREZWZhdWx0TGF5ZXJDb25maWcoe1xuICAgICAgY29sdW1uczogdGhpcy5nZXRMYXllckNvbHVtbnMoKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBEZWZhdWx0TGF5ZXJJY29uO1xuICB9XG5cbiAgZ2V0IG92ZXJsYXlUeXBlKCkge1xuICAgIHJldHVybiBPVkVSTEFZX1RZUEUuZGVja2dsO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0IGlzQWdncmVnYXRlZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0IG9wdGlvbmFsQ29sdW1ucygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXQgbm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzKCkge1xuICAgIHJldHVybiBbJ2xhYmVsJywgJ29wYWNpdHknLCAndGhpY2tuZXNzJywgJ2lzVmlzaWJsZScsICdoaWRkZW4nXTtcbiAgfVxuXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHtcbiAgICAgICAgcHJvcGVydHk6ICdjb2xvcicsXG4gICAgICAgIGZpZWxkOiAnY29sb3JGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnY29sb3JTY2FsZScsXG4gICAgICAgIGRvbWFpbjogJ2NvbG9yRG9tYWluJyxcbiAgICAgICAgcmFuZ2U6ICdjb2xvclJhbmdlJyxcbiAgICAgICAga2V5OiAnY29sb3InLFxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5jb2xvcixcbiAgICAgICAgbnVsbFZhbHVlOiBOT19WQUxVRV9DT0xPUixcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBjb25maWcgPT4gY29uZmlnLmNvbG9yXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBwcm9wZXJ0eTogJ3NpemUnLFxuICAgICAgICBmaWVsZDogJ3NpemVGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnc2l6ZVNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnc2l6ZURvbWFpbicsXG4gICAgICAgIHJhbmdlOiAnc2l6ZVJhbmdlJyxcbiAgICAgICAga2V5OiAnc2l6ZScsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnNpemUsXG4gICAgICAgIG51bGxWYWx1ZTogMCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiAxXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qXG4gICAqIENvbHVtbiBwYWlycyBtYXBzIGxheWVyIGNvbHVtbiB0byBhIHNwZWNpZmljIGZpZWxkIHBhaXJzLFxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbnVsbFxuICAgKi9cbiAgZ2V0IGNvbHVtblBhaXJzKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLypcbiAgICogRGVmYXVsdCBwb2ludCBjb2x1bW4gcGFpcnMsIGNhbiBiZSB1c2VkIGZvciBwb2ludCBiYXNlZCBsYXllcnM6IHBvaW50LCBpY29uIGV0Yy5cbiAgICovXG4gIGdldCBkZWZhdWx0UG9pbnRDb2x1bW5QYWlycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF0OiB7cGFpcjogJ2xuZycsIGZpZWxkUGFpcktleTogJ2xhdCd9LFxuICAgICAgbG5nOiB7cGFpcjogJ2xhdCcsIGZpZWxkUGFpcktleTogJ2xuZyd9XG4gICAgfTtcbiAgfVxuXG4gIC8qXG4gICAqIERlZmF1bHQgbGluayBjb2x1bW4gcGFpcnMsIGNhbiBiZSB1c2VkIGZvciBsaW5rIGJhc2VkIGxheWVyczogYXJjLCBsaW5lIGV0Y1xuICAgKi9cbiAgZ2V0IGRlZmF1bHRMaW5rQ29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhdDA6IHtwYWlyOiAnbG5nMCcsIGZpZWxkUGFpcktleTogJ2xhdCd9LFxuICAgICAgbG5nMDoge3BhaXI6ICdsYXQwJywgZmllbGRQYWlyS2V5OiAnbG5nJ30sXG4gICAgICBsYXQxOiB7cGFpcjogJ2xuZzEnLCBmaWVsZFBhaXJLZXk6ICdsYXQnfSxcbiAgICAgIGxuZzE6IHtwYWlyOiAnbGF0MScsIGZpZWxkUGFpcktleTogJ2xuZyd9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBSZWFjdCBjb21wb25lbnQgZm9yIHRvIHJlbmRlciBsYXllciBpbnN0cnVjdGlvbnMgaW4gYSBtb2RhbFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIGFuIG9iamVjdFxuICAgKiBAZXhhbXBsZVxuICAgKiAgcmV0dXJuIHtcbiAgICogICAgaWQ6ICdpY29uSW5mbycsXG4gICAqICAgIHRlbXBsYXRlOiBJY29uSW5mb01vZGFsLFxuICAgKiAgICBtb2RhbFByb3BzOiB7XG4gICAqICAgICAgdGl0bGU6ICdIb3cgdG8gZHJhdyBpY29ucydcbiAgICogICB9O1xuICAgKiB9XG4gICAqL1xuICBnZXQgbGF5ZXJJbmZvTW9kYWwoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLypcbiAgICogR2l2ZW4gYSBkYXRhc2V0LCBhdXRvbWF0aWNhbGx5IGZpbmQgcHJvcHMgdG8gY3JlYXRlIGxheWVyIGJhc2VkIG9uIGl0XG4gICAqIGFuZCByZXR1cm4gdGhlIHByb3BzIGFuZCBwcmV2aW91cyBmb3VuZCBsYXllcnMuXG4gICAqIEJ5IGRlZmF1bHQsIG5vIGxheWVycyB3aWxsIGJlIGZvdW5kXG4gICAqL1xuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKGRhdGFzZXQsIGZvdW5kTGF5ZXJzKSB7XG4gICAgcmV0dXJuIHtwcm9wczogW10sIGZvdW5kTGF5ZXJzfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIGFycmF5IG9mIHByZXNldCByZXF1aXJlZCBjb2x1bW4gbmFtZXNcbiAgICogZm91bmQgZmllbGQgdGhhdCBoYXMgdGhlIHNhbWUgbmFtZSB0byBzZXQgYXMgbGF5ZXIgY29sdW1uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZhdWx0RmllbGRzXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IGFsbEZpZWxkc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0W10gfCBudWxsfSBhbGwgcG9zc2libGUgcmVxdWlyZWQgbGF5ZXIgY29sdW1uIHBhaXJzXG4gICAqL1xuICBzdGF0aWMgZmluZERlZmF1bHRDb2x1bW5GaWVsZChkZWZhdWx0RmllbGRzLCBhbGxGaWVsZHMpIHtcbiAgICAvLyBmaW5kIGFsbCBtYXRjaGVkIGZpZWxkcyBmb3IgZWFjaCByZXF1aXJlZCBjb2xcbiAgICBjb25zdCByZXF1aXJlZENvbHVtbnMgPSBPYmplY3Qua2V5cyhkZWZhdWx0RmllbGRzKS5yZWR1Y2UoKHByZXYsIGtleSkgPT4ge1xuICAgICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBhbGxGaWVsZHMuZmlsdGVyKFxuICAgICAgICBmID0+IGYubmFtZSA9PT0gZGVmYXVsdEZpZWxkc1trZXldIHx8IGRlZmF1bHRGaWVsZHNba2V5XS5pbmNsdWRlcyhmLm5hbWUpXG4gICAgICApO1xuXG4gICAgICBwcmV2W2tleV0gPSByZXF1aXJlZEZpZWxkcy5sZW5ndGhcbiAgICAgICAgPyByZXF1aXJlZEZpZWxkcy5tYXAoZiA9PiAoe1xuICAgICAgICAgICAgdmFsdWU6IGYubmFtZSxcbiAgICAgICAgICAgIGZpZWxkSWR4OiBmLmZpZWxkSWR4XG4gICAgICAgICAgfSkpXG4gICAgICAgIDogbnVsbDtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcblxuICAgIGlmICghT2JqZWN0LnZhbHVlcyhyZXF1aXJlZENvbHVtbnMpLmV2ZXJ5KEJvb2xlYW4pKSB7XG4gICAgICAvLyBpZiBhbnkgZmllbGQgbWlzc2luZywgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldEFsbFBvc3NpYmxlQ29sdW1uUGFyaXMocmVxdWlyZWRDb2x1bW5zKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbGxQb3NzaWJsZUNvbHVtblBhcmlzKHJlcXVpcmVkQ29sdW1ucykge1xuICAgIC8vIGZvciBtdWx0aXBsZSBtYXRjaGVkIGZpZWxkIGZvciBvbmUgcmVxdWlyZWQgY29sdW1uLCByZXR1cm4gbXVsdGlwbGVcbiAgICAvLyBjb21iaW5hdGlvbnMsIGUuIGcuIGlmIGNvbHVtbiBhIGhhcyAyIG1hdGNoZWQsIGNvbHVtbiBiIGhhcyAzIG1hdGNoZWRcbiAgICAvLyA2IHBvc3NpYmxlIGNvbHVtbiBwYWlycyB3aWxsIGJlIHJldHVybmVkXG4gICAgY29uc3QgYWxsS2V5cyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkQ29sdW1ucyk7XG4gICAgY29uc3QgcG9pbnRlcnMgPSBhbGxLZXlzLm1hcCgoaywgaSkgPT4gKChpID09PSBhbGxLZXlzLmxlbmd0aCAtIDEgPyAtMSA6IDApKSk7XG4gICAgY29uc3QgY291bnRQZXJLZXkgPSBhbGxLZXlzLm1hcChrID0+IHJlcXVpcmVkQ29sdW1uc1trXS5sZW5ndGgpO1xuICAgIGNvbnN0IHBhaXJzID0gW107XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cbiAgICB3aGlsZSAoaW5jcmVtZW50UG9pbnRlcnMocG9pbnRlcnMsIGNvdW50UGVyS2V5LCBwb2ludGVycy5sZW5ndGggLSAxKSkge1xuICAgICAgY29uc3QgbmV3UGFpciA9IHBvaW50ZXJzLnJlZHVjZSgocHJldiwgY3V1ciwgaSkgPT4ge1xuICAgICAgICBwcmV2W2FsbEtleXNbaV1dID0gcmVxdWlyZWRDb2x1bW5zW2FsbEtleXNbaV1dW2N1dXJdO1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH0sIHt9KTtcblxuICAgICAgcGFpcnMucHVzaChuZXdQYWlyKTtcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuICAgIC8vIHJlY3Vyc2l2ZWx5IGluY3JlbWVudCBwb2ludGVyc1xuICAgIGZ1bmN0aW9uIGluY3JlbWVudFBvaW50ZXJzKHB0cywgY291bnRzLCBpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSAwICYmIHB0c1swXSA9PT0gY291bnRzWzBdIC0gMSkge1xuICAgICAgICAvLyBub3RoaW5nIHRvIGluY3JlbWVudFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChwdHNbaW5kZXhdICsgMSA8IGNvdW50c1tpbmRleF0pIHtcbiAgICAgICAgcHRzW2luZGV4XSA9IHB0c1tpbmRleF0gKyAxO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcHRzW2luZGV4XSA9IDA7XG4gICAgICByZXR1cm4gaW5jcmVtZW50UG9pbnRlcnMocHRzLCBjb3VudHMsIGluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhaXJzO1xuICB9XG5cbiAgc3RhdGljIGhleFRvUmdiKGMpIHtcbiAgICByZXR1cm4gaGV4VG9SZ2IoYyk7XG4gIH1cblxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhSWQ6IHByb3BzLmRhdGFJZCB8fCBudWxsLFxuICAgICAgbGFiZWw6IHByb3BzLmxhYmVsIHx8ICduZXcgbGF5ZXInLFxuICAgICAgY29sb3I6IHByb3BzLmNvbG9yIHx8IGNvbG9yTWFrZXIubmV4dCgpLnZhbHVlLFxuICAgICAgY29sdW1uczogcHJvcHMuY29sdW1ucyB8fCBudWxsLFxuICAgICAgaXNWaXNpYmxlOiBwcm9wcy5pc1Zpc2libGUgfHwgZmFsc2UsXG4gICAgICBpc0NvbmZpZ0FjdGl2ZTogcHJvcHMuaXNDb25maWdBY3RpdmUgfHwgZmFsc2UsXG4gICAgICBoaWdobGlnaHRDb2xvcjogcHJvcHMuaGlnaGxpZ2h0Q29sb3IgfHwgWzI1MiwgMjQyLCAyNiwgMjU1XSxcbiAgICAgIGhpZGRlbjogcHJvcHMuaGlkZGVuIHx8IGZhbHNlLFxuXG4gICAgICAvLyBUT0RPOiByZWZhY3RvciB0aGlzIGludG8gc2VwYXJhdGUgdmlzdWFsIENoYW5uZWwgY29uZmlnXG4gICAgICAvLyBjb2xvciBieSBmaWVsZCwgZG9tYWluIGlzIHNldCBieSBmaWx0ZXJzLCBmaWVsZCwgc2NhbGUgdHlwZVxuICAgICAgY29sb3JGaWVsZDogbnVsbCxcbiAgICAgIGNvbG9yRG9tYWluOiBbMCwgMV0sXG4gICAgICBjb2xvclNjYWxlOiBTQ0FMRV9UWVBFUy5xdWFudGlsZSxcblxuICAgICAgLy8gY29sb3IgYnkgc2l6ZSwgZG9tYWluIGlzIHNldCBieSBmaWx0ZXJzLCBmaWVsZCwgc2NhbGUgdHlwZVxuICAgICAgc2l6ZURvbWFpbjogWzAsIDFdLFxuICAgICAgc2l6ZVNjYWxlOiBTQ0FMRV9UWVBFUy5saW5lYXIsXG4gICAgICBzaXplRmllbGQ6IG51bGwsXG5cbiAgICAgIHZpc0NvbmZpZzoge30sXG5cbiAgICAgIHRleHRMYWJlbDogW0RFRkFVTFRfVEVYVF9MQUJFTF0sXG5cbiAgICAgIGNvbG9yVUk6IHtcbiAgICAgICAgY29sb3I6IERFRkFVTFRfQ09MT1JfVUksXG4gICAgICAgIGNvbG9yUmFuZ2U6IERFRkFVTFRfQ09MT1JfVUlcbiAgICAgIH0sXG4gICAgICBhbmltYXRpb246IHtlbmFibGVkOiBmYWxzZX1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVzY3JpcHRpb24gb2YgYSB2aXN1YWxDaGFubmVsIGNvbmZpZ1xuICAgKiBAcGFyYW0ga2V5XG4gICAqIEByZXR1cm5zIHt7bGFiZWw6IHN0cmluZywgbWVhc3VyZTogKHN0cmluZ3xzdHJpbmcpfX1cbiAgICovXG4gIGdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbihrZXkpIHtcbiAgICAvLyBlLmcuIGxhYmVsOiBDb2xvciwgbWVhc3VyZTogVmVoaWNsZSBUeXBlXG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzW3RoaXMudmlzdWFsQ2hhbm5lbHNba2V5XS5yYW5nZV0ubGFiZWwsXG4gICAgICBtZWFzdXJlOiB0aGlzLmNvbmZpZ1t0aGlzLnZpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdXG4gICAgICAgID8gdGhpcy5jb25maWdbdGhpcy52aXN1YWxDaGFubmVsc1trZXldLmZpZWxkXS5uYW1lXG4gICAgICAgIDogdGhpcy52aXN1YWxDaGFubmVsc1trZXldLmRlZmF1bHRNZWFzdXJlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gYSBmaWVsZCB0byBsYXllciBjb2x1bW4sIHJldHVybiBjb2x1bW4gY29uZmlnXG4gICAqIEBwYXJhbSBrZXkgLSBDb2x1bW4gS2V5XG4gICAqIEBwYXJhbSBmaWVsZCAtIFNlbGVjdGVkIGZpZWxkXG4gICAqIEByZXR1cm5zIHt7fX0gLSBDb2x1bW4gY29uZmlnXG4gICAqL1xuICBhc3NpZ25Db2x1bW4oa2V5LCBmaWVsZCkge1xuICAgIC8vIGZpZWxkIHZhbHVlIGNvdWxkIGJlIG51bGwgZm9yIG9wdGlvbmFsIGNvbHVtbnNcbiAgICBjb25zdCB1cGRhdGUgPSBmaWVsZFxuICAgICAgPyB7XG4gICAgICAgICAgdmFsdWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgZmllbGRJZHg6IGZpZWxkLmZpZWxkSWR4XG4gICAgICAgIH1cbiAgICAgIDoge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTF9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uZmlnLmNvbHVtbnMsXG4gICAgICBba2V5XToge1xuICAgICAgICAuLi50aGlzLmNvbmZpZy5jb2x1bW5zW2tleV0sXG4gICAgICAgIC4uLnVwZGF0ZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGEgZmllbGQgcGFpciB0byBjb2x1bW4gY29uZmlnLCByZXR1cm4gY29sdW1uIGNvbmZpZ1xuICAgKiBAcGFyYW0ga2V5IC0gQ29sdW1uIEtleVxuICAgKiBAcGFyYW0gcGFpciAtIGZpZWxkIFBhaXJcbiAgICogQHJldHVybnMge29iamVjdH0gLSBDb2x1bW4gY29uZmlnXG4gICAqL1xuICBhc3NpZ25Db2x1bW5QYWlycyhrZXksIHBhaXIpIHtcbiAgICBpZiAoIXRoaXMuY29sdW1uUGFpcnMgfHwgIXRoaXMuY29sdW1uUGFpcnM/LltrZXldKSB7XG4gICAgICAvLyBzaG91bGQgbm90IGVuZCBpbiB0aGlzIHN0YXRlXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuY29sdW1ucztcbiAgICB9XG5cbiAgICBjb25zdCB7cGFpcjogcGFydG5lcktleSwgZmllbGRQYWlyS2V5fSA9IHRoaXMuY29sdW1uUGFpcnM/LltrZXldO1xuICAgIGNvbnN0IHtmaWVsZFBhaXJLZXk6IHBhcnRuZXJGaWVsZFBhaXJLZXl9ID0gdGhpcy5jb2x1bW5QYWlycz8uW3BhcnRuZXJLZXldO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uZmlnLmNvbHVtbnMsXG4gICAgICBba2V5XTogcGFpcltmaWVsZFBhaXJLZXldLFxuICAgICAgW3BhcnRuZXJLZXldOiBwYWlyW3BhcnRuZXJGaWVsZFBhaXJLZXldXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYSByYWRpdXMgem9vbSBtdWx0aXBsaWVyIHRvIHJlbmRlciBwb2ludHMsIHNvIHRoZXkgYXJlIHZpc2libGUgaW4gYWxsIHpvb20gbGV2ZWxcbiAgICogQHBhcmFtIHtvYmplY3R9IG1hcFN0YXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXBTdGF0ZS56b29tIC0gYWN0dWFsIHpvb21cbiAgICogQHBhcmFtIHtudW1iZXIgfCB2b2lkfSBtYXBTdGF0ZS56b29tT2Zmc2V0IC0gem9vbU9mZnNldCB3aGVuIHJlbmRlciBpbiB0aGUgcGxvdCBjb250YWluZXIgZm9yIGV4cG9ydCBpbWFnZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Wm9vbUZhY3Rvcih7em9vbSwgem9vbU9mZnNldCA9IDB9KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KDIsIE1hdGgubWF4KDE0IC0gem9vbSArIHpvb21PZmZzZXQsIDApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgYSBlbGV2YXRpb24gem9vbSBtdWx0aXBsaWVyIHRvIHJlbmRlciBwb2ludHMsIHNvIHRoZXkgYXJlIHZpc2libGUgaW4gYWxsIHpvb20gbGV2ZWxcbiAgICogQHBhcmFtIHtvYmplY3R9IG1hcFN0YXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXBTdGF0ZS56b29tIC0gYWN0dWFsIHpvb21cbiAgICogQHBhcmFtIHtudW1iZXIgfCB2b2lkfSBtYXBTdGF0ZS56b29tT2Zmc2V0IC0gem9vbU9mZnNldCB3aGVuIHJlbmRlciBpbiB0aGUgcGxvdCBjb250YWluZXIgZm9yIGV4cG9ydCBpbWFnZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0RWxldmF0aW9uWm9vbUZhY3Rvcih7em9vbSwgem9vbU9mZnNldCA9IDB9KSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnZpc0NvbmZpZy5lbmFibGVFbGV2YXRpb25ab29tRmFjdG9yXG4gICAgICA/IE1hdGgucG93KDIsIE1hdGgubWF4KDggLSB6b29tICsgem9vbU9mZnNldCwgMCkpXG4gICAgICA6IDE7XG4gIH1cblxuICBmb3JtYXRMYXllckRhdGEoZGF0YXNldHMsIGZpbHRlcmVkSW5kZXgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICByZW5kZXJMYXllcigpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXRIb3ZlckRhdGEob2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBieSBkZWZhdWx0LCBlYWNoIGVudHJ5IG9mIGxheWVyRGF0YSBzaG91bGQgaGF2ZSBhIGRhdGEgcHJvcGVydHkgcG9pbnRzXG4gICAgLy8gdG8gdGhlIG9yaWdpbmFsIGl0ZW0gaW4gdGhlIGFsbERhdGEgYXJyYXlcbiAgICAvLyBlYWNoIGxheWVyIGNhbiBpbXBsZW1lbnQgaXRzIG93biBnZXRIb3ZlckRhdGEgbWV0aG9kXG4gICAgcmV0dXJuIG9iamVjdC5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gY2hhbmdlIGxheWVyIHR5cGUsIHRyeSB0byBjb3B5IG92ZXIgbGF5ZXIgY29uZmlncyBhcyBtdWNoIGFzIHBvc3NpYmxlXG4gICAqIEBwYXJhbSBjb25maWdUb0NvcHkgLSBjb25maWcgdG8gY29weSBvdmVyXG4gICAqIEBwYXJhbSB2aXNDb25maWdTZXR0aW5ncyAtIHZpc0NvbmZpZyBzZXR0aW5ncyBvZiBjb25maWcgdG8gY29weVxuICAgKi9cbiAgYXNzaWduQ29uZmlnVG9MYXllcihjb25maWdUb0NvcHksIHZpc0NvbmZpZ1NldHRpbmdzKSB7XG4gICAgLy8gZG9uJ3QgZGVlcCBtZXJnZSB2aXN1YWxDaGFubmVsIGZpZWxkXG4gICAgLy8gZG9uJ3QgZGVlcCBtZXJnZSBjb2xvciByYW5nZSwgcmV2ZXJzZWQ6IGlzIG5vdCBhIGtleSBieSBkZWZhdWx0XG4gICAgY29uc3Qgc2hhbGxvd0NvcHkgPSBbJ2NvbG9yUmFuZ2UnLCAnc3Ryb2tlQ29sb3JSYW5nZSddLmNvbmNhdChcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy52aXN1YWxDaGFubmVscykubWFwKHYgPT4gdi5maWVsZClcbiAgICApO1xuXG4gICAgLy8gZG9uJ3QgY29weSBvdmVyIGRvbWFpbiBhbmQgYW5pbWF0aW9uXG4gICAgY29uc3Qgbm90VG9Db3B5ID0gWydhbmltYXRpb24nXS5jb25jYXQoT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5tYXAodiA9PiB2LmRvbWFpbikpO1xuICAgIC8vIGlmIHJhbmdlIGlzIGZvciB0aGUgc2FtZSBwcm9wZXJ0eSBncm91cCBjb3B5IGl0LCBvdGhlcndpc2UsIG5vdCB0byBjb3B5XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5mb3JFYWNoKHYgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjb25maWdUb0NvcHkudmlzQ29uZmlnW3YucmFuZ2VdICYmXG4gICAgICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0gJiZcbiAgICAgICAgdmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0uZ3JvdXAgIT09IHRoaXMudmlzQ29uZmlnU2V0dGluZ3Nbdi5yYW5nZV0uZ3JvdXBcbiAgICAgICkge1xuICAgICAgICBub3RUb0NvcHkucHVzaCh2LnJhbmdlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGRvbid0IGNvcHkgb3ZlciB2aXN1YWxDaGFubmVsIHJhbmdlXG4gICAgY29uc3QgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNvcGllZCA9IHRoaXMuY29weUxheWVyQ29uZmlnKGN1cnJlbnRDb25maWcsIGNvbmZpZ1RvQ29weSwge1xuICAgICAgc2hhbGxvd0NvcHksXG4gICAgICBub3RUb0NvcHlcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoY29waWVkKTtcbiAgICAvLyB2YWxpZGF0ZSB2aXN1YWxDaGFubmVsIGZpZWxkIHR5cGUgYW5kIHNjYWxlIHR5cGVzXG4gICAgT2JqZWN0LmtleXModGhpcy52aXN1YWxDaGFubmVscykuZm9yRWFjaChjaGFubmVsID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVWaXN1YWxDaGFubmVsKGNoYW5uZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgICogUmVjdXJzaXZlbHkgY29weSBjb25maWcgb3ZlciB0byBhbiBlbXB0eSBsYXllclxuICAgKiB3aGVuIHJlY2VpdmVkIHNhdmVkIGNvbmZpZywgb3IgY29weSBjb25maWcgb3ZlciBmcm9tIGEgZGlmZmVyZW50IGxheWVyIHR5cGVcbiAgICogbWFrZSBzdXJlIHRvIG9ubHkgY29weSBvdmVyIHZhbHVlIHRvIGV4aXN0aW5nIGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGN1cnJlbnRDb25maWcgLSBleGlzdGluZyBjb25maWcgdG8gYmUgb3ZlcnJpZGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1RvQ29weSAtIG5ldyBDb25maWcgdG8gY29weSBvdmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHNoYWxsb3dDb3B5IC0gYXJyYXkgb2YgcHJvcGVydGllcyB0byBub3QgdG8gYmUgZGVlcCBjb3BpZWRcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gbm90VG9Db3B5IC0gYXJyYXkgb2YgcHJvcGVydGllcyBub3QgdG8gY29weVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIGNvcGllZCBjb25maWdcbiAgICovXG4gIGNvcHlMYXllckNvbmZpZyhjdXJyZW50Q29uZmlnLCBjb25maWdUb0NvcHksIHtzaGFsbG93Q29weSA9IFtdLCBub3RUb0NvcHkgPSBbXX0gPSB7fSkge1xuICAgIGNvbnN0IGNvcGllZCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGN1cnJlbnRDb25maWcpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXNQbGFpbk9iamVjdChjdXJyZW50Q29uZmlnW2tleV0pICYmXG4gICAgICAgIGlzUGxhaW5PYmplY3QoY29uZmlnVG9Db3B5W2tleV0pICYmXG4gICAgICAgICFzaGFsbG93Q29weS5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgICFub3RUb0NvcHkuaW5jbHVkZXMoa2V5KVxuICAgICAgKSB7XG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGFzc2lnbiBvYmplY3QgdmFsdWVcbiAgICAgICAgY29waWVkW2tleV0gPSB0aGlzLmNvcHlMYXllckNvbmZpZyhjdXJyZW50Q29uZmlnW2tleV0sIGNvbmZpZ1RvQ29weVtrZXldLCB7XG4gICAgICAgICAgc2hhbGxvd0NvcHksXG4gICAgICAgICAgbm90VG9Db3B5XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChub3ROdWxsb3JVbmRlZmluZWQoY29uZmlnVG9Db3B5W2tleV0pICYmICFub3RUb0NvcHkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAvLyBjb3B5XG4gICAgICAgIGNvcGllZFtrZXldID0gY29uZmlnVG9Db3B5W2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBrZWVwIGV4aXN0aW5nXG4gICAgICAgIGNvcGllZFtrZXldID0gY3VycmVudENvbmZpZ1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvcGllZDtcbiAgfVxuXG4gIHJlZ2lzdGVyVmlzQ29uZmlnKGxheWVyVmlzQ29uZmlncykge1xuICAgIE9iamVjdC5rZXlzKGxheWVyVmlzQ29uZmlncykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgTEFZRVJfVklTX0NPTkZJR1NbbGF5ZXJWaXNDb25maWdzW2l0ZW1dXSkge1xuICAgICAgICAvLyBpZiBhc3NpZ25lZCBvbmUgb2YgZGVmYXVsdCBMQVlFUl9DT05GSUdTXG4gICAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tpdGVtXSA9IExBWUVSX1ZJU19DT05GSUdTW2xheWVyVmlzQ29uZmlnc1tpdGVtXV0uZGVmYXVsdFZhbHVlO1xuICAgICAgICB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzW2l0ZW1dID0gTEFZRVJfVklTX0NPTkZJR1NbbGF5ZXJWaXNDb25maWdzW2l0ZW1dXTtcbiAgICAgIH0gZWxzZSBpZiAoWyd0eXBlJywgJ2RlZmF1bHRWYWx1ZSddLmV2ZXJ5KHAgPT4gbGF5ZXJWaXNDb25maWdzW2l0ZW1dLmhhc093blByb3BlcnR5KHApKSkge1xuICAgICAgICAvLyBpZiBwcm92aWRlZCBjdXN0b21pemVkIHZpc0NvbmZpZywgYW5kIGhhcyB0eXBlICYmIGRlZmF1bHRWYWx1ZVxuICAgICAgICAvLyBUT0RPOiBmdXJ0aGVyIGNoZWNrIGlmIGN1c3RvbWl6ZWQgdmlzQ29uZmlnIGlzIHZhbGlkXG4gICAgICAgIHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tpdGVtXSA9IGxheWVyVmlzQ29uZmlnc1tpdGVtXS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbaXRlbV0gPSBsYXllclZpc0NvbmZpZ3NbaXRlbV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRMYXllckNvbHVtbnMoKSB7XG4gICAgY29uc3QgY29sdW1uVmFsaWRhdG9ycyA9IHRoaXMuY29sdW1uVmFsaWRhdG9ycyB8fCB7fTtcbiAgICBjb25zdCByZXF1aXJlZCA9IHRoaXMucmVxdWlyZWRMYXllckNvbHVtbnMucmVkdWNlKFxuICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgW2tleV06IGNvbHVtblZhbGlkYXRvcnNba2V5XVxuICAgICAgICAgID8ge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTEsIHZhbGlkYXRvcjogY29sdW1uVmFsaWRhdG9yc1trZXldfVxuICAgICAgICAgIDoge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTF9XG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcbiAgICBjb25zdCBvcHRpb25hbCA9IHRoaXMub3B0aW9uYWxDb2x1bW5zLnJlZHVjZShcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiB7dmFsdWU6IG51bGwsIGZpZWxkSWR4OiAtMSwgb3B0aW9uYWw6IHRydWV9XG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcblxuICAgIHJldHVybiB7Li4ucmVxdWlyZWQsIC4uLm9wdGlvbmFsfTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyQ29uZmlnKG5ld0NvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gey4uLnRoaXMuY29uZmlnLCAuLi5uZXdDb25maWd9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJWaXNDb25maWcobmV3VmlzQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcudmlzQ29uZmlnID0gey4uLnRoaXMuY29uZmlnLnZpc0NvbmZpZywgLi4ubmV3VmlzQ29uZmlnfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZUxheWVyQ29sb3JVSShwcm9wLCBuZXdDb25maWcpIHtcbiAgICBjb25zdCB7Y29sb3JVSTogcHJldmlvdXMsIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcblxuICAgIGlmICghaXNQbGFpbk9iamVjdChuZXdDb25maWcpIHx8IHR5cGVvZiBwcm9wICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29uc3QgY29sb3JVSVByb3AgPSBPYmplY3QuZW50cmllcyhuZXdDb25maWcpLnJlZHVjZSgoYWNjdSwgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICBba2V5XTogaXNQbGFpbk9iamVjdChhY2N1W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsdWUpID8gey4uLmFjY3Vba2V5XSwgLi4udmFsdWV9IDogdmFsdWVcbiAgICAgIH07XG4gICAgfSwgcHJldmlvdXNbcHJvcF0gfHwgREVGQVVMVF9DT0xPUl9VSSk7XG5cbiAgICBjb25zdCBjb2xvclVJID0ge1xuICAgICAgLi4ucHJldmlvdXMsXG4gICAgICBbcHJvcF06IGNvbG9yVUlQcm9wXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe2NvbG9yVUl9KTtcbiAgICAvLyBpZiBjb2xvclVJW3Byb3BdIGlzIGNvbG9yUmFuZ2VcbiAgICBjb25zdCBpc0NvbG9yUmFuZ2UgPSB2aXNDb25maWdbcHJvcF0gJiYgdmlzQ29uZmlnW3Byb3BdLmNvbG9ycztcblxuICAgIGlmIChpc0NvbG9yUmFuZ2UpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sb3JVSUJ5Q29sb3JSYW5nZShuZXdDb25maWcsIHByb3ApO1xuICAgICAgdGhpcy51cGRhdGVDb2xvclJhbmdlQnlDb2xvclVJKG5ld0NvbmZpZywgcHJldmlvdXMsIHByb3ApO1xuICAgICAgdGhpcy51cGRhdGVDdXN0b21QYWxldHRlKG5ld0NvbmZpZywgcHJldmlvdXMsIHByb3ApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlQ3VzdG9tUGFsZXR0ZShuZXdDb25maWcsIHByZXZpb3VzLCBwcm9wKSB7XG4gICAgaWYgKCFuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZyB8fCAhbmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcuY3VzdG9tKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qge2NvbG9yVUksIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcblxuICAgIGlmICghdmlzQ29uZmlnW3Byb3BdKSByZXR1cm47XG4gICAgY29uc3Qge2NvbG9yc30gPSB2aXNDb25maWdbcHJvcF07XG4gICAgY29uc3QgY3VzdG9tUGFsZXR0ZSA9IHtcbiAgICAgIC4uLmNvbG9yVUlbcHJvcF0uY3VzdG9tUGFsZXR0ZSxcbiAgICAgIG5hbWU6ICdDdXN0b20gUGFsZXR0ZScsXG4gICAgICBjb2xvcnM6IFsuLi5jb2xvcnNdXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgIGNvbG9yVUk6IHtcbiAgICAgICAgLi4uY29sb3JVSSxcbiAgICAgICAgW3Byb3BdOiB7XG4gICAgICAgICAgLi4uY29sb3JVSVtwcm9wXSxcbiAgICAgICAgICBjdXN0b21QYWxldHRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogaWYgb3BlbiBkcm9wZG93biBhbmQgcHJvcCBpcyBjb2xvciByYW5nZVxuICAgKiBBdXRvbWF0aWNhbGx5IHNldCBjb2xvclJhbmdlQ29uZmlnJ3Mgc3RlcCBhbmQgcmV2ZXJzZWRcbiAgICogQHBhcmFtIHsqfSBuZXdDb25maWdcbiAgICogQHBhcmFtIHsqfSBwcm9wXG4gICAqL1xuICB1cGRhdGVDb2xvclVJQnlDb2xvclJhbmdlKG5ld0NvbmZpZywgcHJvcCkge1xuICAgIGlmICh0eXBlb2YgbmV3Q29uZmlnLnNob3dEcm9wZG93biAhPT0gJ251bWJlcicpIHJldHVybjtcblxuICAgIGNvbnN0IHtjb2xvclVJLCB2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7XG4gICAgICBjb2xvclVJOiB7XG4gICAgICAgIC4uLmNvbG9yVUksXG4gICAgICAgIFtwcm9wXToge1xuICAgICAgICAgIC4uLmNvbG9yVUlbcHJvcF0sXG4gICAgICAgICAgY29sb3JSYW5nZUNvbmZpZzoge1xuICAgICAgICAgICAgLi4uY29sb3JVSVtwcm9wXS5jb2xvclJhbmdlQ29uZmlnLFxuICAgICAgICAgICAgc3RlcHM6IHZpc0NvbmZpZ1twcm9wXS5jb2xvcnMubGVuZ3RoLFxuICAgICAgICAgICAgcmV2ZXJzZWQ6IEJvb2xlYW4odmlzQ29uZmlnW3Byb3BdLnJldmVyc2VkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQ29sb3JSYW5nZUJ5Q29sb3JVSShuZXdDb25maWcsIHByZXZpb3VzLCBwcm9wKSB7XG4gICAgLy8gb25seSB1cGRhdGUgY29sb3JSYW5nZSBpZiBjaGFuZ2VzIGluIFVJIGlzIG1hZGUgdG8gJ3JldmVyc2VkJywgJ3N0ZXBzJyBvciBzdGVwc1xuICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9XG4gICAgICBuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZyAmJlxuICAgICAgWydyZXZlcnNlZCcsICdzdGVwcyddLnNvbWUoXG4gICAgICAgIGtleSA9PlxuICAgICAgICAgIG5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnLmhhc093blByb3BlcnR5KGtleSkgJiZcbiAgICAgICAgICBuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZ1trZXldICE9PVxuICAgICAgICAgICAgKHByZXZpb3VzW3Byb3BdIHx8IERFRkFVTFRfQ09MT1JfVUkpLmNvbG9yUmFuZ2VDb25maWdba2V5XVxuICAgICAgKTtcbiAgICBpZiAoIXNob3VsZFVwZGF0ZSkgcmV0dXJuO1xuXG4gICAgY29uc3Qge2NvbG9yVUksIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCB7c3RlcHMsIHJldmVyc2VkfSA9IGNvbG9yVUlbcHJvcF0uY29sb3JSYW5nZUNvbmZpZztcbiAgICBjb25zdCBjb2xvclJhbmdlID0gdmlzQ29uZmlnW3Byb3BdO1xuICAgIC8vIGZpbmQgYmFzZWQgb24gc3RlcCBvciByZXZlcnNlZFxuICAgIGxldCB1cGRhdGU7XG4gICAgaWYgKG5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnLmhhc093blByb3BlcnR5KCdzdGVwcycpKSB7XG4gICAgICBjb25zdCBncm91cCA9IGdldENvbG9yR3JvdXBCeU5hbWUoY29sb3JSYW5nZSk7XG5cbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICBjb25zdCBzYW1lR3JvdXAgPSBDT0xPUl9SQU5HRVMuZmlsdGVyKGNyID0+IGdldENvbG9yR3JvdXBCeU5hbWUoY3IpID09PSBncm91cCk7XG5cbiAgICAgICAgdXBkYXRlID0gc2FtZUdyb3VwLmZpbmQoY3IgPT4gY3IuY29sb3JzLmxlbmd0aCA9PT0gc3RlcHMpO1xuXG4gICAgICAgIGlmICh1cGRhdGUgJiYgY29sb3JSYW5nZS5yZXZlcnNlZCkge1xuICAgICAgICAgIHVwZGF0ZSA9IHJldmVyc2VDb2xvclJhbmdlKHRydWUsIHVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcuaGFzT3duUHJvcGVydHkoJ3JldmVyc2VkJykpIHtcbiAgICAgIHVwZGF0ZSA9IHJldmVyc2VDb2xvclJhbmdlKHJldmVyc2VkLCB1cGRhdGUgfHwgY29sb3JSYW5nZSk7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVMYXllclZpc0NvbmZpZyh7W3Byb3BdOiB1cGRhdGV9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciBsYXllciBoYXMgYWxsIGNvbHVtbnNcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHllcyBvciBub1xuICAgKi9cbiAgaGFzQWxsQ29sdW1ucygpIHtcbiAgICBjb25zdCB7Y29sdW1uc30gPSB0aGlzLmNvbmZpZztcbiAgICByZXR1cm4gKFxuICAgICAgKGNvbHVtbnMgJiZcbiAgICAgIE9iamVjdC52YWx1ZXMoY29sdW1ucykuZXZlcnkodiA9PiB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHYub3B0aW9uYWwgfHwgKHYudmFsdWUgJiYgdi5maWVsZElkeCA+IC0xKSk7XG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgbGF5ZXIgaGFzIGRhdGFcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheSB8IE9iamVjdH0gbGF5ZXJEYXRhXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB5ZXMgb3Igbm9cbiAgICovXG4gIGhhc0xheWVyRGF0YShsYXllckRhdGEpIHtcbiAgICBpZiAoIWxheWVyRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gQm9vbGVhbihsYXllckRhdGEuZGF0YSAmJiBsYXllckRhdGEuZGF0YS5sZW5ndGgpO1xuICB9XG5cbiAgaXNWYWxpZFRvU2F2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlICYmIHRoaXMuaGFzQWxsQ29sdW1ucygpO1xuICB9XG5cbiAgc2hvdWxkUmVuZGVyTGF5ZXIoZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy50eXBlICYmXG4gICAgICB0aGlzLmNvbmZpZy5pc1Zpc2libGUgJiZcbiAgICAgIHRoaXMuaGFzQWxsQ29sdW1ucygpICYmXG4gICAgICB0aGlzLmhhc0xheWVyRGF0YShkYXRhKSAmJlxuICAgICAgdHlwZW9mIHRoaXMucmVuZGVyTGF5ZXIgPT09ICdmdW5jdGlvbicpXG4gICAgKTtcbiAgfVxuXG4gIGdldENvbG9yU2NhbGUoY29sb3JTY2FsZSwgY29sb3JEb21haW4sIGNvbG9yUmFuZ2UpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb2xvclJhbmdlLmNvbG9yTWFwKSkge1xuICAgICAgY29uc3QgY01hcCA9IG5ldyBNYXAoKTtcbiAgICAgIGNvbG9yUmFuZ2UuY29sb3JNYXAuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgICAgIGNNYXAuc2V0KGssIHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IGhleFRvUmdiKHYpIDogdik7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2NhbGUgPSBTQ0FMRV9GVU5DW1NDQUxFX1RZUEVTLm9yZGluYWxdKClcbiAgICAgICAgLmRvbWFpbihjTWFwLmtleXMoKSlcbiAgICAgICAgLnJhbmdlKGNNYXAudmFsdWVzKCkpXG4gICAgICAgIC51bmtub3duKGNNYXAuZ2V0KFVOS05PV05fQ09MT1JfS0VZKSB8fCBOT19WQUxVRV9DT0xPUik7XG4gICAgICByZXR1cm4gc2NhbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKGNvbG9yU2NhbGUsIGNvbG9yRG9tYWluLCBjb2xvclJhbmdlLmNvbG9ycy5tYXAoaGV4VG9SZ2IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXBwaW5nIGZyb20gdmlzdWFsIGNoYW5uZWxzIHRvIGRlY2suZ2wgYWNjZXNvcnNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGF0YUFjY2Vzc29yIC0gYWNjZXNzIGtlcGxlci5nbCBsYXllciBkYXRhIGZyb20gZGVjay5nbCBsYXllclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGF0dHJpYnV0ZUFjY2Vzc29ycyAtIGRlY2suZ2wgbGF5ZXIgYXR0cmlidXRlIGFjY2Vzc29yc1xuICAgKi9cbiAgZ2V0QXR0cmlidXRlQWNjZXNzb3JzKGRhdGFBY2Nlc3NvciA9IGRlZmF1bHREYXRhQWNjZXNzb3IpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVBY2Nlc3NvcnMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2goY2hhbm5lbCA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGZpZWxkLFxuICAgICAgICBmaXhlZCxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIGRvbWFpbixcbiAgICAgICAgcmFuZ2UsXG4gICAgICAgIGFjY2Vzc29yLFxuICAgICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICAgIGdldEF0dHJpYnV0ZVZhbHVlLFxuICAgICAgICBudWxsVmFsdWUsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGVcbiAgICAgIH0gPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuXG4gICAgICBjb25zdCBzaG91bGRHZXRTY2FsZSA9IHRoaXMuY29uZmlnW2ZpZWxkXTtcblxuICAgICAgaWYgKHNob3VsZEdldFNjYWxlKSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbdGhpcy5jb25maWdbc2NhbGVdLCB0aGlzLmNvbmZpZ1tkb21haW5dLCB0aGlzLmNvbmZpZy52aXNDb25maWdbcmFuZ2VdXTtcbiAgICAgICAgY29uc3QgaXNGaXhlZCA9IGZpeGVkICYmIHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tmaXhlZF07XG5cbiAgICAgICAgY29uc3Qgc2NhbGVGdW5jdGlvbiA9XG4gICAgICAgICAgY2hhbm5lbFNjYWxlVHlwZSA9PT0gQ0hBTk5FTF9TQ0FMRVMuY29sb3JcbiAgICAgICAgICAgID8gdGhpcy5nZXRDb2xvclNjYWxlKC4uLmFyZ3MpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKC4uLmFyZ3MsIGlzRml4ZWQpO1xuXG4gICAgICAgIGF0dHJpYnV0ZUFjY2Vzc29yc1thY2Nlc3Nvcl0gPSBkID0+XG4gICAgICAgICAgdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKFxuICAgICAgICAgICAgc2NhbGVGdW5jdGlvbixcbiAgICAgICAgICAgIGRhdGFBY2Nlc3NvcihkKSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXSxcbiAgICAgICAgICAgIG51bGxWYWx1ZVxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBnZXRBdHRyaWJ1dGVWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhdHRyaWJ1dGVBY2Nlc3NvcnNbYWNjZXNzb3JdID0gZ2V0QXR0cmlidXRlVmFsdWUodGhpcy5jb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRlQWNjZXNzb3JzW2FjY2Vzc29yXSA9XG4gICAgICAgICAgdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZykgOiBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghYXR0cmlidXRlQWNjZXNzb3JzW2FjY2Vzc29yXSkge1xuICAgICAgICBDb25zb2xlLndhcm4oYEZhaWxlZCB0byBwcm92aWRlIGFjY2Vzc28gZnVuY3Rpb24gZm9yICR7YWNjZXNzb3IgfHwgY2hhbm5lbH1gKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVBY2Nlc3NvcnM7XG4gIH1cblxuICBnZXRWaXNDaGFubmVsU2NhbGUoc2NhbGUsIGRvbWFpbiwgcmFuZ2UsIGZpeGVkKSB7XG4gICAgcmV0dXJuIFNDQUxFX0ZVTkNbZml4ZWQgPyAnbGluZWFyJyA6IHNjYWxlXSgpXG4gICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgIC5yYW5nZShmaXhlZCA/IGRvbWFpbiA6IHJhbmdlKTtcbiAgfVxuXG4gIGdldFBvaW50c0JvdW5kcyhhbGxEYXRhLCBnZXRQb3NpdGlvbiA9IGlkZW50aXR5KSB7XG4gICAgLy8gbm8gbmVlZCB0byBsb29wIHRocm91Z2ggdGhlIGVudGlyZSBkYXRhc2V0XG4gICAgLy8gZ2V0IGEgc2FtcGxlIG9mIGRhdGEgdG8gY2FsY3VsYXRlIGJvdW5kc1xuICAgIGNvbnN0IHNhbXBsZURhdGEgPVxuICAgICAgYWxsRGF0YS5sZW5ndGggPiBNQVhfU0FNUExFX1NJWkUgPyBnZXRTYW1wbGVEYXRhKGFsbERhdGEsIE1BWF9TQU1QTEVfU0laRSkgOiBhbGxEYXRhO1xuICAgIGNvbnN0IHBvaW50cyA9IHNhbXBsZURhdGEubWFwKGdldFBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGxhdEJvdW5kcyA9IGdldExhdExuZ0JvdW5kcyhwb2ludHMsIDEsIFstOTAsIDkwXSk7XG4gICAgY29uc3QgbG5nQm91bmRzID0gZ2V0TGF0TG5nQm91bmRzKHBvaW50cywgMCwgWy0xODAsIDE4MF0pO1xuXG4gICAgaWYgKCFsYXRCb3VuZHMgfHwgIWxuZ0JvdW5kcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtsbmdCb3VuZHNbMF0sIGxhdEJvdW5kc1swXSwgbG5nQm91bmRzWzFdLCBsYXRCb3VuZHNbMV1dO1xuICB9XG5cbiAgZ2V0Q2hhbmdlZFRyaWdnZXJzKGRhdGFVcGRhdGVUcmlnZ2Vycykge1xuICAgIGNvbnN0IHRyaWdnZXJDaGFuZ2VkID0gZGlmZlVwZGF0ZVRyaWdnZXJzKGRhdGFVcGRhdGVUcmlnZ2VycywgdGhpcy5fb2xkRGF0YVVwZGF0ZVRyaWdnZXJzKTtcbiAgICB0aGlzLl9vbGREYXRhVXBkYXRlVHJpZ2dlcnMgPSBkYXRhVXBkYXRlVHJpZ2dlcnM7XG5cbiAgICByZXR1cm4gdHJpZ2dlckNoYW5nZWQ7XG4gIH1cblxuICBnZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKFxuICAgIHNjYWxlLFxuICAgIGRhdGEsXG4gICAgZmllbGQsXG4gICAgbnVsbFZhbHVlID0gTk9fVkFMVUVfQ09MT1IsXG4gICAgZ2V0VmFsdWUgPSBkZWZhdWx0R2V0RmllbGRWYWx1ZVxuICApIHtcbiAgICBjb25zdCB7dHlwZX0gPSBmaWVsZDtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGZpZWxkLCBkYXRhKTtcblxuICAgIGlmICghbm90TnVsbG9yVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG51bGxWYWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XG4gICAgaWYgKHR5cGUgPT09IEFMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXApIHtcbiAgICAgIC8vIHNob3VsZG4ndCBuZWVkIHRvIGNvbnZlcnQgaGVyZVxuICAgICAgLy8gc2NhbGUgRnVuY3Rpb24gc2hvdWxkIHRha2UgY2FyZSBvZiBpdFxuICAgICAgYXR0cmlidXRlVmFsdWUgPSBzY2FsZShuZXcgRGF0ZSh2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHNjYWxlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vdE51bGxvclVuZGVmaW5lZChhdHRyaWJ1dGVWYWx1ZSkpIHtcbiAgICAgIGF0dHJpYnV0ZVZhbHVlID0gbnVsbFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIHVwZGF0ZU1ldGEobWV0YSkge1xuICAgIHRoaXMubWV0YSA9IHsuLi50aGlzLm1ldGEsIC4uLm1ldGF9O1xuICB9XG5cbiAgZ2V0RGF0YVVwZGF0ZVRyaWdnZXJzKHtmaWx0ZXJlZEluZGV4LCBpZH0pIHtcbiAgICBjb25zdCB7Y29sdW1uc30gPSB0aGlzLmNvbmZpZztcblxuICAgIHJldHVybiB7XG4gICAgICBnZXREYXRhOiB7ZGF0YXNldElkOiBpZCwgY29sdW1ucywgZmlsdGVyZWRJbmRleH0sXG4gICAgICBnZXRNZXRhOiB7ZGF0YXNldElkOiBpZCwgY29sdW1uc30sXG4gICAgICAuLi4odGhpcy5jb25maWcudGV4dExhYmVsIHx8IFtdKS5yZWR1Y2UoXG4gICAgICAgIChhY2N1LCB0bCwgaSkgPT4gKHtcbiAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgIFtgZ2V0TGFiZWxDaGFyYWN0ZXJTZXQtJHtpfWBdOiB0bC5maWVsZCA/IHRsLmZpZWxkLm5hbWUgOiBudWxsXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgIH07XG4gIH1cblxuICB1cGRhdGVEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmRhdGFJZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBsYXllckRhdGFzZXQgPSBkYXRhc2V0c1t0aGlzLmNvbmZpZy5kYXRhSWRdO1xuICAgIGNvbnN0IHthbGxEYXRhfSA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XG5cbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xuICAgIGNvbnN0IGRhdGFVcGRhdGVUcmlnZ2VycyA9IHRoaXMuZ2V0RGF0YVVwZGF0ZVRyaWdnZXJzKGxheWVyRGF0YXNldCk7XG4gICAgY29uc3QgdHJpZ2dlckNoYW5nZWQgPSB0aGlzLmdldENoYW5nZWRUcmlnZ2VycyhkYXRhVXBkYXRlVHJpZ2dlcnMpO1xuXG4gICAgaWYgKHRyaWdnZXJDaGFuZ2VkLmdldE1ldGEpIHtcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEsIGdldFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuXG4gICAgaWYgKCF0cmlnZ2VyQ2hhbmdlZC5nZXREYXRhICYmIG9sZExheWVyRGF0YSAmJiBvbGRMYXllckRhdGEuZGF0YSkge1xuICAgICAgLy8gc2FtZSBkYXRhXG4gICAgICBkYXRhID0gb2xkTGF5ZXJEYXRhLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0aGlzLmNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUobGF5ZXJEYXRhc2V0LCBnZXRQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtkYXRhLCB0cmlnZ2VyQ2hhbmdlZH07XG4gIH1cbiAgLyoqXG4gICAqIGhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgb25lIGxheWVyIGRvbWFpbiB3aGVuIHN0YXRlLmRhdGEgY2hhbmdlZFxuICAgKiBpZiBzdGF0ZS5kYXRhIGNoYW5nZSBpcyBkdWUgb3QgdXBkYXRlIGZpbHRlciwgbmV3RmlsZXIgd2lsbCBiZSBwYXNzZWRcbiAgICogY2FsbGVkIGJ5IHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YXNldHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG5ld0ZpbHRlclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBsYXllclxuICAgKi9cbiAgdXBkYXRlTGF5ZXJEb21haW4oZGF0YXNldHMsIG5ld0ZpbHRlcikge1xuICAgIGNvbnN0IHRhYmxlID0gdGhpcy5nZXREYXRhc2V0KGRhdGFzZXRzKTtcbiAgICBpZiAoIXRhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5mb3JFYWNoKGNoYW5uZWwgPT4ge1xuICAgICAgY29uc3Qge3NjYWxlfSA9IGNoYW5uZWw7XG4gICAgICBjb25zdCBzY2FsZVR5cGUgPSB0aGlzLmNvbmZpZ1tzY2FsZV07XG4gICAgICAvLyBvcmRpbmFsIGRvbWFpbiBpcyBiYXNlZCBvbiBhbGxEYXRhLCBpZiBvbmx5IGZpbHRlciBjaGFuZ2VkXG4gICAgICAvLyBubyBuZWVkIHRvIHVwZGF0ZSBvcmRpbmFsIGRvbWFpblxuICAgICAgaWYgKCFuZXdGaWx0ZXIgfHwgc2NhbGVUeXBlICE9PSBTQ0FMRV9UWVBFUy5vcmRpbmFsKSB7XG4gICAgICAgIGNvbnN0IHtkb21haW59ID0gY2hhbm5lbDtcbiAgICAgICAgY29uc3QgdXBkYXRlZERvbWFpbiA9IHRoaXMuY2FsY3VsYXRlTGF5ZXJEb21haW4odGFibGUsIGNoYW5uZWwpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbZG9tYWluXTogdXBkYXRlZERvbWFpbn0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXREYXRhc2V0KGRhdGFzZXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmRhdGFJZCA/IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHZpc3VhbCBjaGFubmVsIGZpZWxkIGFuZCBzY2FsZXMgYmFzZWQgb24gc3VwcG9ydGVkIGZpZWxkICYgc2NhbGUgdHlwZVxuICAgKiBAcGFyYW0gY2hhbm5lbFxuICAgKi9cbiAgdmFsaWRhdGVWaXN1YWxDaGFubmVsKGNoYW5uZWwpIHtcbiAgICB0aGlzLnZhbGlkYXRlRmllbGRUeXBlKGNoYW5uZWwpO1xuICAgIHRoaXMudmFsaWRhdGVTY2FsZShjaGFubmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSBmaWVsZCB0eXBlIGJhc2VkIG9uIGNoYW5uZWxTY2FsZVR5cGVcbiAgICovXG4gIHZhbGlkYXRlRmllbGRUeXBlKGNoYW5uZWwpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcbiAgICBjb25zdCB7ZmllbGQsIGNoYW5uZWxTY2FsZVR5cGUsIHN1cHBvcnRlZEZpZWxkVHlwZXN9ID0gdmlzdWFsQ2hhbm5lbDtcblxuICAgIGlmICh0aGlzLmNvbmZpZ1tmaWVsZF0pIHtcbiAgICAgIC8vIGlmIGZpZWxkIGlzIHNlbGVjdGVkLCBjaGVjayBpZiBmaWVsZCB0eXBlIGlzIHN1cHBvcnRlZFxuICAgICAgY29uc3QgY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMgPVxuICAgICAgICBzdXBwb3J0ZWRGaWVsZFR5cGVzIHx8IENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEU1tjaGFubmVsU2NhbGVUeXBlXTtcblxuICAgICAgaWYgKCFjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcy5pbmNsdWRlcyh0aGlzLmNvbmZpZ1tmaWVsZF0udHlwZSkpIHtcbiAgICAgICAgLy8gZmllbGQgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLCBzZXQgaXQgYmFjayB0byBudWxsXG4gICAgICAgIC8vIHNldCBzY2FsZSBiYWNrIHRvIGRlZmF1bHRcbiAgICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7W2ZpZWxkXTogbnVsbH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSBzY2FsZSB0eXBlIGJhc2VkIG9uIGFnZ3JlZ2F0aW9uXG4gICAqL1xuICB2YWxpZGF0ZVNjYWxlKGNoYW5uZWwpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcbiAgICBjb25zdCB7c2NhbGV9ID0gdmlzdWFsQ2hhbm5lbDtcbiAgICBpZiAoIXNjYWxlKSB7XG4gICAgICAvLyB2aXN1YWxDaGFubmVsIGRvZXNuJ3QgaGF2ZSBzY2FsZVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzY2FsZU9wdGlvbnMgPSB0aGlzLmdldFNjYWxlT3B0aW9ucyhjaGFubmVsKTtcbiAgICAvLyBjaGVjayBpZiBjdXJyZW50IHNlbGVjdGVkIHNjYWxlIGlzXG4gICAgLy8gc3VwcG9ydGVkLCBpZiBub3QsIGNoYW5nZSB0byBkZWZhdWx0XG4gICAgaWYgKCFzY2FsZU9wdGlvbnMuaW5jbHVkZXModGhpcy5jb25maWdbc2NhbGVdKSkge1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7W3NjYWxlXTogc2NhbGVPcHRpb25zWzBdfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzY2FsZSBvcHRpb25zIGJhc2VkIG9uIGN1cnJlbnQgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWxcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgZ2V0U2NhbGVPcHRpb25zKGNoYW5uZWwpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVsID0gdGhpcy52aXN1YWxDaGFubmVsc1tjaGFubmVsXTtcbiAgICBjb25zdCB7ZmllbGQsIHNjYWxlLCBjaGFubmVsU2NhbGVUeXBlfSA9IHZpc3VhbENoYW5uZWw7XG5cbiAgICByZXR1cm4gdGhpcy5jb25maWdbZmllbGRdXG4gICAgICA/IEZJRUxEX09QVFNbdGhpcy5jb25maWdbZmllbGRdLnR5cGVdLnNjYWxlW2NoYW5uZWxTY2FsZVR5cGVdXG4gICAgICA6IFt0aGlzLmdldERlZmF1bHRMYXllckNvbmZpZygpW3NjYWxlXV07XG4gIH1cblxuICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWwoZGF0YXNldCwgY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIHRoaXMudmFsaWRhdGVWaXN1YWxDaGFubmVsKGNoYW5uZWwpO1xuICAgIC8vIGNhbGN1bGF0ZSBsYXllciBjaGFubmVsIGRvbWFpblxuICAgIGNvbnN0IHVwZGF0ZWREb21haW4gPSB0aGlzLmNhbGN1bGF0ZUxheWVyRG9tYWluKGRhdGFzZXQsIHZpc3VhbENoYW5uZWwpO1xuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1t2aXN1YWxDaGFubmVsLmRvbWFpbl06IHVwZGF0ZWREb21haW59KTtcbiAgfVxuXG4gIGdldFZpc3VhbENoYW5uZWxVcGRhdGVUcmlnZ2VycygpIHtcbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHt9O1xuICAgIE9iamVjdC52YWx1ZXModGhpcy52aXN1YWxDaGFubmVscykuZm9yRWFjaCh2aXN1YWxDaGFubmVsID0+IHtcbiAgICAgIC8vIGZpZWxkIHJhbmdlIHNjYWxlIGRvbWFpblxuICAgICAgY29uc3Qge2FjY2Vzc29yLCBmaWVsZCwgc2NhbGUsIGRvbWFpbiwgcmFuZ2UsIGRlZmF1bHRWYWx1ZSwgZml4ZWR9ID0gdmlzdWFsQ2hhbm5lbDtcblxuICAgICAgdXBkYXRlVHJpZ2dlcnNbYWNjZXNzb3JdID0ge1xuICAgICAgICBbZmllbGRdOiB0aGlzLmNvbmZpZ1tmaWVsZF0sXG4gICAgICAgIFtzY2FsZV06IHRoaXMuY29uZmlnW3NjYWxlXSxcbiAgICAgICAgW2RvbWFpbl06IHRoaXMuY29uZmlnW2RvbWFpbl0sXG4gICAgICAgIFtyYW5nZV06IHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tyYW5nZV0sXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRWYWx1ZSh0aGlzLmNvbmZpZykgOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgIC4uLihmaXhlZCA/IHtbZml4ZWRdOiB0aGlzLmNvbmZpZy52aXNDb25maWdbZml4ZWRdfSA6IHt9KVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gdXBkYXRlVHJpZ2dlcnM7XG4gIH1cblxuICBjYWxjdWxhdGVMYXllckRvbWFpbihkYXRhc2V0LCB2aXN1YWxDaGFubmVsKSB7XG4gICAgY29uc3Qge3NjYWxlfSA9IHZpc3VhbENoYW5uZWw7XG4gICAgY29uc3Qgc2NhbGVUeXBlID0gdGhpcy5jb25maWdbc2NhbGVdO1xuXG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmNvbmZpZ1t2aXN1YWxDaGFubmVsLmZpZWxkXTtcbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICAvLyBpZiBjb2xvckZpZWxkIG9yIHNpemVGaWVsZCB3ZXJlIHNldCBiYWNrIHRvIG51bGxcbiAgICAgIHJldHVybiBkZWZhdWx0RG9tYWluO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhc2V0LmdldENvbHVtbkxheWVyRG9tYWluKGZpZWxkLCBzY2FsZVR5cGUpIHx8IGRlZmF1bHREb21haW47XG4gIH1cblxuICBoYXNIb3ZlcmVkT2JqZWN0KG9iamVjdEluZm8pIHtcbiAgICByZXR1cm4gdGhpcy5pc0xheWVySG92ZXJlZChvYmplY3RJbmZvKSAmJiBvYmplY3RJbmZvLm9iamVjdCA/IG9iamVjdEluZm8ub2JqZWN0IDogbnVsbDtcbiAgfVxuXG4gIGlzTGF5ZXJIb3ZlcmVkKG9iamVjdEluZm8pIHtcbiAgICByZXR1cm4gb2JqZWN0SW5mbz8ucGlja2VkICYmIG9iamVjdEluZm8/LmxheWVyPy5wcm9wcz8uaWQgPT09IHRoaXMuaWQ7XG4gIH1cblxuICBnZXRSYWRpdXNTY2FsZUJ5Wm9vbShtYXBTdGF0ZSwgZml4ZWRSYWRpdXMpIHtcbiAgICBjb25zdCByYWRpdXNDaGFubmVsID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5maW5kKHZjID0+IHZjLnByb3BlcnR5ID09PSAncmFkaXVzJyk7XG5cbiAgICBpZiAoIXJhZGl1c0NoYW5uZWwpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkID0gcmFkaXVzQ2hhbm5lbC5maWVsZDtcbiAgICBjb25zdCBmaXhlZCA9IGZpeGVkUmFkaXVzID09PSB1bmRlZmluZWQgPyB0aGlzLmNvbmZpZy52aXNDb25maWcuZml4ZWRSYWRpdXMgOiBmaXhlZFJhZGl1cztcbiAgICBjb25zdCB7cmFkaXVzfSA9IHRoaXMuY29uZmlnLnZpc0NvbmZpZztcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gZml4ZWQgPyAxIDogKHRoaXMuY29uZmlnW2ZpZWxkXSA/IDEgOiByYWRpdXMpICogdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcbiAgfVxuXG4gIHNob3VsZENhbGN1bGF0ZUxheWVyRGF0YShwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5zb21lKHAgPT4gIXRoaXMubm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzLmluY2x1ZGVzKHApKTtcbiAgfVxuXG4gIGdldEJydXNoaW5nRXh0ZW5zaW9uUHJvcHMoaW50ZXJhY3Rpb25Db25maWcsIGJydXNoaW5nVGFyZ2V0KSB7XG4gICAgY29uc3Qge2JydXNofSA9IGludGVyYWN0aW9uQ29uZmlnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGJydXNoaW5nXG4gICAgICBhdXRvSGlnaGxpZ2h0OiAhYnJ1c2guZW5hYmxlZCxcbiAgICAgIGJydXNoaW5nUmFkaXVzOiBicnVzaC5jb25maWcuc2l6ZSAqIDEwMDAsXG4gICAgICBicnVzaGluZ1RhcmdldDogYnJ1c2hpbmdUYXJnZXQgfHwgJ3NvdXJjZScsXG4gICAgICBicnVzaGluZ0VuYWJsZWQ6IGJydXNoLmVuYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKHtpZHgsIGdwdUZpbHRlciwgbWFwU3RhdGV9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgaWR4LFxuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogQ09PUkRJTkFURV9TWVNURU0uTE5HTEFULFxuICAgICAgcGlja2FibGU6IHRydWUsXG4gICAgICB3cmFwTG9uZ2l0dWRlOiB0cnVlLFxuICAgICAgcGFyYW1ldGVyczoge2RlcHRoVGVzdDogQm9vbGVhbihtYXBTdGF0ZS5kcmFnUm90YXRlIHx8IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5lbmFibGUzZCl9LFxuICAgICAgaGlkZGVuOiB0aGlzLmNvbmZpZy5oaWRkZW4sXG4gICAgICAvLyB2aXNjb25maWdcbiAgICAgIG9wYWNpdHk6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5vcGFjaXR5LFxuICAgICAgaGlnaGxpZ2h0Q29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgLy8gZGF0YSBmaWx0ZXJpbmdcbiAgICAgIGV4dGVuc2lvbnM6IFtkYXRhRmlsdGVyRXh0ZW5zaW9uXSxcbiAgICAgIGZpbHRlclJhbmdlOiBncHVGaWx0ZXIgPyBncHVGaWx0ZXIuZmlsdGVyUmFuZ2UgOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGAke3RoaXMuaWR9LWhvdmVyZWRgLFxuICAgICAgcGlja2FibGU6IGZhbHNlLFxuICAgICAgd3JhcExvbmdpdHVkZTogdHJ1ZSxcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IENPT1JESU5BVEVfU1lTVEVNLkxOR0xBVFxuICAgIH07XG4gIH1cblxuICByZW5kZXJUZXh0TGFiZWxMYXllcih7Z2V0UG9zaXRpb24sIGdldFBpeGVsT2Zmc2V0LCB1cGRhdGVUcmlnZ2Vycywgc2hhcmVkUHJvcHN9LCByZW5kZXJPcHRzKSB7XG4gICAgY29uc3Qge2RhdGEsIG1hcFN0YXRlfSA9IHJlbmRlck9wdHM7XG4gICAgY29uc3Qge3RleHRMYWJlbH0gPSB0aGlzLmNvbmZpZztcblxuICAgIHJldHVybiBkYXRhLnRleHRMYWJlbHMucmVkdWNlKChhY2N1LCBkLCBpKSA9PiB7XG4gICAgICBpZiAoZC5nZXRUZXh0KSB7XG4gICAgICAgIGFjY3UucHVzaChcbiAgICAgICAgICBuZXcgVGV4dExheWVyKHtcbiAgICAgICAgICAgIC4uLnNoYXJlZFByb3BzLFxuICAgICAgICAgICAgaWQ6IGAke3RoaXMuaWR9LWxhYmVsLSR7dGV4dExhYmVsW2ldLmZpZWxkPy5uYW1lfWAsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXG4gICAgICAgICAgICBnZXRUZXh0OiBkLmdldFRleHQsXG4gICAgICAgICAgICBnZXRQb3NpdGlvbixcbiAgICAgICAgICAgIGNoYXJhY3RlclNldDogZC5jaGFyYWN0ZXJTZXQsXG4gICAgICAgICAgICBnZXRQaXhlbE9mZnNldDogZ2V0UGl4ZWxPZmZzZXQodGV4dExhYmVsW2ldKSxcbiAgICAgICAgICAgIGdldFNpemU6IDEsXG4gICAgICAgICAgICBzaXplU2NhbGU6IHRleHRMYWJlbFtpXS5zaXplLFxuICAgICAgICAgICAgZ2V0VGV4dEFuY2hvcjogdGV4dExhYmVsW2ldLmFuY2hvcixcbiAgICAgICAgICAgIGdldEFsaWdubWVudEJhc2VsaW5lOiB0ZXh0TGFiZWxbaV0uYWxpZ25tZW50LFxuICAgICAgICAgICAgZ2V0Q29sb3I6IHRleHRMYWJlbFtpXS5jb2xvcixcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICAgLy8gdGV4dCB3aWxsIGFsd2F5cyBzaG93IG9uIHRvcCBvZiBhbGwgbGF5ZXJzXG4gICAgICAgICAgICAgIGRlcHRoVGVzdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEZpbHRlclZhbHVlOiBkYXRhLmdldEZpbHRlclZhbHVlLFxuICAgICAgICAgICAgdXBkYXRlVHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgLi4udXBkYXRlVHJpZ2dlcnMsXG4gICAgICAgICAgICAgIGdldFRleHQ6IHRleHRMYWJlbFtpXS5maWVsZD8ubmFtZSxcbiAgICAgICAgICAgICAgZ2V0UGl4ZWxPZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICAuLi51cGRhdGVUcmlnZ2Vycy5nZXRSYWRpdXMsXG4gICAgICAgICAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgICAgICAgICAgYW5jaG9yOiB0ZXh0TGFiZWxbaV0uYW5jaG9yLFxuICAgICAgICAgICAgICAgIGFsaWdubWVudDogdGV4dExhYmVsW2ldLmFsaWdubWVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBnZXRUZXh0QW5jaG9yOiB0ZXh0TGFiZWxbaV0uYW5jaG9yLFxuICAgICAgICAgICAgICBnZXRBbGlnbm1lbnRCYXNlbGluZTogdGV4dExhYmVsW2ldLmFsaWdubWVudCxcbiAgICAgICAgICAgICAgZ2V0Q29sb3I6IHRleHRMYWJlbFtpXS5jb2xvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBjYWxjdWxhdGVEYXRhQXR0cmlidXRlKGRhdGFzZXQsIGdldFBvc2l0aW9uKSB7XG4gICAgLy8gaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRQb3NpdGlvbikge1xuICAgIC8vIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcbiAgfVxuXG4gIGdldFBvc2l0aW9uQWNjZXNzb3IoKSB7XG4gICAgLy8gaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICAgIHJldHVybiAoKSA9PiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyO1xuIl19