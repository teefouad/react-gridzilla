"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeResponsive;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _config = require("./config");

var _helpers = require("./helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function makeResponsive(Component) {
  var mapPropsTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'md';
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

      var selfDefaultProps = (0, _helpers.cleanObject)(WithResponsiveStyles.defaultProps, ['mapPropsTo'].concat((0, _toConsumableArray2["default"])(breakpointNames)));

      var defaultProps = _objectSpread({}, selfDefaultProps, {}, componentDefaultProps);

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
        var breakpointStyles =
        /*#__PURE__*/
        (0, _core.css)("display:", styleGetterArgs.breakpointProps.hidden ? 'none' : 'block', ";",
        /*#__PURE__*/
        (0, _core.css)(styleGetter(styleGetterArgs), "label:breakpointStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWtlLXJlc3BvbnNpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0ZjIiwiZmlsZSI6Ii4uL3NyYy9tYWtlLXJlc3BvbnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtcbiAgY2xlYW5PYmplY3QsXG4gIGRlc3RydWN0LFxuICBnZXRUeXBlLFxuICBnZXRDU1NMZW5ndGgsXG59IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VSZXNwb25zaXZlKENvbXBvbmVudCwgbWFwUHJvcHNUbyA9ICdtZCcpIHtcbiAgY29uc3QgYnJlYWtwb2ludHMgPSBnZXRDb25maWcoJ2JyZWFrcG9pbnRzJyk7XG4gIGNvbnN0IGJyZWFrcG9pbnROYW1lcyA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKTtcblxuICBmdW5jdGlvbiBXaXRoUmVzcG9uc2l2ZVN0eWxlcyhwcm9wcykge1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNpdmVQcm9wcyhzdHlsZUdldHRlcikge1xuICAgICAgY29uc3QgW1xuICAgICAgICByZXNwb25zaXZlRGVmYXVsdFByb3BzLFxuICAgICAgICBjb21wb25lbnREZWZhdWx0UHJvcHMsXG4gICAgICBdID0gZGVzdHJ1Y3QoQ29tcG9uZW50LmRlZmF1bHRQcm9wcyB8fCB7fSwgYnJlYWtwb2ludE5hbWVzKTtcblxuICAgICAgY29uc3QgW1xuICAgICAgICByZXNwb25zaXZlUHJvcHMsXG4gICAgICBdID0gZGVzdHJ1Y3QocHJvcHMgfHwge30sIGJyZWFrcG9pbnROYW1lcyk7XG5cbiAgICAgIGNvbnN0IHNlbGZEZWZhdWx0UHJvcHMgPSBjbGVhbk9iamVjdChXaXRoUmVzcG9uc2l2ZVN0eWxlcy5kZWZhdWx0UHJvcHMsIFtcbiAgICAgICAgJ21hcFByb3BzVG8nLFxuICAgICAgICAuLi5icmVha3BvaW50TmFtZXMsXG4gICAgICBdKTtcblxuICAgICAgbGV0IGRlZmF1bHRQcm9wcyA9IHsgLi4uc2VsZkRlZmF1bHRQcm9wcywgLi4uY29tcG9uZW50RGVmYXVsdFByb3BzIH07XG4gICAgICBsZXQgYnJlYWtwb2ludFByb3BzID0ge307XG5cbiAgICAgIGNvbnN0IG9yZGVyZWRCcmVha3BvaW50cyA9IE9iamVjdC5lbnRyaWVzKGJyZWFrcG9pbnRzKS5zb3J0KChhLCBiKSA9PiBhWzFdIC0gYlsxXSk7XG5cbiAgICAgIGNvbnN0IG1hcHBpbmdCcmVha3BvaW50ID0gKFxuICAgICAgICBvcmRlcmVkQnJlYWtwb2ludHMubWFwKHYgPT4gdlswXSkuZmluZCh2ID0+IHByb3BzW3ZdID09PSB0cnVlKVxuICAgICAgICB8fCBwcm9wcy5tYXBQcm9wc1RvXG4gICAgICAgIHx8IG1hcFByb3BzVG9cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IG9yZGVyZWRCcmVha3BvaW50c1xuICAgICAgICAubWFwKChbYnJlYWtwb2ludE5hbWUsIGJyZWFrcG9pbnRXaWR0aF0pID0+IHtcbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0UHJvcHMsXG4gICAgICAgICAgICAuLi4ocmVzcG9uc2l2ZURlZmF1bHRQcm9wc1ticmVha3BvaW50TmFtZV0gfHwge30pLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBicmVha3BvaW50UHJvcHMgPSB7XG4gICAgICAgICAgICAvLyB0aGVuIGFjY3VtdWxhdGVkIHByb3BzXG4gICAgICAgICAgICAuLi5icmVha3BvaW50UHJvcHMsXG5cbiAgICAgICAgICAgIC8vIHRoZW4gdXNlIHRoZSBjb21wb25lbnQgbGV2ZWwgcHJvcHNcbiAgICAgICAgICAgIC4uLihcbiAgICAgICAgICAgICAgbWFwcGluZ0JyZWFrcG9pbnQgPT09IGJyZWFrcG9pbnROYW1lXG4gICAgICAgICAgICAgICAgPyBjbGVhbk9iamVjdChwcm9wcywgW1xuICAgICAgICAgICAgICAgICAgJ21hcFByb3BzVG8nLFxuICAgICAgICAgICAgICAgICAgJ2NoaWxkcmVuJyxcbiAgICAgICAgICAgICAgICAgIC4uLmJyZWFrcG9pbnROYW1lcyxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDoge31cbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIC8vIHRoZW4gdXNlIHRoZSBicmVha3BvaW50IHNwZWNpZmljIHByb3BzXG4gICAgICAgICAgICAuLi4ocmVzcG9uc2l2ZVByb3BzW2JyZWFrcG9pbnROYW1lXSB8fCB7fSksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IHN0eWxlR2V0dGVyQXJncyA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudFByb3BzOiBicmVha3BvaW50UHJvcHMsXG4gICAgICAgICAgICBicmVha3BvaW50UHJvcHM6IHtcbiAgICAgICAgICAgICAgLi4uZGVmYXVsdFByb3BzLFxuICAgICAgICAgICAgICAuLi5icmVha3BvaW50UHJvcHMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJlYWtwb2ludE5hbWUsXG4gICAgICAgICAgICBicmVha3BvaW50V2lkdGgsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IGJyZWFrcG9pbnRTdHlsZXMgPSBjc3NgXG4gICAgICAgICAgICBkaXNwbGF5OiAke3N0eWxlR2V0dGVyQXJncy5icmVha3BvaW50UHJvcHMuaGlkZGVuID8gJ25vbmUnIDogJ2Jsb2NrJ307XG4gICAgICAgICAgICAke2NzcyhzdHlsZUdldHRlcihzdHlsZUdldHRlckFyZ3MpKX1cbiAgICAgICAgICBgO1xuXG4gICAgICAgICAgaWYgKGJyZWFrcG9pbnRXaWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRTdHlsZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7Z2V0Q1NTTGVuZ3RoKGJyZWFrcG9pbnRXaWR0aCl9KSB7XG4gICAgICAgICAgICAgICR7YnJlYWtwb2ludFN0eWxlc31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHsgY3NzOiBzdHlsZXMgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnRQcm9wcyA9IGNsZWFuT2JqZWN0KHByb3BzLCBbXG4gICAgICAnaGlkZGVuJyxcbiAgICAgICdtYXBQcm9wc1RvJyxcbiAgICAgIC4uLmJyZWFrcG9pbnROYW1lcy5maWx0ZXIoKHYpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGdldFR5cGUocHJvcHNbdl0pO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGUgPT09ICd1bmRlZmluZWQnO1xuICAgICAgfSksXG4gICAgXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICBnZXRSZXNwb25zaXZlUHJvcHM9e2dldFJlc3BvbnNpdmVQcm9wc31cbiAgICAgICAgey4uLmNvbXBvbmVudFByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgV2l0aFJlc3BvbnNpdmVTdHlsZXMucHJvcFR5cGVzID0ge1xuICAgIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWFwUHJvcHNUbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB4czogUHJvcFR5cGVzLmFueSxcbiAgICBzbTogUHJvcFR5cGVzLmFueSxcbiAgICBtZDogUHJvcFR5cGVzLmFueSxcbiAgICBsZzogUHJvcFR5cGVzLmFueSxcbiAgICB4bDogUHJvcFR5cGVzLmFueSxcbiAgfTtcblxuICBXaXRoUmVzcG9uc2l2ZVN0eWxlcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaGlkZGVuOiBmYWxzZSxcbiAgICBtYXBQcm9wc1RvOiAnbWQnLFxuICAgIHhzOiB7fSxcbiAgICBzbToge30sXG4gICAgbWQ6IHt9LFxuICAgIGxnOiB7fSxcbiAgICB4bDoge30sXG4gIH07XG5cbiAgcmV0dXJuIFdpdGhSZXNwb25zaXZlU3R5bGVzO1xufVxuIl19 */")), "label:breakpointStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWtlLXJlc3BvbnNpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVzQyIsImZpbGUiOiIuLi9zcmMvbWFrZS1yZXNwb25zaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIGNsZWFuT2JqZWN0LFxuICBkZXN0cnVjdCxcbiAgZ2V0VHlwZSxcbiAgZ2V0Q1NTTGVuZ3RoLFxufSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlUmVzcG9uc2l2ZShDb21wb25lbnQsIG1hcFByb3BzVG8gPSAnbWQnKSB7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gZ2V0Q29uZmlnKCdicmVha3BvaW50cycpO1xuICBjb25zdCBicmVha3BvaW50TmFtZXMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cyk7XG5cbiAgZnVuY3Rpb24gV2l0aFJlc3BvbnNpdmVTdHlsZXMocHJvcHMpIHtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zaXZlUHJvcHMoc3R5bGVHZXR0ZXIpIHtcbiAgICAgIGNvbnN0IFtcbiAgICAgICAgcmVzcG9uc2l2ZURlZmF1bHRQcm9wcyxcbiAgICAgICAgY29tcG9uZW50RGVmYXVsdFByb3BzLFxuICAgICAgXSA9IGRlc3RydWN0KENvbXBvbmVudC5kZWZhdWx0UHJvcHMgfHwge30sIGJyZWFrcG9pbnROYW1lcyk7XG5cbiAgICAgIGNvbnN0IFtcbiAgICAgICAgcmVzcG9uc2l2ZVByb3BzLFxuICAgICAgXSA9IGRlc3RydWN0KHByb3BzIHx8IHt9LCBicmVha3BvaW50TmFtZXMpO1xuXG4gICAgICBjb25zdCBzZWxmRGVmYXVsdFByb3BzID0gY2xlYW5PYmplY3QoV2l0aFJlc3BvbnNpdmVTdHlsZXMuZGVmYXVsdFByb3BzLCBbXG4gICAgICAgICdtYXBQcm9wc1RvJyxcbiAgICAgICAgLi4uYnJlYWtwb2ludE5hbWVzLFxuICAgICAgXSk7XG5cbiAgICAgIGxldCBkZWZhdWx0UHJvcHMgPSB7IC4uLnNlbGZEZWZhdWx0UHJvcHMsIC4uLmNvbXBvbmVudERlZmF1bHRQcm9wcyB9O1xuICAgICAgbGV0IGJyZWFrcG9pbnRQcm9wcyA9IHt9O1xuXG4gICAgICBjb25zdCBvcmRlcmVkQnJlYWtwb2ludHMgPSBPYmplY3QuZW50cmllcyhicmVha3BvaW50cykuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pO1xuXG4gICAgICBjb25zdCBtYXBwaW5nQnJlYWtwb2ludCA9IChcbiAgICAgICAgb3JkZXJlZEJyZWFrcG9pbnRzLm1hcCh2ID0+IHZbMF0pLmZpbmQodiA9PiBwcm9wc1t2XSA9PT0gdHJ1ZSlcbiAgICAgICAgfHwgcHJvcHMubWFwUHJvcHNUb1xuICAgICAgICB8fCBtYXBQcm9wc1RvXG4gICAgICApO1xuXG4gICAgICBjb25zdCBzdHlsZXMgPSBvcmRlcmVkQnJlYWtwb2ludHNcbiAgICAgICAgLm1hcCgoW2JyZWFrcG9pbnROYW1lLCBicmVha3BvaW50V2lkdGhdKSA9PiB7XG4gICAgICAgICAgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICAgICAgLi4uZGVmYXVsdFByb3BzLFxuICAgICAgICAgICAgLi4uKHJlc3BvbnNpdmVEZWZhdWx0UHJvcHNbYnJlYWtwb2ludE5hbWVdIHx8IHt9KSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYnJlYWtwb2ludFByb3BzID0ge1xuICAgICAgICAgICAgLy8gdGhlbiBhY2N1bXVsYXRlZCBwcm9wc1xuICAgICAgICAgICAgLi4uYnJlYWtwb2ludFByb3BzLFxuXG4gICAgICAgICAgICAvLyB0aGVuIHVzZSB0aGUgY29tcG9uZW50IGxldmVsIHByb3BzXG4gICAgICAgICAgICAuLi4oXG4gICAgICAgICAgICAgIG1hcHBpbmdCcmVha3BvaW50ID09PSBicmVha3BvaW50TmFtZVxuICAgICAgICAgICAgICAgID8gY2xlYW5PYmplY3QocHJvcHMsIFtcbiAgICAgICAgICAgICAgICAgICdtYXBQcm9wc1RvJyxcbiAgICAgICAgICAgICAgICAgICdjaGlsZHJlbicsXG4gICAgICAgICAgICAgICAgICAuLi5icmVha3BvaW50TmFtZXMsXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAvLyB0aGVuIHVzZSB0aGUgYnJlYWtwb2ludCBzcGVjaWZpYyBwcm9wc1xuICAgICAgICAgICAgLi4uKHJlc3BvbnNpdmVQcm9wc1ticmVha3BvaW50TmFtZV0gfHwge30pLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBzdHlsZUdldHRlckFyZ3MgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRQcm9wczogYnJlYWtwb2ludFByb3BzLFxuICAgICAgICAgICAgYnJlYWtwb2ludFByb3BzOiB7XG4gICAgICAgICAgICAgIC4uLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgICAgICAgLi4uYnJlYWtwb2ludFByb3BzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFrcG9pbnROYW1lLFxuICAgICAgICAgICAgYnJlYWtwb2ludFdpZHRoLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBicmVha3BvaW50U3R5bGVzID0gY3NzYFxuICAgICAgICAgICAgZGlzcGxheTogJHtzdHlsZUdldHRlckFyZ3MuYnJlYWtwb2ludFByb3BzLmhpZGRlbiA/ICdub25lJyA6ICdibG9jayd9O1xuICAgICAgICAgICAgJHtjc3Moc3R5bGVHZXR0ZXIoc3R5bGVHZXR0ZXJBcmdzKSl9XG4gICAgICAgICAgYDtcblxuICAgICAgICAgIGlmIChicmVha3BvaW50V2lkdGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50U3R5bGVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjc3NgXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2dldENTU0xlbmd0aChicmVha3BvaW50V2lkdGgpfSkge1xuICAgICAgICAgICAgICAke2JyZWFrcG9pbnRTdHlsZXN9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYDtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7IGNzczogc3R5bGVzIH07XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSBjbGVhbk9iamVjdChwcm9wcywgW1xuICAgICAgJ2hpZGRlbicsXG4gICAgICAnbWFwUHJvcHNUbycsXG4gICAgICAuLi5icmVha3BvaW50TmFtZXMuZmlsdGVyKCh2KSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKHByb3BzW3ZdKTtcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdib29sZWFuJyB8fCB0eXBlID09PSAndW5kZWZpbmVkJztcbiAgICAgIH0pLFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgZ2V0UmVzcG9uc2l2ZVByb3BzPXtnZXRSZXNwb25zaXZlUHJvcHN9XG4gICAgICAgIHsuLi5jb21wb25lbnRQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIFdpdGhSZXNwb25zaXZlU3R5bGVzLnByb3BUeXBlcyA9IHtcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICAgIG1hcFByb3BzVG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgeHM6IFByb3BUeXBlcy5hbnksXG4gICAgc206IFByb3BUeXBlcy5hbnksXG4gICAgbWQ6IFByb3BUeXBlcy5hbnksXG4gICAgbGc6IFByb3BUeXBlcy5hbnksXG4gICAgeGw6IFByb3BUeXBlcy5hbnksXG4gIH07XG5cbiAgV2l0aFJlc3BvbnNpdmVTdHlsZXMuZGVmYXVsdFByb3BzID0ge1xuICAgIGhpZGRlbjogZmFsc2UsXG4gICAgbWFwUHJvcHNUbzogJ21kJyxcbiAgICB4czoge30sXG4gICAgc206IHt9LFxuICAgIG1kOiB7fSxcbiAgICBsZzoge30sXG4gICAgeGw6IHt9LFxuICB9O1xuXG4gIHJldHVybiBXaXRoUmVzcG9uc2l2ZVN0eWxlcztcbn1cbiJdfQ== */"));

        if (breakpointWidth === 0) {
          return breakpointStyles;
        }

        return (
          /*#__PURE__*/
          (0, _core.css)("@media screen and (min-width:", (0, _helpers.getCSSLength)(breakpointWidth), "){", breakpointStyles, "}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWtlLXJlc3BvbnNpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZvQiIsImZpbGUiOiIuLi9zcmMvbWFrZS1yZXNwb25zaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIGNsZWFuT2JqZWN0LFxuICBkZXN0cnVjdCxcbiAgZ2V0VHlwZSxcbiAgZ2V0Q1NTTGVuZ3RoLFxufSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlUmVzcG9uc2l2ZShDb21wb25lbnQsIG1hcFByb3BzVG8gPSAnbWQnKSB7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gZ2V0Q29uZmlnKCdicmVha3BvaW50cycpO1xuICBjb25zdCBicmVha3BvaW50TmFtZXMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cyk7XG5cbiAgZnVuY3Rpb24gV2l0aFJlc3BvbnNpdmVTdHlsZXMocHJvcHMpIHtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zaXZlUHJvcHMoc3R5bGVHZXR0ZXIpIHtcbiAgICAgIGNvbnN0IFtcbiAgICAgICAgcmVzcG9uc2l2ZURlZmF1bHRQcm9wcyxcbiAgICAgICAgY29tcG9uZW50RGVmYXVsdFByb3BzLFxuICAgICAgXSA9IGRlc3RydWN0KENvbXBvbmVudC5kZWZhdWx0UHJvcHMgfHwge30sIGJyZWFrcG9pbnROYW1lcyk7XG5cbiAgICAgIGNvbnN0IFtcbiAgICAgICAgcmVzcG9uc2l2ZVByb3BzLFxuICAgICAgXSA9IGRlc3RydWN0KHByb3BzIHx8IHt9LCBicmVha3BvaW50TmFtZXMpO1xuXG4gICAgICBjb25zdCBzZWxmRGVmYXVsdFByb3BzID0gY2xlYW5PYmplY3QoV2l0aFJlc3BvbnNpdmVTdHlsZXMuZGVmYXVsdFByb3BzLCBbXG4gICAgICAgICdtYXBQcm9wc1RvJyxcbiAgICAgICAgLi4uYnJlYWtwb2ludE5hbWVzLFxuICAgICAgXSk7XG5cbiAgICAgIGxldCBkZWZhdWx0UHJvcHMgPSB7IC4uLnNlbGZEZWZhdWx0UHJvcHMsIC4uLmNvbXBvbmVudERlZmF1bHRQcm9wcyB9O1xuICAgICAgbGV0IGJyZWFrcG9pbnRQcm9wcyA9IHt9O1xuXG4gICAgICBjb25zdCBvcmRlcmVkQnJlYWtwb2ludHMgPSBPYmplY3QuZW50cmllcyhicmVha3BvaW50cykuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pO1xuXG4gICAgICBjb25zdCBtYXBwaW5nQnJlYWtwb2ludCA9IChcbiAgICAgICAgb3JkZXJlZEJyZWFrcG9pbnRzLm1hcCh2ID0+IHZbMF0pLmZpbmQodiA9PiBwcm9wc1t2XSA9PT0gdHJ1ZSlcbiAgICAgICAgfHwgcHJvcHMubWFwUHJvcHNUb1xuICAgICAgICB8fCBtYXBQcm9wc1RvXG4gICAgICApO1xuXG4gICAgICBjb25zdCBzdHlsZXMgPSBvcmRlcmVkQnJlYWtwb2ludHNcbiAgICAgICAgLm1hcCgoW2JyZWFrcG9pbnROYW1lLCBicmVha3BvaW50V2lkdGhdKSA9PiB7XG4gICAgICAgICAgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICAgICAgLi4uZGVmYXVsdFByb3BzLFxuICAgICAgICAgICAgLi4uKHJlc3BvbnNpdmVEZWZhdWx0UHJvcHNbYnJlYWtwb2ludE5hbWVdIHx8IHt9KSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYnJlYWtwb2ludFByb3BzID0ge1xuICAgICAgICAgICAgLy8gdGhlbiBhY2N1bXVsYXRlZCBwcm9wc1xuICAgICAgICAgICAgLi4uYnJlYWtwb2ludFByb3BzLFxuXG4gICAgICAgICAgICAvLyB0aGVuIHVzZSB0aGUgY29tcG9uZW50IGxldmVsIHByb3BzXG4gICAgICAgICAgICAuLi4oXG4gICAgICAgICAgICAgIG1hcHBpbmdCcmVha3BvaW50ID09PSBicmVha3BvaW50TmFtZVxuICAgICAgICAgICAgICAgID8gY2xlYW5PYmplY3QocHJvcHMsIFtcbiAgICAgICAgICAgICAgICAgICdtYXBQcm9wc1RvJyxcbiAgICAgICAgICAgICAgICAgICdjaGlsZHJlbicsXG4gICAgICAgICAgICAgICAgICAuLi5icmVha3BvaW50TmFtZXMsXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAvLyB0aGVuIHVzZSB0aGUgYnJlYWtwb2ludCBzcGVjaWZpYyBwcm9wc1xuICAgICAgICAgICAgLi4uKHJlc3BvbnNpdmVQcm9wc1ticmVha3BvaW50TmFtZV0gfHwge30pLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBzdHlsZUdldHRlckFyZ3MgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRQcm9wczogYnJlYWtwb2ludFByb3BzLFxuICAgICAgICAgICAgYnJlYWtwb2ludFByb3BzOiB7XG4gICAgICAgICAgICAgIC4uLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgICAgICAgLi4uYnJlYWtwb2ludFByb3BzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFrcG9pbnROYW1lLFxuICAgICAgICAgICAgYnJlYWtwb2ludFdpZHRoLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBicmVha3BvaW50U3R5bGVzID0gY3NzYFxuICAgICAgICAgICAgZGlzcGxheTogJHtzdHlsZUdldHRlckFyZ3MuYnJlYWtwb2ludFByb3BzLmhpZGRlbiA/ICdub25lJyA6ICdibG9jayd9O1xuICAgICAgICAgICAgJHtjc3Moc3R5bGVHZXR0ZXIoc3R5bGVHZXR0ZXJBcmdzKSl9XG4gICAgICAgICAgYDtcblxuICAgICAgICAgIGlmIChicmVha3BvaW50V2lkdGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50U3R5bGVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjc3NgXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2dldENTU0xlbmd0aChicmVha3BvaW50V2lkdGgpfSkge1xuICAgICAgICAgICAgICAke2JyZWFrcG9pbnRTdHlsZXN9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYDtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7IGNzczogc3R5bGVzIH07XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSBjbGVhbk9iamVjdChwcm9wcywgW1xuICAgICAgJ2hpZGRlbicsXG4gICAgICAnbWFwUHJvcHNUbycsXG4gICAgICAuLi5icmVha3BvaW50TmFtZXMuZmlsdGVyKCh2KSA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBnZXRUeXBlKHByb3BzW3ZdKTtcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdib29sZWFuJyB8fCB0eXBlID09PSAndW5kZWZpbmVkJztcbiAgICAgIH0pLFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgZ2V0UmVzcG9uc2l2ZVByb3BzPXtnZXRSZXNwb25zaXZlUHJvcHN9XG4gICAgICAgIHsuLi5jb21wb25lbnRQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIFdpdGhSZXNwb25zaXZlU3R5bGVzLnByb3BUeXBlcyA9IHtcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICAgIG1hcFByb3BzVG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgeHM6IFByb3BUeXBlcy5hbnksXG4gICAgc206IFByb3BUeXBlcy5hbnksXG4gICAgbWQ6IFByb3BUeXBlcy5hbnksXG4gICAgbGc6IFByb3BUeXBlcy5hbnksXG4gICAgeGw6IFByb3BUeXBlcy5hbnksXG4gIH07XG5cbiAgV2l0aFJlc3BvbnNpdmVTdHlsZXMuZGVmYXVsdFByb3BzID0ge1xuICAgIGhpZGRlbjogZmFsc2UsXG4gICAgbWFwUHJvcHNUbzogJ21kJyxcbiAgICB4czoge30sXG4gICAgc206IHt9LFxuICAgIG1kOiB7fSxcbiAgICBsZzoge30sXG4gICAgeGw6IHt9LFxuICB9O1xuXG4gIHJldHVybiBXaXRoUmVzcG9uc2l2ZVN0eWxlcztcbn1cbiJdfQ== */"))
        );
      });
      return {
        css: styles
      };
    }

    var componentProps = (0, _helpers.cleanObject)(props, ['hidden', 'mapPropsTo'].concat((0, _toConsumableArray2["default"])(breakpointNames.filter(function (v) {
      var type = (0, _helpers.getType)(props[v]);
      return type === 'object' || type === 'boolean' || type === 'undefined';
    }))));
    return (0, _core.jsx)(Component, (0, _extends2["default"])({
      getResponsiveProps: getResponsiveProps
    }, componentProps));
  }

  WithResponsiveStyles.propTypes = {
    hidden: _propTypes["default"].bool,
    mapPropsTo: _propTypes["default"].string,
    xs: _propTypes["default"].any,
    sm: _propTypes["default"].any,
    md: _propTypes["default"].any,
    lg: _propTypes["default"].any,
    xl: _propTypes["default"].any
  };
  WithResponsiveStyles.defaultProps = {
    hidden: false,
    mapPropsTo: 'md',
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {}
  };
  return WithResponsiveStyles;
}