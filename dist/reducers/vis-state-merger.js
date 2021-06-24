"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeFilters = mergeFilters;
exports.createLayerFromConfig = createLayerFromConfig;
exports.serializeLayer = serializeLayer;
exports.mergeLayers = mergeLayers;
exports.insertLayerAtRightOrder = insertLayerAtRightOrder;
exports.mergeInteractions = mergeInteractions;
exports.mergeSplitMaps = mergeSplitMaps;
exports.mergeInteractionTooltipConfig = mergeInteractionTooltipConfig;
exports.mergeLayerBlending = mergeLayerBlending;
exports.mergeAnimationConfig = mergeAnimationConfig;
exports.validateSavedLayerColumns = validateSavedLayerColumns;
exports.validateColumn = validateColumn;
exports.validateSavedTextLabel = validateSavedTextLabel;
exports.validateSavedVisualChannels = validateSavedVisualChannels;
exports.validateLayersByDatasets = validateLayersByDatasets;
exports.validateLayerWithData = validateLayerWithData;
exports.isValidMerger = isValidMerger;
exports.VIS_STATE_MERGERS = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _lodash2 = _interopRequireDefault(require("lodash.pick"));

var _lodash3 = _interopRequireDefault(require("lodash.flattendeep"));

var _utils = require("../utils/utils");

var _filterUtils = require("../utils/filter-utils");

var _splitMapUtils = require("../utils/split-map-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _defaultSettings = require("../constants/default-settings");

var _schemas = require("../schemas");

var _excluded = ["enabled"];

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Merge loaded filters with current state, if no fields or data are loaded
 * save it for later
 *
 * @type {typeof import('./vis-state-merger').mergeFilters}
 */
function mergeFilters(state, filtersToMerge) {
  if (!Array.isArray(filtersToMerge) || !filtersToMerge.length) {
    return state;
  }

  var _validateFiltersUpdat = (0, _filterUtils.validateFiltersUpdateDatasets)(state, filtersToMerge),
      validated = _validateFiltersUpdat.validated,
      failed = _validateFiltersUpdat.failed,
      updatedDatasets = _validateFiltersUpdat.updatedDatasets; // merge filter with existing


  var updatedFilters = [].concat((0, _toConsumableArray2["default"])(state.filters || []), (0, _toConsumableArray2["default"])(validated));
  updatedFilters = (0, _gpuFilterUtils.resetFilterGpuMode)(updatedFilters);
  updatedFilters = (0, _gpuFilterUtils.assignGpuChannels)(updatedFilters); // filter data

  var datasetsToFilter = (0, _lodash["default"])((0, _lodash3["default"])(validated.map(function (f) {
    return f.dataId;
  })));
  var filtered = (0, _filterUtils.applyFiltersToDatasets)(datasetsToFilter, updatedDatasets, updatedFilters, state.layers);
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: updatedFilters,
    datasets: filtered,
    filterToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.filterToBeMerged), (0, _toConsumableArray2["default"])(failed))
  });
}

function createLayerFromConfig(state, layerConfig) {
  // first validate config against dataset
  var _validateLayersByData = validateLayersByDatasets(state.datasets, state.layerClasses, [layerConfig]),
      validated = _validateLayersByData.validated,
      failed = _validateLayersByData.failed;

  if (failed.length || !validated.length) {
    // failed
    return null;
  }

  var newLayer = validated[0];
  newLayer.updateLayerDomain(state.datasets);
  return newLayer;
}

function serializeLayer(newLayer) {
  var savedVisState = _schemas.visStateSchema[_schemas.CURRENT_VERSION].save({
    layers: [newLayer],
    layerOrder: [0]
  }).visState;

  var loadedLayer = _schemas.visStateSchema[_schemas.CURRENT_VERSION].load(savedVisState).visState.layers[0];

  return loadedLayer;
}
/**
 * Merge layers from de-serialized state, if no fields or data are loaded
 * save it for later
 *
 * @type {typeof import('./vis-state-merger').mergeLayers}
 */


function mergeLayers(state, layersToMerge, fromConfig) {
  var preserveLayerOrder = fromConfig ? layersToMerge.map(function (l) {
    return l.id;
  }) : state.preserveLayerOrder;

  if (!Array.isArray(layersToMerge) || !layersToMerge.length) {
    return state;
  }

  var _validateLayersByData2 = validateLayersByDatasets(state.datasets, state.layerClasses, layersToMerge),
      mergedLayer = _validateLayersByData2.validated,
      unmerged = _validateLayersByData2.failed; // put new layers in front of current layers


  var _insertLayerAtRightOr = insertLayerAtRightOrder(state.layers, mergedLayer, state.layerOrder, preserveLayerOrder),
      newLayerOrder = _insertLayerAtRightOr.newLayerOrder,
      newLayers = _insertLayerAtRightOr.newLayers;

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    layerOrder: newLayerOrder,
    preserveLayerOrder: preserveLayerOrder,
    layerToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.layerToBeMerged), (0, _toConsumableArray2["default"])(unmerged))
  });
}

function insertLayerAtRightOrder(currentLayers, layersToInsert, currentOrder) {
  var preservedOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  // perservedOrder ['a', 'b', 'c'];
  // layerOrder [1, 0, 3]
  // layerOrderMap ['a', 'c']
  var layerOrderQueue = currentOrder.map(function (i) {
    return currentLayers[i].id;
  });
  var newLayers = currentLayers;

  var _iterator = _createForOfIteratorHelper(layersToInsert),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var newLayer = _step.value;
      // find where to insert it
      var expectedIdx = preservedOrder.indexOf(newLayer.id); // if cant find place to insert, insert at the font

      var insertAt = 0;

      if (expectedIdx > 0) {
        // look for layer to insert after
        var i = expectedIdx + 1;
        var preceedIdx = null;

        while (i-- > 0 && preceedIdx === null) {
          var preceedLayer = preservedOrder[expectedIdx - 1];
          preceedIdx = layerOrderQueue.indexOf(preceedLayer);
        }

        if (preceedIdx > -1) {
          insertAt = preceedIdx + 1;
        }
      }

      layerOrderQueue = (0, _utils.arrayInsert)(layerOrderQueue, insertAt, newLayer.id);
      newLayers = newLayers.concat(newLayer);
    } // reconstruct layerOrder after insert

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newLayerOrder = layerOrderQueue.map(function (id) {
    return newLayers.findIndex(function (l) {
      return l.id === id;
    });
  });
  return {
    newLayerOrder: newLayerOrder,
    newLayers: newLayers
  };
}
/**
 * Merge interactions with saved config
 *
 * @type {typeof import('./vis-state-merger').mergeInteractions}
 */


