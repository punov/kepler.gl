"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CloudStorageDropdownFactory = exports.SaveExportDropdownFactory = exports.PanelHeaderDropdownFactory = exports.PanelAction = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents2 = require("../common/styled-components");

var _logo = _interopRequireDefault(require("../common/logo"));

var _icons = require("../common/icons");

var _panelDropdown = _interopRequireDefault(require("./panel-dropdown"));

var _toolbar = _interopRequireDefault(require("../common/toolbar"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _localization = require("../../localization");

var _excluded = ["appName", "appWebsite", "version", "actionItems", "visibleDropdown", "showExportDropdown", "hideExportDropdown"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledPanelHeader = _styledComponents["default"].div.attrs({
  className: 'side-side-panel__header'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px 16px 0 16px;\n"])), function (props) {
  return props.theme.sidePanelHeaderBg;
});

var StyledPanelHeaderTop = _styledComponents["default"].div.attrs({
  className: 'side-panel__header__top'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  width: 100%;\n"])));

var StyledPanelTopActions = _styledComponents["default"].div.attrs({
  className: 'side-panel__top__actions'
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"])));

var StyledPanelAction = _styledComponents["default"].div.attrs({
  className: 'side-panel__panel-header__action'
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-radius: 2px;\n  color: ", ";\n  display: flex;\n  height: 26px;\n  justify-content: space-between;\n  margin-left: 4px;\n  padding: 5px;\n  font-weight: bold;\n  p {\n    display: inline-block;\n    margin-right: 6px;\n  }\n  a {\n    height: 20px;\n  }\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n\n    a {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.active ? props.theme.textColorHl : props.theme.subtextColor;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledToolbar = (0, _styledComponents["default"])(_toolbar["default"])(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n"])));

var PanelAction = function PanelAction(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledPanelAction, {
    "data-tip": true,
    "data-for": "".concat(item.id, "-action"),
    onClick: onClick
  }, item.label ? /*#__PURE__*/_react["default"].createElement("p", null, item.label) : null, /*#__PURE__*/_react["default"].createElement("a", {
    target: item.blank ? '_blank' : '',
    href: item.href
  }, /*#__PURE__*/_react["default"].createElement(item.iconComponent, (0, _extends2["default"])({
    height: "20px"
  }, item.iconComponentProps))), item.tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "".concat(item.id, "-action"),
    place: "bottom",
    delayShow: 500,
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: item.tooltip
  })) : null);
};

exports.PanelAction = PanelAction;

var PanelHeaderDropdownFactory = function PanelHeaderDropdownFactory() {
  var PanelHeaderDropdown = function PanelHeaderDropdown(_ref2) {
    var items = _ref2.items,
        show = _ref2.show,
        onClose = _ref2.onClose,
        id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
      show: show,
      className: "".concat(id, "-dropdown")
    }, /*#__PURE__*/_react["default"].createElement(_panelDropdown["default"], {
      className: "panel-header-dropdown__inner",
      show: show,
      onClose: onClose
    }, items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
        id: item.key,
        key: item.key,
        label: item.label,
        icon: item.icon,
        onClick: item.onClick,
        onClose: onClose
      });
    })));
  };

  return PanelHeaderDropdown;
};

exports.PanelHeaderDropdownFactory = PanelHeaderDropdownFactory;

var getDropdownItemsSelector = function getDropdownItemsSelector() {
  return (0, _reselect.createSelector)(function (props) {
    return props;
  }, function (props) {
    return props.items.map(function (t) {
      return _objectSpread(_objectSpread({}, t), {}, {
        onClick: t.onClick && t.onClick(props) ? t.onClick(props) : null
      });
    }).filter(function (l) {
      return l.onClick;
    });
  });
};

var SaveExportDropdownFactory = function SaveExportDropdownFactory(PanelHeaderDropdown) {
  var dropdownItemsSelector = getDropdownItemsSelector();

  var SaveExportDropdown = function SaveExportDropdown(props) {
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderDropdown, {
      items: dropdownItemsSelector(props),
      show: props.show,
      onClose: props.onClose,
      id: "save-export"
    });
  };

  SaveExportDropdown.defaultProps = {
    items: [{
      label: 'toolbar.exportImage',
      icon: _icons.Picture,
      key: 'image',
      onClick: function onClick(props) {
        return props.onExportImage;
      }
    }, {
      label: 'toolbar.exportData',
      icon: _icons.DataTable,
      key: 'data',
      onClick: function onClick(props) {
        return props.onExportData;
      }
    }, {
      label: 'toolbar.exportMap',
      icon: _icons.Map,
      key: 'map',
      onClick: function onClick(props) {
        return props.onExportMap;
      }
    }, {
      label: 'toolbar.saveMap',
      icon: _icons.Save2,
      key: 'save',
      onClick: function onClick(props) {
        return props.onSaveMap;
      }
    }, {
      label: 'toolbar.shareMapURL',
      icon: _icons.Share,
      key: 'share',
      onClick: function onClick(props) {
        return props.onShareMap;
      }
    }]
  };
  return SaveExportDropdown;
};

