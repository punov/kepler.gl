"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _portaled = _interopRequireDefault(require("../portaled"));

var _dropdownList = _interopRequireDefault(require("../item-selector/dropdown-list"));

var _defaultSettings = require("../../../constants/default-settings");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ListItem = function ListItem(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(value.icon, {
    height: "13px"
  }), value.display);
};

var StyledOptionsDropdown = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .list-selector {\n    border-top: 0;\n    width: max-content;\n    padding: 8px 0;\n  }\n\n  .list__item > div {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    justify-content: flex-start;\n    line-height: 18px;\n\n    svg {\n      margin-right: 5px;\n    }\n  }\n"])));

var OptionDropdown = function OptionDropdown(props) {
  var isOpened = props.isOpened,
      column = props.column,
      toggleMoreOptions = props.toggleMoreOptions,
      sortTableColumn = props.sortTableColumn,
      pinTableColumn = props.pinTableColumn,
      copyTableColumn = props.copyTableColumn;
  var onOptionSelected = (0, _react.useCallback)(function (_ref2) {
    var value = _ref2.value;

    switch (value) {
      case _defaultSettings.TABLE_OPTION.SORT_ASC:
        sortTableColumn(_defaultSettings.SORT_ORDER.ASCENDING);
        break;

      case _defaultSettings.TABLE_OPTION.SORT_DES:
        sortTableColumn(_defaultSettings.SORT_ORDER.DESCENDING);
        break;

      case _defaultSettings.TABLE_OPTION.UNSORT:
        sortTableColumn(_defaultSettings.SORT_ORDER.UNSORT);
        break;

      case _defaultSettings.TABLE_OPTION.PIN:
        pinTableColumn();
        break;

      case _defaultSettings.TABLE_OPTION.UNPIN:
        pinTableColumn();
        break;

      case _defaultSettings.TABLE_OPTION.COPY:
        copyTableColumn();
        break;

      default:
        break;
    }

    toggleMoreOptions(column);
  }, [column, sortTableColumn, pinTableColumn, copyTableColumn, toggleMoreOptions]);

  var options = _defaultSettings.TABLE_OPTION_LIST.filter(function (op) {
    return !op.condition || op.condition(props);
  });

  return /*#__PURE__*/_react["default"].createElement(_portaled["default"], {
    right: 120,
    top: 20,
    isOpened: isOpened,
    onClose: function onClose() {
      return toggleMoreOptions(column);
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledOptionsDropdown, {
    className: "more-options"
  }, /*#__PURE__*/_react["default"].createElement(_dropdownList["default"], {
    displayOption: function displayOption(d) {
      return d.display;
    },
    options: options,
    customListItemComponent: ListItem,
    onOptionSelected: onOptionSelected,
    light: true
  })));
};

var _default = OptionDropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9kYXRhLXRhYmxlL29wdGlvbi1kcm9wZG93bi5qcyJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsInZhbHVlIiwiZGlzcGxheSIsIlN0eWxlZE9wdGlvbnNEcm9wZG93biIsInN0eWxlZCIsImRpdiIsIk9wdGlvbkRyb3Bkb3duIiwicHJvcHMiLCJpc09wZW5lZCIsImNvbHVtbiIsInRvZ2dsZU1vcmVPcHRpb25zIiwic29ydFRhYmxlQ29sdW1uIiwicGluVGFibGVDb2x1bW4iLCJjb3B5VGFibGVDb2x1bW4iLCJvbk9wdGlvblNlbGVjdGVkIiwiVEFCTEVfT1BUSU9OIiwiU09SVF9BU0MiLCJTT1JUX09SREVSIiwiQVNDRU5ESU5HIiwiU09SVF9ERVMiLCJERVNDRU5ESU5HIiwiVU5TT1JUIiwiUElOIiwiVU5QSU4iLCJDT1BZIiwib3B0aW9ucyIsIlRBQkxFX09QVElPTl9MSVNUIiwiZmlsdGVyIiwib3AiLCJjb25kaXRpb24iLCJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsc0JBQ2YsMERBQ0UsZ0NBQUMsS0FBRCxDQUFPLElBQVA7QUFBWSxJQUFBLE1BQU0sRUFBQztBQUFuQixJQURGLEVBRUdBLEtBQUssQ0FBQ0MsT0FGVCxDQURlO0FBQUEsQ0FBakI7O0FBT0EsSUFBTUMscUJBQXFCLEdBQUdDLDZCQUFPQyxHQUFWLGlZQUEzQjs7QUFvQkEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxLQUFLLEVBQUk7QUFDOUIsTUFDRUMsUUFERixHQU9JRCxLQVBKLENBQ0VDLFFBREY7QUFBQSxNQUVFQyxNQUZGLEdBT0lGLEtBUEosQ0FFRUUsTUFGRjtBQUFBLE1BR0VDLGlCQUhGLEdBT0lILEtBUEosQ0FHRUcsaUJBSEY7QUFBQSxNQUlFQyxlQUpGLEdBT0lKLEtBUEosQ0FJRUksZUFKRjtBQUFBLE1BS0VDLGNBTEYsR0FPSUwsS0FQSixDQUtFSyxjQUxGO0FBQUEsTUFNRUMsZUFORixHQU9JTixLQVBKLENBTUVNLGVBTkY7QUFRQSxNQUFNQyxnQkFBZ0IsR0FBRyx3QkFDdkIsaUJBQWE7QUFBQSxRQUFYYixLQUFXLFNBQVhBLEtBQVc7O0FBQ1gsWUFBUUEsS0FBUjtBQUNFLFdBQUtjLDhCQUFhQyxRQUFsQjtBQUNFTCxRQUFBQSxlQUFlLENBQUNNLDRCQUFXQyxTQUFaLENBQWY7QUFDQTs7QUFDRixXQUFLSCw4QkFBYUksUUFBbEI7QUFDRVIsUUFBQUEsZUFBZSxDQUFDTSw0QkFBV0csVUFBWixDQUFmO0FBQ0E7O0FBQ0YsV0FBS0wsOEJBQWFNLE1BQWxCO0FBQ0VWLFFBQUFBLGVBQWUsQ0FBQ00sNEJBQVdJLE1BQVosQ0FBZjtBQUNBOztBQUNGLFdBQUtOLDhCQUFhTyxHQUFsQjtBQUNFVixRQUFBQSxjQUFjO0FBQ2Q7O0FBQ0YsV0FBS0csOEJBQWFRLEtBQWxCO0FBQ0VYLFFBQUFBLGNBQWM7QUFDZDs7QUFDRixXQUFLRyw4QkFBYVMsSUFBbEI7QUFDRVgsUUFBQUEsZUFBZTtBQUNmOztBQUNGO0FBQ0U7QUFwQko7O0FBdUJBSCxJQUFBQSxpQkFBaUIsQ0FBQ0QsTUFBRCxDQUFqQjtBQUNELEdBMUJzQixFQTJCdkIsQ0FBQ0EsTUFBRCxFQUFTRSxlQUFULEVBQTBCQyxjQUExQixFQUEwQ0MsZUFBMUMsRUFBMkRILGlCQUEzRCxDQTNCdUIsQ0FBekI7O0FBOEJBLE1BQU1lLE9BQU8sR0FBR0MsbUNBQWtCQyxNQUFsQixDQUF5QixVQUFBQyxFQUFFO0FBQUEsV0FBSSxDQUFDQSxFQUFFLENBQUNDLFNBQUosSUFBaUJELEVBQUUsQ0FBQ0MsU0FBSCxDQUFhdEIsS0FBYixDQUFyQjtBQUFBLEdBQTNCLENBQWhCOztBQUVBLHNCQUNFLGdDQUFDLG9CQUFEO0FBQVUsSUFBQSxLQUFLLEVBQUUsR0FBakI7QUFBc0IsSUFBQSxHQUFHLEVBQUUsRUFBM0I7QUFBK0IsSUFBQSxRQUFRLEVBQUVDLFFBQXpDO0FBQW1ELElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUUsaUJBQWlCLENBQUNELE1BQUQsQ0FBdkI7QUFBQTtBQUE1RCxrQkFDRSxnQ0FBQyxxQkFBRDtBQUF1QixJQUFBLFNBQVMsRUFBQztBQUFqQyxrQkFDRSxnQ0FBQyx3QkFBRDtBQUNFLElBQUEsYUFBYSxFQUFFLHVCQUFBcUIsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQzVCLE9BQU47QUFBQSxLQURsQjtBQUVFLElBQUEsT0FBTyxFQUFFdUIsT0FGWDtBQUdFLElBQUEsdUJBQXVCLEVBQUV6QixRQUgzQjtBQUlFLElBQUEsZ0JBQWdCLEVBQUVjLGdCQUpwQjtBQUtFLElBQUEsS0FBSztBQUxQLElBREYsQ0FERixDQURGO0FBYUQsQ0F0REQ7O2VBd0RlUixjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBvcnRhbGVkIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3BvcnRhbGVkJztcbmltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9kcm9wZG93bi1saXN0JztcbmltcG9ydCB7U09SVF9PUkRFUiwgVEFCTEVfT1BUSU9OLCBUQUJMRV9PUFRJT05fTElTVH0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBMaXN0SXRlbSA9ICh7dmFsdWV9KSA9PiAoXG4gIDxkaXY+XG4gICAgPHZhbHVlLmljb24gaGVpZ2h0PVwiMTNweFwiIC8+XG4gICAge3ZhbHVlLmRpc3BsYXl9XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU3R5bGVkT3B0aW9uc0Ryb3Bkb3duID0gc3R5bGVkLmRpdmBcbiAgLmxpc3Qtc2VsZWN0b3Ige1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICB9XG5cbiAgLmxpc3RfX2l0ZW0gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE9wdGlvbkRyb3Bkb3duID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgaXNPcGVuZWQsXG4gICAgY29sdW1uLFxuICAgIHRvZ2dsZU1vcmVPcHRpb25zLFxuICAgIHNvcnRUYWJsZUNvbHVtbixcbiAgICBwaW5UYWJsZUNvbHVtbixcbiAgICBjb3B5VGFibGVDb2x1bW5cbiAgfSA9IHByb3BzO1xuICBjb25zdCBvbk9wdGlvblNlbGVjdGVkID0gdXNlQ2FsbGJhY2soXG4gICAgKHt2YWx1ZX0pID0+IHtcbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSBUQUJMRV9PUFRJT04uU09SVF9BU0M6XG4gICAgICAgICAgc29ydFRhYmxlQ29sdW1uKFNPUlRfT1JERVIuQVNDRU5ESU5HKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUQUJMRV9PUFRJT04uU09SVF9ERVM6XG4gICAgICAgICAgc29ydFRhYmxlQ29sdW1uKFNPUlRfT1JERVIuREVTQ0VORElORyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVEFCTEVfT1BUSU9OLlVOU09SVDpcbiAgICAgICAgICBzb3J0VGFibGVDb2x1bW4oU09SVF9PUkRFUi5VTlNPUlQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRBQkxFX09QVElPTi5QSU46XG4gICAgICAgICAgcGluVGFibGVDb2x1bW4oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUQUJMRV9PUFRJT04uVU5QSU46XG4gICAgICAgICAgcGluVGFibGVDb2x1bW4oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUQUJMRV9PUFRJT04uQ09QWTpcbiAgICAgICAgICBjb3B5VGFibGVDb2x1bW4oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlTW9yZU9wdGlvbnMoY29sdW1uKTtcbiAgICB9LFxuICAgIFtjb2x1bW4sIHNvcnRUYWJsZUNvbHVtbiwgcGluVGFibGVDb2x1bW4sIGNvcHlUYWJsZUNvbHVtbiwgdG9nZ2xlTW9yZU9wdGlvbnNdXG4gICk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IFRBQkxFX09QVElPTl9MSVNULmZpbHRlcihvcCA9PiAhb3AuY29uZGl0aW9uIHx8IG9wLmNvbmRpdGlvbihwcm9wcykpO1xuXG4gIHJldHVybiAoXG4gICAgPFBvcnRhbGVkIHJpZ2h0PXsxMjB9IHRvcD17MjB9IGlzT3BlbmVkPXtpc09wZW5lZH0gb25DbG9zZT17KCkgPT4gdG9nZ2xlTW9yZU9wdGlvbnMoY29sdW1uKX0+XG4gICAgICA8U3R5bGVkT3B0aW9uc0Ryb3Bkb3duIGNsYXNzTmFtZT1cIm1vcmUtb3B0aW9uc1wiPlxuICAgICAgICA8RHJvcGRvd25MaXN0XG4gICAgICAgICAgZGlzcGxheU9wdGlvbj17ZCA9PiBkLmRpc3BsYXl9XG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudD17TGlzdEl0ZW19XG4gICAgICAgICAgb25PcHRpb25TZWxlY3RlZD17b25PcHRpb25TZWxlY3RlZH1cbiAgICAgICAgICBsaWdodFxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRPcHRpb25zRHJvcGRvd24+XG4gICAgPC9Qb3J0YWxlZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvbkRyb3Bkb3duO1xuIl19