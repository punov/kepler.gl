"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LayerConfiguratorFactory;
exports.ChannelByValueSelectorFactory = ChannelByValueSelectorFactory;
exports.AggregationTypeSelector = exports.AggrScaleSelector = exports.LayerColorRangeSelector = exports.ArcLayerColorSelector = exports.LayerColorSelector = exports.HowToButton = exports.getLayerChannelConfigProps = exports.getVisConfiguratorProps = exports.getLayerConfiguratorProps = exports.getLayerDataset = exports.getLayerFields = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../../localization");

var _styledComponents2 = require("../../common/styled-components");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _visConfigByFieldSelector = _interopRequireDefault(require("./vis-config-by-field-selector"));

var _layerColumnConfig = _interopRequireDefault(require("./layer-column-config"));

var _layerTypeSelector = _interopRequireDefault(require("./layer-type-selector"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _sourceDataSelector = _interopRequireDefault(require("../common/source-data-selector"));

var _visConfigSwitch = _interopRequireDefault(require("./vis-config-switch"));

var _visConfigSlider = _interopRequireDefault(require("./vis-config-slider"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _textLabelPanel = _interopRequireDefault(require("./text-label-panel"));

var _utils = require("../../../utils/utils");

var _defaultSettings = require("../../../constants/default-settings");

var _types = require("../../../layers/types");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledLayerConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-top: ", ";\n  padding: ", ";\n  border-left: ", " dashed\n    ", ";\n"])), function (props) {
  return props.theme.layerConfiguratorMargin;
}, function (props) {
  return props.theme.layerConfiguratorPadding;
}, function (props) {
  return props.theme.layerConfiguratorBorder;
}, function (props) {
  return props.theme.layerConfiguratorBorderColor;
});

var StyledLayerVisualConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config__visualC-config'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 12px;\n"])));

var getLayerFields = function getLayerFields(datasets, layer) {
  return layer.config && datasets[layer.config.dataId] ? datasets[layer.config.dataId].fields : [];
};

exports.getLayerFields = getLayerFields;

var getLayerDataset = function getLayerDataset(datasets, layer) {
  return layer.config && datasets[layer.config.dataId] ? datasets[layer.config.dataId] : null;
};

exports.getLayerDataset = getLayerDataset;

var getLayerConfiguratorProps = function getLayerConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getLayerConfiguratorProps = getLayerConfiguratorProps;

var getVisConfiguratorProps = function getVisConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getVisConfiguratorProps = getVisConfiguratorProps;

var getLayerChannelConfigProps = function getLayerChannelConfigProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisualChannelConfig
  };
};

exports.getLayerChannelConfigProps = getLayerChannelConfigProps;
LayerConfiguratorFactory.deps = [_sourceDataSelector["default"], _visConfigSlider["default"], _textLabelPanel["default"], _layerConfigGroup["default"], ChannelByValueSelectorFactory, _layerColumnConfig["default"], _layerTypeSelector["default"], _visConfigSwitch["default"]];

