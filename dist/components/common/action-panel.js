"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ActionPanelItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("./icons");

var _switch = _interopRequireDefault(require("./switch"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledItem = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 12px;\n  line-height: 14px;\n  padding: 8px;\n  min-height: ", "px;\n  text-transform: capitalize;\n  background-color: ", ";\n  max-width: 200px;\n  position: relative;\n\n  ", " :hover {\n    cursor: pointer;\n    color: ", ";\n    .nested-group {\n      display: block;\n    }\n  }\n\n  .label {\n    margin-left: 8px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  .label-icon {\n    margin-left: auto;\n  }\n\n  .nested-group {\n    max-width: 200px;\n    overflow: hidden;\n    display: none;\n    color: ", ";\n    position: absolute;\n    left: 100%;\n    top: 0px;\n    padding-left: 4px;\n\n    label {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n"])), function (props) {
  return props.theme.actionPanelHeight;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.color ? "border-left: 3px solid rgb(".concat(props.color, ");") : '';
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColor;
});

var StyledCheckedbox = (0, _styledComponents["default"])(_switch["default"])(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  label {\n    margin-bottom: 0;\n    color: ", ";\n    padding-left: 20px;\n    line-height: 12px;\n\n    &:before {\n      width: 12px;\n      height: 12px;\n      background-color: ", ";\n    }\n    &:hover {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.textColorHl;
});

var renderChildren = function renderChildren(child, index) {
  return /*#__PURE__*/_react["default"].cloneElement(child, {
    onClick: function onClick() {
      if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
        if (child.props.onClick) {
          child.props.onClick(index);
        }
      }
    },
    className: (0, _classnames["default"])('action-panel-item', child.props.className)
  });
};
/** @type {typeof import('./action-panel').ActionPanelItem} */


var ActionPanelItem = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var children = _ref.children,
      color = _ref.color,
      className = _ref.className,
      Icon = _ref.Icon,
      label = _ref.label,
      onClick = _ref.onClick,
      isSelection = _ref.isSelection,
      isActive = _ref.isActive,
      style = _ref.style;
  var onClickCallback = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    event.stopPropagation();
    onClick === null || onClick === void 0 ? void 0 : onClick();
  }, [onClick]);
  return /*#__PURE__*/_react["default"].createElement(StyledItem, {
    className: className,
    onClick: onClickCallback,
    color: color,
    style: style
  }, Icon ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    height: "16px"
  })) : null, isSelection ? /*#__PURE__*/_react["default"].createElement(StyledCheckedbox, {
    type: "checkbox",
    checked: Boolean(isActive),
    id: "switch-".concat(label),
    secondary: true,
    label: label
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "label"
  }, label), children ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "label-icon"
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
    height: "16px"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "nested-group"
  }, _react["default"].Children.map(children, renderChildren))) : null);
});

exports.ActionPanelItem = ActionPanelItem;
ActionPanelItem.displayName = 'ActionPanelItem';

var StyledActionPanel = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: ", ";\n  box-shadow: ", ";\n  transition: ", ";\n  color: ", ";\n\n  .action-panel-item {\n    ", " &:last-of-type {\n      border-bottom: 0;\n    }\n  }\n"])), function (props) {
  return props.direction;
}, function (props) {
  return props.theme.dropdownListShadow;
}, function (props) {
  return props.theme.transitionSlow;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.direction === 'column' ? "border-bottom: 1px solid ".concat(props.theme.panelHeaderIcon) : "border-right: 1px solid ".concat(props.theme.panelHeaderIcon);
}); // React compound element https://medium.com/@Dane_s/react-js-compound-components-a6e54b5c9992

/** @type {typeof import('./action-panel').ActionPanel} */


var ActionPanel = function ActionPanel(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      _ref2$direction = _ref2.direction,
      direction = _ref2$direction === void 0 ? 'column' : _ref2$direction;
  return /*#__PURE__*/_react["default"].createElement(StyledActionPanel, {
    className: className,
    direction: direction
  }, _react["default"].Children.map(children, renderChildren));
};

