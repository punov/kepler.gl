"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processCsvData = processCsvData;
exports.parseRowsByFields = parseRowsByFields;
exports.getSampleForTypeAnalyze = getSampleForTypeAnalyze;
exports.parseCsvRowsByFieldType = parseCsvRowsByFieldType;
exports.getFieldsFromData = getFieldsFromData;
exports.renameDuplicateFields = renameDuplicateFields;
exports.analyzerTypeToFieldType = analyzerTypeToFieldType;
exports.processRowObject = processRowObject;
exports.processGeojson = processGeojson;
exports.formatCsv = formatCsv;
exports.validateInputData = validateInputData;
exports.processKeplerglJSON = processKeplerglJSON;
exports.processKeplerglDataset = processKeplerglDataset;
exports.Processors = exports.DATASET_HANDLERS = exports.PARSE_FIELD_VALUE_FROM_STRING = exports.CSV_NULLS = exports.ACCEPTED_ANALYZER_TYPES = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d3Dsv = require("d3-dsv");

var _d3Array = require("d3-array");

var _window = require("global/window");

var _assert = _interopRequireDefault(require("assert"));

var _typeAnalyzer = require("type-analyzer");

var _geojsonNormalize = _interopRequireDefault(require("@mapbox/geojson-normalize"));

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("../utils/data-utils");

var _schemas = _interopRequireDefault(require("../schemas"));

var _userGuides = require("../constants/user-guides");

var _utils = require("../utils/utils");

var _PARSE_FIELD_VALUE_FR, _DATASET_HANDLERS;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ACCEPTED_ANALYZER_TYPES = [_typeAnalyzer.DATA_TYPES.DATE, _typeAnalyzer.DATA_TYPES.TIME, _typeAnalyzer.DATA_TYPES.DATETIME, _typeAnalyzer.DATA_TYPES.NUMBER, _typeAnalyzer.DATA_TYPES.INT, _typeAnalyzer.DATA_TYPES.FLOAT, _typeAnalyzer.DATA_TYPES.BOOLEAN, _typeAnalyzer.DATA_TYPES.STRING, _typeAnalyzer.DATA_TYPES.GEOMETRY, _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.ZIPCODE, _typeAnalyzer.DATA_TYPES.ARRAY, _typeAnalyzer.DATA_TYPES.OBJECT]; // if any of these value occurs in csv, parse it to null;
// const CSV_NULLS = ['', 'null', 'NULL', 'Null', 'NaN', '/N'];
// matches empty string