function LayerConfiguratorFactory(SourceDataSelector, VisConfigSlider, TextLabelPanel, LayerConfigGroup, ChannelByValueSelector, LayerColumnConfig, LayerTypeSelector, VisConfigSwitch) {
  var LayerConfigurator = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerConfigurator, _Component);

    var _super = _createSuper(LayerConfigurator);

    function LayerConfigurator() {
      (0, _classCallCheck2["default"])(this, LayerConfigurator);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(LayerConfigurator, [{
      key: "_renderPointLayerConfig",
      value: function _renderPointLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderIconLayerConfig",
      value: function _renderIconLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderScatterplotLayerConfig",
      value: function _renderScatterplotLayerConfig(_ref) {
        var layer = _ref.layer,
            visConfiguratorProps = _ref.visConfiguratorProps,
            layerChannelConfigProps = _ref.layerChannelConfigProps,
            layerConfiguratorProps = _ref.layerConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled || {
          label: 'layer.color'
        }, visConfiguratorProps, {
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), layer.type === _types.LAYER_TYPES.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.outline, visConfiguratorProps, {
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          disabled: !layer.config.visConfig.outline
        })))) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, !layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.sizeField)
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.sizeField || layer.config.visConfig.fixedRadius
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.fixedRadius, visConfiguratorProps)) : null)), /*#__PURE__*/_react["default"].createElement(TextLabelPanel, {
          fields: visConfiguratorProps.fields,
          updateLayerTextLabel: this.props.updateLayerTextLabel,
          textLabel: layer.config.textLabel,
          colorPalette: visConfiguratorProps.colorPalette,
          setColorPaletteUI: visConfiguratorProps.setColorPaletteUI
        }));
      }
    }, {
      key: "_renderClusterLayerConfig",
      value: function _renderClusterLayerConfig(_ref2) {
        var layer = _ref2.layer,
            visConfiguratorProps = _ref2.visConfiguratorProps,
            layerConfiguratorProps = _ref2.layerConfiguratorProps,
            layerChannelConfigProps = _ref2.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.color
        })) : null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.clusterRadius, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps)))));
      }
    }, {
      key: "_renderHeatmapLayerConfig",
      value: function _renderHeatmapLayerConfig(_ref3) {
        var layer = _ref3.layer,
            visConfiguratorProps = _ref3.visConfiguratorProps,
            layerConfiguratorProps = _ref3.layerConfiguratorProps,
            layerChannelConfigProps = _ref3.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius'
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false
        }))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.weight'
        }, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.weight
        }, layerChannelConfigProps))));
      }
    }, {
      key: "_renderGridLayerConfig",
      value: function _renderGridLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderHexagonLayerConfig",
      value: function _renderHexagonLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderAggregationLayerConfig",
      value: function _renderAggregationLayerConfig(_ref4) {
        var layer = _ref4.layer,
            visConfiguratorProps = _ref4.visConfiguratorProps,
            layerConfiguratorProps = _ref4.layerConfiguratorProps,
            layerChannelConfigProps = _ref4.layerChannelConfigProps;
        var config = layer.config;
        var enable3d = config.visConfig.enable3d;
        var elevationByDescription = 'layer.elevationByDescription';
        var colorByDescription = 'layer.colorByDescription';
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          description: colorByDescription,
          channel: layer.visualChannels.color
        })) : null, layer.visConfigSettings.percentile && layer.visConfigSettings.percentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.percentile, visConfiguratorProps)) : null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.worldUnitSize, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps)))), layer.visConfigSettings.enable3d ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.size
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({}, layerChannelConfigProps, {
          channel: layer.visualChannels.size,
          description: elevationByDescription,
          disabled: !enable3d
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.enableElevationZoomFactor, visConfiguratorProps)), layer.visConfigSettings.sizeAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.sizeAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.size
        })) : null, layer.visConfigSettings.elevationPercentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationPercentile, visConfiguratorProps)) : null)) : null);
      } // TODO: Shan move these into layer class

    }, {
      key: "_renderHexagonIdLayerConfig",
      value: function _renderHexagonIdLayerConfig(_ref5) {
        var layer = _ref5.layer,
            visConfiguratorProps = _ref5.visConfiguratorProps,
            layerConfiguratorProps = _ref5.layerConfiguratorProps,
            layerChannelConfigProps = _ref5.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.coverage',
          collapsible: true
        }, !layer.config.coverageField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverageRange, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.coverage
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.enableElevationZoomFactor, visConfiguratorProps)))));
      }
    }, {
      key: "_renderArcLayerConfig",
      value: function _renderArcLayerConfig(args) {
        return this._renderLineLayerConfig(args);
      }
    }, {
      key: "_renderLineLayerConfig",
      value: function _renderLineLayerConfig(_ref6) {
        var layer = _ref6.layer,
            visConfiguratorProps = _ref6.visConfiguratorProps,
            layerConfiguratorProps = _ref6.layerConfiguratorProps,
            layerChannelConfigProps = _ref6.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(ArcLayerColorSelector, {
          layer: layer,
          setColorUI: layerConfiguratorProps.setColorUI,
          onChangeConfig: layerConfiguratorProps.onChange,
          onChangeVisConfig: visConfiguratorProps.onChange
        }), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.sourceColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.stroke',
          collapsible: true
        }, layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          disabled: !layer.config.sizeField,
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), layer.visConfigSettings.elevationScale ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: "layerVisConfigs.elevationScale",
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps))) : null);
      }
    }, {
      key: "_renderTripLayerConfig",
      value: function _renderTripLayerConfig(_ref7) {
        var layer = _ref7.layer,
            visConfiguratorProps = _ref7.visConfiguratorProps,
            layerConfiguratorProps = _ref7.layerConfiguratorProps,
            layerChannelConfigProps = _ref7.layerChannelConfigProps;
        var _layer$meta$featureTy = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy === void 0 ? {} : _layer$meta$featureTy;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "layer.trailLength",
          description: "layer.trailLengthDescription"
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.trailLength, visConfiguratorProps, {
          label: false
        }))));
      }
    }, {
      key: "_renderGeojsonLayerConfig",
      value: function _renderGeojsonLayerConfig(_ref8) {
        var layer = _ref8.layer,
            visConfiguratorProps = _ref8.visConfiguratorProps,
            layerConfiguratorProps = _ref8.layerConfiguratorProps,
            layerChannelConfigProps = _ref8.layerChannelConfigProps;
        var _layer$meta$featureTy2 = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy2 === void 0 ? {} : _layer$meta$featureTy2,
            visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, featureTypes.polygon || featureTypes.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "layer.fillColor",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "layer.strokeColor",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.strokeOpacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), featureTypes.polygon ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.enableElevationZoomFactor, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))) : null, featureTypes.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, !layer.config.radiusField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.radiusField)
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.radiusField
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.radius
        }, layerChannelConfigProps)))) : null);
      }
    }, {
      key: "_render3DLayerConfig",
      value: function _render3DLayerConfig(_ref9) {
        var layer = _ref9.layer,
            visConfiguratorProps = _ref9.visConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.3DModel',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Input, {
          type: "file",
          accept: ".glb,.gltf",
          onChange: function onChange(e) {
            if (e.target.files && e.target.files[0]) {
              var url = URL.createObjectURL(e.target.files[0]);
              visConfiguratorProps.onChange({
                scenegraph: url
              });
            }
          }
        })), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.3DModelOptions',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeScale, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleX, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleY, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleZ, visConfiguratorProps, {
          disabled: false
        }))));
      }
    }, {
      key: "_renderS2LayerConfig",
      value: function _renderS2LayerConfig(_ref10) {
        var layer = _ref10.layer,
            visConfiguratorProps = _ref10.visConfiguratorProps,
            layerConfiguratorProps = _ref10.layerConfiguratorProps,
            layerChannelConfigProps = _ref10.layerChannelConfigProps;
        var visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "layer.fillColor",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "layer.strokeColor",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: "layerVisConfigs.elevationScale"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.heightRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.enableElevationZoomFactor, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))));
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            layer = _this$props.layer,
            datasets = _this$props.datasets,
            updateLayerConfig = _this$props.updateLayerConfig,
            layerTypeOptions = _this$props.layerTypeOptions,
            updateLayerType = _this$props.updateLayerType;

        var _ref11 = layer.config.dataId ? datasets[layer.config.dataId] : {},
            _ref11$fields = _ref11.fields,
            fields = _ref11$fields === void 0 ? [] : _ref11$fields,
            _ref11$fieldPairs = _ref11.fieldPairs,
            fieldPairs = _ref11$fieldPairs === void 0 ? undefined : _ref11$fieldPairs;

        var config = layer.config;
        var visConfiguratorProps = getVisConfiguratorProps(this.props);
        var layerConfiguratorProps = getLayerConfiguratorProps(this.props);
        var layerChannelConfigProps = getLayerChannelConfigProps(this.props);
        var dataset = getLayerDataset(datasets, layer);
        var renderTemplate = layer.type && "_render".concat((0, _utils.capitalizeFirstLetter)(layer.type), "LayerConfig");
        return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigurator, null, layer.layerInfoModal ? /*#__PURE__*/_react["default"].createElement(HowToButton, {
          onClick: function onClick() {
            return _this.props.openModal(layer.layerInfoModal);
          }
        }) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.basic',
          collapsible: true,
          expanded: !layer.hasAllColumns()
        }, /*#__PURE__*/_react["default"].createElement(LayerTypeSelector, {
          datasets: datasets,
          layer: layer,
          layerTypeOptions: layerTypeOptions,
          onSelect: updateLayerType
        }), Object.keys(datasets).length > 1 && /*#__PURE__*/_react["default"].createElement(SourceDataSelector, {
          datasets: datasets,
          id: layer.id,
          dataId: config.dataId,
          onSelect: function onSelect(value) {
            return updateLayerConfig({
              dataId: value
            });
          }
        }), /*#__PURE__*/_react["default"].createElement(LayerColumnConfig, {
          columnPairs: layer.columnPairs,
          columns: layer.config.columns,
          assignColumnPairs: layer.assignColumnPairs.bind(layer),
          assignColumn: layer.assignColumn.bind(layer),
          columnLabels: layer.columnLabels,
          fields: fields,
          fieldPairs: fieldPairs,
          updateLayerConfig: updateLayerConfig,
          updateLayerType: this.props.updateLayerType
        })), this[renderTemplate] && this[renderTemplate]({
          layer: layer,
          dataset: dataset,
          visConfiguratorProps: visConfiguratorProps,
          layerChannelConfigProps: layerChannelConfigProps,
          layerConfiguratorProps: layerConfiguratorProps
        }));
      }
    }]);
    return LayerConfigurator;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerConfigurator, "propTypes", {
    layer: _propTypes["default"].object.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    openModal: _propTypes["default"].func.isRequired,
    updateLayerConfig: _propTypes["default"].func.isRequired,
    updateLayerType: _propTypes["default"].func.isRequired,
    updateLayerVisConfig: _propTypes["default"].func.isRequired,
    updateLayerVisualChannelConfig: _propTypes["default"].func.isRequired,
    updateLayerColorUI: _propTypes["default"].func.isRequired
  });
  return LayerConfigurator;
}
/*
 * Componentize config component into pure functional components
 */


var StyledHowToButton = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 12px;\n  top: -4px;\n"])));

var HowToButton = function HowToButton(_ref12) {
  var onClick = _ref12.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledHowToButton, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    link: true,
    small: true,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'layerConfiguration.howTo'
  })));
};

exports.HowToButton = HowToButton;

var LayerColorSelector = function LayerColorSelector(_ref13) {
  var layer = _ref13.layer,
      onChange = _ref13.onChange,
      label = _ref13.label,
      selectedColor = _ref13.selectedColor,
      _ref13$property = _ref13.property,
      property = _ref13$property === void 0 ? 'color' : _ref13$property,
      _setColorUI = _ref13.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: selectedColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChange((0, _defineProperty2["default"])({}, property, rgbValue));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI(property, newConfig);
    }
  }));
};

exports.LayerColorSelector = LayerColorSelector;

var ArcLayerColorSelector = function ArcLayerColorSelector(_ref14) {
  var layer = _ref14.layer,
      onChangeConfig = _ref14.onChangeConfig,
      onChangeVisConfig = _ref14.onChangeVisConfig,
      _ref14$property = _ref14.property,
      property = _ref14$property === void 0 ? 'color' : _ref14$property,
      _setColorUI2 = _ref14.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeConfig({
          color: rgbValue
        });
      },
      label: 'Source'
    }, {
      selectedColor: layer.config.visConfig.targetColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeVisConfig({
          targetColor: rgbValue
        });
      },
      label: 'Target'
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI2(property, newConfig);
    }
  }));
};

