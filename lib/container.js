"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeResponsive = _interopRequireDefault(require("./make-responsive"));

var _config = require("./config");

var _helpers = require("./helpers");

var Container = function Container(_ref) {
  var getResponsiveProps = _ref.getResponsiveProps,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["getResponsiveProps", "children"]);
  var responsiveProps = getResponsiveProps(function (_ref2) {
    var breakpointProps = _ref2.breakpointProps,
        breakpointName = _ref2.breakpointName,
        breakpointWidth = _ref2.breakpointWidth;
    var sizes = (0, _config.getConfig)('container.maxWidth');
    var sortedSizes = Object.values(sizes).sort(function (a, b) {
      return a - b;
    });
    var sizeShorthand = Object.keys(sizes).find(function (v) {
      return breakpointProps[v] === true;
    });
    var autoSizeWidth = sortedSizes.filter(function (v) {
      return v < breakpointWidth;
    }).pop();
    var fixedWidth = sizes[sizeShorthand || breakpointProps.size] || breakpointProps.size;
    var containerWidth = fixedWidth;

    if (breakpointProps.autoSize) {
      if ((0, _helpers.getType)(fixedWidth) !== 'null') {
        containerWidth = Math.min(fixedWidth, autoSizeWidth);
      } else {
        containerWidth = autoSizeWidth;
      }
    }

    if ((0, _helpers.getType)(containerWidth) !== 'number' || Number.isNaN(containerWidth)) {
      containerWidth = null;
    }

    return (
      /*#__PURE__*/
      (0, _core.css)("label:container;margin-right:auto;margin-left:auto;padding:0 ", (0, _helpers.getCSSLength)((0, _config.getConfig)('container.padding')[breakpointName]), ";max-width:100%;min-width:", (0, _helpers.getCSSLength)((0, _config.getConfig)('container.minSize')), ";width:100%;max-width:", (0, _helpers.getCSSLength)(containerWidth), ";box-sizing:border-box;&:before,&:after{content:'';display:block;clear:both;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NnQiIsImZpbGUiOiIuLi9zcmMvY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBtYWtlUmVzcG9uc2l2ZSBmcm9tICcuL21ha2UtcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXRDU1NMZW5ndGgsIGdldFR5cGUsIGNsZWFuT2JqZWN0IH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3QgQ29udGFpbmVyID0gKHtcbiAgZ2V0UmVzcG9uc2l2ZVByb3BzLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZVByb3BzID0gZ2V0UmVzcG9uc2l2ZVByb3BzKFxuICAgICh7IGJyZWFrcG9pbnRQcm9wcywgYnJlYWtwb2ludE5hbWUsIGJyZWFrcG9pbnRXaWR0aCB9KSA9PiB7XG4gICAgICBjb25zdCBzaXplcyA9IGdldENvbmZpZygnY29udGFpbmVyLm1heFdpZHRoJyk7XG4gICAgICBjb25zdCBzb3J0ZWRTaXplcyA9IE9iamVjdC52YWx1ZXMoc2l6ZXMpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgIGNvbnN0IHNpemVTaG9ydGhhbmQgPSBPYmplY3Qua2V5cyhzaXplcykuZmluZCh2ID0+IGJyZWFrcG9pbnRQcm9wc1t2XSA9PT0gdHJ1ZSk7XG4gICAgICBjb25zdCBhdXRvU2l6ZVdpZHRoID0gc29ydGVkU2l6ZXMuZmlsdGVyKHYgPT4gdiA8IGJyZWFrcG9pbnRXaWR0aCkucG9wKCk7XG4gICAgICBjb25zdCBmaXhlZFdpZHRoID0gc2l6ZXNbc2l6ZVNob3J0aGFuZCB8fCBicmVha3BvaW50UHJvcHMuc2l6ZV0gfHwgYnJlYWtwb2ludFByb3BzLnNpemU7XG5cbiAgICAgIGxldCBjb250YWluZXJXaWR0aCA9IGZpeGVkV2lkdGg7XG5cbiAgICAgIGlmIChicmVha3BvaW50UHJvcHMuYXV0b1NpemUpIHtcbiAgICAgICAgaWYgKGdldFR5cGUoZml4ZWRXaWR0aCkgIT09ICdudWxsJykge1xuICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gTWF0aC5taW4oZml4ZWRXaWR0aCwgYXV0b1NpemVXaWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyV2lkdGggPSBhdXRvU2l6ZVdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChnZXRUeXBlKGNvbnRhaW5lcldpZHRoKSAhPT0gJ251bWJlcicgfHwgTnVtYmVyLmlzTmFOKGNvbnRhaW5lcldpZHRoKSkge1xuICAgICAgICBjb250YWluZXJXaWR0aCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIGxhYmVsOiBjb250YWluZXI7XG5cbiAgICAgICAgLyogQ2VudGVyIHRoZSBjb250YWluZXIuICovXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG5cbiAgICAgICAgLyogQWRkIHNpZGUgcGFkZGluZy4gKi9cbiAgICAgICAgcGFkZGluZzogMCAke2dldENTU0xlbmd0aChnZXRDb25maWcoJ2NvbnRhaW5lci5wYWRkaW5nJylbYnJlYWtwb2ludE5hbWVdKX07XG4gICAgICAgIFxuICAgICAgICAvKiBBdm9pZCBvdmVyZmxvd2luZyBieSBrZWVwaW5nIHRoZSBjb250YWluZXIgYXQgKi9cbiAgICAgICAgLyogbWF4LXdpZHRoIDEwMCUgb2YgaXRzIHBhcmVudC4gKi9cbiAgICAgICAgLyogVGhpcyBhbHNvIGFsbG93cyBjb250YWluZXJzIHRvIGJlIG5lc3RlZC4gKi9cbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC8qIE1pbmludW0gd2lkdGggKi9cbiAgICAgICAgbWluLXdpZHRoOiAke2dldENTU0xlbmd0aChnZXRDb25maWcoJ2NvbnRhaW5lci5taW5TaXplJykpfTtcblxuICAgICAgICAvKiBTZXQgY29udGFpbmVyIHdpZHRoLiAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAke2dldENTU0xlbmd0aChjb250YWluZXJXaWR0aCl9O1xuXG4gICAgICAgIC8qIGJvcmRlci1ib3ggZm9yY2VzIHRoZSBicm93c2VyIHRvIGluY2x1ZGUgcGFkZGluZyAqL1xuICAgICAgICAvKiBhbmQgYm9yZGVycyB3aGVuIGNhbGN1bGF0aW5nIHRoZSB3aWR0aC4gKi9cbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAvKiBDbGVhciBmbG9hdGluZyBlbGVtZW50cy4gKi9cbiAgICAgICAgJjpiZWZvcmUsXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIH0sXG4gICk7XG5cbiAgY29uc3Qgb3RoZXJQcm9wcyA9IGNsZWFuT2JqZWN0KHByb3BzLCBbXG4gICAgJ2ZsdWlkJyxcbiAgICAneGxhcmdlJyxcbiAgICAnbGFyZ2UnLFxuICAgICdtZWRpdW0nLFxuICAgICdzbWFsbCcsXG4gICAgJ3hzbWFsbCcsXG4gICAgJ3NpemUnLFxuICAgICdhdXRvU2l6ZScsXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLnJlc3BvbnNpdmVQcm9wc31cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgZGF0YS1nej1cImNvbnRhaW5lclwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgZmx1aWQ6IFByb3BUeXBlcy5ib29sLFxuICB4bGFyZ2U6IFByb3BUeXBlcy5ib29sLFxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2wsXG4gIG1lZGl1bTogUHJvcFR5cGVzLmJvb2wsXG4gIHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgeHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBhdXRvU2l6ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGdldFJlc3BvbnNpdmVQcm9wczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmx1aWQ6IGZhbHNlLFxuICB4bGFyZ2U6IGZhbHNlLFxuICBsYXJnZTogZmFsc2UsXG4gIG1lZGl1bTogZmFsc2UsXG4gIHNtYWxsOiBmYWxzZSxcbiAgeHNtYWxsOiBmYWxzZSxcbiAgc2l6ZTogJ2ZsdWlkJyxcbiAgYXV0b1NpemU6IHRydWUsXG4gIGNoaWxkcmVuOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJlc3BvbnNpdmUoQ29udGFpbmVyKTtcbiJdfQ== */"))
    );
  });
  var otherProps = (0, _helpers.cleanObject)(props, ['fluid', 'xlarge', 'large', 'medium', 'small', 'xsmall', 'size', 'autoSize']);
  return (0, _core.jsx)("div", (0, _extends2["default"])({}, responsiveProps, otherProps, {
    "data-gz": "container"
  }), children);
};

Container.propTypes = {
  fluid: _propTypes["default"].bool,
  xlarge: _propTypes["default"].bool,
  large: _propTypes["default"].bool,
  medium: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  xsmall: _propTypes["default"].bool,
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  autoSize: _propTypes["default"].bool,
  getResponsiveProps: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node
};
Container.defaultProps = {
  fluid: false,
  xlarge: false,
  large: false,
  medium: false,
  small: false,
  xsmall: false,
  size: 'fluid',
  autoSize: true,
  children: null
};

var _default = (0, _makeResponsive["default"])(Container);

exports["default"] = _default;