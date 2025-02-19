"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadDataModalFactory = LoadDataModalFactory;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _reactIntl = require("react-intl");

var _fileUpload = _interopRequireDefault(require("../common/file-uploader/file-upload"));

var _loadStorageMap = _interopRequireDefault(require("./load-storage-map"));

var _modalTabs = _interopRequireDefault(require("./modal-tabs"));

var _loadingDialog = _interopRequireDefault(require("./loading-dialog"));

var _defaultSettings = require("../../constants/default-settings");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** @typedef {import('./load-data-modal').LoadDataModalProps} LoadDataModalProps */
var StyledLoadDataModal = _styledComponents["default"].div.attrs({
  className: 'load-data-modal'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding: ", ";\n  min-height: 440px;\n  display: flex;\n  flex-direction: column;\n"])), function (props) {
  return props.theme.modalPadding;
});

var noop = function noop() {};

var getDefaultMethod = function getDefaultMethod(methods) {
  return Array.isArray(methods) ? (0, _lodash["default"])(methods, [0]) : null;
};

LoadDataModalFactory.deps = [_modalTabs["default"], _fileUpload["default"], _loadStorageMap["default"]];

function LoadDataModalFactory(ModalTabs, FileUpload, LoadStorageMap) {
  /** @type {React.FunctionComponent<LoadDataModalProps>} */
  var LoadDataModal = function LoadDataModal(props) {
    var intl = (0, _reactIntl.useIntl)();
    var loadingMethods = props.loadingMethods,
        isCloudMapLoading = props.isCloudMapLoading;

    var _useState = (0, _react.useState)(getDefaultMethod(loadingMethods)),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        currentMethod = _useState2[0],
        toggleMethod = _useState2[1];

    var ElementType = currentMethod.elementType;
    return /*#__PURE__*/_react["default"].createElement(StyledLoadDataModal, null, /*#__PURE__*/_react["default"].createElement(ModalTabs, {
      currentMethod: currentMethod.id,
      loadingMethods: loadingMethods,
      toggleMethod: toggleMethod
    }), isCloudMapLoading ? /*#__PURE__*/_react["default"].createElement(_loadingDialog["default"], {
      size: 64
    }) : currentMethod && /*#__PURE__*/_react["default"].createElement(ElementType, (0, _extends2["default"])({
      key: currentMethod.id,
      intl: intl
    }, props)));
  };

  LoadDataModal.defaultProps = {
    onFileUpload: noop,
    fileLoading: false,
    loadingMethods: [{
      id: _defaultSettings.LOADING_METHODS.upload,
      label: 'modal.loadData.upload',
      elementType: FileUpload
    }, {
      id: _defaultSettings.LOADING_METHODS.storage,
      label: 'modal.loadData.storage',
      elementType: LoadStorageMap
    }]
  };
  return LoadDataModal;
}

