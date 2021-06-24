"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMapGl = _interopRequireDefault(require("react-map-gl"));

var _react2 = _interopRequireDefault(require("@deck.gl/react"));

var _reselect = require("reselect");

var _viewportMercatorProject = _interopRequireDefault(require("viewport-mercator-project"));

var _notificationsUtils = require("../utils/notifications-utils");

var _mapPopover = _interopRequireDefault(require("./map/map-popover"));

var _mapControl = _interopRequireDefault(require("./map/map-control"));

var _styledComponents = require("./common/styled-components");

var _editor = _interopRequireDefault(require("./editor/editor"));

var _mapboxUtils = require("../layers/mapbox-utils");

var _glUtils = require("../utils/gl-utils");

var _mapboxUtils2 = require("../utils/map-style-utils/mapbox-utils");

var _layerUtils = require("../utils/layer-utils");

var _dBuildingLayer = _interopRequireDefault(require("../deckgl-layers/3d-building-layer/3d-building-layer"));

var _defaultSettings = require("../constants/default-settings");

var _baseLayer = require("../layers/base-layer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/** @type {{[key: string]: React.CSSProperties}} */
var MAP_STYLE = {
  container: {
    display: 'inline-block',
    position: 'relative'
  },
  top: {
    position: 'absolute',
    top: '0px',
    pointerEvents: 'none'
  }
};
var MAPBOXGL_STYLE_UPDATE = 'style.load';
var MAPBOXGL_RENDER = 'render';
var TRANSITION_DURATION = 0;

var Attribution = function Attribution() {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledAttrbution, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "attrition-logo"
  }, "Basemap by:", /*#__PURE__*/_react["default"].createElement("a", {
    className: "mapboxgl-ctrl-logo",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.mapbox.com/",
    "aria-label": "Mapbox logo"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "attrition-link"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://kepler.gl/policy/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\xA9 kepler.gl |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.mapbox.com/about/maps/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\xA9 Mapbox |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
    href: "http://www.openstreetmap.org/copyright",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\xA9 OpenStreetMap |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.mapbox.com/map-feedback/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Improve this map"))));
};

MapContainerFactory.deps = [_mapPopover["default"], _mapControl["default"], _editor["default"]];

function MapContainerFactory(MapPopover, MapControl, Editor) {
  var MapContainer = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapContainer, _Component);

    var _super = _createSuper(MapContainer);

    function MapContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, MapContainer);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerDataSelector", function (props) {
        return props.layerData;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapLayersSelector", function (props) {
        return props.mapLayers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerOrderSelector", function (props) {
        return props.layerOrder;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.mapLayersSelector, // {[id]: true \ false}
      function (layers, layerData, mapLayers) {
        return layers.reduce(function (accu, layer, idx) {
          return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, layer.id, layer.id !== _defaultSettings.GEOCODER_LAYER_ID && layer.shouldRenderLayer(layerData[idx]) && _this._isVisibleMapLayer(layer, mapLayers)));
        }, {});
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filtersSelector", function (props) {
        return props.filters;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "polygonFilters", (0, _reselect.createSelector)(_this.filtersSelector, function (filters) {
        return filters.filter(function (f) {
          return f.type === _defaultSettings.FILTER_TYPES.polygon;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapboxLayersSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.layerOrderSelector, _this.layersToRenderSelector, _mapboxUtils.generateMapboxLayers));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCloseMapPopover", function () {
        _this.props.visStateActions.onLayerClick(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLayerSetDomain", function (idx, colorDomain) {
        _this.props.visStateActions.layerConfigChange(_this.props.layers[idx], {
          colorDomain: colorDomain
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleMapToggleLayer", function (layerId) {
        var _this$props = _this.props,
            _this$props$index = _this$props.index,
            mapIndex = _this$props$index === void 0 ? 0 : _this$props$index,
            visStateActions = _this$props.visStateActions;
        visStateActions.toggleLayerForMap(mapIndex, layerId);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapboxStyleUpdate", function () {
        // force refresh mapboxgl layers
        _this.previousLayers = {};

        _this._updateMapboxLayers();

        if (typeof _this.props.onMapStyleLoaded === 'function') {
          _this.props.onMapStyleLoaded(_this._map);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setMapboxMap", function (mapbox) {
        if (!_this._map && mapbox) {
          _this._map = mapbox.getMap(); // i noticed in certain context we don't access the actual map element

          if (!_this._map) {
            return;
          } // bind mapboxgl event listener


          _this._map.on(MAPBOXGL_STYLE_UPDATE, _this._onMapboxStyleUpdate);

          _this._map.on(MAPBOXGL_RENDER, function () {
            if (typeof _this.props.onMapRender === 'function') {
              _this.props.onMapRender(_this._map);
            }
          });
        }

        if (_this.props.getMapboxRef) {
          // The parent component can gain access to our MapboxGlMap by
          // providing this callback. Note that 'mapbox' will be null when the
          // ref is unset (e.g. when a split map is closed).
          _this.props.getMapboxRef(mapbox, _this.props.index);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBeforeRender", function (_ref) {
        var gl = _ref.gl;
        (0, _glUtils.setLayerBlending)(gl, _this.props.layerBlending);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onDeckError", function (error, layer) {
        var errorMessage = "An error in deck.gl: ".concat(error.message, " in ").concat(layer.id);
        var notificationId = "".concat(layer.id, "-").concat(error.message); // Throttle error notifications, as React doesn't like too many state changes from here.

        _this._deckGLErrorsElapsed = _this._deckGLErrorsElapsed || {};
        var lastShown = _this._deckGLErrorsElapsed[notificationId];

        if (!lastShown || lastShown < Date.now() - _defaultSettings.THROTTLE_NOTIFICATION_TIME) {
          _this._deckGLErrorsElapsed[notificationId] = Date.now(); // Create new error notification or update existing one with same id.
          // Update is required to preserve the order of notifications as they probably are going to "jump" based on order of errors.

          var uiStateActions = _this.props.uiStateActions;
          uiStateActions.addNotification((0, _notificationsUtils.errorNotification)({
            message: errorMessage,
            id: notificationId
          }));
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onViewportChange", function (viewState) {
        if (typeof _this.props.onViewStateChange === 'function') {
          _this.props.onViewStateChange(viewState);
        }

        _this.props.mapStateActions.updateMap(viewState);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleMapControl", function (panelId) {
        var _this$props2 = _this.props,
            index = _this$props2.index,
            uiStateActions = _this$props2.uiStateActions;
        uiStateActions.toggleMapControl(panelId, index);
      });
      _this.previousLayers = {// [layers.id]: mapboxLayerConfig
      };
      _this._deck = null;
      return _this;
    }

    (0, _createClass2["default"])(MapContainer, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // unbind mapboxgl event listener
        if (this._map) {
          this._map.off(MAPBOXGL_STYLE_UPDATE);

          this._map.off(MAPBOXGL_RENDER);
        }
      }
    }, {
      key: "_isVisibleMapLayer",
      value:
      /* component private functions */
      function _isVisibleMapLayer(layer, mapLayers) {
        // if layer.id is not in mapLayers, don't render it
        return !mapLayers || mapLayers && mapLayers[layer.id];
      }
    }, {
      key: "_onDeckInitialized",
      value: function _onDeckInitialized(gl) {
        if (this.props.onDeckInitialized) {
          this.props.onDeckInitialized(this._deck, gl);
        }
      }
    }, {
      key: "_renderMapPopover",
      value:
      /* component render functions */

      /* eslint-disable complexity */
      function _renderMapPopover(layersToRender) {
        // TODO: move this into reducer so it can be tested
        var _this$props3 = this.props,
            mapState = _this$props3.mapState,
            hoverInfo = _this$props3.hoverInfo,
            clicked = _this$props3.clicked,
            datasets = _this$props3.datasets,
            interactionConfig = _this$props3.interactionConfig,
            layers = _this$props3.layers,
            _this$props3$mousePos = _this$props3.mousePos,
            mousePosition = _this$props3$mousePos.mousePosition,
            coordinate = _this$props3$mousePos.coordinate,
            pinned = _this$props3$mousePos.pinned;

        if (!mousePosition) {
          return null;
        } // if clicked something, ignore hover behavior


        var layerHoverProp = null;
        var layerPinnedProp = null;
        var position = {
          x: mousePosition[0],
          y: mousePosition[1]
        };
        var pinnedPosition = {};
        layerHoverProp = (0, _layerUtils.getLayerHoverProp)({
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          layers: layers,
          layersToRender: layersToRender,
          datasets: datasets
        });
        var compareMode = interactionConfig.tooltip.config ? interactionConfig.tooltip.config.compareMode : false;
        var hasTooltip = pinned || clicked;
        var hasComparisonTooltip = compareMode || !clicked && !pinned;

        if (hasTooltip) {
          // project lnglat to screen so that tooltip follows the object on zoom
          var viewport = new _viewportMercatorProject["default"](mapState);
          var lngLat = clicked ? clicked.lngLat : pinned.coordinate;
          pinnedPosition = this._getHoverXY(viewport, lngLat);
          layerPinnedProp = (0, _layerUtils.getLayerHoverProp)({
            interactionConfig: interactionConfig,
            hoverInfo: clicked,
            layers: layers,
            layersToRender: layersToRender,
            datasets: datasets
          });

          if (layerHoverProp && layerPinnedProp) {
            layerHoverProp.primaryData = layerPinnedProp.data;
            layerHoverProp.compareType = interactionConfig.tooltip.config.compareType;
          }
        }

        var commonProp = {
          onClose: this._onCloseMapPopover,
          mapW: mapState.width,
          mapH: mapState.height,
          zoom: mapState.zoom
        };
        return /*#__PURE__*/_react["default"].createElement("div", null, hasTooltip && /*#__PURE__*/_react["default"].createElement(MapPopover, (0, _extends2["default"])({}, pinnedPosition, commonProp, {
          layerHoverProp: layerPinnedProp,
          coordinate: interactionConfig.coordinate.enabled && (pinned || {}).coordinate,
          frozen: Boolean(hasTooltip),
          isBase: compareMode
        })), hasComparisonTooltip && /*#__PURE__*/_react["default"].createElement(MapPopover, (0, _extends2["default"])({}, position, commonProp, {
          layerHoverProp: layerHoverProp,
          coordinate: interactionConfig.coordinate.enabled && coordinate
        })));
      }
      /* eslint-enable complexity */

    }, {
      key: "_getHoverXY",
      value: function _getHoverXY(viewport, lngLat) {
        var screenCoord = !viewport || !lngLat ? null : viewport.project(lngLat);
        return screenCoord && {
          x: screenCoord[0],
          y: screenCoord[1]
        };
      }
    }, {
      key: "_renderDeckOverlay",
      value: function _renderDeckOverlay(layersToRender) {
        var _this$props$deckGlPro,
            _this2 = this;

        var _this$props4 = this.props,
            mapState = _this$props4.mapState,
            mapStyle = _this$props4.mapStyle,
            layerData = _this$props4.layerData,
            layerOrder = _this$props4.layerOrder,
            layers = _this$props4.layers,
            visStateActions = _this$props4.visStateActions,
            mapboxApiAccessToken = _this$props4.mapboxApiAccessToken,
            mapboxApiUrl = _this$props4.mapboxApiUrl; // initialise layers from props if exists

        var deckGlLayers = ((_this$props$deckGlPro = this.props.deckGlProps) === null || _this$props$deckGlPro === void 0 ? void 0 : _this$props$deckGlPro.layers) || []; // wait until data is ready before render data layers

        if (layerData && layerData.length) {
          // last layer render first
          var dataLayers = layerOrder.slice().reverse().filter(function (idx) {
            return layers[idx].overlayType === _baseLayer.OVERLAY_TYPE.deckgl && layersToRender[layers[idx].id];
          }).reduce(function (overlays, idx) {
            var layerCallbacks = {
              onSetLayerDomain: function onSetLayerDomain(val) {
                return _this2._onLayerSetDomain(idx, val);
              }
            };
            var layerOverlay = (0, _layerUtils.renderDeckGlLayer)(_this2.props, layerCallbacks, idx);
            return overlays.concat(layerOverlay || []);
          }, []);
          deckGlLayers = deckGlLayers.concat(dataLayers);
        }

        if (mapStyle.visibleLayerGroups['3d building']) {
          deckGlLayers.push(new _dBuildingLayer["default"]({
            id: '_keplergl_3d-building',
            mapboxApiAccessToken: mapboxApiAccessToken,
            mapboxApiUrl: mapboxApiUrl,
            threeDBuildingColor: mapStyle.threeDBuildingColor,
            updateTriggers: {
              getFillColor: mapStyle.threeDBuildingColor
            }
          }));
        }

        return /*#__PURE__*/_react["default"].createElement(_react2["default"], (0, _extends2["default"])({}, this.props.deckGlProps, {
          viewState: mapState,
          id: "default-deckgl-overlay",
          layers: deckGlLayers,
          onBeforeRender: this._onBeforeRender,
          onHover: visStateActions.onLayerHover,
          onClick: visStateActions.onLayerClick,
          onError: this._onDeckError,
          ref: function ref(comp) {
            if (comp && comp.deck && !_this2._deck) {
              _this2._deck = comp.deck;
            }
          },
          onWebGLInitialized: function onWebGLInitialized(gl) {
            return _this2._onDeckInitialized(gl);
          }
        }));
      }
    }, {
      key: "_updateMapboxLayers",
      value: function _updateMapboxLayers() {
        var mapboxLayers = this.mapboxLayersSelector(this.props);

        if (!Object.keys(mapboxLayers).length && !Object.keys(this.previousLayers).length) {
          return;
        }

        (0, _mapboxUtils.updateMapboxLayers)(this._map, mapboxLayers, this.previousLayers);
        this.previousLayers = mapboxLayers;
      }
    }, {
      key: "_renderMapboxOverlays",
      value: function _renderMapboxOverlays() {
        if (this._map && this._map.isStyleLoaded()) {
          this._updateMapboxLayers();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props5 = this.props,
            mapState = _this$props5.mapState,
            mapStyle = _this$props5.mapStyle,
            mapStateActions = _this$props5.mapStateActions,
            mapLayers = _this$props5.mapLayers,
            layers = _this$props5.layers,
            MapComponent = _this$props5.MapComponent,
            datasets = _this$props5.datasets,
            mapboxApiAccessToken = _this$props5.mapboxApiAccessToken,
            mapboxApiUrl = _this$props5.mapboxApiUrl,
            mapControls = _this$props5.mapControls,
            locale = _this$props5.locale,
            uiStateActions = _this$props5.uiStateActions,
            visStateActions = _this$props5.visStateActions,
            interactionConfig = _this$props5.interactionConfig,
            editor = _this$props5.editor,
            index = _this$props5.index,
            isExport = _this$props5.isExport;
        var layersToRender = this.layersToRenderSelector(this.props);

        if (!mapStyle.bottomMapStyle) {
          // style not yet loaded
          return /*#__PURE__*/_react["default"].createElement("div", null);
        }

        var mapProps = _objectSpread(_objectSpread({}, mapState), {}, {
          preserveDrawingBuffer: true,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          onViewportChange: this._onViewportChange,
          transformRequest: _mapboxUtils2.transformRequest
        });

        var isEdit = (mapControls.mapDraw || {}).active;
        var hasGeocoderLayer = layers.find(function (l) {
          return l.id === _defaultSettings.GEOCODER_LAYER_ID;
        });
        return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledMapContainer, {
          style: MAP_STYLE.container
        }, /*#__PURE__*/_react["default"].createElement(MapControl, {
          datasets: datasets,
          dragRotate: mapState.dragRotate,
          isSplit: Boolean(mapLayers),
          isExport: isExport,
          layers: layers,
          layersToRender: layersToRender,
          mapIndex: index,
          mapControls: mapControls,
          readOnly: this.props.readOnly,
          scale: mapState.scale || 1,
          top: interactionConfig.geocoder && interactionConfig.geocoder.enabled ? 52 : 0,
          editor: editor,
          locale: locale,
          onTogglePerspective: mapStateActions.togglePerspective,
          onToggleSplitMap: mapStateActions.toggleSplitMap,
          onMapToggleLayer: this._handleMapToggleLayer,
          onToggleMapControl: this._toggleMapControl,
          onSetEditorMode: visStateActions.setEditorMode,
          onSetLocale: uiStateActions.setLocale,
          onToggleEditorVisibility: visStateActions.toggleEditorVisibility
        }), /*#__PURE__*/_react["default"].createElement(MapComponent, (0, _extends2["default"])({}, mapProps, {
          key: "bottom",
          ref: this._setMapboxMap,
          mapStyle: mapStyle.bottomMapStyle,
          getCursor: this.props.hoverInfo ? function () {
            return 'pointer';
          } : undefined,
          transitionDuration: TRANSITION_DURATION,
          onMouseMove: this.props.visStateActions.onMouseMove
        }), this._renderDeckOverlay(layersToRender), this._renderMapboxOverlays(), /*#__PURE__*/_react["default"].createElement(Editor, {
          index: index,
          datasets: datasets,
          editor: editor,
          filters: this.polygonFilters(this.props),
          isEnabled: isEdit,
          layers: layers,
          layersToRender: layersToRender,
          onDeleteFeature: visStateActions.deleteFeature,
          onSelect: visStateActions.setSelectedFeature,
          onUpdate: visStateActions.setFeatures,
          onTogglePolygonFilter: visStateActions.setPolygonFilterLayer,
          style: {
            pointerEvents: isEdit ? 'all' : 'none',
            position: 'absolute',
            display: editor.visible ? 'block' : 'none'
          }
        })), mapStyle.topMapStyle || hasGeocoderLayer ? /*#__PURE__*/_react["default"].createElement("div", {
          style: MAP_STYLE.top
        }, /*#__PURE__*/_react["default"].createElement(MapComponent, (0, _extends2["default"])({}, mapProps, {
          key: "top",
          mapStyle: mapStyle.topMapStyle
        }), this._renderDeckOverlay((0, _defineProperty2["default"])({}, _defaultSettings.GEOCODER_LAYER_ID, true)))) : null, this._renderMapPopover(layersToRender), /*#__PURE__*/_react["default"].createElement(Attribution, null));
      }
    }]);
    return MapContainer;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapContainer, "propTypes", {
    // required
    datasets: _propTypes["default"].object,
    interactionConfig: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layerOrder: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerData: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    mapState: _propTypes["default"].object.isRequired,
    mapControls: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    mousePos: _propTypes["default"].object.isRequired,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapboxApiUrl: _propTypes["default"].string,
    visStateActions: _propTypes["default"].object.isRequired,
    mapStateActions: _propTypes["default"].object.isRequired,
    uiStateActions: _propTypes["default"].object.isRequired,
    // optional
    readOnly: _propTypes["default"].bool,
    isExport: _propTypes["default"].bool,
    clicked: _propTypes["default"].object,
    hoverInfo: _propTypes["default"].object,
    mapLayers: _propTypes["default"].object,
    onMapToggleLayer: _propTypes["default"].func,
    onMapStyleLoaded: _propTypes["default"].func,
    onMapRender: _propTypes["default"].func,
    getMapboxRef: _propTypes["default"].func,
    index: _propTypes["default"].number
  });
  (0, _defineProperty2["default"])(MapContainer, "defaultProps", {
    MapComponent: _reactMapGl["default"],
    deckGlProps: {},
    index: 0
  });
  MapContainer.displayName = 'MapContainer';
  return MapContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21hcC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiTUFQX1NUWUxFIiwiY29udGFpbmVyIiwiZGlzcGxheSIsInBvc2l0aW9uIiwidG9wIiwicG9pbnRlckV2ZW50cyIsIk1BUEJPWEdMX1NUWUxFX1VQREFURSIsIk1BUEJPWEdMX1JFTkRFUiIsIlRSQU5TSVRJT05fRFVSQVRJT04iLCJBdHRyaWJ1dGlvbiIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJkZXBzIiwiTWFwUG9wb3ZlckZhY3RvcnkiLCJNYXBDb250cm9sRmFjdG9yeSIsIkVkaXRvckZhY3RvcnkiLCJNYXBQb3BvdmVyIiwiTWFwQ29udHJvbCIsIkVkaXRvciIsIk1hcENvbnRhaW5lciIsInByb3BzIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibWFwTGF5ZXJzIiwibGF5ZXJPcmRlciIsImxheWVyc1NlbGVjdG9yIiwibGF5ZXJEYXRhU2VsZWN0b3IiLCJtYXBMYXllcnNTZWxlY3RvciIsInJlZHVjZSIsImFjY3UiLCJsYXllciIsImlkeCIsImlkIiwiR0VPQ09ERVJfTEFZRVJfSUQiLCJzaG91bGRSZW5kZXJMYXllciIsIl9pc1Zpc2libGVNYXBMYXllciIsImZpbHRlcnMiLCJmaWx0ZXJzU2VsZWN0b3IiLCJmaWx0ZXIiLCJmIiwidHlwZSIsIkZJTFRFUl9UWVBFUyIsInBvbHlnb24iLCJsYXllck9yZGVyU2VsZWN0b3IiLCJsYXllcnNUb1JlbmRlclNlbGVjdG9yIiwiZ2VuZXJhdGVNYXBib3hMYXllcnMiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJvbkxheWVyQ2xpY2siLCJjb2xvckRvbWFpbiIsImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJJZCIsImluZGV4IiwibWFwSW5kZXgiLCJ0b2dnbGVMYXllckZvck1hcCIsInByZXZpb3VzTGF5ZXJzIiwiX3VwZGF0ZU1hcGJveExheWVycyIsIm9uTWFwU3R5bGVMb2FkZWQiLCJfbWFwIiwibWFwYm94IiwiZ2V0TWFwIiwib24iLCJfb25NYXBib3hTdHlsZVVwZGF0ZSIsIm9uTWFwUmVuZGVyIiwiZ2V0TWFwYm94UmVmIiwiZ2wiLCJsYXllckJsZW5kaW5nIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwibm90aWZpY2F0aW9uSWQiLCJfZGVja0dMRXJyb3JzRWxhcHNlZCIsImxhc3RTaG93biIsIkRhdGUiLCJub3ciLCJUSFJPVFRMRV9OT1RJRklDQVRJT05fVElNRSIsInVpU3RhdGVBY3Rpb25zIiwiYWRkTm90aWZpY2F0aW9uIiwidmlld1N0YXRlIiwib25WaWV3U3RhdGVDaGFuZ2UiLCJtYXBTdGF0ZUFjdGlvbnMiLCJ1cGRhdGVNYXAiLCJwYW5lbElkIiwidG9nZ2xlTWFwQ29udHJvbCIsIl9kZWNrIiwib2ZmIiwib25EZWNrSW5pdGlhbGl6ZWQiLCJsYXllcnNUb1JlbmRlciIsIm1hcFN0YXRlIiwiaG92ZXJJbmZvIiwiY2xpY2tlZCIsImRhdGFzZXRzIiwiaW50ZXJhY3Rpb25Db25maWciLCJtb3VzZVBvcyIsIm1vdXNlUG9zaXRpb24iLCJjb29yZGluYXRlIiwicGlubmVkIiwibGF5ZXJIb3ZlclByb3AiLCJsYXllclBpbm5lZFByb3AiLCJ4IiwieSIsInBpbm5lZFBvc2l0aW9uIiwiY29tcGFyZU1vZGUiLCJ0b29sdGlwIiwiY29uZmlnIiwiaGFzVG9vbHRpcCIsImhhc0NvbXBhcmlzb25Ub29sdGlwIiwidmlld3BvcnQiLCJXZWJNZXJjYXRvclZpZXdwb3J0IiwibG5nTGF0IiwiX2dldEhvdmVyWFkiLCJwcmltYXJ5RGF0YSIsImRhdGEiLCJjb21wYXJlVHlwZSIsImNvbW1vblByb3AiLCJvbkNsb3NlIiwiX29uQ2xvc2VNYXBQb3BvdmVyIiwibWFwVyIsIndpZHRoIiwibWFwSCIsImhlaWdodCIsInpvb20iLCJlbmFibGVkIiwiQm9vbGVhbiIsInNjcmVlbkNvb3JkIiwicHJvamVjdCIsIm1hcFN0eWxlIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJkZWNrR2xMYXllcnMiLCJkZWNrR2xQcm9wcyIsImxlbmd0aCIsImRhdGFMYXllcnMiLCJzbGljZSIsInJldmVyc2UiLCJvdmVybGF5VHlwZSIsIk9WRVJMQVlfVFlQRSIsImRlY2tnbCIsIm92ZXJsYXlzIiwibGF5ZXJDYWxsYmFja3MiLCJvblNldExheWVyRG9tYWluIiwidmFsIiwiX29uTGF5ZXJTZXREb21haW4iLCJsYXllck92ZXJsYXkiLCJjb25jYXQiLCJ2aXNpYmxlTGF5ZXJHcm91cHMiLCJwdXNoIiwiVGhyZWVEQnVpbGRpbmdMYXllciIsInRocmVlREJ1aWxkaW5nQ29sb3IiLCJ1cGRhdGVUcmlnZ2VycyIsImdldEZpbGxDb2xvciIsIl9vbkJlZm9yZVJlbmRlciIsIm9uTGF5ZXJIb3ZlciIsIl9vbkRlY2tFcnJvciIsImNvbXAiLCJkZWNrIiwiX29uRGVja0luaXRpYWxpemVkIiwibWFwYm94TGF5ZXJzIiwibWFwYm94TGF5ZXJzU2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiaXNTdHlsZUxvYWRlZCIsIk1hcENvbXBvbmVudCIsIm1hcENvbnRyb2xzIiwibG9jYWxlIiwiZWRpdG9yIiwiaXNFeHBvcnQiLCJib3R0b21NYXBTdHlsZSIsIm1hcFByb3BzIiwicHJlc2VydmVEcmF3aW5nQnVmZmVyIiwib25WaWV3cG9ydENoYW5nZSIsIl9vblZpZXdwb3J0Q2hhbmdlIiwidHJhbnNmb3JtUmVxdWVzdCIsImlzRWRpdCIsIm1hcERyYXciLCJhY3RpdmUiLCJoYXNHZW9jb2RlckxheWVyIiwiZmluZCIsImwiLCJkcmFnUm90YXRlIiwicmVhZE9ubHkiLCJzY2FsZSIsImdlb2NvZGVyIiwidG9nZ2xlUGVyc3BlY3RpdmUiLCJ0b2dnbGVTcGxpdE1hcCIsIl9oYW5kbGVNYXBUb2dnbGVMYXllciIsIl90b2dnbGVNYXBDb250cm9sIiwic2V0RWRpdG9yTW9kZSIsInNldExvY2FsZSIsInRvZ2dsZUVkaXRvclZpc2liaWxpdHkiLCJfc2V0TWFwYm94TWFwIiwidW5kZWZpbmVkIiwib25Nb3VzZU1vdmUiLCJfcmVuZGVyRGVja092ZXJsYXkiLCJfcmVuZGVyTWFwYm94T3ZlcmxheXMiLCJwb2x5Z29uRmlsdGVycyIsImRlbGV0ZUZlYXR1cmUiLCJzZXRTZWxlY3RlZEZlYXR1cmUiLCJzZXRGZWF0dXJlcyIsInNldFBvbHlnb25GaWx0ZXJMYXllciIsInZpc2libGUiLCJ0b3BNYXBTdHlsZSIsIl9yZW5kZXJNYXBQb3BvdmVyIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImFycmF5T2YiLCJhbnkiLCJib29sIiwib25NYXBUb2dnbGVMYXllciIsImZ1bmMiLCJudW1iZXIiLCJNYXBib3hHTE1hcCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLFNBQVMsRUFBRTtBQUNUQyxJQUFBQSxPQUFPLEVBQUUsY0FEQTtBQUVUQyxJQUFBQSxRQUFRLEVBQUU7QUFGRCxHQURLO0FBS2hCQyxFQUFBQSxHQUFHLEVBQUU7QUFDSEQsSUFBQUEsUUFBUSxFQUFFLFVBRFA7QUFFSEMsSUFBQUEsR0FBRyxFQUFFLEtBRkY7QUFHSEMsSUFBQUEsYUFBYSxFQUFFO0FBSFo7QUFMVyxDQUFsQjtBQVlBLElBQU1DLHFCQUFxQixHQUFHLFlBQTlCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFFBQXhCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsQ0FBNUI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxzQkFDbEIsZ0NBQUMsa0NBQUQscUJBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGlDQUVFO0FBQ0UsSUFBQSxTQUFTLEVB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Q21NLFdBQWIsR0FBMkIsY0FBM0I7QUFFQSxTQUFPbk0sWUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gbGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTWFwYm94R0xNYXAgZnJvbSAncmVhY3QtbWFwLWdsJztcbmltcG9ydCBEZWNrR0wgZnJvbSAnQGRlY2suZ2wvcmVhY3QnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IFdlYk1lcmNhdG9yVmlld3BvcnQgZnJvbSAndmlld3BvcnQtbWVyY2F0b3ItcHJvamVjdCc7XG5pbXBvcnQge2Vycm9yTm90aWZpY2F0aW9ufSBmcm9tICd1dGlscy9ub3RpZmljYXRpb25zLXV0aWxzJztcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IE1hcFBvcG92ZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvbWFwL21hcC1wb3BvdmVyJztcbmltcG9ydCBNYXBDb250cm9sRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL21hcC9tYXAtY29udHJvbCc7XG5pbXBvcnQge1N0eWxlZE1hcENvbnRhaW5lciwgU3R5bGVkQXR0cmJ1dGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgRWRpdG9yRmFjdG9yeSBmcm9tICcuL2VkaXRvci9lZGl0b3InO1xuXG4vLyB1dGlsc1xuaW1wb3J0IHtnZW5lcmF0ZU1hcGJveExheWVycywgdXBkYXRlTWFwYm94TGF5ZXJzfSBmcm9tICdsYXllcnMvbWFwYm94LXV0aWxzJztcbmltcG9ydCB7c2V0TGF5ZXJCbGVuZGluZ30gZnJvbSAndXRpbHMvZ2wtdXRpbHMnO1xuaW1wb3J0IHt0cmFuc2Zvcm1SZXF1ZXN0fSBmcm9tICd1dGlscy9tYXAtc3R5bGUtdXRpbHMvbWFwYm94LXV0aWxzJztcbmltcG9ydCB7Z2V0TGF5ZXJIb3ZlclByb3AsIHJlbmRlckRlY2tHbExheWVyfSBmcm9tICd1dGlscy9sYXllci11dGlscyc7XG5cbi8vIGRlZmF1bHQtc2V0dGluZ3NcbmltcG9ydCBUaHJlZURCdWlsZGluZ0xheWVyIGZyb20gJ2RlY2tnbC1sYXllcnMvM2QtYnVpbGRpbmctbGF5ZXIvM2QtYnVpbGRpbmctbGF5ZXInO1xuaW1wb3J0IHtcbiAgRklMVEVSX1RZUEVTLFxuICBHRU9DT0RFUl9MQVlFUl9JRCxcbiAgVEhST1RUTEVfTk9USUZJQ0FUSU9OX1RJTUVcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtPVkVSTEFZX1RZUEV9IGZyb20gJ2xheWVycy9iYXNlLWxheWVyJztcblxuLyoqIEB0eXBlIHt7W2tleTogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllc319ICovXG5jb25zdCBNQVBfU1RZTEUgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHRvcDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzBweCcsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH1cbn07XG5cbmNvbnN0IE1BUEJPWEdMX1NUWUxFX1VQREFURSA9ICdzdHlsZS5sb2FkJztcbmNvbnN0IE1BUEJPWEdMX1JFTkRFUiA9ICdyZW5kZXInO1xuY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDA7XG5cbmNvbnN0IEF0dHJpYnV0aW9uID0gKCkgPT4gKFxuICA8U3R5bGVkQXR0cmJ1dGlvbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpdGlvbi1sb2dvXCI+XG4gICAgICBCYXNlbWFwIGJ5OlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPVwibWFwYm94Z2wtY3RybC1sb2dvXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL1wiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJNYXBib3ggbG9nb1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cml0aW9uLWxpbmtcIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2tlcGxlci5nbC9wb2xpY3kvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICDCqSBrZXBsZXIuZ2wgfHsnICd9XG4gICAgICA8L2E+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9hYm91dC9tYXBzL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgwqkgTWFwYm94IHx7JyAnfVxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICDCqSBPcGVuU3RyZWV0TWFwIHx7JyAnfVxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vbWFwLWZlZWRiYWNrL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgPHN0cm9uZz5JbXByb3ZlIHRoaXMgbWFwPC9zdHJvbmc+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvU3R5bGVkQXR0cmJ1dGlvbj5cbik7XG5cbk1hcENvbnRhaW5lckZhY3RvcnkuZGVwcyA9IFtNYXBQb3BvdmVyRmFjdG9yeSwgTWFwQ29udHJvbEZhY3RvcnksIEVkaXRvckZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBDb250YWluZXJGYWN0b3J5KE1hcFBvcG92ZXIsIE1hcENvbnRyb2wsIEVkaXRvcikge1xuICBjbGFzcyBNYXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAvLyByZXF1aXJlZFxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBpbnRlcmFjdGlvbkNvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJCbGVuZGluZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJPcmRlcjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyRGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGZpbHRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwQ29udHJvbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtb3VzZVBvczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIG1hcGJveEFwaVVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZpc1N0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB1aVN0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgICAvLyBvcHRpb25hbFxuICAgICAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgICAgaXNFeHBvcnQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgY2xpY2tlZDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIGhvdmVySW5mbzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIG1hcExheWVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIG9uTWFwVG9nZ2xlTGF5ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25NYXBTdHlsZUxvYWRlZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvbk1hcFJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBnZXRNYXBib3hSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIE1hcENvbXBvbmVudDogTWFwYm94R0xNYXAsXG4gICAgICBkZWNrR2xQcm9wczoge30sXG4gICAgICBpbmRleDogMFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICB0aGlzLnByZXZpb3VzTGF5ZXJzID0ge1xuICAgICAgICAvLyBbbGF5ZXJzLmlkXTogbWFwYm94TGF5ZXJDb25maWdcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuX2RlY2sgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgLy8gdW5iaW5kIG1hcGJveGdsIGV2ZW50IGxpc3RlbmVyXG4gICAgICBpZiAodGhpcy5fbWFwKSB7XG4gICAgICAgIHRoaXMuX21hcC5vZmYoTUFQQk9YR0xfU1RZTEVfVVBEQVRFKTtcbiAgICAgICAgdGhpcy5fbWFwLm9mZihNQVBCT1hHTF9SRU5ERVIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxheWVyc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJzO1xuICAgIGxheWVyRGF0YVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJEYXRhO1xuICAgIG1hcExheWVyc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubWFwTGF5ZXJzO1xuICAgIGxheWVyT3JkZXJTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyT3JkZXI7XG4gICAgbGF5ZXJzVG9SZW5kZXJTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5sYXllcnNTZWxlY3RvcixcbiAgICAgIHRoaXMubGF5ZXJEYXRhU2VsZWN0b3IsXG4gICAgICB0aGlzLm1hcExheWVyc1NlbGVjdG9yLFxuICAgICAgLy8ge1tpZF06IHRydWUgXFwgZmFsc2V9XG4gICAgICAobGF5ZXJzLCBsYXllckRhdGEsIG1hcExheWVycykgPT5cbiAgICAgICAgbGF5ZXJzLnJlZHVjZShcbiAgICAgICAgICAoYWNjdSwgbGF5ZXIsIGlkeCkgPT4gKHtcbiAgICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgICBbbGF5ZXIuaWRdOlxuICAgICAgICAgICAgICBsYXllci5pZCAhPT0gR0VPQ09ERVJfTEFZRVJfSUQgJiZcbiAgICAgICAgICAgICAgbGF5ZXIuc2hvdWxkUmVuZGVyTGF5ZXIobGF5ZXJEYXRhW2lkeF0pICYmXG4gICAgICAgICAgICAgIHRoaXMuX2lzVmlzaWJsZU1hcExheWVyKGxheWVyLCBtYXBMYXllcnMpXG4gICAgICAgICAgfSksXG4gICAgICAgICAge31cbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBmaWx0ZXJzU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWx0ZXJzO1xuICAgIHBvbHlnb25GaWx0ZXJzID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWx0ZXJzU2VsZWN0b3IsIGZpbHRlcnMgPT5cbiAgICAgIGZpbHRlcnMuZmlsdGVyKGYgPT4gZi50eXBlID09PSBGSUxURVJfVFlQRVMucG9seWdvbilcbiAgICApO1xuXG4gICAgbWFwYm94TGF5ZXJzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubGF5ZXJzU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyRGF0YVNlbGVjdG9yLFxuICAgICAgdGhpcy5sYXllck9yZGVyU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyc1RvUmVuZGVyU2VsZWN0b3IsXG4gICAgICBnZW5lcmF0ZU1hcGJveExheWVyc1xuICAgICk7XG5cbiAgICAvKiBjb21wb25lbnQgcHJpdmF0ZSBmdW5jdGlvbnMgKi9cbiAgICBfaXNWaXNpYmxlTWFwTGF5ZXIobGF5ZXIsIG1hcExheWVycykge1xuICAgICAgLy8gaWYgbGF5ZXIuaWQgaXMgbm90IGluIG1hcExheWVycywgZG9uJ3QgcmVuZGVyIGl0XG4gICAgICByZXR1cm4gIW1hcExheWVycyB8fCAobWFwTGF5ZXJzICYmIG1hcExheWVyc1tsYXllci5pZF0pO1xuICAgIH1cblxuICAgIF9vbkNsb3NlTWFwUG9wb3ZlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLm9uTGF5ZXJDbGljayhudWxsKTtcbiAgICB9O1xuXG4gICAgX29uTGF5ZXJTZXREb21haW4gPSAoaWR4LCBjb2xvckRvbWFpbikgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMubGF5ZXJDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllcnNbaWR4XSwge1xuICAgICAgICBjb2xvckRvbWFpblxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9oYW5kbGVNYXBUb2dnbGVMYXllciA9IGxheWVySWQgPT4ge1xuICAgICAgY29uc3Qge2luZGV4OiBtYXBJbmRleCA9IDAsIHZpc1N0YXRlQWN0aW9uc30gPSB0aGlzLnByb3BzO1xuICAgICAgdmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUxheWVyRm9yTWFwKG1hcEluZGV4LCBsYXllcklkKTtcbiAgICB9O1xuXG4gICAgX29uTWFwYm94U3R5bGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAvLyBmb3JjZSByZWZyZXNoIG1hcGJveGdsIGxheWVyc1xuICAgICAgdGhpcy5wcmV2aW91c0xheWVycyA9IHt9O1xuICAgICAgdGhpcy5fdXBkYXRlTWFwYm94TGF5ZXJzKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbk1hcFN0eWxlTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25NYXBTdHlsZUxvYWRlZCh0aGlzLl9tYXApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfc2V0TWFwYm94TWFwID0gbWFwYm94ID0+IHtcbiAgICAgIGlmICghdGhpcy5fbWFwICYmIG1hcGJveCkge1xuICAgICAgICB0aGlzLl9tYXAgPSBtYXBib3guZ2V0TWFwKCk7XG4gICAgICAgIC8vIGkgbm90aWNlZCBpbiBjZXJ0YWluIGNvbnRleHQgd2UgZG9uJ3QgYWNjZXNzIHRoZSBhY3R1YWwgbWFwIGVsZW1lbnRcbiAgICAgICAgaWYgKCF0aGlzLl9tYXApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmluZCBtYXBib3hnbCBldmVudCBsaXN0ZW5lclxuICAgICAgICB0aGlzLl9tYXAub24oTUFQQk9YR0xfU1RZTEVfVVBEQVRFLCB0aGlzLl9vbk1hcGJveFN0eWxlVXBkYXRlKTtcblxuICAgICAgICB0aGlzLl9tYXAub24oTUFQQk9YR0xfUkVOREVSLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uTWFwUmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTWFwUmVuZGVyKHRoaXMuX21hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuZ2V0TWFwYm94UmVmKSB7XG4gICAgICAgIC8vIFRoZSBwYXJlbnQgY29tcG9uZW50IGNhbiBnYWluIGFjY2VzcyB0byBvdXIgTWFwYm94R2xNYXAgYnlcbiAgICAgICAgLy8gcHJvdmlkaW5nIHRoaXMgY2FsbGJhY2suIE5vdGUgdGhhdCAnbWFwYm94JyB3aWxsIGJlIG51bGwgd2hlbiB0aGVcbiAgICAgICAgLy8gcmVmIGlzIHVuc2V0IChlLmcuIHdoZW4gYSBzcGxpdCBtYXAgaXMgY2xvc2VkKS5cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRNYXBib3hSZWYobWFwYm94LCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX29uRGVja0luaXRpYWxpemVkKGdsKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkRlY2tJbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRGVja0luaXRpYWxpemVkKHRoaXMuX2RlY2ssIGdsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfb25CZWZvcmVSZW5kZXIgPSAoe2dsfSkgPT4ge1xuICAgICAgc2V0TGF5ZXJCbGVuZGluZyhnbCwgdGhpcy5wcm9wcy5sYXllckJsZW5kaW5nKTtcbiAgICB9O1xuXG4gICAgX29uRGVja0Vycm9yID0gKGVycm9yLCBsYXllcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYEFuIGVycm9yIGluIGRlY2suZ2w6ICR7ZXJyb3IubWVzc2FnZX0gaW4gJHtsYXllci5pZH1gO1xuICAgICAgY29uc3Qgbm90aWZpY2F0aW9uSWQgPSBgJHtsYXllci5pZH0tJHtlcnJvci5tZXNzYWdlfWA7XG5cbiAgICAgIC8vIFRocm90dGxlIGVycm9yIG5vdGlmaWNhdGlvbnMsIGFzIFJlYWN0IGRvZXNuJ3QgbGlrZSB0b28gbWFueSBzdGF0ZSBjaGFuZ2VzIGZyb20gaGVyZS5cbiAgICAgIHRoaXMuX2RlY2tHTEVycm9yc0VsYXBzZWQgPSB0aGlzLl9kZWNrR0xFcnJvcnNFbGFwc2VkIHx8IHt9O1xuICAgICAgY29uc3QgbGFzdFNob3duID0gdGhpcy5fZGVja0dMRXJyb3JzRWxhcHNlZFtub3RpZmljYXRpb25JZF07XG4gICAgICBpZiAoIWxhc3RTaG93biB8fCBsYXN0U2hvd24gPCBEYXRlLm5vdygpIC0gVEhST1RUTEVfTk9USUZJQ0FUSU9OX1RJTUUpIHtcbiAgICAgICAgdGhpcy5fZGVja0dMRXJyb3JzRWxhcHNlZFtub3RpZmljYXRpb25JZF0gPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgZXJyb3Igbm90aWZpY2F0aW9uIG9yIHVwZGF0ZSBleGlzdGluZyBvbmUgd2l0aCBzYW1lIGlkLlxuICAgICAgICAvLyBVcGRhdGUgaXMgcmVxdWlyZWQgdG8gcHJlc2VydmUgdGhlIG9yZGVyIG9mIG5vdGlmaWNhdGlvbnMgYXMgdGhleSBwcm9iYWJseSBhcmUgZ29pbmcgdG8gXCJqdW1wXCIgYmFzZWQgb24gb3JkZXIgb2YgZXJyb3JzLlxuICAgICAgICBjb25zdCB7dWlTdGF0ZUFjdGlvbnN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMuYWRkTm90aWZpY2F0aW9uKFxuICAgICAgICAgIGVycm9yTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIGlkOiBub3RpZmljYXRpb25JZFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb25zICovXG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4gICAgX3JlbmRlck1hcFBvcG92ZXIobGF5ZXJzVG9SZW5kZXIpIHtcbiAgICAgIC8vIFRPRE86IG1vdmUgdGhpcyBpbnRvIHJlZHVjZXIgc28gaXQgY2FuIGJlIHRlc3RlZFxuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBjbGlja2VkLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbW91c2VQb3M6IHttb3VzZVBvc2l0aW9uLCBjb29yZGluYXRlLCBwaW5uZWR9XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKCFtb3VzZVBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgLy8gaWYgY2xpY2tlZCBzb21ldGhpbmcsIGlnbm9yZSBob3ZlciBiZWhhdmlvclxuICAgICAgbGV0IGxheWVySG92ZXJQcm9wID0gbnVsbDtcbiAgICAgIGxldCBsYXllclBpbm5lZFByb3AgPSBudWxsO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB7eDogbW91c2VQb3NpdGlvblswXSwgeTogbW91c2VQb3NpdGlvblsxXX07XG4gICAgICBsZXQgcGlubmVkUG9zaXRpb24gPSB7fTtcblxuICAgICAgbGF5ZXJIb3ZlclByb3AgPSBnZXRMYXllckhvdmVyUHJvcCh7XG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBob3ZlckluZm8sXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbGF5ZXJzVG9SZW5kZXIsXG4gICAgICAgIGRhdGFzZXRzXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29tcGFyZU1vZGUgPSBpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZ1xuICAgICAgICA/IGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmNvbXBhcmVNb2RlXG4gICAgICAgIDogZmFsc2U7XG5cbiAgICAgIGNvbnN0IGhhc1Rvb2x0aXAgPSBwaW5uZWQgfHwgY2xpY2tlZDtcbiAgICAgIGNvbnN0IGhhc0NvbXBhcmlzb25Ub29sdGlwID0gY29tcGFyZU1vZGUgfHwgKCFjbGlja2VkICYmICFwaW5uZWQpO1xuXG4gICAgICBpZiAoaGFzVG9vbHRpcCkge1xuICAgICAgICAvLyBwcm9qZWN0IGxuZ2xhdCB0byBzY3JlZW4gc28gdGhhdCB0b29sdGlwIGZvbGxvd3MgdGhlIG9iamVjdCBvbiB6b29tXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gbmV3IFdlYk1lcmNhdG9yVmlld3BvcnQobWFwU3RhdGUpO1xuICAgICAgICBjb25zdCBsbmdMYXQgPSBjbGlja2VkID8gY2xpY2tlZC5sbmdMYXQgOiBwaW5uZWQuY29vcmRpbmF0ZTtcbiAgICAgICAgcGlubmVkUG9zaXRpb24gPSB0aGlzLl9nZXRIb3ZlclhZKHZpZXdwb3J0LCBsbmdMYXQpO1xuICAgICAgICBsYXllclBpbm5lZFByb3AgPSBnZXRMYXllckhvdmVyUHJvcCh7XG4gICAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgICAgaG92ZXJJbmZvOiBjbGlja2VkLFxuICAgICAgICAgIGxheWVycyxcbiAgICAgICAgICBsYXllcnNUb1JlbmRlcixcbiAgICAgICAgICBkYXRhc2V0c1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxheWVySG92ZXJQcm9wICYmIGxheWVyUGlubmVkUHJvcCkge1xuICAgICAgICAgIGxheWVySG92ZXJQcm9wLnByaW1hcnlEYXRhID0gbGF5ZXJQaW5uZWRQcm9wLmRhdGE7XG4gICAgICAgICAgbGF5ZXJIb3ZlclByb3AuY29tcGFyZVR5cGUgPSBpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5jb21wYXJlVHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgY29tbW9uUHJvcCA9IHtcbiAgICAgICAgb25DbG9zZTogdGhpcy5fb25DbG9zZU1hcFBvcG92ZXIsXG4gICAgICAgIG1hcFc6IG1hcFN0YXRlLndpZHRoLFxuICAgICAgICBtYXBIOiBtYXBTdGF0ZS5oZWlnaHQsXG4gICAgICAgIHpvb206IG1hcFN0YXRlLnpvb21cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2hhc1Rvb2x0aXAgJiYgKFxuICAgICAgICAgICAgPE1hcFBvcG92ZXJcbiAgICAgICAgICAgICAgey4uLnBpbm5lZFBvc2l0aW9ufVxuICAgICAgICAgICAgICB7Li4uY29tbW9uUHJvcH1cbiAgICAgICAgICAgICAgbGF5ZXJIb3ZlclByb3A9e2xheWVyUGlubmVkUHJvcH1cbiAgICAgICAgICAgICAgY29vcmRpbmF0ZT17aW50ZXJhY3Rpb25Db25maWcuY29vcmRpbmF0ZS5lbmFibGVkICYmIChwaW5uZWQgfHwge30pLmNvb3JkaW5hdGV9XG4gICAgICAgICAgICAgIGZyb3plbj17Qm9vbGVhbihoYXNUb29sdGlwKX1cbiAgICAgICAgICAgICAgaXNCYXNlPXtjb21wYXJlTW9kZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7aGFzQ29tcGFyaXNvblRvb2x0aXAgJiYgKFxuICAgICAgICAgICAgPE1hcFBvcG92ZXJcbiAgICAgICAgICAgICAgey4uLnBvc2l0aW9ufVxuICAgICAgICAgICAgICB7Li4uY29tbW9uUHJvcH1cbiAgICAgICAgICAgICAgbGF5ZXJIb3ZlclByb3A9e2xheWVySG92ZXJQcm9wfVxuICAgICAgICAgICAgICBjb29yZGluYXRlPXtpbnRlcmFjdGlvbkNvbmZpZy5jb29yZGluYXRlLmVuYWJsZWQgJiYgY29vcmRpbmF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG4gICAgX2dldEhvdmVyWFkodmlld3BvcnQsIGxuZ0xhdCkge1xuICAgICAgY29uc3Qgc2NyZWVuQ29vcmQgPSAhdmlld3BvcnQgfHwgIWxuZ0xhdCA/IG51bGwgOiB2aWV3cG9ydC5wcm9qZWN0KGxuZ0xhdCk7XG4gICAgICByZXR1cm4gc2NyZWVuQ29vcmQgJiYge3g6IHNjcmVlbkNvb3JkWzBdLCB5OiBzY3JlZW5Db29yZFsxXX07XG4gICAgfVxuXG4gICAgX3JlbmRlckRlY2tPdmVybGF5KGxheWVyc1RvUmVuZGVyKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgbGF5ZXJEYXRhLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIG1hcGJveEFwaVVybFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIC8vIGluaXRpYWxpc2UgbGF5ZXJzIGZyb20gcHJvcHMgaWYgZXhpc3RzXG4gICAgICBsZXQgZGVja0dsTGF5ZXJzID0gdGhpcy5wcm9wcy5kZWNrR2xQcm9wcz8ubGF5ZXJzIHx8IFtdO1xuXG4gICAgICAvLyB3YWl0IHVudGlsIGRhdGEgaXMgcmVhZHkgYmVmb3JlIHJlbmRlciBkYXRhIGxheWVyc1xuICAgICAgaWYgKGxheWVyRGF0YSAmJiBsYXllckRhdGEubGVuZ3RoKSB7XG4gICAgICAgIC8vIGxhc3QgbGF5ZXIgcmVuZGVyIGZpcnN0XG4gICAgICAgIGNvbnN0IGRhdGFMYXllcnMgPSBsYXllck9yZGVyXG4gICAgICAgICAgLnNsaWNlKClcbiAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgIGlkeCA9PiBsYXllcnNbaWR4XS5vdmVybGF5VHlwZSA9PT0gT1ZFUkxBWV9UWVBFLmRlY2tnbCAmJiBsYXllcnNUb1JlbmRlcltsYXllcnNbaWR4XS5pZF1cbiAgICAgICAgICApXG4gICAgICAgICAgLnJlZHVjZSgob3ZlcmxheXMsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJDYWxsYmFja3MgPSB7XG4gICAgICAgICAgICAgIG9uU2V0TGF5ZXJEb21haW46IHZhbCA9PiB0aGlzLl9vbkxheWVyU2V0RG9tYWluKGlkeCwgdmFsKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyT3ZlcmxheSA9IHJlbmRlckRlY2tHbExheWVyKHRoaXMucHJvcHMsIGxheWVyQ2FsbGJhY2tzLCBpZHgpO1xuICAgICAgICAgICAgcmV0dXJuIG92ZXJsYXlzLmNvbmNhdChsYXllck92ZXJsYXkgfHwgW10pO1xuICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgZGVja0dsTGF5ZXJzID0gZGVja0dsTGF5ZXJzLmNvbmNhdChkYXRhTGF5ZXJzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hcFN0eWxlLnZpc2libGVMYXllckdyb3Vwc1snM2QgYnVpbGRpbmcnXSkge1xuICAgICAgICBkZWNrR2xMYXllcnMucHVzaChcbiAgICAgICAgICBuZXcgVGhyZWVEQnVpbGRpbmdMYXllcih7XG4gICAgICAgICAgICBpZDogJ19rZXBsZXJnbF8zZC1idWlsZGluZycsXG4gICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgICAgIHRocmVlREJ1aWxkaW5nQ29sb3I6IG1hcFN0eWxlLnRocmVlREJ1aWxkaW5nQ29sb3IsXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2Vyczoge1xuICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IG1hcFN0eWxlLnRocmVlREJ1aWxkaW5nQ29sb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGVja0dMXG4gICAgICAgICAgey4uLnRoaXMucHJvcHMuZGVja0dsUHJvcHN9XG4gICAgICAgICAgdmlld1N0YXRlPXttYXBTdGF0ZX1cbiAgICAgICAgICBpZD1cImRlZmF1bHQtZGVja2dsLW92ZXJsYXlcIlxuICAgICAgICAgIGxheWVycz17ZGVja0dsTGF5ZXJzfVxuICAgICAgICAgIG9uQmVmb3JlUmVuZGVyPXt0aGlzLl9vbkJlZm9yZVJlbmRlcn1cbiAgICAgICAgICBvbkhvdmVyPXt2aXNTdGF0ZUFjdGlvbnMub25MYXllckhvdmVyfVxuICAgICAgICAgIG9uQ2xpY2s9e3Zpc1N0YXRlQWN0aW9ucy5vbkxheWVyQ2xpY2t9XG4gICAgICAgICAgb25FcnJvcj17dGhpcy5fb25EZWNrRXJyb3J9XG4gICAgICAgICAgcmVmPXtjb21wID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wICYmIGNvbXAuZGVjayAmJiAhdGhpcy5fZGVjaykge1xuICAgICAgICAgICAgICB0aGlzLl9kZWNrID0gY29tcC5kZWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25XZWJHTEluaXRpYWxpemVkPXtnbCA9PiB0aGlzLl9vbkRlY2tJbml0aWFsaXplZChnbCl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIF91cGRhdGVNYXBib3hMYXllcnMoKSB7XG4gICAgICBjb25zdCBtYXBib3hMYXllcnMgPSB0aGlzLm1hcGJveExheWVyc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhtYXBib3hMYXllcnMpLmxlbmd0aCAmJiAhT2JqZWN0LmtleXModGhpcy5wcmV2aW91c0xheWVycykubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlTWFwYm94TGF5ZXJzKHRoaXMuX21hcCwgbWFwYm94TGF5ZXJzLCB0aGlzLnByZXZpb3VzTGF5ZXJzKTtcblxuICAgICAgdGhpcy5wcmV2aW91c0xheWVycyA9IG1hcGJveExheWVycztcbiAgICB9XG5cbiAgICBfcmVuZGVyTWFwYm94T3ZlcmxheXMoKSB7XG4gICAgICBpZiAodGhpcy5fbWFwICYmIHRoaXMuX21hcC5pc1N0eWxlTG9hZGVkKCkpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTWFwYm94TGF5ZXJzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX29uVmlld3BvcnRDaGFuZ2UgPSB2aWV3U3RhdGUgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uVmlld1N0YXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25WaWV3U3RhdGVDaGFuZ2Uodmlld1N0YXRlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMubWFwU3RhdGVBY3Rpb25zLnVwZGF0ZU1hcCh2aWV3U3RhdGUpO1xuICAgIH07XG5cbiAgICBfdG9nZ2xlTWFwQ29udHJvbCA9IHBhbmVsSWQgPT4ge1xuICAgICAgY29uc3Qge2luZGV4LCB1aVN0YXRlQWN0aW9uc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICB1aVN0YXRlQWN0aW9ucy50b2dnbGVNYXBDb250cm9sKHBhbmVsSWQsIGluZGV4KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwTGF5ZXJzLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIE1hcENvbXBvbmVudCxcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIG1hcENvbnRyb2xzLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBlZGl0b3IsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBpc0V4cG9ydFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IGxheWVyc1RvUmVuZGVyID0gdGhpcy5sYXllcnNUb1JlbmRlclNlbGVjdG9yKHRoaXMucHJvcHMpO1xuXG4gICAgICBpZiAoIW1hcFN0eWxlLmJvdHRvbU1hcFN0eWxlKSB7XG4gICAgICAgIC8vIHN0eWxlIG5vdCB5ZXQgbG9hZGVkXG4gICAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBQcm9wcyA9IHtcbiAgICAgICAgLi4ubWFwU3RhdGUsXG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgb25WaWV3cG9ydENoYW5nZTogdGhpcy5fb25WaWV3cG9ydENoYW5nZSxcbiAgICAgICAgdHJhbnNmb3JtUmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgY29uc3QgaXNFZGl0ID0gKG1hcENvbnRyb2xzLm1hcERyYXcgfHwge30pLmFjdGl2ZTtcblxuICAgICAgY29uc3QgaGFzR2VvY29kZXJMYXllciA9IGxheWVycy5maW5kKGwgPT4gbC5pZCA9PT0gR0VPQ09ERVJfTEFZRVJfSUQpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTWFwQ29udGFpbmVyIHN0eWxlPXtNQVBfU1RZTEUuY29udGFpbmVyfT5cbiAgICAgICAgICA8TWFwQ29udHJvbFxuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgZHJhZ1JvdGF0ZT17bWFwU3RhdGUuZHJhZ1JvdGF0ZX1cbiAgICAgICAgICAgIGlzU3BsaXQ9e0Jvb2xlYW4obWFwTGF5ZXJzKX1cbiAgICAgICAgICAgIGlzRXhwb3J0PXtpc0V4cG9ydH1cbiAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxuICAgICAgICAgICAgbGF5ZXJzVG9SZW5kZXI9e2xheWVyc1RvUmVuZGVyfVxuICAgICAgICAgICAgbWFwSW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgbWFwQ29udHJvbHM9e21hcENvbnRyb2xzfVxuICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHl9XG4gICAgICAgICAgICBzY2FsZT17bWFwU3RhdGUuc2NhbGUgfHwgMX1cbiAgICAgICAgICAgIHRvcD17aW50ZXJhY3Rpb25Db25maWcuZ2VvY29kZXIgJiYgaW50ZXJhY3Rpb25Db25maWcuZ2VvY29kZXIuZW5hYmxlZCA/IDUyIDogMH1cbiAgICAgICAgICAgIGVkaXRvcj17ZWRpdG9yfVxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICBvblRvZ2dsZVBlcnNwZWN0aXZlPXttYXBTdGF0ZUFjdGlvbnMudG9nZ2xlUGVyc3BlY3RpdmV9XG4gICAgICAgICAgICBvblRvZ2dsZVNwbGl0TWFwPXttYXBTdGF0ZUFjdGlvbnMudG9nZ2xlU3BsaXRNYXB9XG4gICAgICAgICAgICBvbk1hcFRvZ2dsZUxheWVyPXt0aGlzLl9oYW5kbGVNYXBUb2dnbGVMYXllcn1cbiAgICAgICAgICAgIG9uVG9nZ2xlTWFwQ29udHJvbD17dGhpcy5fdG9nZ2xlTWFwQ29udHJvbH1cbiAgICAgICAgICAgIG9uU2V0RWRpdG9yTW9kZT17dmlzU3RhdGVBY3Rpb25zLnNldEVkaXRvck1vZGV9XG4gICAgICAgICAgICBvblNldExvY2FsZT17dWlTdGF0ZUFjdGlvbnMuc2V0TG9jYWxlfVxuICAgICAgICAgICAgb25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5PXt2aXNTdGF0ZUFjdGlvbnMudG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNYXBDb21wb25lbnRcbiAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cbiAgICAgICAgICAgIGtleT1cImJvdHRvbVwiXG4gICAgICAgICAgICByZWY9e3RoaXMuX3NldE1hcGJveE1hcH1cbiAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZS5ib3R0b21NYXBTdHlsZX1cbiAgICAgICAgICAgIGdldEN1cnNvcj17dGhpcy5wcm9wcy5ob3ZlckluZm8gPyAoKSA9PiAncG9pbnRlcicgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb249e1RSQU5TSVRJT05fRFVSQVRJT059XG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMub25Nb3VzZU1vdmV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuX3JlbmRlckRlY2tPdmVybGF5KGxheWVyc1RvUmVuZGVyKX1cbiAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJNYXBib3hPdmVybGF5cygpfVxuICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgZWRpdG9yPXtlZGl0b3J9XG4gICAgICAgICAgICAgIGZpbHRlcnM9e3RoaXMucG9seWdvbkZpbHRlcnModGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgIGlzRW5hYmxlZD17aXNFZGl0fVxuICAgICAgICAgICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgICAgICAgICAgbGF5ZXJzVG9SZW5kZXI9e2xheWVyc1RvUmVuZGVyfVxuICAgICAgICAgICAgICBvbkRlbGV0ZUZlYXR1cmU9e3Zpc1N0YXRlQWN0aW9ucy5kZWxldGVGZWF0dXJlfVxuICAgICAgICAgICAgICBvblNlbGVjdD17dmlzU3RhdGVBY3Rpb25zLnNldFNlbGVjdGVkRmVhdHVyZX1cbiAgICAgICAgICAgICAgb25VcGRhdGU9e3Zpc1N0YXRlQWN0aW9ucy5zZXRGZWF0dXJlc31cbiAgICAgICAgICAgICAgb25Ub2dnbGVQb2x5Z29uRmlsdGVyPXt2aXNTdGF0ZUFjdGlvbnMuc2V0UG9seWdvbkZpbHRlckxheWVyfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IGlzRWRpdCA/ICdhbGwnIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGVkaXRvci52aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01hcENvbXBvbmVudD5cbiAgICAgICAgICB7bWFwU3R5bGUudG9wTWFwU3R5bGUgfHwgaGFzR2VvY29kZXJMYXllciA/IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e01BUF9TVFlMRS50b3B9PlxuICAgICAgICAgICAgICA8TWFwQ29tcG9uZW50IHsuLi5tYXBQcm9wc30ga2V5PVwidG9wXCIgbWFwU3R5bGU9e21hcFN0eWxlLnRvcE1hcFN0eWxlfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyRGVja092ZXJsYXkoe1tHRU9DT0RFUl9MQVlFUl9JRF06IHRydWV9KX1cbiAgICAgICAgICAgICAgPC9NYXBDb21wb25lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7dGhpcy5fcmVuZGVyTWFwUG9wb3ZlcihsYXllcnNUb1JlbmRlcil9XG4gICAgICAgICAgPEF0dHJpYnV0aW9uIC8+XG4gICAgICAgIDwvU3R5bGVkTWFwQ29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBNYXBDb250YWluZXIuZGlzcGxheU5hbWUgPSAnTWFwQ29udGFpbmVyJztcblxuICByZXR1cm4gTWFwQ29udGFpbmVyO1xufVxuIl19