exports.ArcLayerColorSelector = ArcLayerColorSelector;

var LayerColorRangeSelector = function LayerColorRangeSelector(_ref15) {
  var layer = _ref15.layer,
      onChange = _ref15.onChange,
      _ref15$property = _ref15.property,
      property = _ref15$property === void 0 ? 'colorRange' : _ref15$property,
      _setColorUI3 = _ref15.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.visConfig[property],
      isRange: true,
      setColor: function setColor(colorRange) {
        return onChange((0, _defineProperty2["default"])({}, property, colorRange));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI3(property, newConfig);
    }
  }));
};

exports.LayerColorRangeSelector = LayerColorRangeSelector;
ChannelByValueSelectorFactory.deps = [_visConfigByFieldSelector["default"]];

function ChannelByValueSelectorFactory(VisConfigByFieldSelector) {
  var ChannelByValueSelector = function ChannelByValueSelector(_ref16) {
    var layer = _ref16.layer,
        channel = _ref16.channel,
        onChange = _ref16.onChange,
        fields = _ref16.fields,
        description = _ref16.description;
    var channelScaleType = channel.channelScaleType,
        domain = channel.domain,
        field = channel.field,
        key = channel.key,
        property = channel.property,
        range = channel.range,
        scale = channel.scale,
        defaultMeasure = channel.defaultMeasure,
        supportedFieldTypes = channel.supportedFieldTypes;
    var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];
    var supportedFields = fields.filter(function (_ref17) {
      var type = _ref17.type;
      return channelSupportedFieldTypes.includes(type);
    });
    var scaleOptions = layer.getScaleOptions(channel.key);
    var showScale = !layer.isAggregated && layer.config[scale] && scaleOptions.length > 1;
    var defaultDescription = 'layerConfiguration.defaultDescription';
    return /*#__PURE__*/_react["default"].createElement(VisConfigByFieldSelector, {
      channel: channel.key,
      description: description || defaultDescription,
      domain: layer.config[domain],
      fields: supportedFields,
      id: layer.id,
      key: "".concat(key, "-channel-selector"),
      property: property,
      placeholder: defaultMeasure || 'placeholder.selectField',
      range: layer.config.visConfig[range],
      scaleOptions: scaleOptions,
      scaleType: scale ? layer.config[scale] : null,
      selectedField: layer.config[field],
      showScale: showScale,
      updateField: function updateField(val) {
        return onChange((0, _defineProperty2["default"])({}, field, val), key);
      },
      updateScale: function updateScale(val) {
        return onChange((0, _defineProperty2["default"])({}, scale, val), key);
      }
    });
  };

  return ChannelByValueSelector;
}

var AggrScaleSelector = function AggrScaleSelector(_ref18) {
  var channel = _ref18.channel,
      layer = _ref18.layer,
      onChange = _ref18.onChange;
  var scale = channel.scale,
      key = channel.key;
  var scaleOptions = layer.getScaleOptions(key);
  return Array.isArray(scaleOptions) && scaleOptions.length > 1 ? /*#__PURE__*/_react["default"].createElement(_dimensionScaleSelector["default"], {
    label: "".concat(key, " Scale"),
    options: scaleOptions,
    scaleType: layer.config[scale],
    onSelect: function onSelect(val) {
      return onChange((0, _defineProperty2["default"])({}, scale, val), key);
    }
  }) : null;
};

exports.AggrScaleSelector = AggrScaleSelector;

var AggregationTypeSelector = function AggregationTypeSelector(_ref19) {
  var layer = _ref19.layer,
      channel = _ref19.channel,
      _onChange6 = _ref19.onChange;
  var field = channel.field,
      aggregation = channel.aggregation,
      key = channel.key;
  var selectedField = layer.config[field];
  var visConfig = layer.config.visConfig; // aggregation should only be selectable when field is selected

  var aggregationOptions = layer.getAggregationOptions(key);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'layer.aggregateBy',
    values: {
      field: selectedField.name
    }
  })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: visConfig[aggregation],
    options: aggregationOptions,
    multiSelect: false,
    searchable: false,
    onChange: function onChange(value) {
      return _onChange6({
        visConfig: _objectSpread(_objectSpread({}, layer.config.visConfig), {}, (0, _defineProperty2["default"])({}, aggregation, value))
      }, channel.key);
    }
  }));
};
/* eslint-enable max-params */


