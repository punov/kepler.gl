"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _layers = require("@deck.gl/layers");

var _constants = _interopRequireDefault(require("@luma.gl/constants"));

var _shaderUtils = require("../layer-utils/shader-utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread(_objectSpread({}, _layers.LineLayer.defaultProps), {}, {
  getTargetColor: function getTargetColor(x) {
    return x.color || [0, 0, 0, 255];
  }
});

function addInstanceColorShader(vs) {
  var targetColorVs = (0, _shaderUtils.editShader)(vs, 'line target color vs', 'attribute vec4 instanceColors;', 'attribute vec4 instanceColors; attribute vec4 instanceTargetColors;');
  return (0, _shaderUtils.editShader)(targetColorVs, 'line color vs', 'vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);', "vec4 color = mix(instanceColors, instanceTargetColors, positions.x);" + "vColor = vec4(color.rgb, color.a * opacity);");
}

function addElevationScale(vs) {
  var elevationVs = (0, _shaderUtils.editShader)(vs, 'line elevation scale 1 vs', 'uniform float widthMaxPixels;', "uniform float widthMaxPixels;\n     uniform float elevationScale;");
  elevationVs = (0, _shaderUtils.editShader)(elevationVs, 'line elevation scale 2 vs', "geometry.worldPosition = instanceSourcePositions;\n  geometry.worldPositionAlt = instanceTargetPositions;", "vec3 sourcePosAdjusted = instanceSourcePositions;\n     vec3 targetPosAdjusted = instanceTargetPositions;\n     sourcePosAdjusted.z *= elevationScale;\n     targetPosAdjusted.z *= elevationScale;\n     \n     geometry.worldPosition = sourcePosAdjusted;\n     geometry.worldPositionAlt = sourcePosAdjusted;");
  elevationVs = (0, _shaderUtils.editShader)(elevationVs, 'line elevation scale 3 vs', 'vec4 source = project_position_to_clipspace(instanceSourcePositions, instanceSourcePositions64Low, vec3(0.), source_commonspace);', 'vec4 source = project_position_to_clipspace(sourcePosAdjusted, instanceSourcePositions64Low, vec3(0.), source_commonspace);');
  elevationVs = (0, _shaderUtils.editShader)(elevationVs, 'line elevation scale 4 vs', 'vec4 target = project_position_to_clipspace(instanceTargetPositions, instanceTargetPositions64Low, vec3(0.), target_commonspace);', 'vec4 target = project_position_to_clipspace(targetPosAdjusted, instanceTargetPositions64Low, vec3(0.), target_commonspace);');
  return elevationVs;
}

