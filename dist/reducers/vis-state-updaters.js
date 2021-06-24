"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStateWithLayerAndData = updateStateWithLayerAndData;
exports.updateStateOnLayerVisibilityChange = updateStateOnLayerVisibilityChange;
exports.layerConfigChangeUpdater = layerConfigChangeUpdater;
exports.layerTextLabelChangeUpdater = layerTextLabelChangeUpdater;
exports.layerDataIdChangeUpdater = layerDataIdChangeUpdater;
exports.layerTypeChangeUpdater = layerTypeChangeUpdater;
exports.layerVisualChannelChangeUpdater = layerVisualChannelChangeUpdater;
exports.layerVisConfigChangeUpdater = layerVisConfigChangeUpdater;
exports.setFilterAnimationTimeUpdater = setFilterAnimationTimeUpdater;
exports.setFilterAnimationWindowUpdater = setFilterAnimationWindowUpdater;
exports.setFilterUpdater = setFilterUpdater;
exports.interactionConfigChangeUpdater = interactionConfigChangeUpdater;
exports.renameDatasetUpdater = renameDatasetUpdater;
exports.loadFileStepSuccessUpdater = loadFileStepSuccessUpdater;
exports.loadNextFileUpdater = loadNextFileUpdater;
exports.makeLoadFileTask = makeLoadFileTask;
exports.processFileContentUpdater = processFileContentUpdater;
exports.parseProgress = parseProgress;
exports.addDefaultLayers = addDefaultLayers;
exports.addDefaultTooltips = addDefaultTooltips;
exports.initialFileLoadingProgress = initialFileLoadingProgress;
exports.updateFileLoadingProgressUpdater = updateFileLoadingProgressUpdater;
exports.updateAllLayerDomainData = updateAllLayerDomainData;
exports.updateAnimationDomain = updateAnimationDomain;
exports.setFeaturesUpdater = setFeaturesUpdater;
exports.deleteFeatureUpdater = deleteFeatureUpdater;
exports.setPolygonFilterLayerUpdater = setPolygonFilterLayerUpdater;
exports.sortTableColumnUpdater = sortTableColumnUpdater;
exports.pinTableColumnUpdater = pinTableColumnUpdater;
exports.copyTableColumnUpdater = copyTableColumnUpdater;
exports.toggleEditorVisibilityUpdater = toggleEditorVisibilityUpdater;
exports.setFilterAnimationTimeConfigUpdater = setFilterAnimationTimeConfigUpdater;
exports.setLayerAnimationTimeConfigUpdater = setLayerAnimationTimeConfigUpdater;
exports.setSelectedFeatureUpdater = exports.setEditorModeUpdater = exports.setMapInfoUpdater = exports.applyCPUFilterUpdater = exports.loadFilesErrUpdater = exports.nextFileBatchUpdater = exports.loadFilesUpdater = exports.updateVisDataUpdater = exports.toggleLayerForMapUpdater = exports.toggleSplitMapUpdater = exports.mouseMoveUpdater = exports.mapClickUpdater = exports.layerClickUpdater = exports.layerHoverUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.showDatasetTableUpdater = exports.updateLayerBlendingUpdater = exports.removeDatasetUpdater = exports.reorderLayerUpdater = exports.duplicateLayerUpdater = exports.removeLayerUpdater = exports.addLayerUpdater = exports.removeFilterUpdater = exports.toggleFilterFeatureUpdater = exports.enlargeFilterUpdater = exports.updateLayerAnimationSpeedUpdater = exports.setLayerAnimationTimeUpdater = exports.updateFilterAnimationSpeedUpdater = exports.toggleLayerAnimationUpdater = exports.toggleFilterAnimationUpdater = exports.layerColorUIChangeUpdater = exports.addFilterUpdater = exports.setFilterPlotUpdater = exports.INITIAL_VIS_STATE = exports.DEFAULT_EDITOR = exports.DEFAULT_ANIMATION_CONFIG = void 0;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _window = require("global/window");

var _tasks = require("react-palm/tasks");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _lodash2 = _interopRequireDefault(require("lodash.uniq"));

var _lodash3 = _interopRequireDefault(require("lodash.get"));

var _lodash4 = _interopRequireDefault(require("lodash.xor"));

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _dataUtils = require("../utils/data-utils");

var _tasks2 = require("../tasks/tasks");

var _visStateActions = require("../actions/vis-state-actions");

var _interactionUtils = require("../utils/interaction-utils");

var _filterUtils = require("../utils/filter-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _datasetUtils = require("../utils/dataset-utils");

var _keplerTable = require("../utils/table-utils/kepler-table");

var _utils = require("../utils/utils");

var _layerUtils = require("../utils/layer-utils");

var _visStateMerger = require("./vis-state-merger");

var _splitMapUtils = require("../utils/split-map-utils");

var _layers = require("../layers");

var _layerFactory = require("../layers/layer-factory");

var _defaultSettings = require("../constants/default-settings");

var _composerHelpers = require("./composer-helpers");

var _schemas = _interopRequireDefault(require("../schemas"));

var _excluded = ["dataId"];

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// type imports

/** @typedef {import('./vis-state-updaters').Field} Field */

/** @typedef {import('./vis-state-updaters').Filter} Filter */

/** @typedef {import('./vis-state-updaters').KeplerTable} KeplerTable */

/** @typedef {import('./vis-state-updaters').VisState} VisState */

/** @typedef {import('./vis-state-updaters').Datasets} Datasets */

/** @typedef {import('./vis-state-updaters').AnimationConfig} AnimationConfig */

/** @typedef {import('./vis-state-updaters').Editor} Editor */
// react-palm
// disable capture exception for react-palm call to withTask
(0, _tasks.disableStackCapturing)();
/**
 * Updaters for `visState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {visStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             visState: visStateUpdaters.enlargeFilterUpdater(
 *               state.keplerGl.foo.visState,
 *               {idx: 0}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

var visStateUpdaters = null;
/* eslint-enable no-unused-vars */

/** @type {AnimationConfig} */

var DEFAULT_ANIMATION_CONFIG = {
  domain: null,
  currentTime: null,
  speed: 1,
  isAnimating: false,
  timeFormat: null,
  timezone: null,
  defaultTimeFormat: null
};
/** @type {Editor} */

exports.DEFAULT_ANIMATION_CONFIG = DEFAULT_ANIMATION_CONFIG;
var DEFAULT_EDITOR = {
  mode: _defaultSettings.EDITOR_MODES.DRAW_POLYGON,
  features: [],
  selectedFeature: null,
  visible: true
};
/**
 * Default initial `visState`
 * @memberof visStateUpdaters
 * @constant
 * @type {VisState}
 * @public
 */

exports.DEFAULT_EDITOR = DEFAULT_EDITOR;
var INITIAL_VIS_STATE = {
  // map info
  mapInfo: {
    title: '',
    description: ''
  },
  // layers
  layers: [],
  layerData: [],
  layerToBeMerged: [],
  layerOrder: [],
  // filters
  filters: [],
  filterToBeMerged: [],
  // a collection of multiple dataset
  datasets: {},
  editingDataset: undefined,
  interactionConfig: (0, _interactionUtils.getDefaultInteraction)(),
  interactionToBeMerged: undefined,
  layerBlending: 'normal',
  hoverInfo: undefined,
  clicked: undefined,
  mousePos: {},
  // this is used when user split maps
  splitMaps: [// this will contain a list of objects to
    // describe the state of layer availability and visibility for each map
    // [
    //   {
    //      layers: {layer_id: true | false}
    //   }
    // ]
  ],
  splitMapsToBeMerged: [],
  // defaults layer classes
  layerClasses: _layers.LayerClasses,
  // default animation
  // time in unix timestamp (milliseconds) (the number of seconds since the Unix Epoch)
  animationConfig: DEFAULT_ANIMATION_CONFIG,
  editor: DEFAULT_EDITOR,
  fileLoading: false,
  fileLoadingProgress: {},
  loaders: [],
  loadOptions: {},
  // visStateMergers
  mergers: _visStateMerger.VIS_STATE_MERGERS,
  // kepler schemas
  schema: _schemas["default"]
};
/**
 * Update state with updated layer and layerData
 * @type {typeof import('./vis-state-updaters').updateStateWithLayerAndData}
 *
 */

exports.INITIAL_VIS_STATE = INITIAL_VIS_STATE;

function updateStateWithLayerAndData(state, _ref) {
  var layerData = _ref.layerData,
      layer = _ref.layer,
      idx = _ref.idx;
  return _objectSpread(_objectSpread({}, state), {}, {
    layers: state.layers.map(function (lyr, i) {
      return i === idx ? layer : lyr;
    }),
    layerData: layerData ? state.layerData.map(function (d, i) {
      return i === idx ? layerData : d;
    }) : state.layerData
  });
}

function updateStateOnLayerVisibilityChange(state, layer) {
  var newState = state;

  if (state.splitMaps.length) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      splitMaps: layer.config.isVisible ? (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, layer) : (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layer)
    });
  }

  if (layer.config.animation.enabled) {
    newState = updateAnimationDomain(state);
  }

  return newState;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerConfigChangeUpdater}
 * @returns nextState
 */


function layerConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newConfig);

  if (typeof action.newConfig.dataId === 'string') {
    var _action$newConfig = action.newConfig,
        dataId = _action$newConfig.dataId,
        restConfig = (0, _objectWithoutProperties2["default"])(_action$newConfig, _excluded);
    var stateWithDataId = layerDataIdChangeUpdater(state, {
      oldLayer: oldLayer,
      newConfig: {
        dataId: dataId
      }
    });
    var nextLayer = stateWithDataId.layers.find(function (l) {
      return l.id === oldLayer.id;
    });
    return nextLayer && Object.keys(restConfig).length ? layerConfigChangeUpdater(stateWithDataId, {
      oldLayer: nextLayer,
      newConfig: restConfig
    }) : stateWithDataId;
  }

  var newLayer = oldLayer.updateLayerConfig(action.newConfig);
  var layerData; // let newLayer;

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];
    var updateLayerDataResult = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData);
    layerData = updateLayerDataResult.layerData;
    newLayer = updateLayerDataResult.layer;
  }

  var newState = state;

  if ('isVisible' in action.newConfig) {
    newState = updateStateOnLayerVisibilityChange(state, newLayer);
  }

  return updateStateWithLayerAndData(newState, {
    layer: newLayer,
    layerData: layerData,
    idx: idx
  });
}

function addOrRemoveTextLabels(newFields, textLabel) {
  var newTextLabel = textLabel.slice();
  var currentFields = textLabel.map(function (tl) {
    return tl.field && tl.field.name;
  }).filter(function (d) {
    return d;
  });
  var addFields = newFields.filter(function (f) {
    return !currentFields.includes(f.name);
  });
  var deleteFields = currentFields.filter(function (f) {
    return !newFields.find(function (fd) {
      return fd.name === f;
    });
  }); // delete

  newTextLabel = newTextLabel.filter(function (tl) {
    return tl.field && !deleteFields.includes(tl.field.name);
  });
  newTextLabel = !newTextLabel.length ? [_layerFactory.DEFAULT_TEXT_LABEL] : newTextLabel; // add

  newTextLabel = [].concat((0, _toConsumableArray2["default"])(newTextLabel.filter(function (tl) {
    return tl.field;
  })), (0, _toConsumableArray2["default"])(addFields.map(function (af) {
    return _objectSpread(_objectSpread({}, _layerFactory.DEFAULT_TEXT_LABEL), {}, {
      field: af
    });
  })));
  return newTextLabel;
}

function updateTextLabelPropAndValue(idx, prop, value, textLabel) {
  if (!textLabel[idx].hasOwnProperty(prop)) {
    return textLabel;
  }

  var newTextLabel = textLabel.slice();

  if (prop && (value || textLabel.length === 1)) {
    newTextLabel = textLabel.map(function (tl, i) {
      return i === idx ? _objectSpread(_objectSpread({}, tl), {}, (0, _defineProperty2["default"])({}, prop, value)) : tl;
    });
  } else if (prop === 'field' && value === null && textLabel.length > 1) {
    // remove label when field value is set to null
    newTextLabel.splice(idx, 1);
  }

  return newTextLabel;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerTextLabelChangeUpdater}
 * @returns nextState
 */


function layerTextLabelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      idx = action.idx,
      prop = action.prop,
      value = action.value;
  var textLabel = oldLayer.config.textLabel;
  var newTextLabel = textLabel.slice();

  if (!textLabel[idx] && idx === textLabel.length) {
    // if idx is set to length, add empty text label
    newTextLabel = [].concat((0, _toConsumableArray2["default"])(textLabel), [_layerFactory.DEFAULT_TEXT_LABEL]);
  }

  if (idx === 'all' && prop === 'fields') {
    newTextLabel = addOrRemoveTextLabels(value, textLabel);
  } else {
    newTextLabel = updateTextLabelPropAndValue(idx, prop, value, newTextLabel);
  } // update text label prop and value


  return layerConfigChangeUpdater(state, {
    oldLayer: oldLayer,
    newConfig: {
      textLabel: newTextLabel
    }
  });
}

function validateExistingLayerWithData(dataset, layerClasses, layer) {
  var loadedLayer = (0, _visStateMerger.serializeLayer)(layer);
  return (0, _visStateMerger.validateLayerWithData)(dataset, loadedLayer, layerClasses, {
    allowEmptyColumn: true
  });
}
/**
 * Update layer config dataId
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerDataIdChangeUpdater}
 * @returns nextState
 */


function layerDataIdChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig;
  var dataId = newConfig.dataId;

  if (!oldLayer || !state.datasets[dataId]) {
    return state;
  }

  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig({
    dataId: dataId
  }); // this may happen when a layer is new (type: null and no columns) but it's not ready to be saved

  if (newLayer.isValidToSave()) {
    var validated = validateExistingLayerWithData(state.datasets[dataId], state.layerClasses, newLayer); // if cant validate it with data create a new one

    if (!validated) {
      newLayer = new state.layerClasses[oldLayer.type]({
        dataId: dataId,
        id: oldLayer.id
      });
    } else {
      newLayer = validated;
    }
  }

  newLayer = newLayer.updateLayerConfig({
    isVisible: oldLayer.config.isVisible,
    isConfigActive: true
  });
  newLayer.updateLayerDomain(state.datasets);

  var _calculateLayerData = (0, _layerUtils.calculateLayerData)(newLayer, state, undefined),
      layerData = _calculateLayerData.layerData,
      layer = _calculateLayerData.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerTypeChangeUpdater}
 * @public
 */


function layerTypeChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newType = action.newType;

  if (!oldLayer) {
    return state;
  }

  var oldId = oldLayer.id;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldId;
  });

  if (!state.layerClasses[newType]) {
    _window.console.error("".concat(newType, " is not a valid layer type"));

    return state;
  } // get a mint layer, with new id and type
  // because deck.gl uses id to match between new and old layer.
  // If type has changed but id is the same, it will break


  var newLayer = new state.layerClasses[newType]();
  newLayer.assignConfigToLayer(oldLayer.config, oldLayer.visConfigSettings);
  newLayer.updateLayerDomain(state.datasets);

  var _calculateLayerData2 = (0, _layerUtils.calculateLayerData)(newLayer, state),
      layerData = _calculateLayerData2.layerData,
      layer = _calculateLayerData2.layer;

  var newState = updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });

  if (layer.config.animation.enabled || oldLayer.config.animation.enabled) {
    newState = updateAnimationDomain(newState);
  } // update splitMap layer id


  if (state.splitMaps.length) {
    newState = _objectSpread(_objectSpread({}, newState), {}, {
      splitMaps: newState.splitMaps.map(function (settings) {
        var _settings$layers = settings.layers,
            oldLayerMap = _settings$layers[oldId],
            otherLayers = (0, _objectWithoutProperties2["default"])(_settings$layers, [oldId].map(_toPropertyKey));
        return oldId in settings.layers ? _objectSpread(_objectSpread({}, settings), {}, {
          layers: _objectSpread(_objectSpread({}, otherLayers), {}, (0, _defineProperty2["default"])({}, layer.id, oldLayerMap))
        }) : settings;
      })
    });
  }

  return newState;
}
/**
 * Update layer visual channel
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerVisualChannelChangeUpdater}
 * @returns {Object} nextState
 * @public
 */


function layerVisualChannelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig,
      channel = action.channel;

  if (!oldLayer.config.dataId) {
    return state;
  }

  var dataset = state.datasets[oldLayer.config.dataId];
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig(newConfig);
  newLayer.updateLayerVisualChannel(dataset, channel);
  var oldLayerData = state.layerData[idx];

  var _calculateLayerData3 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
      layerData = _calculateLayerData3.layerData,
      layer = _calculateLayerData3.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer `visConfig`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerVisConfigChangeUpdater}
 * @public
 */


function layerVisConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newVisConfig);

  var newVisConfig = _objectSpread(_objectSpread({}, oldLayer.config.visConfig), action.newVisConfig);

  var newLayer = oldLayer.updateLayerConfig({
    visConfig: newVisConfig
  });

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];

    var _calculateLayerData4 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
        layerData = _calculateLayerData4.layerData,
        layer = _calculateLayerData4.layer;

    return updateStateWithLayerAndData(state, {
      layerData: layerData,
      layer: layer,
      idx: idx
    });
  }

  return updateStateWithLayerAndData(state, {
    layer: newLayer,
    idx: idx
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterAnimationTimeUpdater}
 * @public
 */


function setFilterAnimationTimeUpdater(state, action) {
  return setFilterUpdater(state, action);
}
/**
 * Update filter animation window
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterAnimationWindowUpdater}
 * @public
 */


function setFilterAnimationWindowUpdater(state, _ref2) {
  var id = _ref2.id,
      animationWindow = _ref2.animationWindow;
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f) {
      return f.id === id ? _objectSpread(_objectSpread({}, f), {}, {
        animationWindow: animationWindow
      }) : f;
    })
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterUpdater}
 * @public
 */


function setFilterUpdater(state, action) {
  var idx = action.idx,
      prop = action.prop,
      value = action.value,
      _action$valueIndex = action.valueIndex,
      valueIndex = _action$valueIndex === void 0 ? 0 : _action$valueIndex;
  var oldFilter = state.filters[idx];

  if (!oldFilter) {
    _window.console.error("filters.".concat(idx, " is undefined"));

    return state;
  }

  var newFilter = (0, _utils.set)([prop], value, oldFilter);
  var newState = state;
  var _newFilter = newFilter,
      dataId = _newFilter.dataId; // Ensuring backward compatibility

  var datasetIds = (0, _utils.toArray)(dataId);

  switch (prop) {
    // TODO: Next PR for UI if we update dataId, we need to consider two cases:
    // 1. dataId is empty: create a default filter
    // 2. Add a new dataset id
    case _filterUtils.FILTER_UPDATER_PROPS.dataId:
      // if trying to update filter dataId. create an empty new filter
      newFilter = (0, _filterUtils.updateFilterDataId)(dataId);
      break;

    case _filterUtils.FILTER_UPDATER_PROPS.name:
      // we are supporting the current functionality
      // TODO: Next PR for UI filter name will only update filter name but it won't have side effects
      // we are gonna use pair of datasets and fieldIdx to update the filter
      var datasetId = newFilter.dataId[valueIndex];

      var _applyFilterFieldName = (0, _filterUtils.applyFilterFieldName)(newFilter, state.datasets[datasetId], value, valueIndex, {
        mergeDomain: false
      }),
          updatedFilter = _applyFilterFieldName.filter,
          newDataset = _applyFilterFieldName.dataset;

      if (!updatedFilter) {
        return state;
      }

      newFilter = updatedFilter;

      if (newFilter.gpu) {
        newFilter = (0, _gpuFilterUtils.setFilterGpuMode)(newFilter, state.filters);
        newFilter = (0, _gpuFilterUtils.assignGpuChannel)(newFilter, state.filters);
      }

      newState = (0, _utils.set)(['datasets', datasetId], newDataset, state); // only filter the current dataset

      break;

    case _filterUtils.FILTER_UPDATER_PROPS.layerId:
      // We need to update only datasetId/s if we have added/removed layers
      // - check for layerId changes (XOR works because of string values)
      // if no differences between layerIds, don't do any filtering
      // @ts-ignore
      var layerIdDifference = (0, _lodash4["default"])(newFilter.layerId, oldFilter.layerId);
      var layerDataIds = (0, _lodash2["default"])(layerIdDifference.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      })); // only filter datasetsIds

      datasetIds = layerDataIds; // Update newFilter dataIds

      var newDataIds = (0, _lodash2["default"])(newFilter.layerId.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      }));
      newFilter = _objectSpread(_objectSpread({}, newFilter), {}, {
        dataId: newDataIds
      });
      break;

    default:
      break;
  }

  var enlargedFilter = state.filters.find(function (f) {
    return f.enlarged;
  });

  if (enlargedFilter && enlargedFilter.id !== newFilter.id) {
    // there should be only one enlarged filter
    newFilter.enlarged = false;
  } // save new filters to newState


  newState = (0, _utils.set)(['filters', idx], newFilter, newState); // if we are currently setting a prop that only requires to filter the current
  // dataset we will pass only the current dataset to applyFiltersToDatasets and
  // updateAllLayerDomainData otherwise we pass the all list of datasets as defined in dataId

  var datasetIdsToFilter = _filterUtils.LIMITED_FILTER_EFFECT_PROPS[prop] ? [datasetIds[valueIndex]] : datasetIds; // filter data

  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(datasetIdsToFilter, newState.datasets, newState.filters, newState.layers);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState); // dataId is an array
  // pass only the dataset we need to update

  newState = updateAllLayerDomainData(newState, datasetIdsToFilter, newFilter);
  return newState;
}
/**
 * Set the property of a filter plot
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterPlotUpdater}
 * @public
 */


var setFilterPlotUpdater = function setFilterPlotUpdater(state, _ref3) {
  var idx = _ref3.idx,
      newProp = _ref3.newProp,
      _ref3$valueIndex = _ref3.valueIndex,
      valueIndex = _ref3$valueIndex === void 0 ? 0 : _ref3$valueIndex;

  var newFilter = _objectSpread(_objectSpread({}, state.filters[idx]), newProp);

  var prop = Object.keys(newProp)[0];

  if (prop === 'yAxis') {
    var plotType = (0, _filterUtils.getDefaultFilterPlotType)(newFilter); // TODO: plot is not supported in multi dataset filter for now

    if (plotType) {
      newFilter = _objectSpread(_objectSpread(_objectSpread({}, newFilter), (0, _filterUtils.getFilterPlot)(_objectSpread(_objectSpread({}, newFilter), {}, {
        plotType: plotType
      }), state.datasets[newFilter.dataId[valueIndex]])), {}, {
        plotType: plotType
      });
    }
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === idx ? newFilter : f;
    })
  });
};
/**
 * Add a new filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').addFilterUpdater}
 * @public
 */


exports.setFilterPlotUpdater = setFilterPlotUpdater;

var addFilterUpdater = function addFilterUpdater(state, action) {
  return !action.dataId ? state : _objectSpread(_objectSpread({}, state), {}, {
    filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [(0, _filterUtils.getDefaultFilter)(action.dataId)])
  });
};
/**
 * Set layer color palette ui state
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerColorUIChangeUpdater}
 */


exports.addFilterUpdater = addFilterUpdater;

var layerColorUIChangeUpdater = function layerColorUIChangeUpdater(state, _ref4) {
  var oldLayer = _ref4.oldLayer,
      prop = _ref4.prop,
      newConfig = _ref4.newConfig;
  var oldVixConfig = oldLayer.config.visConfig[prop];
  var newLayer = oldLayer.updateLayerColorUI(prop, newConfig);
  var newVisConfig = newLayer.config.visConfig[prop];

  if (oldVixConfig !== newVisConfig) {
    return layerVisConfigChangeUpdater(state, {
      oldLayer: oldLayer,
      newVisConfig: (0, _defineProperty2["default"])({}, prop, newVisConfig)
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: state.layers.map(function (l) {
      return l.id === oldLayer.id ? newLayer : l;
    })
  });
};
/**
 * Start and end filter animation
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleFilterAnimationUpdater}
 * @public
 */


exports.layerColorUIChangeUpdater = layerColorUIChangeUpdater;

var toggleFilterAnimationUpdater = function toggleFilterAnimationUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        isAnimating: !f.isAnimating
      }) : f;
    })
  });
};
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleLayerAnimationUpdater}
 * @public
 */


exports.toggleFilterAnimationUpdater = toggleFilterAnimationUpdater;

var toggleLayerAnimationUpdater = function toggleLayerAnimationUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      isAnimating: !state.animationConfig.isAnimating
    })
  });
};
/**
 * Change filter animation speed
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateFilterAnimationSpeedUpdater}
 * @public
 */


exports.toggleLayerAnimationUpdater = toggleLayerAnimationUpdater;

var updateFilterAnimationSpeedUpdater = function updateFilterAnimationSpeedUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        speed: action.speed
      }) : f;
    })
  });
};
/**
 * Reset animation config current time to a specified value
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setLayerAnimationTimeUpdater}
 * @public
 *
 */


exports.updateFilterAnimationSpeedUpdater = updateFilterAnimationSpeedUpdater;

var setLayerAnimationTimeUpdater = function setLayerAnimationTimeUpdater(state, _ref5) {
  var value = _ref5.value;
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      currentTime: value
    })
  });
};
/**
 * Update animation speed with the vertical speed slider
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateLayerAnimationSpeedUpdater}
 * @public
 *
 */


exports.setLayerAnimationTimeUpdater = setLayerAnimationTimeUpdater;

var updateLayerAnimationSpeedUpdater = function updateLayerAnimationSpeedUpdater(state, _ref6) {
  var speed = _ref6.speed;
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      speed: speed
    })
  });
};
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').enlargeFilterUpdater}
 * @public
 */


exports.updateLayerAnimationSpeedUpdater = updateLayerAnimationSpeedUpdater;

var enlargeFilterUpdater = function enlargeFilterUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        enlarged: !f.enlarged
      }) : f;
    })
  });
};
/**
 * Toggles filter feature visibility
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleFilterFeatureUpdater}
 */


exports.enlargeFilterUpdater = enlargeFilterUpdater;