function mergeInteractions(state, interactionToBeMerged) {
  var merged = {};
  var unmerged = {};

  if (interactionToBeMerged) {
    Object.keys(interactionToBeMerged).forEach(function (key) {
      if (!state.interactionConfig[key]) {
        return;
      }

      var currentConfig = state.interactionConfig[key].config;

      var _ref = interactionToBeMerged[key] || {},
          enabled = _ref.enabled,
          configSaved = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

      var configToMerge = configSaved;

      if (key === 'tooltip') {
        var _mergeInteractionTool = mergeInteractionTooltipConfig(state, configSaved),
            mergedTooltip = _mergeInteractionTool.mergedTooltip,
            unmergedTooltip = _mergeInteractionTool.unmergedTooltip; // merge new dataset tooltips with original dataset tooltips


        configToMerge = {
          fieldsToShow: _objectSpread(_objectSpread({}, currentConfig.fieldsToShow), mergedTooltip)
        };

        if (Object.keys(unmergedTooltip).length) {
          unmerged.tooltip = {
            fieldsToShow: unmergedTooltip,
            enabled: enabled
          };
        }
      }

      merged[key] = _objectSpread(_objectSpread({}, state.interactionConfig[key]), {}, {
        enabled: enabled
      }, currentConfig ? {
        config: (0, _lodash2["default"])(_objectSpread(_objectSpread({}, currentConfig), configToMerge), Object.keys(currentConfig))
      } : {});
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: _objectSpread(_objectSpread({}, state.interactionConfig), merged),
    interactionToBeMerged: unmerged
  });
}
/**
 * Merge splitMaps config with current visStete.
 * 1. if current map is split, but splitMap DOESNOT contain maps
 *    : don't merge anything
 * 2. if current map is NOT split, but splitMaps contain maps
 *    : add to splitMaps, and add current layers to splitMaps
 * @type {typeof import('./vis-state-merger').mergeInteractions}
 */


function mergeSplitMaps(state) {
  var splitMaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var merged = (0, _toConsumableArray2["default"])(state.splitMaps);
  var unmerged = [];
  splitMaps.forEach(function (sm, i) {
    Object.entries(sm.layers).forEach(function (_ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
          id = _ref3[0],
          value = _ref3[1];

      // check if layer exists
      var pushTo = state.layers.find(function (l) {
        return l.id === id;
      }) ? merged : unmerged; // create map panel if current map is not split

      pushTo[i] = pushTo[i] || {
        layers: pushTo === merged ? (0, _splitMapUtils.getInitialMapLayersForSplitMap)(state.layers) : []
      };
      pushTo[i].layers = _objectSpread(_objectSpread({}, pushTo[i].layers), {}, (0, _defineProperty2["default"])({}, id, value));
    });
  });
  return _objectSpread(_objectSpread({}, state), {}, {
    splitMaps: merged,
    splitMapsToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.splitMapsToBeMerged), unmerged)
  });
}
/**
 * Merge interactionConfig.tooltip with saved config,
 * validate fieldsToShow
 *
 * @param {object} state
 * @param {object} tooltipConfig
 * @return {object} - {mergedTooltip: {}, unmergedTooltip: {}}
 */


function mergeInteractionTooltipConfig(state) {
  var tooltipConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var unmergedTooltip = {};
  var mergedTooltip = {};

  if (!tooltipConfig.fieldsToShow || !Object.keys(tooltipConfig.fieldsToShow).length) {
    return {
      mergedTooltip: mergedTooltip,
      unmergedTooltip: unmergedTooltip
    };
  }

  for (var dataId in tooltipConfig.fieldsToShow) {
    if (!state.datasets[dataId]) {
      // is not yet loaded
      unmergedTooltip[dataId] = tooltipConfig.fieldsToShow[dataId];
    } else {
      (function () {
        // if dataset is loaded
        var allFields = state.datasets[dataId].fields.map(function (d) {
          return d.name;
        });
        var foundFieldsToShow = tooltipConfig.fieldsToShow[dataId].filter(function (field) {
          return allFields.includes(field.name);
        });
        mergedTooltip[dataId] = foundFieldsToShow;
      })();
    }
  }

  return {
    mergedTooltip: mergedTooltip,
    unmergedTooltip: unmergedTooltip
  };
}
/**
 * Merge layerBlending with saved
 *
 * @type {typeof import('./vis-state-merger').mergeLayerBlending}
 */


function mergeLayerBlending(state, layerBlending) {
  if (layerBlending && _defaultSettings.LAYER_BLENDINGS[layerBlending]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      layerBlending: layerBlending
    });
  }

  return state;
}
/**
 * Merge animation config
 * @type {typeof import('./vis-state-merger').mergeAnimationConfig}
 */


function mergeAnimationConfig(state, animation) {
  if (animation && animation.currentTime) {
    return _objectSpread(_objectSpread({}, state), {}, {
      animationConfig: _objectSpread(_objectSpread(_objectSpread({}, state.animationConfig), animation), {}, {
        domain: null
      })
    });
  }

  return state;
}
/**
 * Validate saved layer columns with new data,
 * update fieldIdx based on new fields
 *
 * @param {Array<Object>} fields
 * @param {Object} savedCols
 * @param {Object} emptyCols
 * @return {null | Object} - validated columns or null
 */


function validateSavedLayerColumns(fields) {
  var savedCols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var emptyCols = arguments.length > 2 ? arguments[2] : undefined;
  // Prepare columns for the validator
  var columns = {};

  var _loop = function _loop() {
    var key = _Object$keys[_i];
    columns[key] = _objectSpread({}, emptyCols[key]);
    var saved = savedCols[key];

    if (saved) {
      var fieldIdx = fields.findIndex(function (_ref4) {
        var name = _ref4.name;
        return name === saved;
      });

      if (fieldIdx > -1) {
        // update found columns
        columns[key].fieldIdx = fieldIdx;
        columns[key].value = saved;
      }
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(emptyCols); _i < _Object$keys.length; _i++) {
    _loop();
  } // find actual column fieldIdx, in case it has changed


  var allColFound = Object.keys(columns).every(function (key) {
    return validateColumn(columns[key], columns, fields);
  });

  if (allColFound) {
    return columns;
  }

  return null;
}

function validateColumn(column, columns, allFields) {
  if (column.optional || column.value) {
    return true;
  }

  if (column.validator) {
    return column.validator(column, columns, allFields);
  }

  return false;
}
/**
 * Validate saved text label config with new data
 * refer to vis-state-schema.js TextLabelSchemaV1
 *
 * @param {Array<Object>} fields
 * @param {Object} savedTextLabel
 * @return {Object} - validated textlabel
 */


function validateSavedTextLabel(fields, _ref5, savedTextLabel) {
  var _ref6 = (0, _slicedToArray2["default"])(_ref5, 1),
      layerTextLabel = _ref6[0];

  var savedTextLabels = Array.isArray(savedTextLabel) ? savedTextLabel : [savedTextLabel]; // validate field

  return savedTextLabels.map(function (textLabel) {
    var field = textLabel.field ? fields.find(function (fd) {
      return Object.keys(textLabel.field).every(function (key) {
        return textLabel.field[key] === fd[key];
      });
    }) : null;
    return Object.keys(layerTextLabel).reduce(function (accu, key) {
      return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, key === 'field' ? field : textLabel[key] || layerTextLabel[key]));
    }, {});
  });
}
/**
 * Validate saved visual channels config with new data,
 * refer to vis-state-schema.js VisualChannelSchemaV1
 * @type {typeof import('./vis-state-merger').validateSavedVisualChannels}
 */


function validateSavedVisualChannels(fields, newLayer, savedLayer) {
  Object.values(newLayer.visualChannels).forEach(function (_ref7) {
    var field = _ref7.field,
        scale = _ref7.scale,
        key = _ref7.key;
    var foundField;

    if (savedLayer.config) {
      if (savedLayer.config[field]) {
        foundField = fields.find(function (fd) {
          return savedLayer.config && fd.name === savedLayer.config[field].name;
        });
      }

      var foundChannel = _objectSpread(_objectSpread({}, foundField ? (0, _defineProperty2["default"])({}, field, foundField) : {}), savedLayer.config[scale] ? (0, _defineProperty2["default"])({}, scale, savedLayer.config[scale]) : {});

      if (Object.keys(foundChannel).length) {
        newLayer.updateLayerConfig(foundChannel);
      }

      newLayer.validateVisualChannel(key);
    }
  });
  return newLayer;
}

function validateLayersByDatasets(datasets, layerClasses, layers) {
  var validated = [];
  var failed = [];
  layers.forEach(function (layer) {
    var validateLayer;

    if (!layer || !layer.config) {
      validateLayer = null;
    } else if (datasets[layer.config.dataId]) {
      // datasets are already loaded
      validateLayer = validateLayerWithData(datasets[layer.config.dataId], layer, layerClasses);
    }

    if (validateLayer) {
      validated.push(validateLayer);
    } else {
      // datasets not yet loaded
      failed.push(layer);
    }
  });
  return {
    validated: validated,
    failed: failed
  };
}
/**
 * Validate saved layer config with new data,
 * update fieldIdx based on new fields
 * @type {typeof import('./vis-state-merger').validateLayerWithData}
 */


