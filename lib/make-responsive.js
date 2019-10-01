"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeResponsive;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _config = require("./config");

var _helpers = require("./helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function makeResponsive(Component) {
  var mapPropsTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'xs';
  var breakpoints = (0, _config.getConfig)('breakpoints');
  var breakpointNames = Object.keys(breakpoints);

  function WithResponsiveStyles(props) {
    function getResponsiveProps(styleGetter) {
      var _destruct = (0, _helpers.destruct)(Component.defaultProps || {}, breakpointNames),
          _destruct2 = (0, _slicedToArray2["default"])(_destruct, 2),
          responsiveDefaultProps = _destruct2[0],
          componentDefaultProps = _destruct2[1];

      var _destruct3 = (0, _helpers.destruct)(props || {}, breakpointNames),
          _destruct4 = (0, _slicedToArray2["default"])(_destruct3, 1),
          responsiveProps = _destruct4[0];

      var defaultProps = _objectSpread({}, componentDefaultProps);

      var breakpointProps = {};
      var orderedBreakpoints = Object.entries(breakpoints).sort(function (a, b) {
        return a[1] - b[1];
      });
      var mappingBreakpoint = orderedBreakpoints.map(function (v) {
        return v[0];
      }).find(function (v) {
        return props[v] === true;
      }) || props.mapPropsTo || mapPropsTo;
      var styles = orderedBreakpoints.map(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            breakpointName = _ref2[0],
            breakpointWidth = _ref2[1];

        defaultProps = _objectSpread({}, defaultProps, {}, responsiveDefaultProps[breakpointName] || {});
        breakpointProps = _objectSpread({}, breakpointProps, {}, mappingBreakpoint === breakpointName ? (0, _helpers.cleanObject)(props, ['mapPropsTo', 'children'].concat((0, _toConsumableArray2["default"])(breakpointNames))) : {}, {}, responsiveProps[breakpointName] || {});
        var styleGetterArgs = {
          componentProps: breakpointProps,
          breakpointProps: _objectSpread({}, defaultProps, {}, breakpointProps),
          breakpointName: breakpointName,
          breakpointWidth: breakpointWidth
        };
        return (
          /*#__PURE__*/
          (0, _core.css)("@media screen and (min-width:", (0, _helpers.getCSSLength)(breakpointWidth), "){",
          /*#__PURE__*/
          (0, _core.css)(styleGetter(styleGetterArgs), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWtlLXJlc3BvbnNpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVnQiIsImZpbGUiOiIuLi9zcmMvbWFrZS1yZXNwb25zaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIGNsZWFuT2JqZWN0LFxuICBkZXN0cnVjdCxcbiAgZ2V0VHlwZSxcbiAgZ2V0Q1NTTGVuZ3RoLFxufSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlUmVzcG9uc2l2ZShDb21wb25lbnQsIG1hcFByb3BzVG8gPSAneHMnKSB7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gZ2V0Q29uZmlnKCdicmVha3BvaW50cycpO1xuICBjb25zdCBicmVha3BvaW50TmFtZXMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cyk7XG5cbiAgZnVuY3Rpb24gV2l0aFJlc3BvbnNpdmVTdHlsZXMocHJvcHMpIHtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zaXZlUHJvcHMoc3R5bGVHZXR0ZXIpIHtcbiAgICAgIGNvbnN0IFtcbiAgICAgICAgcmVzcG9uc2l2ZURlZmF1bHRQcm9wcyxcbiAgICAgICAgY29tcG9uZW50RGVmYXVsdFByb3BzLFxuICAgICAgXSA9IGRlc3RydWN0KENvbXBvbmVudC5kZWZhdWx0UHJvcHMgfHwge30sIGJyZWFrcG9pbnROYW1lcyk7XG5cbiAgICAgIGNvbnN0IFtcbiAgICAgICAgcmVzcG9uc2l2ZVByb3BzLFxuICAgICAgXSA9IGRlc3RydWN0KHByb3BzIHx8IHt9LCBicmVha3BvaW50TmFtZXMpO1xuXG4gICAgICBsZXQgZGVmYXVsdFByb3BzID0geyAuLi5jb21wb25lbnREZWZhdWx0UHJvcHMgfTtcbiAgICAgIGxldCBicmVha3BvaW50UHJvcHMgPSB7fTtcblxuICAgICAgY29uc3Qgb3JkZXJlZEJyZWFrcG9pbnRzID0gT2JqZWN0LmVudHJpZXMoYnJlYWtwb2ludHMpLnNvcnQoKGEsIGIpID0+IGFbMV0gLSBiWzFdKTtcblxuICAgICAgY29uc3QgbWFwcGluZ0JyZWFrcG9pbnQgPSAoXG4gICAgICAgIG9yZGVyZWRCcmVha3BvaW50cy5tYXAodiA9PiB2WzBdKS5maW5kKHYgPT4gcHJvcHNbdl0gPT09IHRydWUpXG4gICAgICAgIHx8IHByb3BzLm1hcFByb3BzVG9cbiAgICAgICAgfHwgbWFwUHJvcHNUb1xuICAgICAgKTtcblxuICAgICAgY29uc3Qgc3R5bGVzID0gb3JkZXJlZEJyZWFrcG9pbnRzXG4gICAgICAgIC5tYXAoKFticmVha3BvaW50TmFtZSwgYnJlYWtwb2ludFdpZHRoXSkgPT4ge1xuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgICAgIC4uLihyZXNwb25zaXZlRGVmYXVsdFByb3BzW2JyZWFrcG9pbnROYW1lXSB8fCB7fSksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGJyZWFrcG9pbnRQcm9wcyA9IHtcbiAgICAgICAgICAgIC8vIHRoZW4gYWNjdW11bGF0ZWQgcHJvcHNcbiAgICAgICAgICAgIC4uLmJyZWFrcG9pbnRQcm9wcyxcblxuICAgICAgICAgICAgLy8gdGhlbiB1c2UgdGhlIGNvbXBvbmVudCBsZXZlbCBwcm9wc1xuICAgICAgICAgICAgLi4uKFxuICAgICAgICAgICAgICBtYXBwaW5nQnJlYWtwb2ludCA9PT0gYnJlYWtwb2ludE5hbWVcbiAgICAgICAgICAgICAgICA/IGNsZWFuT2JqZWN0KHByb3BzLCBbXG4gICAgICAgICAgICAgICAgICAnbWFwUHJvcHNUbycsXG4gICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nLFxuICAgICAgICAgICAgICAgICAgLi4uYnJlYWtwb2ludE5hbWVzLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiB7fVxuICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgLy8gdGhlbiB1c2UgdGhlIGJyZWFrcG9pbnQgc3BlY2lmaWMgcHJvcHNcbiAgICAgICAgICAgIC4uLihyZXNwb25zaXZlUHJvcHNbYnJlYWtwb2ludE5hbWVdIHx8IHt9KSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3Qgc3R5bGVHZXR0ZXJBcmdzID0ge1xuICAgICAgICAgICAgY29tcG9uZW50UHJvcHM6IGJyZWFrcG9pbnRQcm9wcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnRQcm9wczoge1xuICAgICAgICAgICAgICAuLi5kZWZhdWx0UHJvcHMsXG4gICAgICAgICAgICAgIC4uLmJyZWFrcG9pbnRQcm9wcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVha3BvaW50TmFtZSxcbiAgICAgICAgICAgIGJyZWFrcG9pbnRXaWR0aCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7Z2V0Q1NTTGVuZ3RoKGJyZWFrcG9pbnRXaWR0aCl9KSB7XG4gICAgICAgICAgICAgICR7Y3NzKHN0eWxlR2V0dGVyKHN0eWxlR2V0dGVyQXJncykpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGA7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyBjc3M6IHN0eWxlcyB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudFByb3BzID0gY2xlYW5PYmplY3QocHJvcHMsIFtcbiAgICAgICdtYXBQcm9wc1RvJyxcbiAgICAgIC4uLmJyZWFrcG9pbnROYW1lcy5maWx0ZXIoKHYpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUocHJvcHNbdl0pO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGUgPT09ICd1bmRlZmluZWQnO1xuICAgICAgfSksXG4gICAgXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICBnZXRSZXNwb25zaXZlUHJvcHM9e2dldFJlc3BvbnNpdmVQcm9wc31cbiAgICAgICAgey4uLmNvbXBvbmVudFByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgV2l0aFJlc3BvbnNpdmVTdHlsZXMucHJvcFR5cGVzID0ge1xuICAgIG1hcFByb3BzVG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgeHM6IFByb3BUeXBlcy5hbnksXG4gICAgc206IFByb3BUeXBlcy5hbnksXG4gICAgbWQ6IFByb3BUeXBlcy5hbnksXG4gICAgbGc6IFByb3BUeXBlcy5hbnksXG4gICAgeGw6IFByb3BUeXBlcy5hbnksXG4gIH07XG5cbiAgV2l0aFJlc3BvbnNpdmVTdHlsZXMuZGVmYXVsdFByb3BzID0ge1xuICAgIG1hcFByb3BzVG86ICd4cycsXG4gICAgeHM6IHt9LFxuICAgIHNtOiB7fSxcbiAgICBtZDoge30sXG4gICAgbGc6IHt9LFxuICAgIHhsOiB7fSxcbiAgfTtcblxuICByZXR1cm4gV2l0aFJlc3BvbnNpdmVTdHlsZXM7XG59XG4iXX0= */"), "}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWtlLXJlc3BvbnNpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVvQiIsImZpbGUiOiIuLi9zcmMvbWFrZS1yZXNwb25zaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIGNsZWFuT2JqZWN0LFxuICBkZXN0cnVjdCxcbiAgZ2V0VHlwZSxcbiAgZ2V0Q1NTTGVuZ3RoLFxufSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlUmVzcG9uc2l2ZShDb21wb25lbnQsIG1hcFByb3BzVG8gPSAneHMnKSB7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gZ2V0Q29uZmlnKCdicmVha3BvaW50cycpO1xuICBjb25zdCBicmVha3BvaW50TmFtZXMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cyk7XG5cbiAgZnVuY3Rpb24gV2l0aFJlc3BvbnNpdmVTdHlsZXMocHJvcHMpIHtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zaXZlUHJvcHMoc3R5bGVHZXR0ZXIpIHtcbiAgICAgIGNvbnN0IFtcbiAgICAgICAgcmVzcG9uc2l2ZURlZmF1bHRQcm9wcyxcbiAgICAgICAgY29tcG9uZW50RGVmYXVsdFByb3BzLFxuICAgICAgXSA9IGRlc3RydWN0KENvbXBvbmVudC5kZWZhdWx0UHJvcHMgfHwge30sIGJyZWFrcG9pbnROYW1lcyk7XG5cbiAgICAgIGNvbnN0IFtcbiAgICAgICAgcmVzcG9uc2l2ZVByb3BzLFxuICAgICAgXSA9IGRlc3RydWN0KHByb3BzIHx8IHt9LCBicmVha3BvaW50TmFtZXMpO1xuXG4gICAgICBsZXQgZGVmYXVsdFByb3BzID0geyAuLi5jb21wb25lbnREZWZhdWx0UHJvcHMgfTtcbiAgICAgIGxldCBicmVha3BvaW50UHJvcHMgPSB7fTtcblxuICAgICAgY29uc3Qgb3JkZXJlZEJyZWFrcG9pbnRzID0gT2JqZWN0LmVudHJpZXMoYnJlYWtwb2ludHMpLnNvcnQoKGEsIGIpID0+IGFbMV0gLSBiWzFdKTtcblxuICAgICAgY29uc3QgbWFwcGluZ0JyZWFrcG9pbnQgPSAoXG4gICAgICAgIG9yZGVyZWRCcmVha3BvaW50cy5tYXAodiA9PiB2WzBdKS5maW5kKHYgPT4gcHJvcHNbdl0gPT09IHRydWUpXG4gICAgICAgIHx8IHByb3BzLm1hcFByb3BzVG9cbiAgICAgICAgfHwgbWFwUHJvcHNUb1xuICAgICAgKTtcblxuICAgICAgY29uc3Qgc3R5bGVzID0gb3JkZXJlZEJyZWFrcG9pbnRzXG4gICAgICAgIC5tYXAoKFticmVha3BvaW50TmFtZSwgYnJlYWtwb2ludFdpZHRoXSkgPT4ge1xuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgICAgIC4uLihyZXNwb25zaXZlRGVmYXVsdFByb3BzW2JyZWFrcG9pbnROYW1lXSB8fCB7fSksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGJyZWFrcG9pbnRQcm9wcyA9IHtcbiAgICAgICAgICAgIC8vIHRoZW4gYWNjdW11bGF0ZWQgcHJvcHNcbiAgICAgICAgICAgIC4uLmJyZWFrcG9pbnRQcm9wcyxcblxuICAgICAgICAgICAgLy8gdGhlbiB1c2UgdGhlIGNvbXBvbmVudCBsZXZlbCBwcm9wc1xuICAgICAgICAgICAgLi4uKFxuICAgICAgICAgICAgICBtYXBwaW5nQnJlYWtwb2ludCA9PT0gYnJlYWtwb2ludE5hbWVcbiAgICAgICAgICAgICAgICA/IGNsZWFuT2JqZWN0KHByb3BzLCBbXG4gICAgICAgICAgICAgICAgICAnbWFwUHJvcHNUbycsXG4gICAgICAgICAgICAgICAgICAnY2hpbGRyZW4nLFxuICAgICAgICAgICAgICAgICAgLi4uYnJlYWtwb2ludE5hbWVzLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiB7fVxuICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgLy8gdGhlbiB1c2UgdGhlIGJyZWFrcG9pbnQgc3BlY2lmaWMgcHJvcHNcbiAgICAgICAgICAgIC4uLihyZXNwb25zaXZlUHJvcHNbYnJlYWtwb2ludE5hbWVdIHx8IHt9KSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3Qgc3R5bGVHZXR0ZXJBcmdzID0ge1xuICAgICAgICAgICAgY29tcG9uZW50UHJvcHM6IGJyZWFrcG9pbnRQcm9wcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnRQcm9wczoge1xuICAgICAgICAgICAgICAuLi5kZWZhdWx0UHJvcHMsXG4gICAgICAgICAgICAgIC4uLmJyZWFrcG9pbnRQcm9wcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVha3BvaW50TmFtZSxcbiAgICAgICAgICAgIGJyZWFrcG9pbnRXaWR0aCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7Z2V0Q1NTTGVuZ3RoKGJyZWFrcG9pbnRXaWR0aCl9KSB7XG4gICAgICAgICAgICAgICR7Y3NzKHN0eWxlR2V0dGVyKHN0eWxlR2V0dGVyQXJncykpfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGA7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyBjc3M6IHN0eWxlcyB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudFByb3BzID0gY2xlYW5PYmplY3QocHJvcHMsIFtcbiAgICAgICdtYXBQcm9wc1RvJyxcbiAgICAgIC4uLmJyZWFrcG9pbnROYW1lcy5maWx0ZXIoKHYpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUocHJvcHNbdl0pO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGUgPT09ICd1bmRlZmluZWQnO1xuICAgICAgfSksXG4gICAgXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICBnZXRSZXNwb25zaXZlUHJvcHM9e2dldFJlc3BvbnNpdmVQcm9wc31cbiAgICAgICAgey4uLmNvbXBvbmVudFByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgV2l0aFJlc3BvbnNpdmVTdHlsZXMucHJvcFR5cGVzID0ge1xuICAgIG1hcFByb3BzVG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgeHM6IFByb3BUeXBlcy5hbnksXG4gICAgc206IFByb3BUeXBlcy5hbnksXG4gICAgbWQ6IFByb3BUeXBlcy5hbnksXG4gICAgbGc6IFByb3BUeXBlcy5hbnksXG4gICAgeGw6IFByb3BUeXBlcy5hbnksXG4gIH07XG5cbiAgV2l0aFJlc3BvbnNpdmVTdHlsZXMuZGVmYXVsdFByb3BzID0ge1xuICAgIG1hcFByb3BzVG86ICd4cycsXG4gICAgeHM6IHt9LFxuICAgIHNtOiB7fSxcbiAgICBtZDoge30sXG4gICAgbGc6IHt9LFxuICAgIHhsOiB7fSxcbiAgfTtcblxuICByZXR1cm4gV2l0aFJlc3BvbnNpdmVTdHlsZXM7XG59XG4iXX0= */"))
        );
      });
      return {
        css: styles
      };
    }

    var componentProps = (0, _helpers.cleanObject)(props, ['mapPropsTo'].concat((0, _toConsumableArray2["default"])(breakpointNames.filter(function (v) {
      var type = (0, _helpers.getType)(props[v]);
      return type === 'object' || type === 'boolean' || type === 'undefined';
    }))));
    return (0, _core.jsx)(Component, (0, _extends2["default"])({
      getResponsiveProps: getResponsiveProps
    }, componentProps));
  }

  WithResponsiveStyles.propTypes = {
    mapPropsTo: _propTypes["default"].string,
    xs: _propTypes["default"].any,
    sm: _propTypes["default"].any,
    md: _propTypes["default"].any,
    lg: _propTypes["default"].any,
    xl: _propTypes["default"].any
  };
  WithResponsiveStyles.defaultProps = {
    mapPropsTo: 'xs',
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {}
  };
  return WithResponsiveStyles;
}