var toggleFilterFeatureUpdater = function toggleFilterFeatureUpdater(state, action) {
  var filter = state.filters[action.idx];
  var isVisible = (0, _lodash3["default"])(filter, ['value', 'properties', 'isVisible']);

  var newFilter = _objectSpread(_objectSpread({}, filter), {}, {
    value: (0, _filterUtils.featureToFilterValue)(filter.value, filter.id, {
      isVisible: !isVisible
    })
  });

  return _objectSpread(_objectSpread({}, state), {}, {
    filters: Object.assign((0, _toConsumableArray2["default"])(state.filters), (0, _defineProperty2["default"])({}, action.idx, newFilter))
  });
};
/**
 * Remove a filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeFilterUpdater}
 * @public
 */


exports.toggleFilterFeatureUpdater = toggleFilterFeatureUpdater;

var removeFilterUpdater = function removeFilterUpdater(state, action) {
  var idx = action.idx;
  var _state$filters$idx = state.filters[idx],
      dataId = _state$filters$idx.dataId,
      id = _state$filters$idx.id;
  var newFilters = [].concat((0, _toConsumableArray2["default"])(state.filters.slice(0, idx)), (0, _toConsumableArray2["default"])(state.filters.slice(idx + 1, state.filters.length)));
  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(dataId, state.datasets, newFilters, state.layers);
  var newEditor = (0, _filterUtils.getFilterIdInFeature)(state.editor.selectedFeature) === id ? _objectSpread(_objectSpread({}, state.editor), {}, {
    selectedFeature: null
  }) : state.editor;
  var newState = (0, _utils.set)(['filters'], newFilters, state);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState);
  newState = (0, _utils.set)(['editor'], newEditor, newState);
  return updateAllLayerDomainData(newState, dataId, undefined);
};
/**
 * Add a new layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').addLayerUpdater}
 * @public
 */


exports.removeFilterUpdater = removeFilterUpdater;

var addLayerUpdater = function addLayerUpdater(state, action) {
  var newLayer;
  var newLayerData;

  if (action.config) {
    newLayer = (0, _visStateMerger.createLayerFromConfig)(state, action.config);

    if (!newLayer) {
      _window.console.warn('Failed to create layer from config, it usually means the config is not be in correct format', action.config);

      return state;
    }

    var result = (0, _layerUtils.calculateLayerData)(newLayer, state);
    newLayer = result.layer;
    newLayerData = result.layerData;
  } else {
    // create an empty layer with the first available dataset
    var defaultDataset = Object.keys(state.datasets)[0];
    newLayer = new _layers.Layer({
      isVisible: true,
      isConfigActive: true,
      dataId: defaultDataset
    });
    newLayerData = {};
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: [].concat((0, _toConsumableArray2["default"])(state.layers), [newLayer]),
    layerData: [].concat((0, _toConsumableArray2["default"])(state.layerData), [newLayerData]),
    layerOrder: [].concat((0, _toConsumableArray2["default"])(state.layerOrder), [state.layerOrder.length]),
    splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, newLayer)
  });
};
/**
 * remove layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeLayerUpdater}
 * @public
 */


exports.addLayerUpdater = addLayerUpdater;

var removeLayerUpdater = function removeLayerUpdater(state, _ref7) {
  var idx = _ref7.idx;
  var layers = state.layers,
      layerData = state.layerData,
      clicked = state.clicked,
      hoverInfo = state.hoverInfo;
  var layerToRemove = state.layers[idx];
  var newMaps = (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layerToRemove);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    layers: [].concat((0, _toConsumableArray2["default"])(layers.slice(0, idx)), (0, _toConsumableArray2["default"])(layers.slice(idx + 1, layers.length))),
    layerData: [].concat((0, _toConsumableArray2["default"])(layerData.slice(0, idx)), (0, _toConsumableArray2["default"])(layerData.slice(idx + 1, layerData.length))),
    layerOrder: state.layerOrder.filter(function (i) {
      return i !== idx;
    }).map(function (pid) {
      return pid > idx ? pid - 1 : pid;
    }),
    clicked: layerToRemove.isLayerHovered(clicked) ? undefined : clicked,
    hoverInfo: layerToRemove.isLayerHovered(hoverInfo) ? undefined : hoverInfo,
    splitMaps: newMaps // TODO: update filters, create helper to remove layer form filter (remove layerid and dataid) if mapped

  });

  return updateAnimationDomain(newState);
};
/**
 * duplicate layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').duplicateLayerUpdater}
 * @public
 */


exports.removeLayerUpdater = removeLayerUpdater;

var duplicateLayerUpdater = function duplicateLayerUpdater(state, _ref8) {
  var idx = _ref8.idx;
  var layers = state.layers;
  var original = state.layers[idx];
  var originalLayerOrderIdx = state.layerOrder.findIndex(function (i) {
    return i === idx;
  });

  if (!original) {
    _window.console.warn("layer.".concat(idx, " is undefined"));

    return state;
  }

  var newLabel = "Copy of ".concat(original.config.label);
  var postfix = 0; // eslint-disable-next-line no-loop-func

  while (layers.find(function (l) {
    return l.config.label === newLabel;
  })) {
    newLabel = "Copy of ".concat(original.config.label, " ").concat(++postfix);
  } // collect layer config from original


  var loadedLayer = (0, _visStateMerger.serializeLayer)(original); // assign new id and label to copied layer

  if (!loadedLayer.config) {
    return state;
  }

  loadedLayer.config.label = newLabel;
  loadedLayer.id = (0, _utils.generateHashId)(_layers.LAYER_ID_LENGTH); // add layer to state

  var nextState = addLayerUpdater(state, {
    config: loadedLayer
  }); // new added layer are at the end, move it to be on top of original layer

  var newLayerOrderIdx = nextState.layerOrder.length - 1;
  var newLayerOrder = (0, _utils.arrayInsert)(nextState.layerOrder.slice(0, newLayerOrderIdx), originalLayerOrderIdx, newLayerOrderIdx);
  nextState = _objectSpread(_objectSpread({}, nextState), {}, {
    layerOrder: newLayerOrder
  });
  return updateAnimationDomain(nextState);
};
/**
 * Reorder layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').reorderLayerUpdater}
 * @public
 */


exports.duplicateLayerUpdater = duplicateLayerUpdater;

var reorderLayerUpdater = function reorderLayerUpdater(state, _ref9) {
  var order = _ref9.order;
  return _objectSpread(_objectSpread({}, state), {}, {
    layerOrder: order
  });
};
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeDatasetUpdater}
 * @public
 */


exports.reorderLayerUpdater = reorderLayerUpdater;

var removeDatasetUpdater = function removeDatasetUpdater(state, action) {
  // extract dataset key
  var datasetKey = action.dataId;
  var datasets = state.datasets; // check if dataset is present

  if (!datasets[datasetKey]) {
    return state;
  }
  /* eslint-disable no-unused-vars */


  var layers = state.layers,
      _state$datasets = state.datasets,
      dataset = _state$datasets[datasetKey],
      newDatasets = (0, _objectWithoutProperties2["default"])(_state$datasets, [datasetKey].map(_toPropertyKey));
  /* eslint-enable no-unused-vars */

  var indexes = layers.reduce(function (listOfIndexes, layer, index) {
    if (layer.config.dataId === datasetKey) {
      // @ts-ignore
      listOfIndexes.push(index);
    }

    return listOfIndexes;
  }, []); // remove layers and datasets

  var _indexes$reduce = indexes.reduce(function (_ref10, idx) {
    var currentState = _ref10.newState,
        indexCounter = _ref10.indexCounter;
    var currentIndex = idx - indexCounter;
    currentState = removeLayerUpdater(currentState, {
      idx: currentIndex
    });
    indexCounter++;
    return {
      newState: currentState,
      indexCounter: indexCounter
    };
  }, {
    newState: _objectSpread(_objectSpread({}, state), {}, {
      datasets: newDatasets
    }),
    indexCounter: 0
  }),
      newState = _indexes$reduce.newState; // remove filters


  var filters = state.filters.filter(function (filter) {
    return !filter.dataId.includes(datasetKey);
  }); // update interactionConfig

  var interactionConfig = state.interactionConfig;
  var _interactionConfig = interactionConfig,
      tooltip = _interactionConfig.tooltip;

  if (tooltip) {
    var config = tooltip.config;
    /* eslint-disable no-unused-vars */

    var _config$fieldsToShow = config.fieldsToShow,
        fields = _config$fieldsToShow[datasetKey],
        fieldsToShow = (0, _objectWithoutProperties2["default"])(_config$fieldsToShow, [datasetKey].map(_toPropertyKey));
    /* eslint-enable no-unused-vars */

    interactionConfig = _objectSpread(_objectSpread({}, interactionConfig), {}, {
      tooltip: _objectSpread(_objectSpread({}, tooltip), {}, {
        config: _objectSpread(_objectSpread({}, config), {}, {
          fieldsToShow: fieldsToShow
        })
      })
    });
  }

  return _objectSpread(_objectSpread({}, newState), {}, {
    filters: filters,
    interactionConfig: interactionConfig
  });
};
/**
 * update layer blending mode
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateLayerBlendingUpdater}
 * @public
 */


exports.removeDatasetUpdater = removeDatasetUpdater;

var updateLayerBlendingUpdater = function updateLayerBlendingUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    layerBlending: action.mode
  });
};
/**
 * Display dataset table in a modal
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').showDatasetTableUpdater}
 * @public
 */


exports.updateLayerBlendingUpdater = updateLayerBlendingUpdater;

var showDatasetTableUpdater = function showDatasetTableUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    editingDataset: action.dataId
  });
};
/**
 * reset visState to initial State
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').resetMapConfigUpdater}
 * @public
 */


exports.showDatasetTableUpdater = showDatasetTableUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, INITIAL_VIS_STATE), state.initialState), {}, {
    initialState: state.initialState
  });
};
/**
 * Propagate `visState` reducer with a new configuration. Current config will be override.
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').receiveMapConfigUpdater}
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref11) {
  var _ref11$payload = _ref11.payload,
      _ref11$payload$config = _ref11$payload.config,
      config = _ref11$payload$config === void 0 ? {} : _ref11$payload$config,
      _ref11$payload$option = _ref11$payload.options,
      options = _ref11$payload$option === void 0 ? {} : _ref11$payload$option;

  if (!config.visState) {
    return state;
  }

  var keepExistingConfig = options.keepExistingConfig; // reset config if keepExistingConfig is falsy

  var mergedState = !keepExistingConfig ? resetMapConfigUpdater(state) : state;

  var _iterator = _createForOfIteratorHelper(state.mergers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var merger = _step.value;

      if ((0, _visStateMerger.isValidMerger)(merger) && config.visState[merger.prop]) {
        mergedState = merger.merge(mergedState, config.visState[merger.prop], true);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return mergedState;
};
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerHoverUpdater}
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var layerHoverUpdater = function layerHoverUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    hoverInfo: action.info
  });
};
/* eslint-enable max-statements */

/**
 * Update `interactionConfig`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').interactionConfigChangeUpdater}
 * @public
 */


exports.layerHoverUpdater = layerHoverUpdater;

function interactionConfigChangeUpdater(state, action) {
  var config = action.config;

  var interactionConfig = _objectSpread(_objectSpread({}, state.interactionConfig), (0, _defineProperty2["default"])({}, config.id, config)); // Don't enable tooltip and brush at the same time
  // but coordinates can be shown at all time


  var contradict = ['brush', 'tooltip'];

  if (contradict.includes(config.id) && config.enabled && !state.interactionConfig[config.id].enabled) {
    // only enable one interaction at a time
    contradict.forEach(function (k) {
      if (k !== config.id) {
        interactionConfig[k] = _objectSpread(_objectSpread({}, interactionConfig[k]), {}, {
          enabled: false
        });
      }
    });
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: interactionConfig
  });

  if (config.id === 'geocoder' && !config.enabled) {
    return removeDatasetUpdater(newState, {
      dataId: 'geocoder_dataset'
    });
  }

  return newState;
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerClickUpdater}
 * @public
 */


var layerClickUpdater = function layerClickUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mousePos: state.interactionConfig.coordinate.enabled ? _objectSpread(_objectSpread({}, state.mousePos), {}, {
      pinned: state.mousePos.pinned ? null : (0, _lodash["default"])(state.mousePos)
    }) : state.mousePos,
    clicked: action.info && action.info.picked ? action.info : null
  });
};
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').mapClickUpdater}
 * @public
 */


exports.layerClickUpdater = layerClickUpdater;

var mapClickUpdater = function mapClickUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    clicked: null
  });
};
/**
 * Trigger map move event
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').mouseMoveUpdater}
 * @public
 */


exports.mapClickUpdater = mapClickUpdater;

var mouseMoveUpdater = function mouseMoveUpdater(state, _ref12) {
  var evt = _ref12.evt;

  if (Object.values(state.interactionConfig).some(function (config) {
    return config.enabled;
  })) {
    return _objectSpread(_objectSpread({}, state), {}, {
      mousePos: _objectSpread(_objectSpread({}, state.mousePos), {}, {
        mousePosition: (0, _toConsumableArray2["default"])(evt.point),
        coordinate: (0, _toConsumableArray2["default"])(evt.lngLat)
      })
    });
  }

  return state;
};
/**
 * Toggle visibility of a layer for a split map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleSplitMapUpdater}
 * @public
 */


exports.mouseMoveUpdater = mouseMoveUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state, action) {
  return state.splitMaps && state.splitMaps.length === 0 ? _objectSpread(_objectSpread({}, state), {}, {
    // maybe we should use an array to store state for a single map as well
    // if current maps length is equal to 0 it means that we are about to split the view
    splitMaps: (0, _splitMapUtils.computeSplitMapLayers)(state.layers)
  }) : closeSpecificMapAtIndex(state, action);
};
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleLayerForMapUpdater}
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var toggleLayerForMapUpdater = function toggleLayerForMapUpdater(state, _ref13) {
  var mapIndex = _ref13.mapIndex,
      layerId = _ref13.layerId;
  var splitMaps = state.splitMaps;
  return _objectSpread(_objectSpread({}, state), {}, {
    splitMaps: splitMaps.map(function (sm, i) {
      return i === mapIndex ? _objectSpread(_objectSpread({}, splitMaps[i]), {}, {
        layers: _objectSpread(_objectSpread({}, splitMaps[i].layers), {}, (0, _defineProperty2["default"])({}, layerId, !splitMaps[i].layers[layerId]))
      }) : sm;
    })
  });
};
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateVisDataUpdater}
 * @public
 */

/* eslint-disable max-statements */
// eslint-disable-next-line complexity


exports.toggleLayerForMapUpdater = toggleLayerForMapUpdater;

var updateVisDataUpdater = function updateVisDataUpdater(state, action) {
  // datasets can be a single data entries or an array of multiple data entries
  var config = action.config,
      options = action.options;
  var datasets = (0, _utils.toArray)(action.datasets);
  var newDataEntries = datasets.reduce(function (accu) {
    var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref14$info = _ref14.info,
        info = _ref14$info === void 0 ? {} : _ref14$info,
        data = _ref14.data,
        metadata = _ref14.metadata;

    return _objectSpread(_objectSpread({}, accu), (0, _datasetUtils.createNewDataEntry)({
      info: info,
      data: data,
      metadata: metadata
    }, state.datasets) || {});
  }, {});
  var dataEmpty = Object.keys(newDataEntries).length < 1; // apply config if passed from action

  var previousState = config ? receiveMapConfigUpdater(state, {
    payload: {
      config: config,
      options: options
    }
  }) : state;

  var mergedState = _objectSpread(_objectSpread({}, previousState), {}, {
    datasets: _objectSpread(_objectSpread({}, previousState.datasets), newDataEntries)
  }); // merge state with config to be merged


  var _iterator2 = _createForOfIteratorHelper(mergedState.mergers),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var merger = _step2.value;

      if ((0, _visStateMerger.isValidMerger)(merger) && merger.toMergeProp && mergedState[merger.toMergeProp]) {
        var toMerge = mergedState[merger.toMergeProp];
        mergedState[merger.toMergeProp] = INITIAL_VIS_STATE[merger.toMergeProp];
        mergedState = merger.merge(mergedState, toMerge);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var newLayers = !dataEmpty ? mergedState.layers.filter(function (l) {
    return l.config.dataId && l.config.dataId in newDataEntries;
  }) : [];

  if (!newLayers.length && (options || {}).autoCreateLayers !== false) {
    // no layer merged, find defaults
    var result = addDefaultLayers(mergedState, newDataEntries);
    mergedState = result.state;
    newLayers = result.newLayers;
  }

  if (mergedState.splitMaps.length) {
    // if map is split, add new layers to splitMaps
    newLayers = mergedState.layers.filter(function (l) {
      return l.config.dataId && l.config.dataId in newDataEntries;
    });
    mergedState = _objectSpread(_objectSpread({}, mergedState), {}, {
      splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(mergedState.splitMaps, newLayers)
    });
  } // if no tooltips merged add default tooltips


  Object.keys(newDataEntries).forEach(function (dataId) {
    var tooltipFields = mergedState.interactionConfig.tooltip.config.fieldsToShow[dataId];

    if (!Array.isArray(tooltipFields) || !tooltipFields.length) {
      mergedState = addDefaultTooltips(mergedState, newDataEntries[dataId]);
    }
  });
  var updatedState = updateAllLayerDomainData(mergedState, dataEmpty ? Object.keys(mergedState.datasets) : Object.keys(newDataEntries), undefined); // register layer animation domain,
  // need to be called after layer data is calculated

  updatedState = updateAnimationDomain(updatedState);
  return updatedState;
};
/* eslint-enable max-statements */

/**
 * Rename an existing dataset in `visState`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').renameDatasetUpdater}
 * @public
 */


exports.updateVisDataUpdater = updateVisDataUpdater;

function renameDatasetUpdater(state, action) {
  var dataId = action.dataId,
      label = action.label;
  var datasets = state.datasets;
  var existing = datasets[dataId]; // @ts-ignore

  return existing ? _objectSpread(_objectSpread({}, state), {}, {
    datasets: _objectSpread(_objectSpread({}, datasets), {}, (0, _defineProperty2["default"])({}, dataId, _objectSpread(_objectSpread({}, existing), {}, {
      label: label
    })))
  }) : // No-op if the dataset doesn't exist
  state;
}
/**
 * When a user clicks on the specific map closing icon
 * the application will close the selected map
 * and will merge the remaining one with the global state
 * TODO: i think in the future this action should be called merge map layers with global settings
 * @param {Object} state `visState`
 * @param {Object} action action
 * @returns {Object} nextState
 */


function closeSpecificMapAtIndex(state, action) {
  // retrieve layers meta data from the remaining map that we need to keep
  var indexToRetrieve = 1 - action.payload;
  var mapLayers = state.splitMaps[indexToRetrieve].layers;
  var layers = state.layers; // update layer visibility

  var newLayers = layers.map(function (layer) {
    return !mapLayers[layer.id] && layer.config.isVisible ? layer.updateLayerConfig({
      // if layer.id is not in mapLayers, it should be inVisible
      isVisible: false
    }) : layer;
  }); // delete map

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    splitMaps: []
  });
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFilesUpdater}
 * @public
 */


var loadFilesUpdater = function loadFilesUpdater(state, action) {
  var files = action.files,
      _action$onFinish = action.onFinish,
      onFinish = _action$onFinish === void 0 ? _visStateActions.loadFilesSuccess : _action$onFinish;

  if (!files.length) {
    return state;
  }

  var fileLoadingProgress = Array.from(files).reduce(function (accu, f, i) {
    return (0, _composerHelpers.merge_)(initialFileLoadingProgress(f, i))(accu);
  }, {});
  var fileLoading = {
    fileCache: [],
    filesToLoad: files,
    onFinish: onFinish
  };
  var nextState = (0, _composerHelpers.merge_)({
    fileLoadingProgress: fileLoadingProgress,
    fileLoading: fileLoading
  })(state);
  return loadNextFileUpdater(nextState);
};
/**
 * Sucessfully loaded one file, move on to the next one
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFileStepSuccessUpdater}
 * @public
 */


exports.loadFilesUpdater = loadFilesUpdater;

function loadFileStepSuccessUpdater(state, action) {
  if (!state.fileLoading) {
    return state;
  }

  var fileName = action.fileName,
      fileCache = action.fileCache;
  var _state$fileLoading = state.fileLoading,
      filesToLoad = _state$fileLoading.filesToLoad,
      onFinish = _state$fileLoading.onFinish;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: {
      percent: 1,
      message: 'Done'
    }
  }); // save processed file to fileCache

  var stateWithCache = (0, _composerHelpers.pick_)('fileLoading')((0, _composerHelpers.merge_)({
    fileCache: fileCache
  }))(stateWithProgress);
  return (0, _tasks.withTask)(stateWithCache, (0, _tasks2.DELAY_TASK)(200).map(filesToLoad.length ? _visStateActions.loadNextFile : function () {
    return onFinish(fileCache);
  }));
} // withTask<T>(state: T, task: any): T

/**
 *
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadNextFileUpdater}
 * @public
 */


function loadNextFileUpdater(state) {
  if (!state.fileLoading) {
    return state;
  }

  var filesToLoad = state.fileLoading.filesToLoad;

  var _filesToLoad = (0, _toArray2["default"])(filesToLoad),
      file = _filesToLoad[0],
      remainingFilesToLoad = _filesToLoad.slice(1); // save filesToLoad to state


  var nextState = (0, _composerHelpers.pick_)('fileLoading')((0, _composerHelpers.merge_)({
    filesToLoad: remainingFilesToLoad
  }))(state);
  var stateWithProgress = updateFileLoadingProgressUpdater(nextState, {
    fileName: file.name,
    progress: {
      percent: 0,
      message: 'loading...'
    }
  });
  var loaders = state.loaders,
      loadOptions = state.loadOptions;
  return (0, _tasks.withTask)(stateWithProgress, makeLoadFileTask(file, nextState.fileLoading.fileCache, loaders, loadOptions));
}

function makeLoadFileTask(file, fileCache) {
  var loaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var loadOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return (0, _tasks2.LOAD_FILE_TASK)({
    file: file,
    fileCache: fileCache,
    loaders: loaders,
    loadOptions: loadOptions
  }).bimap( // prettier ignore
  // success
  function (gen) {
    return (0, _visStateActions.nextFileBatch)({
      gen: gen,
      fileName: file.name,
      onFinish: function onFinish(result) {
        return (0, _visStateActions.processFileContent)({
          content: result,
          fileCache: fileCache
        });
      }
    });
  }, // error
  function (err) {
    return (0, _visStateActions.loadFilesErr)(file.name, err);
  });
}
/**
 *
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').processFileContentUpdater}
 * @public
 */


function processFileContentUpdater(state, action) {
  var _action$payload = action.payload,
      content = _action$payload.content,
      fileCache = _action$payload.fileCache;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: content.fileName,
    progress: {
      percent: 1,
      message: 'processing...'
    }
  });
  return (0, _tasks.withTask)(stateWithProgress, (0, _tasks2.PROCESS_FILE_DATA)({
    content: content,
    fileCache: fileCache
  }).bimap(function (result) {
    return (0, _visStateActions.loadFileStepSuccess)({
      fileName: content.fileName,
      fileCache: result
    });
  }, function (err) {
    return (0, _visStateActions.loadFilesErr)(content.fileName, err);
  }));
}

function parseProgress() {
  var prevProgress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var progress = arguments.length > 1 ? arguments[1] : undefined;

  // This happens when receiving query metadata or other cases we don't
  // have an update for the user.
  if (!progress || !progress.percent) {
    return {};
  }

  return {
    percent: progress.percent
  };
}
/**
 * gets called with payload = AsyncGenerator<???>
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').nextFileBatchUpdater}
 * @public
 */


var nextFileBatchUpdater = function nextFileBatchUpdater(state, _ref15) {
  var _ref15$payload = _ref15.payload,
      gen = _ref15$payload.gen,
      fileName = _ref15$payload.fileName,
      progress = _ref15$payload.progress,
      accumulated = _ref15$payload.accumulated,
      onFinish = _ref15$payload.onFinish;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: parseProgress(state.fileLoadingProgress[fileName], progress)
  });
  return (0, _tasks.withTask)(stateWithProgress, (0, _tasks2.UNWRAP_TASK)(gen.next()).bimap(function (_ref16) {
    var value = _ref16.value,
        done = _ref16.done;
    return done ? onFinish(accumulated) : (0, _visStateActions.nextFileBatch)({
      gen: gen,
      fileName: fileName,
      progress: value.progress,
      accumulated: value,
      onFinish: onFinish
    });
  }, function (err) {
    return (0, _visStateActions.loadFilesErr)(fileName, err);
  }));
};
/**
 * Trigger loading file error
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFilesErrUpdater}
 * @public
 */


exports.nextFileBatchUpdater = nextFileBatchUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref17) {
  var error = _ref17.error,
      fileName = _ref17.fileName;

  // update ui with error message
  _window.console.warn(error);

  if (!state.fileLoading) {
    return state;
  }

  var _state$fileLoading2 = state.fileLoading,
      filesToLoad = _state$fileLoading2.filesToLoad,
      onFinish = _state$fileLoading2.onFinish,
      fileCache = _state$fileLoading2.fileCache;
  var nextState = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: {
      error: error
    }
  }); // kick off next file or finish

  return (0, _tasks.withTask)(nextState, (0, _tasks2.DELAY_TASK)(200).map(filesToLoad.length ? _visStateActions.loadNextFile : function () {
    return onFinish(fileCache);
  }));
};
/**
 * When select dataset for export, apply cpu filter to selected dataset
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').applyCPUFilterUpdater}
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var applyCPUFilterUpdater = function applyCPUFilterUpdater(state, _ref18) {
  var dataId = _ref18.dataId;
  // apply cpuFilter
  var dataIds = (0, _utils.toArray)(dataId);
  return dataIds.reduce(function (accu, id) {
    return (0, _filterUtils.filterDatasetCPU)(accu, id);
  }, state);
};
/**
 * User input to update the info of the map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setMapInfoUpdater}
 * @public
 */


exports.applyCPUFilterUpdater = applyCPUFilterUpdater;

var setMapInfoUpdater = function setMapInfoUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mapInfo: _objectSpread(_objectSpread({}, state.mapInfo), action.info)
  });
};
/**
 * Helper function to update All layer domain and layer data of state
 * @type {typeof import('./vis-state-updaters').addDefaultLayers}
 */