function validateLayerWithData(_ref10, savedLayer, layerClasses) {
  var fields = _ref10.fields,
      dataId = _ref10.id;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var type = savedLayer.type; // layer doesnt have a valid type

  if (!type || !layerClasses.hasOwnProperty(type) || !savedLayer.config) {
    return null;
  }

  var newLayer = new layerClasses[type]({
    id: savedLayer.id,
    dataId: dataId,
    label: savedLayer.config.label,
    color: savedLayer.config.color,
    isVisible: savedLayer.config.isVisible,
    hidden: savedLayer.config.hidden
  }); // find column fieldIdx

  var columnConfig = newLayer.getLayerColumns();

  if (Object.keys(columnConfig).length) {
    var columns = validateSavedLayerColumns(fields, savedLayer.config.columns, columnConfig);

    if (columns) {
      newLayer.updateLayerConfig({
        columns: columns
      });
    } else if (!options.allowEmptyColumn) {
      return null;
    }
  } // visual channel field is saved to be {name, type}
  // find visual channel field by matching both name and type
  // refer to vis-state-schema.js VisualChannelSchemaV1


  newLayer = validateSavedVisualChannels(fields, newLayer, savedLayer);
  var textLabel = savedLayer.config.textLabel && newLayer.config.textLabel ? validateSavedTextLabel(fields, newLayer.config.textLabel, savedLayer.config.textLabel) : newLayer.config.textLabel; // copy visConfig over to emptyLayer to make sure it has all the props

  var visConfig = newLayer.copyLayerConfig(newLayer.config.visConfig, savedLayer.config.visConfig || {}, {
    shallowCopy: ['colorRange', 'strokeColorRange']
  });
  newLayer.updateLayerConfig({
    visConfig: visConfig,
    textLabel: textLabel
  });
  return newLayer;
}

function isValidMerger(merger) {
  return (0, _utils.isObject)(merger) && typeof merger.merge === 'function' && typeof merger.prop === 'string';
}

