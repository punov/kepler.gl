"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../common/styled-components");

var _filterPanelHeader = _interopRequireDefault(require("../../side-panel/filter-panel/filter-panel-header"));

var _panelHeaderAction = _interopRequireDefault(require("../../side-panel/panel-header-action"));

var _sourceDataSelector = _interopRequireDefault(require("../../side-panel/common/source-data-selector"));

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
FieldPanelWithFieldSelectFactory.deps = [_filterPanelHeader["default"], _sourceDataSelector["default"], _fieldSelector["default"], _panelHeaderAction["default"]];

function FieldPanelWithFieldSelectFactory(FilterPanelHeader, SourceDataSelector, FieldSelector, PanelHeaderAction) {
  /** @type {import('./filter-panel-types').FilterPanelComponent} */
  var FilterPanelWithFieldSelect = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var allAvailableFields = _ref.allAvailableFields,
        children = _ref.children,
        datasets = _ref.datasets,
        filter = _ref.filter,
        idx = _ref.idx,
        removeFilter = _ref.removeFilter,
        setFilter = _ref.setFilter,
        _ref$panelActions = _ref.panelActions,
        panelActions = _ref$panelActions === void 0 ? [] : _ref$panelActions;
    var onFieldSelector = (0, _react.useCallback)(function (field) {
      return setFilter(idx, 'name', field.name);
    }, [idx, setFilter]);
    var onSourceDataSelector = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'dataId', [value]);
    }, [idx, setFilter]);
    var fieldValue = (0, _react.useMemo)(function () {
      return Array.isArray(filter.name) ? filter.name[0] : filter.name;
    }, [filter.name]);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(FilterPanelHeader, {
      datasets: [datasets[filter.dataId[0]]],
      allAvailableFields: allAvailableFields,
      idx: idx,
      filter: filter,
      removeFilter: removeFilter
    }, /*#__PURE__*/_react["default"].createElement(FieldSelector, {
      inputTheme: "secondary",
      fields: allAvailableFields,
      value: fieldValue,
      erasable: false,
      onSelect: onFieldSelector
    }), panelActions && panelActions.map(function (panelAction) {
      return /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
        id: panelAction.id,
        key: panelAction.id,
        onClick: panelAction.onClick,
        tooltip: panelAction.tooltip,
        IconComponent: panelAction.iconComponent,
        active: panelAction.active
      });
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilterContent, {
      className: "filter-panel__content"
    }, Object.keys(datasets).length > 1 && /*#__PURE__*/_react["default"].createElement(SourceDataSelector, {
      inputTheme: "secondary",
      datasets: datasets,
      disabled: filter.freeze,
      dataId: filter.dataId,
      onSelect: onSourceDataSelector
    }), children));
  });

  FilterPanelWithFieldSelect.displayName = 'FilterPanelWithFieldSelect';
  return FilterPanelWithFieldSelect;
}

var _default = FieldPanelWithFieldSelectFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9maWx0ZXItcGFuZWwtd2l0aC1maWVsZC1zZWxlY3QuanMiXSwibmFtZXMiOlsiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkiLCJkZXBzIiwiRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5IiwiU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSIsIkZpZWxkU2VsZWN0b3JGYWN0b3J5IiwiUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IiwiRmlsdGVyUGFuZWxIZWFkZXIiLCJTb3VyY2VEYXRhU2VsZWN0b3IiLCJGaWVsZFNlbGVjdG9yIiwiUGFuZWxIZWFkZXJBY3Rpb24iLCJGaWx0ZXJQYW5lbFdpdGhGaWVsZFNlbGVjdCIsIlJlYWN0IiwibWVtbyIsImFsbEF2YWlsYWJsZUZpZWxkcyIsImNoaWxkcmVuIiwiZGF0YXNldHMiLCJmaWx0ZXIiLCJpZHgiLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJwYW5lbEFjdGlvbnMiLCJvbkZpZWxkU2VsZWN0b3IiLCJmaWVsZCIsIm5hbWUiLCJvblNvdXJjZURhdGFTZWxlY3RvciIsInZhbHVlIiwiZmllbGRWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImRhdGFJZCIsIm1hcCIsInBhbmVsQWN0aW9uIiwiaWQiLCJvbkNsaWNrIiwidG9vbHRpcCIsImljb25Db21wb25lbnQiLCJhY3RpdmUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZnJlZXplIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUF6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQUEsZ0NBQWdDLENBQUNDLElBQWpDLEdBQXdD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QUZaO0FBR0UsTUFBQSxRQUFRLEVBQUVDLE1BQU0sQ0FBQ3dCLE1BSG5CO0FBSUUsTUFBQSxNQUFNLEVBQUV4QixNQUFNLENBQUNhLE1BSmpCO0FBS0UsTUFBQSxRQUFRLEVBQUVMO0FBTFosTUFGSixFQVVHVixRQVZILENBM0JGLENBREY7QUEwQ0QsR0FwRWdDLENBQW5DOztBQXVFQUosRUFBQUEsMEJBQTBCLENBQUMrQixXQUEzQixHQUF5Qyw0QkFBekM7QUFFQSxTQUFPL0IsMEJBQVA7QUFDRDs7ZUFFY1YsZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTdHlsZWRGaWx0ZXJDb250ZW50fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9maWx0ZXItcGFuZWwvZmlsdGVyLXBhbmVsLWhlYWRlcic7XG5pbXBvcnQgUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcbmltcG9ydCBTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9jb21tb24vc291cmNlLWRhdGEtc2VsZWN0b3InO1xuaW1wb3J0IEZpZWxkU2VsZWN0b3JGYWN0b3J5IGZyb20gJy4uLy4uL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XG5cbkZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3RGYWN0b3J5LmRlcHMgPSBbXG4gIEZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSxcbiAgU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSxcbiAgRmllbGRTZWxlY3RvckZhY3RvcnksXG4gIFBhbmVsSGVhZGVyQWN0aW9uRmFjdG9yeVxuXTtcblxuZnVuY3Rpb24gRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkoXG4gIEZpbHRlclBhbmVsSGVhZGVyLFxuICBTb3VyY2VEYXRhU2VsZWN0b3IsXG4gIEZpZWxkU2VsZWN0b3IsXG4gIFBhbmVsSGVhZGVyQWN0aW9uXG4pIHtcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJy4vZmlsdGVyLXBhbmVsLXR5cGVzJykuRmlsdGVyUGFuZWxDb21wb25lbnR9ICovXG4gIGNvbnN0IEZpbHRlclBhbmVsV2l0aEZpZWxkU2VsZWN0ID0gUmVhY3QubWVtbyhcbiAgICAoe1xuICAgICAgYWxsQXZhaWxhYmxlRmllbGRzLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkYXRhc2V0cyxcbiAgICAgIGZpbHRlcixcbiAgICAgIGlkeCxcbiAgICAgIHJlbW92ZUZpbHRlcixcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIHBhbmVsQWN0aW9ucyA9IFtdXG4gICAgfSkgPT4ge1xuICAgICAgY29uc3Qgb25GaWVsZFNlbGVjdG9yID0gdXNlQ2FsbGJhY2soZmllbGQgPT4gc2V0RmlsdGVyKGlkeCwgJ25hbWUnLCBmaWVsZC5uYW1lKSwgW1xuICAgICAgICBpZHgsXG4gICAgICAgIHNldEZpbHRlclxuICAgICAgXSk7XG5cbiAgICAgIGNvbnN0IG9uU291cmNlRGF0YVNlbGVjdG9yID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ2RhdGFJZCcsIFt2YWx1ZV0pLCBbXG4gICAgICAgIGlkeCxcbiAgICAgICAgc2V0RmlsdGVyXG4gICAgICBdKTtcblxuICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+ICgoQXJyYXkuaXNBcnJheShmaWx0ZXIubmFtZSkgPyBmaWx0ZXIubmFtZVswXSA6IGZpbHRlci5uYW1lKSksXG4gICAgICAgIFtmaWx0ZXIubmFtZV1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZpbHRlclBhbmVsSGVhZGVyXG4gICAgICAgICAgICBkYXRhc2V0cz17W2RhdGFzZXRzW2ZpbHRlci5kYXRhSWRbMF1dXX1cbiAgICAgICAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcz17YWxsQXZhaWxhYmxlRmllbGRzfVxuICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgIHJlbW92ZUZpbHRlcj17cmVtb3ZlRmlsdGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXG4gICAgICAgICAgICAgIGlucHV0VGhlbWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBmaWVsZHM9e2FsbEF2YWlsYWJsZUZpZWxkc31cbiAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkVmFsdWV9XG4gICAgICAgICAgICAgIGVyYXNhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e29uRmllbGRTZWxlY3Rvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7cGFuZWxBY3Rpb25zICYmXG4gICAgICAgICAgICAgIHBhbmVsQWN0aW9ucy5tYXAocGFuZWxBY3Rpb24gPT4gKFxuICAgICAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICAgICAgaWQ9e3BhbmVsQWN0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAga2V5PXtwYW5lbEFjdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3BhbmVsQWN0aW9uLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICB0b29sdGlwPXtwYW5lbEFjdGlvbi50b29sdGlwfVxuICAgICAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17cGFuZWxBY3Rpb24uaWNvbkNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZT17cGFuZWxBY3Rpb24uYWN0aXZlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRmlsdGVyUGFuZWxIZWFkZXI+XG4gICAgICAgICAgPFN0eWxlZEZpbHRlckNvbnRlbnQgY2xhc3NOYW1lPVwiZmlsdGVyLXBhbmVsX19jb250ZW50XCI+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICA8U291cmNlRGF0YVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgaW5wdXRUaGVtZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmaWx0ZXIuZnJlZXplfVxuICAgICAgICAgICAgICAgIGRhdGFJZD17ZmlsdGVyLmRhdGFJZH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17b25Tb3VyY2VEYXRhU2VsZWN0b3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvU3R5bGVkRmlsdGVyQ29udGVudD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICBGaWx0ZXJQYW5lbFdpdGhGaWVsZFNlbGVjdC5kaXNwbGF5TmFtZSA9ICdGaWx0ZXJQYW5lbFdpdGhGaWVsZFNlbGVjdCc7XG5cbiAgcmV0dXJuIEZpbHRlclBhbmVsV2l0aEZpZWxkU2VsZWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0RmFjdG9yeTtcbiJdfQ==