exports.setMapInfoUpdater = setMapInfoUpdater;

function addDefaultLayers(state, datasets) {
  /** @type {Layer[]} */
  var empty = [];
  var defaultLayers = Object.values(datasets).reduce(function (accu, dataset) {
    var foundLayers = (0, _layerUtils.findDefaultLayer)(dataset, state.layerClasses);
    return foundLayers && foundLayers.length ? accu.concat(foundLayers) : accu;
  }, empty);
  return {
    state: _objectSpread(_objectSpread({}, state), {}, {
      layers: [].concat((0, _toConsumableArray2["default"])(state.layers), (0, _toConsumableArray2["default"])(defaultLayers)),
      layerOrder: [].concat((0, _toConsumableArray2["default"])(defaultLayers.map(function (_, i) {
        return state.layers.length + i;
      })), (0, _toConsumableArray2["default"])(state.layerOrder))
    }),
    newLayers: defaultLayers
  };
}
/**
 * helper function to find default tooltips
 * @param {Object} state
 * @param {Object} dataset
 * @returns {Object} nextState
 */


function addDefaultTooltips(state, dataset) {
  var tooltipFields = (0, _interactionUtils.findFieldsToShow)(dataset);

  var merged = _objectSpread(_objectSpread({}, state.interactionConfig.tooltip.config.fieldsToShow), tooltipFields);

  return (0, _utils.set)(['interactionConfig', 'tooltip', 'config', 'fieldsToShow'], merged, state);
}

function initialFileLoadingProgress(file, index) {
  var fileName = file.name || "Untitled File ".concat(index);
  return (0, _defineProperty2["default"])({}, fileName, {
    // percent of current file
    percent: 0,
    message: '',
    fileName: fileName,
    error: null
  });
}

function updateFileLoadingProgressUpdater(state, _ref20) {
  var fileName = _ref20.fileName,
      progress = _ref20.progress;
  return (0, _composerHelpers.pick_)('fileLoadingProgress')((0, _composerHelpers.pick_)(fileName)((0, _composerHelpers.merge_)(progress)))(state);
}
/**
 * Helper function to update layer domains for an array of datasets
 * @type {typeof import('./vis-state-updaters').updateAllLayerDomainData}
 */


function updateAllLayerDomainData(state, dataId, updatedFilter) {
  var dataIds = typeof dataId === 'string' ? [dataId] : dataId;
  var newLayers = [];
  var newLayerData = [];
  state.layers.forEach(function (oldLayer, i) {
    if (oldLayer.config.dataId && dataIds.includes(oldLayer.config.dataId)) {
      // No need to recalculate layer domain if filter has fixed domain
      var newLayer = updatedFilter && updatedFilter.fixedDomain ? oldLayer : oldLayer.updateLayerDomain(state.datasets, updatedFilter);

      var _calculateLayerData5 = (0, _layerUtils.calculateLayerData)(newLayer, state, state.layerData[i]),
          layerData = _calculateLayerData5.layerData,
          layer = _calculateLayerData5.layer;

      newLayers.push(layer);
      newLayerData.push(layerData);
    } else {
      newLayers.push(oldLayer);
      newLayerData.push(state.layerData[i]);
    }
  });

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    layerData: newLayerData
  });

  return newState;
}

function updateAnimationDomain(state) {
  // merge all animatable layer domain and update global config
  var animatableLayers = state.layers.filter(function (l) {
    return l.config.isVisible && l.config.animation && l.config.animation.enabled && Array.isArray(l.animationDomain);
  });

  if (!animatableLayers.length) {
    return _objectSpread(_objectSpread({}, state), {}, {
      animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
        domain: null,
        defaultTimeFormat: null
      })
    });
  }

  var mergedDomain = animatableLayers.reduce(function (accu, layer) {
    return [Math.min(accu[0], layer.animationDomain[0]), Math.max(accu[1], layer.animationDomain[1])];
  }, [Number(Infinity), -Infinity]);
  var defaultTimeFormat = (0, _filterUtils.getTimeWidgetTitleFormatter)(mergedDomain);
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      currentTime: (0, _filterUtils.isInRange)(state.animationConfig.currentTime, mergedDomain) ? state.animationConfig.currentTime : mergedDomain[0],
      domain: mergedDomain,
      defaultTimeFormat: defaultTimeFormat
    })
  });
}
/**
 * Update the status of the editor
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setEditorModeUpdater}
 */


var setEditorModeUpdater = function setEditorModeUpdater(state, _ref21) {
  var mode = _ref21.mode;
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      mode: mode,
      selectedFeature: null
    })
  });
}; // const featureToFilterValue = (feature) => ({...feature, id: feature.id});

/**
 * Update editor features
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFeaturesUpdater}
 */


exports.setEditorModeUpdater = setEditorModeUpdater;

function setFeaturesUpdater(state, _ref22) {
  var _ref22$features = _ref22.features,
      features = _ref22$features === void 0 ? [] : _ref22$features;
  var lastFeature = features.length && features[features.length - 1];

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      // only save none filter features to editor
      features: features.filter(function (f) {
        return !(0, _filterUtils.getFilterIdInFeature)(f);
      }),
      mode: lastFeature && lastFeature.properties.isClosed ? _defaultSettings.EDITOR_MODES.EDIT : state.editor.mode
    })
  }); // Retrieve existing feature


  var selectedFeature = state.editor.selectedFeature; // If no feature is selected we can simply return since no operations

  if (!selectedFeature) {
    return newState;
  } // TODO: check if the feature has changed


  var feature = features.find(function (f) {
    return f.id === selectedFeature.id;
  }); // if feature is part of a filter

  var filterId = feature && (0, _filterUtils.getFilterIdInFeature)(feature);

  if (filterId && feature) {
    var featureValue = (0, _filterUtils.featureToFilterValue)(feature, filterId);
    var filterIdx = state.filters.findIndex(function (fil) {
      return fil.id === filterId;
    });
    return setFilterUpdater(newState, {
      idx: filterIdx,
      prop: 'value',
      value: featureValue
    });
  }

  return newState;
}
/**
 * Set the current selected feature
 * @memberof uiStateUpdaters
 * @type {typeof import('./vis-state-updaters').setSelectedFeatureUpdater}
 */


var setSelectedFeatureUpdater = function setSelectedFeatureUpdater(state, _ref23) {
  var feature = _ref23.feature;
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      selectedFeature: feature
    })
  });
};
/**
 * Delete existing feature from filters
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').deleteFeatureUpdater}
 */


exports.setSelectedFeatureUpdater = setSelectedFeatureUpdater;

function deleteFeatureUpdater(state, _ref24) {
  var feature = _ref24.feature;

  if (!feature) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      selectedFeature: null
    })
  });

  if ((0, _filterUtils.getFilterIdInFeature)(feature)) {
    var filterIdx = newState.filters.findIndex(function (f) {
      return f.id === (0, _filterUtils.getFilterIdInFeature)(feature);
    });
    return filterIdx > -1 ? removeFilterUpdater(newState, {
      idx: filterIdx
    }) : newState;
  } // modify editor object


  var newEditor = _objectSpread(_objectSpread({}, state.editor), {}, {
    features: state.editor.features.filter(function (f) {
      return f.id !== feature.id;
    }),
    selectedFeature: null
  });

  return _objectSpread(_objectSpread({}, state), {}, {
    editor: newEditor
  });
}
/**
 * Toggle feature as layer filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setPolygonFilterLayerUpdater}
 */


function setPolygonFilterLayerUpdater(state, payload) {
  var layer = payload.layer,
      feature = payload.feature;
  var filterId = (0, _filterUtils.getFilterIdInFeature)(feature); // let newFilter = null;

  var filterIdx;
  var newLayerId = [layer.id];
  var newState = state; // If polygon filter already exists, we need to find out if the current layer is already included

  if (filterId) {
    filterIdx = state.filters.findIndex(function (f) {
      return f.id === filterId;
    });

    if (!state.filters[filterIdx]) {
      // what if filter doesn't exist?... not possible.
      // because features in the editor is passed in from filters and editors.
      // but we will move this feature back to editor just in case
      var noneFilterFeature = _objectSpread(_objectSpread({}, feature), {}, {
        properties: _objectSpread(_objectSpread({}, feature.properties), {}, {
          filterId: null
        })
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        editor: _objectSpread(_objectSpread({}, state.editor), {}, {
          features: [].concat((0, _toConsumableArray2["default"])(state.editor.features), [noneFilterFeature]),
          selectedFeature: noneFilterFeature
        })
      });
    }

    var filter = state.filters[filterIdx];
    var _filter$layerId = filter.layerId,
        layerId = _filter$layerId === void 0 ? [] : _filter$layerId;
    var isLayerIncluded = layerId.includes(layer.id);
    newLayerId = isLayerIncluded ? // if layer is included, remove it
    layerId.filter(function (l) {
      return l !== layer.id;
    }) : [].concat((0, _toConsumableArray2["default"])(layerId), [layer.id]);
  } else {
    // if we haven't create the polygon filter, create it
    var newFilter = (0, _filterUtils.generatePolygonFilter)([], feature);
    filterIdx = state.filters.length; // add feature, remove feature from eidtor

    newState = _objectSpread(_objectSpread({}, state), {}, {
      filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [newFilter]),
      editor: _objectSpread(_objectSpread({}, state.editor), {}, {
        features: state.editor.features.filter(function (f) {
          return f.id !== feature.id;
        }),
        selectedFeature: newFilter.value
      })
    });
  }

  return setFilterUpdater(newState, {
    idx: filterIdx,
    prop: 'layerId',
    value: newLayerId
  });
}
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').sortTableColumnUpdater}
 * @public
 */


function sortTableColumnUpdater(state, _ref25) {
  var dataId = _ref25.dataId,
      column = _ref25.column,
      mode = _ref25.mode;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var sortMode = mode;

  if (!sortMode) {
    var currentMode = (0, _lodash3["default"])(dataset, ['sortColumn', column]); // @ts-ignore - should be fixable in a TS file

    sortMode = currentMode ? Object.keys(_defaultSettings.SORT_ORDER).find(function (m) {
      return m !== currentMode;
    }) : _defaultSettings.SORT_ORDER.ASCENDING;
  }

  var sorted = (0, _keplerTable.sortDatasetByColumn)(dataset, column, sortMode);
  return (0, _utils.set)(['datasets', dataId], sorted, state);
}
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').pinTableColumnUpdater}
 * @public
 */


function pinTableColumnUpdater(state, _ref26) {
  var dataId = _ref26.dataId,
      column = _ref26.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var field = dataset.fields.find(function (f) {
    return f.name === column;
  });

  if (!field) {
    return state;
  }

  var pinnedColumns;

  if (Array.isArray(dataset.pinnedColumns) && dataset.pinnedColumns.includes(field.name)) {
    // unpin it
    pinnedColumns = dataset.pinnedColumns.filter(function (co) {
      return co !== field.name;
    });
  } else {
    pinnedColumns = (dataset.pinnedColumns || []).concat(field.name);
  }

  return (0, _utils.set)(['datasets', dataId, 'pinnedColumns'], pinnedColumns, state);
}
/**
 * Copy column content as strings
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').copyTableColumnUpdater}
 * @public
 */


function copyTableColumnUpdater(state, _ref27) {
  var dataId = _ref27.dataId,
      column = _ref27.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var fieldIdx = dataset.fields.findIndex(function (f) {
    return f.name === column;
  });

  if (fieldIdx < 0) {
    return state;
  }

  var type = dataset.fields[fieldIdx].type;
  var text = dataset.allData.map(function (d) {
    return (0, _dataUtils.parseFieldValue)(d[fieldIdx], type);
  }).join('\n');
  (0, _copyToClipboard["default"])(text);
  return state;
}
/**
 * Update editor
 * @type {typeof import('./vis-state-updaters').toggleEditorVisibilityUpdater}
 */


function toggleEditorVisibilityUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      visible: !state.editor.visible
    })
  });
}

function setFilterAnimationTimeConfigUpdater(state, _ref28) {
  var idx = _ref28.idx,
      config = _ref28.config;
  var oldFilter = state.filters[idx];

  if (!oldFilter) {
    _window.console.error("filters.".concat(idx, " is undefined"));

    return state;
  }

  if (oldFilter.type !== _defaultSettings.FILTER_TYPES.timeRange) {
    _window.console.error("setFilterAnimationTimeConfig can only be called to update a time filter. check filter.type === 'timeRange'");

    return state;
  }

  var updates = checkTimeConfigArgs(config);
  return (0, _composerHelpers.pick_)('filters')((0, _composerHelpers.swap_)((0, _composerHelpers.merge_)(updates)(oldFilter)))(state);
}

function checkTimeConfigArgs(config) {
  var allowed = ['timeFormat', 'timezone'];
  return Object.keys(config).reduce(function (accu, prop) {
    if (!allowed.includes(prop)) {
      _window.console.error("setLayerAnimationTimeConfig takes timeFormat and/or timezone as options, found ".concat(prop));

      return accu;
    } // here we are NOT checking if timezone or timeFormat input is valid


    accu[prop] = config[prop];
    return accu;
  }, {});
}
/**
 * Update editor
 * @type {typeof import('./vis-state-updaters').setLayerAnimationTimeConfigUpdater}
 */