exports.SaveExportDropdownFactory = SaveExportDropdownFactory;
SaveExportDropdownFactory.deps = [PanelHeaderDropdownFactory];

var CloudStorageDropdownFactory = function CloudStorageDropdownFactory(PanelHeaderDropdown) {
  var dropdownItemsSelector = getDropdownItemsSelector();

  var CloudStorageDropdown = function CloudStorageDropdown(props) {
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderDropdown, {
      items: dropdownItemsSelector(props),
      show: props.show,
      onClose: props.onClose,
      id: "cloud-storage"
    });
  };

  CloudStorageDropdown.defaultProps = {
    items: [{
      label: 'Save',
      icon: _icons.Save2,
      key: 'save',
      onClick: function onClick(props) {
        return props.onSaveToStorage;
      }
    }, {
      label: 'Save As',
      icon: _icons.Save2,
      key: 'saveAs',
      onClick: function onClick(props) {
        return props.onSaveAsToStorage;
      }
    }]
  };
  return CloudStorageDropdown;
};

exports.CloudStorageDropdownFactory = CloudStorageDropdownFactory;
CloudStorageDropdownFactory.deps = [PanelHeaderDropdownFactory];
PanelHeaderFactory.deps = [SaveExportDropdownFactory, CloudStorageDropdownFactory];

