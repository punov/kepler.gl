"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _progressBar = _interopRequireDefault(require("../progress-bar"));

var _styledComponents2 = require("../styled-components");

var _utils = require("../../../utils/utils");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** @typedef {import('./file-upload-progress').FileUploadProgressProps} FileUploadProgressProps*/
var StyledFileProgress = _styledComponents["default"].div.attrs({
  className: 'file-upload__progress'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 12px;\n  margin-top: 12px;\n  border-image: initial;\n  padding: 8px 12px;\n\n  .top-row {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .file-name {\n    font-weight: 500;\n  }\n  .middle-row {\n    margin-top: 6px;\n  }\n  .bottom-row {\n    margin-top: 6px;\n    text-align: start;\n  }\n"])), function (props) {
  return props.theme.textColorLT;
});

var StyledProgressWrapper = _styledComponents["default"].div.attrs({
  className: 'file-upload__progress__wrapper'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 400px;\n"])));

var StyledContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"])));

var formatPercent = function formatPercent(percent) {
  return "".concat(Math.floor(percent * 100), "%");
};
/**
 * @param {object} params
 * @param {string} params.message
 * @param {string} params.fileName
 * @param {number} params.percent
 * @param {any} params.error
 * @param {object} params.theme
 */


var UploadProgress = function UploadProgress(_ref) {
  var message = _ref.message,
      fileName = _ref.fileName,
      percent = _ref.percent,
      error = _ref.error,
      theme = _ref.theme;
  var percentStr = formatPercent(percent);
  var barColor = error ? theme.errorColor : theme.activeColorLT;
  return /*#__PURE__*/_react["default"].createElement(StyledFileProgress, {
    className: "file-upload-progress__message"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "top-row"
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.TruncatedTitleText, {
    className: "file-name",
    title: fileName
  }, fileName), /*#__PURE__*/_react["default"].createElement("div", {
    className: "percent"
  }, percentStr)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "middle-row"
  }, /*#__PURE__*/_react["default"].createElement(_progressBar["default"], {
    percent: percentStr,
    barColor: barColor,
    isLoading: true,
    theme: theme
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bottom-row",
    style: {
      color: error ? theme.errorColor : theme.textColorLT
    }
  }, error ? (0, _utils.getError)(error) : message));
};
/** @type {React.FunctionComponent<FileUploadProgressProps>} */


var FileUploadProgress = function FileUploadProgress(_ref2) {
  var fileLoadingProgress = _ref2.fileLoadingProgress,
      theme = _ref2.theme;
  return /*#__PURE__*/_react["default"].createElement(StyledContainer, null, /*#__PURE__*/_react["default"].createElement(StyledProgressWrapper, null, Object.values(fileLoadingProgress).map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(UploadProgress, (0, _extends2["default"])({}, item, {
      key: item.fileName,
      theme: theme
    }));
  })));
};