exports.ACCEPTED_ANALYZER_TYPES = ACCEPTED_ANALYZER_TYPES;
var CSV_NULLS = /^(null|NULL|Null|NaN|\/N||)$/;
exports.CSV_NULLS = CSV_NULLS;
var IGNORE_DATA_TYPES = Object.keys(_typeAnalyzer.DATA_TYPES).filter(function (type) {
  return !ACCEPTED_ANALYZER_TYPES.includes(type);
});
var PARSE_FIELD_VALUE_FROM_STRING = (_PARSE_FIELD_VALUE_FR = {}, (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES["boolean"], {
  valid: function valid(d) {
    return typeof d === 'boolean';
  },
  parse: function parse(d) {
    return d === 'true' || d === 'True' || d === 'TRUE' || d === '1';
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.integer, {
  valid: function valid(d) {
    return parseInt(d, 10) === d;
  },
  parse: function parse(d) {
    return parseInt(d, 10);
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.timestamp, {
  valid: function valid(d, field) {
    return ['x', 'X'].includes(field.format) ? typeof d === 'number' : typeof d === 'string';
  },
  parse: function parse(d, field) {
    return ['x', 'X'].includes(field.format) ? Number(d) : d;
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.real, {
  valid: function valid(d) {
    return parseFloat(d) === d;
  },
  // Note this will result in NaN for some string
  parse: parseFloat
}), _PARSE_FIELD_VALUE_FR);
/**
 * Process csv data, output a data object with `{fields: [], rows: []}`.
 * The data object can be wrapped in a `dataset` and pass to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * @param rawData raw csv string
 * @returns  data object `{fields: [], rows: []}` can be passed to addDataToMaps
 * @type {typeof import('./data-processor').processCsvData}
 * @public
 * @example
 * import {processCsvData} from 'kepler.gl/processors';
 *
 * const testData = `gps_data.utc_timestamp,gps_data.lat,gps_data.lng,gps_data.types,epoch,has_result,id,time,begintrip_ts_utc,begintrip_ts_local,date
 * 2016-09-17 00:09:55,29.9900937,31.2590542,driver_analytics,1472688000000,False,1,2016-09-23T00:00:00.000Z,2016-10-01 09:41:39+00:00,2016-10-01 09:41:39+00:00,2016-09-23
 * 2016-09-17 00:10:56,29.9927699,31.2461142,driver_analytics,1472688000000,False,2,2016-09-23T00:00:00.000Z,2016-10-01 09:46:37+00:00,2016-10-01 16:46:37+00:00,2016-09-23
 * 2016-09-17 00:11:56,29.9907261,31.2312742,driver_analytics,1472688000000,False,3,2016-09-23T00:00:00.000Z,,,2016-09-23
 * 2016-09-17 00:12:58,29.9870074,31.2175827,driver_analytics,1472688000000,False,4,2016-09-23T00:00:00.000Z,,,2016-09-23`
 *
 * const dataset = {
 *  info: {id: 'test_data', label: 'My Csv'},
 *  data: processCsvData(testData)
 * };
 *
 * dispatch(addDataToMap({
 *  datasets: [dataset],
 *  options: {centerMap: true, readOnly: true}
 * }));
 */

exports.PARSE_FIELD_VALUE_FROM_STRING = PARSE_FIELD_VALUE_FROM_STRING;

function processCsvData(rawData, header) {
  var rows;
  var headerRow;

  if (typeof rawData === 'string') {
    var _parsedRows = (0, _d3Dsv.csvParseRows)(rawData);

    if (!Array.isArray(_parsedRows) || _parsedRows.length < 2) {
      // looks like an empty file, throw error to be catch
      throw new Error('process Csv Data Failed: CSV is empty');
    }

    headerRow = _parsedRows[0];
    rows = _parsedRows.slice(1);
  } else if (Array.isArray(rawData) && rawData.length) {
    rows = rawData;
    headerRow = header;

    if (!Array.isArray(headerRow)) {
      // if data is passed in as array of rows and missing header
      // assume first row is header
      headerRow = rawData[0];
      rows = rawData.slice(1);
    }
  }

  if (!rows || !headerRow) {
    throw new Error('invalid input passed to processCsvData');
  } // here we assume the csv file that people uploaded will have first row
  // as name of the column


  cleanUpFalsyCsvValue(rows); // No need to run type detection on every data point
  // here we get a list of none null values to run analyze on

  var sample = getSampleForTypeAnalyze({
    fields: headerRow,
    allData: rows
  });
  var fields = getFieldsFromData(sample, headerRow);
  var parsedRows = parseRowsByFields(rows, fields);
  return {
    fields: fields,
    rows: parsedRows
  };
}
/**
 * Parse rows of csv by analyzed field types. So that `'1'` -> `1`, `'True'` -> `true`
 * @param {Array<Array>} rows
 * @param {Array<Object>} fields
 */


function parseRowsByFields(rows, fields) {
  // Edit rows in place
  var geojsonFieldIdx = fields.findIndex(function (f) {
    return f.name === '_geojson';
  });
  fields.forEach(parseCsvRowsByFieldType.bind(null, rows, geojsonFieldIdx));
  return rows;
}
/**
 * Getting sample data for analyzing field type.
 *
 * @type {typeof import('./data-processor').getSampleForTypeAnalyze}
 */


function getSampleForTypeAnalyze(_ref) {
  var fields = _ref.fields,
      allData = _ref.allData,
      _ref$sampleCount = _ref.sampleCount,
      sampleCount = _ref$sampleCount === void 0 ? 50 : _ref$sampleCount;
  var total = Math.min(sampleCount, allData.length); // const fieldOrder = fields.map(f => f.name);

  var sample = (0, _d3Array.range)(0, total, 1).map(function (d) {
    return {};
  }); // collect sample data for each field

  fields.forEach(function (field, fieldIdx) {
    // data counter
    var i = 0; // sample counter

    var j = 0;

    while (j < total) {
      if (i >= allData.length) {
        // if depleted data pool
        sample[j][field] = null;
        j++;
      } else if ((0, _dataUtils.notNullorUndefined)(allData[i][fieldIdx])) {
        sample[j][field] = typeof allData[i][fieldIdx] === 'string' ? allData[i][fieldIdx].trim() : allData[i][fieldIdx];
        j++;
        i++;
      } else {
        i++;
      }
    }
  });
  return sample;
}
/**
 * Convert falsy value in csv including `'', 'null', 'NULL', 'Null', 'NaN'` to `null`,
 * so that type-analyzer won't detect it as string
 *
 * @param {Array<Array>} rows
 */


function cleanUpFalsyCsvValue(rows) {
  var re = new RegExp(CSV_NULLS, 'g');

  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].length; j++) {
      // analyzer will set any fields to 'string' if there are empty values
      // which will be parsed as '' by d3.csv
      // here we parse empty data as null
      // TODO: create warning when deltect `CSV_NULLS` in the data
      if (typeof rows[i][j] === 'string' && rows[i][j].match(re)) {
        rows[i][j] = null;
      }
    }
  }
}
/**
 * Process uploaded csv file to parse value by field type
 *
 * @param rows
 * @param geoFieldIdx field index
 * @param field
 * @param i
 * @type {typeof import('./data-processor').parseCsvRowsByFieldType}
 */


function parseCsvRowsByFieldType(rows, geoFieldIdx, field, i) {
  var parser = PARSE_FIELD_VALUE_FROM_STRING[field.type];

  if (parser) {
    // check first not null value of it's already parsed
    var first = rows.find(function (r) {
      return (0, _dataUtils.notNullorUndefined)(r[i]);
    });

    if (!first || parser.valid(first[i], field)) {
      return;
    }

    rows.forEach(function (row) {
      // parse string value based on field type
      if (row[i] !== null) {
        row[i] = parser.parse(row[i], field);

        if (geoFieldIdx > -1 && row[geoFieldIdx] && row[geoFieldIdx].properties) {
          row[geoFieldIdx].properties[field.name] = row[i];
        }
      }
    });
  }
}
/**
 * Analyze field types from data in `string` format, e.g. uploaded csv.
 * Assign `type`, `fieldIdx` and `format` (timestamp only) to each field
 *
 * @param data array of row object
 * @param fieldOrder array of field names as string
 * @returns formatted fields
 * @type {typeof import('./data-processor').getFieldsFromData}
 * @public
 * @example
 *
 * import {getFieldsFromData} from 'kepler.gl/processors';
 * const data = [{
 *   time: '2016-09-17 00:09:55',
 *   value: '4',
 *   surge: '1.2',
 *   isTrip: 'true',
 *   zeroOnes: '0'
 * }, {
 *   time: '2016-09-17 00:30:08',
 *   value: '3',
 *   surge: null,
 *   isTrip: 'false',
 *   zeroOnes: '1'
 * }, {
 *   time: null,
 *   value: '2',
 *   surge: '1.3',
 *   isTrip: null,
 *   zeroOnes: '1'
 * }];
 *
 * const fieldOrder = ['time', 'value', 'surge', 'isTrip', 'zeroOnes'];
 * const fields = getFieldsFromData(data, fieldOrder);
 * // fields = [
 * // {name: 'time', format: 'YYYY-M-D H:m:s', fieldIdx: 1, type: 'timestamp'},
 * // {name: 'value', format: '', fieldIdx: 4, type: 'integer'},
 * // {name: 'surge', format: '', fieldIdx: 5, type: 'real'},
 * // {name: 'isTrip', format: '', fieldIdx: 6, type: 'boolean'},
 * // {name: 'zeroOnes', format: '', fieldIdx: 7, type: 'integer'}];
 *
 */


function getFieldsFromData(data, fieldOrder) {
  // add a check for epoch timestamp
  var metadata = _typeAnalyzer.Analyzer.computeColMeta(data, [{
    regex: /.*geojson|all_points/g,
    dataType: 'GEOMETRY'
  }, {
    regex: /.*census/g,
    dataType: 'STRING'
  }], {
    ignoredDataTypes: IGNORE_DATA_TYPES
  });

  var _renameDuplicateField = renameDuplicateFields(fieldOrder),
      fieldByIndex = _renameDuplicateField.fieldByIndex;

  var result = fieldOrder.map(function (field, index) {
    var name = fieldByIndex[index];
    var fieldMeta = metadata.find(function (m) {
      return m.key === field;
    });

    var _ref2 = fieldMeta || {},
        type = _ref2.type,
        format = _ref2.format;

    return {
      name: name,
      format: format,
      fieldIdx: index,
      type: analyzerTypeToFieldType(type),
      analyzerType: type,
      valueAccessor: function valueAccessor(values) {
        return values[index];
      }
    };
  }); // @ts-ignore

  return result;
}
/**
 * pass in an array of field names, rename duplicated one
 * and return a map from old field index to new name
 *
 * @param {Array} fieldOrder
 * @returns {Object} new field name by index
 */


function renameDuplicateFields(fieldOrder) {
  return fieldOrder.reduce(function (accu, field, i) {
    var allNames = accu.allNames;
    var fieldName = field; // add a counter to duplicated names

    if (allNames.includes(field)) {
      var counter = 0;

      while (allNames.includes("".concat(field, "-").concat(counter))) {
        counter++;
      }

      fieldName = "".concat(field, "-").concat(counter);
    }

    accu.fieldByIndex[i] = fieldName;
    accu.allNames.push(fieldName);
    return accu;
  }, {
    allNames: [],
    fieldByIndex: {}
  });
}
/**
 * Convert type-analyzer output to kepler.gl field types
 *
 * @param aType
 * @returns corresponding type in `ALL_FIELD_TYPES`
 * @type {typeof import('./data-processor').analyzerTypeToFieldType}}
 */

/* eslint-disable complexity */


function analyzerTypeToFieldType(aType) {
  var DATE = _typeAnalyzer.DATA_TYPES.DATE,
      TIME = _typeAnalyzer.DATA_TYPES.TIME,
      DATETIME = _typeAnalyzer.DATA_TYPES.DATETIME,
      NUMBER = _typeAnalyzer.DATA_TYPES.NUMBER,
      INT = _typeAnalyzer.DATA_TYPES.INT,
      FLOAT = _typeAnalyzer.DATA_TYPES.FLOAT,
      BOOLEAN = _typeAnalyzer.DATA_TYPES.BOOLEAN,
      STRING = _typeAnalyzer.DATA_TYPES.STRING,
      GEOMETRY = _typeAnalyzer.DATA_TYPES.GEOMETRY,
      GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING,
      PAIR_GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING,
      ZIPCODE = _typeAnalyzer.DATA_TYPES.ZIPCODE,
      ARRAY = _typeAnalyzer.DATA_TYPES.ARRAY,
      OBJECT = _typeAnalyzer.DATA_TYPES.OBJECT; // TODO: un recognized types
  // CURRENCY PERCENT NONE

  switch (aType) {
    case DATE:
      return _defaultSettings.ALL_FIELD_TYPES.date;

    case TIME:
    case DATETIME:
      return _defaultSettings.ALL_FIELD_TYPES.timestamp;

    case FLOAT:
      return _defaultSettings.ALL_FIELD_TYPES.real;

    case INT:
      return _defaultSettings.ALL_FIELD_TYPES.integer;

    case BOOLEAN:
      return _defaultSettings.ALL_FIELD_TYPES["boolean"];

    case GEOMETRY:
    case GEOMETRY_FROM_STRING:
    case PAIR_GEOMETRY_FROM_STRING:
    case ARRAY:
    case OBJECT:
      // TODO: create a new data type for objects and arrays
      return _defaultSettings.ALL_FIELD_TYPES.geojson;

    case NUMBER:
    case STRING:
    case ZIPCODE:
      return _defaultSettings.ALL_FIELD_TYPES.string;

    default:
      _window.console.warn("Unsupported analyzer type: ".concat(aType));

      return _defaultSettings.ALL_FIELD_TYPES.string;
  }
}
/* eslint-enable complexity */

/**
 * Process data where each row is an object, output can be passed to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * NOTE: This function may mutate input.
 * @param rawData an array of row object, each object should have the same number of keys
 * @returns dataset containing `fields` and `rows`
 * @type {typeof import('./data-processor').processRowObject}
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processRowObject} from 'kepler.gl/processors';
 *
 * const data = [
 *  {lat: 31.27, lng: 127.56, value: 3},
 *  {lat: 31.22, lng: 126.26, value: 1}
 * ];
 *
 * dispatch(addDataToMap({
 *  datasets: {
 *    info: {label: 'My Data', id: 'my_data'},
 *    data: processRowObject(data)
 *  }
 * }));
 */


function processRowObject(rawData) {
  if (!Array.isArray(rawData) || !rawData.length) {
    return null;
  }

  var keys = Object.keys(rawData[0]);
  var rows = rawData.map(function (d) {
    return keys.map(function (key) {
      return d[key];
    });
  }); // row object an still contain values like `Null` or `N/A`

  cleanUpFalsyCsvValue(rows);
  return processCsvData(rows, keys);
}
/**
 * Process GeoJSON [`FeatureCollection`](http://wiki.geojson.org/GeoJSON_draft_version_6#FeatureCollection),
 * output a data object with `{fields: [], rows: []}`.
 * The data object can be wrapped in a `dataset` and passed to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * NOTE: This function may mutate input.
 *
 * @param  rawData raw geojson feature collection
 * @returns  dataset containing `fields` and `rows`
 * @type {typeof import('./data-processor').processGeojson}
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processGeojson} from 'kepler.gl/processors';
 *
 * const geojson = {
 * 	"type" : "FeatureCollection",
 * 	"features" : [{
 * 		"type" : "Feature",
 * 		"properties" : {
 * 			"capacity" : "10",
 * 			"type" : "U-Rack"
 * 		},
 * 		"geometry" : {
 * 			"type" : "Point",
 * 			"coordinates" : [ -71.073283, 42.417500 ]
 * 		}
 * 	}]
 * };
 *
 * dispatch(addDataToMap({
 *  datasets: {
 *    info: {
 *      label: 'Sample Taxi Trips in New York City',
 *      id: 'test_trip_data'
 *    },
 *    data: processGeojson(geojson)
 *  }
 * }));
 */


function processGeojson(rawData) {
  var normalizedGeojson = (0, _geojsonNormalize["default"])(rawData);

  if (!normalizedGeojson || !Array.isArray(normalizedGeojson.features)) {
    var error = new Error("Read File Failed: File is not a valid GeoJSON. Read more about [supported file format](".concat(_userGuides.GUIDES_FILE_FORMAT_DOC, ")"));
    throw error; // fail to normalize geojson
  } // getting all feature fields


  var allDataRows = [];

  for (var i = 0; i < normalizedGeojson.features.length; i++) {
    var f = normalizedGeojson.features[i];

    if (f.geometry) {
      allDataRows.push(_objectSpread({
        // add feature to _geojson field
        _geojson: f
      }, f.properties || {}));
    }
  } // get all the field


  var fields = allDataRows.reduce(function (prev, curr) {
    Object.keys(curr).forEach(function (key) {
      if (!prev.includes(key)) {
        prev.push(key);
      }
    });
    return prev;
  }, []); // make sure each feature has exact same fields

  allDataRows.forEach(function (d) {
    fields.forEach(function (f) {
      if (!(f in d)) {
        d[f] = null;
        d._geojson.properties[f] = null;
      }
    });
  });
  return processRowObject(allDataRows);
}
/**
 * On export data to csv
 * @param {Array<Array>} data `dataset.allData` or filtered data `dataset.data`
 * @param {Array<Object>} fields `dataset.fields`
 * @returns {string} csv string
 */


function formatCsv(data, fields) {
  var columns = fields.map(function (f) {
    return f.name;
  });
  var formattedData = [columns]; // parse geojson object as string

  data.forEach(function (row) {
    formattedData.push(row.map(function (d, i) {
      return (0, _dataUtils.parseFieldValue)(d, fields[i].type);
    }));
  });
  return (0, _d3Dsv.csvFormatRows)(formattedData);
}
/**
 * Validate input data, adding missing field types, rename duplicate columns
 * @type {typeof import('./data-processor').validateInputData}
 */


function validateInputData(data) {
  if (!(0, _utils.isPlainObject)(data)) {
    (0, _assert["default"])('addDataToMap Error: dataset.data cannot be null');
    return null;
  } else if (!Array.isArray(data.fields)) {
    (0, _assert["default"])('addDataToMap Error: expect dataset.data.fields to be an array');
    return null;
  } else if (!Array.isArray(data.rows)) {
    (0, _assert["default"])('addDataToMap Error: expect dataset.data.rows to be an array');
    return null;
  }

  var fields = data.fields,
      rows = data.rows; // check if all fields has name, format and type

  var allValid = fields.every(function (f, i) {
    if (!(0, _utils.isPlainObject)(f)) {
      (0, _assert["default"])("fields needs to be an array of object, but find ".concat((0, _typeof2["default"])(f)));
      fields[i] = {};
    }

    if (!f.name) {
      (0, _assert["default"])("field.name is required but missing in ".concat(JSON.stringify(f))); // assign a name

      fields[i].name = "column_".concat(i);
    }

    if (!_defaultSettings.ALL_FIELD_TYPES[f.type]) {
      (0, _assert["default"])("unknown field type ".concat(f.type));
      return false;
    }

    if (!fields.every(function (field) {
      return field.analyzerType;
    })) {
      (0, _assert["default"])('field missing analyzerType');
      return false;
    } // check time format is correct based on first 10 not empty element


    if (f.type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
      var sample = findNonEmptyRowsAtField(rows, i, 10).map(function (r) {
        return {
          ts: r[i]
        };
      });

      var analyzedType = _typeAnalyzer.Analyzer.computeColMeta(sample)[0];

      return analyzedType && analyzedType.category === 'TIME' && analyzedType.format === f.format;
    }

    return true;
  });

  if (allValid) {
    return {
      rows: rows,
      fields: fields
    };
  } // if any field has missing type, recalculate it for everyone
  // because we simply lost faith in humanity


  var sampleData = getSampleForTypeAnalyze({
    fields: fields.map(function (f) {
      return f.name;
    }),
    allData: rows
  });
  var fieldOrder = fields.map(function (f) {
    return f.name;
  });
  var meta = getFieldsFromData(sampleData, fieldOrder);
  var updatedFields = fields.map(function (f, i) {
    return _objectSpread(_objectSpread({}, f), {}, {
      type: meta[i].type,
      format: meta[i].format,
      analyzerType: meta[i].analyzerType
    });
  });
  return {
    fields: updatedFields,
    rows: rows
  };
}

function findNonEmptyRowsAtField(rows, fieldIdx, total) {
  var sample = [];
  var i = 0;

  while (sample.length < total && i < rows.length) {
    if ((0, _dataUtils.notNullorUndefined)(rows[i][fieldIdx])) {
      sample.push(rows[i]);
    }

    i++;
  }

  return sample;
}
/**
 * Process saved kepler.gl json to be pass to [`addDataToMap`](../actions/actions.md#adddatatomap).
 * The json object should contain `datasets` and `config`.
 * @param {Object} rawData
 * @param {Array} rawData.datasets
 * @param {Object} rawData.config
 * @returns {Object} datasets and config `{datasets: {}, config: {}}`
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processKeplerglJSON} from 'kepler.gl/processors';
 *
 * dispatch(addDataToMap(processKeplerglJSON(keplerGlJson)));
 */


function processKeplerglJSON(rawData) {
  return rawData ? _schemas["default"].load(rawData.datasets, rawData.config) : null;
}
/**
 * Parse a single or an array of datasets saved using kepler.gl schema
 * @param {Array | Array<Object>} rawData
 */


function processKeplerglDataset(rawData) {
  if (!rawData) {
    return null;
  }

  var results = _schemas["default"].parseSavedData((0, _utils.toArray)(rawData));

  if (!results) {
    return null;
  }

  return Array.isArray(rawData) ? results : results[0];
}

var DATASET_HANDLERS = (_DATASET_HANDLERS = {}, (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.row, processRowObject), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.geojson, processGeojson), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.csv, processCsvData), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.keplergl, processKeplerglDataset), _DATASET_HANDLERS);
exports.DATASET_HANDLERS = DATASET_HANDLERS;
var Processors = {
  processGeojson: processGeojson,
  processCsvData: processCsvData,
  processRowObject: processRowObject,
  processKeplerglJSON: processKeplerglJSON,
  processKeplerglDataset: processKeplerglDataset,
  analyzerTypeToFieldType: analyzerTypeToFieldType,
  getFieldsFromData: getFieldsFromData,
  parseCsvRowsByFieldType: parseCsvRowsByFieldType,
  formatCsv: formatCsv
};
exports.Processors = Processors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yLmpzIl0sIm5hbWVzIjpbIkFDQ0VQVEVEX0FOQUxZWkVSX1RZUEVTIiwiQW5hbHl6ZXJEQVRBX1RZUEVTIiwiREFURSIsIlRJTUUiLCJEQVRFVElNRSIsIk5VTUJFUiIsIklOVCIsIkZMT0FUIiwiQk9PTEVBTiIsIlNUUklORyIsIkdFT01FVFJZIiwiR0VPTUVUUllfRlJPTV9TVFJJTkciLCJQQUlSX0dFT01FVFJZX0ZST01fU1RSSU5HIiwiWklQQ09ERSIsIkFSUkFZIiwiT0JKRUNUIiwiQ1NWX05VTExTIiwiSUdOT1JFX0RBVEFfVFlQRVMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwidHlwZSIsImluY2x1ZGVzIiwiUEFSU0VfRklFTERfVkFMVUVfRlJPTV9TVFJJTkciLCJBTExfRklFTERfVFlQRVMiLCJ2YWxpZCIsImQiLCJwYXJzZSIsImludGVnZXIiLCJwYXJzZUludCIsInRpbWVzdGFtcCIsImZpZWxkIiwiZm9ybWF0IiwiTnVtYmVyIiwicmVhbCIsInBhcnNlRmxvYXQiLCJwcm9jZXNzQ3N2RGF0YSIsInJhd0RhdGEiLCJoZWFkZXIiLCJyb3dzIiwiaGVhZGVyUm93IiwicGFyc2VkUm93cyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkVycm9yIiwic2xpY2UiLCJjbGVhblVwRmFsc3lDc3ZWYWx1ZSIsInNhbXBsZSIsImdldFNhbXBsZUZvclR5cGVBbmFseXplIiwiZmllbGRzIiwiYWxsRGF0YSIsImdldEZpZWxkc0Zyb21EYXRhIiwicGFyc2VSb3dzQnlGaWVsZHMiLCJnZW9qc29uRmllbGRJZHgiLCJmaW5kSW5kZXgiLCJmIiwibmFtZSIsImZvckVhY2giLCJwYXJzZUNzdlJvd3NCeUZpZWxkVHlwZSIsImJpbmQiLCJzYW1wbGVDb3VudCIsInRvdGFsIiwiTWF0aCIsIm1pbiIsIm1hcCIsImZpZWxkSWR4IiwiaSIsImoiLCJ0cmltIiwicmUiLCJSZWdFeHAiLCJtYXRjaCIsImdlb0ZpZWxkSWR4IiwicGFyc2VyIiwiZmlyc3QiLCJmaW5kIiwiciIsInJvdyIsInByb3BlcnRpZXMiLCJkYXRhIiwiZmllbGRPcmRlciIsIm1ldGFkYXRhIiwiQW5hbHl6ZXIiLCJjb21wdXRlQ29sTWV0YSIsInJlZ2V4IiwiZGF0YVR5cGUiLCJpZ25vcmVkRGF0YVR5cGVzIiwicmVuYW1lRHVwbGljYXRlRmllbGRzIiwiZmllbGRCeUluZGV4IiwicmVzdWx0IiwiaW5kZXgiLCJmaWVsZE1ldGEiLCJtIiwia2V5IiwiYW5hbHl6ZXJUeXBlVG9GaWVsZFR5cGUiLCJhbmFseXplclR5cGUiLCJ2YWx1ZUFjY2Vzc29yIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjdSIsImFsbE5hbWVzIiwiZmllbGROYW1lIiwiY291bnRlciIsInB1c2giLCJhVHlwZSIsImRhdGUiLCJnZW9qc29uIiwic3RyaW5nIiwiZ2xvYmFsQ29uc29sZSIsIndhcm4iLCJwcm9jZXNzUm93T2JqZWN0IiwicHJvY2Vzc0dlb2pzb24iLCJub3JtYWxpemVkR2VvanNvbiIsImZlYXR1cmVzIiwiZXJyb3IiLCJHVUlERVNfRklMRV9GT1JNQVRfRE9DIiwiYWxsRGF0YVJvd3MiLCJnZW9tZXRyeSIsIl9nZW9qc29uIiwicHJldiIsImN1cnIiLCJmb3JtYXRDc3YiLCJjb2x1bW5zIiwiZm9ybWF0dGVkRGF0YSIsInZhbGlkYXRlSW5wdXREYXRhIiwiYWxsVmFsaWQiLCJldmVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaW5kTm9uRW1wdHlSb3dzQXRGaWVsZCIsInRzIiwiYW5hbHl6ZWRUeXBlIiwiY2F0ZWdvcnkiLCJzYW1wbGVEYXRhIiwibWV0YSIsInVwZGF0ZWRGaWVsZHMiLCJwcm9jZXNzS2VwbGVyZ2xKU09OIiwiS2VwbGVyR2xTY2hlbWEiLCJsb2FkIiwiZGF0YXNldHMiLCJjb25maWciLCJwcm9jZXNzS2VwbGVyZ2xEYXRhc2V0IiwicmVzdWx0cyIsInBhcnNlU2F2ZWREYXRhIiwiREFUQVNFVF9IQU5ETEVSUyIsIkRBVEFT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RCxJQUF6RTtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLHNCQUFULENBQWdDekcsT0FBaEMsRUFBeUM7QUFDOUMsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFNMEcsT0FBTyxHQUFHTCxvQkFBZU0sY0FBZixDQUE4QixvQkFBUTNHLE9BQVIsQ0FBOUIsQ0FBaEI7O0FBQ0EsTUFBSSxDQUFDMEcsT0FBTCxFQUFjO0FBQ1osV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBT3JHLEtBQUssQ0FBQ0MsT0FBTixDQUFjTixPQUFkLElBQXlCMEcsT0FBekIsR0FBbUNBLE9BQU8sQ0FBQyxDQUFELENBQWpEO0FBQ0Q7O0FBRU0sSUFBTUUsZ0JBQWdCLGdGQUMxQkMsaUNBQWdCcEUsR0FEVSxFQUNKaUMsZ0JBREksdURBRTFCbUMsaUNBQWdCdkMsT0FGVSxFQUVBSyxjQUZBLHVEQUcxQmtDLGlDQUFnQkMsR0FIVSxFQUdKL0csY0FISSx1REFJMUI4RyxpQ0FBZ0JFLFFBSlUsRUFJQ04sc0JBSkQscUJBQXRCOztBQU9BLElBQU1PLFVBQVUsR0FBRztBQUN4QnJDLEVBQUFBLGNBQWMsRUFBZEEsY0FEd0I7QUFFeEI1RSxFQUFBQSxjQUFjLEVBQWRBLGNBRndCO0FBR3hCMkUsRUFBQUEsZ0JBQWdCLEVBQWhCQSxnQkFId0I7QUFJeEIwQixFQUFBQSxtQkFBbUIsRUFBbkJBLG1CQUp3QjtBQUt4QkssRUFBQUEsc0JBQXNCLEVBQXRCQSxzQkFMd0I7QUFNeEIvQyxFQUFBQSx1QkFBdUIsRUFBdkJBLHVCQU53QjtBQU94QjNDLEVBQUFBLGlCQUFpQixFQUFqQkEsaUJBUHdCO0FBUXhCTyxFQUFBQSx1QkFBdUIsRUFBdkJBLHVCQVJ3QjtBQVN4QitELEVBQUFBLFNBQVMsRUFBVEE7QUFUd0IsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NzdlBhcnNlUm93cywgY3N2Rm9ybWF0Um93c30gZnJvbSAnZDMtZHN2JztcbmltcG9ydCB7cmFuZ2V9IGZyb20gJ2QzLWFycmF5JztcbmltcG9ydCB7Y29uc29sZSBhcyBnbG9iYWxDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCB7QW5hbHl6ZXIsIERBVEFfVFlQRVMgYXMgQW5hbHl6ZXJEQVRBX1RZUEVTfSBmcm9tICd0eXBlLWFuYWx5emVyJztcbmltcG9ydCBub3JtYWxpemUgZnJvbSAnQG1hcGJveC9nZW9qc29uLW5vcm1hbGl6ZSc7XG5pbXBvcnQge0FMTF9GSUVMRF9UWVBFUywgREFUQVNFVF9GT1JNQVRTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge25vdE51bGxvclVuZGVmaW5lZCwgcGFyc2VGaWVsZFZhbHVlfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tICdzY2hlbWFzJztcbmltcG9ydCB7R1VJREVTX0ZJTEVfRk9STUFUX0RPQ30gZnJvbSAnY29uc3RhbnRzL3VzZXItZ3VpZGVzJztcbmltcG9ydCB7aXNQbGFpbk9iamVjdCwgdG9BcnJheX0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgQUNDRVBURURfQU5BTFlaRVJfVFlQRVMgPSBbXG4gIEFuYWx5emVyREFUQV9UWVBFUy5EQVRFLFxuICBBbmFseXplckRBVEFfVFlQRVMuVElNRSxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLkRBVEVUSU1FLFxuICBBbmFseXplckRBVEFfVFlQRVMuTlVNQkVSLFxuICBBbmFseXplckRBVEFfVFlQRVMuSU5ULFxuICBBbmFseXplckRBVEFfVFlQRVMuRkxPQVQsXG4gIEFuYWx5emVyREFUQV9UWVBFUy5CT09MRUFOLFxuICBBbmFseXplckRBVEFfVFlQRVMuU1RSSU5HLFxuICBBbmFseXplckRBVEFfVFlQRVMuR0VPTUVUUlksXG4gIEFuYWx5emVyREFUQV9UWVBFUy5HRU9NRVRSWV9GUk9NX1NUUklORyxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLlBBSVJfR0VPTUVUUllfRlJPTV9TVFJJTkcsXG4gIEFuYWx5emVyREFUQV9UWVBFUy5aSVBDT0RFLFxuICBBbmFseXplckRBVEFfVFlQRVMuQVJSQVksXG4gIEFuYWx5emVyREFUQV9UWVBFUy5PQkpFQ1Rcbl07XG5cbi8vIGlmIGFueSBvZiB0aGVzZSB2YWx1ZSBvY2N1cnMgaW4gY3N2LCBwYXJzZSBpdCB0byBudWxsO1xuLy8gY29uc3QgQ1NWX05VTExTID0gWycnLCAnbnVsbCcsICdOVUxMJywgJ051bGwnLCAnTmFOJywgJy9OJ107XG4vLyBtYXRjaGVzIGVtcHR5IHN0cmluZ1xuZXhwb3J0IGNvbnN0IENTVl9OVUxMUyA9IC9eKG51bGx8TlVMTHxOdWxsfE5hTnxcXC9OfHwpJC87XG5cbmNvbnN0IElHTk9SRV9EQVRBX1RZUEVTID0gT2JqZWN0LmtleXMoQW5hbHl6ZXJEQVRBX1RZUEVTKS5maWx0ZXIoXG4gIHR5cGUgPT4gIUFDQ0VQVEVEX0FOQUxZWkVSX1RZUEVTLmluY2x1ZGVzKHR5cGUpXG4pO1xuXG5leHBvcnQgY29uc3QgUEFSU0VfRklFTERfVkFMVUVfRlJPTV9TVFJJTkcgPSB7XG4gIFtBTExfRklFTERfVFlQRVMuYm9vbGVhbl06IHtcbiAgICB2YWxpZDogZCA9PiB0eXBlb2YgZCA9PT0gJ2Jvb2xlYW4nLFxuICAgIHBhcnNlOiBkID0+IGQgPT09ICd0cnVlJyB8fCBkID09PSAnVHJ1ZScgfHwgZCA9PT0gJ1RSVUUnIHx8IGQgPT09ICcxJ1xuICB9LFxuICBbQUxMX0ZJRUxEX1RZUEVTLmludGVnZXJdOiB7XG4gICAgdmFsaWQ6IGQgPT4gcGFyc2VJbnQoZCwgMTApID09PSBkLFxuICAgIHBhcnNlOiBkID0+IHBhcnNlSW50KGQsIDEwKVxuICB9LFxuICBbQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcF06IHtcbiAgICB2YWxpZDogKGQsIGZpZWxkKSA9PlxuICAgICAgWyd4JywgJ1gnXS5pbmNsdWRlcyhmaWVsZC5mb3JtYXQpID8gdHlwZW9mIGQgPT09ICdudW1iZXInIDogdHlwZW9mIGQgPT09ICdzdHJpbmcnLFxuICAgIHBhcnNlOiAoZCwgZmllbGQpID0+IChbJ3gnLCAnWCddLmluY2x1ZGVzKGZpZWxkLmZvcm1hdCkgPyBOdW1iZXIoZCkgOiBkKVxuICB9LFxuICBbQUxMX0ZJRUxEX1RZUEVTLnJlYWxdOiB7XG4gICAgdmFsaWQ6IGQgPT4gcGFyc2VGbG9hdChkKSA9PT0gZCxcbiAgICAvLyBOb3RlIHRoaXMgd2lsbCByZXN1bHQgaW4gTmFOIGZvciBzb21lIHN0cmluZ1xuICAgIHBhcnNlOiBwYXJzZUZsb2F0XG4gIH1cbn07XG5cbi8qKlxuICogUHJvY2VzcyBjc3YgZGF0YSwgb3V0cHV0IGEgZGF0YSBvYmplY3Qgd2l0aCBge2ZpZWxkczogW10sIHJvd3M6IFtdfWAuXG4gKiBUaGUgZGF0YSBvYmplY3QgY2FuIGJlIHdyYXBwZWQgaW4gYSBgZGF0YXNldGAgYW5kIHBhc3MgdG8gW2BhZGREYXRhVG9NYXBgXSguLi9hY3Rpb25zL2FjdGlvbnMubWQjYWRkZGF0YXRvbWFwKVxuICogQHBhcmFtIHJhd0RhdGEgcmF3IGNzdiBzdHJpbmdcbiAqIEByZXR1cm5zICBkYXRhIG9iamVjdCBge2ZpZWxkczogW10sIHJvd3M6IFtdfWAgY2FuIGJlIHBhc3NlZCB0byBhZGREYXRhVG9NYXBzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXByb2Nlc3NvcicpLnByb2Nlc3NDc3ZEYXRhfVxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7cHJvY2Vzc0NzdkRhdGF9IGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcbiAqXG4gKiBjb25zdCB0ZXN0RGF0YSA9IGBncHNfZGF0YS51dGNfdGltZXN0YW1wLGdwc19kYXRhLmxhdCxncHNfZGF0YS5sbmcsZ3BzX2RhdGEudHlwZXMsZXBvY2gsaGFzX3Jlc3VsdCxpZCx0aW1lLGJlZ2ludHJpcF90c191dGMsYmVnaW50cmlwX3RzX2xvY2FsLGRhdGVcbiAqIDIwMTYtMDktMTcgMDA6MDk6NTUsMjkuOTkwMDkzNywzMS4yNTkwNTQyLGRyaXZlcl9hbmFseXRpY3MsMTQ3MjY4ODAwMDAwMCxGYWxzZSwxLDIwMTYtMDktMjNUMDA6MDA6MDAuMDAwWiwyMDE2LTEwLTAxIDA5OjQxOjM5KzAwOjAwLDIwMTYtMTAtMDEgMDk6NDE6MzkrMDA6MDAsMjAxNi0wOS0yM1xuICogMjAxNi0wOS0xNyAwMDoxMDo1NiwyOS45OTI3Njk5LDMxLjI0NjExNDIsZHJpdmVyX2FuYWx5dGljcywxNDcyNjg4MDAwMDAwLEZhbHNlLDIsMjAxNi0wOS0yM1QwMDowMDowMC4wMDBaLDIwMTYtMTAtMDEgMDk6NDY6MzcrMDA6MDAsMjAxNi0xMC0wMSAxNjo0NjozNyswMDowMCwyMDE2LTA5LTIzXG4gKiAyMDE2LTA5LTE3IDAwOjExOjU2LDI5Ljk5MDcyNjEsMzEuMjMxMjc0Mixkcml2ZXJfYW5hbHl0aWNzLDE0NzI2ODgwMDAwMDAsRmFsc2UsMywyMDE2LTA5LTIzVDAwOjAwOjAwLjAwMFosLCwyMDE2LTA5LTIzXG4gKiAyMDE2LTA5LTE3IDAwOjEyOjU4LDI5Ljk4NzAwNzQsMzEuMjE3NTgyNyxkcml2ZXJfYW5hbHl0aWNzLDE0NzI2ODgwMDAwMDAsRmFsc2UsNCwyMDE2LTA5LTIzVDAwOjAwOjAwLjAwMFosLCwyMDE2LTA5LTIzYFxuICpcbiAqIGNvbnN0IGRhdGFzZXQgPSB7XG4gKiAgaW5mbzoge2lkOiAndGVzdF9kYXRhJywgbGFiZWw6ICdNeSBDc3YnfSxcbiAqICBkYXRhOiBwcm9jZXNzQ3N2RGF0YSh0ZXN0RGF0YSlcbiAqIH07XG4gKlxuICogZGlzcGF0Y2goYWRkRGF0YVRvTWFwKHtcbiAqICBkYXRhc2V0czogW2RhdGFzZXRdLFxuICogIG9wdGlvbnM6IHtjZW50ZXJNYXA6IHRydWUsIHJlYWRPbmx5OiB0cnVlfVxuICogfSkpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0NzdkRhdGEocmF3RGF0YSwgaGVhZGVyKSB7XG4gIGxldCByb3dzO1xuICBsZXQgaGVhZGVyUm93O1xuXG4gIGlmICh0eXBlb2YgcmF3RGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBwYXJzZWRSb3dzID0gY3N2UGFyc2VSb3dzKHJhd0RhdGEpO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBhcnNlZFJvd3MpIHx8IHBhcnNlZFJvd3MubGVuZ3RoIDwgMikge1xuICAgICAgLy8gbG9va3MgbGlrZSBhbiBlbXB0eSBmaWxlLCB0aHJvdyBlcnJvciB0byBiZSBjYXRjaFxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzIENzdiBEYXRhIEZhaWxlZDogQ1NWIGlzIGVtcHR5Jyk7XG4gICAgfVxuICAgIGhlYWRlclJvdyA9IHBhcnNlZFJvd3NbMF07XG4gICAgcm93cyA9IHBhcnNlZFJvd3Muc2xpY2UoMSk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyYXdEYXRhKSAmJiByYXdEYXRhLmxlbmd0aCkge1xuICAgIHJvd3MgPSByYXdEYXRhO1xuICAgIGhlYWRlclJvdyA9IGhlYWRlcjtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShoZWFkZXJSb3cpKSB7XG4gICAgICAvLyBpZiBkYXRhIGlzIHBhc3NlZCBpbiBhcyBhcnJheSBvZiByb3dzIGFuZCBtaXNzaW5nIGhlYWRlclxuICAgICAgLy8gYXNzdW1lIGZpcnN0IHJvdyBpcyBoZWFkZXJcbiAgICAgIGhlYWRlclJvdyA9IHJhd0RhdGFbMF07XG4gICAgICByb3dzID0gcmF3RGF0YS5zbGljZSgxKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXJvd3MgfHwgIWhlYWRlclJvdykge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbnB1dCBwYXNzZWQgdG8gcHJvY2Vzc0NzdkRhdGEnKTtcbiAgfVxuXG4gIC8vIGhlcmUgd2UgYXNzdW1lIHRoZSBjc3YgZmlsZSB0aGF0IHBlb3BsZSB1cGxvYWRlZCB3aWxsIGhhdmUgZmlyc3Qgcm93XG4gIC8vIGFzIG5hbWUgb2YgdGhlIGNvbHVtblxuXG4gIGNsZWFuVXBGYWxzeUNzdlZhbHVlKHJvd3MpO1xuICAvLyBObyBuZWVkIHRvIHJ1biB0eXBlIGRldGVjdGlvbiBvbiBldmVyeSBkYXRhIHBvaW50XG4gIC8vIGhlcmUgd2UgZ2V0IGEgbGlzdCBvZiBub25lIG51bGwgdmFsdWVzIHRvIHJ1biBhbmFseXplIG9uXG4gIGNvbnN0IHNhbXBsZSA9IGdldFNhbXBsZUZvclR5cGVBbmFseXplKHtmaWVsZHM6IGhlYWRlclJvdywgYWxsRGF0YTogcm93c30pO1xuICBjb25zdCBmaWVsZHMgPSBnZXRGaWVsZHNGcm9tRGF0YShzYW1wbGUsIGhlYWRlclJvdyk7XG4gIGNvbnN0IHBhcnNlZFJvd3MgPSBwYXJzZVJvd3NCeUZpZWxkcyhyb3dzLCBmaWVsZHMpO1xuXG4gIHJldHVybiB7ZmllbGRzLCByb3dzOiBwYXJzZWRSb3dzfTtcbn1cblxuLyoqXG4gKiBQYXJzZSByb3dzIG9mIGNzdiBieSBhbmFseXplZCBmaWVsZCB0eXBlcy4gU28gdGhhdCBgJzEnYCAtPiBgMWAsIGAnVHJ1ZSdgIC0+IGB0cnVlYFxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IHJvd3NcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZmllbGRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJvd3NCeUZpZWxkcyhyb3dzLCBmaWVsZHMpIHtcbiAgLy8gRWRpdCByb3dzIGluIHBsYWNlXG4gIGNvbnN0IGdlb2pzb25GaWVsZElkeCA9IGZpZWxkcy5maW5kSW5kZXgoZiA9PiBmLm5hbWUgPT09ICdfZ2VvanNvbicpO1xuICBmaWVsZHMuZm9yRWFjaChwYXJzZUNzdlJvd3NCeUZpZWxkVHlwZS5iaW5kKG51bGwsIHJvd3MsIGdlb2pzb25GaWVsZElkeCkpO1xuXG4gIHJldHVybiByb3dzO1xufVxuLyoqXG4gKiBHZXR0aW5nIHNhbXBsZSBkYXRhIGZvciBhbmFseXppbmcgZmllbGQgdHlwZS5cbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXByb2Nlc3NvcicpLmdldFNhbXBsZUZvclR5cGVBbmFseXplfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2FtcGxlRm9yVHlwZUFuYWx5emUoe2ZpZWxkcywgYWxsRGF0YSwgc2FtcGxlQ291bnQgPSA1MH0pIHtcbiAgY29uc3QgdG90YWwgPSBNYXRoLm1pbihzYW1wbGVDb3VudCwgYWxsRGF0YS5sZW5ndGgpO1xuICAvLyBjb25zdCBmaWVsZE9yZGVyID0gZmllbGRzLm1hcChmID0+IGYubmFtZSk7XG4gIGNvbnN0IHNhbXBsZSA9IHJhbmdlKDAsIHRvdGFsLCAxKS5tYXAoZCA9PiAoe30pKTtcblxuICAvLyBjb2xsZWN0IHNhbXBsZSBkYXRhIGZvciBlYWNoIGZpZWxkXG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCwgZmllbGRJZHgpID0+IHtcbiAgICAvLyBkYXRhIGNvdW50ZXJcbiAgICBsZXQgaSA9IDA7XG4gICAgLy8gc2FtcGxlIGNvdW50ZXJcbiAgICBsZXQgaiA9IDA7XG5cbiAgICB3aGlsZSAoaiA8IHRvdGFsKSB7XG4gICAgICBpZiAoaSA+PSBhbGxEYXRhLmxlbmd0aCkge1xuICAgICAgICAvLyBpZiBkZXBsZXRlZCBkYXRhIHBvb2xcbiAgICAgICAgc2FtcGxlW2pdW2ZpZWxkXSA9IG51bGw7XG4gICAgICAgIGorKztcbiAgICAgIH0gZWxzZSBpZiAobm90TnVsbG9yVW5kZWZpbmVkKGFsbERhdGFbaV1bZmllbGRJZHhdKSkge1xuICAgICAgICBzYW1wbGVbal1bZmllbGRdID1cbiAgICAgICAgICB0eXBlb2YgYWxsRGF0YVtpXVtmaWVsZElkeF0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IGFsbERhdGFbaV1bZmllbGRJZHhdLnRyaW0oKVxuICAgICAgICAgICAgOiBhbGxEYXRhW2ldW2ZpZWxkSWR4XTtcbiAgICAgICAgaisrO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc2FtcGxlO1xufVxuXG4vKipcbiAqIENvbnZlcnQgZmFsc3kgdmFsdWUgaW4gY3N2IGluY2x1ZGluZyBgJycsICdudWxsJywgJ05VTEwnLCAnTnVsbCcsICdOYU4nYCB0byBgbnVsbGAsXG4gKiBzbyB0aGF0IHR5cGUtYW5hbHl6ZXIgd29uJ3QgZGV0ZWN0IGl0IGFzIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSByb3dzXG4gKi9cbmZ1bmN0aW9uIGNsZWFuVXBGYWxzeUNzdlZhbHVlKHJvd3MpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKENTVl9OVUxMUywgJ2cnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBhbmFseXplciB3aWxsIHNldCBhbnkgZmllbGRzIHRvICdzdHJpbmcnIGlmIHRoZXJlIGFyZSBlbXB0eSB2YWx1ZXNcbiAgICAgIC8vIHdoaWNoIHdpbGwgYmUgcGFyc2VkIGFzICcnIGJ5IGQzLmNzdlxuICAgICAgLy8gaGVyZSB3ZSBwYXJzZSBlbXB0eSBkYXRhIGFzIG51bGxcbiAgICAgIC8vIFRPRE86IGNyZWF0ZSB3YXJuaW5nIHdoZW4gZGVsdGVjdCBgQ1NWX05VTExTYCBpbiB0aGUgZGF0YVxuICAgICAgaWYgKHR5cGVvZiByb3dzW2ldW2pdID09PSAnc3RyaW5nJyAmJiByb3dzW2ldW2pdLm1hdGNoKHJlKSkge1xuICAgICAgICByb3dzW2ldW2pdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQcm9jZXNzIHVwbG9hZGVkIGNzdiBmaWxlIHRvIHBhcnNlIHZhbHVlIGJ5IGZpZWxkIHR5cGVcbiAqXG4gKiBAcGFyYW0gcm93c1xuICogQHBhcmFtIGdlb0ZpZWxkSWR4IGZpZWxkIGluZGV4XG4gKiBAcGFyYW0gZmllbGRcbiAqIEBwYXJhbSBpXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXByb2Nlc3NvcicpLnBhcnNlQ3N2Um93c0J5RmllbGRUeXBlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGUocm93cywgZ2VvRmllbGRJZHgsIGZpZWxkLCBpKSB7XG4gIGNvbnN0IHBhcnNlciA9IFBBUlNFX0ZJRUxEX1ZBTFVFX0ZST01fU1RSSU5HW2ZpZWxkLnR5cGVdO1xuICBpZiAocGFyc2VyKSB7XG4gICAgLy8gY2hlY2sgZmlyc3Qgbm90IG51bGwgdmFsdWUgb2YgaXQncyBhbHJlYWR5IHBhcnNlZFxuICAgIGNvbnN0IGZpcnN0ID0gcm93cy5maW5kKHIgPT4gbm90TnVsbG9yVW5kZWZpbmVkKHJbaV0pKTtcbiAgICBpZiAoIWZpcnN0IHx8IHBhcnNlci52YWxpZChmaXJzdFtpXSwgZmllbGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgLy8gcGFyc2Ugc3RyaW5nIHZhbHVlIGJhc2VkIG9uIGZpZWxkIHR5cGVcbiAgICAgIGlmIChyb3dbaV0gIT09IG51bGwpIHtcbiAgICAgICAgcm93W2ldID0gcGFyc2VyLnBhcnNlKHJvd1tpXSwgZmllbGQpO1xuICAgICAgICBpZiAoZ2VvRmllbGRJZHggPiAtMSAmJiByb3dbZ2VvRmllbGRJZHhdICYmIHJvd1tnZW9GaWVsZElkeF0ucHJvcGVydGllcykge1xuICAgICAgICAgIHJvd1tnZW9GaWVsZElkeF0ucHJvcGVydGllc1tmaWVsZC5uYW1lXSA9IHJvd1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQW5hbHl6ZSBmaWVsZCB0eXBlcyBmcm9tIGRhdGEgaW4gYHN0cmluZ2AgZm9ybWF0LCBlLmcuIHVwbG9hZGVkIGNzdi5cbiAqIEFzc2lnbiBgdHlwZWAsIGBmaWVsZElkeGAgYW5kIGBmb3JtYXRgICh0aW1lc3RhbXAgb25seSkgdG8gZWFjaCBmaWVsZFxuICpcbiAqIEBwYXJhbSBkYXRhIGFycmF5IG9mIHJvdyBvYmplY3RcbiAqIEBwYXJhbSBmaWVsZE9yZGVyIGFycmF5IG9mIGZpZWxkIG5hbWVzIGFzIHN0cmluZ1xuICogQHJldHVybnMgZm9ybWF0dGVkIGZpZWxkc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5nZXRGaWVsZHNGcm9tRGF0YX1cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IHtnZXRGaWVsZHNGcm9tRGF0YX0gZnJvbSAna2VwbGVyLmdsL3Byb2Nlc3NvcnMnO1xuICogY29uc3QgZGF0YSA9IFt7XG4gKiAgIHRpbWU6ICcyMDE2LTA5LTE3IDAwOjA5OjU1JyxcbiAqICAgdmFsdWU6ICc0JyxcbiAqICAgc3VyZ2U6ICcxLjInLFxuICogICBpc1RyaXA6ICd0cnVlJyxcbiAqICAgemVyb09uZXM6ICcwJ1xuICogfSwge1xuICogICB0aW1lOiAnMjAxNi0wOS0xNyAwMDozMDowOCcsXG4gKiAgIHZhbHVlOiAnMycsXG4gKiAgIHN1cmdlOiBudWxsLFxuICogICBpc1RyaXA6ICdmYWxzZScsXG4gKiAgIHplcm9PbmVzOiAnMSdcbiAqIH0sIHtcbiAqICAgdGltZTogbnVsbCxcbiAqICAgdmFsdWU6ICcyJyxcbiAqICAgc3VyZ2U6ICcxLjMnLFxuICogICBpc1RyaXA6IG51bGwsXG4gKiAgIHplcm9PbmVzOiAnMSdcbiAqIH1dO1xuICpcbiAqIGNvbnN0IGZpZWxkT3JkZXIgPSBbJ3RpbWUnLCAndmFsdWUnLCAnc3VyZ2UnLCAnaXNUcmlwJywgJ3plcm9PbmVzJ107XG4gKiBjb25zdCBmaWVsZHMgPSBnZXRGaWVsZHNGcm9tRGF0YShkYXRhLCBmaWVsZE9yZGVyKTtcbiAqIC8vIGZpZWxkcyA9IFtcbiAqIC8vIHtuYW1lOiAndGltZScsIGZvcm1hdDogJ1lZWVktTS1EIEg6bTpzJywgZmllbGRJZHg6IDEsIHR5cGU6ICd0aW1lc3RhbXAnfSxcbiAqIC8vIHtuYW1lOiAndmFsdWUnLCBmb3JtYXQ6ICcnLCBmaWVsZElkeDogNCwgdHlwZTogJ2ludGVnZXInfSxcbiAqIC8vIHtuYW1lOiAnc3VyZ2UnLCBmb3JtYXQ6ICcnLCBmaWVsZElkeDogNSwgdHlwZTogJ3JlYWwnfSxcbiAqIC8vIHtuYW1lOiAnaXNUcmlwJywgZm9ybWF0OiAnJywgZmllbGRJZHg6IDYsIHR5cGU6ICdib29sZWFuJ30sXG4gKiAvLyB7bmFtZTogJ3plcm9PbmVzJywgZm9ybWF0OiAnJywgZmllbGRJZHg6IDcsIHR5cGU6ICdpbnRlZ2VyJ31dO1xuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpZWxkc0Zyb21EYXRhKGRhdGEsIGZpZWxkT3JkZXIpIHtcbiAgLy8gYWRkIGEgY2hlY2sgZm9yIGVwb2NoIHRpbWVzdGFtcFxuICBjb25zdCBtZXRhZGF0YSA9IEFuYWx5emVyLmNvbXB1dGVDb2xNZXRhKFxuICAgIGRhdGEsXG4gICAgW1xuICAgICAge3JlZ2V4OiAvLipnZW9qc29ufGFsbF9wb2ludHMvZywgZGF0YVR5cGU6ICdHRU9NRVRSWSd9LFxuICAgICAge3JlZ2V4OiAvLipjZW5zdXMvZywgZGF0YVR5cGU6ICdTVFJJTkcnfVxuICAgIF0sXG4gICAge2lnbm9yZWREYXRhVHlwZXM6IElHTk9SRV9EQVRBX1RZUEVTfVxuICApO1xuXG4gIGNvbnN0IHtmaWVsZEJ5SW5kZXh9ID0gcmVuYW1lRHVwbGljYXRlRmllbGRzKGZpZWxkT3JkZXIpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGZpZWxkT3JkZXIubWFwKChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZmllbGRCeUluZGV4W2luZGV4XTtcblxuICAgIGNvbnN0IGZpZWxkTWV0YSA9IG1ldGFkYXRhLmZpbmQobSA9PiBtLmtleSA9PT0gZmllbGQpO1xuICAgIGNvbnN0IHt0eXBlLCBmb3JtYXR9ID0gZmllbGRNZXRhIHx8IHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBmb3JtYXQsXG4gICAgICBmaWVsZElkeDogaW5kZXgsXG4gICAgICB0eXBlOiBhbmFseXplclR5cGVUb0ZpZWxkVHlwZSh0eXBlKSxcbiAgICAgIGFuYWx5emVyVHlwZTogdHlwZSxcbiAgICAgIHZhbHVlQWNjZXNzb3I6IHZhbHVlcyA9PiB2YWx1ZXNbaW5kZXhdXG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIHBhc3MgaW4gYW4gYXJyYXkgb2YgZmllbGQgbmFtZXMsIHJlbmFtZSBkdXBsaWNhdGVkIG9uZVxuICogYW5kIHJldHVybiBhIG1hcCBmcm9tIG9sZCBmaWVsZCBpbmRleCB0byBuZXcgbmFtZVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGZpZWxkT3JkZXJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5ldyBmaWVsZCBuYW1lIGJ5IGluZGV4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVEdXBsaWNhdGVGaWVsZHMoZmllbGRPcmRlcikge1xuICByZXR1cm4gZmllbGRPcmRlci5yZWR1Y2UoXG4gICAgKGFjY3UsIGZpZWxkLCBpKSA9PiB7XG4gICAgICBjb25zdCB7YWxsTmFtZXN9ID0gYWNjdTtcbiAgICAgIGxldCBmaWVsZE5hbWUgPSBmaWVsZDtcblxuICAgICAgLy8gYWRkIGEgY291bnRlciB0byBkdXBsaWNhdGVkIG5hbWVzXG4gICAgICBpZiAoYWxsTmFtZXMuaW5jbHVkZXMoZmllbGQpKSB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgd2hpbGUgKGFsbE5hbWVzLmluY2x1ZGVzKGAke2ZpZWxkfS0ke2NvdW50ZXJ9YCkpIHtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGROYW1lID0gYCR7ZmllbGR9LSR7Y291bnRlcn1gO1xuICAgICAgfVxuXG4gICAgICBhY2N1LmZpZWxkQnlJbmRleFtpXSA9IGZpZWxkTmFtZTtcbiAgICAgIGFjY3UuYWxsTmFtZXMucHVzaChmaWVsZE5hbWUpO1xuXG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9LFxuICAgIHthbGxOYW1lczogW10sIGZpZWxkQnlJbmRleDoge319XG4gICk7XG59XG5cbi8qKlxuICogQ29udmVydCB0eXBlLWFuYWx5emVyIG91dHB1dCB0byBrZXBsZXIuZ2wgZmllbGQgdHlwZXNcbiAqXG4gKiBAcGFyYW0gYVR5cGVcbiAqIEByZXR1cm5zIGNvcnJlc3BvbmRpbmcgdHlwZSBpbiBgQUxMX0ZJRUxEX1RZUEVTYFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5hbmFseXplclR5cGVUb0ZpZWxkVHlwZX19XG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXplclR5cGVUb0ZpZWxkVHlwZShhVHlwZSkge1xuICBjb25zdCB7XG4gICAgREFURSxcbiAgICBUSU1FLFxuICAgIERBVEVUSU1FLFxuICAgIE5VTUJFUixcbiAgICBJTlQsXG4gICAgRkxPQVQsXG4gICAgQk9PTEVBTixcbiAgICBTVFJJTkcsXG4gICAgR0VPTUVUUlksXG4gICAgR0VPTUVUUllfRlJPTV9TVFJJTkcsXG4gICAgUEFJUl9HRU9NRVRSWV9GUk9NX1NUUklORyxcbiAgICBaSVBDT0RFLFxuICAgIEFSUkFZLFxuICAgIE9CSkVDVFxuICB9ID0gQW5hbHl6ZXJEQVRBX1RZUEVTO1xuXG4gIC8vIFRPRE86IHVuIHJlY29nbml6ZWQgdHlwZXNcbiAgLy8gQ1VSUkVOQ1kgUEVSQ0VOVCBOT05FXG4gIHN3aXRjaCAoYVR5cGUpIHtcbiAgICBjYXNlIERBVEU6XG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLmRhdGU7XG4gICAgY2FzZSBUSU1FOlxuICAgIGNhc2UgREFURVRJTUU6XG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDtcbiAgICBjYXNlIEZMT0FUOlxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5yZWFsO1xuICAgIGNhc2UgSU5UOlxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyO1xuICAgIGNhc2UgQk9PTEVBTjpcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMuYm9vbGVhbjtcbiAgICBjYXNlIEdFT01FVFJZOlxuICAgIGNhc2UgR0VPTUVUUllfRlJPTV9TVFJJTkc6XG4gICAgY2FzZSBQQUlSX0dFT01FVFJZX0ZST01fU1RSSU5HOlxuICAgIGNhc2UgQVJSQVk6XG4gICAgY2FzZSBPQkpFQ1Q6XG4gICAgICAvLyBUT0RPOiBjcmVhdGUgYSBuZXcgZGF0YSB0eXBlIGZvciBvYmplY3RzIGFuZCBhcnJheXNcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMuZ2VvanNvbjtcbiAgICBjYXNlIE5VTUJFUjpcbiAgICBjYXNlIFNUUklORzpcbiAgICBjYXNlIFpJUENPREU6XG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLnN0cmluZztcbiAgICBkZWZhdWx0OlxuICAgICAgZ2xvYmFsQ29uc29sZS53YXJuKGBVbnN1cHBvcnRlZCBhbmFseXplciB0eXBlOiAke2FUeXBlfWApO1xuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5zdHJpbmc7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG4vKipcbiAqIFByb2Nlc3MgZGF0YSB3aGVyZSBlYWNoIHJvdyBpcyBhbiBvYmplY3QsIG91dHB1dCBjYW4gYmUgcGFzc2VkIHRvIFtgYWRkRGF0YVRvTWFwYF0oLi4vYWN0aW9ucy9hY3Rpb25zLm1kI2FkZGRhdGF0b21hcClcbiAqIE5PVEU6IFRoaXMgZnVuY3Rpb24gbWF5IG11dGF0ZSBpbnB1dC5cbiAqIEBwYXJhbSByYXdEYXRhIGFuIGFycmF5IG9mIHJvdyBvYmplY3QsIGVhY2ggb2JqZWN0IHNob3VsZCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiBrZXlzXG4gKiBAcmV0dXJucyBkYXRhc2V0IGNvbnRhaW5pbmcgYGZpZWxkc2AgYW5kIGByb3dzYFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5wcm9jZXNzUm93T2JqZWN0fVxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4gKiBpbXBvcnQge3Byb2Nlc3NSb3dPYmplY3R9IGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcbiAqXG4gKiBjb25zdCBkYXRhID0gW1xuICogIHtsYXQ6IDMxLjI3LCBsbmc6IDEyNy41NiwgdmFsdWU6IDN9LFxuICogIHtsYXQ6IDMxLjIyLCBsbmc6IDEyNi4yNiwgdmFsdWU6IDF9XG4gKiBdO1xuICpcbiAqIGRpc3BhdGNoKGFkZERhdGFUb01hcCh7XG4gKiAgZGF0YXNldHM6IHtcbiAqICAgIGluZm86IHtsYWJlbDogJ015IERhdGEnLCBpZDogJ215X2RhdGEnfSxcbiAqICAgIGRhdGE6IHByb2Nlc3NSb3dPYmplY3QoZGF0YSlcbiAqICB9XG4gKiB9KSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUm93T2JqZWN0KHJhd0RhdGEpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHJhd0RhdGEpIHx8ICFyYXdEYXRhLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJhd0RhdGFbMF0pO1xuICBjb25zdCByb3dzID0gcmF3RGF0YS5tYXAoZCA9PiBrZXlzLm1hcChrZXkgPT4gZFtrZXldKSk7XG5cbiAgLy8gcm93IG9iamVjdCBhbiBzdGlsbCBjb250YWluIHZhbHVlcyBsaWtlIGBOdWxsYCBvciBgTi9BYFxuICBjbGVhblVwRmFsc3lDc3ZWYWx1ZShyb3dzKTtcblxuICByZXR1cm4gcHJvY2Vzc0NzdkRhdGEocm93cywga2V5cyk7XG59XG5cbi8qKlxuICogUHJvY2VzcyBHZW9KU09OIFtgRmVhdHVyZUNvbGxlY3Rpb25gXShodHRwOi8vd2lraS5nZW9qc29uLm9yZy9HZW9KU09OX2RyYWZ0X3ZlcnNpb25fNiNGZWF0dXJlQ29sbGVjdGlvbiksXG4gKiBvdXRwdXQgYSBkYXRhIG9iamVjdCB3aXRoIGB7ZmllbGRzOiBbXSwgcm93czogW119YC5cbiAqIFRoZSBkYXRhIG9iamVjdCBjYW4gYmUgd3JhcHBlZCBpbiBhIGBkYXRhc2V0YCBhbmQgcGFzc2VkIHRvIFtgYWRkRGF0YVRvTWFwYF0oLi4vYWN0aW9ucy9hY3Rpb25zLm1kI2FkZGRhdGF0b21hcClcbiAqIE5PVEU6IFRoaXMgZnVuY3Rpb24gbWF5IG11dGF0ZSBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gIHJhd0RhdGEgcmF3IGdlb2pzb24gZmVhdHVyZSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJucyAgZGF0YXNldCBjb250YWluaW5nIGBmaWVsZHNgIGFuZCBgcm93c2BcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtcHJvY2Vzc29yJykucHJvY2Vzc0dlb2pzb259XG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHthZGREYXRhVG9NYXB9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcbiAqIGltcG9ydCB7cHJvY2Vzc0dlb2pzb259IGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcbiAqXG4gKiBjb25zdCBnZW9qc29uID0ge1xuICogXHRcInR5cGVcIiA6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAqIFx0XCJmZWF0dXJlc1wiIDogW3tcbiAqIFx0XHRcInR5cGVcIiA6IFwiRmVhdHVyZVwiLFxuICogXHRcdFwicHJvcGVydGllc1wiIDoge1xuICogXHRcdFx0XCJjYXBhY2l0eVwiIDogXCIxMFwiLFxuICogXHRcdFx0XCJ0eXBlXCIgOiBcIlUtUmFja1wiXG4gKiBcdFx0fSxcbiAqIFx0XHRcImdlb21ldHJ5XCIgOiB7XG4gKiBcdFx0XHRcInR5cGVcIiA6IFwiUG9pbnRcIixcbiAqIFx0XHRcdFwiY29vcmRpbmF0ZXNcIiA6IFsgLTcxLjA3MzI4MywgNDIuNDE3NTAwIF1cbiAqIFx0XHR9XG4gKiBcdH1dXG4gKiB9O1xuICpcbiAqIGRpc3BhdGNoKGFkZERhdGFUb01hcCh7XG4gKiAgZGF0YXNldHM6IHtcbiAqICAgIGluZm86IHtcbiAqICAgICAgbGFiZWw6ICdTYW1wbGUgVGF4aSBUcmlwcyBpbiBOZXcgWW9yayBDaXR5JyxcbiAqICAgICAgaWQ6ICd0ZXN0X3RyaXBfZGF0YSdcbiAqICAgIH0sXG4gKiAgICBkYXRhOiBwcm9jZXNzR2VvanNvbihnZW9qc29uKVxuICogIH1cbiAqIH0pKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NHZW9qc29uKHJhd0RhdGEpIHtcbiAgY29uc3Qgbm9ybWFsaXplZEdlb2pzb24gPSBub3JtYWxpemUocmF3RGF0YSk7XG5cbiAgaWYgKCFub3JtYWxpemVkR2VvanNvbiB8fCAhQXJyYXkuaXNBcnJheShub3JtYWxpemVkR2VvanNvbi5mZWF0dXJlcykpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgIGBSZWFkIEZpbGUgRmFpbGVkOiBGaWxlIGlzIG5vdCBhIHZhbGlkIEdlb0pTT04uIFJlYWQgbW9yZSBhYm91dCBbc3VwcG9ydGVkIGZpbGUgZm9ybWF0XSgke0dVSURFU19GSUxFX0ZPUk1BVF9ET0N9KWBcbiAgICApO1xuICAgIHRocm93IGVycm9yO1xuICAgIC8vIGZhaWwgdG8gbm9ybWFsaXplIGdlb2pzb25cbiAgfVxuXG4gIC8vIGdldHRpbmcgYWxsIGZlYXR1cmUgZmllbGRzXG4gIGNvbnN0IGFsbERhdGFSb3dzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9ybWFsaXplZEdlb2pzb24uZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBmID0gbm9ybWFsaXplZEdlb2pzb24uZmVhdHVyZXNbaV07XG4gICAgaWYgKGYuZ2VvbWV0cnkpIHtcbiAgICAgIGFsbERhdGFSb3dzLnB1c2goe1xuICAgICAgICAvLyBhZGQgZmVhdHVyZSB0byBfZ2VvanNvbiBmaWVsZFxuICAgICAgICBfZ2VvanNvbjogZixcbiAgICAgICAgLi4uKGYucHJvcGVydGllcyB8fCB7fSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvLyBnZXQgYWxsIHRoZSBmaWVsZFxuICBjb25zdCBmaWVsZHMgPSBhbGxEYXRhUm93cy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICBPYmplY3Qua2V5cyhjdXJyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoIXByZXYuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBwcmV2LnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJldjtcbiAgfSwgW10pO1xuXG4gIC8vIG1ha2Ugc3VyZSBlYWNoIGZlYXR1cmUgaGFzIGV4YWN0IHNhbWUgZmllbGRzXG4gIGFsbERhdGFSb3dzLmZvckVhY2goZCA9PiB7XG4gICAgZmllbGRzLmZvckVhY2goZiA9PiB7XG4gICAgICBpZiAoIShmIGluIGQpKSB7XG4gICAgICAgIGRbZl0gPSBudWxsO1xuICAgICAgICBkLl9nZW9qc29uLnByb3BlcnRpZXNbZl0gPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcHJvY2Vzc1Jvd09iamVjdChhbGxEYXRhUm93cyk7XG59XG5cbi8qKlxuICogT24gZXhwb3J0IGRhdGEgdG8gY3N2XG4gKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gZGF0YSBgZGF0YXNldC5hbGxEYXRhYCBvciBmaWx0ZXJlZCBkYXRhIGBkYXRhc2V0LmRhdGFgXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkcyBgZGF0YXNldC5maWVsZHNgXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3Ygc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDc3YoZGF0YSwgZmllbGRzKSB7XG4gIGNvbnN0IGNvbHVtbnMgPSBmaWVsZHMubWFwKGYgPT4gZi5uYW1lKTtcbiAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IFtjb2x1bW5zXTtcblxuICAvLyBwYXJzZSBnZW9qc29uIG9iamVjdCBhcyBzdHJpbmdcbiAgZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgZm9ybWF0dGVkRGF0YS5wdXNoKHJvdy5tYXAoKGQsIGkpID0+IHBhcnNlRmllbGRWYWx1ZShkLCBmaWVsZHNbaV0udHlwZSkpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNzdkZvcm1hdFJvd3MoZm9ybWF0dGVkRGF0YSk7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgaW5wdXQgZGF0YSwgYWRkaW5nIG1pc3NpbmcgZmllbGQgdHlwZXMsIHJlbmFtZSBkdXBsaWNhdGUgY29sdW1uc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS52YWxpZGF0ZUlucHV0RGF0YX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXREYXRhKGRhdGEpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgYXNzZXJ0KCdhZGREYXRhVG9NYXAgRXJyb3I6IGRhdGFzZXQuZGF0YSBjYW5ub3QgYmUgbnVsbCcpO1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuZmllbGRzKSkge1xuICAgIGFzc2VydCgnYWRkRGF0YVRvTWFwIEVycm9yOiBleHBlY3QgZGF0YXNldC5kYXRhLmZpZWxkcyB0byBiZSBhbiBhcnJheScpO1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEucm93cykpIHtcbiAgICBhc3NlcnQoJ2FkZERhdGFUb01hcCBFcnJvcjogZXhwZWN0IGRhdGFzZXQuZGF0YS5yb3dzIHRvIGJlIGFuIGFycmF5Jyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB7ZmllbGRzLCByb3dzfSA9IGRhdGE7XG5cbiAgLy8gY2hlY2sgaWYgYWxsIGZpZWxkcyBoYXMgbmFtZSwgZm9ybWF0IGFuZCB0eXBlXG4gIGNvbnN0IGFsbFZhbGlkID0gZmllbGRzLmV2ZXJ5KChmLCBpKSA9PiB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGYpKSB7XG4gICAgICBhc3NlcnQoYGZpZWxkcyBuZWVkcyB0byBiZSBhbiBhcnJheSBvZiBvYmplY3QsIGJ1dCBmaW5kICR7dHlwZW9mIGZ9YCk7XG4gICAgICBmaWVsZHNbaV0gPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIWYubmFtZSkge1xuICAgICAgYXNzZXJ0KGBmaWVsZC5uYW1lIGlzIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGluICR7SlNPTi5zdHJpbmdpZnkoZil9YCk7XG4gICAgICAvLyBhc3NpZ24gYSBuYW1lXG4gICAgICBmaWVsZHNbaV0ubmFtZSA9IGBjb2x1bW5fJHtpfWA7XG4gICAgfVxuXG4gICAgaWYgKCFBTExfRklFTERfVFlQRVNbZi50eXBlXSkge1xuICAgICAgYXNzZXJ0KGB1bmtub3duIGZpZWxkIHR5cGUgJHtmLnR5cGV9YCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZHMuZXZlcnkoZmllbGQgPT4gZmllbGQuYW5hbHl6ZXJUeXBlKSkge1xuICAgICAgYXNzZXJ0KCdmaWVsZCBtaXNzaW5nIGFuYWx5emVyVHlwZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIHRpbWUgZm9ybWF0IGlzIGNvcnJlY3QgYmFzZWQgb24gZmlyc3QgMTAgbm90IGVtcHR5IGVsZW1lbnRcbiAgICBpZiAoZi50eXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wKSB7XG4gICAgICBjb25zdCBzYW1wbGUgPSBmaW5kTm9uRW1wdHlSb3dzQXRGaWVsZChyb3dzLCBpLCAxMCkubWFwKHIgPT4gKHt0czogcltpXX0pKTtcbiAgICAgIGNvbnN0IGFuYWx5emVkVHlwZSA9IEFuYWx5emVyLmNvbXB1dGVDb2xNZXRhKHNhbXBsZSlbMF07XG4gICAgICByZXR1cm4gYW5hbHl6ZWRUeXBlICYmIGFuYWx5emVkVHlwZS5jYXRlZ29yeSA9PT0gJ1RJTUUnICYmIGFuYWx5emVkVHlwZS5mb3JtYXQgPT09IGYuZm9ybWF0O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICBpZiAoYWxsVmFsaWQpIHtcbiAgICByZXR1cm4ge3Jvd3MsIGZpZWxkc307XG4gIH1cblxuICAvLyBpZiBhbnkgZmllbGQgaGFzIG1pc3NpbmcgdHlwZSwgcmVjYWxjdWxhdGUgaXQgZm9yIGV2ZXJ5b25lXG4gIC8vIGJlY2F1c2Ugd2Ugc2ltcGx5IGxvc3QgZmFpdGggaW4gaHVtYW5pdHlcbiAgY29uc3Qgc2FtcGxlRGF0YSA9IGdldFNhbXBsZUZvclR5cGVBbmFseXplKHtcbiAgICBmaWVsZHM6IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpLFxuICAgIGFsbERhdGE6IHJvd3NcbiAgfSk7XG4gIGNvbnN0IGZpZWxkT3JkZXIgPSBmaWVsZHMubWFwKGYgPT4gZi5uYW1lKTtcbiAgY29uc3QgbWV0YSA9IGdldEZpZWxkc0Zyb21EYXRhKHNhbXBsZURhdGEsIGZpZWxkT3JkZXIpO1xuICBjb25zdCB1cGRhdGVkRmllbGRzID0gZmllbGRzLm1hcCgoZiwgaSkgPT4gKHtcbiAgICAuLi5mLFxuICAgIHR5cGU6IG1ldGFbaV0udHlwZSxcbiAgICBmb3JtYXQ6IG1ldGFbaV0uZm9ybWF0LFxuICAgIGFuYWx5emVyVHlwZTogbWV0YVtpXS5hbmFseXplclR5cGVcbiAgfSkpO1xuXG4gIHJldHVybiB7ZmllbGRzOiB1cGRhdGVkRmllbGRzLCByb3dzfTtcbn1cblxuZnVuY3Rpb24gZmluZE5vbkVtcHR5Um93c0F0RmllbGQocm93cywgZmllbGRJZHgsIHRvdGFsKSB7XG4gIGNvbnN0IHNhbXBsZSA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChzYW1wbGUubGVuZ3RoIDwgdG90YWwgJiYgaSA8IHJvd3MubGVuZ3RoKSB7XG4gICAgaWYgKG5vdE51bGxvclVuZGVmaW5lZChyb3dzW2ldW2ZpZWxkSWR4XSkpIHtcbiAgICAgIHNhbXBsZS5wdXNoKHJvd3NbaV0pO1xuICAgIH1cbiAgICBpKys7XG4gIH1cbiAgcmV0dXJuIHNhbXBsZTtcbn1cbi8qKlxuICogUHJvY2VzcyBzYXZlZCBrZXBsZXIuZ2wganNvbiB0byBiZSBwYXNzIHRvIFtgYWRkRGF0YVRvTWFwYF0oLi4vYWN0aW9ucy9hY3Rpb25zLm1kI2FkZGRhdGF0b21hcCkuXG4gKiBUaGUganNvbiBvYmplY3Qgc2hvdWxkIGNvbnRhaW4gYGRhdGFzZXRzYCBhbmQgYGNvbmZpZ2AuXG4gKiBAcGFyYW0ge09iamVjdH0gcmF3RGF0YVxuICogQHBhcmFtIHtBcnJheX0gcmF3RGF0YS5kYXRhc2V0c1xuICogQHBhcmFtIHtPYmplY3R9IHJhd0RhdGEuY29uZmlnXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBkYXRhc2V0cyBhbmQgY29uZmlnIGB7ZGF0YXNldHM6IHt9LCBjb25maWc6IHt9fWBcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge2FkZERhdGFUb01hcH0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xuICogaW1wb3J0IHtwcm9jZXNzS2VwbGVyZ2xKU09OfSBmcm9tICdrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XG4gKlxuICogZGlzcGF0Y2goYWRkRGF0YVRvTWFwKHByb2Nlc3NLZXBsZXJnbEpTT04oa2VwbGVyR2xKc29uKSkpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0tlcGxlcmdsSlNPTihyYXdEYXRhKSB7XG4gIHJldHVybiByYXdEYXRhID8gS2VwbGVyR2xTY2hlbWEubG9hZChyYXdEYXRhLmRhdGFzZXRzLCByYXdEYXRhLmNvbmZpZykgOiBudWxsO1xufVxuXG4vKipcbiAqIFBhcnNlIGEgc2luZ2xlIG9yIGFuIGFycmF5IG9mIGRhdGFzZXRzIHNhdmVkIHVzaW5nIGtlcGxlci5nbCBzY2hlbWFcbiAqIEBwYXJhbSB7QXJyYXkgfCBBcnJheTxPYmplY3Q+fSByYXdEYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzS2VwbGVyZ2xEYXRhc2V0KHJhd0RhdGEpIHtcbiAgaWYgKCFyYXdEYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCByZXN1bHRzID0gS2VwbGVyR2xTY2hlbWEucGFyc2VTYXZlZERhdGEodG9BcnJheShyYXdEYXRhKSk7XG4gIGlmICghcmVzdWx0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHJhd0RhdGEpID8gcmVzdWx0cyA6IHJlc3VsdHNbMF07XG59XG5cbmV4cG9ydCBjb25zdCBEQVRBU0VUX0hBTkRMRVJTID0ge1xuICBbREFUQVNFVF9GT1JNQVRTLnJvd106IHByb2Nlc3NSb3dPYmplY3QsXG4gIFtEQVRBU0VUX0ZPUk1BVFMuZ2VvanNvbl06IHByb2Nlc3NHZW9qc29uLFxuICBbREFUQVNFVF9GT1JNQVRTLmNzdl06IHByb2Nlc3NDc3ZEYXRhLFxuICBbREFUQVNFVF9GT1JNQVRTLmtlcGxlcmdsXTogcHJvY2Vzc0tlcGxlcmdsRGF0YXNldFxufTtcblxuZXhwb3J0IGNvbnN0IFByb2Nlc3NvcnMgPSB7XG4gIHByb2Nlc3NHZW9qc29uLFxuICBwcm9jZXNzQ3N2RGF0YSxcbiAgcHJvY2Vzc1Jvd09iamVjdCxcbiAgcHJvY2Vzc0tlcGxlcmdsSlNPTixcbiAgcHJvY2Vzc0tlcGxlcmdsRGF0YXNldCxcbiAgYW5hbHl6ZXJUeXBlVG9GaWVsZFR5cGUsXG4gIGdldEZpZWxkc0Zyb21EYXRhLFxuICBwYXJzZUNzdlJvd3NCeUZpZWxkVHlwZSxcbiAgZm9ybWF0Q3N2XG59O1xuIl19