function setLayerAnimationTimeConfigUpdater(state, _ref29) {
  var config = _ref29.config;

  if (!config) {
    return state;
  }

  var updates = checkTimeConfigArgs(config);
  return (0, _composerHelpers.pick_)('animationConfig')((0, _composerHelpers.merge_)(updates))(state);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsidmlzU3RhdGVVcGRhdGVycyIsIkRFRkFVTFRfQU5JTUFUSU9OX0NPTkZJRyIsImRvbWFpbiIsImN1cnJlbnRUaW1lIiwic3BlZWQiLCJpc0FuaW1hdGluZyIsInRpbWVGb3JtYXQiLCJ0aW1lem9uZSIsImRlZmF1bHRUaW1lRm9ybWF0IiwiREVGQVVMVF9FRElUT1IiLCJtb2RlIiwiRURJVE9SX01PREVTIiwiRFJBV19QT0xZR09OIiwiZmVhdHVyZXMiLCJzZWxlY3RlZEZlYXR1cmUiLCJ2aXNpYmxlIiwiSU5JVElBTF9WSVNfU1RBVEUiLCJtYXBJbmZvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxheWVycyIsImxheWVyRGF0YSIsImxheWVyVG9CZU1lcmdlZCIsImxheWVyT3JkZXIiLCJmaWx0ZXJzIiwiZmlsdGVyVG9CZU1lcmdlZCIsImRhdGFzZXRzIiwiZWRpdGluZ0RhdGFzZXQiLCJ1bmRlZmluZWQiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImludGVyYWN0aW9uVG9CZU1lcmdlZCIsImxheWVyQmxlbmRpbmciLCJob3ZlckluZm8iLCJjbGlja2VkIiwibW91c2VQb3MiLCJzcGxpdE1hcHMiLCJzcGxpdE1hcHNUb0JlTWVyZ2VkIiwibGF5ZXJDbGFzc2VzIiwiTGF5ZXJDbGFzc2VzIiwiYW5pbWF0aW9uQ29uZmlnIiwiZWRpdG9yIiwiZmlsZUxvYWRpbmciLCJmaWxlTG9hZGluZ1Byb2dyZXNzIiwibG9hZGVycyIsImxvYWRPcHRpb25zIiwibWVyZ2VycyIsIlZJU19TVEFURV9NRVJHRVJTIiwic2NoZW1hIiwiS2VwbGVyR0xTY2hlbWEiLCJ1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEiLCJzdGF0ZSIsImxheWVyIiwiaWR4IiwibWFwIiwibHlyIiwiaSIsImQiLCJ1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlIiwibmV3U3RhdGUiLCJsZW5ndGgiLCJjb25maWciLCJpc1Zpc2libGUiLCJhbmltYXRpb24iLCJlbmFibGVkIiwidXBkYXRlQW5pbWF0aW9uRG9tYWluIiwibGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyIiwiYWN0aW9uIiwib2xkTGF5ZXIiLCJmaW5kSW5kZXgiLCJsIiwiaWQiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJuZXdDb25maWciLCJkYXRhSWQiLCJyZXN0Q29uZmlnIiwic3RhdGVXaXRoRGF0YUlkIiwibGF5ZXJEYXRhSWRDaGFuZ2VVcGRhdGVyIiwibmV4dExheWVyIiwiZmluZCIsIm5ld0xheWVyIiwidXBkYXRlTGF5ZXJDb25maWciLCJzaG91bGRDYWxjdWxhdGVMYXllckRhdGEiLCJvbGRMYXllckRhdGEiLCJ1cGRhdGVMYXllckRhdGFSZXN1bHQiLCJhZGRPclJlbW92ZVRleHRMYWJlbHMiLCJuZXdGaWVsZHMiLCJ0ZXh0TGFiZWwiLCJuZXdUZXh0TGFiZWwiLCJzbGljZSIsImN1cnJlbnRGaWVsZHMiLCJ0bCIsImZpZWxkIiwibmFtZSIsImZpbHRlciIsImFkZEZpZWxkcyIsImYiLCJpbmNsdWRlcyIsImRlbGV0ZUZpZWxkcyIsImZkIiwiREVGQVVMVF9URVhUX0xBQkVMIiwiYWYiLCJ1cGRhdGVUZXh0TGFiZWxQcm9wQW5kVmFsdWUiLCJwcm9wIiwidmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsInNwbGljZSIsImxheWVyVGV4dExhYmVsQ2hhbmdlVXBkYXRlciIsInZhbGlkYXRlRXhpc3RpbmdMYXllcldpdGhEYXRhIiwiZGF0YXNldCIsImxvYWRlZExheWVyIiwiYWxsb3dFbXB0eUNvbHVtbiIsImlzVmFsaWRUb1NhdmUiLCJ2YWxpZGF0ZWQiLCJ0eXBlIiwiaXNDb25maWdBY3RpdmUiLCJ1cGRhdGVMYXllckRvbWFpbiIsImxheWVyVHlwZUNoYW5nZVVwZGF0ZXIiLCJuZXdUeXBlIiwib2xkSWQiLCJDb25zb2xlIiwiZXJyb3IiLCJhc3NpZ25Db25maWdUb0xheWVyIiwidmlzQ29uZmlnU2V0dGluZ3MiLCJzZXR0aW5ncyIsIm9sZExheWVyTWFwIiwib3RoZXJMYXllcnMiLCJsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyIiwiY2hhbm5lbCIsInVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbCIsImxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlciIsIm5ld1Zpc0NvbmZpZyIsInZpc0NvbmZpZyIsInNldEZpbHRlckFuaW1hdGlvblRpbWVVcGRhdGVyIiwic2V0RmlsdGVyVXBkYXRlciIsInNldEZpbHRlckFuaW1hdGlvbldpbmRvd1VwZGF0ZXIiLCJhbmltYXRpb25XaW5kb3ciLCJ2YWx1ZUluZGV4Iiwib2xkRmlsdGVyIiwibmV3RmlsdGVyIiwiZGF0YXNldElkcyIsIkZJTFRFUl9VUERBVEVSX1BST1BTIiwiZGF0YXNldElkIiwibWVyZ2VEb21haW4iLCJ1cGRhdGVkRmlsdGVyIiwibmV3RGF0YXNldCIsImdwdSIsImxheWVySWQiLCJsYXllcklkRGlmZmVyZW5jZSIsImxheWVyRGF0YUlkcyIsImxpZCIsIm5ld0RhdGFJZHMiLCJlbmxhcmdlZEZpbHRlciIsImVubGFyZ2VkIiwiZGF0YXNldElkc1RvRmlsdGVyIiwiTElNSVRFRF9GSUxURVJfRUZGRUNUX1BST1BTIiwiZmlsdGVyZWREYXRhc2V0cyIsInVwZGF0ZUFsbExheWVyRG9tYWluRGF0YSIsInNldEZpbHRlclBsb3RVcGRhdGVyIiwibmV3UHJvcCIsInBsb3RUeXBlIiwiYWRkRmlsdGVyVXBkYXRlciIsImxheWVyQ29sb3JVSUNoYW5nZVVwZGF0ZXIiLCJvbGRWaXhDb25maWciLCJ1cGRhdGVMYXllckNvbG9yVUkiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyIiwidG9nZ2xlTGF5ZXJBbmltYXRpb25VcGRhdGVyIiwidXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyIiwic2V0TGF5ZXJBbmltYXRpb25UaW1lVXBkYXRlciIsInVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyIiwiZW5sYXJnZUZpbHRlclVwZGF0ZXIiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlVXBkYXRlciIsImFzc2lnbiIsInJlbW92ZUZpbHRlclVwZGF0ZXIiLCJuZXdGaWx0ZXJzIiwibmV3RWRpdG9yIiwiYWRkTGF5ZXJVcGRhdGVyIiwibmV3TGF5ZXJEYXRhIiwid2FybiIsInJlc3VsdCIsImRlZmF1bHREYXRhc2V0IiwiTGF5ZXIiLCJyZW1vdmVMYXllclVwZGF0ZXIiLCJsYXllclRvUmVtb3ZlIiwibmV3TWFwcyIsInBpZCIsImlzTGF5ZXJIb3ZlcmVkIiwiZHVwbGljYXRlTGF5ZXJVcGRhdGVyIiwib3JpZ2luYWwiLCJvcmlnaW5hbExheWVyT3JkZXJJZHgiLCJuZXdMYWJlbCIsImxhYmVsIiwicG9zdGZpeCIsIkxBWUVSX0lEX0xFTkdUSCIsIm5leHRTdGF0ZSIsIm5ld0xheWVyT3JkZXJJZHgiLCJuZXdMYXllck9yZGVyIiwicmVvcmRlckxheWVyVXBkYXRlciIsIm9yZGVyIiwicmVtb3ZlRGF0YXNldFVwZGF0ZXIiLCJkYXRhc2V0S2V5IiwibmV3RGF0YXNldHMiLCJpbmRleGVzIiwicmVkdWNlIiwibGlzdE9mSW5kZXhlcyIsImluZGV4IiwicHVzaCIsImN1cnJlbnRTdGF0ZSIsImluZGV4Q291bnRlciIsImN1cnJlbnRJbmRleCIsInRvb2x0aXAiLCJmaWVsZHNUb1Nob3ciLCJmaWVsZHMiLCJ1cGRhdGVMYXllckJsZW5kaW5nVXBkYXRlciIsInNob3dEYXRhc2V0VGFibGVVcGRhdGVyIiwicmVzZXRNYXBDb25maWdVcGRhdGVyIiwiaW5pdGlhbFN0YXRlIiwicmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIiLCJwYXlsb2FkIiwib3B0aW9ucyIsInZpc1N0YXRlIiwia2VlcEV4aXN0aW5nQ29uZmlnIiwibWVyZ2VkU3RhdGUiLCJtZXJnZXIiLCJtZXJnZSIsImxheWVySG92ZXJVcGRhdGVyIiwiaW5mbyIsImludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlciIsImNvbnRyYWRpY3QiLCJmb3JFYWNoIiwiayIsImxheWVyQ2xpY2tVcGRhdGVyIiwiY29vcmRpbmF0ZSIsInBpbm5lZCIsInBpY2tlZCIsIm1hcENsaWNrVXBkYXRlciIsIm1vdXNlTW92ZVVwZGF0ZXIiLCJldnQiLCJ2YWx1ZXMiLCJzb21lIiwibW91c2VQb3NpdGlvbiIsInBvaW50IiwibG5nTGF0IiwidG9nZ2xlU3BsaXRNYXBVcGRhdGVyIiwiY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgiLCJ0b2dnbGVMYXllckZvck1hcFVwZGF0ZXIiLCJtYXBJbmRleCIsInNtIiwidXBkYXRlVmlzRGF0YVVwZGF0ZXIiLCJuZXdEYXRhRW50cmllcyIsImFjY3UiLCJkYXRhIiwibWV0YWRhdGEiLCJkYXRhRW1wdHkiLCJwcmV2aW91c1N0YXRlIiwidG9NZXJnZVByb3AiLCJ0b01lcmdlIiwibmV3TGF5ZXJzIiwiYXV0b0NyZWF0ZUxheWVycyIsImFkZERlZmF1bHRMYXllcnMiLCJ0b29sdGlwRmllbGRzIiwiQXJyYXkiLCJpc0FycmF5IiwiYWRkRGVmYXVsdFRvb2x0aXBzIiwidXBkYXRlZFN0YXRlIiwicmVuYW1lRGF0YXNldFVwZGF0ZXIiLCJleGlzdGluZyIsImluZGV4VG9SZXRyaWV2ZSIsIm1hcExheWVycyIsImxvYWRGaWxlc1VwZGF0ZXIiLCJmaWxlcyIsIm9uRmluaXNoIiwibG9hZEZpbGVzU3VjY2VzcyIsImZyb20iLCJpbml0aWFsRmlsZUxvYWRpbmdQcm9ncmVzcyIsImZpbGVDYWNoZSIsImZpbGVzVG9Mb2FkIiwibG9hZE5leHRGaWxlVXBkYXRlciIsImxvYWRGaWxlU3RlcFN1Y2Nlc3NVcGRhdGVyIiwiZmlsZU5hbWUiLCJzdGF0ZVdpdGhQcm9ncmVzcyIsInVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyIiwicHJvZ3Jlc3MiLCJwZXJjZW50IiwibWVzc2FnZSIsInN0YXRlV2l0aENhY2hlIiwibG9hZE5leHRGaWxlIiwiZmlsZSIsInJlbWFpbmluZ0ZpbGVzVG9Mb2FkIiwibWFrZUxvYWRGaWxlVGFzayIsImJpbWFwIiwiZ2VuIiwiY29udGVudCIsImVyciIsInByb2Nlc3NGaWxlQ29udGVudFVwZGF0ZXIiLCJwYXJzZVByb2dyZXNzIiwicHJldlByb2dyZXNzIiwibmV4dEZpbGVCYXRjaFVwZGF0ZXIiLCJhY2N1bXVsYXRlZCIsIm5leHQiLCJkb25lIiwibG9hZEZpbGVzRXJyVXBkYXRlciIsImFwcGx5Q1BVRmlsdGVyVXBkYXRlciIsImRhdGFJZHMiLCJzZXRNYXBJbmZvVXBkYXRlciIsImVtcHR5IiwiZGVmYXVsdExheWVycyIsImZvdW5kTGF5ZXJzIiwiY29uY2F0IiwiXyIsIm1lcmdlZCIsImZpeGVkRG9tYWluIiwiYW5pbWF0YWJsZUxheWVycyIsImFuaW1hdGlvbkRvbWFpbiIsIm1lcmdlZERvbWFpbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJOdW1iZXIiLCJJbmZpbml0eSIsInNldEVkaXRvck1vZGVVcGRhdGVyIiwic2V0RmVhdHVyZXNVcGRhdGVyIiwibGFzdEZlYXR1cmUiLCJwcm9wZXJ0aWVzIiwiaXNDbG9zZWQiLCJFRElUIiwiZmVhdHVyZSIsImZpbHRlcklkIiwiZmVhdHVyZVZhbHVlIiwiZmlsdGVySWR4IiwiZmlsIiwic2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlciIsImRlbGV0ZUZlYXR1cmVVcGRhdGVyIiwic2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlciIsIm5ld0xheWVySWQiLCJub25lRmlsdGVyRmVhdHVyZSIsImlzTGF5ZXJJbmNsdWRlZCIsInNvcnRUYWJsZUNvbHVtblVwZGF0ZXIiLCJjb2x1bW4iLCJzb3J0TW9kZSIsImN1cnJlbnRNb2RlIiwiU09SVF9PUkRFUiIsIm0iLCJBU0NFTkRJTkciLCJzb3J0ZWQiLCJwaW5UYWJsZUNvbHVtblVwZGF0ZXIiLCJwaW5uZWRDb2x1bW5zIiwiY28iLCJjb3B5VGFibGVDb2x1bW5VcGRhdGVyIiwiZmllbGRJZHgiLCJ0ZXh0IiwiYWxsRGF0YSIsImpvaW4iLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5VXBkYXRlciIsInNldEZpbHRlckFuaW1hdGlvblRpbWVDb25maWdVcGRhdGVyIiwiRklMVEVSX1RZUEVTIiwidGltZVJhbmdlIiwidXBkYXRlcyIsImNoZWNrVGltZUNvbmZpZ0FyZ3MiLCJhbGxvd2VkIiwic2V0TGF5ZXJBbmltYXRpb25UaW1lQ29uZmlnVXBkYXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFRQTs7QUFDQTs7QUFnQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBUUE7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsSUFBekI7QUFDQTs7QUFFQTs7QUFDTyxJQUFNQyx3QkFBd0IsR0FBRztBQUN0Q0MsRUFBQUEsTUFBTSxFQUFFLElBRDhCO0FBRXRDQyxFQUFBQSxXQUFXLEVBQUUsSUFGeUI7QUFHdENDLEVBQUFBLEtBQUssRUFBRSxDQUgrQjtBQUl0Q0MsRUFBQUEsV0FBVyxFQUFFLEtBSnlCO0FBS3RDQyxFQUFBQSxVQUFVLEVBQUUsSUFMMEI7QUFNdENDLEVBQUFBLFFBQVEsRUFBRSxJQU40QjtBQU90Q0MsRUFBQUEsaUJBQWlCLEVBQUU7QUFQbUIsQ0FBakM7QUFVUDs7O0FBQ08sSUFBTUMsY0FBYyxHQUFHO0FBQzVCQyxF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TUFBTSxDQUFDQyxJQUFQLENBQVliLE1BQVosRUFBb0JnSixNQUFwQixDQUEyQixVQUFDK0MsSUFBRCxFQUFPbkosSUFBUCxFQUFnQjtBQUNoRCxRQUFJLENBQUNnUSxPQUFPLENBQUN0USxRQUFSLENBQWlCTSxJQUFqQixDQUFMLEVBQTZCO0FBQzNCaUIsc0JBQVFDLEtBQVIsMEZBQ29GbEIsSUFEcEY7O0FBR0EsYUFBT21KLElBQVA7QUFDRCxLQU4rQyxDQVFoRDs7O0FBQ0FBLElBQUFBLElBQUksQ0FBQ25KLElBQUQsQ0FBSixHQUFhNUMsTUFBTSxDQUFDNEMsSUFBRCxDQUFuQjtBQUNBLFdBQU9tSixJQUFQO0FBQ0QsR0FYTSxFQVdKLEVBWEksQ0FBUDtBQVlEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVM4RyxrQ0FBVCxDQUE0Q3ZULEtBQTVDLFVBQTZEO0FBQUEsTUFBVFUsTUFBUyxVQUFUQSxNQUFTOztBQUNsRSxNQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYLFdBQU9WLEtBQVA7QUFDRDs7QUFDRCxNQUFNb1QsT0FBTyxHQUFHQyxtQkFBbUIsQ0FBQzNTLE1BQUQsQ0FBbkM7QUFDQSxTQUFPLDRCQUFNLGlCQUFOLEVBQXlCLDZCQUFPMFMsT0FBUCxDQUF6QixFQUEwQ3BULEtBQTFDLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7ZGlzYWJsZVN0YWNrQ2FwdHVyaW5nLCB3aXRoVGFza30gZnJvbSAncmVhY3QtcGFsbS90YXNrcyc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcbmltcG9ydCB4b3IgZnJvbSAnbG9kYXNoLnhvcic7XG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQge3BhcnNlRmllbGRWYWx1ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG4vLyBUYXNrc1xuaW1wb3J0IHtMT0FEX0ZJTEVfVEFTSywgVU5XUkFQX1RBU0ssIFBST0NFU1NfRklMRV9EQVRBLCBERUxBWV9UQVNLfSBmcm9tICd0YXNrcy90YXNrcyc7XG4vLyBBY3Rpb25zXG5pbXBvcnQge1xuICBsb2FkRmlsZXNFcnIsXG4gIGxvYWRGaWxlc1N1Y2Nlc3MsXG4gIGxvYWRGaWxlU3RlcFN1Y2Nlc3MsXG4gIGxvYWROZXh0RmlsZSxcbiAgbmV4dEZpbGVCYXRjaFxufSBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcbi8vIFV0aWxzXG5pbXBvcnQge2ZpbmRGaWVsZHNUb1Nob3csIGdldERlZmF1bHRJbnRlcmFjdGlvbn0gZnJvbSAndXRpbHMvaW50ZXJhY3Rpb24tdXRpbHMnO1xuaW1wb3J0IHtcbiAgYXBwbHlGaWx0ZXJGaWVsZE5hbWUsXG4gIGFwcGx5RmlsdGVyc1RvRGF0YXNldHMsXG4gIGZlYXR1cmVUb0ZpbHRlclZhbHVlLFxuICBGSUxURVJfVVBEQVRFUl9QUk9QUyxcbiAgZmlsdGVyRGF0YXNldENQVSxcbiAgZ2VuZXJhdGVQb2x5Z29uRmlsdGVyLFxuICBnZXREZWZhdWx0RmlsdGVyLFxuICBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUsXG4gIGdldEZpbHRlcklkSW5GZWF0dXJlLFxuICBnZXRGaWx0ZXJQbG90LFxuICBnZXRUaW1lV2lkZ2V0VGl0bGVGb3JtYXR0ZXIsXG4gIGlzSW5SYW5nZSxcbiAgTElNSVRFRF9GSUxURVJfRUZGRUNUX1BST1BTLFxuICB1cGRhdGVGaWx0ZXJEYXRhSWRcbn0gZnJvbSAndXRpbHMvZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7YXNzaWduR3B1Q2hhbm5lbCwgc2V0RmlsdGVyR3B1TW9kZX0gZnJvbSAndXRpbHMvZ3B1LWZpbHRlci11dGlscyc7XG5pbXBvcnQge2NyZWF0ZU5ld0RhdGFFbnRyeX0gZnJvbSAndXRpbHMvZGF0YXNldC11dGlscyc7XG5pbXBvcnQge3NvcnREYXRhc2V0QnlDb2x1bW59IGZyb20gJ3V0aWxzL3RhYmxlLXV0aWxzL2tlcGxlci10YWJsZSc7XG5pbXBvcnQge3NldCwgdG9BcnJheSwgYXJyYXlJbnNlcnQsIGdlbmVyYXRlSGFzaElkfSBmcm9tICd1dGlscy91dGlscyc7XG5cbmltcG9ydCB7Y2FsY3VsYXRlTGF5ZXJEYXRhLCBmaW5kRGVmYXVsdExheWVyfSBmcm9tICd1dGlscy9sYXllci11dGlscyc7XG5cbmltcG9ydCB7XG4gIGlzVmFsaWRNZXJnZXIsXG4gIFZJU19TVEFURV9NRVJHRVJTLFxuICB2YWxpZGF0ZUxheWVyV2l0aERhdGEsXG4gIGNyZWF0ZUxheWVyRnJvbUNvbmZpZyxcbiAgc2VyaWFsaXplTGF5ZXJcbn0gZnJvbSAnLi92aXMtc3RhdGUtbWVyZ2VyJztcblxuaW1wb3J0IHtcbiAgYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcCxcbiAgY29tcHV0ZVNwbGl0TWFwTGF5ZXJzLFxuICByZW1vdmVMYXllckZyb21TcGxpdE1hcHNcbn0gZnJvbSAndXRpbHMvc3BsaXQtbWFwLXV0aWxzJztcblxuaW1wb3J0IHtMYXllciwgTGF5ZXJDbGFzc2VzLCBMQVlFUl9JRF9MRU5HVEh9IGZyb20gJ2xheWVycyc7XG5pbXBvcnQge0RFRkFVTFRfVEVYVF9MQUJFTH0gZnJvbSAnbGF5ZXJzL2xheWVyLWZhY3RvcnknO1xuaW1wb3J0IHtFRElUT1JfTU9ERVMsIFNPUlRfT1JERVIsIEZJTFRFUl9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtwaWNrXywgbWVyZ2VfLCBzd2FwX30gZnJvbSAnLi9jb21wb3Nlci1oZWxwZXJzJztcbmltcG9ydCB7cHJvY2Vzc0ZpbGVDb250ZW50fSBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcblxuaW1wb3J0IEtlcGxlckdMU2NoZW1hIGZyb20gJ3NjaGVtYXMnO1xuXG4vLyB0eXBlIGltcG9ydHNcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLkZpZWxkfSBGaWVsZCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuRmlsdGVyfSBGaWx0ZXIgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLktlcGxlclRhYmxlfSBLZXBsZXJUYWJsZSAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuVmlzU3RhdGV9IFZpc1N0YXRlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5EYXRhc2V0c30gRGF0YXNldHMgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLkFuaW1hdGlvbkNvbmZpZ30gQW5pbWF0aW9uQ29uZmlnICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5FZGl0b3J9IEVkaXRvciAqL1xuXG4vLyByZWFjdC1wYWxtXG4vLyBkaXNhYmxlIGNhcHR1cmUgZXhjZXB0aW9uIGZvciByZWFjdC1wYWxtIGNhbGwgdG8gd2l0aFRhc2tcbmRpc2FibGVTdGFja0NhcHR1cmluZygpO1xuXG4vKipcbiAqIFVwZGF0ZXJzIGZvciBgdmlzU3RhdGVgIHJlZHVjZXIuIENhbiBiZSB1c2VkIGluIHlvdXIgcm9vdCByZWR1Y2VyIHRvIGRpcmVjdGx5IG1vZGlmeSBrZXBsZXIuZ2wncyBzdGF0ZS5cbiAqIFJlYWQgbW9yZSBhYm91dCBbVXNpbmcgdXBkYXRlcnNdKC4uL2FkdmFuY2VkLXVzYWdlL3VzaW5nLXVwZGF0ZXJzLm1kKVxuICpcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IGtlcGxlckdsUmVkdWNlciwge3Zpc1N0YXRlVXBkYXRlcnN9IGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XG4gKiAvLyBSb290IFJlZHVjZXJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAqICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxuICogIGFwcDogYXBwUmVkdWNlclxuICogfSk7XG4gKlxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gKiAgICBjYXNlICdDTElDS19CVVRUT04nOlxuICogICAgICByZXR1cm4ge1xuICogICAgICAgIC4uLnN0YXRlLFxuICogICAgICAgIGtlcGxlckdsOiB7XG4gKiAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbCxcbiAqICAgICAgICAgIGZvbzoge1xuICogICAgICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wuZm9vLFxuICogICAgICAgICAgICAgdmlzU3RhdGU6IHZpc1N0YXRlVXBkYXRlcnMuZW5sYXJnZUZpbHRlclVwZGF0ZXIoXG4gKiAgICAgICAgICAgICAgIHN0YXRlLmtlcGxlckdsLmZvby52aXNTdGF0ZSxcbiAqICAgICAgICAgICAgICAge2lkeDogMH1cbiAqICAgICAgICAgICAgIClcbiAqICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICAgIH07XG4gKiAgfVxuICogIHJldHVybiByZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKTtcbiAqIH07XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgY29tcG9zZWRSZWR1Y2VyO1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgdmlzU3RhdGVVcGRhdGVycyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKiBAdHlwZSB7QW5pbWF0aW9uQ29uZmlnfSAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQU5JTUFUSU9OX0NPTkZJRyA9IHtcbiAgZG9tYWluOiBudWxsLFxuICBjdXJyZW50VGltZTogbnVsbCxcbiAgc3BlZWQ6IDEsXG4gIGlzQW5pbWF0aW5nOiBmYWxzZSxcbiAgdGltZUZvcm1hdDogbnVsbCxcbiAgdGltZXpvbmU6IG51bGwsXG4gIGRlZmF1bHRUaW1lRm9ybWF0OiBudWxsXG59O1xuXG4vKiogQHR5cGUge0VkaXRvcn0gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VESVRPUiA9IHtcbiAgbW9kZTogRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTixcbiAgZmVhdHVyZXM6IFtdLFxuICBzZWxlY3RlZEZlYXR1cmU6IG51bGwsXG4gIHZpc2libGU6IHRydWVcbn07XG5cbi8qKlxuICogRGVmYXVsdCBpbml0aWFsIGB2aXNTdGF0ZWBcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtWaXNTdGF0ZX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IElOSVRJQUxfVklTX1NUQVRFID0ge1xuICAvLyBtYXAgaW5mb1xuICBtYXBJbmZvOiB7XG4gICAgdGl0bGU6ICcnLFxuICAgIGRlc2NyaXB0aW9uOiAnJ1xuICB9LFxuICAvLyBsYXllcnNcbiAgbGF5ZXJzOiBbXSxcbiAgbGF5ZXJEYXRhOiBbXSxcbiAgbGF5ZXJUb0JlTWVyZ2VkOiBbXSxcbiAgbGF5ZXJPcmRlcjogW10sXG5cbiAgLy8gZmlsdGVyc1xuICBmaWx0ZXJzOiBbXSxcbiAgZmlsdGVyVG9CZU1lcmdlZDogW10sXG5cbiAgLy8gYSBjb2xsZWN0aW9uIG9mIG11bHRpcGxlIGRhdGFzZXRcbiAgZGF0YXNldHM6IHt9LFxuICBlZGl0aW5nRGF0YXNldDogdW5kZWZpbmVkLFxuXG4gIGludGVyYWN0aW9uQ29uZmlnOiBnZXREZWZhdWx0SW50ZXJhY3Rpb24oKSxcbiAgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkOiB1bmRlZmluZWQsXG5cbiAgbGF5ZXJCbGVuZGluZzogJ25vcm1hbCcsXG4gIGhvdmVySW5mbzogdW5kZWZpbmVkLFxuICBjbGlja2VkOiB1bmRlZmluZWQsXG4gIG1vdXNlUG9zOiB7fSxcblxuICAvLyB0aGlzIGlzIHVzZWQgd2hlbiB1c2VyIHNwbGl0IG1hcHNcbiAgc3BsaXRNYXBzOiBbXG4gICAgLy8gdGhpcyB3aWxsIGNvbnRhaW4gYSBsaXN0IG9mIG9iamVjdHMgdG9cbiAgICAvLyBkZXNjcmliZSB0aGUgc3RhdGUgb2YgbGF5ZXIgYXZhaWxhYmlsaXR5IGFuZCB2aXNpYmlsaXR5IGZvciBlYWNoIG1hcFxuICAgIC8vIFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgIGxheWVyczoge2xheWVyX2lkOiB0cnVlIHwgZmFsc2V9XG4gICAgLy8gICB9XG4gICAgLy8gXVxuICBdLFxuICBzcGxpdE1hcHNUb0JlTWVyZ2VkOiBbXSxcblxuICAvLyBkZWZhdWx0cyBsYXllciBjbGFzc2VzXG4gIGxheWVyQ2xhc3NlczogTGF5ZXJDbGFzc2VzLFxuXG4gIC8vIGRlZmF1bHQgYW5pbWF0aW9uXG4gIC8vIHRpbWUgaW4gdW5peCB0aW1lc3RhbXAgKG1pbGxpc2Vjb25kcykgKHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSB0aGUgVW5peCBFcG9jaClcbiAgYW5pbWF0aW9uQ29uZmlnOiBERUZBVUxUX0FOSU1BVElPTl9DT05GSUcsXG5cbiAgZWRpdG9yOiBERUZBVUxUX0VESVRPUixcblxuICBmaWxlTG9hZGluZzogZmFsc2UsXG4gIGZpbGVMb2FkaW5nUHJvZ3Jlc3M6IHt9LFxuXG4gIGxvYWRlcnM6IFtdLFxuICBsb2FkT3B0aW9uczoge30sXG5cbiAgLy8gdmlzU3RhdGVNZXJnZXJzXG4gIG1lcmdlcnM6IFZJU19TVEFURV9NRVJHRVJTLFxuXG4gIC8vIGtlcGxlciBzY2hlbWFzXG4gIHNjaGVtYTogS2VwbGVyR0xTY2hlbWFcbn07XG5cbi8qKlxuICogVXBkYXRlIHN0YXRlIHdpdGggdXBkYXRlZCBsYXllciBhbmQgbGF5ZXJEYXRhXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS51cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGF9XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSkge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxheWVyczogc3RhdGUubGF5ZXJzLm1hcCgobHlyLCBpKSA9PiAoaSA9PT0gaWR4ID8gbGF5ZXIgOiBseXIpKSxcbiAgICBsYXllckRhdGE6IGxheWVyRGF0YVxuICAgICAgPyBzdGF0ZS5sYXllckRhdGEubWFwKChkLCBpKSA9PiAoaSA9PT0gaWR4ID8gbGF5ZXJEYXRhIDogZCkpXG4gICAgICA6IHN0YXRlLmxheWVyRGF0YVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RhdGVPbkxheWVyVmlzaWJpbGl0eUNoYW5nZShzdGF0ZSwgbGF5ZXIpIHtcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG4gIGlmIChzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoKSB7XG4gICAgbmV3U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNwbGl0TWFwczogbGF5ZXIuY29uZmlnLmlzVmlzaWJsZVxuICAgICAgICA/IGFkZE5ld0xheWVyc1RvU3BsaXRNYXAoc3RhdGUuc3BsaXRNYXBzLCBsYXllcilcbiAgICAgICAgOiByZW1vdmVMYXllckZyb21TcGxpdE1hcHMoc3RhdGUuc3BsaXRNYXBzLCBsYXllcilcbiAgICB9O1xuICB9XG5cbiAgaWYgKGxheWVyLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCkge1xuICAgIG5ld1N0YXRlID0gdXBkYXRlQW5pbWF0aW9uRG9tYWluKHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgYmFzZSBjb25maWc6IGRhdGFJZCwgbGFiZWwsIGNvbHVtbiwgaXNWaXNpYmxlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyfVxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7b2xkTGF5ZXJ9ID0gYWN0aW9uO1xuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xuICBjb25zdCBwcm9wcyA9IE9iamVjdC5rZXlzKGFjdGlvbi5uZXdDb25maWcpO1xuICBpZiAodHlwZW9mIGFjdGlvbi5uZXdDb25maWcuZGF0YUlkID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHtkYXRhSWQsIC4uLnJlc3RDb25maWd9ID0gYWN0aW9uLm5ld0NvbmZpZztcbiAgICBjb25zdCBzdGF0ZVdpdGhEYXRhSWQgPSBsYXllckRhdGFJZENoYW5nZVVwZGF0ZXIoc3RhdGUsIHtcbiAgICAgIG9sZExheWVyLFxuICAgICAgbmV3Q29uZmlnOiB7ZGF0YUlkfVxuICAgIH0pO1xuICAgIGNvbnN0IG5leHRMYXllciA9IHN0YXRlV2l0aERhdGFJZC5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcbiAgICByZXR1cm4gbmV4dExheWVyICYmIE9iamVjdC5rZXlzKHJlc3RDb25maWcpLmxlbmd0aFxuICAgICAgPyBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGVXaXRoRGF0YUlkLCB7b2xkTGF5ZXI6IG5leHRMYXllciwgbmV3Q29uZmlnOiByZXN0Q29uZmlnfSlcbiAgICAgIDogc3RhdGVXaXRoRGF0YUlkO1xuICB9XG5cbiAgbGV0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoYWN0aW9uLm5ld0NvbmZpZyk7XG5cbiAgbGV0IGxheWVyRGF0YTtcblxuICAvLyBsZXQgbmV3TGF5ZXI7XG4gIGlmIChuZXdMYXllci5zaG91bGRDYWxjdWxhdGVMYXllckRhdGEocHJvcHMpKSB7XG4gICAgY29uc3Qgb2xkTGF5ZXJEYXRhID0gc3RhdGUubGF5ZXJEYXRhW2lkeF07XG4gICAgY29uc3QgdXBkYXRlTGF5ZXJEYXRhUmVzdWx0ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgb2xkTGF5ZXJEYXRhKTtcblxuICAgIGxheWVyRGF0YSA9IHVwZGF0ZUxheWVyRGF0YVJlc3VsdC5sYXllckRhdGE7XG4gICAgbmV3TGF5ZXIgPSB1cGRhdGVMYXllckRhdGFSZXN1bHQubGF5ZXI7XG4gIH1cblxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcbiAgaWYgKCdpc1Zpc2libGUnIGluIGFjdGlvbi5uZXdDb25maWcpIHtcbiAgICBuZXdTdGF0ZSA9IHVwZGF0ZVN0YXRlT25MYXllclZpc2liaWxpdHlDaGFuZ2Uoc3RhdGUsIG5ld0xheWVyKTtcbiAgfVxuXG4gIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEobmV3U3RhdGUsIHtcbiAgICBsYXllcjogbmV3TGF5ZXIsXG4gICAgbGF5ZXJEYXRhLFxuICAgIGlkeFxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkT3JSZW1vdmVUZXh0TGFiZWxzKG5ld0ZpZWxkcywgdGV4dExhYmVsKSB7XG4gIGxldCBuZXdUZXh0TGFiZWwgPSB0ZXh0TGFiZWwuc2xpY2UoKTtcblxuICBjb25zdCBjdXJyZW50RmllbGRzID0gdGV4dExhYmVsLm1hcCh0bCA9PiB0bC5maWVsZCAmJiB0bC5maWVsZC5uYW1lKS5maWx0ZXIoZCA9PiBkKTtcblxuICBjb25zdCBhZGRGaWVsZHMgPSBuZXdGaWVsZHMuZmlsdGVyKGYgPT4gIWN1cnJlbnRGaWVsZHMuaW5jbHVkZXMoZi5uYW1lKSk7XG4gIGNvbnN0IGRlbGV0ZUZpZWxkcyA9IGN1cnJlbnRGaWVsZHMuZmlsdGVyKGYgPT4gIW5ld0ZpZWxkcy5maW5kKGZkID0+IGZkLm5hbWUgPT09IGYpKTtcblxuICAvLyBkZWxldGVcbiAgbmV3VGV4dExhYmVsID0gbmV3VGV4dExhYmVsLmZpbHRlcih0bCA9PiB0bC5maWVsZCAmJiAhZGVsZXRlRmllbGRzLmluY2x1ZGVzKHRsLmZpZWxkLm5hbWUpKTtcbiAgbmV3VGV4dExhYmVsID0gIW5ld1RleHRMYWJlbC5sZW5ndGggPyBbREVGQVVMVF9URVhUX0xBQkVMXSA6IG5ld1RleHRMYWJlbDtcblxuICAvLyBhZGRcbiAgbmV3VGV4dExhYmVsID0gW1xuICAgIC4uLm5ld1RleHRMYWJlbC5maWx0ZXIodGwgPT4gdGwuZmllbGQpLFxuICAgIC4uLmFkZEZpZWxkcy5tYXAoYWYgPT4gKHtcbiAgICAgIC4uLkRFRkFVTFRfVEVYVF9MQUJFTCxcbiAgICAgIGZpZWxkOiBhZlxuICAgIH0pKVxuICBdO1xuXG4gIHJldHVybiBuZXdUZXh0TGFiZWw7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRleHRMYWJlbFByb3BBbmRWYWx1ZShpZHgsIHByb3AsIHZhbHVlLCB0ZXh0TGFiZWwpIHtcbiAgaWYgKCF0ZXh0TGFiZWxbaWR4XS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgIHJldHVybiB0ZXh0TGFiZWw7XG4gIH1cblxuICBsZXQgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLnNsaWNlKCk7XG5cbiAgaWYgKHByb3AgJiYgKHZhbHVlIHx8IHRleHRMYWJlbC5sZW5ndGggPT09IDEpKSB7XG4gICAgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLm1hcCgodGwsIGkpID0+IChpID09PSBpZHggPyB7Li4udGwsIFtwcm9wXTogdmFsdWV9IDogdGwpKTtcbiAgfSBlbHNlIGlmIChwcm9wID09PSAnZmllbGQnICYmIHZhbHVlID09PSBudWxsICYmIHRleHRMYWJlbC5sZW5ndGggPiAxKSB7XG4gICAgLy8gcmVtb3ZlIGxhYmVsIHdoZW4gZmllbGQgdmFsdWUgaXMgc2V0IHRvIG51bGxcbiAgICBuZXdUZXh0TGFiZWwuc3BsaWNlKGlkeCwgMSk7XG4gIH1cblxuICByZXR1cm4gbmV3VGV4dExhYmVsO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciBiYXNlIGNvbmZpZzogZGF0YUlkLCBsYWJlbCwgY29sdW1uLCBpc1Zpc2libGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXJ9XG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVGV4dExhYmVsQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllciwgaWR4LCBwcm9wLCB2YWx1ZX0gPSBhY3Rpb247XG4gIGNvbnN0IHt0ZXh0TGFiZWx9ID0gb2xkTGF5ZXIuY29uZmlnO1xuXG4gIGxldCBuZXdUZXh0TGFiZWwgPSB0ZXh0TGFiZWwuc2xpY2UoKTtcbiAgaWYgKCF0ZXh0TGFiZWxbaWR4XSAmJiBpZHggPT09IHRleHRMYWJlbC5sZW5ndGgpIHtcbiAgICAvLyBpZiBpZHggaXMgc2V0IHRvIGxlbmd0aCwgYWRkIGVtcHR5IHRleHQgbGFiZWxcbiAgICBuZXdUZXh0TGFiZWwgPSBbLi4udGV4dExhYmVsLCBERUZBVUxUX1RFWFRfTEFCRUxdO1xuICB9XG5cbiAgaWYgKGlkeCA9PT0gJ2FsbCcgJiYgcHJvcCA9PT0gJ2ZpZWxkcycpIHtcbiAgICBuZXdUZXh0TGFiZWwgPSBhZGRPclJlbW92ZVRleHRMYWJlbHModmFsdWUsIHRleHRMYWJlbCk7XG4gIH0gZWxzZSB7XG4gICAgbmV3VGV4dExhYmVsID0gdXBkYXRlVGV4dExhYmVsUHJvcEFuZFZhbHVlKGlkeCwgcHJvcCwgdmFsdWUsIG5ld1RleHRMYWJlbCk7XG4gIH1cbiAgLy8gdXBkYXRlIHRleHQgbGFiZWwgcHJvcCBhbmQgdmFsdWVcbiAgcmV0dXJuIGxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwge1xuICAgIG9sZExheWVyLFxuICAgIG5ld0NvbmZpZzoge3RleHRMYWJlbDogbmV3VGV4dExhYmVsfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFeGlzdGluZ0xheWVyV2l0aERhdGEoZGF0YXNldCwgbGF5ZXJDbGFzc2VzLCBsYXllcikge1xuICBjb25zdCBsb2FkZWRMYXllciA9IHNlcmlhbGl6ZUxheWVyKGxheWVyKTtcbiAgcmV0dXJuIHZhbGlkYXRlTGF5ZXJXaXRoRGF0YShkYXRhc2V0LCBsb2FkZWRMYXllciwgbGF5ZXJDbGFzc2VzLCB7XG4gICAgYWxsb3dFbXB0eUNvbHVtbjogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgY29uZmlnIGRhdGFJZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyRGF0YUlkQ2hhbmdlVXBkYXRlcn1cbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJEYXRhSWRDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyLCBuZXdDb25maWd9ID0gYWN0aW9uO1xuICBjb25zdCB7ZGF0YUlkfSA9IG5ld0NvbmZpZztcblxuICBpZiAoIW9sZExheWVyIHx8ICFzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG5cbiAgbGV0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe2RhdGFJZH0pO1xuICAvLyB0aGlzIG1heSBoYXBwZW4gd2hlbiBhIGxheWVyIGlzIG5ldyAodHlwZTogbnVsbCBhbmQgbm8gY29sdW1ucykgYnV0IGl0J3Mgbm90IHJlYWR5IHRvIGJlIHNhdmVkXG4gIGlmIChuZXdMYXllci5pc1ZhbGlkVG9TYXZlKCkpIHtcbiAgICBjb25zdCB2YWxpZGF0ZWQgPSB2YWxpZGF0ZUV4aXN0aW5nTGF5ZXJXaXRoRGF0YShcbiAgICAgIHN0YXRlLmRhdGFzZXRzW2RhdGFJZF0sXG4gICAgICBzdGF0ZS5sYXllckNsYXNzZXMsXG4gICAgICBuZXdMYXllclxuICAgICk7XG4gICAgLy8gaWYgY2FudCB2YWxpZGF0ZSBpdCB3aXRoIGRhdGEgY3JlYXRlIGEgbmV3IG9uZVxuICAgIGlmICghdmFsaWRhdGVkKSB7XG4gICAgICBuZXdMYXllciA9IG5ldyBzdGF0ZS5sYXllckNsYXNzZXNbb2xkTGF5ZXIudHlwZV0oe2RhdGFJZCwgaWQ6IG9sZExheWVyLmlkfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0xheWVyID0gdmFsaWRhdGVkO1xuICAgIH1cbiAgfVxuXG4gIG5ld0xheWVyID0gbmV3TGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe1xuICAgIGlzVmlzaWJsZTogb2xkTGF5ZXIuY29uZmlnLmlzVmlzaWJsZSxcbiAgICBpc0NvbmZpZ0FjdGl2ZTogdHJ1ZVxuICB9KTtcblxuICBuZXdMYXllci51cGRhdGVMYXllckRvbWFpbihzdGF0ZS5kYXRhc2V0cyk7XG4gIGNvbnN0IHtsYXllckRhdGEsIGxheWVyfSA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUsIHVuZGVmaW5lZCk7XG5cbiAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciB0eXBlLiBQcmV2aWV3cyBsYXllciBjb25maWcgd2lsbCBiZSBjb3BpZWQgaWYgYXBwbGljYWJsZS5cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllclR5cGVDaGFuZ2VVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUeXBlQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllciwgbmV3VHlwZX0gPSBhY3Rpb247XG4gIGlmICghb2xkTGF5ZXIpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3Qgb2xkSWQgPSBvbGRMYXllci5pZDtcbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZElkKTtcblxuICBpZiAoIXN0YXRlLmxheWVyQ2xhc3Nlc1tuZXdUeXBlXSkge1xuICAgIENvbnNvbGUuZXJyb3IoYCR7bmV3VHlwZX0gaXMgbm90IGEgdmFsaWQgbGF5ZXIgdHlwZWApO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8vIGdldCBhIG1pbnQgbGF5ZXIsIHdpdGggbmV3IGlkIGFuZCB0eXBlXG4gIC8vIGJlY2F1c2UgZGVjay5nbCB1c2VzIGlkIHRvIG1hdGNoIGJldHdlZW4gbmV3IGFuZCBvbGQgbGF5ZXIuXG4gIC8vIElmIHR5cGUgaGFzIGNoYW5nZWQgYnV0IGlkIGlzIHRoZSBzYW1lLCBpdCB3aWxsIGJyZWFrXG4gIGNvbnN0IG5ld0xheWVyID0gbmV3IHN0YXRlLmxheWVyQ2xhc3Nlc1tuZXdUeXBlXSgpO1xuXG4gIG5ld0xheWVyLmFzc2lnbkNvbmZpZ1RvTGF5ZXIob2xkTGF5ZXIuY29uZmlnLCBvbGRMYXllci52aXNDb25maWdTZXR0aW5ncyk7XG5cbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJEb21haW4oc3RhdGUuZGF0YXNldHMpO1xuICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlKTtcbiAgbGV0IG5ld1N0YXRlID0gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XG5cbiAgaWYgKGxheWVyLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCB8fCBvbGRMYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihuZXdTdGF0ZSk7XG4gIH1cblxuICAvLyB1cGRhdGUgc3BsaXRNYXAgbGF5ZXIgaWRcbiAgaWYgKHN0YXRlLnNwbGl0TWFwcy5sZW5ndGgpIHtcbiAgICBuZXdTdGF0ZSA9IHtcbiAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgc3BsaXRNYXBzOiBuZXdTdGF0ZS5zcGxpdE1hcHMubWFwKHNldHRpbmdzID0+IHtcbiAgICAgICAgY29uc3Qge1tvbGRJZF06IG9sZExheWVyTWFwLCAuLi5vdGhlckxheWVyc30gPSBzZXR0aW5ncy5sYXllcnM7XG4gICAgICAgIHJldHVybiBvbGRJZCBpbiBzZXR0aW5ncy5sYXllcnNcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgLi4uc2V0dGluZ3MsXG4gICAgICAgICAgICAgIGxheWVyczoge1xuICAgICAgICAgICAgICAgIC4uLm90aGVyTGF5ZXJzLFxuICAgICAgICAgICAgICAgIFtsYXllci5pZF06IG9sZExheWVyTWFwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHNldHRpbmdzO1xuICAgICAgfSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciB2aXN1YWwgY2hhbm5lbFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyVmlzdWFsQ2hhbm5lbENoYW5nZVVwZGF0ZXJ9XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzdWFsQ2hhbm5lbENoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7b2xkTGF5ZXIsIG5ld0NvbmZpZywgY2hhbm5lbH0gPSBhY3Rpb247XG4gIGlmICghb2xkTGF5ZXIuY29uZmlnLmRhdGFJZCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCBkYXRhc2V0ID0gc3RhdGUuZGF0YXNldHNbb2xkTGF5ZXIuY29uZmlnLmRhdGFJZF07XG5cbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcbiAgY29uc3QgbmV3TGF5ZXIgPSBvbGRMYXllci51cGRhdGVMYXllckNvbmZpZyhuZXdDb25maWcpO1xuXG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbChkYXRhc2V0LCBjaGFubmVsKTtcblxuICBjb25zdCBvbGRMYXllckRhdGEgPSBzdGF0ZS5sYXllckRhdGFbaWR4XTtcbiAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgb2xkTGF5ZXJEYXRhKTtcblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGB2aXNDb25maWdgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyfSA9IGFjdGlvbjtcbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhhY3Rpb24ubmV3VmlzQ29uZmlnKTtcbiAgY29uc3QgbmV3VmlzQ29uZmlnID0ge1xuICAgIC4uLm9sZExheWVyLmNvbmZpZy52aXNDb25maWcsXG4gICAgLi4uYWN0aW9uLm5ld1Zpc0NvbmZpZ1xuICB9O1xuXG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe3Zpc0NvbmZpZzogbmV3VmlzQ29uZmlnfSk7XG5cbiAgaWYgKG5ld0xheWVyLnNob3VsZENhbGN1bGF0ZUxheWVyRGF0YShwcm9wcykpIHtcbiAgICBjb25zdCBvbGRMYXllckRhdGEgPSBzdGF0ZS5sYXllckRhdGFbaWR4XTtcbiAgICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBvbGRMYXllckRhdGEpO1xuICAgIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllckRhdGEsIGxheWVyLCBpZHh9KTtcbiAgfVxuXG4gIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllcjogbmV3TGF5ZXIsIGlkeH0pO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBmaWx0ZXIgcHJvcGVydHlcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRGaWx0ZXJBbmltYXRpb25UaW1lVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlckFuaW1hdGlvblRpbWVVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIHNldEZpbHRlclVwZGF0ZXIoc3RhdGUsIGFjdGlvbik7XG59XG5cbi8qKlxuICogVXBkYXRlIGZpbHRlciBhbmltYXRpb24gd2luZG93XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0RmlsdGVyQW5pbWF0aW9uV2luZG93VXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlckFuaW1hdGlvbldpbmRvd1VwZGF0ZXIoc3RhdGUsIHtpZCwgYW5pbWF0aW9uV2luZG93fSkge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKGYgPT5cbiAgICAgIGYuaWQgPT09IGlkXG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uZixcbiAgICAgICAgICAgIGFuaW1hdGlvbldpbmRvd1xuICAgICAgICAgIH1cbiAgICAgICAgOiBmXG4gICAgKVxuICB9O1xufVxuLyoqXG4gKiBVcGRhdGUgZmlsdGVyIHByb3BlcnR5XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0RmlsdGVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlclVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7aWR4LCBwcm9wLCB2YWx1ZSwgdmFsdWVJbmRleCA9IDB9ID0gYWN0aW9uO1xuICBjb25zdCBvbGRGaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2lkeF07XG5cbiAgaWYgKCFvbGRGaWx0ZXIpIHtcbiAgICBDb25zb2xlLmVycm9yKGBmaWx0ZXJzLiR7aWR4fSBpcyB1bmRlZmluZWRgKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgbGV0IG5ld0ZpbHRlciA9IHNldChbcHJvcF0sIHZhbHVlLCBvbGRGaWx0ZXIpO1xuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcblxuICBjb25zdCB7ZGF0YUlkfSA9IG5ld0ZpbHRlcjtcblxuICAvLyBFbnN1cmluZyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gIGxldCBkYXRhc2V0SWRzID0gdG9BcnJheShkYXRhSWQpO1xuXG4gIHN3aXRjaCAocHJvcCkge1xuICAgIC8vIFRPRE86IE5leHQgUFIgZm9yIFVJIGlmIHdlIHVwZGF0ZSBkYXRhSWQsIHdlIG5lZWQgdG8gY29uc2lkZXIgdHdvIGNhc2VzOlxuICAgIC8vIDEuIGRhdGFJZCBpcyBlbXB0eTogY3JlYXRlIGEgZGVmYXVsdCBmaWx0ZXJcbiAgICAvLyAyLiBBZGQgYSBuZXcgZGF0YXNldCBpZFxuICAgIGNhc2UgRklMVEVSX1VQREFURVJfUFJPUFMuZGF0YUlkOlxuICAgICAgLy8gaWYgdHJ5aW5nIHRvIHVwZGF0ZSBmaWx0ZXIgZGF0YUlkLiBjcmVhdGUgYW4gZW1wdHkgbmV3IGZpbHRlclxuICAgICAgbmV3RmlsdGVyID0gdXBkYXRlRmlsdGVyRGF0YUlkKGRhdGFJZCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRklMVEVSX1VQREFURVJfUFJPUFMubmFtZTpcbiAgICAgIC8vIHdlIGFyZSBzdXBwb3J0aW5nIHRoZSBjdXJyZW50IGZ1bmN0aW9uYWxpdHlcbiAgICAgIC8vIFRPRE86IE5leHQgUFIgZm9yIFVJIGZpbHRlciBuYW1lIHdpbGwgb25seSB1cGRhdGUgZmlsdGVyIG5hbWUgYnV0IGl0IHdvbid0IGhhdmUgc2lkZSBlZmZlY3RzXG4gICAgICAvLyB3ZSBhcmUgZ29ubmEgdXNlIHBhaXIgb2YgZGF0YXNldHMgYW5kIGZpZWxkSWR4IHRvIHVwZGF0ZSB0aGUgZmlsdGVyXG4gICAgICBjb25zdCBkYXRhc2V0SWQgPSBuZXdGaWx0ZXIuZGF0YUlkW3ZhbHVlSW5kZXhdO1xuICAgICAgY29uc3Qge2ZpbHRlcjogdXBkYXRlZEZpbHRlciwgZGF0YXNldDogbmV3RGF0YXNldH0gPSBhcHBseUZpbHRlckZpZWxkTmFtZShcbiAgICAgICAgbmV3RmlsdGVyLFxuICAgICAgICBzdGF0ZS5kYXRhc2V0c1tkYXRhc2V0SWRdLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgdmFsdWVJbmRleCxcbiAgICAgICAge21lcmdlRG9tYWluOiBmYWxzZX1cbiAgICAgICk7XG4gICAgICBpZiAoIXVwZGF0ZWRGaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBuZXdGaWx0ZXIgPSB1cGRhdGVkRmlsdGVyO1xuXG4gICAgICBpZiAobmV3RmlsdGVyLmdwdSkge1xuICAgICAgICBuZXdGaWx0ZXIgPSBzZXRGaWx0ZXJHcHVNb2RlKG5ld0ZpbHRlciwgc3RhdGUuZmlsdGVycyk7XG4gICAgICAgIG5ld0ZpbHRlciA9IGFzc2lnbkdwdUNoYW5uZWwobmV3RmlsdGVyLCBzdGF0ZS5maWx0ZXJzKTtcbiAgICAgIH1cblxuICAgICAgbmV3U3RhdGUgPSBzZXQoWydkYXRhc2V0cycsIGRhdGFzZXRJZF0sIG5ld0RhdGFzZXQsIHN0YXRlKTtcblxuICAgICAgLy8gb25seSBmaWx0ZXIgdGhlIGN1cnJlbnQgZGF0YXNldFxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGSUxURVJfVVBEQVRFUl9QUk9QUy5sYXllcklkOlxuICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgb25seSBkYXRhc2V0SWQvcyBpZiB3ZSBoYXZlIGFkZGVkL3JlbW92ZWQgbGF5ZXJzXG4gICAgICAvLyAtIGNoZWNrIGZvciBsYXllcklkIGNoYW5nZXMgKFhPUiB3b3JrcyBiZWNhdXNlIG9mIHN0cmluZyB2YWx1ZXMpXG4gICAgICAvLyBpZiBubyBkaWZmZXJlbmNlcyBiZXR3ZWVuIGxheWVySWRzLCBkb24ndCBkbyBhbnkgZmlsdGVyaW5nXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBsYXllcklkRGlmZmVyZW5jZSA9IHhvcihuZXdGaWx0ZXIubGF5ZXJJZCwgb2xkRmlsdGVyLmxheWVySWQpO1xuXG4gICAgICBjb25zdCBsYXllckRhdGFJZHMgPSB1bmlxKFxuICAgICAgICBsYXllcklkRGlmZmVyZW5jZVxuICAgICAgICAgIC5tYXAobGlkID0+XG4gICAgICAgICAgICBnZXQoXG4gICAgICAgICAgICAgIHN0YXRlLmxheWVycy5maW5kKGwgPT4gbC5pZCA9PT0gbGlkKSxcbiAgICAgICAgICAgICAgWydjb25maWcnLCAnZGF0YUlkJ11cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgLmZpbHRlcihkID0+IGQpXG4gICAgICApO1xuXG4gICAgICAvLyBvbmx5IGZpbHRlciBkYXRhc2V0c0lkc1xuICAgICAgZGF0YXNldElkcyA9IGxheWVyRGF0YUlkcztcblxuICAgICAgLy8gVXBkYXRlIG5ld0ZpbHRlciBkYXRhSWRzXG4gICAgICBjb25zdCBuZXdEYXRhSWRzID0gdW5pcShcbiAgICAgICAgbmV3RmlsdGVyLmxheWVySWRcbiAgICAgICAgICAubWFwKGxpZCA9PlxuICAgICAgICAgICAgZ2V0KFxuICAgICAgICAgICAgICBzdGF0ZS5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IGxpZCksXG4gICAgICAgICAgICAgIFsnY29uZmlnJywgJ2RhdGFJZCddXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIC5maWx0ZXIoZCA9PiBkKVxuICAgICAgKTtcblxuICAgICAgbmV3RmlsdGVyID0ge1xuICAgICAgICAuLi5uZXdGaWx0ZXIsXG4gICAgICAgIGRhdGFJZDogbmV3RGF0YUlkc1xuICAgICAgfTtcblxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc3QgZW5sYXJnZWRGaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzLmZpbmQoZiA9PiBmLmVubGFyZ2VkKTtcblxuICBpZiAoZW5sYXJnZWRGaWx0ZXIgJiYgZW5sYXJnZWRGaWx0ZXIuaWQgIT09IG5ld0ZpbHRlci5pZCkge1xuICAgIC8vIHRoZXJlIHNob3VsZCBiZSBvbmx5IG9uZSBlbmxhcmdlZCBmaWx0ZXJcbiAgICBuZXdGaWx0ZXIuZW5sYXJnZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIHNhdmUgbmV3IGZpbHRlcnMgdG8gbmV3U3RhdGVcbiAgbmV3U3RhdGUgPSBzZXQoWydmaWx0ZXJzJywgaWR4XSwgbmV3RmlsdGVyLCBuZXdTdGF0ZSk7XG5cbiAgLy8gaWYgd2UgYXJlIGN1cnJlbnRseSBzZXR0aW5nIGEgcHJvcCB0aGF0IG9ubHkgcmVxdWlyZXMgdG8gZmlsdGVyIHRoZSBjdXJyZW50XG4gIC8vIGRhdGFzZXQgd2Ugd2lsbCBwYXNzIG9ubHkgdGhlIGN1cnJlbnQgZGF0YXNldCB0byBhcHBseUZpbHRlcnNUb0RhdGFzZXRzIGFuZFxuICAvLyB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEgb3RoZXJ3aXNlIHdlIHBhc3MgdGhlIGFsbCBsaXN0IG9mIGRhdGFzZXRzIGFzIGRlZmluZWQgaW4gZGF0YUlkXG4gIGNvbnN0IGRhdGFzZXRJZHNUb0ZpbHRlciA9IExJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QU1twcm9wXVxuICAgID8gW2RhdGFzZXRJZHNbdmFsdWVJbmRleF1dXG4gICAgOiBkYXRhc2V0SWRzO1xuXG4gIC8vIGZpbHRlciBkYXRhXG4gIGNvbnN0IGZpbHRlcmVkRGF0YXNldHMgPSBhcHBseUZpbHRlcnNUb0RhdGFzZXRzKFxuICAgIGRhdGFzZXRJZHNUb0ZpbHRlcixcbiAgICBuZXdTdGF0ZS5kYXRhc2V0cyxcbiAgICBuZXdTdGF0ZS5maWx0ZXJzLFxuICAgIG5ld1N0YXRlLmxheWVyc1xuICApO1xuXG4gIG5ld1N0YXRlID0gc2V0KFsnZGF0YXNldHMnXSwgZmlsdGVyZWREYXRhc2V0cywgbmV3U3RhdGUpO1xuICAvLyBkYXRhSWQgaXMgYW4gYXJyYXlcbiAgLy8gcGFzcyBvbmx5IHRoZSBkYXRhc2V0IHdlIG5lZWQgdG8gdXBkYXRlXG4gIG5ld1N0YXRlID0gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhKG5ld1N0YXRlLCBkYXRhc2V0SWRzVG9GaWx0ZXIsIG5ld0ZpbHRlcik7XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG4vKipcbiAqIFNldCB0aGUgcHJvcGVydHkgb2YgYSBmaWx0ZXIgcGxvdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEZpbHRlclBsb3RVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RmlsdGVyUGxvdFVwZGF0ZXIgPSAoc3RhdGUsIHtpZHgsIG5ld1Byb3AsIHZhbHVlSW5kZXggPSAwfSkgPT4ge1xuICBsZXQgbmV3RmlsdGVyID0gey4uLnN0YXRlLmZpbHRlcnNbaWR4XSwgLi4ubmV3UHJvcH07XG4gIGNvbnN0IHByb3AgPSBPYmplY3Qua2V5cyhuZXdQcm9wKVswXTtcbiAgaWYgKHByb3AgPT09ICd5QXhpcycpIHtcbiAgICBjb25zdCBwbG90VHlwZSA9IGdldERlZmF1bHRGaWx0ZXJQbG90VHlwZShuZXdGaWx0ZXIpO1xuICAgIC8vIFRPRE86IHBsb3QgaXMgbm90IHN1cHBvcnRlZCBpbiBtdWx0aSBkYXRhc2V0IGZpbHRlciBmb3Igbm93XG4gICAgaWYgKHBsb3RUeXBlKSB7XG4gICAgICBuZXdGaWx0ZXIgPSB7XG4gICAgICAgIC4uLm5ld0ZpbHRlcixcbiAgICAgICAgLi4uZ2V0RmlsdGVyUGxvdCh7Li4ubmV3RmlsdGVyLCBwbG90VHlwZX0sIHN0YXRlLmRhdGFzZXRzW25ld0ZpbHRlci5kYXRhSWRbdmFsdWVJbmRleF1dKSxcbiAgICAgICAgcGxvdFR5cGVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcCgoZiwgaSkgPT4gKGkgPT09IGlkeCA/IG5ld0ZpbHRlciA6IGYpKVxuICB9O1xufTtcblxuLyoqXG4gKiBBZGQgYSBuZXcgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYWRkRmlsdGVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZEZpbHRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT5cbiAgIWFjdGlvbi5kYXRhSWRcbiAgICA/IHN0YXRlXG4gICAgOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJzOiBbLi4uc3RhdGUuZmlsdGVycywgZ2V0RGVmYXVsdEZpbHRlcihhY3Rpb24uZGF0YUlkKV1cbiAgICAgIH07XG5cbi8qKlxuICogU2V0IGxheWVyIGNvbG9yIHBhbGV0dGUgdWkgc3RhdGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllckNvbG9yVUlDaGFuZ2VVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3QgbGF5ZXJDb2xvclVJQ2hhbmdlVXBkYXRlciA9IChzdGF0ZSwge29sZExheWVyLCBwcm9wLCBuZXdDb25maWd9KSA9PiB7XG4gIGNvbnN0IG9sZFZpeENvbmZpZyA9IG9sZExheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcF07XG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb2xvclVJKHByb3AsIG5ld0NvbmZpZyk7XG4gIGNvbnN0IG5ld1Zpc0NvbmZpZyA9IG5ld0xheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcF07XG4gIGlmIChvbGRWaXhDb25maWcgIT09IG5ld1Zpc0NvbmZpZykge1xuICAgIHJldHVybiBsYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGUsIHtcbiAgICAgIG9sZExheWVyLFxuICAgICAgbmV3VmlzQ29uZmlnOiB7XG4gICAgICAgIFtwcm9wXTogbmV3VmlzQ29uZmlnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IHN0YXRlLmxheWVycy5tYXAobCA9PiAobC5pZCA9PT0gb2xkTGF5ZXIuaWQgPyBuZXdMYXllciA6IGwpKVxuICB9O1xufTtcblxuLyoqXG4gKiBTdGFydCBhbmQgZW5kIGZpbHRlciBhbmltYXRpb25cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBhY3Rpb24uaWR4ID8gey4uLmYsIGlzQW5pbWF0aW5nOiAhZi5pc0FuaW1hdGluZ30gOiBmKSlcbn0pO1xuXG4vKipcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVMYXllckFuaW1hdGlvblVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVMYXllckFuaW1hdGlvblVwZGF0ZXIgPSBzdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgLi4uc3RhdGUuYW5pbWF0aW9uQ29uZmlnLFxuICAgIGlzQW5pbWF0aW5nOiAhc3RhdGUuYW5pbWF0aW9uQ29uZmlnLmlzQW5pbWF0aW5nXG4gIH1cbn0pO1xuLyoqXG4gKiBDaGFuZ2UgZmlsdGVyIGFuaW1hdGlvbiBzcGVlZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBhY3Rpb24uaWR4ID8gey4uLmYsIHNwZWVkOiBhY3Rpb24uc3BlZWR9IDogZikpXG59KTtcblxuLyoqXG4gKiBSZXNldCBhbmltYXRpb24gY29uZmlnIGN1cnJlbnQgdGltZSB0byBhIHNwZWNpZmllZCB2YWx1ZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldExheWVyQW5pbWF0aW9uVGltZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKlxuICovXG5leHBvcnQgY29uc3Qgc2V0TGF5ZXJBbmltYXRpb25UaW1lVXBkYXRlciA9IChzdGF0ZSwge3ZhbHVlfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGFuaW1hdGlvbkNvbmZpZzoge1xuICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICBjdXJyZW50VGltZTogdmFsdWVcbiAgfVxufSk7XG5cbi8qKlxuICogVXBkYXRlIGFuaW1hdGlvbiBzcGVlZCB3aXRoIHRoZSB2ZXJ0aWNhbCBzcGVlZCBzbGlkZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS51cGRhdGVMYXllckFuaW1hdGlvblNwZWVkVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVMYXllckFuaW1hdGlvblNwZWVkVXBkYXRlciA9IChzdGF0ZSwge3NwZWVkfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGFuaW1hdGlvbkNvbmZpZzoge1xuICAgICAgLi4uc3RhdGUuYW5pbWF0aW9uQ29uZmlnLFxuICAgICAgc3BlZWRcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIFNob3cgbGFyZ2VyIHRpbWUgZmlsdGVyIGF0IGJvdHRvbSBmb3IgdGltZSBwbGF5YmFjayAoYXBwbHkgdG8gdGltZSBmaWx0ZXIgb25seSlcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5lbmxhcmdlRmlsdGVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGVubGFyZ2VGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcCgoZiwgaSkgPT5cbiAgICAgIGkgPT09IGFjdGlvbi5pZHhcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi5mLFxuICAgICAgICAgICAgZW5sYXJnZWQ6ICFmLmVubGFyZ2VkXG4gICAgICAgICAgfVxuICAgICAgICA6IGZcbiAgICApXG4gIH07XG59O1xuXG4vKipcbiAqIFRvZ2dsZXMgZmlsdGVyIGZlYXR1cmUgdmlzaWJpbGl0eVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZUZpbHRlckZlYXR1cmVVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBmaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2FjdGlvbi5pZHhdO1xuICBjb25zdCBpc1Zpc2libGUgPSBnZXQoZmlsdGVyLCBbJ3ZhbHVlJywgJ3Byb3BlcnRpZXMnLCAnaXNWaXNpYmxlJ10pO1xuICBjb25zdCBuZXdGaWx0ZXIgPSB7XG4gICAgLi4uZmlsdGVyLFxuICAgIHZhbHVlOiBmZWF0dXJlVG9GaWx0ZXJWYWx1ZShmaWx0ZXIudmFsdWUsIGZpbHRlci5pZCwge1xuICAgICAgaXNWaXNpYmxlOiAhaXNWaXNpYmxlXG4gICAgfSlcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGZpbHRlcnM6IE9iamVjdC5hc3NpZ24oWy4uLnN0YXRlLmZpbHRlcnNdLCB7W2FjdGlvbi5pZHhdOiBuZXdGaWx0ZXJ9KVxuICB9O1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZW1vdmVGaWx0ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRmlsdGVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtpZHh9ID0gYWN0aW9uO1xuICBjb25zdCB7ZGF0YUlkLCBpZH0gPSBzdGF0ZS5maWx0ZXJzW2lkeF07XG5cbiAgY29uc3QgbmV3RmlsdGVycyA9IFtcbiAgICAuLi5zdGF0ZS5maWx0ZXJzLnNsaWNlKDAsIGlkeCksXG4gICAgLi4uc3RhdGUuZmlsdGVycy5zbGljZShpZHggKyAxLCBzdGF0ZS5maWx0ZXJzLmxlbmd0aClcbiAgXTtcblxuICBjb25zdCBmaWx0ZXJlZERhdGFzZXRzID0gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyhkYXRhSWQsIHN0YXRlLmRhdGFzZXRzLCBuZXdGaWx0ZXJzLCBzdGF0ZS5sYXllcnMpO1xuICBjb25zdCBuZXdFZGl0b3IgPVxuICAgIGdldEZpbHRlcklkSW5GZWF0dXJlKHN0YXRlLmVkaXRvci5zZWxlY3RlZEZlYXR1cmUpID09PSBpZFxuICAgICAgPyB7XG4gICAgICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICAgICAgICB9XG4gICAgICA6IHN0YXRlLmVkaXRvcjtcblxuICBsZXQgbmV3U3RhdGUgPSBzZXQoWydmaWx0ZXJzJ10sIG5ld0ZpbHRlcnMsIHN0YXRlKTtcbiAgbmV3U3RhdGUgPSBzZXQoWydkYXRhc2V0cyddLCBmaWx0ZXJlZERhdGFzZXRzLCBuZXdTdGF0ZSk7XG4gIG5ld1N0YXRlID0gc2V0KFsnZWRpdG9yJ10sIG5ld0VkaXRvciwgbmV3U3RhdGUpO1xuXG4gIHJldHVybiB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEobmV3U3RhdGUsIGRhdGFJZCwgdW5kZWZpbmVkKTtcbn07XG5cbi8qKlxuICogQWRkIGEgbmV3IGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYWRkTGF5ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYWRkTGF5ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgbGV0IG5ld0xheWVyO1xuICBsZXQgbmV3TGF5ZXJEYXRhO1xuICBpZiAoYWN0aW9uLmNvbmZpZykge1xuICAgIG5ld0xheWVyID0gY3JlYXRlTGF5ZXJGcm9tQ29uZmlnKHN0YXRlLCBhY3Rpb24uY29uZmlnKTtcbiAgICBpZiAoIW5ld0xheWVyKSB7XG4gICAgICBDb25zb2xlLndhcm4oXG4gICAgICAgICdGYWlsZWQgdG8gY3JlYXRlIGxheWVyIGZyb20gY29uZmlnLCBpdCB1c3VhbGx5IG1lYW5zIHRoZSBjb25maWcgaXMgbm90IGJlIGluIGNvcnJlY3QgZm9ybWF0JyxcbiAgICAgICAgYWN0aW9uLmNvbmZpZ1xuICAgICAgKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlKTtcbiAgICBuZXdMYXllciA9IHJlc3VsdC5sYXllcjtcbiAgICBuZXdMYXllckRhdGEgPSByZXN1bHQubGF5ZXJEYXRhO1xuICB9IGVsc2Uge1xuICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSBsYXllciB3aXRoIHRoZSBmaXJzdCBhdmFpbGFibGUgZGF0YXNldFxuICAgIGNvbnN0IGRlZmF1bHREYXRhc2V0ID0gT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldHMpWzBdO1xuICAgIG5ld0xheWVyID0gbmV3IExheWVyKHtcbiAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZmlnQWN0aXZlOiB0cnVlLFxuICAgICAgZGF0YUlkOiBkZWZhdWx0RGF0YXNldFxuICAgIH0pO1xuICAgIG5ld0xheWVyRGF0YSA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBbLi4uc3RhdGUubGF5ZXJzLCBuZXdMYXllcl0sXG4gICAgbGF5ZXJEYXRhOiBbLi4uc3RhdGUubGF5ZXJEYXRhLCBuZXdMYXllckRhdGFdLFxuICAgIGxheWVyT3JkZXI6IFsuLi5zdGF0ZS5sYXllck9yZGVyLCBzdGF0ZS5sYXllck9yZGVyLmxlbmd0aF0sXG4gICAgc3BsaXRNYXBzOiBhZGROZXdMYXllcnNUb1NwbGl0TWFwKHN0YXRlLnNwbGl0TWFwcywgbmV3TGF5ZXIpXG4gIH07XG59O1xuXG4vKipcbiAqIHJlbW92ZSBsYXllclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlbW92ZUxheWVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUxheWVyVXBkYXRlciA9IChzdGF0ZSwge2lkeH0pID0+IHtcbiAgY29uc3Qge2xheWVycywgbGF5ZXJEYXRhLCBjbGlja2VkLCBob3ZlckluZm99ID0gc3RhdGU7XG4gIGNvbnN0IGxheWVyVG9SZW1vdmUgPSBzdGF0ZS5sYXllcnNbaWR4XTtcbiAgY29uc3QgbmV3TWFwcyA9IHJlbW92ZUxheWVyRnJvbVNwbGl0TWFwcyhzdGF0ZS5zcGxpdE1hcHMsIGxheWVyVG9SZW1vdmUpO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxheWVyczogWy4uLmxheWVycy5zbGljZSgwLCBpZHgpLCAuLi5sYXllcnMuc2xpY2UoaWR4ICsgMSwgbGF5ZXJzLmxlbmd0aCldLFxuICAgIGxheWVyRGF0YTogWy4uLmxheWVyRGF0YS5zbGljZSgwLCBpZHgpLCAuLi5sYXllckRhdGEuc2xpY2UoaWR4ICsgMSwgbGF5ZXJEYXRhLmxlbmd0aCldLFxuICAgIGxheWVyT3JkZXI6IHN0YXRlLmxheWVyT3JkZXIuZmlsdGVyKGkgPT4gaSAhPT0gaWR4KS5tYXAocGlkID0+IChwaWQgPiBpZHggPyBwaWQgLSAxIDogcGlkKSksXG4gICAgY2xpY2tlZDogbGF5ZXJUb1JlbW92ZS5pc0xheWVySG92ZXJlZChjbGlja2VkKSA/IHVuZGVmaW5lZCA6IGNsaWNrZWQsXG4gICAgaG92ZXJJbmZvOiBsYXllclRvUmVtb3ZlLmlzTGF5ZXJIb3ZlcmVkKGhvdmVySW5mbykgPyB1bmRlZmluZWQgOiBob3ZlckluZm8sXG4gICAgc3BsaXRNYXBzOiBuZXdNYXBzXG4gICAgLy8gVE9ETzogdXBkYXRlIGZpbHRlcnMsIGNyZWF0ZSBoZWxwZXIgdG8gcmVtb3ZlIGxheWVyIGZvcm0gZmlsdGVyIChyZW1vdmUgbGF5ZXJpZCBhbmQgZGF0YWlkKSBpZiBtYXBwZWRcbiAgfTtcblxuICByZXR1cm4gdXBkYXRlQW5pbWF0aW9uRG9tYWluKG5ld1N0YXRlKTtcbn07XG5cbi8qKlxuICogZHVwbGljYXRlIGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuZHVwbGljYXRlTGF5ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgZHVwbGljYXRlTGF5ZXJVcGRhdGVyID0gKHN0YXRlLCB7aWR4fSkgPT4ge1xuICBjb25zdCB7bGF5ZXJzfSA9IHN0YXRlO1xuICBjb25zdCBvcmlnaW5hbCA9IHN0YXRlLmxheWVyc1tpZHhdO1xuICBjb25zdCBvcmlnaW5hbExheWVyT3JkZXJJZHggPSBzdGF0ZS5sYXllck9yZGVyLmZpbmRJbmRleChpID0+IGkgPT09IGlkeCk7XG5cbiAgaWYgKCFvcmlnaW5hbCkge1xuICAgIENvbnNvbGUud2FybihgbGF5ZXIuJHtpZHh9IGlzIHVuZGVmaW5lZGApO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBsZXQgbmV3TGFiZWwgPSBgQ29weSBvZiAke29yaWdpbmFsLmNvbmZpZy5sYWJlbH1gO1xuICBsZXQgcG9zdGZpeCA9IDA7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgd2hpbGUgKGxheWVycy5maW5kKGwgPT4gbC5jb25maWcubGFiZWwgPT09IG5ld0xhYmVsKSkge1xuICAgIG5ld0xhYmVsID0gYENvcHkgb2YgJHtvcmlnaW5hbC5jb25maWcubGFiZWx9ICR7Kytwb3N0Zml4fWA7XG4gIH1cblxuICAvLyBjb2xsZWN0IGxheWVyIGNvbmZpZyBmcm9tIG9yaWdpbmFsXG4gIGNvbnN0IGxvYWRlZExheWVyID0gc2VyaWFsaXplTGF5ZXIob3JpZ2luYWwpO1xuXG4gIC8vIGFzc2lnbiBuZXcgaWQgYW5kIGxhYmVsIHRvIGNvcGllZCBsYXllclxuICBpZiAoIWxvYWRlZExheWVyLmNvbmZpZykge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBsb2FkZWRMYXllci5jb25maWcubGFiZWwgPSBuZXdMYWJlbDtcbiAgbG9hZGVkTGF5ZXIuaWQgPSBnZW5lcmF0ZUhhc2hJZChMQVlFUl9JRF9MRU5HVEgpO1xuXG4gIC8vIGFkZCBsYXllciB0byBzdGF0ZVxuICBsZXQgbmV4dFN0YXRlID0gYWRkTGF5ZXJVcGRhdGVyKHN0YXRlLCB7Y29uZmlnOiBsb2FkZWRMYXllcn0pO1xuXG4gIC8vIG5ldyBhZGRlZCBsYXllciBhcmUgYXQgdGhlIGVuZCwgbW92ZSBpdCB0byBiZSBvbiB0b3Agb2Ygb3JpZ2luYWwgbGF5ZXJcbiAgY29uc3QgbmV3TGF5ZXJPcmRlcklkeCA9IG5leHRTdGF0ZS5sYXllck9yZGVyLmxlbmd0aCAtIDE7XG4gIGNvbnN0IG5ld0xheWVyT3JkZXIgPSBhcnJheUluc2VydChcbiAgICBuZXh0U3RhdGUubGF5ZXJPcmRlci5zbGljZSgwLCBuZXdMYXllck9yZGVySWR4KSxcbiAgICBvcmlnaW5hbExheWVyT3JkZXJJZHgsXG4gICAgbmV3TGF5ZXJPcmRlcklkeFxuICApO1xuXG4gIG5leHRTdGF0ZSA9IHtcbiAgICAuLi5uZXh0U3RhdGUsXG4gICAgbGF5ZXJPcmRlcjogbmV3TGF5ZXJPcmRlclxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVBbmltYXRpb25Eb21haW4obmV4dFN0YXRlKTtcbn07XG5cbi8qKlxuICogUmVvcmRlciBsYXllclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlb3JkZXJMYXllclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW9yZGVyTGF5ZXJVcGRhdGVyID0gKHN0YXRlLCB7b3JkZXJ9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbGF5ZXJPcmRlcjogb3JkZXJcbn0pO1xuXG4vKipcbiAqIFJlbW92ZSBhIGRhdGFzZXQgYW5kIGFsbCBsYXllcnMsIGZpbHRlcnMsIHRvb2x0aXAgY29uZmlncyB0aGF0IGJhc2VkIG9uIGl0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucmVtb3ZlRGF0YXNldFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVEYXRhc2V0VXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8vIGV4dHJhY3QgZGF0YXNldCBrZXlcbiAgY29uc3Qge2RhdGFJZDogZGF0YXNldEtleX0gPSBhY3Rpb247XG4gIGNvbnN0IHtkYXRhc2V0c30gPSBzdGF0ZTtcblxuICAvLyBjaGVjayBpZiBkYXRhc2V0IGlzIHByZXNlbnRcbiAgaWYgKCFkYXRhc2V0c1tkYXRhc2V0S2V5XSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gIGNvbnN0IHtcbiAgICBsYXllcnMsXG4gICAgZGF0YXNldHM6IHtbZGF0YXNldEtleV06IGRhdGFzZXQsIC4uLm5ld0RhdGFzZXRzfVxuICB9ID0gc3RhdGU7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICBjb25zdCBpbmRleGVzID0gbGF5ZXJzLnJlZHVjZSgobGlzdE9mSW5kZXhlcywgbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgaWYgKGxheWVyLmNvbmZpZy5kYXRhSWQgPT09IGRhdGFzZXRLZXkpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGxpc3RPZkluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0T2ZJbmRleGVzO1xuICB9LCBbXSk7XG5cbiAgLy8gcmVtb3ZlIGxheWVycyBhbmQgZGF0YXNldHNcbiAgY29uc3Qge25ld1N0YXRlfSA9IGluZGV4ZXMucmVkdWNlKFxuICAgICh7bmV3U3RhdGU6IGN1cnJlbnRTdGF0ZSwgaW5kZXhDb3VudGVyfSwgaWR4KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBpZHggLSBpbmRleENvdW50ZXI7XG4gICAgICBjdXJyZW50U3RhdGUgPSByZW1vdmVMYXllclVwZGF0ZXIoY3VycmVudFN0YXRlLCB7aWR4OiBjdXJyZW50SW5kZXh9KTtcbiAgICAgIGluZGV4Q291bnRlcisrO1xuICAgICAgcmV0dXJuIHtuZXdTdGF0ZTogY3VycmVudFN0YXRlLCBpbmRleENvdW50ZXJ9O1xuICAgIH0sXG4gICAge25ld1N0YXRlOiB7Li4uc3RhdGUsIGRhdGFzZXRzOiBuZXdEYXRhc2V0c30sIGluZGV4Q291bnRlcjogMH1cbiAgKTtcblxuICAvLyByZW1vdmUgZmlsdGVyc1xuICBjb25zdCBmaWx0ZXJzID0gc3RhdGUuZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+ICFmaWx0ZXIuZGF0YUlkLmluY2x1ZGVzKGRhdGFzZXRLZXkpKTtcblxuICAvLyB1cGRhdGUgaW50ZXJhY3Rpb25Db25maWdcbiAgbGV0IHtpbnRlcmFjdGlvbkNvbmZpZ30gPSBzdGF0ZTtcbiAgY29uc3Qge3Rvb2x0aXB9ID0gaW50ZXJhY3Rpb25Db25maWc7XG4gIGlmICh0b29sdGlwKSB7XG4gICAgY29uc3Qge2NvbmZpZ30gPSB0b29sdGlwO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1tkYXRhc2V0S2V5XTogZmllbGRzLCAuLi5maWVsZHNUb1Nob3d9ID0gY29uZmlnLmZpZWxkc1RvU2hvdztcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgaW50ZXJhY3Rpb25Db25maWcgPSB7XG4gICAgICAuLi5pbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgIHRvb2x0aXA6IHsuLi50b29sdGlwLCBjb25maWc6IHsuLi5jb25maWcsIGZpZWxkc1RvU2hvd319XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7Li4ubmV3U3RhdGUsIGZpbHRlcnMsIGludGVyYWN0aW9uQ29uZmlnfTtcbn07XG5cbi8qKlxuICogdXBkYXRlIGxheWVyIGJsZW5kaW5nIG1vZGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS51cGRhdGVMYXllckJsZW5kaW5nVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBsYXllckJsZW5kaW5nOiBhY3Rpb24ubW9kZVxufSk7XG5cbi8qKlxuICogRGlzcGxheSBkYXRhc2V0IHRhYmxlIGluIGEgbW9kYWxcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zaG93RGF0YXNldFRhYmxlVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dEYXRhc2V0VGFibGVVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBlZGl0aW5nRGF0YXNldDogYWN0aW9uLmRhdGFJZFxuICB9O1xufTtcblxuLyoqXG4gKiByZXNldCB2aXNTdGF0ZSB0byBpbml0aWFsIFN0YXRlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucmVzZXRNYXBDb25maWdVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVzZXRNYXBDb25maWdVcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uSU5JVElBTF9WSVNfU1RBVEUsXG4gIC4uLnN0YXRlLmluaXRpYWxTdGF0ZSxcbiAgaW5pdGlhbFN0YXRlOiBzdGF0ZS5pbml0aWFsU3RhdGVcbn0pO1xuXG4vKipcbiAqIFByb3BhZ2F0ZSBgdmlzU3RhdGVgIHJlZHVjZXIgd2l0aCBhIG5ldyBjb25maWd1cmF0aW9uLiBDdXJyZW50IGNvbmZpZyB3aWxsIGJlIG92ZXJyaWRlLlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlY2VpdmVNYXBDb25maWdVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiB7Y29uZmlnID0ge30sIG9wdGlvbnMgPSB7fX19KSA9PiB7XG4gIGlmICghY29uZmlnLnZpc1N0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3Qge2tlZXBFeGlzdGluZ0NvbmZpZ30gPSBvcHRpb25zO1xuXG4gIC8vIHJlc2V0IGNvbmZpZyBpZiBrZWVwRXhpc3RpbmdDb25maWcgaXMgZmFsc3lcbiAgbGV0IG1lcmdlZFN0YXRlID0gIWtlZXBFeGlzdGluZ0NvbmZpZyA/IHJlc2V0TWFwQ29uZmlnVXBkYXRlcihzdGF0ZSkgOiBzdGF0ZTtcbiAgZm9yIChjb25zdCBtZXJnZXIgb2Ygc3RhdGUubWVyZ2Vycykge1xuICAgIGlmIChpc1ZhbGlkTWVyZ2VyKG1lcmdlcikgJiYgY29uZmlnLnZpc1N0YXRlW21lcmdlci5wcm9wXSkge1xuICAgICAgbWVyZ2VkU3RhdGUgPSBtZXJnZXIubWVyZ2UobWVyZ2VkU3RhdGUsIGNvbmZpZy52aXNTdGF0ZVttZXJnZXIucHJvcF0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZWRTdGF0ZTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBsYXllciBob3ZlciBldmVudCB3aXRoIGhvdmVyZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJIb3ZlclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsYXllckhvdmVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgaG92ZXJJbmZvOiBhY3Rpb24uaW5mb1xufSk7XG5cbi8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMgKi9cblxuLyoqXG4gKiBVcGRhdGUgYGludGVyYWN0aW9uQ29uZmlnYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtjb25maWd9ID0gYWN0aW9uO1xuXG4gIGNvbnN0IGludGVyYWN0aW9uQ29uZmlnID0ge1xuICAgIC4uLnN0YXRlLmludGVyYWN0aW9uQ29uZmlnLFxuICAgIC4uLntbY29uZmlnLmlkXTogY29uZmlnfVxuICB9O1xuXG4gIC8vIERvbid0IGVuYWJsZSB0b29sdGlwIGFuZCBicnVzaCBhdCB0aGUgc2FtZSB0aW1lXG4gIC8vIGJ1dCBjb29yZGluYXRlcyBjYW4gYmUgc2hvd24gYXQgYWxsIHRpbWVcbiAgY29uc3QgY29udHJhZGljdCA9IFsnYnJ1c2gnLCAndG9vbHRpcCddO1xuXG4gIGlmIChcbiAgICBjb250cmFkaWN0LmluY2x1ZGVzKGNvbmZpZy5pZCkgJiZcbiAgICBjb25maWcuZW5hYmxlZCAmJlxuICAgICFzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1tjb25maWcuaWRdLmVuYWJsZWRcbiAgKSB7XG4gICAgLy8gb25seSBlbmFibGUgb25lIGludGVyYWN0aW9uIGF0IGEgdGltZVxuICAgIGNvbnRyYWRpY3QuZm9yRWFjaChrID0+IHtcbiAgICAgIGlmIChrICE9PSBjb25maWcuaWQpIHtcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWdba10gPSB7Li4uaW50ZXJhY3Rpb25Db25maWdba10sIGVuYWJsZWQ6IGZhbHNlfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGludGVyYWN0aW9uQ29uZmlnXG4gIH07XG5cbiAgaWYgKGNvbmZpZy5pZCA9PT0gJ2dlb2NvZGVyJyAmJiAhY29uZmlnLmVuYWJsZWQpIHtcbiAgICByZXR1cm4gcmVtb3ZlRGF0YXNldFVwZGF0ZXIobmV3U3RhdGUsIHtkYXRhSWQ6ICdnZW9jb2Rlcl9kYXRhc2V0J30pO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgY2xpY2sgZXZlbnQgd2l0aCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyQ2xpY2tVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbGF5ZXJDbGlja1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIG1vdXNlUG9zOiBzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy5jb29yZGluYXRlLmVuYWJsZWRcbiAgICA/IHtcbiAgICAgICAgLi4uc3RhdGUubW91c2VQb3MsXG4gICAgICAgIHBpbm5lZDogc3RhdGUubW91c2VQb3MucGlubmVkID8gbnVsbCA6IGNsb25lRGVlcChzdGF0ZS5tb3VzZVBvcylcbiAgICAgIH1cbiAgICA6IHN0YXRlLm1vdXNlUG9zLFxuICBjbGlja2VkOiBhY3Rpb24uaW5mbyAmJiBhY3Rpb24uaW5mby5waWNrZWQgPyBhY3Rpb24uaW5mbyA6IG51bGxcbn0pO1xuXG4vKipcbiAqIFRyaWdnZXIgbWFwIGNsaWNrIGV2ZW50LCB1bnNlbGVjdCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLm1hcENsaWNrVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcENsaWNrVXBkYXRlciA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBjbGlja2VkOiBudWxsXG4gIH07XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgbWFwIG1vdmUgZXZlbnRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5tb3VzZU1vdmVVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbW91c2VNb3ZlVXBkYXRlciA9IChzdGF0ZSwge2V2dH0pID0+IHtcbiAgaWYgKE9iamVjdC52YWx1ZXMoc3RhdGUuaW50ZXJhY3Rpb25Db25maWcpLnNvbWUoY29uZmlnID0+IGNvbmZpZy5lbmFibGVkKSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG1vdXNlUG9zOiB7XG4gICAgICAgIC4uLnN0YXRlLm1vdXNlUG9zLFxuICAgICAgICBtb3VzZVBvc2l0aW9uOiBbLi4uZXZ0LnBvaW50XSxcbiAgICAgICAgY29vcmRpbmF0ZTogWy4uLmV2dC5sbmdMYXRdXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG4vKipcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIGEgbGF5ZXIgZm9yIGEgc3BsaXQgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlU3BsaXRNYXBVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlU3BsaXRNYXBVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+XG4gIHN0YXRlLnNwbGl0TWFwcyAmJiBzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoID09PSAwXG4gICAgPyB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyBtYXliZSB3ZSBzaG91bGQgdXNlIGFuIGFycmF5IHRvIHN0b3JlIHN0YXRlIGZvciBhIHNpbmdsZSBtYXAgYXMgd2VsbFxuICAgICAgICAvLyBpZiBjdXJyZW50IG1hcHMgbGVuZ3RoIGlzIGVxdWFsIHRvIDAgaXQgbWVhbnMgdGhhdCB3ZSBhcmUgYWJvdXQgdG8gc3BsaXQgdGhlIHZpZXdcbiAgICAgICAgc3BsaXRNYXBzOiBjb21wdXRlU3BsaXRNYXBMYXllcnMoc3RhdGUubGF5ZXJzKVxuICAgICAgfVxuICAgIDogY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgoc3RhdGUsIGFjdGlvbik7XG5cbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgYSBsYXllciBpbiBhIHNwbGl0IG1hcFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlciA9IChzdGF0ZSwge21hcEluZGV4LCBsYXllcklkfSkgPT4ge1xuICBjb25zdCB7c3BsaXRNYXBzfSA9IHN0YXRlO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgc3BsaXRNYXBzOiBzcGxpdE1hcHMubWFwKChzbSwgaSkgPT5cbiAgICAgIGkgPT09IG1hcEluZGV4XG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uc3BsaXRNYXBzW2ldLFxuICAgICAgICAgICAgbGF5ZXJzOiB7XG4gICAgICAgICAgICAgIC4uLnNwbGl0TWFwc1tpXS5sYXllcnMsXG4gICAgICAgICAgICAgIC8vIGlmIGxheWVySWQgbm90IGluIGxheWVycywgc2V0IGl0IHRvIHZpc2libGVcbiAgICAgICAgICAgICAgW2xheWVySWRdOiAhc3BsaXRNYXBzW2ldLmxheWVyc1tsYXllcklkXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgOiBzbVxuICAgIClcbiAgfTtcbn07XG5cbi8qKlxuICogQWRkIG5ldyBkYXRhc2V0IHRvIGB2aXNTdGF0ZWAsIHdpdGggb3B0aW9uIHRvIGxvYWQgYSBtYXAgY29uZmlnIGFsb25nIHdpdGggdGhlIGRhdGFzZXRzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlVmlzRGF0YVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZXhwb3J0IGNvbnN0IHVwZGF0ZVZpc0RhdGFVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgLy8gZGF0YXNldHMgY2FuIGJlIGEgc2luZ2xlIGRhdGEgZW50cmllcyBvciBhbiBhcnJheSBvZiBtdWx0aXBsZSBkYXRhIGVudHJpZXNcbiAgY29uc3Qge2NvbmZpZywgb3B0aW9uc30gPSBhY3Rpb247XG4gIGNvbnN0IGRhdGFzZXRzID0gdG9BcnJheShhY3Rpb24uZGF0YXNldHMpO1xuXG4gIGNvbnN0IG5ld0RhdGFFbnRyaWVzID0gZGF0YXNldHMucmVkdWNlKFxuICAgIChhY2N1LCB7aW5mbyA9IHt9LCBkYXRhLCBtZXRhZGF0YX0gPSB7fSkgPT4gKHtcbiAgICAgIC4uLmFjY3UsXG4gICAgICAuLi4oY3JlYXRlTmV3RGF0YUVudHJ5KHtpbmZvLCBkYXRhLCBtZXRhZGF0YX0sIHN0YXRlLmRhdGFzZXRzKSB8fCB7fSlcbiAgICB9KSxcbiAgICB7fVxuICApO1xuXG4gIGNvbnN0IGRhdGFFbXB0eSA9IE9iamVjdC5rZXlzKG5ld0RhdGFFbnRyaWVzKS5sZW5ndGggPCAxO1xuXG4gIC8vIGFwcGx5IGNvbmZpZyBpZiBwYXNzZWQgZnJvbSBhY3Rpb25cbiAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IGNvbmZpZ1xuICAgID8gcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIoc3RhdGUsIHtcbiAgICAgICAgcGF5bG9hZDoge2NvbmZpZywgb3B0aW9uc31cbiAgICAgIH0pXG4gICAgOiBzdGF0ZTtcblxuICBsZXQgbWVyZ2VkU3RhdGUgPSB7XG4gICAgLi4ucHJldmlvdXNTdGF0ZSxcbiAgICBkYXRhc2V0czoge1xuICAgICAgLi4ucHJldmlvdXNTdGF0ZS5kYXRhc2V0cyxcbiAgICAgIC4uLm5ld0RhdGFFbnRyaWVzXG4gICAgfVxuICB9O1xuXG4gIC8vIG1lcmdlIHN0YXRlIHdpdGggY29uZmlnIHRvIGJlIG1lcmdlZFxuICBmb3IgKGNvbnN0IG1lcmdlciBvZiBtZXJnZWRTdGF0ZS5tZXJnZXJzKSB7XG4gICAgaWYgKGlzVmFsaWRNZXJnZXIobWVyZ2VyKSAmJiBtZXJnZXIudG9NZXJnZVByb3AgJiYgbWVyZ2VkU3RhdGVbbWVyZ2VyLnRvTWVyZ2VQcm9wXSkge1xuICAgICAgY29uc3QgdG9NZXJnZSA9IG1lcmdlZFN0YXRlW21lcmdlci50b01lcmdlUHJvcF07XG4gICAgICBtZXJnZWRTdGF0ZVttZXJnZXIudG9NZXJnZVByb3BdID0gSU5JVElBTF9WSVNfU1RBVEVbbWVyZ2VyLnRvTWVyZ2VQcm9wXTtcbiAgICAgIG1lcmdlZFN0YXRlID0gbWVyZ2VyLm1lcmdlKG1lcmdlZFN0YXRlLCB0b01lcmdlKTtcbiAgICB9XG4gIH1cblxuICBsZXQgbmV3TGF5ZXJzID0gIWRhdGFFbXB0eVxuICAgID8gbWVyZ2VkU3RhdGUubGF5ZXJzLmZpbHRlcihsID0+IGwuY29uZmlnLmRhdGFJZCAmJiBsLmNvbmZpZy5kYXRhSWQgaW4gbmV3RGF0YUVudHJpZXMpXG4gICAgOiBbXTtcblxuICBpZiAoIW5ld0xheWVycy5sZW5ndGggJiYgKG9wdGlvbnMgfHwge30pLmF1dG9DcmVhdGVMYXllcnMgIT09IGZhbHNlKSB7XG4gICAgLy8gbm8gbGF5ZXIgbWVyZ2VkLCBmaW5kIGRlZmF1bHRzXG4gICAgY29uc3QgcmVzdWx0ID0gYWRkRGVmYXVsdExheWVycyhtZXJnZWRTdGF0ZSwgbmV3RGF0YUVudHJpZXMpO1xuICAgIG1lcmdlZFN0YXRlID0gcmVzdWx0LnN0YXRlO1xuICAgIG5ld0xheWVycyA9IHJlc3VsdC5uZXdMYXllcnM7XG4gIH1cblxuICBpZiAobWVyZ2VkU3RhdGUuc3BsaXRNYXBzLmxlbmd0aCkge1xuICAgIC8vIGlmIG1hcCBpcyBzcGxpdCwgYWRkIG5ldyBsYXllcnMgdG8gc3BsaXRNYXBzXG4gICAgbmV3TGF5ZXJzID0gbWVyZ2VkU3RhdGUubGF5ZXJzLmZpbHRlcihcbiAgICAgIGwgPT4gbC5jb25maWcuZGF0YUlkICYmIGwuY29uZmlnLmRhdGFJZCBpbiBuZXdEYXRhRW50cmllc1xuICAgICk7XG4gICAgbWVyZ2VkU3RhdGUgPSB7XG4gICAgICAuLi5tZXJnZWRTdGF0ZSxcbiAgICAgIHNwbGl0TWFwczogYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChtZXJnZWRTdGF0ZS5zcGxpdE1hcHMsIG5ld0xheWVycylcbiAgICB9O1xuICB9XG5cbiAgLy8gaWYgbm8gdG9vbHRpcHMgbWVyZ2VkIGFkZCBkZWZhdWx0IHRvb2x0aXBzXG4gIE9iamVjdC5rZXlzKG5ld0RhdGFFbnRyaWVzKS5mb3JFYWNoKGRhdGFJZCA9PiB7XG4gICAgY29uc3QgdG9vbHRpcEZpZWxkcyA9IG1lcmdlZFN0YXRlLmludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0b29sdGlwRmllbGRzKSB8fCAhdG9vbHRpcEZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZFN0YXRlID0gYWRkRGVmYXVsdFRvb2x0aXBzKG1lcmdlZFN0YXRlLCBuZXdEYXRhRW50cmllc1tkYXRhSWRdKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCB1cGRhdGVkU3RhdGUgPSB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEoXG4gICAgbWVyZ2VkU3RhdGUsXG4gICAgZGF0YUVtcHR5ID8gT2JqZWN0LmtleXMobWVyZ2VkU3RhdGUuZGF0YXNldHMpIDogT2JqZWN0LmtleXMobmV3RGF0YUVudHJpZXMpLFxuICAgIHVuZGVmaW5lZFxuICApO1xuXG4gIC8vIHJlZ2lzdGVyIGxheWVyIGFuaW1hdGlvbiBkb21haW4sXG4gIC8vIG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGxheWVyIGRhdGEgaXMgY2FsY3VsYXRlZFxuICB1cGRhdGVkU3RhdGUgPSB1cGRhdGVBbmltYXRpb25Eb21haW4odXBkYXRlZFN0YXRlKTtcblxuICByZXR1cm4gdXBkYXRlZFN0YXRlO1xufTtcbi8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMgKi9cblxuLyoqXG4gKiBSZW5hbWUgYW4gZXhpc3RpbmcgZGF0YXNldCBpbiBgdmlzU3RhdGVgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucmVuYW1lRGF0YXNldFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVEYXRhc2V0VXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtkYXRhSWQsIGxhYmVsfSA9IGFjdGlvbjtcbiAgY29uc3Qge2RhdGFzZXRzfSA9IHN0YXRlO1xuICBjb25zdCBleGlzdGluZyA9IGRhdGFzZXRzW2RhdGFJZF07XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGV4aXN0aW5nXG4gICAgPyB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYXRhc2V0czoge1xuICAgICAgICAgIC4uLmRhdGFzZXRzLFxuICAgICAgICAgIFtkYXRhSWRdOiB7XG4gICAgICAgICAgICAuLi5leGlzdGluZyxcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgOiAvLyBOby1vcCBpZiB0aGUgZGF0YXNldCBkb2Vzbid0IGV4aXN0XG4gICAgICBzdGF0ZTtcbn1cblxuLyoqXG4gKiBXaGVuIGEgdXNlciBjbGlja3Mgb24gdGhlIHNwZWNpZmljIG1hcCBjbG9zaW5nIGljb25cbiAqIHRoZSBhcHBsaWNhdGlvbiB3aWxsIGNsb3NlIHRoZSBzZWxlY3RlZCBtYXBcbiAqIGFuZCB3aWxsIG1lcmdlIHRoZSByZW1haW5pbmcgb25lIHdpdGggdGhlIGdsb2JhbCBzdGF0ZVxuICogVE9ETzogaSB0aGluayBpbiB0aGUgZnV0dXJlIHRoaXMgYWN0aW9uIHNob3VsZCBiZSBjYWxsZWQgbWVyZ2UgbWFwIGxheWVycyB3aXRoIGdsb2JhbCBzZXR0aW5nc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZnVuY3Rpb24gY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgoc3RhdGUsIGFjdGlvbikge1xuICAvLyByZXRyaWV2ZSBsYXllcnMgbWV0YSBkYXRhIGZyb20gdGhlIHJlbWFpbmluZyBtYXAgdGhhdCB3ZSBuZWVkIHRvIGtlZXBcbiAgY29uc3QgaW5kZXhUb1JldHJpZXZlID0gMSAtIGFjdGlvbi5wYXlsb2FkO1xuICBjb25zdCBtYXBMYXllcnMgPSBzdGF0ZS5zcGxpdE1hcHNbaW5kZXhUb1JldHJpZXZlXS5sYXllcnM7XG4gIGNvbnN0IHtsYXllcnN9ID0gc3RhdGU7XG5cbiAgLy8gdXBkYXRlIGxheWVyIHZpc2liaWxpdHlcbiAgY29uc3QgbmV3TGF5ZXJzID0gbGF5ZXJzLm1hcChsYXllciA9PlxuICAgICFtYXBMYXllcnNbbGF5ZXIuaWRdICYmIGxheWVyLmNvbmZpZy5pc1Zpc2libGVcbiAgICAgID8gbGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe1xuICAgICAgICAgIC8vIGlmIGxheWVyLmlkIGlzIG5vdCBpbiBtYXBMYXllcnMsIGl0IHNob3VsZCBiZSBpblZpc2libGVcbiAgICAgICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICA6IGxheWVyXG4gICk7XG5cbiAgLy8gZGVsZXRlIG1hcFxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxheWVyczogbmV3TGF5ZXJzLFxuICAgIHNwbGl0TWFwczogW11cbiAgfTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGZpbGUgbG9hZGluZyBkaXNwYXRjaCBgYWRkRGF0YVRvTWFwYCBpZiBzdWNjZWVkLCBvciBgbG9hZEZpbGVzRXJyYCBpZiBmYWlsZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sb2FkRmlsZXNVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtmaWxlcywgb25GaW5pc2ggPSBsb2FkRmlsZXNTdWNjZXNzfSA9IGFjdGlvbjtcbiAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBmaWxlTG9hZGluZ1Byb2dyZXNzID0gQXJyYXkuZnJvbShmaWxlcykucmVkdWNlKFxuICAgIChhY2N1LCBmLCBpKSA9PiBtZXJnZV8oaW5pdGlhbEZpbGVMb2FkaW5nUHJvZ3Jlc3MoZiwgaSkpKGFjY3UpLFxuICAgIHt9XG4gICk7XG5cbiAgY29uc3QgZmlsZUxvYWRpbmcgPSB7XG4gICAgZmlsZUNhY2hlOiBbXSxcbiAgICBmaWxlc1RvTG9hZDogZmlsZXMsXG4gICAgb25GaW5pc2hcbiAgfTtcblxuICBjb25zdCBuZXh0U3RhdGUgPSBtZXJnZV8oe2ZpbGVMb2FkaW5nUHJvZ3Jlc3MsIGZpbGVMb2FkaW5nfSkoc3RhdGUpO1xuXG4gIHJldHVybiBsb2FkTmV4dEZpbGVVcGRhdGVyKG5leHRTdGF0ZSk7XG59O1xuXG4vKipcbiAqIFN1Y2Vzc2Z1bGx5IGxvYWRlZCBvbmUgZmlsZSwgbW92ZSBvbiB0byB0aGUgbmV4dCBvbmVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sb2FkRmlsZVN0ZXBTdWNjZXNzVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlU3RlcFN1Y2Nlc3NVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKCFzdGF0ZS5maWxlTG9hZGluZykge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCB7ZmlsZU5hbWUsIGZpbGVDYWNoZX0gPSBhY3Rpb247XG4gIGNvbnN0IHtmaWxlc1RvTG9hZCwgb25GaW5pc2h9ID0gc3RhdGUuZmlsZUxvYWRpbmc7XG4gIGNvbnN0IHN0YXRlV2l0aFByb2dyZXNzID0gdXBkYXRlRmlsZUxvYWRpbmdQcm9ncmVzc1VwZGF0ZXIoc3RhdGUsIHtcbiAgICBmaWxlTmFtZSxcbiAgICBwcm9ncmVzczoge3BlcmNlbnQ6IDEsIG1lc3NhZ2U6ICdEb25lJ31cbiAgfSk7XG5cbiAgLy8gc2F2ZSBwcm9jZXNzZWQgZmlsZSB0byBmaWxlQ2FjaGVcbiAgY29uc3Qgc3RhdGVXaXRoQ2FjaGUgPSBwaWNrXygnZmlsZUxvYWRpbmcnKShtZXJnZV8oe2ZpbGVDYWNoZX0pKShzdGF0ZVdpdGhQcm9ncmVzcyk7XG5cbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIHN0YXRlV2l0aENhY2hlLFxuICAgIERFTEFZX1RBU0soMjAwKS5tYXAoZmlsZXNUb0xvYWQubGVuZ3RoID8gbG9hZE5leHRGaWxlIDogKCkgPT4gb25GaW5pc2goZmlsZUNhY2hlKSlcbiAgKTtcbn1cblxuLy8gd2l0aFRhc2s8VD4oc3RhdGU6IFQsIHRhc2s6IGFueSk6IFRcblxuLyoqXG4gKlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxvYWROZXh0RmlsZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTmV4dEZpbGVVcGRhdGVyKHN0YXRlKSB7XG4gIGlmICghc3RhdGUuZmlsZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3Qge2ZpbGVzVG9Mb2FkfSA9IHN0YXRlLmZpbGVMb2FkaW5nO1xuICBjb25zdCBbZmlsZSwgLi4ucmVtYWluaW5nRmlsZXNUb0xvYWRdID0gZmlsZXNUb0xvYWQ7XG5cbiAgLy8gc2F2ZSBmaWxlc1RvTG9hZCB0byBzdGF0ZVxuICBjb25zdCBuZXh0U3RhdGUgPSBwaWNrXygnZmlsZUxvYWRpbmcnKShtZXJnZV8oe2ZpbGVzVG9Mb2FkOiByZW1haW5pbmdGaWxlc1RvTG9hZH0pKShzdGF0ZSk7XG5cbiAgY29uc3Qgc3RhdGVXaXRoUHJvZ3Jlc3MgPSB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihuZXh0U3RhdGUsIHtcbiAgICBmaWxlTmFtZTogZmlsZS5uYW1lLFxuICAgIHByb2dyZXNzOiB7cGVyY2VudDogMCwgbWVzc2FnZTogJ2xvYWRpbmcuLi4nfVxuICB9KTtcblxuICBjb25zdCB7bG9hZGVycywgbG9hZE9wdGlvbnN9ID0gc3RhdGU7XG4gIHJldHVybiB3aXRoVGFzayhcbiAgICBzdGF0ZVdpdGhQcm9ncmVzcyxcbiAgICBtYWtlTG9hZEZpbGVUYXNrKGZpbGUsIG5leHRTdGF0ZS5maWxlTG9hZGluZy5maWxlQ2FjaGUsIGxvYWRlcnMsIGxvYWRPcHRpb25zKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxvYWRGaWxlVGFzayhmaWxlLCBmaWxlQ2FjaGUsIGxvYWRlcnMgPSBbXSwgbG9hZE9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gTE9BRF9GSUxFX1RBU0soe2ZpbGUsIGZpbGVDYWNoZSwgbG9hZGVycywgbG9hZE9wdGlvbnN9KS5iaW1hcChcbiAgICAvLyBwcmV0dGllciBpZ25vcmVcbiAgICAvLyBzdWNjZXNzXG4gICAgZ2VuID0+XG4gICAgICBuZXh0RmlsZUJhdGNoKHtcbiAgICAgICAgZ2VuLFxuICAgICAgICBmaWxlTmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBvbkZpbmlzaDogcmVzdWx0ID0+XG4gICAgICAgICAgcHJvY2Vzc0ZpbGVDb250ZW50KHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3VsdCxcbiAgICAgICAgICAgIGZpbGVDYWNoZVxuICAgICAgICAgIH0pXG4gICAgICB9KSxcblxuICAgIC8vIGVycm9yXG4gICAgZXJyID0+IGxvYWRGaWxlc0VycihmaWxlLm5hbWUsIGVycilcbiAgKTtcbn1cblxuLyoqXG4gKlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnByb2Nlc3NGaWxlQ29udGVudFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRmlsZUNvbnRlbnRVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge2NvbnRlbnQsIGZpbGVDYWNoZX0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBjb25zdCBzdGF0ZVdpdGhQcm9ncmVzcyA9IHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKHN0YXRlLCB7XG4gICAgZmlsZU5hbWU6IGNvbnRlbnQuZmlsZU5hbWUsXG4gICAgcHJvZ3Jlc3M6IHtwZXJjZW50OiAxLCBtZXNzYWdlOiAncHJvY2Vzc2luZy4uLid9XG4gIH0pO1xuXG4gIHJldHVybiB3aXRoVGFzayhcbiAgICBzdGF0ZVdpdGhQcm9ncmVzcyxcbiAgICBQUk9DRVNTX0ZJTEVfREFUQSh7Y29udGVudCwgZmlsZUNhY2hlfSkuYmltYXAoXG4gICAgICByZXN1bHQgPT4gbG9hZEZpbGVTdGVwU3VjY2Vzcyh7ZmlsZU5hbWU6IGNvbnRlbnQuZmlsZU5hbWUsIGZpbGVDYWNoZTogcmVzdWx0fSksXG4gICAgICBlcnIgPT4gbG9hZEZpbGVzRXJyKGNvbnRlbnQuZmlsZU5hbWUsIGVycilcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByb2dyZXNzKHByZXZQcm9ncmVzcyA9IHt9LCBwcm9ncmVzcykge1xuICAvLyBUaGlzIGhhcHBlbnMgd2hlbiByZWNlaXZpbmcgcXVlcnkgbWV0YWRhdGEgb3Igb3RoZXIgY2FzZXMgd2UgZG9uJ3RcbiAgLy8gaGF2ZSBhbiB1cGRhdGUgZm9yIHRoZSB1c2VyLlxuICBpZiAoIXByb2dyZXNzIHx8ICFwcm9ncmVzcy5wZXJjZW50KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwZXJjZW50OiBwcm9ncmVzcy5wZXJjZW50XG4gIH07XG59XG5cbi8qKlxuICogZ2V0cyBjYWxsZWQgd2l0aCBwYXlsb2FkID0gQXN5bmNHZW5lcmF0b3I8Pz8/PlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLm5leHRGaWxlQmF0Y2hVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbmV4dEZpbGVCYXRjaFVwZGF0ZXIgPSAoXG4gIHN0YXRlLFxuICB7cGF5bG9hZDoge2dlbiwgZmlsZU5hbWUsIHByb2dyZXNzLCBhY2N1bXVsYXRlZCwgb25GaW5pc2h9fVxuKSA9PiB7XG4gIGNvbnN0IHN0YXRlV2l0aFByb2dyZXNzID0gdXBkYXRlRmlsZUxvYWRpbmdQcm9ncmVzc1VwZGF0ZXIoc3RhdGUsIHtcbiAgICBmaWxlTmFtZSxcbiAgICBwcm9ncmVzczogcGFyc2VQcm9ncmVzcyhzdGF0ZS5maWxlTG9hZGluZ1Byb2dyZXNzW2ZpbGVOYW1lXSwgcHJvZ3Jlc3MpXG4gIH0pO1xuICByZXR1cm4gd2l0aFRhc2soXG4gICAgc3RhdGVXaXRoUHJvZ3Jlc3MsXG4gICAgVU5XUkFQX1RBU0soZ2VuLm5leHQoKSkuYmltYXAoXG4gICAgICAoe3ZhbHVlLCBkb25lfSkgPT4ge1xuICAgICAgICByZXR1cm4gZG9uZVxuICAgICAgICAgID8gb25GaW5pc2goYWNjdW11bGF0ZWQpXG4gICAgICAgICAgOiBuZXh0RmlsZUJhdGNoKHtcbiAgICAgICAgICAgICAgZ2VuLFxuICAgICAgICAgICAgICBmaWxlTmFtZSxcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHZhbHVlLnByb2dyZXNzLFxuICAgICAgICAgICAgICBhY2N1bXVsYXRlZDogdmFsdWUsXG4gICAgICAgICAgICAgIG9uRmluaXNoXG4gICAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4gbG9hZEZpbGVzRXJyKGZpbGVOYW1lLCBlcnIpXG4gICAgKVxuICApO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGxvYWRpbmcgZmlsZSBlcnJvclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxvYWRGaWxlc0VyclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkRmlsZXNFcnJVcGRhdGVyID0gKHN0YXRlLCB7ZXJyb3IsIGZpbGVOYW1lfSkgPT4ge1xuICAvLyB1cGRhdGUgdWkgd2l0aCBlcnJvciBtZXNzYWdlXG4gIENvbnNvbGUud2FybihlcnJvcik7XG4gIGlmICghc3RhdGUuZmlsZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3Qge2ZpbGVzVG9Mb2FkLCBvbkZpbmlzaCwgZmlsZUNhY2hlfSA9IHN0YXRlLmZpbGVMb2FkaW5nO1xuXG4gIGNvbnN0IG5leHRTdGF0ZSA9IHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKHN0YXRlLCB7XG4gICAgZmlsZU5hbWUsXG4gICAgcHJvZ3Jlc3M6IHtlcnJvcn1cbiAgfSk7XG5cbiAgLy8ga2ljayBvZmYgbmV4dCBmaWxlIG9yIGZpbmlzaFxuICByZXR1cm4gd2l0aFRhc2soXG4gICAgbmV4dFN0YXRlLFxuICAgIERFTEFZX1RBU0soMjAwKS5tYXAoZmlsZXNUb0xvYWQubGVuZ3RoID8gbG9hZE5leHRGaWxlIDogKCkgPT4gb25GaW5pc2goZmlsZUNhY2hlKSlcbiAgKTtcbn07XG5cbi8qKlxuICogV2hlbiBzZWxlY3QgZGF0YXNldCBmb3IgZXhwb3J0LCBhcHBseSBjcHUgZmlsdGVyIHRvIHNlbGVjdGVkIGRhdGFzZXRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5hcHBseUNQVUZpbHRlclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBhcHBseUNQVUZpbHRlclVwZGF0ZXIgPSAoc3RhdGUsIHtkYXRhSWR9KSA9PiB7XG4gIC8vIGFwcGx5IGNwdUZpbHRlclxuICBjb25zdCBkYXRhSWRzID0gdG9BcnJheShkYXRhSWQpO1xuXG4gIHJldHVybiBkYXRhSWRzLnJlZHVjZSgoYWNjdSwgaWQpID0+IGZpbHRlckRhdGFzZXRDUFUoYWNjdSwgaWQpLCBzdGF0ZSk7XG59O1xuXG4vKipcbiAqIFVzZXIgaW5wdXQgdG8gdXBkYXRlIHRoZSBpbmZvIG9mIHRoZSBtYXBcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRNYXBJbmZvVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldE1hcEluZm9VcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBtYXBJbmZvOiB7XG4gICAgLi4uc3RhdGUubWFwSW5mbyxcbiAgICAuLi5hY3Rpb24uaW5mb1xuICB9XG59KTtcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSBBbGwgbGF5ZXIgZG9tYWluIGFuZCBsYXllciBkYXRhIG9mIHN0YXRlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5hZGREZWZhdWx0TGF5ZXJzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVmYXVsdExheWVycyhzdGF0ZSwgZGF0YXNldHMpIHtcbiAgLyoqIEB0eXBlIHtMYXllcltdfSAqL1xuICBjb25zdCBlbXB0eSA9IFtdO1xuICBjb25zdCBkZWZhdWx0TGF5ZXJzID0gT2JqZWN0LnZhbHVlcyhkYXRhc2V0cykucmVkdWNlKChhY2N1LCBkYXRhc2V0KSA9PiB7XG4gICAgY29uc3QgZm91bmRMYXllcnMgPSBmaW5kRGVmYXVsdExheWVyKGRhdGFzZXQsIHN0YXRlLmxheWVyQ2xhc3Nlcyk7XG4gICAgcmV0dXJuIGZvdW5kTGF5ZXJzICYmIGZvdW5kTGF5ZXJzLmxlbmd0aCA/IGFjY3UuY29uY2F0KGZvdW5kTGF5ZXJzKSA6IGFjY3U7XG4gIH0sIGVtcHR5KTtcblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGxheWVyczogWy4uLnN0YXRlLmxheWVycywgLi4uZGVmYXVsdExheWVyc10sXG4gICAgICBsYXllck9yZGVyOiBbXG4gICAgICAgIC8vIHB1dCBuZXcgbGF5ZXJzIG9uIHRvcCBvZiBvbGQgb25lc1xuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJzLm1hcCgoXywgaSkgPT4gc3RhdGUubGF5ZXJzLmxlbmd0aCArIGkpLFxuICAgICAgICAuLi5zdGF0ZS5sYXllck9yZGVyXG4gICAgICBdXG4gICAgfSxcbiAgICBuZXdMYXllcnM6IGRlZmF1bHRMYXllcnNcbiAgfTtcbn1cblxuLyoqXG4gKiBoZWxwZXIgZnVuY3Rpb24gdG8gZmluZCBkZWZhdWx0IHRvb2x0aXBzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhc2V0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRUb29sdGlwcyhzdGF0ZSwgZGF0YXNldCkge1xuICBjb25zdCB0b29sdGlwRmllbGRzID0gZmluZEZpZWxkc1RvU2hvdyhkYXRhc2V0KTtcbiAgY29uc3QgbWVyZ2VkID0ge1xuICAgIC4uLnN0YXRlLmludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmZpZWxkc1RvU2hvdyxcbiAgICAuLi50b29sdGlwRmllbGRzXG4gIH07XG5cbiAgcmV0dXJuIHNldChbJ2ludGVyYWN0aW9uQ29uZmlnJywgJ3Rvb2x0aXAnLCAnY29uZmlnJywgJ2ZpZWxkc1RvU2hvdyddLCBtZXJnZWQsIHN0YXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxGaWxlTG9hZGluZ1Byb2dyZXNzKGZpbGUsIGluZGV4KSB7XG4gIGNvbnN0IGZpbGVOYW1lID0gZmlsZS5uYW1lIHx8IGBVbnRpdGxlZCBGaWxlICR7aW5kZXh9YDtcbiAgcmV0dXJuIHtcbiAgICBbZmlsZU5hbWVdOiB7XG4gICAgICAvLyBwZXJjZW50IG9mIGN1cnJlbnQgZmlsZVxuICAgICAgcGVyY2VudDogMCxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgZmlsZU5hbWUsXG4gICAgICBlcnJvcjogbnVsbFxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKHN0YXRlLCB7ZmlsZU5hbWUsIHByb2dyZXNzfSkge1xuICByZXR1cm4gcGlja18oJ2ZpbGVMb2FkaW5nUHJvZ3Jlc3MnKShwaWNrXyhmaWxlTmFtZSkobWVyZ2VfKHByb2dyZXNzKSkpKHN0YXRlKTtcbn1cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSBsYXllciBkb21haW5zIGZvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhKHN0YXRlLCBkYXRhSWQsIHVwZGF0ZWRGaWx0ZXIpIHtcbiAgY29uc3QgZGF0YUlkcyA9IHR5cGVvZiBkYXRhSWQgPT09ICdzdHJpbmcnID8gW2RhdGFJZF0gOiBkYXRhSWQ7XG4gIGNvbnN0IG5ld0xheWVycyA9IFtdO1xuICBjb25zdCBuZXdMYXllckRhdGEgPSBbXTtcblxuICBzdGF0ZS5sYXllcnMuZm9yRWFjaCgob2xkTGF5ZXIsIGkpID0+IHtcbiAgICBpZiAob2xkTGF5ZXIuY29uZmlnLmRhdGFJZCAmJiBkYXRhSWRzLmluY2x1ZGVzKG9sZExheWVyLmNvbmZpZy5kYXRhSWQpKSB7XG4gICAgICAvLyBObyBuZWVkIHRvIHJlY2FsY3VsYXRlIGxheWVyIGRvbWFpbiBpZiBmaWx0ZXIgaGFzIGZpeGVkIGRvbWFpblxuICAgICAgY29uc3QgbmV3TGF5ZXIgPVxuICAgICAgICB1cGRhdGVkRmlsdGVyICYmIHVwZGF0ZWRGaWx0ZXIuZml4ZWREb21haW5cbiAgICAgICAgICA/IG9sZExheWVyXG4gICAgICAgICAgOiBvbGRMYXllci51cGRhdGVMYXllckRvbWFpbihzdGF0ZS5kYXRhc2V0cywgdXBkYXRlZEZpbHRlcik7XG5cbiAgICAgIGNvbnN0IHtsYXllckRhdGEsIGxheWVyfSA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUsIHN0YXRlLmxheWVyRGF0YVtpXSk7XG5cbiAgICAgIG5ld0xheWVycy5wdXNoKGxheWVyKTtcbiAgICAgIG5ld0xheWVyRGF0YS5wdXNoKGxheWVyRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0xheWVycy5wdXNoKG9sZExheWVyKTtcbiAgICAgIG5ld0xheWVyRGF0YS5wdXNoKHN0YXRlLmxheWVyRGF0YVtpXSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IG5ld0xheWVycyxcbiAgICBsYXllckRhdGE6IG5ld0xheWVyRGF0YVxuICB9O1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihzdGF0ZSkge1xuICAvLyBtZXJnZSBhbGwgYW5pbWF0YWJsZSBsYXllciBkb21haW4gYW5kIHVwZGF0ZSBnbG9iYWwgY29uZmlnXG4gIGNvbnN0IGFuaW1hdGFibGVMYXllcnMgPSBzdGF0ZS5sYXllcnMuZmlsdGVyKFxuICAgIGwgPT5cbiAgICAgIGwuY29uZmlnLmlzVmlzaWJsZSAmJlxuICAgICAgbC5jb25maWcuYW5pbWF0aW9uICYmXG4gICAgICBsLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCAmJlxuICAgICAgQXJyYXkuaXNBcnJheShsLmFuaW1hdGlvbkRvbWFpbilcbiAgKTtcblxuICBpZiAoIWFuaW1hdGFibGVMYXllcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICAgICAgZG9tYWluOiBudWxsLFxuICAgICAgICBkZWZhdWx0VGltZUZvcm1hdDogbnVsbFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBjb25zdCBtZXJnZWREb21haW4gPSBhbmltYXRhYmxlTGF5ZXJzLnJlZHVjZShcbiAgICAoYWNjdSwgbGF5ZXIpID0+IFtcbiAgICAgIE1hdGgubWluKGFjY3VbMF0sIGxheWVyLmFuaW1hdGlvbkRvbWFpblswXSksXG4gICAgICBNYXRoLm1heChhY2N1WzFdLCBsYXllci5hbmltYXRpb25Eb21haW5bMV0pXG4gICAgXSxcbiAgICBbTnVtYmVyKEluZmluaXR5KSwgLUluZmluaXR5XVxuICApO1xuICBjb25zdCBkZWZhdWx0VGltZUZvcm1hdCA9IGdldFRpbWVXaWRnZXRUaXRsZUZvcm1hdHRlcihtZXJnZWREb21haW4pO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgICBjdXJyZW50VGltZTogaXNJblJhbmdlKHN0YXRlLmFuaW1hdGlvbkNvbmZpZy5jdXJyZW50VGltZSwgbWVyZ2VkRG9tYWluKVxuICAgICAgICA/IHN0YXRlLmFuaW1hdGlvbkNvbmZpZy5jdXJyZW50VGltZVxuICAgICAgICA6IG1lcmdlZERvbWFpblswXSxcbiAgICAgIGRvbWFpbjogbWVyZ2VkRG9tYWluLFxuICAgICAgZGVmYXVsdFRpbWVGb3JtYXRcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0dXMgb2YgdGhlIGVkaXRvclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEVkaXRvck1vZGVVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3Qgc2V0RWRpdG9yTW9kZVVwZGF0ZXIgPSAoc3RhdGUsIHttb2RlfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGVkaXRvcjoge1xuICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICBtb2RlLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICB9XG59KTtcblxuLy8gY29uc3QgZmVhdHVyZVRvRmlsdGVyVmFsdWUgPSAoZmVhdHVyZSkgPT4gKHsuLi5mZWF0dXJlLCBpZDogZmVhdHVyZS5pZH0pO1xuLyoqXG4gKiBVcGRhdGUgZWRpdG9yIGZlYXR1cmVzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0RmVhdHVyZXNVcGRhdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmVhdHVyZXNVcGRhdGVyKHN0YXRlLCB7ZmVhdHVyZXMgPSBbXX0pIHtcbiAgY29uc3QgbGFzdEZlYXR1cmUgPSBmZWF0dXJlcy5sZW5ndGggJiYgZmVhdHVyZXNbZmVhdHVyZXMubGVuZ3RoIC0gMV07XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiB7XG4gICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICAvLyBvbmx5IHNhdmUgbm9uZSBmaWx0ZXIgZmVhdHVyZXMgdG8gZWRpdG9yXG4gICAgICBmZWF0dXJlczogZmVhdHVyZXMuZmlsdGVyKGYgPT4gIWdldEZpbHRlcklkSW5GZWF0dXJlKGYpKSxcbiAgICAgIG1vZGU6IGxhc3RGZWF0dXJlICYmIGxhc3RGZWF0dXJlLnByb3BlcnRpZXMuaXNDbG9zZWQgPyBFRElUT1JfTU9ERVMuRURJVCA6IHN0YXRlLmVkaXRvci5tb2RlXG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHJpZXZlIGV4aXN0aW5nIGZlYXR1cmVcbiAgY29uc3Qge3NlbGVjdGVkRmVhdHVyZX0gPSBzdGF0ZS5lZGl0b3I7XG5cbiAgLy8gSWYgbm8gZmVhdHVyZSBpcyBzZWxlY3RlZCB3ZSBjYW4gc2ltcGx5IHJldHVybiBzaW5jZSBubyBvcGVyYXRpb25zXG4gIGlmICghc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9XG5cbiAgLy8gVE9ETzogY2hlY2sgaWYgdGhlIGZlYXR1cmUgaGFzIGNoYW5nZWRcbiAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzLmZpbmQoZiA9PiBmLmlkID09PSBzZWxlY3RlZEZlYXR1cmUuaWQpO1xuXG4gIC8vIGlmIGZlYXR1cmUgaXMgcGFydCBvZiBhIGZpbHRlclxuICBjb25zdCBmaWx0ZXJJZCA9IGZlYXR1cmUgJiYgZ2V0RmlsdGVySWRJbkZlYXR1cmUoZmVhdHVyZSk7XG4gIGlmIChmaWx0ZXJJZCAmJiBmZWF0dXJlKSB7XG4gICAgY29uc3QgZmVhdHVyZVZhbHVlID0gZmVhdHVyZVRvRmlsdGVyVmFsdWUoZmVhdHVyZSwgZmlsdGVySWQpO1xuICAgIGNvbnN0IGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMuZmluZEluZGV4KGZpbCA9PiBmaWwuaWQgPT09IGZpbHRlcklkKTtcbiAgICByZXR1cm4gc2V0RmlsdGVyVXBkYXRlcihuZXdTdGF0ZSwge1xuICAgICAgaWR4OiBmaWx0ZXJJZHgsXG4gICAgICBwcm9wOiAndmFsdWUnLFxuICAgICAgdmFsdWU6IGZlYXR1cmVWYWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY3VycmVudCBzZWxlY3RlZCBmZWF0dXJlXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRTZWxlY3RlZEZlYXR1cmVVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlciA9IChzdGF0ZSwge2ZlYXR1cmV9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZWRpdG9yOiB7XG4gICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogZmVhdHVyZVxuICB9XG59KTtcblxuLyoqXG4gKiBEZWxldGUgZXhpc3RpbmcgZmVhdHVyZSBmcm9tIGZpbHRlcnNcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5kZWxldGVGZWF0dXJlVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZlYXR1cmVVcGRhdGVyKHN0YXRlLCB7ZmVhdHVyZX0pIHtcbiAgaWYgKCFmZWF0dXJlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiB7XG4gICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcbiAgICB9XG4gIH07XG5cbiAgaWYgKGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpKSB7XG4gICAgY29uc3QgZmlsdGVySWR4ID0gbmV3U3RhdGUuZmlsdGVycy5maW5kSW5kZXgoZiA9PiBmLmlkID09PSBnZXRGaWx0ZXJJZEluRmVhdHVyZShmZWF0dXJlKSk7XG5cbiAgICByZXR1cm4gZmlsdGVySWR4ID4gLTEgPyByZW1vdmVGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7aWR4OiBmaWx0ZXJJZHh9KSA6IG5ld1N0YXRlO1xuICB9XG5cbiAgLy8gbW9kaWZ5IGVkaXRvciBvYmplY3RcbiAgY29uc3QgbmV3RWRpdG9yID0ge1xuICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICBmZWF0dXJlczogc3RhdGUuZWRpdG9yLmZlYXR1cmVzLmZpbHRlcihmID0+IGYuaWQgIT09IGZlYXR1cmUuaWQpLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiBuZXdFZGl0b3JcbiAgfTtcbn1cblxuLyoqXG4gKiBUb2dnbGUgZmVhdHVyZSBhcyBsYXllciBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRQb2x5Z29uRmlsdGVyTGF5ZXJVcGRhdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlcihzdGF0ZSwgcGF5bG9hZCkge1xuICBjb25zdCB7bGF5ZXIsIGZlYXR1cmV9ID0gcGF5bG9hZDtcbiAgY29uc3QgZmlsdGVySWQgPSBnZXRGaWx0ZXJJZEluRmVhdHVyZShmZWF0dXJlKTtcblxuICAvLyBsZXQgbmV3RmlsdGVyID0gbnVsbDtcbiAgbGV0IGZpbHRlcklkeDtcbiAgbGV0IG5ld0xheWVySWQgPSBbbGF5ZXIuaWRdO1xuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcbiAgLy8gSWYgcG9seWdvbiBmaWx0ZXIgYWxyZWFkeSBleGlzdHMsIHdlIG5lZWQgdG8gZmluZCBvdXQgaWYgdGhlIGN1cnJlbnQgbGF5ZXIgaXMgYWxyZWFkeSBpbmNsdWRlZFxuICBpZiAoZmlsdGVySWQpIHtcbiAgICBmaWx0ZXJJZHggPSBzdGF0ZS5maWx0ZXJzLmZpbmRJbmRleChmID0+IGYuaWQgPT09IGZpbHRlcklkKTtcblxuICAgIGlmICghc3RhdGUuZmlsdGVyc1tmaWx0ZXJJZHhdKSB7XG4gICAgICAvLyB3aGF0IGlmIGZpbHRlciBkb2Vzbid0IGV4aXN0Py4uLiBub3QgcG9zc2libGUuXG4gICAgICAvLyBiZWNhdXNlIGZlYXR1cmVzIGluIHRoZSBlZGl0b3IgaXMgcGFzc2VkIGluIGZyb20gZmlsdGVycyBhbmQgZWRpdG9ycy5cbiAgICAgIC8vIGJ1dCB3ZSB3aWxsIG1vdmUgdGhpcyBmZWF0dXJlIGJhY2sgdG8gZWRpdG9yIGp1c3QgaW4gY2FzZVxuICAgICAgY29uc3Qgbm9uZUZpbHRlckZlYXR1cmUgPSB7XG4gICAgICAgIC4uLmZlYXR1cmUsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAuLi5mZWF0dXJlLnByb3BlcnRpZXMsXG4gICAgICAgICAgZmlsdGVySWQ6IG51bGxcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVkaXRvcjoge1xuICAgICAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgICAgICBmZWF0dXJlczogWy4uLnN0YXRlLmVkaXRvci5mZWF0dXJlcywgbm9uZUZpbHRlckZlYXR1cmVdLFxuICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZTogbm9uZUZpbHRlckZlYXR1cmVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZmlsdGVyID0gc3RhdGUuZmlsdGVyc1tmaWx0ZXJJZHhdO1xuICAgIGNvbnN0IHtsYXllcklkID0gW119ID0gZmlsdGVyO1xuICAgIGNvbnN0IGlzTGF5ZXJJbmNsdWRlZCA9IGxheWVySWQuaW5jbHVkZXMobGF5ZXIuaWQpO1xuXG4gICAgbmV3TGF5ZXJJZCA9IGlzTGF5ZXJJbmNsdWRlZFxuICAgICAgPyAvLyBpZiBsYXllciBpcyBpbmNsdWRlZCwgcmVtb3ZlIGl0XG4gICAgICAgIGxheWVySWQuZmlsdGVyKGwgPT4gbCAhPT0gbGF5ZXIuaWQpXG4gICAgICA6IFsuLi5sYXllcklkLCBsYXllci5pZF07XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgd2UgaGF2ZW4ndCBjcmVhdGUgdGhlIHBvbHlnb24gZmlsdGVyLCBjcmVhdGUgaXRcbiAgICBjb25zdCBuZXdGaWx0ZXIgPSBnZW5lcmF0ZVBvbHlnb25GaWx0ZXIoW10sIGZlYXR1cmUpO1xuICAgIGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMubGVuZ3RoO1xuXG4gICAgLy8gYWRkIGZlYXR1cmUsIHJlbW92ZSBmZWF0dXJlIGZyb20gZWlkdG9yXG4gICAgbmV3U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGZpbHRlcnM6IFsuLi5zdGF0ZS5maWx0ZXJzLCBuZXdGaWx0ZXJdLFxuICAgICAgZWRpdG9yOiB7XG4gICAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgICAgZmVhdHVyZXM6IHN0YXRlLmVkaXRvci5mZWF0dXJlcy5maWx0ZXIoZiA9PiBmLmlkICE9PSBmZWF0dXJlLmlkKSxcbiAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBuZXdGaWx0ZXIudmFsdWVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNldEZpbHRlclVwZGF0ZXIobmV3U3RhdGUsIHtcbiAgICBpZHg6IGZpbHRlcklkeCxcbiAgICBwcm9wOiAnbGF5ZXJJZCcsXG4gICAgdmFsdWU6IG5ld0xheWVySWRcbiAgfSk7XG59XG5cbi8qKlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNvcnRUYWJsZUNvbHVtblVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFibGVDb2x1bW5VcGRhdGVyKHN0YXRlLCB7ZGF0YUlkLCBjb2x1bW4sIG1vZGV9KSB7XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgbGV0IHNvcnRNb2RlID0gbW9kZTtcbiAgaWYgKCFzb3J0TW9kZSkge1xuICAgIGNvbnN0IGN1cnJlbnRNb2RlID0gZ2V0KGRhdGFzZXQsIFsnc29ydENvbHVtbicsIGNvbHVtbl0pO1xuICAgIC8vIEB0cy1pZ25vcmUgLSBzaG91bGQgYmUgZml4YWJsZSBpbiBhIFRTIGZpbGVcbiAgICBzb3J0TW9kZSA9IGN1cnJlbnRNb2RlXG4gICAgICA/IE9iamVjdC5rZXlzKFNPUlRfT1JERVIpLmZpbmQobSA9PiBtICE9PSBjdXJyZW50TW9kZSlcbiAgICAgIDogU09SVF9PUkRFUi5BU0NFTkRJTkc7XG4gIH1cblxuICBjb25zdCBzb3J0ZWQgPSBzb3J0RGF0YXNldEJ5Q29sdW1uKGRhdGFzZXQsIGNvbHVtbiwgc29ydE1vZGUpO1xuICByZXR1cm4gc2V0KFsnZGF0YXNldHMnLCBkYXRhSWRdLCBzb3J0ZWQsIHN0YXRlKTtcbn1cblxuLyoqXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucGluVGFibGVDb2x1bW5VcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGluVGFibGVDb2x1bW5VcGRhdGVyKHN0YXRlLCB7ZGF0YUlkLCBjb2x1bW59KSB7XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3QgZmllbGQgPSBkYXRhc2V0LmZpZWxkcy5maW5kKGYgPT4gZi5uYW1lID09PSBjb2x1bW4pO1xuICBpZiAoIWZpZWxkKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgbGV0IHBpbm5lZENvbHVtbnM7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGFzZXQucGlubmVkQ29sdW1ucykgJiYgZGF0YXNldC5waW5uZWRDb2x1bW5zLmluY2x1ZGVzKGZpZWxkLm5hbWUpKSB7XG4gICAgLy8gdW5waW4gaXRcbiAgICBwaW5uZWRDb2x1bW5zID0gZGF0YXNldC5waW5uZWRDb2x1bW5zLmZpbHRlcihjbyA9PiBjbyAhPT0gZmllbGQubmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcGlubmVkQ29sdW1ucyA9IChkYXRhc2V0LnBpbm5lZENvbHVtbnMgfHwgW10pLmNvbmNhdChmaWVsZC5uYW1lKTtcbiAgfVxuXG4gIHJldHVybiBzZXQoWydkYXRhc2V0cycsIGRhdGFJZCwgJ3Bpbm5lZENvbHVtbnMnXSwgcGlubmVkQ29sdW1ucywgc3RhdGUpO1xufVxuXG4vKipcbiAqIENvcHkgY29sdW1uIGNvbnRlbnQgYXMgc3RyaW5nc1xuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmNvcHlUYWJsZUNvbHVtblVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5VGFibGVDb2x1bW5VcGRhdGVyKHN0YXRlLCB7ZGF0YUlkLCBjb2x1bW59KSB7XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3QgZmllbGRJZHggPSBkYXRhc2V0LmZpZWxkcy5maW5kSW5kZXgoZiA9PiBmLm5hbWUgPT09IGNvbHVtbik7XG4gIGlmIChmaWVsZElkeCA8IDApIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3Qge3R5cGV9ID0gZGF0YXNldC5maWVsZHNbZmllbGRJZHhdO1xuICBjb25zdCB0ZXh0ID0gZGF0YXNldC5hbGxEYXRhLm1hcChkID0+IHBhcnNlRmllbGRWYWx1ZShkW2ZpZWxkSWR4XSwgdHlwZSkpLmpvaW4oJ1xcbicpO1xuXG4gIGNvcHkodGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBlZGl0b3JcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZUVkaXRvclZpc2liaWxpdHlVcGRhdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRWRpdG9yVmlzaWJpbGl0eVVwZGF0ZXIoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBlZGl0b3I6IHtcbiAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgIHZpc2libGU6ICFzdGF0ZS5lZGl0b3IudmlzaWJsZVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlckFuaW1hdGlvblRpbWVDb25maWdVcGRhdGVyKHN0YXRlLCB7aWR4LCBjb25maWd9KSB7XG4gIGNvbnN0IG9sZEZpbHRlciA9IHN0YXRlLmZpbHRlcnNbaWR4XTtcbiAgaWYgKCFvbGRGaWx0ZXIpIHtcbiAgICBDb25zb2xlLmVycm9yKGBmaWx0ZXJzLiR7aWR4fSBpcyB1bmRlZmluZWRgKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgaWYgKG9sZEZpbHRlci50eXBlICE9PSBGSUxURVJfVFlQRVMudGltZVJhbmdlKSB7XG4gICAgQ29uc29sZS5lcnJvcihcbiAgICAgIGBzZXRGaWx0ZXJBbmltYXRpb25UaW1lQ29uZmlnIGNhbiBvbmx5IGJlIGNhbGxlZCB0byB1cGRhdGUgYSB0aW1lIGZpbHRlci4gY2hlY2sgZmlsdGVyLnR5cGUgPT09ICd0aW1lUmFuZ2UnYFxuICAgICk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlcyA9IGNoZWNrVGltZUNvbmZpZ0FyZ3MoY29uZmlnKTtcblxuICByZXR1cm4gcGlja18oJ2ZpbHRlcnMnKShzd2FwXyhtZXJnZV8odXBkYXRlcykob2xkRmlsdGVyKSkpKHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUaW1lQ29uZmlnQXJncyhjb25maWcpIHtcbiAgY29uc3QgYWxsb3dlZCA9IFsndGltZUZvcm1hdCcsICd0aW1lem9uZSddO1xuICByZXR1cm4gT2JqZWN0LmtleXMoY29uZmlnKS5yZWR1Y2UoKGFjY3UsIHByb3ApID0+IHtcbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgIENvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBzZXRMYXllckFuaW1hdGlvblRpbWVDb25maWcgdGFrZXMgdGltZUZvcm1hdCBhbmQvb3IgdGltZXpvbmUgYXMgb3B0aW9ucywgZm91bmQgJHtwcm9wfWBcbiAgICAgICk7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG5cbiAgICAvLyBoZXJlIHdlIGFyZSBOT1QgY2hlY2tpbmcgaWYgdGltZXpvbmUgb3IgdGltZUZvcm1hdCBpbnB1dCBpcyB2YWxpZFxuICAgIGFjY3VbcHJvcF0gPSBjb25maWdbcHJvcF07XG4gICAgcmV0dXJuIGFjY3U7XG4gIH0sIHt9KTtcbn1cbi8qKlxuICogVXBkYXRlIGVkaXRvclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0TGF5ZXJBbmltYXRpb25UaW1lQ29uZmlnVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExheWVyQW5pbWF0aW9uVGltZUNvbmZpZ1VwZGF0ZXIoc3RhdGUsIHtjb25maWd9KSB7XG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IHVwZGF0ZXMgPSBjaGVja1RpbWVDb25maWdBcmdzKGNvbmZpZyk7XG4gIHJldHVybiBwaWNrXygnYW5pbWF0aW9uQ29uZmlnJykobWVyZ2VfKHVwZGF0ZXMpKShzdGF0ZSk7XG59XG4iXX0=