var _default = (0, _styledComponents.withTheme)(FileUploadProgress);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkLXByb2dyZXNzLmpzIl0sIm5hbWVzIjpbIlN0eWxlZEZpbGVQcm9ncmVzcyIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwiU3R5bGVkUHJvZ3Jlc3NXcmFwcGVyIiwiU3R5bGVkQ29udGFpbmVyIiwiZm9ybWF0UGVyY2VudCIsInBlcmNlbnQiLCJNYXRoIiwiZmxvb3IiLCJVcGxvYWRQcm9ncmVzcyIsIm1lc3NhZ2UiLCJmaWxlTmFtZSIsImVycm9yIiwicGVyY2VudFN0ciIsImJhckNvbG9yIiwiZXJyb3JDb2xvciIsImFjdGl2ZUNvbG9yTFQiLCJjb2xvciIsIkZpbGVVcGxvYWRQcm9ncmVzcyIsImZpbGVMb2FkaW5nUHJvZ3Jlc3MiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMxQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRCtCLENBQWpCLENBQUgsOGFBR2IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBSFEsQ0FBeEI7O0FBMEJBLElBQU1DLHFCQUFxQixHQUFHUCw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzdDQyxFQUFBQSxTQUFTLEVBQUU7QUFEa0MsQ0FBakIsQ0FBSCwyR0FBM0I7O0FBTUEsSUFBTUssZUFBZSxHQUFHUiw2QkFBT0MsR0FBVix3SkFBckI7O0FBTUEsSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxPQUFPO0FBQUEsbUJBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixPQUFPLEdBQUcsR0FBckIsQ0FBUDtBQUFBLENBQTdCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFnRDtBQUFBLE1BQTlDQyxPQUE4QyxRQUE5Q0EsT0FBOEM7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDO0FBQUEsTUFBM0JMLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCTSxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYWCxLQUFXLFFBQVhBLEtBQVc7QUFDckUsTUFBTVksVUFBVSxHQUFHUixhQUFhLENBQUNDLE9BQUQsQ0FBaEM7QUFDQSxNQUFNUSxRQUFRLEdBQUdGLEtBQUssR0FBR1gsS0FBSyxDQUFDYyxVQUFULEdBQXNCZCxLQUFLLENBQUNlLGFBQWxEO0FBRUEsc0JBQ0UsZ0NBQUMsa0JBQUQ7QUFBb0IsSUFBQSxTQUFTLEVBQUM7QUFBOUIsa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLHFDQUFEO0FBQW9CLElBQUEsU0FBUyxFQUFDLFdBQTlCO0FBQTBDLElBQUEsS0FBSyxFQUFFTDtBQUFqRCxLQUNHQSxRQURILENBREYsZUFJRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBMEJFLFVBQTFCLENBSkYsQ0FERixlQU9FO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnQ0FBQyx1QkFBRDtBQUFhLElBQUEsT0FBTyxFQUFFQSxVQUF0QjtBQUFrQyxJQUFBLFFBQVEsRUFBRUMsUUFBNUM7QUFBc0QsSUFBQSxTQUFTLE1BQS9EO0FBQWdFLElBQUEsS0FBSyxFQUFFYjtBQUF2RSxJQURGLENBUEYsZUFVRTtBQUFLLElBQUEsU0FBUyxFQUFDLFlBQWY7QUFBNEIsSUFBQSxLQUFLLEVBQUU7QUFBQ2dCLE1BQUFBLEtBQUssRUFBRUwsS0FBSyxHQUFHWCxLQUFLLENBQUNjLFVBQVQsR0FBc0JkLEtBQUssQ0FBQ0M7QUFBekM7QUFBbkMsS0FDR1UsS0FBSyxHQUFHLHFCQUFTQSxLQUFULENBQUgsR0FBcUJGLE9BRDdCLENBVkYsQ0FERjtBQWdCRCxDQXBCRDtBQXNCQTs7O0FBQ0EsSUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUVDLG1CQUFGLFNBQUVBLG1CQUFGO0FBQUEsTUFBdUJsQixLQUF2QixTQUF1QkEsS0FBdkI7QUFBQSxzQkFDekIsZ0NBQUMsZUFBRCxxQkFDRSxnQ0FBQyxxQkFBRCxRQUNHbUIsTUFBTSxDQUFDQyxNQUFQLENBQWNGLG1CQUFkLEVBQW1DRyxHQUFuQyxDQUF1QyxVQUFBQyxJQUFJO0FBQUEsd0JBQzFDLGdDQUFDLGNBQUQsZ0NBQW9CQSxJQUFwQjtBQUEwQixNQUFBLEdBQUcsRUFBRUEsSUFBSSxDQUFDWixRQUFwQztBQUE4QyxNQUFBLEtBQUssRUFBRVY7QUFBckQsT0FEMEM7QUFBQSxHQUEzQyxDQURILENBREYsQ0FEeUI7QUFBQSxDQUEzQjs7ZUFVZSxpQ0FBVWlCLGtCQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwge3dpdGhUaGVtZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQge1RydW5jYXRlZFRpdGxlVGV4dH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtnZXRFcnJvcn0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9maWxlLXVwbG9hZC1wcm9ncmVzcycpLkZpbGVVcGxvYWRQcm9ncmVzc1Byb3BzfSBGaWxlVXBsb2FkUHJvZ3Jlc3NQcm9wcyovXG5cbmNvbnN0IFN0eWxlZEZpbGVQcm9ncmVzcyA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdmaWxlLXVwbG9hZF9fcHJvZ3Jlc3MnXG59KWBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG5cbiAgLnRvcC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmZpbGUtbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAubWlkZGxlLXJvdyB7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG4gIC5ib3R0b20tcm93IHtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFByb2dyZXNzV3JhcHBlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdmaWxlLXVwbG9hZF9fcHJvZ3Jlc3NfX3dyYXBwZXInXG59KWBcbiAgd2lkdGg6IDQwMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgZm9ybWF0UGVyY2VudCA9IHBlcmNlbnQgPT4gYCR7TWF0aC5mbG9vcihwZXJjZW50ICogMTAwKX0lYDtcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm1lc3NhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZmlsZU5hbWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMucGVyY2VudFxuICogQHBhcmFtIHthbnl9IHBhcmFtcy5lcnJvclxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcy50aGVtZVxuICovXG5jb25zdCBVcGxvYWRQcm9ncmVzcyA9ICh7bWVzc2FnZSwgZmlsZU5hbWUsIHBlcmNlbnQsIGVycm9yLCB0aGVtZX0pID0+IHtcbiAgY29uc3QgcGVyY2VudFN0ciA9IGZvcm1hdFBlcmNlbnQocGVyY2VudCk7XG4gIGNvbnN0IGJhckNvbG9yID0gZXJyb3IgPyB0aGVtZS5lcnJvckNvbG9yIDogdGhlbWUuYWN0aXZlQ29sb3JMVDtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRGaWxlUHJvZ3Jlc3MgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWQtcHJvZ3Jlc3NfX21lc3NhZ2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXJvd1wiPlxuICAgICAgICA8VHJ1bmNhdGVkVGl0bGVUZXh0IGNsYXNzTmFtZT1cImZpbGUtbmFtZVwiIHRpdGxlPXtmaWxlTmFtZX0+XG4gICAgICAgICAge2ZpbGVOYW1lfVxuICAgICAgICA8L1RydW5jYXRlZFRpdGxlVGV4dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJjZW50XCI+e3BlcmNlbnRTdHJ9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlLXJvd1wiPlxuICAgICAgICA8UHJvZ3Jlc3NCYXIgcGVyY2VudD17cGVyY2VudFN0cn0gYmFyQ29sb3I9e2JhckNvbG9yfSBpc0xvYWRpbmcgdGhlbWU9e3RoZW1lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1yb3dcIiBzdHlsZT17e2NvbG9yOiBlcnJvciA/IHRoZW1lLmVycm9yQ29sb3IgOiB0aGVtZS50ZXh0Q29sb3JMVH19PlxuICAgICAgICB7ZXJyb3IgPyBnZXRFcnJvcihlcnJvcikgOiBtZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgPC9TdHlsZWRGaWxlUHJvZ3Jlc3M+XG4gICk7XG59O1xuXG4vKiogQHR5cGUge1JlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEZpbGVVcGxvYWRQcm9ncmVzc1Byb3BzPn0gKi9cbmNvbnN0IEZpbGVVcGxvYWRQcm9ncmVzcyA9ICh7ZmlsZUxvYWRpbmdQcm9ncmVzcywgdGhlbWV9KSA9PiAoXG4gIDxTdHlsZWRDb250YWluZXI+XG4gICAgPFN0eWxlZFByb2dyZXNzV3JhcHBlcj5cbiAgICAgIHtPYmplY3QudmFsdWVzKGZpbGVMb2FkaW5nUHJvZ3Jlc3MpLm1hcChpdGVtID0+IChcbiAgICAgICAgPFVwbG9hZFByb2dyZXNzIHsuLi5pdGVtfSBrZXk9e2l0ZW0uZmlsZU5hbWV9IHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgICkpfVxuICAgIDwvU3R5bGVkUHJvZ3Jlc3NXcmFwcGVyPlxuICA8L1N0eWxlZENvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShGaWxlVXBsb2FkUHJvZ3Jlc3MpO1xuIl19