exports.AggregationTypeSelector = AggregationTypeSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlndXJhdG9yLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlndXJhdG9yIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwibGF5ZXJDb25maWd1cmF0b3JNYXJnaW4iLCJsYXllckNvbmZpZ3VyYXRvclBhZGRpbmciLCJsYXllckNvbmZpZ3VyYXRvckJvcmRlciIsImxheWVyQ29uZmlndXJhdG9yQm9yZGVyQ29sb3IiLCJTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciIsImdldExheWVyRmllbGRzIiwiZGF0YXNldHMiLCJsYXllciIsImNvbmZpZyIsImRhdGFJZCIsImZpZWxkcyIsImdldExheWVyRGF0YXNldCIsImdldExheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJvbkNoYW5nZSIsInVwZGF0ZUxheWVyQ29uZmlnIiwic2V0Q29sb3JVSSIsInVwZGF0ZUxheWVyQ29sb3JVSSIsImdldFZpc0NvbmZpZ3VyYXRvclByb3BzIiwidXBkYXRlTGF5ZXJWaXNDb25maWciLCJnZXRMYXllckNoYW5uZWxDb25maWdQcm9wcyIsInVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZyIsIkxheWVyQ29uZmlndXJhdG9yRmFjdG9yeSIsImRlcHMiLCJTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5IiwiVmlzQ29uZmlnU2xpZGVyRmFjdG9yeSIsIlRleHRMYWJlbFBhbmVsRmFjdG9yeSIsIkxheWVyQ29uZmlnR3JvdXBGYWN0b3J5IiwiQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvckZhY3RvcnkiLCJMYXllckNvbHVtbkNvbmZpZ0ZhY3RvcnkiLCJMYXllclR5cGVTZWxlY3RvckZhY3RvcnkiLCJWaXNDb25maWdTd2l0Y2hGYWN0b3J5IiwiU291cmNlRGF0YVNlbGVjdG9yIiwiVmlzQ29uZmlnU2xpZGVyIiwiVGV4dExhYmVsUGFuZWwiLCJMYXllckNvbmZpZ0dyb3VwIiwiQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvciIsIkxheWVyQ29sdW1uQ29uZmlnIiwiTGF5ZXJUeXBlU2VsZWN0b3IiLCJWaXNDb25maWdTd2l0Y2giLCJMYXllckNvbmZpZ3VyYXRvciIsIl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnIiwidmlzQ29uZmlndXJhdG9yUHJvcHMiLCJsYXllckNoYW5uZWxDb25maWdQcm9wcyIsImxheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJ2aXNDb25maWdTZXR0aW5ncyIsImZpbGxlZCIsImxhYmVsIiwiY29sb3JGaWVsZCIsInZpc3VhbENoYW5uZWxzIiwiY29sb3IiLCJvcGFjaXR5IiwidHlwZSIsIkxBWUVSX1RZUEVTIiwicG9pbnQiLCJvdXRsaW5lIiwic3Ryb2tlQ29sb3JGaWVsZCIsInZpc0NvbmZpZyIsInN0cm9rZUNvbG9yIiwidGhpY2tuZXNzIiwic2l6ZUZpZWxkIiwicmFkaXVzIiwiQm9vbGVhbiIsInJhZGl1c1JhbmdlIiwiZml4ZWRSYWRpdXMiLCJzaXplIiwidXBkYXRlTGF5ZXJUZXh0TGFiZWwiLCJ0ZXh0TGFiZWwiLCJjb2xvclBhbGV0dGUiLCJzZXRDb2xvclBhbGV0dGVVSSIsImNvbG9yQWdncmVnYXRpb24iLCJjb25kaXRpb24iLCJjbHVzdGVyUmFkaXVzIiwid2VpZ2h0IiwiX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWciLCJlbmFibGUzZCIsImVsZXZhdGlvbkJ5RGVzY3JpcHRpb24iLCJjb2xvckJ5RGVzY3JpcHRpb24iLCJwZXJjZW50aWxlIiwid29ybGRVbml0U2l6ZSIsImNvdmVyYWdlIiwiZWxldmF0aW9uU2NhbGUiLCJzaXplUmFuZ2UiLCJlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiZWxldmF0aW9uUGVyY2VudGlsZSIsImNvdmVyYWdlRmllbGQiLCJjb3ZlcmFnZVJhbmdlIiwiYXJncyIsIl9yZW5kZXJMaW5lTGF5ZXJDb25maWciLCJzb3VyY2VDb2xvciIsIm1ldGEiLCJmZWF0dXJlVHlwZXMiLCJwb2x5Z29uIiwic3Ryb2tlZCIsInRyYWlsTGVuZ3RoIiwic3Ryb2tlT3BhY2l0eSIsImhlaWdodCIsIndpcmVmcmFtZSIsInJhZGl1c0ZpZWxkIiwiZSIsInRhcmdldCIsImZpbGVzIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic2NlbmVncmFwaCIsInNpemVTY2FsZSIsImFuZ2xlWCIsImFuZ2xlWSIsImFuZ2xlWiIsImhlaWdodFJhbmdlIiwibGF5ZXJUeXBlT3B0aW9ucyIsInVwZGF0ZUxheWVyVHlwZSIsImZpZWxkUGFpcnMiLCJ1bmRlZmluZWQiLCJkYXRhc2V0IiwicmVuZGVyVGVtcGxhdGUiLCJsYXllckluZm9Nb2RhbCIsIm9wZW5Nb2RhbCIsImhhc0FsbENvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaWQiLCJ2YWx1ZSIsImNvbHVtblBhaXJzIiwiY29sdW1ucyIsImFzc2lnbkNvbHVtblBhaXJzIiwiYmluZCIsImFzc2lnbkNvbHVtbiIsImNvbHVtbkxhYmVscyIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiYW55IiwiZnVuYyIsIlN0eWxlZEhvd1RvQnV0dG9uIiwiSG93VG9CdXR0b24iLCJvbkNsaWNrIiwiTGF5ZXJDb2xvclNlbGVjdG9yIiwic2VsZWN0ZWRDb2xvciIsInByb3BlcnR5Iiwic2V0Q29sb3IiLCJyZ2JWYWx1ZSIsImNvbG9yVUkiLCJuZXdDb25maWciLCJBcmNMYXllckNvbG9yU2VsZWN0b3IiLCJvbkNoYW5nZUNvbmZpZyIsIm9uQ2hhbmdlVmlzQ29uZmlnIiwidGFyZ2V0Q29sb3IiLCJMYXllckNvbG9yUmFuZ2VTZWxlY3RvciIsImlzUmFuZ2UiLCJjb2xvclJhbmdlIiwiVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yRmFjdG9yeSIsIlZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvciIsImNoYW5uZWwiLCJkZXNjcmlwdGlvbiIsImNoYW5uZWxTY2FsZVR5cGUiLCJkb21haW4iLCJmaWVsZCIsImtleSIsInJhbmdlIiwic2NhbGUiLCJkZWZhdWx0TWVhc3VyZSIsInN1cHBvcnRlZEZpZWxkVHlwZXMiLCJjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyIsIkNIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyIsInN1cHBvcnRlZEZpZWxkcyIsImZpbHRlciIsImluY2x1ZGVzIiwic2NhbGVPcHRpb25zIiwiZ2V0U2NhbGVPcHRpb25zIiwic2hvd1NjYWxlIiwiaXNBZ2dyZWdhdGVkIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwidmFsIiwiQWdnclNjYWxlU2VsZWN0b3IiLCJBcnJheSIsImlzQXJyYXkiLCJBZ2dyZWdhdGlvblR5cGVTZWxlY3RvciIsImFnZ3JlZ2F0aW9uIiwic2VsZWN0ZWRGaWVsZCIsImFnZ3JlZ2F0aW9uT3B0aW9ucyIsImdldEFnZ3JlZ2F0aW9uT3B0aW9ucyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsdUJBQXVCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDL0NDLEVBQUFBLFNBQVMsRUFBRTtBQURvQyxDQUFqQixDQUFILDhMQUliLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsdUJBQWhCO0FBQUEsQ0FKUSxFQUtoQixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLHdCQUFoQjtBQUFBLENBTFcsRUFNWixVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLHVCQUFoQjtBQUFB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Z0NBQUMsOEJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUUsbUJBQXRCO0FBQTJDLElBQUEsTUFBTSxFQUFFO0FBQUNELE1BQUFBLEtBQUssRUFBRXNCLGFBQWEsQ0FBQ0c7QUFBdEI7QUFBbkQsSUFERixDQURGLGVBSUUsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLGFBQWEsRUFBRWxJLFNBQVMsQ0FBQzhILFdBQUQsQ0FEMUI7QUFFRSxJQUFBLE9BQU8sRUFBRUUsa0JBRlg7QUFHRSxJQUFBLFdBQVcsRUFBRSxLQUhmO0FBSUUsSUFBQSxVQUFVLEVBQUUsS0FKZDtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFBNUQsS0FBSztBQUFBLGFBQ2IvRyxVQUFRLENBQ047QUFDRTJDLFFBQUFBLFNBQVMsa0NBQ0pqRCxLQUFLLENBQUNDLE1BQU4sQ0FBYWdELFNBRFQsNENBRU44SCxXQUZNLEVBRVExRCxLQUZSO0FBRFgsT0FETSxFQU9OaUMsT0FBTyxDQUFDSyxHQVBGLENBREs7QUFBQTtBQUxqQixJQUpGLENBREY7QUF3QkQsQ0FoQ007QUFpQ1AiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbmltcG9ydCB7QnV0dG9uLCBJbnB1dCwgUGFuZWxMYWJlbCwgU2lkZVBhbmVsU2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xuXG5pbXBvcnQgVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuL3Zpcy1jb25maWctYnktZmllbGQtc2VsZWN0b3InO1xuaW1wb3J0IExheWVyQ29sdW1uQ29uZmlnRmFjdG9yeSBmcm9tICcuL2xheWVyLWNvbHVtbi1jb25maWcnO1xuaW1wb3J0IExheWVyVHlwZVNlbGVjdG9yRmFjdG9yeSBmcm9tICcuL2xheWVyLXR5cGUtc2VsZWN0b3InO1xuaW1wb3J0IERpbWVuc2lvblNjYWxlU2VsZWN0b3IgZnJvbSAnLi9kaW1lbnNpb24tc2NhbGUtc2VsZWN0b3InO1xuaW1wb3J0IENvbG9yU2VsZWN0b3IgZnJvbSAnLi9jb2xvci1zZWxlY3Rvcic7XG5pbXBvcnQgU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL3NvdXJjZS1kYXRhLXNlbGVjdG9yJztcbmltcG9ydCBWaXNDb25maWdTd2l0Y2hGYWN0b3J5IGZyb20gJy4vdmlzLWNvbmZpZy1zd2l0Y2gnO1xuaW1wb3J0IFZpc0NvbmZpZ1NsaWRlckZhY3RvcnkgZnJvbSAnLi92aXMtY29uZmlnLXNsaWRlcic7XG5pbXBvcnQgTGF5ZXJDb25maWdHcm91cEZhY3RvcnksIHtDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudH0gZnJvbSAnLi9sYXllci1jb25maWctZ3JvdXAnO1xuaW1wb3J0IFRleHRMYWJlbFBhbmVsRmFjdG9yeSBmcm9tICcuL3RleHQtbGFiZWwtcGFuZWwnO1xuXG5pbXBvcnQge2NhcGl0YWxpemVGaXJzdExldHRlcn0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5pbXBvcnQge0NIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtMQVlFUl9UWVBFU30gZnJvbSAnbGF5ZXJzL3R5cGVzJztcblxuY29uc3QgU3R5bGVkTGF5ZXJDb25maWd1cmF0b3IgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItcGFuZWxfX2NvbmZpZydcbn0pYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJDb25maWd1cmF0b3JNYXJnaW59O1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlndXJhdG9yUGFkZGluZ307XG4gIGJvcmRlci1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlndXJhdG9yQm9yZGVyfSBkYXNoZWRcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlndXJhdG9yQm9yZGVyQ29sb3J9O1xuYDtcblxuY29uc3QgU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3IgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItcGFuZWxfX2NvbmZpZ19fdmlzdWFsQy1jb25maWcnXG59KWBcbiAgbWFyZ2luLXRvcDogMTJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBnZXRMYXllckZpZWxkcyA9IChkYXRhc2V0cywgbGF5ZXIpID0+XG4gIGxheWVyLmNvbmZpZyAmJiBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXSA/IGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdLmZpZWxkcyA6IFtdO1xuXG5leHBvcnQgY29uc3QgZ2V0TGF5ZXJEYXRhc2V0ID0gKGRhdGFzZXRzLCBsYXllcikgPT5cbiAgbGF5ZXIuY29uZmlnICYmIGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdID8gZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0gOiBudWxsO1xuXG5leHBvcnQgY29uc3QgZ2V0TGF5ZXJDb25maWd1cmF0b3JQcm9wcyA9IHByb3BzID0+ICh7XG4gIGxheWVyOiBwcm9wcy5sYXllcixcbiAgZmllbGRzOiBnZXRMYXllckZpZWxkcyhwcm9wcy5kYXRhc2V0cywgcHJvcHMubGF5ZXIpLFxuICBvbkNoYW5nZTogcHJvcHMudXBkYXRlTGF5ZXJDb25maWcsXG4gIHNldENvbG9yVUk6IHByb3BzLnVwZGF0ZUxheWVyQ29sb3JVSVxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRWaXNDb25maWd1cmF0b3JQcm9wcyA9IHByb3BzID0+ICh7XG4gIGxheWVyOiBwcm9wcy5sYXllcixcbiAgZmllbGRzOiBnZXRMYXllckZpZWxkcyhwcm9wcy5kYXRhc2V0cywgcHJvcHMubGF5ZXIpLFxuICBvbkNoYW5nZTogcHJvcHMudXBkYXRlTGF5ZXJWaXNDb25maWcsXG4gIHNldENvbG9yVUk6IHByb3BzLnVwZGF0ZUxheWVyQ29sb3JVSVxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRMYXllckNoYW5uZWxDb25maWdQcm9wcyA9IHByb3BzID0+ICh7XG4gIGxheWVyOiBwcm9wcy5sYXllcixcbiAgZmllbGRzOiBnZXRMYXllckZpZWxkcyhwcm9wcy5kYXRhc2V0cywgcHJvcHMubGF5ZXIpLFxuICBvbkNoYW5nZTogcHJvcHMudXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnXG59KTtcblxuTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5LmRlcHMgPSBbXG4gIFNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnksXG4gIFZpc0NvbmZpZ1NsaWRlckZhY3RvcnksXG4gIFRleHRMYWJlbFBhbmVsRmFjdG9yeSxcbiAgTGF5ZXJDb25maWdHcm91cEZhY3RvcnksXG4gIENoYW5uZWxCeVZhbHVlU2VsZWN0b3JGYWN0b3J5LFxuICBMYXllckNvbHVtbkNvbmZpZ0ZhY3RvcnksXG4gIExheWVyVHlwZVNlbGVjdG9yRmFjdG9yeSxcbiAgVmlzQ29uZmlnU3dpdGNoRmFjdG9yeVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5KFxuICBTb3VyY2VEYXRhU2VsZWN0b3IsXG4gIFZpc0NvbmZpZ1NsaWRlcixcbiAgVGV4dExhYmVsUGFuZWwsXG4gIExheWVyQ29uZmlnR3JvdXAsXG4gIENoYW5uZWxCeVZhbHVlU2VsZWN0b3IsXG4gIExheWVyQ29sdW1uQ29uZmlnLFxuICBMYXllclR5cGVTZWxlY3RvcixcbiAgVmlzQ29uZmlnU3dpdGNoXG4pIHtcbiAgY2xhc3MgTGF5ZXJDb25maWd1cmF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyVHlwZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1cGRhdGVMYXllckNvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyVHlwZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJDb2xvclVJOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIF9yZW5kZXJQb2ludExheWVyQ29uZmlnKHByb3BzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyhwcm9wcyk7XG4gICAgfVxuXG4gICAgX3JlbmRlckljb25MYXllckNvbmZpZyhwcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWcocHJvcHMpO1xuICAgIH1cblxuICAgIF9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHtcbiAgICAgIGxheWVyLFxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHNcbiAgICB9KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIEZpbGwgQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi4obGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkIHx8IHtsYWJlbDogJ2xheWVyLmNvbG9yJ30pfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIG91dGxpbmUgY29sb3IgKi99XG4gICAgICAgICAge2xheWVyLnR5cGUgPT09IExBWUVSX1RZUEVTLnBvaW50ID8gKFxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm91dGxpbmV9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHByb3BlcnR5PVwic3Ryb2tlQ29sb3JSYW5nZVwiIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc3Ryb2tlQ29sb3J9XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllci5jb25maWcudmlzQ29uZmlnLm91dGxpbmV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHsvKiBSYWRpdXMgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5yYWRpdXMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIHshbGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXN9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Qm9vbGVhbihsYXllci5jb25maWcuc2l6ZUZpZWxkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy5zaXplRmllbGQgfHwgbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5maXhlZFJhZGl1c31cbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIHRleHQgbGFiZWwgKi99XG4gICAgICAgICAgPFRleHRMYWJlbFBhbmVsXG4gICAgICAgICAgICBmaWVsZHM9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLmZpZWxkc31cbiAgICAgICAgICAgIHVwZGF0ZUxheWVyVGV4dExhYmVsPXt0aGlzLnByb3BzLnVwZGF0ZUxheWVyVGV4dExhYmVsfVxuICAgICAgICAgICAgdGV4dExhYmVsPXtsYXllci5jb25maWcudGV4dExhYmVsfVxuICAgICAgICAgICAgY29sb3JQYWxldHRlPXt2aXNDb25maWd1cmF0b3JQcm9wcy5jb2xvclBhbGV0dGV9XG4gICAgICAgICAgICBzZXRDb2xvclBhbGV0dGVVST17dmlzQ29uZmlndXJhdG9yUHJvcHMuc2V0Q29sb3JQYWxldHRlVUl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckNsdXN0ZXJMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8QWdnclNjYWxlU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfSAvPlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb24uY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXG4gICAgICAgICAgICAgICAgPEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbn1cbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBDbHVzdGVyIFJhZGl1cyAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnJhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY2x1c3RlclJhZGl1c30gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXNSYW5nZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJIZWF0bWFwTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgey8qIFJhZGl1cyAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnJhZGl1cyd9PlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgIHsvKiBXZWlnaHQgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci53ZWlnaHQnfT5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLndlaWdodH1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJHcmlkTGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnKHByb3BzKTtcbiAgICB9XG5cbiAgICBfcmVuZGVySGV4YWdvbkxheWVyQ29uZmlnKHByb3BzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyhwcm9wcyk7XG4gICAgfVxuXG4gICAgX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtjb25maWd9ID0gbGF5ZXI7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpc0NvbmZpZzoge2VuYWJsZTNkfVxuICAgICAgfSA9IGNvbmZpZztcbiAgICAgIGNvbnN0IGVsZXZhdGlvbkJ5RGVzY3JpcHRpb24gPSAnbGF5ZXIuZWxldmF0aW9uQnlEZXNjcmlwdGlvbic7XG4gICAgICBjb25zdCBjb2xvckJ5RGVzY3JpcHRpb24gPSAnbGF5ZXIuY29sb3JCeURlc2NyaXB0aW9uJztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8QWdnclNjYWxlU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfSAvPlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb24uY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXG4gICAgICAgICAgICAgICAgPEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbn1cbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtjb2xvckJ5RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnBlcmNlbnRpbGUgJiZcbiAgICAgICAgICAgICAgbGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucGVyY2VudGlsZS5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucGVyY2VudGlsZX1cbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogQ2VsbCBzaXplICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIucmFkaXVzJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy53b3JsZFVuaXRTaXplfSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlfSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBFbGV2YXRpb24gKi99XG4gICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkID8gKFxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uU2NhbGV9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPEFnZ3JTY2FsZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtlbGV2YXRpb25CeURlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbmFibGUzZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGVFbGV2YXRpb25ab29tRmFjdG9yfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVBZ2dyZWdhdGlvbi5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcbiAgICAgICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25QZXJjZW50aWxlLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uUGVyY2VudGlsZX1cbiAgICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogU2hhbiBtb3ZlIHRoZXNlIGludG8gbGF5ZXIgY2xhc3NcbiAgICBfcmVuZGVySGV4YWdvbklkTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBDb3ZlcmFnZSAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvdmVyYWdlJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7IWxheWVyLmNvbmZpZy5jb3ZlcmFnZUZpZWxkID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY292ZXJhZ2V9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogaGVpZ2h0ICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uU2NhbGV9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJsYXllclZpc0NvbmZpZ3MuaGVpZ2h0UmFuZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU3dpdGNoXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3J9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJBcmNMYXllckNvbmZpZyhhcmdzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyTGluZUxheWVyQ29uZmlnKGFyZ3MpO1xuICAgIH1cblxuICAgIF9yZW5kZXJMaW5lTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEFyY0xheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgICBzZXRDb2xvclVJPXtsYXllckNvbmZpZ3VyYXRvclByb3BzLnNldENvbG9yVUl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb25maWc9e2xheWVyQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VWaXNDb25maWc9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zb3VyY2VDb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIHRoaWNrbmVzcyAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnN0cm9rZSd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy5zaXplRmllbGR9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBlbGV2YXRpb24gc2NhbGUgKi99XG4gICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlID8gKFxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9XCJsYXllclZpc0NvbmZpZ3MuZWxldmF0aW9uU2NhbGVcIiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJUcmlwTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWV0YToge2ZlYXR1cmVUeXBlcyA9IHt9fVxuICAgICAgfSA9IGxheWVyO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY29sb3InfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogU3Ryb2tlIFdpZHRoICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gbGFiZWw9XCJsYXllci5zdHJva2VXaWR0aFwiIGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogVHJhaWwgTGVuZ3RoKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIHsuLi4oZmVhdHVyZVR5cGVzLnBvbHlnb24gPyBsYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkIDoge30pfVxuICAgICAgICAgICAgbGFiZWw9XCJsYXllci50cmFpbExlbmd0aFwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cImxheWVyLnRyYWlsTGVuZ3RoRGVzY3JpcHRpb25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRyYWlsTGVuZ3RofVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyR2VvanNvbkxheWVyQ29uZmlnKHtcbiAgICAgIGxheWVyLFxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgICB9KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1ldGE6IHtmZWF0dXJlVHlwZXMgPSB7fX0sXG4gICAgICAgIGNvbmZpZzoge3Zpc0NvbmZpZ31cbiAgICAgIH0gPSBsYXllcjtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBGaWxsIENvbG9yICovfVxuICAgICAgICAgIHtmZWF0dXJlVHlwZXMucG9seWdvbiB8fCBmZWF0dXJlVHlwZXMucG9pbnQgPyAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPVwibGF5ZXIuZmlsbENvbG9yXCJcbiAgICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHsvKiBzdHJva2UgY29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgbGFiZWw9XCJsYXllci5zdHJva2VDb2xvclwiXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc3Ryb2tlQ29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gcHJvcGVydHk9XCJzdHJva2VDb2xvclJhbmdlXCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3JcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc3Ryb2tlQ29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZU9wYWNpdHl9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogU3Ryb2tlIFdpZHRoICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICB7Li4uKGZlYXR1cmVUeXBlcy5wb2x5Z29uID8gbGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlZCA6IHt9KX1cbiAgICAgICAgICAgIGxhYmVsPVwibGF5ZXIuc3Ryb2tlV2lkdGhcIlxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogRWxldmF0aW9uICovfVxuICAgICAgICAgIHtmZWF0dXJlVHlwZXMucG9seWdvbiA/IChcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXZpc0NvbmZpZy5maWxsZWR9XG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uU2NhbGV9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU3dpdGNoXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlRWxldmF0aW9uWm9vbUZhY3Rvcn1cbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2ggey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mud2lyZWZyYW1lfSAvPlxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgey8qIFJhZGl1cyAqL31cbiAgICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvaW50ID8gKFxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5yYWRpdXMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgICAgeyFsYXllci5jb25maWcucmFkaXVzRmllbGQgPyAoXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c31cbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtCb29sZWFuKGxheWVyLmNvbmZpZy5yYWRpdXNGaWVsZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzUmFuZ2V9XG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy5yYWRpdXNGaWVsZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnJhZGl1c31cbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyM0RMYXllckNvbmZpZyh7bGF5ZXIsIHZpc0NvbmZpZ3VyYXRvclByb3BzfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuM0RNb2RlbCd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiLmdsYiwuZ2x0ZlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2Uoe3NjZW5lZ3JhcGg6IHVybH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuM0RNb2RlbE9wdGlvbnMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVTY2FsZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVYfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5hbmdsZVl9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmFuZ2xlWn1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlclMyTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29uZmlnOiB7dmlzQ29uZmlnfVxuICAgICAgfSA9IGxheWVyO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgbGFiZWw9XCJsYXllci5maWxsQ29sb3JcIlxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIFN0cm9rZSAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZWR9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD1cImxheWVyLnN0cm9rZUNvbG9yXCJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBsYWJlbD1cImxheWVyLnN0cm9rZVdpZHRoXCIgY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogRWxldmF0aW9uICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XG4gICAgICAgICAgICBkaXNhYmxlZD17IXZpc0NvbmZpZy5maWxsZWR9XG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmhlaWdodH1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPVwibGF5ZXJWaXNDb25maWdzLmVsZXZhdGlvblNjYWxlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuaGVpZ2h0UmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwibGF5ZXJWaXNDb25maWdzLmhlaWdodFJhbmdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1N3aXRjaFxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGVFbGV2YXRpb25ab29tRmFjdG9yfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1N3aXRjaCB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy53aXJlZnJhbWV9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2xheWVyLCBkYXRhc2V0cywgdXBkYXRlTGF5ZXJDb25maWcsIGxheWVyVHlwZU9wdGlvbnMsIHVwZGF0ZUxheWVyVHlwZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2ZpZWxkcyA9IFtdLCBmaWVsZFBhaXJzID0gdW5kZWZpbmVkfSA9IGxheWVyLmNvbmZpZy5kYXRhSWRcbiAgICAgICAgPyBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXVxuICAgICAgICA6IHt9O1xuICAgICAgY29uc3Qge2NvbmZpZ30gPSBsYXllcjtcblxuICAgICAgY29uc3QgdmlzQ29uZmlndXJhdG9yUHJvcHMgPSBnZXRWaXNDb25maWd1cmF0b3JQcm9wcyh0aGlzLnByb3BzKTtcbiAgICAgIGNvbnN0IGxheWVyQ29uZmlndXJhdG9yUHJvcHMgPSBnZXRMYXllckNvbmZpZ3VyYXRvclByb3BzKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMgPSBnZXRMYXllckNoYW5uZWxDb25maWdQcm9wcyh0aGlzLnByb3BzKTtcbiAgICAgIGNvbnN0IGRhdGFzZXQgPSBnZXRMYXllckRhdGFzZXQoZGF0YXNldHMsIGxheWVyKTtcbiAgICAgIGNvbnN0IHJlbmRlclRlbXBsYXRlID0gbGF5ZXIudHlwZSAmJiBgX3JlbmRlciR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGxheWVyLnR5cGUpfUxheWVyQ29uZmlnYDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHtsYXllci5sYXllckluZm9Nb2RhbCA/IChcbiAgICAgICAgICAgIDxIb3dUb0J1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9wZW5Nb2RhbChsYXllci5sYXllckluZm9Nb2RhbCl9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5iYXNpYyd9IGNvbGxhcHNpYmxlIGV4cGFuZGVkPXshbGF5ZXIuaGFzQWxsQ29sdW1ucygpfT5cbiAgICAgICAgICAgIDxMYXllclR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgbGF5ZXJUeXBlT3B0aW9ucz17bGF5ZXJUeXBlT3B0aW9uc31cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3VwZGF0ZUxheWVyVHlwZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICA8U291cmNlRGF0YVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgIGlkPXtsYXllci5pZH1cbiAgICAgICAgICAgICAgICBkYXRhSWQ9e2NvbmZpZy5kYXRhSWR9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3ZhbHVlID0+IHVwZGF0ZUxheWVyQ29uZmlnKHtkYXRhSWQ6IHZhbHVlfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPExheWVyQ29sdW1uQ29uZmlnXG4gICAgICAgICAgICAgIGNvbHVtblBhaXJzPXtsYXllci5jb2x1bW5QYWlyc31cbiAgICAgICAgICAgICAgY29sdW1ucz17bGF5ZXIuY29uZmlnLmNvbHVtbnN9XG4gICAgICAgICAgICAgIGFzc2lnbkNvbHVtblBhaXJzPXtsYXllci5hc3NpZ25Db2x1bW5QYWlycy5iaW5kKGxheWVyKX1cbiAgICAgICAgICAgICAgYXNzaWduQ29sdW1uPXtsYXllci5hc3NpZ25Db2x1bW4uYmluZChsYXllcil9XG4gICAgICAgICAgICAgIGNvbHVtbkxhYmVscz17bGF5ZXIuY29sdW1uTGFiZWxzfVxuICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgZmllbGRQYWlycz17ZmllbGRQYWlyc31cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJDb25maWc9e3VwZGF0ZUxheWVyQ29uZmlnfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllclR5cGU9e3RoaXMucHJvcHMudXBkYXRlTGF5ZXJUeXBlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAge3RoaXNbcmVuZGVyVGVtcGxhdGVdICYmXG4gICAgICAgICAgICB0aGlzW3JlbmRlclRlbXBsYXRlXSh7XG4gICAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgICBkYXRhc2V0LFxuICAgICAgICAgICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgICAgICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMsXG4gICAgICAgICAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHNcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1N0eWxlZExheWVyQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTGF5ZXJDb25maWd1cmF0b3I7XG59XG4vKlxuICogQ29tcG9uZW50aXplIGNvbmZpZyBjb21wb25lbnQgaW50byBwdXJlIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICovXG5cbmNvbnN0IFN0eWxlZEhvd1RvQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiAtNHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhvd1RvQnV0dG9uID0gKHtvbkNsaWNrfSkgPT4gKFxuICA8U3R5bGVkSG93VG9CdXR0b24+XG4gICAgPEJ1dHRvbiBsaW5rIHNtYWxsIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydsYXllckNvbmZpZ3VyYXRpb24uaG93VG8nfSAvPlxuICAgIDwvQnV0dG9uPlxuICA8L1N0eWxlZEhvd1RvQnV0dG9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IExheWVyQ29sb3JTZWxlY3RvciA9ICh7XG4gIGxheWVyLFxuICBvbkNoYW5nZSxcbiAgbGFiZWwsXG4gIHNlbGVjdGVkQ29sb3IsXG4gIHByb3BlcnR5ID0gJ2NvbG9yJyxcbiAgc2V0Q29sb3JVSVxufSkgPT4gKFxuICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICA8Q29sb3JTZWxlY3RvclxuICAgICAgY29sb3JTZXRzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBzZWxlY3RlZENvbG9yIHx8IGxheWVyLmNvbmZpZy5jb2xvcixcbiAgICAgICAgICBzZXRDb2xvcjogcmdiVmFsdWUgPT4gb25DaGFuZ2Uoe1twcm9wZXJ0eV06IHJnYlZhbHVlfSlcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAgIGNvbG9yVUk9e2xheWVyLmNvbmZpZy5jb2xvclVJW3Byb3BlcnR5XX1cbiAgICAgIHNldENvbG9yVUk9e25ld0NvbmZpZyA9PiBzZXRDb2xvclVJKHByb3BlcnR5LCBuZXdDb25maWcpfVxuICAgIC8+XG4gIDwvU2lkZVBhbmVsU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBjb25zdCBBcmNMYXllckNvbG9yU2VsZWN0b3IgPSAoe1xuICBsYXllcixcbiAgb25DaGFuZ2VDb25maWcsXG4gIG9uQ2hhbmdlVmlzQ29uZmlnLFxuICBwcm9wZXJ0eSA9ICdjb2xvcicsXG4gIHNldENvbG9yVUlcbn0pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPENvbG9yU2VsZWN0b3JcbiAgICAgIGNvbG9yU2V0cz17W1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZUNvbmZpZyh7Y29sb3I6IHJnYlZhbHVlfSksXG4gICAgICAgICAgbGFiZWw6ICdTb3VyY2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBsYXllci5jb25maWcudmlzQ29uZmlnLnRhcmdldENvbG9yIHx8IGxheWVyLmNvbmZpZy5jb2xvcixcbiAgICAgICAgICBzZXRDb2xvcjogcmdiVmFsdWUgPT4gb25DaGFuZ2VWaXNDb25maWcoe3RhcmdldENvbG9yOiByZ2JWYWx1ZX0pLFxuICAgICAgICAgIGxhYmVsOiAnVGFyZ2V0J1xuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgY29sb3JVST17bGF5ZXIuY29uZmlnLmNvbG9yVUlbcHJvcGVydHldfVxuICAgICAgc2V0Q29sb3JVST17bmV3Q29uZmlnID0+IHNldENvbG9yVUkocHJvcGVydHksIG5ld0NvbmZpZyl9XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IExheWVyQ29sb3JSYW5nZVNlbGVjdG9yID0gKHtsYXllciwgb25DaGFuZ2UsIHByb3BlcnR5ID0gJ2NvbG9yUmFuZ2UnLCBzZXRDb2xvclVJfSkgPT4gKFxuICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICA8Q29sb3JTZWxlY3RvclxuICAgICAgY29sb3JTZXRzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBsYXllci5jb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XSxcbiAgICAgICAgICBpc1JhbmdlOiB0cnVlLFxuICAgICAgICAgIHNldENvbG9yOiBjb2xvclJhbmdlID0+IG9uQ2hhbmdlKHtbcHJvcGVydHldOiBjb2xvclJhbmdlfSlcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAgIGNvbG9yVUk9e2xheWVyLmNvbmZpZy5jb2xvclVJW3Byb3BlcnR5XX1cbiAgICAgIHNldENvbG9yVUk9e25ld0NvbmZpZyA9PiBzZXRDb2xvclVJKHByb3BlcnR5LCBuZXdDb25maWcpfVxuICAgIC8+XG4gIDwvU2lkZVBhbmVsU2VjdGlvbj5cbik7XG5cbkNoYW5uZWxCeVZhbHVlU2VsZWN0b3JGYWN0b3J5LmRlcHMgPSBbVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yRmFjdG9yeV07XG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvckZhY3RvcnkoVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yKSB7XG4gIGNvbnN0IENoYW5uZWxCeVZhbHVlU2VsZWN0b3IgPSAoe2xheWVyLCBjaGFubmVsLCBvbkNoYW5nZSwgZmllbGRzLCBkZXNjcmlwdGlvbn0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjaGFubmVsU2NhbGVUeXBlLFxuICAgICAgZG9tYWluLFxuICAgICAgZmllbGQsXG4gICAgICBrZXksXG4gICAgICBwcm9wZXJ0eSxcbiAgICAgIHJhbmdlLFxuICAgICAgc2NhbGUsXG4gICAgICBkZWZhdWx0TWVhc3VyZSxcbiAgICAgIHN1cHBvcnRlZEZpZWxkVHlwZXNcbiAgICB9ID0gY2hhbm5lbDtcbiAgICBjb25zdCBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyA9XG4gICAgICBzdXBwb3J0ZWRGaWVsZFR5cGVzIHx8IENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEU1tjaGFubmVsU2NhbGVUeXBlXTtcbiAgICBjb25zdCBzdXBwb3J0ZWRGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKCh7dHlwZX0pID0+IGNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzLmluY2x1ZGVzKHR5cGUpKTtcbiAgICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoY2hhbm5lbC5rZXkpO1xuICAgIGNvbnN0IHNob3dTY2FsZSA9ICFsYXllci5pc0FnZ3JlZ2F0ZWQgJiYgbGF5ZXIuY29uZmlnW3NjYWxlXSAmJiBzY2FsZU9wdGlvbnMubGVuZ3RoID4gMTtcbiAgICBjb25zdCBkZWZhdWx0RGVzY3JpcHRpb24gPSAnbGF5ZXJDb25maWd1cmF0aW9uLmRlZmF1bHREZXNjcmlwdGlvbic7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvclxuICAgICAgICBjaGFubmVsPXtjaGFubmVsLmtleX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmlwdGlvbn1cbiAgICAgICAgZG9tYWluPXtsYXllci5jb25maWdbZG9tYWluXX1cbiAgICAgICAgZmllbGRzPXtzdXBwb3J0ZWRGaWVsZHN9XG4gICAgICAgIGlkPXtsYXllci5pZH1cbiAgICAgICAga2V5PXtgJHtrZXl9LWNoYW5uZWwtc2VsZWN0b3JgfVxuICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtkZWZhdWx0TWVhc3VyZSB8fCAncGxhY2Vob2xkZXIuc2VsZWN0RmllbGQnfVxuICAgICAgICByYW5nZT17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1tyYW5nZV19XG4gICAgICAgIHNjYWxlT3B0aW9ucz17c2NhbGVPcHRpb25zfVxuICAgICAgICBzY2FsZVR5cGU9e3NjYWxlID8gbGF5ZXIuY29uZmlnW3NjYWxlXSA6IG51bGx9XG4gICAgICAgIHNlbGVjdGVkRmllbGQ9e2xheWVyLmNvbmZpZ1tmaWVsZF19XG4gICAgICAgIHNob3dTY2FsZT17c2hvd1NjYWxlfVxuICAgICAgICB1cGRhdGVGaWVsZD17dmFsID0+IG9uQ2hhbmdlKHtbZmllbGRdOiB2YWx9LCBrZXkpfVxuICAgICAgICB1cGRhdGVTY2FsZT17dmFsID0+IG9uQ2hhbmdlKHtbc2NhbGVdOiB2YWx9LCBrZXkpfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDaGFubmVsQnlWYWx1ZVNlbGVjdG9yO1xufVxuXG5leHBvcnQgY29uc3QgQWdnclNjYWxlU2VsZWN0b3IgPSAoe2NoYW5uZWwsIGxheWVyLCBvbkNoYW5nZX0pID0+IHtcbiAgY29uc3Qge3NjYWxlLCBrZXl9ID0gY2hhbm5lbDtcbiAgY29uc3Qgc2NhbGVPcHRpb25zID0gbGF5ZXIuZ2V0U2NhbGVPcHRpb25zKGtleSk7XG5cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc2NhbGVPcHRpb25zKSAmJiBzY2FsZU9wdGlvbnMubGVuZ3RoID4gMSA/IChcbiAgICA8RGltZW5zaW9uU2NhbGVTZWxlY3RvclxuICAgICAgbGFiZWw9e2Ake2tleX0gU2NhbGVgfVxuICAgICAgb3B0aW9ucz17c2NhbGVPcHRpb25zfVxuICAgICAgc2NhbGVUeXBlPXtsYXllci5jb25maWdbc2NhbGVdfVxuICAgICAgb25TZWxlY3Q9e3ZhbCA9PiBvbkNoYW5nZSh7W3NjYWxlXTogdmFsfSwga2V5KX1cbiAgICAvPlxuICApIDogbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBBZ2dyZWdhdGlvblR5cGVTZWxlY3RvciA9ICh7bGF5ZXIsIGNoYW5uZWwsIG9uQ2hhbmdlfSkgPT4ge1xuICBjb25zdCB7ZmllbGQsIGFnZ3JlZ2F0aW9uLCBrZXl9ID0gY2hhbm5lbDtcbiAgY29uc3Qgc2VsZWN0ZWRGaWVsZCA9IGxheWVyLmNvbmZpZ1tmaWVsZF07XG4gIGNvbnN0IHt2aXNDb25maWd9ID0gbGF5ZXIuY29uZmlnO1xuXG4gIC8vIGFnZ3JlZ2F0aW9uIHNob3VsZCBvbmx5IGJlIHNlbGVjdGFibGUgd2hlbiBmaWVsZCBpcyBzZWxlY3RlZFxuICBjb25zdCBhZ2dyZWdhdGlvbk9wdGlvbnMgPSBsYXllci5nZXRBZ2dyZWdhdGlvbk9wdGlvbnMoa2V5KTtcblxuICByZXR1cm4gKFxuICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbGF5ZXIuYWdncmVnYXRlQnknfSB2YWx1ZXM9e3tmaWVsZDogc2VsZWN0ZWRGaWVsZC5uYW1lfX0gLz5cbiAgICAgIDwvUGFuZWxMYWJlbD5cbiAgICAgIDxJdGVtU2VsZWN0b3JcbiAgICAgICAgc2VsZWN0ZWRJdGVtcz17dmlzQ29uZmlnW2FnZ3JlZ2F0aW9uXX1cbiAgICAgICAgb3B0aW9ucz17YWdncmVnYXRpb25PcHRpb25zfVxuICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XG4gICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT5cbiAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmlzQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgLi4ubGF5ZXIuY29uZmlnLnZpc0NvbmZpZyxcbiAgICAgICAgICAgICAgICBbYWdncmVnYXRpb25dOiB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbm5lbC5rZXlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICApO1xufTtcbi8qIGVzbGludC1lbmFibGUgbWF4LXBhcmFtcyAqL1xuIl19