function PanelHeaderFactory(SaveExportDropdown, CloudStorageDropdown) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(PanelHeader, _Component);

    var _super = _createSuper(PanelHeader);

    function PanelHeader() {
      (0, _classCallCheck2["default"])(this, PanelHeader);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(PanelHeader, [{
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            appName = _this$props.appName,
            appWebsite = _this$props.appWebsite,
            version = _this$props.version,
            actionItems = _this$props.actionItems,
            visibleDropdown = _this$props.visibleDropdown,
            showExportDropdown = _this$props.showExportDropdown,
            hideExportDropdown = _this$props.hideExportDropdown,
            dropdownCallbacks = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
        var items = actionItems || []; // don't render cloud storage icon if onSaveToStorage is not provided

        if (typeof this.props.onSaveToStorage !== 'function') {
          items = actionItems.filter(function (ai) {
            return ai.id !== 'storage';
          });
        }

        return /*#__PURE__*/_react["default"].createElement(StyledPanelHeader, {
          className: "side-panel__panel-header"
        }, /*#__PURE__*/_react["default"].createElement(StyledPanelHeaderTop, {
          className: "side-panel__panel-header__top"
        }, /*#__PURE__*/_react["default"].createElement(this.props.logoComponent, {
          appName: appName,
          version: version,
          appWebsite: appWebsite
        }), /*#__PURE__*/_react["default"].createElement(StyledPanelTopActions, null, items.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "side-panel__panel-header__right",
            key: item.id,
            style: {
              position: 'relative'
            }
          }, /*#__PURE__*/_react["default"].createElement(PanelAction, {
            item: item,
            onClick: function onClick() {
              if (item.dropdownComponent) {
                showExportDropdown(item.id);
              } else {
                item.onClick && item.onClick(_this.props);
              }
            }
          }), item.dropdownComponent ? /*#__PURE__*/_react["default"].createElement(item.dropdownComponent, (0, _extends2["default"])({
            onClose: hideExportDropdown,
            show: visibleDropdown === item.id
          }, dropdownCallbacks)) : null);
        }))));
      }
    }]);
    return PanelHeader;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    appName: _propTypes["default"].string,
    appWebsite: _propTypes["default"].string,
    version: _propTypes["default"].string,
    visibleDropdown: _propTypes["default"].string,
    logoComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    actionItems: _propTypes["default"].arrayOf(_propTypes["default"].any),
    onExportImage: _propTypes["default"].func,
    onExportData: _propTypes["default"].func,
    onExportConfig: _propTypes["default"].func,
    onExportMap: _propTypes["default"].func,
    onSaveToStorage: _propTypes["default"].func,
    onSaveAsToStorage: _propTypes["default"].func,
    onSaveMap: _propTypes["default"].func,
    onShareMap: _propTypes["default"].func
  }), (0, _defineProperty2["default"])(_class, "defaultProps", {
    logoComponent: _logo["default"],
    actionItems: [{
      id: 'storage',
      iconComponent: _icons.Db,
      tooltip: 'tooltip.cloudStorage',
      onClick: function onClick() {},
      dropdownComponent: CloudStorageDropdown
    }, {
      id: 'save',
      iconComponent: _icons.Save,
      onClick: function onClick() {},
      label: 'Share',
      dropdownComponent: SaveExportDropdown
    }]
  }), _temp;
}

