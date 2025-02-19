"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.mapStateReducerFactory = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reduxActions = require("redux-actions");

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

var mapStateUpdaters = _interopRequireWildcard(require("./map-state-updaters"));

var _actionHandler;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Important: Do not rename `actionHandler` or the assignment pattern of property value.
 * It is used to generate documentation
 */
var actionHandler = (_actionHandler = {}, (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_MAP, mapStateUpdaters.updateMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].FIT_BOUNDS, mapStateUpdaters.fitBoundsUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_PERSPECTIVE, mapStateUpdaters.togglePerspectiveUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].RECEIVE_MAP_CONFIG, mapStateUpdaters.receiveMapConfigUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].RESET_MAP_CONFIG, mapStateUpdaters.resetMapConfigUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_SPLIT_MAP, mapStateUpdaters.toggleSplitMapUpdater), _actionHandler);
/* Reducer */

var mapStateReducerFactory = function mapStateReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (// @ts-ignore
    (0, _reduxActions.handleActions)(actionHandler, _objectSpread(_objectSpread(_objectSpread({}, mapStateUpdaters.INITIAL_MAP_STATE), initialState), {}, {
      initialState: initialState
    }))
  );
};

exports.mapStateReducerFactory = mapStateReducerFactory;

var _default = mapStateReducerFactory();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3RhdGUuanMiXSwibmFtZXMiOlsiYWN0aW9uSGFuZGxlciIsIkFjdGlvblR5cGVzIiwiVVBEQVRFX01BUCIsIm1hcFN0YXRlVXBkYXRlcnMiLCJ1cGRhdGVNYXBVcGRhdGVyIiwiRklUX0JPVU5EUyIsImZpdEJvdW5kc1VwZGF0ZXIiLCJUT0dHTEVfUEVSU1BFQ1RJVkUiLCJ0b2dnbGVQZXJzcGVjdGl2ZVVwZGF0ZXIiLCJSRUNFSVZFX01BUF9DT05GSUciLCJyZWNlaXZlTWFwQ29uZmlnVXBkYXRlciIsIlJFU0VUX01BUF9DT05GSUciLCJyZXNldE1hcENvbmZpZ1VwZGF0ZXIiLCJUT0dHTEVfU1BMSVRfTUFQIiwidG9nZ2xlU3BsaXRNYXBVcGRhdGVyIiwibWFwU3RhdGVSZWR1Y2VyRmFjdG9yeSIsImluaXRpYWxTdGF0ZSIsIklOSVRJQUxfTUFQX1NUQVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGFBQWEsMEVBQ2hCQyx3QkFBWUMsVUFESSxFQUNTQyxnQkFBZ0IsQ0FBQ0MsZ0JBRDFCLG9EQUVoQkgsd0JBQVlJLFVBRkksRUFFU0YsZ0JBQWdCLENBQUNHLGdCQUYxQixvREFHaEJMLHdCQUFZTSxrQkFISSxFQUdpQkosZ0JBQWdCLENBQUNLLHdCQUhsQyxvREFJaEJQLHdCQUFZUSxrQkFKSSxFQUlpQk4sZ0JBQWdCLENBQUNPLHVCQUpsQyxvREFLaEJULHdCQUFZVSxnQkFMSSxFQUtlUixnQkFBZ0IsQ0FBQ1MscUJBTGhDLG9EQU1oQlgsd0JBQVlZLGdCQU5JLEVBTWVWLGdCQUFnQixDQUFDVyxxQkFOaEMsa0JBQW5CO0FBU0E7O0FBQ08sSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QjtBQUFBLE1BQUNDLFlBQUQsdUVBQWdCLEVBQWhCO0FBQUEsU0FDcEM7QUFDQSxxQ0FBY2hCLGFBQWQsZ0RBQ0tHLGdCQUFnQixDQUFDYyxpQkFEdEIsR0FFS0QsWUFGTDtBQUdFQSxNQUFBQSxZQUFZLEVBQVpBO0FBSEY7QUFGb0M7QUFBQSxDQUEvQjs7OztlQVFRRCxzQkFBc0IsRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgKiBhcyBtYXBTdGF0ZVVwZGF0ZXJzIGZyb20gJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJztcblxuLyoqXG4gKiBJbXBvcnRhbnQ6IERvIG5vdCByZW5hbWUgYGFjdGlvbkhhbmRsZXJgIG9yIHRoZSBhc3NpZ25tZW50IHBhdHRlcm4gb2YgcHJvcGVydHkgdmFsdWUuXG4gKiBJdCBpcyB1c2VkIHRvIGdlbmVyYXRlIGRvY3VtZW50YXRpb25cbiAqL1xuY29uc3QgYWN0aW9uSGFuZGxlciA9IHtcbiAgW0FjdGlvblR5cGVzLlVQREFURV9NQVBdOiBtYXBTdGF0ZVVwZGF0ZXJzLnVwZGF0ZU1hcFVwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5GSVRfQk9VTkRTXTogbWFwU3RhdGVVcGRhdGVycy5maXRCb3VuZHNVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuVE9HR0xFX1BFUlNQRUNUSVZFXTogbWFwU3RhdGVVcGRhdGVycy50b2dnbGVQZXJzcGVjdGl2ZVVwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5SRUNFSVZFX01BUF9DT05GSUddOiBtYXBTdGF0ZVVwZGF0ZXJzLnJlY2VpdmVNYXBDb25maWdVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuUkVTRVRfTUFQX0NPTkZJR106IG1hcFN0YXRlVXBkYXRlcnMucmVzZXRNYXBDb25maWdVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuVE9HR0xFX1NQTElUX01BUF06IG1hcFN0YXRlVXBkYXRlcnMudG9nZ2xlU3BsaXRNYXBVcGRhdGVyXG59O1xuXG4vKiBSZWR1Y2VyICovXG5leHBvcnQgY29uc3QgbWFwU3RhdGVSZWR1Y2VyRmFjdG9yeSA9IChpbml0aWFsU3RhdGUgPSB7fSkgPT5cbiAgLy8gQHRzLWlnbm9yZVxuICBoYW5kbGVBY3Rpb25zKGFjdGlvbkhhbmRsZXIsIHtcbiAgICAuLi5tYXBTdGF0ZVVwZGF0ZXJzLklOSVRJQUxfTUFQX1NUQVRFLFxuICAgIC4uLmluaXRpYWxTdGF0ZSxcbiAgICBpbml0aWFsU3RhdGVcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1hcFN0YXRlUmVkdWNlckZhY3RvcnkoKTtcbiJdfQ==