ActionPanel.displayName = 'ActionPanel';
var _default = ActionPanel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hY3Rpb24tcGFuZWwuanMiXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJhY3Rpb25QYW5lbEhlaWdodCIsImRyb3Bkb3duTGlzdEJnZCIsImNvbG9yIiwidGV4dENvbG9ySGwiLCJ0ZXh0Q29sb3IiLCJTdHlsZWRDaGVja2VkYm94IiwiQ2hlY2tib3giLCJyZW5kZXJDaGlsZHJlbiIsImNoaWxkIiwiaW5kZXgiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIm9uQ2xpY2siLCJpc1ZhbGlkRWxlbWVudCIsImNsYXNzTmFtZSIsIkFjdGlvblBhbmVsSXRlbSIsIm1lbW8iLCJjaGlsZHJlbiIsIkljb24iLCJsYWJlbCIsImlzU2VsZWN0aW9uIiwiaXNBY3RpdmUiLCJzdHlsZSIsIm9uQ2xpY2tDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJCb29sZWFuIiwiQ2hpbGRyZW4iLCJtYXAiLCJkaXNwbGF5TmFtZSIsIlN0eWxlZEFjdGlvblBhbmVsIiwiZGlyZWN0aW9uIiwiZHJvcGRvd25MaXN0U2hhZG93IiwidHJhbnNpdGlvblNsb3ciLCJwYW5lbEhlYWRlckljb24iLCJBY3Rpb25QYW5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDZCQUFPQyxHQUFWLHkyQkFPQSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGlCQUFoQjtBQUFBLENBUEwsRUFTTSxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLGVBQWhCO0FBQUEsQ0FUWCxFQWFaLFVBQUFILEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNJLEtBQU4sd0NBQTRDSixLQUFLLENB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QyxpQkFBRDtBQUFtQixJQUFBLFNBQVMsRUFBRWxCLFNBQTlCO0FBQXlDLElBQUEsU0FBUyxFQUFFa0I7QUFBcEQsS0FDR3RCLGtCQUFNa0IsUUFBTixDQUFlQyxHQUFmLENBQW1CWixRQUFuQixFQUE2QlYsY0FBN0IsQ0FESCxDQURrQjtBQUFBLENBQXBCOztBQU1BNkIsV0FBVyxDQUFDTixXQUFaLEdBQTBCLGFBQTFCO2VBRWVNLFciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7QXJyb3dSaWdodH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N3aXRjaCc7XG5cbmNvbnN0IFN0eWxlZEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1pbi1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aW9uUGFuZWxIZWlnaHR9cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZH07XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAke3Byb3BzID0+IChwcm9wcy5jb2xvciA/IGBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYigke3Byb3BzLmNvbG9yfSk7YCA6ICcnKX0gOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIC5uZXN0ZWQtZ3JvdXAge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuICAubGFiZWwtaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAubmVzdGVkLWdyb3VwIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuXG4gICAgbGFiZWwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkQ2hlY2tlZGJveCA9IHN0eWxlZChDaGVja2JveClgXG4gIGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDEycHg7XG4gICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZH07XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSAoY2hpbGQsIGluZGV4KSA9PlxuICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcygnYWN0aW9uLXBhbmVsLWl0ZW0nLCBjaGlsZC5wcm9wcy5jbGFzc05hbWUpXG4gIH0pO1xuXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vYWN0aW9uLXBhbmVsJykuQWN0aW9uUGFuZWxJdGVtfSAqL1xuZXhwb3J0IGNvbnN0IEFjdGlvblBhbmVsSXRlbSA9IFJlYWN0Lm1lbW8oXG4gICh7Y2hpbGRyZW4sIGNvbG9yLCBjbGFzc05hbWUsIEljb24sIGxhYmVsLCBvbkNsaWNrLCBpc1NlbGVjdGlvbiwgaXNBY3RpdmUsIHN0eWxlfSkgPT4ge1xuICAgIGNvbnN0IG9uQ2xpY2tDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25DbGljaz8uKCk7XG4gICAgICB9LFxuICAgICAgW29uQ2xpY2tdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkSXRlbSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja0NhbGxiYWNrfSBjb2xvcj17Y29sb3J9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIHtJY29uID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgPEljb24gaGVpZ2h0PVwiMTZweFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7aXNTZWxlY3Rpb24gPyAoXG4gICAgICAgICAgPFN0eWxlZENoZWNrZWRib3hcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXtCb29sZWFuKGlzQWN0aXZlKX1cbiAgICAgICAgICAgIGlkPXtgc3dpdGNoLSR7bGFiZWx9YH1cbiAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW4gPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtaWNvblwiPlxuICAgICAgICAgICAgICA8QXJyb3dSaWdodCBoZWlnaHQ9XCIxNnB4XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtZ3JvdXBcIj57UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCByZW5kZXJDaGlsZHJlbil9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9TdHlsZWRJdGVtPlxuICAgICk7XG4gIH1cbik7XG5cbkFjdGlvblBhbmVsSXRlbS5kaXNwbGF5TmFtZSA9ICdBY3Rpb25QYW5lbEl0ZW0nO1xuXG5jb25zdCBTdHlsZWRBY3Rpb25QYW5lbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IHByb3BzLmRpcmVjdGlvbn07XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0U2hhZG93fTtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9uU2xvd307XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5cbiAgLmFjdGlvbi1wYW5lbC1pdGVtIHtcbiAgICAke3Byb3BzID0+XG4gICAgICBwcm9wcy5kaXJlY3Rpb24gPT09ICdjb2x1bW4nXG4gICAgICAgID8gYGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzLnRoZW1lLnBhbmVsSGVhZGVySWNvbn1gXG4gICAgICAgIDogYGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29ufWB9ICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICB9XG5gO1xuXG4vLyBSZWFjdCBjb21wb3VuZCBlbGVtZW50IGh0dHBzOi8vbWVkaXVtLmNvbS9ARGFuZV9zL3JlYWN0LWpzLWNvbXBvdW5kLWNvbXBvbmVudHMtYTZlNTRiNWM5OTkyXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vYWN0aW9uLXBhbmVsJykuQWN0aW9uUGFuZWx9ICovXG5jb25zdCBBY3Rpb25QYW5lbCA9ICh7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlyZWN0aW9uID0gJ2NvbHVtbid9KSA9PiAoXG4gIDxTdHlsZWRBY3Rpb25QYW5lbCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZGlyZWN0aW9uPXtkaXJlY3Rpb259PlxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHJlbmRlckNoaWxkcmVuKX1cbiAgPC9TdHlsZWRBY3Rpb25QYW5lbD5cbik7XG5cbkFjdGlvblBhbmVsLmRpc3BsYXlOYW1lID0gJ0FjdGlvblBhbmVsJztcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uUGFuZWw7XG4iXX0=