var _default = PanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFBhbmVsSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJTdHlsZWRQYW5lbEhlYWRlclRvcCIsIlN0eWxlZFBhbmVsVG9wQWN0aW9ucyIsIlN0eWxlZFBhbmVsQWN0aW9uIiwiYWN0aXZlIiwidGV4dENvbG9ySGwiLCJzdWJ0ZXh0Q29sb3IiLCJTdHlsZWRUb29sYmFyIiwiVG9vbGJhciIsIlBhbmVsQWN0aW9uIiwiaXRlbSIsIm9uQ2xpY2siLCJpZCIsImxhYmVsIiwiYmxhbmsiLCJocmVmIiwiaWNvbkNvbXBvbmVudFByb3BzIiwidG9vbHRpcCIsIlBhbmVsSGVhZGVyRHJvcGRvd25GYWN0b3J5IiwiUGFuZWxIZWFkZXJEcm9wZG93biIsIml0ZW1zIiwic2hvdyIsIm9uQ2xvc2UiLCJtYXAiLCJrZXkiLCJpY29uIiwiZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yIiwidCIsImZpbHRlciIsImwiLCJTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5IiwiZHJvcGRvd25JdGVtc1NlbGVjdG9yIiwiU2F2ZUV4cG9ydERyb3Bkb3duIiwiZGVmYXVsdFByb3BzIiwiUGljdHVyZSIsIm9uRXhwb3J0SW1hZ2UiLCJEYXRhVGFibGUiLCJvbkV4cG9ydERhdGEiLCJNYXBJY29uIiwib25FeHBvcnRNYXAiLCJTYXZlMiIsIm9uU2F2ZU1hcCIsIlNoYXJlIiwib25TaGFyZU1hcCIsImRlcHMiLCJDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkiLCJDbG91ZFN0b3JhZ2VEcm9wZG93biIsIm9uU2F2ZVRvU3RvcmFnZSIsIm9uU2F2ZUFzVG9TdG9yYWdlIiwiUGFuZWxIZWFkZXJGYWN0b3J5IiwiYXBwTmFtZSIsImFwcFdlYnNpdGUiLCJ2ZXJzaW9uIiwiYWN0aW9uSXRlbXMiLCJ2aXNpYmxlRHJvcGRvd24iLCJzaG93RXhwb3J0RHJvcGRvd24iLCJoaWRlRXhwb3J0RHJvcGRvd24iLCJkcm9wZG93bkNhbGxiYWNrcyIsImFpIiwicG9zaXRpb24iLCJkcm9wZG93bkNvbXBvbmVudCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvZ29Db21wb25lbnQiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsImFycmF5T2YiLCJhbnkiLCJvbkV4cG9ydENvbmZpZyIsIktlcGxlckdsTG9nbyIsImljb25Db21wb25lbnQiLCJEYiIsIlNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsa0pBR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBaEI7QUFBQSxDQUhKLENBQXZCOztBQU9BLElBQU1DLG9CQUFvQixHQUFHUCw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzVDQyxFQUFBQSxTQUFTLEVBQUU7QUFEaUMsQ0FBakIsQ0FBSCx1TEFBMUI7O0FBU0EsSUFBTUsscUJBQXFCLEdBQUdSLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDN0NDLEVBQUFBLFNBQVMsRUFBRTtBQURrQyxDQUFqQixDQUFILDRHQUEzQjs7QUFNQSxJQUFNTSxpQkFBaUIsR0FBR1QsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsNGRBS1osVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUss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LHNCQUFVSyxJQVZOO0FBV2pCcEIsSUFBQUEsZUFBZSxFQUFFZSxzQkFBVUssSUFYVjtBQVlqQm5CLElBQUFBLGlCQUFpQixFQUFFYyxzQkFBVUssSUFaWjtBQWFqQjFCLElBQUFBLFNBQVMsRUFBRXFCLHNCQUFVSyxJQWJKO0FBY2pCeEIsSUFBQUEsVUFBVSxFQUFFbUIsc0JBQVVLO0FBZEwsR0FEckIsNERBa0J3QjtBQUNwQkgsSUFBQUEsYUFBYSxFQUFFTyxnQkFESztBQUVwQmxCLElBQUFBLFdBQVcsRUFBRSxDQUNYO0FBQ0V6QyxNQUFBQSxFQUFFLEVBQUUsU0FETjtBQUVFNEQsTUFBQUEsYUFBYSxFQUFFQyxTQUZqQjtBQUdFeEQsTUFBQUEsT0FBTyxFQUFFLHNCQUhYO0FBSUVOLE1BQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBSm5CO0FBS0VpRCxNQUFBQSxpQkFBaUIsRUFBRWQ7QUFMckIsS0FEVyxFQVFYO0FBQ0VsQyxNQUFBQSxFQUFFLEVBQUUsTUFETjtBQUVFNEQsTUFBQUEsYUFBYSxFQUFFRSxXQUZqQjtBQUdFL0QsTUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FIbkI7QUFJRUUsTUFBQUEsS0FBSyxFQUFFLE9BSlQ7QUFLRStDLE1BQUFBLGlCQUFpQixFQUFFNUI7QUFMckIsS0FSVztBQUZPLEdBbEJ4QjtBQTRGRDs7ZUFFY2lCLGtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9nbyc7XG5pbXBvcnQge1NhdmUsIERhdGFUYWJsZSwgU2F2ZTIsIFBpY3R1cmUsIERiLCBNYXAgYXMgTWFwSWNvbiwgU2hhcmV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBDbGlja091dHNpZGVDbG9zZURyb3Bkb3duIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1kcm9wZG93bic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90b29sYmFyJztcbmltcG9ydCBUb29sYmFySXRlbSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90b29sYmFyLWl0ZW0nO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuXG5jb25zdCBTdHlsZWRQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXNpZGUtcGFuZWxfX2hlYWRlcidcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJnfTtcbiAgcGFkZGluZzogMTJweCAxNnB4IDAgMTZweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyVG9wID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX2hlYWRlcl9fdG9wJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbFRvcEFjdGlvbnMgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9fdG9wX19hY3Rpb25zJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbEFjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX2FjdGlvbidcbn0pYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbCA6IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcil9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG4gIGEge1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcblxuICAgIGEge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkVG9vbGJhciA9IHN0eWxlZChUb29sYmFyKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsQWN0aW9uID0gKHtpdGVtLCBvbkNsaWNrfSkgPT4gKFxuICA8U3R5bGVkUGFuZWxBY3Rpb24gZGF0YS10aXAgZGF0YS1mb3I9e2Ake2l0ZW0uaWR9LWFjdGlvbmB9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgIHtpdGVtLmxhYmVsID8gPHA+e2l0ZW0ubGFiZWx9PC9wPiA6IG51bGx9XG4gICAgPGEgdGFyZ2V0PXtpdGVtLmJsYW5rID8gJ19ibGFuaycgOiAnJ30gaHJlZj17aXRlbS5ocmVmfT5cbiAgICAgIDxpdGVtLmljb25Db21wb25lbnQgaGVpZ2h0PVwiMjBweFwiIHsuLi5pdGVtLmljb25Db21wb25lbnRQcm9wc30gLz5cbiAgICA8L2E+XG4gICAge2l0ZW0udG9vbHRpcCA/IChcbiAgICAgIDxUb29sdGlwIGlkPXtgJHtpdGVtLmlkfS1hY3Rpb25gfSBwbGFjZT1cImJvdHRvbVwiIGRlbGF5U2hvdz17NTAwfSBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17aXRlbS50b29sdGlwfSAvPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICkgOiBudWxsfVxuICA8L1N0eWxlZFBhbmVsQWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyRHJvcGRvd25GYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBQYW5lbEhlYWRlckRyb3Bkb3duID0gKHtpdGVtcywgc2hvdywgb25DbG9zZSwgaWR9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRUb29sYmFyIHNob3c9e3Nob3d9IGNsYXNzTmFtZT17YCR7aWR9LWRyb3Bkb3duYH0+XG4gICAgICAgIDxDbGlja091dHNpZGVDbG9zZURyb3Bkb3duXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGVyLWRyb3Bkb3duX19pbm5lclwiXG4gICAgICAgICAgc2hvdz17c2hvd31cbiAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxUb29sYmFySXRlbVxuICAgICAgICAgICAgICBpZD17aXRlbS5rZXl9XG4gICAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XG4gICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICBpY29uPXtpdGVtLmljb259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2l0ZW0ub25DbGlja31cbiAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2xpY2tPdXRzaWRlQ2xvc2VEcm9wZG93bj5cbiAgICAgIDwvU3R5bGVkVG9vbGJhcj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQYW5lbEhlYWRlckRyb3Bkb3duO1xufTtcblxuY29uc3QgZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yID0gKCkgPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgcHJvcHMgPT4gcHJvcHMsXG4gICAgcHJvcHMgPT5cbiAgICAgIHByb3BzLml0ZW1zXG4gICAgICAgIC5tYXAodCA9PiAoe1xuICAgICAgICAgIC4uLnQsXG4gICAgICAgICAgb25DbGljazogdC5vbkNsaWNrICYmIHQub25DbGljayhwcm9wcykgPyB0Lm9uQ2xpY2socHJvcHMpIDogbnVsbFxuICAgICAgICB9KSlcbiAgICAgICAgLmZpbHRlcihsID0+IGwub25DbGljaylcbiAgKTtcblxuZXhwb3J0IGNvbnN0IFNhdmVFeHBvcnREcm9wZG93bkZhY3RvcnkgPSBQYW5lbEhlYWRlckRyb3Bkb3duID0+IHtcbiAgY29uc3QgZHJvcGRvd25JdGVtc1NlbGVjdG9yID0gZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yKCk7XG5cbiAgY29uc3QgU2F2ZUV4cG9ydERyb3Bkb3duID0gcHJvcHMgPT4gKFxuICAgIDxQYW5lbEhlYWRlckRyb3Bkb3duXG4gICAgICBpdGVtcz17ZHJvcGRvd25JdGVtc1NlbGVjdG9yKHByb3BzKX1cbiAgICAgIHNob3c9e3Byb3BzLnNob3d9XG4gICAgICBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgaWQ9XCJzYXZlLWV4cG9ydFwiXG4gICAgLz5cbiAgKTtcblxuICBTYXZlRXhwb3J0RHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAndG9vbGJhci5leHBvcnRJbWFnZScsXG4gICAgICAgIGljb246IFBpY3R1cmUsXG4gICAgICAgIGtleTogJ2ltYWdlJyxcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25FeHBvcnRJbWFnZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd0b29sYmFyLmV4cG9ydERhdGEnLFxuICAgICAgICBpY29uOiBEYXRhVGFibGUsXG4gICAgICAgIGtleTogJ2RhdGEnLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vbkV4cG9ydERhdGFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAndG9vbGJhci5leHBvcnRNYXAnLFxuICAgICAgICBpY29uOiBNYXBJY29uLFxuICAgICAgICBrZXk6ICdtYXAnLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vbkV4cG9ydE1hcFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd0b29sYmFyLnNhdmVNYXAnLFxuICAgICAgICBpY29uOiBTYXZlMixcbiAgICAgICAga2V5OiAnc2F2ZScsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uU2F2ZU1hcFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd0b29sYmFyLnNoYXJlTWFwVVJMJyxcbiAgICAgICAgaWNvbjogU2hhcmUsXG4gICAgICAgIGtleTogJ3NoYXJlJyxcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25TaGFyZU1hcFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4gU2F2ZUV4cG9ydERyb3Bkb3duO1xufTtcblNhdmVFeHBvcnREcm9wZG93bkZhY3RvcnkuZGVwcyA9IFtQYW5lbEhlYWRlckRyb3Bkb3duRmFjdG9yeV07XG5cbmV4cG9ydCBjb25zdCBDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkgPSBQYW5lbEhlYWRlckRyb3Bkb3duID0+IHtcbiAgY29uc3QgZHJvcGRvd25JdGVtc1NlbGVjdG9yID0gZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yKCk7XG5cbiAgY29uc3QgQ2xvdWRTdG9yYWdlRHJvcGRvd24gPSBwcm9wcyA9PiAoXG4gICAgPFBhbmVsSGVhZGVyRHJvcGRvd25cbiAgICAgIGl0ZW1zPXtkcm9wZG93bkl0ZW1zU2VsZWN0b3IocHJvcHMpfVxuICAgICAgc2hvdz17cHJvcHMuc2hvd31cbiAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICBpZD1cImNsb3VkLXN0b3JhZ2VcIlxuICAgIC8+XG4gICk7XG4gIENsb3VkU3RvcmFnZURyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1NhdmUnLFxuICAgICAgICBpY29uOiBTYXZlMixcbiAgICAgICAga2V5OiAnc2F2ZScsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uU2F2ZVRvU3RvcmFnZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdTYXZlIEFzJyxcbiAgICAgICAgaWNvbjogU2F2ZTIsXG4gICAgICAgIGtleTogJ3NhdmVBcycsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uU2F2ZUFzVG9TdG9yYWdlXG4gICAgICB9XG4gICAgXVxuICB9O1xuICByZXR1cm4gQ2xvdWRTdG9yYWdlRHJvcGRvd247XG59O1xuQ2xvdWRTdG9yYWdlRHJvcGRvd25GYWN0b3J5LmRlcHMgPSBbUGFuZWxIZWFkZXJEcm9wZG93bkZhY3RvcnldO1xuXG5QYW5lbEhlYWRlckZhY3RvcnkuZGVwcyA9IFtTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5LCBDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnldO1xuXG5mdW5jdGlvbiBQYW5lbEhlYWRlckZhY3RvcnkoU2F2ZUV4cG9ydERyb3Bkb3duLCBDbG91ZFN0b3JhZ2VEcm9wZG93bikge1xuICByZXR1cm4gY2xhc3MgUGFuZWxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBhcHBOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYXBwV2Vic2l0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZlcnNpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2aXNpYmxlRHJvcGRvd246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBsb2dvQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIGFjdGlvbkl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICAgIG9uRXhwb3J0SW1hZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25FeHBvcnREYXRhOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uRXhwb3J0Q29uZmlnOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uRXhwb3J0TWFwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uU2F2ZVRvU3RvcmFnZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvblNhdmVBc1RvU3RvcmFnZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvblNhdmVNYXA6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25TaGFyZU1hcDogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGxvZ29Db21wb25lbnQ6IEtlcGxlckdsTG9nbyxcbiAgICAgIGFjdGlvbkl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3N0b3JhZ2UnLFxuICAgICAgICAgIGljb25Db21wb25lbnQ6IERiLFxuICAgICAgICAgIHRvb2x0aXA6ICd0b29sdGlwLmNsb3VkU3RvcmFnZScsXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge30sXG4gICAgICAgICAgZHJvcGRvd25Db21wb25lbnQ6IENsb3VkU3RvcmFnZURyb3Bkb3duXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3NhdmUnLFxuICAgICAgICAgIGljb25Db21wb25lbnQ6IFNhdmUsXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge30sXG4gICAgICAgICAgbGFiZWw6ICdTaGFyZScsXG4gICAgICAgICAgZHJvcGRvd25Db21wb25lbnQ6IFNhdmVFeHBvcnREcm9wZG93blxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgYXBwV2Vic2l0ZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgYWN0aW9uSXRlbXMsXG4gICAgICAgIHZpc2libGVEcm9wZG93bixcbiAgICAgICAgc2hvd0V4cG9ydERyb3Bkb3duLFxuICAgICAgICBoaWRlRXhwb3J0RHJvcGRvd24sXG4gICAgICAgIC4uLmRyb3Bkb3duQ2FsbGJhY2tzXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGxldCBpdGVtcyA9IGFjdGlvbkl0ZW1zIHx8IFtdO1xuXG4gICAgICAvLyBkb24ndCByZW5kZXIgY2xvdWQgc3RvcmFnZSBpY29uIGlmIG9uU2F2ZVRvU3RvcmFnZSBpcyBub3QgcHJvdmlkZWRcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblNhdmVUb1N0b3JhZ2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaXRlbXMgPSBhY3Rpb25JdGVtcy5maWx0ZXIoYWkgPT4gYWkuaWQgIT09ICdzdG9yYWdlJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRQYW5lbEhlYWRlciBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJcIj5cbiAgICAgICAgICA8U3R5bGVkUGFuZWxIZWFkZXJUb3AgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fcGFuZWwtaGVhZGVyX190b3BcIj5cbiAgICAgICAgICAgIDx0aGlzLnByb3BzLmxvZ29Db21wb25lbnQgYXBwTmFtZT17YXBwTmFtZX0gdmVyc2lvbj17dmVyc2lvbn0gYXBwV2Vic2l0ZT17YXBwV2Vic2l0ZX0gLz5cbiAgICAgICAgICAgIDxTdHlsZWRQYW5lbFRvcEFjdGlvbnM+XG4gICAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fcGFuZWwtaGVhZGVyX19yaWdodFwiXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGFuZWxBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRyb3Bkb3duQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RXhwb3J0RHJvcGRvd24oaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub25DbGljayAmJiBpdGVtLm9uQ2xpY2sodGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmRyb3Bkb3duQ29tcG9uZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8aXRlbS5kcm9wZG93bkNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hpZGVFeHBvcnREcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICBzaG93PXt2aXNpYmxlRHJvcGRvd24gPT09IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmRyb3Bkb3duQ2FsbGJhY2tzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TdHlsZWRQYW5lbFRvcEFjdGlvbnM+XG4gICAgICAgICAgPC9TdHlsZWRQYW5lbEhlYWRlclRvcD5cbiAgICAgICAgPC9TdHlsZWRQYW5lbEhlYWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYW5lbEhlYWRlckZhY3Rvcnk7XG4iXX0=