var _default = LoadDataModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9sb2FkLWRhdGEtbW9kYWwuanMiXSwibmFtZXMiOlsiU3R5bGVkTG9hZERhdGFNb2RhbCIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ0aGVtZSIsIm1vZGFsUGFkZGluZyIsIm5vb3AiLCJnZXREZWZhdWx0TWV0aG9kIiwibWV0aG9kcyIsIkFycmF5IiwiaXNBcnJheSIsIkxvYWREYXRhTW9kYWxGYWN0b3J5IiwiZGVwcyIsIk1vZGFsVGFic0ZhY3RvcnkiLCJGaWxlVXBsb2FkRmFjdG9yeSIsIkxvYWRTdG9yYWdlTWFwRmFjdG9yeSIsIk1vZGFsVGFicyIsIkZpbGVVcGxvYWQiLCJMb2FkU3RvcmFnZU1hcCIsIkxvYWREYXRhTW9kYWwiLCJpbnRsIiwibG9hZGluZ01ldGhvZHMiLCJpc0Nsb3VkTWFwTG9hZGluZyIsImN1cnJlbnRNZXRob2QiLCJ0b2dnbGVNZXRob2QiLCJFbGVtZW50VHlwZSIsImVsZW1lbnRUeXBlIiwiaWQiLCJkZWZhdWx0UHJvcHMiLCJvbkZpbGVVcGxvYWQiLCJmaWxlTG9hZGluZyIsIkxPQURJTkdfTUVUSE9EUyIsInVwbG9hZCIsImxhYmVsIiwic3RvcmFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBO0FBRUEsSUFBTUEsbUJBQW1CLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDM0NDLEVBQUFBLFNBQVMsRUFBRTtBQURnQyxDQUFqQixDQUFILDhLQUdaLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBaEI7QUFBQSxDQUhPLENBQXpCOztBQVNBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLE9BQU87QUFBQSxTQUFLQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsT0FBZCxJQUF5Qix3QkFBSUEsT0FBSixFQUFhLENBQUMsQ0FBRCxDQUFiLENBQXpCLEdBQTZDLElBQWxEO0FBQUEsQ0FBaEM7O0FBRUFHLG9CQUFvQixDQUFDQyxJQUFyQixHQUE0QixDQUFDQyxxQkFBRCxFQUFtQkMsc0JBQW5CLEVBQXNDQywwQkFBdEMsQ0FBNUI7O0FBRU8sU0FBU0osb0JBQVQsQ0FBOEJLLFNBQTlCLEVBQXlDQyxVQUF6QyxFQUFxREMsY0FBckQsRUFBcUU7QUFDMUU7QUFDQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFoQixLQUFLLEVBQUk7QUFDN0IsUUFBTWlCLElBQUksR0FBRyx5QkFBYjtBQUNBLFFBQU9DLGNBQVAsR0FBNENsQixLQUE1QyxDQUFPa0IsY0FBUDtBQUFBLFFBQXVCQyxpQkFBdkIsR0FBNENuQixLQUE1QyxDQUF1Qm1CLGlCQUF2Qjs7QUFDQSxvQkFBc0MscUJBQVNmLGdCQUFnQixDQUFDYyxjQUFELENBQXpCLENBQXRDO0FBQUE7QUFBQSxRQUFPRSxhQUFQO0FBQUEsUUFBc0JDLFlBQXRCOztBQUVBLFFBQU1DLFdBQVcsR0FBR0YsYUFBYSxDQUFDRyxXQUFsQztBQUVBLHdCQUNFLGdDQUFDLG1CQUFELHFCQUNFLGdDQUFDLFNBQUQ7QUFDRSxNQUFBLGFBQWEsRUFBRUgsYUFBYSxDQUFDSSxFQUQvQjtBQUVFLE1BQUEsY0FBYyxFQUFFTixjQUZsQjtBQUdFLE1BQUEsWUFBWSxFQUFFRztBQUhoQixNQURGLEVBTUdGLGlCQUFpQixnQkFDaEIsZ0NBQUMseUJBQUQ7QUFBZSxNQUFBLElBQUksRUFBRTtBQUFyQixNQURnQixHQUdoQkMsYUFBYSxpQkFBSSxnQ0FBQyxXQUFEO0FBQWEsTUFBQSxHQUFHLEVBQUVBLGFBQWEsQ0FBQ0ksRUFBaEM7QUFBb0MsTUFBQSxJQUFJLEVBQUVQO0FBQTFDLE9BQW9EakIsS0FBcEQsRUFUckIsQ0FERjtBQWNELEdBckJEOztBQXVCQWdCLEVBQUFBLGFBQWEsQ0FBQ1MsWUFBZCxHQUE2QjtBQUMzQkMsSUFBQUEsWUFBWSxFQUFFdkIsSUFEYTtBQUUzQndCLElBQUFBLFdBQVcsRUFBRSxLQUZjO0FBRzNCVCxJQUFBQSxjQUFjLEVBQUUsQ0FDZDtBQUNFTSxNQUFBQSxFQUFFLEVBQUVJLGlDQUFnQkMsTUFEdEI7QUFFRUMsTUFBQUEsS0FBSyxFQUFFLHVCQUZUO0FBR0VQLE1BQUFBLFdBQVcsRUFBRVQ7QUFIZixLQURjLEVBTWQ7QUFDRVUsTUFBQUEsRUFBRSxFQUFFSSxpQ0FBZ0JHLE9BRHRCO0FBRUVELE1BQUFBLEtBQUssRUFBRSx3QkFGVDtBQUdFUCxNQUFBQSxXQUFXLEVBQUVSO0FBSGYsS0FOYztBQUhXLEdBQTdCO0FBaUJBLFNBQU9DLGFBQVA7QUFDRDs7ZUFFY1Isb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xuaW1wb3J0IHt1c2VJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IEZpbGVVcGxvYWRGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWQnO1xuaW1wb3J0IExvYWRTdG9yYWdlTWFwRmFjdG9yeSBmcm9tICcuL2xvYWQtc3RvcmFnZS1tYXAnO1xuaW1wb3J0IE1vZGFsVGFic0ZhY3RvcnkgZnJvbSAnLi9tb2RhbC10YWJzJztcbmltcG9ydCBMb2FkaW5nRGlhbG9nIGZyb20gJy4vbG9hZGluZy1kaWFsb2cnO1xuXG5pbXBvcnQge0xPQURJTkdfTUVUSE9EU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9sb2FkLWRhdGEtbW9kYWwnKS5Mb2FkRGF0YU1vZGFsUHJvcHN9IExvYWREYXRhTW9kYWxQcm9wcyAqL1xuXG5jb25zdCBTdHlsZWRMb2FkRGF0YU1vZGFsID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xvYWQtZGF0YS1tb2RhbCdcbn0pYFxuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsUGFkZGluZ307XG4gIG1pbi1oZWlnaHQ6IDQ0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuY29uc3QgZ2V0RGVmYXVsdE1ldGhvZCA9IG1ldGhvZHMgPT4gKEFycmF5LmlzQXJyYXkobWV0aG9kcykgPyBnZXQobWV0aG9kcywgWzBdKSA6IG51bGwpO1xuXG5Mb2FkRGF0YU1vZGFsRmFjdG9yeS5kZXBzID0gW01vZGFsVGFic0ZhY3RvcnksIEZpbGVVcGxvYWRGYWN0b3J5LCBMb2FkU3RvcmFnZU1hcEZhY3RvcnldO1xuXG5leHBvcnQgZnVuY3Rpb24gTG9hZERhdGFNb2RhbEZhY3RvcnkoTW9kYWxUYWJzLCBGaWxlVXBsb2FkLCBMb2FkU3RvcmFnZU1hcCkge1xuICAvKiogQHR5cGUge1JlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PExvYWREYXRhTW9kYWxQcm9wcz59ICovXG4gIGNvbnN0IExvYWREYXRhTW9kYWwgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgaW50bCA9IHVzZUludGwoKTtcbiAgICBjb25zdCB7bG9hZGluZ01ldGhvZHMsIGlzQ2xvdWRNYXBMb2FkaW5nfSA9IHByb3BzO1xuICAgIGNvbnN0IFtjdXJyZW50TWV0aG9kLCB0b2dnbGVNZXRob2RdID0gdXNlU3RhdGUoZ2V0RGVmYXVsdE1ldGhvZChsb2FkaW5nTWV0aG9kcykpO1xuXG4gICAgY29uc3QgRWxlbWVudFR5cGUgPSBjdXJyZW50TWV0aG9kLmVsZW1lbnRUeXBlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMb2FkRGF0YU1vZGFsPlxuICAgICAgICA8TW9kYWxUYWJzXG4gICAgICAgICAgY3VycmVudE1ldGhvZD17Y3VycmVudE1ldGhvZC5pZH1cbiAgICAgICAgICBsb2FkaW5nTWV0aG9kcz17bG9hZGluZ01ldGhvZHN9XG4gICAgICAgICAgdG9nZ2xlTWV0aG9kPXt0b2dnbGVNZXRob2R9XG4gICAgICAgIC8+XG4gICAgICAgIHtpc0Nsb3VkTWFwTG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGluZ0RpYWxvZyBzaXplPXs2NH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBjdXJyZW50TWV0aG9kICYmIDxFbGVtZW50VHlwZSBrZXk9e2N1cnJlbnRNZXRob2QuaWR9IGludGw9e2ludGx9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvU3R5bGVkTG9hZERhdGFNb2RhbD5cbiAgICApO1xuICB9O1xuXG4gIExvYWREYXRhTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICAgIG9uRmlsZVVwbG9hZDogbm9vcCxcbiAgICBmaWxlTG9hZGluZzogZmFsc2UsXG4gICAgbG9hZGluZ01ldGhvZHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IExPQURJTkdfTUVUSE9EUy51cGxvYWQsXG4gICAgICAgIGxhYmVsOiAnbW9kYWwubG9hZERhdGEudXBsb2FkJyxcbiAgICAgICAgZWxlbWVudFR5cGU6IEZpbGVVcGxvYWRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBMT0FESU5HX01FVEhPRFMuc3RvcmFnZSxcbiAgICAgICAgbGFiZWw6ICdtb2RhbC5sb2FkRGF0YS5zdG9yYWdlJyxcbiAgICAgICAgZWxlbWVudFR5cGU6IExvYWRTdG9yYWdlTWFwXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiBMb2FkRGF0YU1vZGFsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkRGF0YU1vZGFsRmFjdG9yeTtcbiJdfQ==