var VIS_STATE_MERGERS = [{
  merge: mergeLayers,
  prop: 'layers',
  toMergeProp: 'layerToBeMerged'
}, {
  merge: mergeFilters,
  prop: 'filters',
  toMergeProp: 'filterToBeMerged'
}, {
  merge: mergeInteractions,
  prop: 'interactionConfig',
  toMergeProp: 'interactionToBeMerged'
}, {
  merge: mergeLayerBlending,
  prop: 'layerBlending'
}, {
  merge: mergeSplitMaps,
  prop: 'splitMaps',
  toMergeProp: 'splitMapsToBeMerged'
}, {
  merge: mergeAnimationConfig,
  prop: 'animationConfig'
}];
exports.VIS_STATE_MERGERS = VIS_STATE_MERGERS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtbWVyZ2VyLmpzIl0sIm5hbWVzIjpbIm1lcmdlRmlsdGVycyIsInN0YXRlIiwiZmlsdGVyc1RvTWVyZ2UiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJ2YWxpZGF0ZWQiLCJmYWlsZWQiLCJ1cGRhdGVkRGF0YXNldHMiLCJ1cGRhdGVkRmlsdGVycyIsImZpbHRlcnMiLCJkYXRhc2V0c1RvRmlsdGVyIiwibWFwIiwiZiIsImRhdGFJZCIsImZpbHRlcmVkIiwibGF5ZXJzIiwiZGF0YXNldHMiLCJmaWx0ZXJUb0JlTWVyZ2VkIiwiY3JlYXRlTGF5ZXJGcm9tQ29uZmlnIiwibGF5ZXJDb25maWciLCJ2YWxpZGF0ZUxheWVyc0J5RGF0YXNldHMiLCJsYXllckNsYXNzZXMiLCJuZXdMYXllciIsInVwZGF0ZUxheWVyRG9tYWluIiwic2VyaWFsaXplTGF5ZXIiLCJzYXZlZFZpc1N0YXRlIiwidmlzU3RhdGVTY2hlbWEiLCJDVVJSRU5UX1ZFUlNJT04iLCJzYXZlIiwibGF5ZXJPcmRlciIsInZpc1N0YXRlIiwibG9hZGVkTGF5ZXIiLCJsb2FkIiwibWVyZ2VMYXllcnMiLCJsYXllcnNUb01lcmdlIiwiZnJvbUNvbmZpZyIsInByZXNlcnZlTGF5ZXJPcmRlciIsImwiLCJpZCIsIm1lcmdlZExheWVyIiwidW5tZXJnZWQiLCJpbnNlcnRMYXllckF0UmlnaHRPcmRlciIsIm5ld0xheWVyT3JkZXIiLCJuZXdMYXllcnMiLCJsYXllclRvQmVNZXJnZWQiLCJjdXJyZW50TGF5ZXJzIiwibGF5ZXJzVG9JbnNlcnQiLCJjdXJyZW50T3JkZXIiLCJwcmVzZXJ2ZWRPcmRlciIsImxheWVyT3JkZXJRdWV1ZSIsImkiLCJleHBlY3RlZElkeCIsImluZGV4T2YiLCJpbnNlcnRBdCIsInByZWNlZWRJZHgiLCJwcmVjZWVkTGF5ZXIiLCJjb25jYXQiLCJmaW5kSW5kZXgiLCJtZXJnZUludGVyYWN0aW9ucyIsImludGVyYWN0aW9uVG9CZU1lcmdlZCIsIm1lcmdlZCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW50ZXJhY3Rpb25Db25maWciLCJjdXJyZW50Q29uZmlnIiwiY29uZmlnIiwiZW5hYmxlZCIsImNvbmZpZ1NhdmVkIiwiY29uZmlnVG9NZXJnZSIsIm1lcmdlSW50ZXJhY3Rpb25Ub29sdGlwQ29uZmlnIiwibWVyZ2VkVG9vbHRpcCIsInVubWVyZ2VkVG9vbHRpcCIsImZpZWxkc1RvU2hvdyIsInRvb2x0aXAiLCJtZXJnZVNwbGl0TWFwcyIsInNwbGl0TWFwcyIsInNtIiwiZW50cmllcyIsInZhbHVlIiwicHVzaFRvIiwiZmluZCIsInNwbGl0TWFwc1RvQmVNZXJnZWQiLCJ0b29sdGlwQ29uZmlnIiwiYWxsRmllbGRzIiwiZmllbGRzIiwiZCIsIm5hbWUiLCJmb3VuZEZpZWxkc1RvU2hvdyIsImZpbHRlciIsImZpZWxkIiwiaW5jbHVkZXMiLCJtZXJnZUxheWVyQmxlbmRpbmciLCJsYXllckJsZW5kaW5nIiwiTEFZRVJfQkxFTkRJTkdTIiwibWVyZ2VBbmltYXRpb25Db25maWciLCJhbmltYXRpb24iLCJjdXJyZW50VGltZSIsImFuaW1hdGlvbkNvbmZpZyIsImRvbWFpbiIsInZhbGlkYXRlU2F2ZWRMYXllckNvbHVtbnMiLCJzYXZlZENvbHMiLCJlbXB0eUNvbHMiLCJjb2x1bW5zIiwic2F2ZWQiLCJmaWVsZElkeCIsImFsbENvbEZvdW5kIiwiZXZlcnkiLCJ2YWxpZGF0ZUNvbHVtbiIsImNvbHVtbiIsIm9wdGlvbmFsIiwidmFsaWRhdG9yIiwidmFsaWRhdGVTYXZlZFRleHRMYWJlbCIsInNhdmVkVGV4dExhYmVsIiwibGF5ZXJUZXh0TGFiZWwiLCJzYXZlZFRleHRMYWJlbHMiLCJ0ZXh0TGFiZWwiLCJmZCIsInJlZHVjZSIsImFjY3UiLCJ2YWxpZGF0ZVNhdmVkVmlzdWFsQ2hhbm5lbHMiLCJzYXZlZExheWVyIiwidmFsdWVzIiwidmlzdWFsQ2hhbm5lbHMiLCJzY2FsZSIsImZvdW5kRmllbGQiLCJmb3VuZENoYW5uZWwiLCJ1cGRhdGVMYXllckNvbmZpZyIsInZhbGlkYXRlVmlzdWFsQ2hhbm5lbCIsImxheWVyIiwidmFsaWRhdGVMYXllciIsInZhbGlkYXRlTGF5ZXJXaXRoRGF0YSIsInB1c2giLCJvcHRpb25zIiwidHlwZSIsImhhc093blByb3BlcnR5IiwibGFiZWwiLCJjb2xvciIsImlzVmlzaWJsZSIsImhpZGRlbiIsImNvbHVtbkNvbmZpZyIsImdldExheWVyQ29sdW1ucyIsImFsbG93RW1wdHlDb2x1bW4iLCJ2aXNDb25maWciLCJjb3B5TGF5ZXJDb25maWciLCJzaGFsbG93Q29weSIsImlzVmFsaWRNZXJnZXIiLCJtZXJnZXIiLCJtZXJnZSIsInByb3AiLCJWSVNfU1RBVEVfTUVSR0VSUyIsInRvTWVyZ2VQcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxjQUE3QixFQUE2QztBQUNsRCxNQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixjQUFkLENBQUQsSUFBa0MsQ0FBQ0EsY0FBYyxDQUFDRyxNQUF0RCxFQUE4RDtBQUM1RCxXQUFPSixLQUFQO0FBQ0Q7O0FBRUQsOEJBQTZDLGdEQUE4QkEsS0FBOUIsRUFBcUNDLGNBQXJDLENBQTdDO0FBQUEsTUFBT0ksU0FBUCx5QkFBT0EsU0FBUDtBQUFBLE1BQWtCQyxNQUFsQix5QkFBa0JBLE1BQWxCO0FBQUEsTUFBMEJDLGVBQTFCLHlCQUEwQkEsZUFBMUIsQ0FMa0QsQ0FPbEQ7OztBQUNBLE1BQUlDLGNBQWMsaURBQVFSLEtBQUssQ0FBQ1MsT0FBTixJQUFpQixFQUF6Qix1Q0FBaUNKLFNBQWpDLEVBQWxCO0FBQ0FHLEVBQUFBLGNBQWMsR0FBRyx3Q0FB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QUEsSUFBSSxFQUFFLFFBQTNCO0FBQXFDRSxFQUFBQSxXQUFXLEVBQUU7QUFBbEQsQ0FEK0IsRUFFL0I7QUFBQ0gsRUFBQUEsS0FBSyxFQUFFdEosWUFBUjtBQUFzQnVKLEVBQUFBLElBQUksRUFBRSxTQUE1QjtBQUF1Q0UsRUFBQUEsV0FBVyxFQUFFO0FBQXBELENBRitCLEVBRy9CO0FBQUNILEVBQUFBLEtBQUssRUFBRTNGLGlCQUFSO0FBQTJCNEYsRUFBQUEsSUFBSSxFQUFFLG1CQUFqQztBQUFzREUsRUFBQUEsV0FBVyxFQUFFO0FBQW5FLENBSCtCLEVBSS9CO0FBQUNILEVBQUFBLEtBQUssRUFBRXhELGtCQUFSO0FBQTRCeUQsRUFBQUEsSUFBSSxFQUFFO0FBQWxDLENBSitCLEVBSy9CO0FBQUNELEVBQUFBLEtBQUssRUFBRXpFLGNBQVI7QUFBd0IwRSxFQUFBQSxJQUFJLEVBQUUsV0FBOUI7QUFBMkNFLEVBQUFBLFdBQVcsRUFBRTtBQUF4RCxDQUwrQixFQU0vQjtBQUFDSCxFQUFBQSxLQUFLLEVBQUVyRCxvQkFBUjtBQUE4QnNELEVBQUFBLElBQUksRUFBRTtBQUFwQyxDQU4rQixDQUExQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC51bmlxJztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcbmltcG9ydCBmbGF0dGVuRGVlcCBmcm9tICdsb2Rhc2guZmxhdHRlbmRlZXAnO1xuaW1wb3J0IHtpc09iamVjdCwgYXJyYXlJbnNlcnR9IGZyb20gJ3V0aWxzL3V0aWxzJztcbmltcG9ydCB7YXBwbHlGaWx0ZXJzVG9EYXRhc2V0cywgdmFsaWRhdGVGaWx0ZXJzVXBkYXRlRGF0YXNldHN9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5cbmltcG9ydCB7Z2V0SW5pdGlhbE1hcExheWVyc0ZvclNwbGl0TWFwfSBmcm9tICd1dGlscy9zcGxpdC1tYXAtdXRpbHMnO1xuaW1wb3J0IHtyZXNldEZpbHRlckdwdU1vZGUsIGFzc2lnbkdwdUNoYW5uZWxzfSBmcm9tICd1dGlscy9ncHUtZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7TEFZRVJfQkxFTkRJTkdTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge0NVUlJFTlRfVkVSU0lPTiwgdmlzU3RhdGVTY2hlbWF9IGZyb20gJ3NjaGVtYXMnO1xuXG4vKipcbiAqIE1lcmdlIGxvYWRlZCBmaWx0ZXJzIHdpdGggY3VycmVudCBzdGF0ZSwgaWYgbm8gZmllbGRzIG9yIGRhdGEgYXJlIGxvYWRlZFxuICogc2F2ZSBpdCBmb3IgbGF0ZXJcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VGaWx0ZXJzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VGaWx0ZXJzKHN0YXRlLCBmaWx0ZXJzVG9NZXJnZSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZmlsdGVyc1RvTWVyZ2UpIHx8ICFmaWx0ZXJzVG9NZXJnZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCB7dmFsaWRhdGVkLCBmYWlsZWQsIHVwZGF0ZWREYXRhc2V0c30gPSB2YWxpZGF0ZUZpbHRlcnNVcGRhdGVEYXRhc2V0cyhzdGF0ZSwgZmlsdGVyc1RvTWVyZ2UpO1xuXG4gIC8vIG1lcmdlIGZpbHRlciB3aXRoIGV4aXN0aW5nXG4gIGxldCB1cGRhdGVkRmlsdGVycyA9IFsuLi4oc3RhdGUuZmlsdGVycyB8fCBbXSksIC4uLnZhbGlkYXRlZF07XG4gIHVwZGF0ZWRGaWx0ZXJzID0gcmVzZXRGaWx0ZXJHcHVNb2RlKHVwZGF0ZWRGaWx0ZXJzKTtcbiAgdXBkYXRlZEZpbHRlcnMgPSBhc3NpZ25HcHVDaGFubmVscyh1cGRhdGVkRmlsdGVycyk7XG4gIC8vIGZpbHRlciBkYXRhXG4gIGNvbnN0IGRhdGFzZXRzVG9GaWx0ZXIgPSB1bmlxKGZsYXR0ZW5EZWVwKHZhbGlkYXRlZC5tYXAoZiA9PiBmLmRhdGFJZCkpKTtcblxuICBjb25zdCBmaWx0ZXJlZCA9IGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoXG4gICAgZGF0YXNldHNUb0ZpbHRlcixcbiAgICB1cGRhdGVkRGF0YXNldHMsXG4gICAgdXBkYXRlZEZpbHRlcnMsXG4gICAgc3RhdGUubGF5ZXJzXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWx0ZXJzOiB1cGRhdGVkRmlsdGVycyxcbiAgICBkYXRhc2V0czogZmlsdGVyZWQsXG4gICAgZmlsdGVyVG9CZU1lcmdlZDogWy4uLnN0YXRlLmZpbHRlclRvQmVNZXJnZWQsIC4uLmZhaWxlZF1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxheWVyRnJvbUNvbmZpZyhzdGF0ZSwgbGF5ZXJDb25maWcpIHtcbiAgLy8gZmlyc3QgdmFsaWRhdGUgY29uZmlnIGFnYWluc3QgZGF0YXNldFxuICBjb25zdCB7dmFsaWRhdGVkLCBmYWlsZWR9ID0gdmFsaWRhdGVMYXllcnNCeURhdGFzZXRzKHN0YXRlLmRhdGFzZXRzLCBzdGF0ZS5sYXllckNsYXNzZXMsIFtcbiAgICBsYXllckNvbmZpZ1xuICBdKTtcblxuICBpZiAoZmFpbGVkLmxlbmd0aCB8fCAhdmFsaWRhdGVkLmxlbmd0aCkge1xuICAgIC8vIGZhaWxlZFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbmV3TGF5ZXIgPSB2YWxpZGF0ZWRbMF07XG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyRG9tYWluKHN0YXRlLmRhdGFzZXRzKTtcbiAgcmV0dXJuIG5ld0xheWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplTGF5ZXIobmV3TGF5ZXIpIHtcbiAgY29uc3Qgc2F2ZWRWaXNTdGF0ZSA9IHZpc1N0YXRlU2NoZW1hW0NVUlJFTlRfVkVSU0lPTl0uc2F2ZSh7XG4gICAgbGF5ZXJzOiBbbmV3TGF5ZXJdLFxuICAgIGxheWVyT3JkZXI6IFswXVxuICB9KS52aXNTdGF0ZTtcbiAgY29uc3QgbG9hZGVkTGF5ZXIgPSB2aXNTdGF0ZVNjaGVtYVtDVVJSRU5UX1ZFUlNJT05dLmxvYWQoc2F2ZWRWaXNTdGF0ZSkudmlzU3RhdGUubGF5ZXJzWzBdO1xuICByZXR1cm4gbG9hZGVkTGF5ZXI7XG59XG5cbi8qKlxuICogTWVyZ2UgbGF5ZXJzIGZyb20gZGUtc2VyaWFsaXplZCBzdGF0ZSwgaWYgbm8gZmllbGRzIG9yIGRhdGEgYXJlIGxvYWRlZFxuICogc2F2ZSBpdCBmb3IgbGF0ZXJcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VMYXllcnN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUxheWVycyhzdGF0ZSwgbGF5ZXJzVG9NZXJnZSwgZnJvbUNvbmZpZykge1xuICBjb25zdCBwcmVzZXJ2ZUxheWVyT3JkZXIgPSBmcm9tQ29uZmlnID8gbGF5ZXJzVG9NZXJnZS5tYXAobCA9PiBsLmlkKSA6IHN0YXRlLnByZXNlcnZlTGF5ZXJPcmRlcjtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkobGF5ZXJzVG9NZXJnZSkgfHwgIWxheWVyc1RvTWVyZ2UubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3Qge3ZhbGlkYXRlZDogbWVyZ2VkTGF5ZXIsIGZhaWxlZDogdW5tZXJnZWR9ID0gdmFsaWRhdGVMYXllcnNCeURhdGFzZXRzKFxuICAgIHN0YXRlLmRhdGFzZXRzLFxuICAgIHN0YXRlLmxheWVyQ2xhc3NlcyxcbiAgICBsYXllcnNUb01lcmdlXG4gICk7XG5cbiAgLy8gcHV0IG5ldyBsYXllcnMgaW4gZnJvbnQgb2YgY3VycmVudCBsYXllcnNcbiAgY29uc3Qge25ld0xheWVyT3JkZXIsIG5ld0xheWVyc30gPSBpbnNlcnRMYXllckF0UmlnaHRPcmRlcihcbiAgICBzdGF0ZS5sYXllcnMsXG4gICAgbWVyZ2VkTGF5ZXIsXG4gICAgc3RhdGUubGF5ZXJPcmRlcixcbiAgICBwcmVzZXJ2ZUxheWVyT3JkZXJcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxheWVyczogbmV3TGF5ZXJzLFxuICAgIGxheWVyT3JkZXI6IG5ld0xheWVyT3JkZXIsXG4gICAgcHJlc2VydmVMYXllck9yZGVyLFxuICAgIGxheWVyVG9CZU1lcmdlZDogWy4uLnN0YXRlLmxheWVyVG9CZU1lcmdlZCwgLi4udW5tZXJnZWRdXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRMYXllckF0UmlnaHRPcmRlcihcbiAgY3VycmVudExheWVycyxcbiAgbGF5ZXJzVG9JbnNlcnQsXG4gIGN1cnJlbnRPcmRlcixcbiAgcHJlc2VydmVkT3JkZXIgPSBbXVxuKSB7XG4gIC8vIHBlcnNlcnZlZE9yZGVyIFsnYScsICdiJywgJ2MnXTtcbiAgLy8gbGF5ZXJPcmRlciBbMSwgMCwgM11cbiAgLy8gbGF5ZXJPcmRlck1hcCBbJ2EnLCAnYyddXG4gIGxldCBsYXllck9yZGVyUXVldWUgPSBjdXJyZW50T3JkZXIubWFwKGkgPT4gY3VycmVudExheWVyc1tpXS5pZCk7XG4gIGxldCBuZXdMYXllcnMgPSBjdXJyZW50TGF5ZXJzO1xuXG4gIGZvciAoY29uc3QgbmV3TGF5ZXIgb2YgbGF5ZXJzVG9JbnNlcnQpIHtcbiAgICAvLyBmaW5kIHdoZXJlIHRvIGluc2VydCBpdFxuICAgIGNvbnN0IGV4cGVjdGVkSWR4ID0gcHJlc2VydmVkT3JkZXIuaW5kZXhPZihuZXdMYXllci5pZCk7XG4gICAgLy8gaWYgY2FudCBmaW5kIHBsYWNlIHRvIGluc2VydCwgaW5zZXJ0IGF0IHRoZSBmb250XG4gICAgbGV0IGluc2VydEF0ID0gMDtcblxuICAgIGlmIChleHBlY3RlZElkeCA+IDApIHtcbiAgICAgIC8vIGxvb2sgZm9yIGxheWVyIHRvIGluc2VydCBhZnRlclxuICAgICAgbGV0IGkgPSBleHBlY3RlZElkeCArIDE7XG4gICAgICBsZXQgcHJlY2VlZElkeCA9IG51bGw7XG4gICAgICB3aGlsZSAoaS0tID4gMCAmJiBwcmVjZWVkSWR4ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByZWNlZWRMYXllciA9IHByZXNlcnZlZE9yZGVyW2V4cGVjdGVkSWR4IC0gMV07XG4gICAgICAgIHByZWNlZWRJZHggPSBsYXllck9yZGVyUXVldWUuaW5kZXhPZihwcmVjZWVkTGF5ZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJlY2VlZElkeCA+IC0xKSB7XG4gICAgICAgIGluc2VydEF0ID0gcHJlY2VlZElkeCArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGF5ZXJPcmRlclF1ZXVlID0gYXJyYXlJbnNlcnQobGF5ZXJPcmRlclF1ZXVlLCBpbnNlcnRBdCwgbmV3TGF5ZXIuaWQpO1xuICAgIG5ld0xheWVycyA9IG5ld0xheWVycy5jb25jYXQobmV3TGF5ZXIpO1xuICB9XG5cbiAgLy8gcmVjb25zdHJ1Y3QgbGF5ZXJPcmRlciBhZnRlciBpbnNlcnRcbiAgY29uc3QgbmV3TGF5ZXJPcmRlciA9IGxheWVyT3JkZXJRdWV1ZS5tYXAoaWQgPT4gbmV3TGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IGlkKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdMYXllck9yZGVyLFxuICAgIG5ld0xheWVyc1xuICB9O1xufVxuXG4vKipcbiAqIE1lcmdlIGludGVyYWN0aW9ucyB3aXRoIHNhdmVkIGNvbmZpZ1xuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1tZXJnZXInKS5tZXJnZUludGVyYWN0aW9uc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSW50ZXJhY3Rpb25zKHN0YXRlLCBpbnRlcmFjdGlvblRvQmVNZXJnZWQpIHtcbiAgY29uc3QgbWVyZ2VkID0ge307XG4gIGNvbnN0IHVubWVyZ2VkID0ge307XG5cbiAgaWYgKGludGVyYWN0aW9uVG9CZU1lcmdlZCkge1xuICAgIE9iamVjdC5rZXlzKGludGVyYWN0aW9uVG9CZU1lcmdlZCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCFzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1trZXldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudENvbmZpZyA9IHN0YXRlLmludGVyYWN0aW9uQ29uZmlnW2tleV0uY29uZmlnO1xuXG4gICAgICBjb25zdCB7ZW5hYmxlZCwgLi4uY29uZmlnU2F2ZWR9ID0gaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkW2tleV0gfHwge307XG4gICAgICBsZXQgY29uZmlnVG9NZXJnZSA9IGNvbmZpZ1NhdmVkO1xuXG4gICAgICBpZiAoa2V5ID09PSAndG9vbHRpcCcpIHtcbiAgICAgICAgY29uc3Qge21lcmdlZFRvb2x0aXAsIHVubWVyZ2VkVG9vbHRpcH0gPSBtZXJnZUludGVyYWN0aW9uVG9vbHRpcENvbmZpZyhzdGF0ZSwgY29uZmlnU2F2ZWQpO1xuXG4gICAgICAgIC8vIG1lcmdlIG5ldyBkYXRhc2V0IHRvb2x0aXBzIHdpdGggb3JpZ2luYWwgZGF0YXNldCB0b29sdGlwc1xuICAgICAgICBjb25maWdUb01lcmdlID0ge1xuICAgICAgICAgIGZpZWxkc1RvU2hvdzoge1xuICAgICAgICAgICAgLi4uY3VycmVudENvbmZpZy5maWVsZHNUb1Nob3csXG4gICAgICAgICAgICAuLi5tZXJnZWRUb29sdGlwXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1bm1lcmdlZFRvb2x0aXApLmxlbmd0aCkge1xuICAgICAgICAgIHVubWVyZ2VkLnRvb2x0aXAgPSB7ZmllbGRzVG9TaG93OiB1bm1lcmdlZFRvb2x0aXAsIGVuYWJsZWR9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lcmdlZFtrZXldID0ge1xuICAgICAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLFxuICAgICAgICBlbmFibGVkLFxuICAgICAgICAuLi4oY3VycmVudENvbmZpZ1xuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBjb25maWc6IHBpY2soXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgLi4uY3VycmVudENvbmZpZyxcbiAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ1RvTWVyZ2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGN1cnJlbnRDb25maWcpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgaW50ZXJhY3Rpb25Db25maWc6IHtcbiAgICAgIC4uLnN0YXRlLmludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgLi4ubWVyZ2VkXG4gICAgfSxcbiAgICBpbnRlcmFjdGlvblRvQmVNZXJnZWQ6IHVubWVyZ2VkXG4gIH07XG59XG5cbi8qKlxuICogTWVyZ2Ugc3BsaXRNYXBzIGNvbmZpZyB3aXRoIGN1cnJlbnQgdmlzU3RldGUuXG4gKiAxLiBpZiBjdXJyZW50IG1hcCBpcyBzcGxpdCwgYnV0IHNwbGl0TWFwIERPRVNOT1QgY29udGFpbiBtYXBzXG4gKiAgICA6IGRvbid0IG1lcmdlIGFueXRoaW5nXG4gKiAyLiBpZiBjdXJyZW50IG1hcCBpcyBOT1Qgc3BsaXQsIGJ1dCBzcGxpdE1hcHMgY29udGFpbiBtYXBzXG4gKiAgICA6IGFkZCB0byBzcGxpdE1hcHMsIGFuZCBhZGQgY3VycmVudCBsYXllcnMgdG8gc3BsaXRNYXBzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VJbnRlcmFjdGlvbnN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNwbGl0TWFwcyhzdGF0ZSwgc3BsaXRNYXBzID0gW10pIHtcbiAgY29uc3QgbWVyZ2VkID0gWy4uLnN0YXRlLnNwbGl0TWFwc107XG4gIGNvbnN0IHVubWVyZ2VkID0gW107XG4gIHNwbGl0TWFwcy5mb3JFYWNoKChzbSwgaSkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKHNtLmxheWVycykuZm9yRWFjaCgoW2lkLCB2YWx1ZV0pID0+IHtcbiAgICAgIC8vIGNoZWNrIGlmIGxheWVyIGV4aXN0c1xuICAgICAgY29uc3QgcHVzaFRvID0gc3RhdGUubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBpZCkgPyBtZXJnZWQgOiB1bm1lcmdlZDtcblxuICAgICAgLy8gY3JlYXRlIG1hcCBwYW5lbCBpZiBjdXJyZW50IG1hcCBpcyBub3Qgc3BsaXRcbiAgICAgIHB1c2hUb1tpXSA9IHB1c2hUb1tpXSB8fCB7XG4gICAgICAgIGxheWVyczogcHVzaFRvID09PSBtZXJnZWQgPyBnZXRJbml0aWFsTWFwTGF5ZXJzRm9yU3BsaXRNYXAoc3RhdGUubGF5ZXJzKSA6IFtdXG4gICAgICB9O1xuICAgICAgcHVzaFRvW2ldLmxheWVycyA9IHtcbiAgICAgICAgLi4ucHVzaFRvW2ldLmxheWVycyxcbiAgICAgICAgW2lkXTogdmFsdWVcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgc3BsaXRNYXBzOiBtZXJnZWQsXG4gICAgc3BsaXRNYXBzVG9CZU1lcmdlZDogWy4uLnN0YXRlLnNwbGl0TWFwc1RvQmVNZXJnZWQsIC4uLnVubWVyZ2VkXVxuICB9O1xufVxuXG4vKipcbiAqIE1lcmdlIGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAgd2l0aCBzYXZlZCBjb25maWcsXG4gKiB2YWxpZGF0ZSBmaWVsZHNUb1Nob3dcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB0b29sdGlwQ29uZmlnXG4gKiBAcmV0dXJuIHtvYmplY3R9IC0ge21lcmdlZFRvb2x0aXA6IHt9LCB1bm1lcmdlZFRvb2x0aXA6IHt9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRlcmFjdGlvblRvb2x0aXBDb25maWcoc3RhdGUsIHRvb2x0aXBDb25maWcgPSB7fSkge1xuICBjb25zdCB1bm1lcmdlZFRvb2x0aXAgPSB7fTtcbiAgY29uc3QgbWVyZ2VkVG9vbHRpcCA9IHt9O1xuXG4gIGlmICghdG9vbHRpcENvbmZpZy5maWVsZHNUb1Nob3cgfHwgIU9iamVjdC5rZXlzKHRvb2x0aXBDb25maWcuZmllbGRzVG9TaG93KS5sZW5ndGgpIHtcbiAgICByZXR1cm4ge21lcmdlZFRvb2x0aXAsIHVubWVyZ2VkVG9vbHRpcH07XG4gIH1cblxuICBmb3IgKGNvbnN0IGRhdGFJZCBpbiB0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvdykge1xuICAgIGlmICghc3RhdGUuZGF0YXNldHNbZGF0YUlkXSkge1xuICAgICAgLy8gaXMgbm90IHlldCBsb2FkZWRcbiAgICAgIHVubWVyZ2VkVG9vbHRpcFtkYXRhSWRdID0gdG9vbHRpcENvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgZGF0YXNldCBpcyBsb2FkZWRcbiAgICAgIGNvbnN0IGFsbEZpZWxkcyA9IHN0YXRlLmRhdGFzZXRzW2RhdGFJZF0uZmllbGRzLm1hcChkID0+IGQubmFtZSk7XG4gICAgICBjb25zdCBmb3VuZEZpZWxkc1RvU2hvdyA9IHRvb2x0aXBDb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF0uZmlsdGVyKGZpZWxkID0+XG4gICAgICAgIGFsbEZpZWxkcy5pbmNsdWRlcyhmaWVsZC5uYW1lKVxuICAgICAgKTtcblxuICAgICAgbWVyZ2VkVG9vbHRpcFtkYXRhSWRdID0gZm91bmRGaWVsZHNUb1Nob3c7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHttZXJnZWRUb29sdGlwLCB1bm1lcmdlZFRvb2x0aXB9O1xufVxuLyoqXG4gKiBNZXJnZSBsYXllckJsZW5kaW5nIHdpdGggc2F2ZWRcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VMYXllckJsZW5kaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VMYXllckJsZW5kaW5nKHN0YXRlLCBsYXllckJsZW5kaW5nKSB7XG4gIGlmIChsYXllckJsZW5kaW5nICYmIExBWUVSX0JMRU5ESU5HU1tsYXllckJsZW5kaW5nXSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGxheWVyQmxlbmRpbmdcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIE1lcmdlIGFuaW1hdGlvbiBjb25maWdcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1tZXJnZXInKS5tZXJnZUFuaW1hdGlvbkNvbmZpZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQW5pbWF0aW9uQ29uZmlnKHN0YXRlLCBhbmltYXRpb24pIHtcbiAgaWYgKGFuaW1hdGlvbiAmJiBhbmltYXRpb24uY3VycmVudFRpbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBhbmltYXRpb25Db25maWc6IHtcbiAgICAgICAgLi4uc3RhdGUuYW5pbWF0aW9uQ29uZmlnLFxuICAgICAgICAuLi5hbmltYXRpb24sXG4gICAgICAgIGRvbWFpbjogbnVsbFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgc2F2ZWQgbGF5ZXIgY29sdW1ucyB3aXRoIG5ldyBkYXRhLFxuICogdXBkYXRlIGZpZWxkSWR4IGJhc2VkIG9uIG5ldyBmaWVsZHNcbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkc1xuICogQHBhcmFtIHtPYmplY3R9IHNhdmVkQ29sc1xuICogQHBhcmFtIHtPYmplY3R9IGVtcHR5Q29sc1xuICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gLSB2YWxpZGF0ZWQgY29sdW1ucyBvciBudWxsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU2F2ZWRMYXllckNvbHVtbnMoZmllbGRzLCBzYXZlZENvbHMgPSB7fSwgZW1wdHlDb2xzKSB7XG4gIC8vIFByZXBhcmUgY29sdW1ucyBmb3IgdGhlIHZhbGlkYXRvclxuICBjb25zdCBjb2x1bW5zID0ge307XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGVtcHR5Q29scykpIHtcbiAgICBjb2x1bW5zW2tleV0gPSB7Li4uZW1wdHlDb2xzW2tleV19O1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBzYXZlZENvbHNba2V5XTtcbiAgICBpZiAoc2F2ZWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkSWR4ID0gZmllbGRzLmZpbmRJbmRleCgoe25hbWV9KSA9PiBuYW1lID09PSBzYXZlZCk7XG5cbiAgICAgIGlmIChmaWVsZElkeCA+IC0xKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBmb3VuZCBjb2x1bW5zXG4gICAgICAgIGNvbHVtbnNba2V5XS5maWVsZElkeCA9IGZpZWxkSWR4O1xuICAgICAgICBjb2x1bW5zW2tleV0udmFsdWUgPSBzYXZlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmaW5kIGFjdHVhbCBjb2x1bW4gZmllbGRJZHgsIGluIGNhc2UgaXQgaGFzIGNoYW5nZWRcbiAgY29uc3QgYWxsQ29sRm91bmQgPSBPYmplY3Qua2V5cyhjb2x1bW5zKS5ldmVyeShrZXkgPT5cbiAgICB2YWxpZGF0ZUNvbHVtbihjb2x1bW5zW2tleV0sIGNvbHVtbnMsIGZpZWxkcylcbiAgKTtcblxuICBpZiAoYWxsQ29sRm91bmQpIHtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb2x1bW4oY29sdW1uLCBjb2x1bW5zLCBhbGxGaWVsZHMpIHtcbiAgaWYgKGNvbHVtbi5vcHRpb25hbCB8fCBjb2x1bW4udmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoY29sdW1uLnZhbGlkYXRvcikge1xuICAgIHJldHVybiBjb2x1bW4udmFsaWRhdG9yKGNvbHVtbiwgY29sdW1ucywgYWxsRmllbGRzKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgc2F2ZWQgdGV4dCBsYWJlbCBjb25maWcgd2l0aCBuZXcgZGF0YVxuICogcmVmZXIgdG8gdmlzLXN0YXRlLXNjaGVtYS5qcyBUZXh0TGFiZWxTY2hlbWFWMVxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZmllbGRzXG4gKiBAcGFyYW0ge09iamVjdH0gc2F2ZWRUZXh0TGFiZWxcbiAqIEByZXR1cm4ge09iamVjdH0gLSB2YWxpZGF0ZWQgdGV4dGxhYmVsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNhdmVkVGV4dExhYmVsKGZpZWxkcywgW2xheWVyVGV4dExhYmVsXSwgc2F2ZWRUZXh0TGFiZWwpIHtcbiAgY29uc3Qgc2F2ZWRUZXh0TGFiZWxzID0gQXJyYXkuaXNBcnJheShzYXZlZFRleHRMYWJlbCkgPyBzYXZlZFRleHRMYWJlbCA6IFtzYXZlZFRleHRMYWJlbF07XG5cbiAgLy8gdmFsaWRhdGUgZmllbGRcbiAgcmV0dXJuIHNhdmVkVGV4dExhYmVscy5tYXAodGV4dExhYmVsID0+IHtcbiAgICBjb25zdCBmaWVsZCA9IHRleHRMYWJlbC5maWVsZFxuICAgICAgPyBmaWVsZHMuZmluZChmZCA9PlxuICAgICAgICAgIE9iamVjdC5rZXlzKHRleHRMYWJlbC5maWVsZCkuZXZlcnkoa2V5ID0+IHRleHRMYWJlbC5maWVsZFtrZXldID09PSBmZFtrZXldKVxuICAgICAgICApXG4gICAgICA6IG51bGw7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobGF5ZXJUZXh0TGFiZWwpLnJlZHVjZShcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiBrZXkgPT09ICdmaWVsZCcgPyBmaWVsZCA6IHRleHRMYWJlbFtrZXldIHx8IGxheWVyVGV4dExhYmVsW2tleV1cbiAgICAgIH0pLFxuICAgICAge31cbiAgICApO1xuICB9KTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBzYXZlZCB2aXN1YWwgY2hhbm5lbHMgY29uZmlnIHdpdGggbmV3IGRhdGEsXG4gKiByZWZlciB0byB2aXMtc3RhdGUtc2NoZW1hLmpzIFZpc3VhbENoYW5uZWxTY2hlbWFWMVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLW1lcmdlcicpLnZhbGlkYXRlU2F2ZWRWaXN1YWxDaGFubmVsc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU2F2ZWRWaXN1YWxDaGFubmVscyhmaWVsZHMsIG5ld0xheWVyLCBzYXZlZExheWVyKSB7XG4gIE9iamVjdC52YWx1ZXMobmV3TGF5ZXIudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2goKHtmaWVsZCwgc2NhbGUsIGtleX0pID0+IHtcbiAgICBsZXQgZm91bmRGaWVsZDtcbiAgICBpZiAoc2F2ZWRMYXllci5jb25maWcpIHtcbiAgICAgIGlmIChzYXZlZExheWVyLmNvbmZpZ1tmaWVsZF0pIHtcbiAgICAgICAgZm91bmRGaWVsZCA9IGZpZWxkcy5maW5kKFxuICAgICAgICAgIGZkID0+IHNhdmVkTGF5ZXIuY29uZmlnICYmIGZkLm5hbWUgPT09IHNhdmVkTGF5ZXIuY29uZmlnW2ZpZWxkXS5uYW1lXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvdW5kQ2hhbm5lbCA9IHtcbiAgICAgICAgLi4uKGZvdW5kRmllbGQgPyB7W2ZpZWxkXTogZm91bmRGaWVsZH0gOiB7fSksXG4gICAgICAgIC4uLihzYXZlZExheWVyLmNvbmZpZ1tzY2FsZV0gPyB7W3NjYWxlXTogc2F2ZWRMYXllci5jb25maWdbc2NhbGVdfSA6IHt9KVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhmb3VuZENoYW5uZWwpLmxlbmd0aCkge1xuICAgICAgICBuZXdMYXllci51cGRhdGVMYXllckNvbmZpZyhmb3VuZENoYW5uZWwpO1xuICAgICAgfVxuXG4gICAgICBuZXdMYXllci52YWxpZGF0ZVZpc3VhbENoYW5uZWwoa2V5KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3TGF5ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUxheWVyc0J5RGF0YXNldHMoZGF0YXNldHMsIGxheWVyQ2xhc3NlcywgbGF5ZXJzKSB7XG4gIGNvbnN0IHZhbGlkYXRlZCA9IFtdO1xuICBjb25zdCBmYWlsZWQgPSBbXTtcblxuICBsYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgbGV0IHZhbGlkYXRlTGF5ZXI7XG4gICAgaWYgKCFsYXllciB8fCAhbGF5ZXIuY29uZmlnKSB7XG4gICAgICB2YWxpZGF0ZUxheWVyID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdKSB7XG4gICAgICAvLyBkYXRhc2V0cyBhcmUgYWxyZWFkeSBsb2FkZWRcbiAgICAgIHZhbGlkYXRlTGF5ZXIgPSB2YWxpZGF0ZUxheWVyV2l0aERhdGEoZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0sIGxheWVyLCBsYXllckNsYXNzZXMpO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZUxheWVyKSB7XG4gICAgICB2YWxpZGF0ZWQucHVzaCh2YWxpZGF0ZUxheWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGF0YXNldHMgbm90IHlldCBsb2FkZWRcbiAgICAgIGZhaWxlZC5wdXNoKGxheWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7dmFsaWRhdGVkLCBmYWlsZWR9O1xufVxuLyoqXG4gKiBWYWxpZGF0ZSBzYXZlZCBsYXllciBjb25maWcgd2l0aCBuZXcgZGF0YSxcbiAqIHVwZGF0ZSBmaWVsZElkeCBiYXNlZCBvbiBuZXcgZmllbGRzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykudmFsaWRhdGVMYXllcldpdGhEYXRhfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVMYXllcldpdGhEYXRhKFxuICB7ZmllbGRzLCBpZDogZGF0YUlkfSxcbiAgc2F2ZWRMYXllcixcbiAgbGF5ZXJDbGFzc2VzLFxuICBvcHRpb25zID0ge31cbikge1xuICBjb25zdCB7dHlwZX0gPSBzYXZlZExheWVyO1xuICAvLyBsYXllciBkb2VzbnQgaGF2ZSBhIHZhbGlkIHR5cGVcbiAgaWYgKCF0eXBlIHx8ICFsYXllckNsYXNzZXMuaGFzT3duUHJvcGVydHkodHlwZSkgfHwgIXNhdmVkTGF5ZXIuY29uZmlnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgbmV3TGF5ZXIgPSBuZXcgbGF5ZXJDbGFzc2VzW3R5cGVdKHtcbiAgICBpZDogc2F2ZWRMYXllci5pZCxcbiAgICBkYXRhSWQsXG4gICAgbGFiZWw6IHNhdmVkTGF5ZXIuY29uZmlnLmxhYmVsLFxuICAgIGNvbG9yOiBzYXZlZExheWVyLmNvbmZpZy5jb2xvcixcbiAgICBpc1Zpc2libGU6IHNhdmVkTGF5ZXIuY29uZmlnLmlzVmlzaWJsZSxcbiAgICBoaWRkZW46IHNhdmVkTGF5ZXIuY29uZmlnLmhpZGRlblxuICB9KTtcblxuICAvLyBmaW5kIGNvbHVtbiBmaWVsZElkeFxuICBjb25zdCBjb2x1bW5Db25maWcgPSBuZXdMYXllci5nZXRMYXllckNvbHVtbnMoKTtcbiAgaWYgKE9iamVjdC5rZXlzKGNvbHVtbkNvbmZpZykubGVuZ3RoKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IHZhbGlkYXRlU2F2ZWRMYXllckNvbHVtbnMoZmllbGRzLCBzYXZlZExheWVyLmNvbmZpZy5jb2x1bW5zLCBjb2x1bW5Db25maWcpO1xuICAgIGlmIChjb2x1bW5zKSB7XG4gICAgICBuZXdMYXllci51cGRhdGVMYXllckNvbmZpZyh7Y29sdW1uc30pO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuYWxsb3dFbXB0eUNvbHVtbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gdmlzdWFsIGNoYW5uZWwgZmllbGQgaXMgc2F2ZWQgdG8gYmUge25hbWUsIHR5cGV9XG4gIC8vIGZpbmQgdmlzdWFsIGNoYW5uZWwgZmllbGQgYnkgbWF0Y2hpbmcgYm90aCBuYW1lIGFuZCB0eXBlXG4gIC8vIHJlZmVyIHRvIHZpcy1zdGF0ZS1zY2hlbWEuanMgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXG4gIG5ld0xheWVyID0gdmFsaWRhdGVTYXZlZFZpc3VhbENoYW5uZWxzKGZpZWxkcywgbmV3TGF5ZXIsIHNhdmVkTGF5ZXIpO1xuXG4gIGNvbnN0IHRleHRMYWJlbCA9XG4gICAgc2F2ZWRMYXllci5jb25maWcudGV4dExhYmVsICYmIG5ld0xheWVyLmNvbmZpZy50ZXh0TGFiZWxcbiAgICAgID8gdmFsaWRhdGVTYXZlZFRleHRMYWJlbChmaWVsZHMsIG5ld0xheWVyLmNvbmZpZy50ZXh0TGFiZWwsIHNhdmVkTGF5ZXIuY29uZmlnLnRleHRMYWJlbClcbiAgICAgIDogbmV3TGF5ZXIuY29uZmlnLnRleHRMYWJlbDtcblxuICAvLyBjb3B5IHZpc0NvbmZpZyBvdmVyIHRvIGVtcHR5TGF5ZXIgdG8gbWFrZSBzdXJlIGl0IGhhcyBhbGwgdGhlIHByb3BzXG4gIGNvbnN0IHZpc0NvbmZpZyA9IG5ld0xheWVyLmNvcHlMYXllckNvbmZpZyhcbiAgICBuZXdMYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgIHNhdmVkTGF5ZXIuY29uZmlnLnZpc0NvbmZpZyB8fCB7fSxcbiAgICB7c2hhbGxvd0NvcHk6IFsnY29sb3JSYW5nZScsICdzdHJva2VDb2xvclJhbmdlJ119XG4gICk7XG5cbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe1xuICAgIHZpc0NvbmZpZyxcbiAgICB0ZXh0TGFiZWxcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0xheWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZE1lcmdlcihtZXJnZXIpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG1lcmdlcikgJiYgdHlwZW9mIG1lcmdlci5tZXJnZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgbWVyZ2VyLnByb3AgPT09ICdzdHJpbmcnO1xufVxuXG5leHBvcnQgY29uc3QgVklTX1NUQVRFX01FUkdFUlMgPSBbXG4gIHttZXJnZTogbWVyZ2VMYXllcnMsIHByb3A6ICdsYXllcnMnLCB0b01lcmdlUHJvcDogJ2xheWVyVG9CZU1lcmdlZCd9LFxuICB7bWVyZ2U6IG1lcmdlRmlsdGVycywgcHJvcDogJ2ZpbHRlcnMnLCB0b01lcmdlUHJvcDogJ2ZpbHRlclRvQmVNZXJnZWQnfSxcbiAge21lcmdlOiBtZXJnZUludGVyYWN0aW9ucywgcHJvcDogJ2ludGVyYWN0aW9uQ29uZmlnJywgdG9NZXJnZVByb3A6ICdpbnRlcmFjdGlvblRvQmVNZXJnZWQnfSxcbiAge21lcmdlOiBtZXJnZUxheWVyQmxlbmRpbmcsIHByb3A6ICdsYXllckJsZW5kaW5nJ30sXG4gIHttZXJnZTogbWVyZ2VTcGxpdE1hcHMsIHByb3A6ICdzcGxpdE1hcHMnLCB0b01lcmdlUHJvcDogJ3NwbGl0TWFwc1RvQmVNZXJnZWQnfSxcbiAge21lcmdlOiBtZXJnZUFuaW1hdGlvbkNvbmZpZywgcHJvcDogJ2FuaW1hdGlvbkNvbmZpZyd9XG5dO1xuIl19