var EnhancedLineLayer = /*#__PURE__*/function (_LineLayer) {
  (0, _inherits2["default"])(EnhancedLineLayer, _LineLayer);

  var _super = _createSuper(EnhancedLineLayer);

  function EnhancedLineLayer() {
    (0, _classCallCheck2["default"])(this, EnhancedLineLayer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EnhancedLineLayer, [{
    key: "getShaders",
    value: function getShaders() {
      var shaders = (0, _get2["default"])((0, _getPrototypeOf2["default"])(EnhancedLineLayer.prototype), "getShaders", this).call(this);
      var vs = addInstanceColorShader(shaders.vs);
      vs = addElevationScale(vs);
      return _objectSpread(_objectSpread({}, shaders), {}, {
        vs: vs
      });
    }
  }, {
    key: "draw",
    value: function draw(_ref) {
      var uniforms = _ref.uniforms;
      var elevationScale = this.props.elevationScale;
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(EnhancedLineLayer.prototype), "draw", this).call(this, {
        uniforms: _objectSpread(_objectSpread({}, uniforms), {}, {
          elevationScale: elevationScale
        })
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(EnhancedLineLayer.prototype), "initializeState", this).call(this);
      var attributeManager = this.state.attributeManager;
      attributeManager.addInstanced({
        instanceTargetColors: {
          size: this.props.colorFormat.length,
          type: _constants["default"].UNSIGNED_BYTE,
          normalized: true,
          transition: true,
          accessor: 'getTargetColor',
          defaultValue: [0, 0, 0, 255]
        }
      });
    }
  }]);
  return EnhancedLineLayer;
}(_layers.LineLayer);

exports["default"] = EnhancedLineLayer;
EnhancedLineLayer.layerName = 'EnhancedLineLayer';
EnhancedLineLayer.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2xpbmUtbGF5ZXIvbGluZS1sYXllci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJMaW5lTGF5ZXIiLCJnZXRUYXJnZXRDb2xvciIsIngiLCJjb2xvciIsImFkZEluc3RhbmNlQ29sb3JTaGFkZXIiLCJ2cyIsInRhcmdldENvbG9yVnMiLCJhZGRFbGV2YXRpb25TY2FsZSIsImVsZXZhdGlvblZzIiwiRW5oYW5jZWRMaW5lTGF5ZXIiLCJzaGFkZXJzIiwidW5pZm9ybXMiLCJlbGV2YXRpb25TY2FsZSIsInByb3BzIiwiYXR0cmlidXRlTWFuYWdlciIsInN0YXRlIiwiYWRkSW5zdGFuY2VkIiwiaW5zdGFuY2VUYXJnZXRDb2xvcnMiLCJzaXplIiwiY29sb3JGb3JtYXQiLCJsZW5ndGgiLCJ0eXBlIiwiR0wiLCJVTlNJR05FRF9CWVRFIiwibm9ybWFsaXplZCIsInRyYW5zaXRpb24iLCJhY2Nlc3NvciIsImRlZmF1bHRWYWx1ZSIsImxheWVyTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLG1DQUNiQyxrQkFBVUQsWUFERztBQUVoQkUsRUFBQUEsY0FBYyxFQUFFLHdCQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxLQUFGLElBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxHQUFWLENBQWY7QUFBQTtBQUZELEVBQWxCOztBQUtBLFNBQVNDLHNCQUFULENBQWdDQyxFQUFoQyxFQUFvQztBQUNsQyxNQUFNQyxhQUFhLEdBQUcsNkJBQ3BCRCxFQURvQixFQUVwQixzQkFGb0IsRUFHcEIsZ0NBSG9CLEVBSXBCLHFFQUpvQixDQUF0QjtBQU9BLFNBQU8sNkJBQ0xDLGFBREssRUFFTCxlQUZLLEVBR0wsZ0VBSEssRUFJTCx1SEFKSyxDQUFQO0FBT0Q7O0FBRUQsU0FBU0MsaUJBQVQsQ0FBMkJGLEVBQTNCLEVBQStCO0FBQzdCLE1BQUlHLFdBQVcsR0FBRyw2QkFDaEJILEVBRGdCLEVBRWhCLDJCQUZnQixFQUdoQiwrQkFIZ0Isc0VBQWxCO0FBUUFHLEVBQUFBLFdBQVcsR0FBRyw2QkFDWkEsV0FEWSxFQUVaLDJCQUZZLG1hQUFkO0FBY0FBLEVBQUFBLFdBQVcsR0FBRyw2QkFDWkEsV0FEWSxFQUVaLDJCQUZZLEVBR1osbUlBSFksRUFJWiw2SEFKWSxDQUFkO0FBT0FBLEVBQUFBLFdBQVcsR0FBRyw2QkFDWkEsV0FEWSxFQUVaLDJCQUZZLEVBR1osbUlBSFksRUFJWiw2SEFKWSxDQUFkO0FBT0EsU0FBT0EsV0FBUDtBQUNEOztJQUVvQkMsaUI7Ozs7Ozs7Ozs7OztXQUNuQixzQkFBYTtBQUNYLFVBQU1DLE9BQU8sc0hBQWI7QUFFQSxVQUFJTCxFQUFFLEdBQUdELHNCQUFzQixDQUFDTSxPQUFPLENBQUNMLEVBQVQsQ0FBL0I7QUFDQUEsTUFBQUEsRUFBRSxHQUFHRSxpQkFBaUIsQ0FBQ0YsRUFBRCxDQUF0QjtBQUVBLDZDQUNLSyxPQURMO0FBRUVMLFFBQUFBLEVBQUUsRUFBRkE7QUFGRjtBQUlEOzs7V0FFRCxvQkFBaUI7QUFBQSxVQUFYTSxRQUFXLFFBQVhBLFFBQVc7QUFDZixVQUFPQyxjQUFQLEdBQXlCLEtBQUtDLEtBQTlCLENBQU9ELGNBQVA7QUFDQSxvSEFBVztBQUFDRCxRQUFBQSxRQUFRLGtDQUFNQSxRQUFOO0FBQWdCQyxVQUFBQSxjQUFjLEVBQWRBO0FBQWhCO0FBQVQsT0FBWDtBQUNEOzs7V0FFRCwyQkFBa0I7QUFDaEI7QUFDQSxVQUFPRSxnQkFBUCxHQUEyQixLQUFLQyxLQUFoQyxDQUFPRCxnQkFBUDtBQUNBQSxNQUFBQSxnQkFBZ0IsQ0FBQ0UsWUFBakIsQ0FBOEI7QUFDNUJDLFFBQUFBLG9CQUFvQixFQUFFO0FBQ3BCQyxVQUFBQSxJQUFJLEVBQUUsS0FBS0wsS0FBTCxDQUFXTSxXQUFYLENBQXVCQyxNQURUO0FBRXBCQyxVQUFBQSxJQUFJLEVBQUVDLHNCQUFHQyxhQUZXO0FBR3BCQyxVQUFBQSxVQUFVLEVBQUUsSUFIUTtBQUlwQkMsVUFBQUEsVUFBVSxFQUFFLElBSlE7QUFLcEJDLFVBQUFBLFFBQVEsRUFBRSxnQkFMVTtBQU1wQkMsVUFBQUEsWUFBWSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsR0FBVjtBQU5NO0FBRE0sT0FBOUI7QUFVRDs7O0VBL0I0QzNCLGlCOzs7QUFrQy9DUyxpQkFBaUIsQ0FBQ21CLFNBQWxCLEdBQThCLG1CQUE5QjtBQUNBbkIsaUJBQWlCLENBQUNWLFlBQWxCLEdBQWlDQSxZQUFqQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7TGluZUxheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xuaW1wb3J0IEdMIGZyb20gJ0BsdW1hLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge2VkaXRTaGFkZXJ9IGZyb20gJ2RlY2tnbC1sYXllcnMvbGF5ZXItdXRpbHMvc2hhZGVyLXV0aWxzJztcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAuLi5MaW5lTGF5ZXIuZGVmYXVsdFByb3BzLFxuICBnZXRUYXJnZXRDb2xvcjogeCA9PiB4LmNvbG9yIHx8IFswLCAwLCAwLCAyNTVdXG59O1xuXG5mdW5jdGlvbiBhZGRJbnN0YW5jZUNvbG9yU2hhZGVyKHZzKSB7XG4gIGNvbnN0IHRhcmdldENvbG9yVnMgPSBlZGl0U2hhZGVyKFxuICAgIHZzLFxuICAgICdsaW5lIHRhcmdldCBjb2xvciB2cycsXG4gICAgJ2F0dHJpYnV0ZSB2ZWM0IGluc3RhbmNlQ29sb3JzOycsXG4gICAgJ2F0dHJpYnV0ZSB2ZWM0IGluc3RhbmNlQ29sb3JzOyBhdHRyaWJ1dGUgdmVjNCBpbnN0YW5jZVRhcmdldENvbG9yczsnXG4gICk7XG5cbiAgcmV0dXJuIGVkaXRTaGFkZXIoXG4gICAgdGFyZ2V0Q29sb3JWcyxcbiAgICAnbGluZSBjb2xvciB2cycsXG4gICAgJ3ZDb2xvciA9IHZlYzQoaW5zdGFuY2VDb2xvcnMucmdiLCBpbnN0YW5jZUNvbG9ycy5hICogb3BhY2l0eSk7JyxcbiAgICBgdmVjNCBjb2xvciA9IG1peChpbnN0YW5jZUNvbG9ycywgaW5zdGFuY2VUYXJnZXRDb2xvcnMsIHBvc2l0aW9ucy54KTtgICtcbiAgICAgIGB2Q29sb3IgPSB2ZWM0KGNvbG9yLnJnYiwgY29sb3IuYSAqIG9wYWNpdHkpO2BcbiAgKTtcbn1cblxuZnVuY3Rpb24gYWRkRWxldmF0aW9uU2NhbGUodnMpIHtcbiAgbGV0IGVsZXZhdGlvblZzID0gZWRpdFNoYWRlcihcbiAgICB2cyxcbiAgICAnbGluZSBlbGV2YXRpb24gc2NhbGUgMSB2cycsXG4gICAgJ3VuaWZvcm0gZmxvYXQgd2lkdGhNYXhQaXhlbHM7JyxcbiAgICBgdW5pZm9ybSBmbG9hdCB3aWR0aE1heFBpeGVscztcbiAgICAgdW5pZm9ybSBmbG9hdCBlbGV2YXRpb25TY2FsZTtgXG4gICk7XG5cbiAgZWxldmF0aW9uVnMgPSBlZGl0U2hhZGVyKFxuICAgIGVsZXZhdGlvblZzLFxuICAgICdsaW5lIGVsZXZhdGlvbiBzY2FsZSAyIHZzJyxcbiAgICBgZ2VvbWV0cnkud29ybGRQb3NpdGlvbiA9IGluc3RhbmNlU291cmNlUG9zaXRpb25zO1xuICBnZW9tZXRyeS53b3JsZFBvc2l0aW9uQWx0ID0gaW5zdGFuY2VUYXJnZXRQb3NpdGlvbnM7YCxcbiAgICBgdmVjMyBzb3VyY2VQb3NBZGp1c3RlZCA9IGluc3RhbmNlU291cmNlUG9zaXRpb25zO1xuICAgICB2ZWMzIHRhcmdldFBvc0FkanVzdGVkID0gaW5zdGFuY2VUYXJnZXRQb3NpdGlvbnM7XG4gICAgIHNvdXJjZVBvc0FkanVzdGVkLnogKj0gZWxldmF0aW9uU2NhbGU7XG4gICAgIHRhcmdldFBvc0FkanVzdGVkLnogKj0gZWxldmF0aW9uU2NhbGU7XG4gICAgIFxuICAgICBnZW9tZXRyeS53b3JsZFBvc2l0aW9uID0gc291cmNlUG9zQWRqdXN0ZWQ7XG4gICAgIGdlb21ldHJ5LndvcmxkUG9zaXRpb25BbHQgPSBzb3VyY2VQb3NBZGp1c3RlZDtgXG4gICk7XG5cbiAgZWxldmF0aW9uVnMgPSBlZGl0U2hhZGVyKFxuICAgIGVsZXZhdGlvblZzLFxuICAgICdsaW5lIGVsZXZhdGlvbiBzY2FsZSAzIHZzJyxcbiAgICAndmVjNCBzb3VyY2UgPSBwcm9qZWN0X3Bvc2l0aW9uX3RvX2NsaXBzcGFjZShpbnN0YW5jZVNvdXJjZVBvc2l0aW9ucywgaW5zdGFuY2VTb3VyY2VQb3NpdGlvbnM2NExvdywgdmVjMygwLiksIHNvdXJjZV9jb21tb25zcGFjZSk7JyxcbiAgICAndmVjNCBzb3VyY2UgPSBwcm9qZWN0X3Bvc2l0aW9uX3RvX2NsaXBzcGFjZShzb3VyY2VQb3NBZGp1c3RlZCwgaW5zdGFuY2VTb3VyY2VQb3NpdGlvbnM2NExvdywgdmVjMygwLiksIHNvdXJjZV9jb21tb25zcGFjZSk7J1xuICApO1xuXG4gIGVsZXZhdGlvblZzID0gZWRpdFNoYWRlcihcbiAgICBlbGV2YXRpb25WcyxcbiAgICAnbGluZSBlbGV2YXRpb24gc2NhbGUgNCB2cycsXG4gICAgJ3ZlYzQgdGFyZ2V0ID0gcHJvamVjdF9wb3NpdGlvbl90b19jbGlwc3BhY2UoaW5zdGFuY2VUYXJnZXRQb3NpdGlvbnMsIGluc3RhbmNlVGFyZ2V0UG9zaXRpb25zNjRMb3csIHZlYzMoMC4pLCB0YXJnZXRfY29tbW9uc3BhY2UpOycsXG4gICAgJ3ZlYzQgdGFyZ2V0ID0gcHJvamVjdF9wb3NpdGlvbl90b19jbGlwc3BhY2UodGFyZ2V0UG9zQWRqdXN0ZWQsIGluc3RhbmNlVGFyZ2V0UG9zaXRpb25zNjRMb3csIHZlYzMoMC4pLCB0YXJnZXRfY29tbW9uc3BhY2UpOydcbiAgKTtcblxuICByZXR1cm4gZWxldmF0aW9uVnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuaGFuY2VkTGluZUxheWVyIGV4dGVuZHMgTGluZUxheWVyIHtcbiAgZ2V0U2hhZGVycygpIHtcbiAgICBjb25zdCBzaGFkZXJzID0gc3VwZXIuZ2V0U2hhZGVycygpO1xuXG4gICAgbGV0IHZzID0gYWRkSW5zdGFuY2VDb2xvclNoYWRlcihzaGFkZXJzLnZzKTtcbiAgICB2cyA9IGFkZEVsZXZhdGlvblNjYWxlKHZzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zaGFkZXJzLFxuICAgICAgdnNcbiAgICB9O1xuICB9XG5cbiAgZHJhdyh7dW5pZm9ybXN9KSB7XG4gICAgY29uc3Qge2VsZXZhdGlvblNjYWxlfSA9IHRoaXMucHJvcHM7XG4gICAgc3VwZXIuZHJhdyh7dW5pZm9ybXM6IHsuLi51bmlmb3JtcywgZWxldmF0aW9uU2NhbGV9fSk7XG4gIH1cblxuICBpbml0aWFsaXplU3RhdGUoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZVN0YXRlKCk7XG4gICAgY29uc3Qge2F0dHJpYnV0ZU1hbmFnZXJ9ID0gdGhpcy5zdGF0ZTtcbiAgICBhdHRyaWJ1dGVNYW5hZ2VyLmFkZEluc3RhbmNlZCh7XG4gICAgICBpbnN0YW5jZVRhcmdldENvbG9yczoge1xuICAgICAgICBzaXplOiB0aGlzLnByb3BzLmNvbG9yRm9ybWF0Lmxlbmd0aCxcbiAgICAgICAgdHlwZTogR0wuVU5TSUdORURfQllURSxcbiAgICAgICAgbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRUYXJnZXRDb2xvcicsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogWzAsIDAsIDAsIDI1NV1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5FbmhhbmNlZExpbmVMYXllci5sYXllck5hbWUgPSAnRW5oYW5jZWRMaW5lTGF5ZXInO1xuRW5oYW5jZWRMaW5lTGF5ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19