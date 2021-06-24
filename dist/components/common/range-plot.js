"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangePlotFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rangeBrush = _interopRequireDefault(require("./range-brush"));

var _histogramPlot = _interopRequireDefault(require("./histogram-plot"));

var _lineChart = _interopRequireDefault(require("./line-chart"));

var _utils = require("../../utils/utils");

var _excluded = ["onBrush", "range", "value", "width", "plotType", "lineChart", "histogram", "isEnlarged", "isRanged", "theme"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledRangePlot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: ", "px;\n  display: flex;\n  position: 'relative';\n"])), function (props) {
  return props.theme.sliderBarHeight;
});

RangePlotFactory.deps = [_rangeBrush["default"], _histogramPlot["default"], _lineChart["default"]];

function RangePlotFactory(RangeBrush, HistogramPlot, LineChart) {
  var RangePlot = function RangePlot(_ref) {
    var onBrush = _ref.onBrush,
        range = _ref.range,
        value = _ref.value,
        width = _ref.width,
        plotType = _ref.plotType,
        lineChart = _ref.lineChart,
        histogram = _ref.histogram,
        isEnlarged = _ref.isEnlarged,
        isRanged = _ref.isRanged,
        theme = _ref.theme,
        chartProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        brushing = _useState2[0],
        setBrushing = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        hoveredDP = _useState4[0],
        onMouseMove = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
        enableChartHover = _useState6[0],
        setEnableChartHover = _useState6[1];

    var height = isEnlarged ? theme.rangePlotHLarge : theme.rangePlotH;
    var onBrushStart = (0, _react.useCallback)(function () {
      setBrushing(true);
      onMouseMove(null);
      setEnableChartHover(false);
    }, [setBrushing, onMouseMove, setEnableChartHover]);
    var onBrushEnd = (0, _react.useCallback)(function () {
      setBrushing(false);
      setEnableChartHover(true);
    }, [setBrushing, setEnableChartHover]);
    var onMouseoverHandle = (0, _react.useCallback)(function () {
      onMouseMove(null);
      setEnableChartHover(false);
    }, [onMouseMove, setEnableChartHover]);
    var onMouseoutHandle = (0, _react.useCallback)(function () {
      setEnableChartHover(true);
    }, [setEnableChartHover]); // JsDom have limited support for SVG, d3 will fail

    var brushComponent = (0, _utils.isTest)() ? null : /*#__PURE__*/_react["default"].createElement(RangeBrush, (0, _extends2["default"])({
      onBrush: onBrush,
      onBrushStart: onBrushStart,
      onBrushEnd: onBrushEnd,
      range: range,
      value: value,
      width: width,
      height: height,
      isRanged: isRanged,
      onMouseoverHandle: onMouseoverHandle,
      onMouseoutHandle: onMouseoutHandle
    }, chartProps));

    var commonProps = _objectSpread({
      width: width,
      value: value,
      height: height,
      margin: isEnlarged ? theme.rangePlotMarginLarge : theme.rangePlotMargin,
      brushComponent: brushComponent,
      brushing: brushing,
      isEnlarged: isEnlarged,
      enableChartHover: enableChartHover,
      onMouseMove: onMouseMove,
      hoveredDP: hoveredDP,
      isRanged: isRanged
    }, chartProps);

    return /*#__PURE__*/_react["default"].createElement(StyledRangePlot, {
      style: {
        height: "".concat(isEnlarged ? theme.rangePlotContainerHLarge : theme.rangePlotContainerH, "px")
      },
      className: "kg-range-slider__plot"
    }, plotType === 'lineChart' && lineChart ? /*#__PURE__*/_react["default"].createElement(LineChart, (0, _extends2["default"])({
      lineChart: lineChart
    }, commonProps)) : /*#__PURE__*/_react["default"].createElement(HistogramPlot, (0, _extends2["default"])({
      histogram: histogram
    }, commonProps)));
  };

  RangePlot.propTypes = {
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      x0: _propTypes["default"].number,
      x1: _propTypes["default"].number
    })),
    lineChart: _propTypes["default"].object,
    plotType: _propTypes["default"].string,
    isEnlarged: _propTypes["default"].bool,
    onBlur: _propTypes["default"].func,
    width: _propTypes["default"].number.isRequired
  };
  return (0, _styledComponents.withTheme)(RangePlot);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1wbG90LmpzIl0sIm5hbWVzIjpbIlN0eWxlZFJhbmdlUGxvdCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJCYXJIZWlnaHQiLCJSYW5nZVBsb3RGYWN0b3J5IiwiZGVwcyIsIlJhbmdlQnJ1c2hGYWN0b3J5IiwiSGlzdG9ncmFtUGxvdEZhY3RvcnkiLCJMaW5lQ2hhcnRGYWN0b3J5IiwiUmFuZ2VCcnVzaCIsIkhpc3RvZ3JhbVBsb3QiLCJMaW5lQ2hhcnQiLCJSYW5nZVBsb3QiLCJvbkJydXNoIiwicmFuZ2UiLCJ2YWx1ZSIsIndpZHRoIiwicGxvdFR5cGUiLCJsaW5lQ2hhcnQiLCJoaXN0b2dyYW0iLCJpc0VubGFyZ2VkIiwiaXNSYW5nZWQiLCJjaGFydFByb3BzIiwiYnJ1c2hpbmciLCJzZXRCcnVzaGluZyIsImhvdmVyZWREUCIsIm9uTW91c2VNb3ZlIiwiZW5hYmxlQ2hhcnRIb3ZlciIsInNldEVuYWJsZUNoYXJ0SG92ZXIiLCJoZWlnaHQiLCJyYW5nZVBsb3RITGFyZ2UiLCJyYW5nZVBsb3RIIiwib25CcnVzaFN0YXJ0Iiwib25CcnVzaEVuZCIsIm9uTW91c2VvdmVySGFuZGxlIiwib25Nb3VzZW91dEhhbmRsZSIsImJydXNoQ29tcG9uZW50IiwiY29tbW9uUHJvcHMiLCJtYXJnaW4iLCJyYW5nZVBsb3RNYXJnaW5MYXJnZSIsInJhbmdlUGxvdE1hcmdpbiIsInJhbmdlUGxvdENvbnRhaW5lckhMYXJnZSIsInJhbmdlUGxvdENvbnRhaW5lckgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwieDAiLCJ4MSIsIm9iamVjdCIsInN0cmluZyIsImJvb2wiLCJvbkJsdXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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cEI1QixJQUFBQSxTQUFTLEVBQUV5QixzQkFBVUMsT0FBVixDQUNURCxzQkFBVUksS0FBVixDQUFnQjtBQUNkQyxNQUFBQSxFQUFFLEVBQUVMLHNCQUFVRSxNQURBO0FBRWRJLE1BQUFBLEVBQUUsRUFBRU4sc0JBQVVFO0FBRkEsS0FBaEIsQ0FEUyxDQUZTO0FBUXBCNUIsSUFBQUEsU0FBUyxFQUFFMEIsc0JBQVVPLE1BUkQ7QUFTcEJsQyxJQUFBQSxRQUFRLEVBQUUyQixzQkFBVVEsTUFUQTtBQVVwQmhDLElBQUFBLFVBQVUsRUFBRXdCLHNCQUFVUyxJQVZGO0FBV3BCQyxJQUFBQSxNQUFNLEVBQUVWLHNCQUFVVyxJQVhFO0FBWXBCdkMsSUFBQUEsS0FBSyxFQUFFNEIsc0JBQVVFLE1BQVYsQ0FBaUJDO0FBWkosR0FBdEI7QUFjQSxTQUFPLGlDQUFVbkMsU0FBVixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmFuZ2VCcnVzaEZhY3RvcnkgZnJvbSAnLi9yYW5nZS1icnVzaCc7XG5pbXBvcnQgSGlzdG9ncmFtUGxvdEZhY3RvcnkgZnJvbSAnLi9oaXN0b2dyYW0tcGxvdCc7XG5pbXBvcnQgTGluZUNoYXJ0RmFjdG9yeSBmcm9tICcuL2xpbmUtY2hhcnQnO1xuaW1wb3J0IHtpc1Rlc3R9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuY29uc3QgU3R5bGVkUmFuZ2VQbG90ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHR9cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnO1xuYDtcblxuUmFuZ2VQbG90RmFjdG9yeS5kZXBzID0gW1JhbmdlQnJ1c2hGYWN0b3J5LCBIaXN0b2dyYW1QbG90RmFjdG9yeSwgTGluZUNoYXJ0RmFjdG9yeV07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmdlUGxvdEZhY3RvcnkoUmFuZ2VCcnVzaCwgSGlzdG9ncmFtUGxvdCwgTGluZUNoYXJ0KSB7XG4gIGNvbnN0IFJhbmdlUGxvdCA9ICh7XG4gICAgb25CcnVzaCxcbiAgICByYW5nZSxcbiAgICB2YWx1ZSxcbiAgICB3aWR0aCxcbiAgICBwbG90VHlwZSxcbiAgICBsaW5lQ2hhcnQsXG4gICAgaGlzdG9ncmFtLFxuICAgIGlzRW5sYXJnZWQsXG4gICAgaXNSYW5nZWQsXG4gICAgdGhlbWUsXG4gICAgLi4uY2hhcnRQcm9wc1xuICB9KSA9PiB7XG4gICAgY29uc3QgW2JydXNoaW5nLCBzZXRCcnVzaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2hvdmVyZWREUCwgb25Nb3VzZU1vdmVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2VuYWJsZUNoYXJ0SG92ZXIsIHNldEVuYWJsZUNoYXJ0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGhlaWdodCA9IGlzRW5sYXJnZWQgPyB0aGVtZS5yYW5nZVBsb3RITGFyZ2UgOiB0aGVtZS5yYW5nZVBsb3RIO1xuXG4gICAgY29uc3Qgb25CcnVzaFN0YXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgc2V0QnJ1c2hpbmcodHJ1ZSk7XG4gICAgICBvbk1vdXNlTW92ZShudWxsKTtcbiAgICAgIHNldEVuYWJsZUNoYXJ0SG92ZXIoZmFsc2UpO1xuICAgIH0sIFtzZXRCcnVzaGluZywgb25Nb3VzZU1vdmUsIHNldEVuYWJsZUNoYXJ0SG92ZXJdKTtcblxuICAgIGNvbnN0IG9uQnJ1c2hFbmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBzZXRCcnVzaGluZyhmYWxzZSk7XG4gICAgICBzZXRFbmFibGVDaGFydEhvdmVyKHRydWUpO1xuICAgIH0sIFtzZXRCcnVzaGluZywgc2V0RW5hYmxlQ2hhcnRIb3Zlcl0pO1xuXG4gICAgY29uc3Qgb25Nb3VzZW92ZXJIYW5kbGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBvbk1vdXNlTW92ZShudWxsKTtcbiAgICAgIHNldEVuYWJsZUNoYXJ0SG92ZXIoZmFsc2UpO1xuICAgIH0sIFtvbk1vdXNlTW92ZSwgc2V0RW5hYmxlQ2hhcnRIb3Zlcl0pO1xuXG4gICAgY29uc3Qgb25Nb3VzZW91dEhhbmRsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHNldEVuYWJsZUNoYXJ0SG92ZXIodHJ1ZSk7XG4gICAgfSwgW3NldEVuYWJsZUNoYXJ0SG92ZXJdKTtcblxuICAgIC8vIEpzRG9tIGhhdmUgbGltaXRlZCBzdXBwb3J0IGZvciBTVkcsIGQzIHdpbGwgZmFpbFxuICAgIGNvbnN0IGJydXNoQ29tcG9uZW50ID0gaXNUZXN0KCkgPyBudWxsIDogKFxuICAgICAgPFJhbmdlQnJ1c2hcbiAgICAgICAgb25CcnVzaD17b25CcnVzaH1cbiAgICAgICAgb25CcnVzaFN0YXJ0PXtvbkJydXNoU3RhcnR9XG4gICAgICAgIG9uQnJ1c2hFbmQ9e29uQnJ1c2hFbmR9XG4gICAgICAgIHJhbmdlPXtyYW5nZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBpc1JhbmdlZD17aXNSYW5nZWR9XG4gICAgICAgIG9uTW91c2VvdmVySGFuZGxlPXtvbk1vdXNlb3ZlckhhbmRsZX1cbiAgICAgICAgb25Nb3VzZW91dEhhbmRsZT17b25Nb3VzZW91dEhhbmRsZX1cbiAgICAgICAgey4uLmNoYXJ0UHJvcHN9XG4gICAgICAvPlxuICAgICk7XG5cbiAgICBjb25zdCBjb21tb25Qcm9wcyA9IHtcbiAgICAgIHdpZHRoLFxuICAgICAgdmFsdWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBtYXJnaW46IGlzRW5sYXJnZWQgPyB0aGVtZS5yYW5nZVBsb3RNYXJnaW5MYXJnZSA6IHRoZW1lLnJhbmdlUGxvdE1hcmdpbixcbiAgICAgIGJydXNoQ29tcG9uZW50LFxuICAgICAgYnJ1c2hpbmcsXG4gICAgICBpc0VubGFyZ2VkLFxuICAgICAgZW5hYmxlQ2hhcnRIb3ZlcixcbiAgICAgIG9uTW91c2VNb3ZlLFxuICAgICAgaG92ZXJlZERQLFxuICAgICAgaXNSYW5nZWQsXG4gICAgICAuLi5jaGFydFByb3BzXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkUmFuZ2VQbG90XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBgJHtpc0VubGFyZ2VkID8gdGhlbWUucmFuZ2VQbG90Q29udGFpbmVySExhcmdlIDogdGhlbWUucmFuZ2VQbG90Q29udGFpbmVySH1weGBcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyX19wbG90XCJcbiAgICAgID5cbiAgICAgICAge3Bsb3RUeXBlID09PSAnbGluZUNoYXJ0JyAmJiBsaW5lQ2hhcnQgPyAoXG4gICAgICAgICAgPExpbmVDaGFydCBsaW5lQ2hhcnQ9e2xpbmVDaGFydH0gey4uLmNvbW1vblByb3BzfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxIaXN0b2dyYW1QbG90IGhpc3RvZ3JhbT17aGlzdG9ncmFtfSB7Li4uY29tbW9uUHJvcHN9IC8+XG4gICAgICAgICl9XG4gICAgICA8L1N0eWxlZFJhbmdlUGxvdD5cbiAgICApO1xuICB9O1xuXG4gIFJhbmdlUGxvdC5wcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgaGlzdG9ncmFtOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHgwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB4MTogUHJvcFR5cGVzLm51bWJlclxuICAgICAgfSlcbiAgICApLFxuICAgIGxpbmVDaGFydDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwbG90VHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0VubGFyZ2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcbiAgcmV0dXJuIHdpdGhUaGVtZShSYW5nZVBsb3QpO1xufVxuIl19