"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GridContext = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeResponsive = _interopRequireDefault(require("./make-responsive"));

var _config = require("./config");

var _helpers = require("./helpers");

var _tiles = require("./tiles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * The grid context is used to pass down grid configuration for child units.
 */
var GridContext = _react["default"].createContext({});
/**
 * Parses a grid gap value.
 * @param {Number | String} v Gap value to be parsed
 */


exports.GridContext = GridContext;

var parseGapValue = function parseGapValue(value) {
  var gapValue = (0, _config.getConfig)('grid.gaps')[value] !== undefined ? (0, _config.getConfig)('grid.gaps')[value] : value;
  /* divide gap value by 2 */

  gapValue = +gapValue.toString().replace(/\d+/, parseInt(gapValue, 10) * 0.5);
  return gapValue;
};

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1grlw7p-Tiles",
  styles: "display:flex;height:100%;& > *{flex:1 1 0;align-items:stretch;}label:Tiles;"
} : {
  name: "1grlw7p-Tiles",
  styles: "display:flex;height:100%;& > *{flex:1 1 0;align-items:stretch;}label:Tiles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIc0IiLCJmaWxlIjoiLi4vc3JjL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IG1ha2VSZXNwb25zaXZlIGZyb20gJy4vbWFrZS1yZXNwb25zaXZlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGdldENTU0xlbmd0aCwgZmxleE1hcHBlciwgY2xlYW5PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgVGlsZXNDb250ZXh0IH0gZnJvbSAnLi90aWxlcyc7XG5cbi8qKlxuICogVGhlIGdyaWQgY29udGV4dCBpcyB1c2VkIHRvIHBhc3MgZG93biBncmlkIGNvbmZpZ3VyYXRpb24gZm9yIGNoaWxkIHVuaXRzLlxuICovXG5leHBvcnQgY29uc3QgR3JpZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuLyoqXG4gKiBQYXJzZXMgYSBncmlkIGdhcCB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyIHwgU3RyaW5nfSB2IEdhcCB2YWx1ZSB0byBiZSBwYXJzZWRcbiAqL1xuY29uc3QgcGFyc2VHYXBWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgZ2FwVmFsdWUgPSBnZXRDb25maWcoJ2dyaWQuZ2FwcycpW3ZhbHVlXSAhPT0gdW5kZWZpbmVkID8gZ2V0Q29uZmlnKCdncmlkLmdhcHMnKVt2YWx1ZV0gOiB2YWx1ZTtcblxuICAvKiBkaXZpZGUgZ2FwIHZhbHVlIGJ5IDIgKi9cbiAgZ2FwVmFsdWUgPSArZ2FwVmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXGQrLywgcGFyc2VJbnQoZ2FwVmFsdWUsIDEwKSAqIDAuNSk7XG5cbiAgcmV0dXJuIGdhcFZhbHVlO1xufTtcblxuY29uc3QgR3JpZCA9ICh7XG4gIGdldFJlc3BvbnNpdmVQcm9wcyxcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiAoXG4gIDxUaWxlc0NvbnRleHQuQ29uc3VtZXI+XG4gICAge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBmdW5jdGlvbiBHcmlkKHRpbGVzUHJvcHMpIHtcbiAgICAgICAgY29uc3QgZ3JpZFByb3BzID0ge307XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2l2ZVByb3BzID0gZ2V0UmVzcG9uc2l2ZVByb3BzKFxuICAgICAgICAgICh7IGJyZWFrcG9pbnRQcm9wcywgYnJlYWtwb2ludE5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW1xuICAgICAgICAgICAgICBnYXBDb2xzID0gcGFyc2VHYXBWYWx1ZShicmVha3BvaW50UHJvcHMuZ2FwQ29scyksXG4gICAgICAgICAgICAgIGdhcFJvd3MgPSBwYXJzZUdhcFZhbHVlKGJyZWFrcG9pbnRQcm9wcy5nYXBSb3dzKSxcbiAgICAgICAgICAgIF0gPSBicmVha3BvaW50UHJvcHMuZ2FwLnNwbGl0KCcgJykuZmlsdGVyKEJvb2xlYW4pLm1hcChwYXJzZUdhcFZhbHVlKTtcblxuICAgICAgICAgICAgY29uc3QgW1xuICAgICAgICAgICAgICBhbGlnblJvd3MgPSBicmVha3BvaW50UHJvcHMuYWxpZ25Sb3dzLFxuICAgICAgICAgICAgICBhbGlnbkNvbHMgPSBicmVha3BvaW50UHJvcHMuYWxpZ25Db2xzLFxuICAgICAgICAgICAgXSA9IGJyZWFrcG9pbnRQcm9wcy5hbGlnbi5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgICAgICAgZ3JpZFByb3BzW2JyZWFrcG9pbnROYW1lXSA9IHtcbiAgICAgICAgICAgICAgLi4uYnJlYWtwb2ludFByb3BzLFxuICAgICAgICAgICAgICBnYXBDb2xzLFxuICAgICAgICAgICAgICBnYXBSb3dzLFxuICAgICAgICAgICAgICBzaXplOiB0aWxlc1Byb3BzICYmIGJyZWFrcG9pbnRQcm9wcy5zaXplID09PSB1bmRlZmluZWQgPyAnYXV0bycgOiBicmVha3BvaW50UHJvcHMuc2l6ZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGFsaWduSXRlbXMgPSAodGlsZXNQcm9wcyB8fCBicmVha3BvaW50UHJvcHMuc3RyZXRjaCkgPyAnc3RyZXRjaCcgOiBhbGlnblJvd3M7XG5cbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gYnJlYWtwb2ludFByb3BzLmp1c3RpZnkgPyAnYmV0d2VlbicgOiBicmVha3BvaW50UHJvcHMuc3BhY2U7XG4gICAgICAgICAgICBjb25zdCBqdXN0aWZ5Q29udGVudCA9IHNwYWNlID8gYHNwYWNlLSR7c3BhY2V9YCA6IGFsaWduQ29scztcblxuICAgICAgICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgICAgICAgbGFiZWw6IGdyaWQ7XG4gICAgICAgICAgICAgIC8qIFNldCBkaXNwbGF5IG1vZGUuICovXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiAke2Ake2JyZWFrcG9pbnRQcm9wcy52ZXJ0aWNhbCA/ICdjb2x1bW4nIDogJ3Jvdyd9JHticmVha3BvaW50UHJvcHMucmV2ZXJzZSA/ICctcmV2ZXJzZScgOiAnJ31gfTtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiAke3sgdHJ1ZTogJ3dyYXAnLCBmYWxzZTogJ25vd3JhcCcgfVticmVha3BvaW50UHJvcHMud3JhcF0gfHwgYnJlYWtwb2ludFByb3BzLndyYXB9O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7ZmxleE1hcHBlcltqdXN0aWZ5Q29udGVudF0gfHwganVzdGlmeUNvbnRlbnR9O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogJHtmbGV4TWFwcGVyW2FsaWduSXRlbXNdIHx8IGFsaWduSXRlbXN9O1xuICAgICAgICAgICAgICBtYXJnaW46IC0ke2dldENTU0xlbmd0aChnYXBSb3dzKX0gLSR7Z2V0Q1NTTGVuZ3RoKGdhcENvbHMpfTtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgICAvKiBDcmVhdGUgZ2FwcyBiZXR3ZWVuIGNvbnNlY3V0aXZlIGdyaWRzICovXG4gICAgICAgICAgICAgICYgKyAmIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAke2dldENTU0xlbmd0aChnYXBSb3dzKX07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBvdGhlclByb3BzID0gY2xlYW5PYmplY3QocHJvcHMsIFtcbiAgICAgICAgICAnYWxpZ24nLFxuICAgICAgICAgICdhbGlnbkNvbHMnLFxuICAgICAgICAgICdhbGlnblJvd3MnLFxuICAgICAgICAgICdzcGFjZScsXG4gICAgICAgICAgJ2p1c3RpZnknLFxuICAgICAgICAgICdzdHJldGNoJyxcbiAgICAgICAgICAnYXV0bycsXG4gICAgICAgICAgJ3VuaXRTcGFuJyxcbiAgICAgICAgICAnZ2FwJyxcbiAgICAgICAgICAnZ2FwQ29scycsXG4gICAgICAgICAgJ2dhcFJvd3MnLFxuICAgICAgICAgICdyZXZlcnNlJyxcbiAgICAgICAgICAnc2l6ZScsXG4gICAgICAgICAgJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAnd3JhcCcsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IGdyaWRFbGVtZW50ID0gKFxuICAgICAgICAgIDxHcmlkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBncmlkUHJvcHMgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHsuLi5yZXNwb25zaXZlUHJvcHN9XG4gICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgICAgICBkYXRhLWd6PVwiZ3JpZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvR3JpZENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRpbGVzUHJvcHMpIHtcbiAgICAgICAgICBjb25zdCBUaWxlcyA9ICgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgey4uLnRpbGVzUHJvcHN9XG4gICAgICAgICAgICAgIGRhdGEtZ3o9XCJ0aWxlc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtncmlkRWxlbWVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXR1cm4gVGlsZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBncmlkRWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG4gIDwvVGlsZXNDb250ZXh0LkNvbnN1bWVyPlxuKTtcblxuR3JpZC5wcm9wVHlwZXMgPSB7XG4gIGFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbkNvbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsaWduUm93czogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3BhY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGp1c3RpZnk6IFByb3BUeXBlcy5ib29sLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgYXV0bzogUHJvcFR5cGVzLmJvb2wsXG4gIHVuaXRTcGFuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGdhcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBnYXBDb2xzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGdhcFJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgcmV2ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sLFxuICB3cmFwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBnZXRSZXNwb25zaXZlUHJvcHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbjogJycsXG4gIGFsaWduQ29sczogJ2ZsZXgtc3RhcnQnLFxuICBhbGlnblJvd3M6ICdmbGV4LXN0YXJ0JyxcbiAgc3BhY2U6IHVuZGVmaW5lZCxcbiAganVzdGlmeTogZmFsc2UsXG4gIHN0cmV0Y2g6IGZhbHNlLFxuICBhdXRvOiBmYWxzZSxcbiAgdW5pdFNwYW46IHVuZGVmaW5lZCxcbiAgZ2FwOiAnJyxcbiAgZ2FwQ29sczogJ3NtYWxsJyxcbiAgZ2FwUm93czogJ3NtYWxsJyxcbiAgcmV2ZXJzZTogZmFsc2UsXG4gIHNpemU6IHVuZGVmaW5lZCxcbiAgdmVydGljYWw6IGZhbHNlLFxuICB3cmFwOiB0cnVlLFxuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSZXNwb25zaXZlKEdyaWQpO1xuIl19 */"
};

var Grid = function Grid(_ref2) {
  var getResponsiveProps = _ref2.getResponsiveProps,
      children = _ref2.children,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["getResponsiveProps", "children"]);
  return (0, _core.jsx)(_tiles.TilesContext.Consumer, null, // eslint-disable-next-line
  function Grid(tilesProps) {
    var gridProps = {};
    var responsiveProps = getResponsiveProps(function (_ref3) {
      var breakpointProps = _ref3.breakpointProps,
          breakpointName = _ref3.breakpointName;

      var _breakpointProps$gap$ = breakpointProps.gap.split(' ').filter(Boolean).map(parseGapValue),
          _breakpointProps$gap$2 = (0, _slicedToArray2["default"])(_breakpointProps$gap$, 2),
          _breakpointProps$gap$3 = _breakpointProps$gap$2[0],
          gapCols = _breakpointProps$gap$3 === void 0 ? parseGapValue(breakpointProps.gapCols) : _breakpointProps$gap$3,
          _breakpointProps$gap$4 = _breakpointProps$gap$2[1],
          gapRows = _breakpointProps$gap$4 === void 0 ? parseGapValue(breakpointProps.gapRows) : _breakpointProps$gap$4;

      var _breakpointProps$alig = breakpointProps.align.split(' ').filter(Boolean),
          _breakpointProps$alig2 = (0, _slicedToArray2["default"])(_breakpointProps$alig, 2),
          _breakpointProps$alig3 = _breakpointProps$alig2[0],
          alignRows = _breakpointProps$alig3 === void 0 ? breakpointProps.alignRows : _breakpointProps$alig3,
          _breakpointProps$alig4 = _breakpointProps$alig2[1],
          alignCols = _breakpointProps$alig4 === void 0 ? breakpointProps.alignCols : _breakpointProps$alig4;

      gridProps[breakpointName] = _objectSpread({}, breakpointProps, {
        gapCols: gapCols,
        gapRows: gapRows,
        size: tilesProps && breakpointProps.size === undefined ? 'auto' : breakpointProps.size
      });
      var alignItems = tilesProps || breakpointProps.stretch ? 'stretch' : alignRows;
      var space = breakpointProps.justify ? 'between' : breakpointProps.space;
      var justifyContent = space ? "space-".concat(space) : alignCols;
      return (
        /*#__PURE__*/
        (0, _core.css)("label:grid;display:flex;flex-direction:", "".concat(breakpointProps.vertical ? 'column' : 'row').concat(breakpointProps.reverse ? '-reverse' : ''), ";flex-wrap:", {
          "true": 'wrap',
          "false": 'nowrap'
        }[breakpointProps.wrap] || breakpointProps.wrap, ";justify-content:", _helpers.flexMapper[justifyContent] || justifyContent, ";align-items:", _helpers.flexMapper[alignItems] || alignItems, ";margin:-", (0, _helpers.getCSSLength)(gapRows), " -", (0, _helpers.getCSSLength)(gapCols), ";box-sizing:border-box;& + &{margin-top:", (0, _helpers.getCSSLength)(gapRows), ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEc0IiLCJmaWxlIjoiLi4vc3JjL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IG1ha2VSZXNwb25zaXZlIGZyb20gJy4vbWFrZS1yZXNwb25zaXZlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGdldENTU0xlbmd0aCwgZmxleE1hcHBlciwgY2xlYW5PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgVGlsZXNDb250ZXh0IH0gZnJvbSAnLi90aWxlcyc7XG5cbi8qKlxuICogVGhlIGdyaWQgY29udGV4dCBpcyB1c2VkIHRvIHBhc3MgZG93biBncmlkIGNvbmZpZ3VyYXRpb24gZm9yIGNoaWxkIHVuaXRzLlxuICovXG5leHBvcnQgY29uc3QgR3JpZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuLyoqXG4gKiBQYXJzZXMgYSBncmlkIGdhcCB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyIHwgU3RyaW5nfSB2IEdhcCB2YWx1ZSB0byBiZSBwYXJzZWRcbiAqL1xuY29uc3QgcGFyc2VHYXBWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgZ2FwVmFsdWUgPSBnZXRDb25maWcoJ2dyaWQuZ2FwcycpW3ZhbHVlXSAhPT0gdW5kZWZpbmVkID8gZ2V0Q29uZmlnKCdncmlkLmdhcHMnKVt2YWx1ZV0gOiB2YWx1ZTtcblxuICAvKiBkaXZpZGUgZ2FwIHZhbHVlIGJ5IDIgKi9cbiAgZ2FwVmFsdWUgPSArZ2FwVmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXGQrLywgcGFyc2VJbnQoZ2FwVmFsdWUsIDEwKSAqIDAuNSk7XG5cbiAgcmV0dXJuIGdhcFZhbHVlO1xufTtcblxuY29uc3QgR3JpZCA9ICh7XG4gIGdldFJlc3BvbnNpdmVQcm9wcyxcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiAoXG4gIDxUaWxlc0NvbnRleHQuQ29uc3VtZXI+XG4gICAge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBmdW5jdGlvbiBHcmlkKHRpbGVzUHJvcHMpIHtcbiAgICAgICAgY29uc3QgZ3JpZFByb3BzID0ge307XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2l2ZVByb3BzID0gZ2V0UmVzcG9uc2l2ZVByb3BzKFxuICAgICAgICAgICh7IGJyZWFrcG9pbnRQcm9wcywgYnJlYWtwb2ludE5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW1xuICAgICAgICAgICAgICBnYXBDb2xzID0gcGFyc2VHYXBWYWx1ZShicmVha3BvaW50UHJvcHMuZ2FwQ29scyksXG4gICAgICAgICAgICAgIGdhcFJvd3MgPSBwYXJzZUdhcFZhbHVlKGJyZWFrcG9pbnRQcm9wcy5nYXBSb3dzKSxcbiAgICAgICAgICAgIF0gPSBicmVha3BvaW50UHJvcHMuZ2FwLnNwbGl0KCcgJykuZmlsdGVyKEJvb2xlYW4pLm1hcChwYXJzZUdhcFZhbHVlKTtcblxuICAgICAgICAgICAgY29uc3QgW1xuICAgICAgICAgICAgICBhbGlnblJvd3MgPSBicmVha3BvaW50UHJvcHMuYWxpZ25Sb3dzLFxuICAgICAgICAgICAgICBhbGlnbkNvbHMgPSBicmVha3BvaW50UHJvcHMuYWxpZ25Db2xzLFxuICAgICAgICAgICAgXSA9IGJyZWFrcG9pbnRQcm9wcy5hbGlnbi5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgICAgICAgZ3JpZFByb3BzW2JyZWFrcG9pbnROYW1lXSA9IHtcbiAgICAgICAgICAgICAgLi4uYnJlYWtwb2ludFByb3BzLFxuICAgICAgICAgICAgICBnYXBDb2xzLFxuICAgICAgICAgICAgICBnYXBSb3dzLFxuICAgICAgICAgICAgICBzaXplOiB0aWxlc1Byb3BzICYmIGJyZWFrcG9pbnRQcm9wcy5zaXplID09PSB1bmRlZmluZWQgPyAnYXV0bycgOiBicmVha3BvaW50UHJvcHMuc2l6ZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGFsaWduSXRlbXMgPSAodGlsZXNQcm9wcyB8fCBicmVha3BvaW50UHJvcHMuc3RyZXRjaCkgPyAnc3RyZXRjaCcgOiBhbGlnblJvd3M7XG5cbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gYnJlYWtwb2ludFByb3BzLmp1c3RpZnkgPyAnYmV0d2VlbicgOiBicmVha3BvaW50UHJvcHMuc3BhY2U7XG4gICAgICAgICAgICBjb25zdCBqdXN0aWZ5Q29udGVudCA9IHNwYWNlID8gYHNwYWNlLSR7c3BhY2V9YCA6IGFsaWduQ29scztcblxuICAgICAgICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgICAgICAgbGFiZWw6IGdyaWQ7XG4gICAgICAgICAgICAgIC8qIFNldCBkaXNwbGF5IG1vZGUuICovXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiAke2Ake2JyZWFrcG9pbnRQcm9wcy52ZXJ0aWNhbCA/ICdjb2x1bW4nIDogJ3Jvdyd9JHticmVha3BvaW50UHJvcHMucmV2ZXJzZSA/ICctcmV2ZXJzZScgOiAnJ31gfTtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiAke3sgdHJ1ZTogJ3dyYXAnLCBmYWxzZTogJ25vd3JhcCcgfVticmVha3BvaW50UHJvcHMud3JhcF0gfHwgYnJlYWtwb2ludFByb3BzLndyYXB9O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7ZmxleE1hcHBlcltqdXN0aWZ5Q29udGVudF0gfHwganVzdGlmeUNvbnRlbnR9O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogJHtmbGV4TWFwcGVyW2FsaWduSXRlbXNdIHx8IGFsaWduSXRlbXN9O1xuICAgICAgICAgICAgICBtYXJnaW46IC0ke2dldENTU0xlbmd0aChnYXBSb3dzKX0gLSR7Z2V0Q1NTTGVuZ3RoKGdhcENvbHMpfTtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgICAvKiBDcmVhdGUgZ2FwcyBiZXR3ZWVuIGNvbnNlY3V0aXZlIGdyaWRzICovXG4gICAgICAgICAgICAgICYgKyAmIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAke2dldENTU0xlbmd0aChnYXBSb3dzKX07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBvdGhlclByb3BzID0gY2xlYW5PYmplY3QocHJvcHMsIFtcbiAgICAgICAgICAnYWxpZ24nLFxuICAgICAgICAgICdhbGlnbkNvbHMnLFxuICAgICAgICAgICdhbGlnblJvd3MnLFxuICAgICAgICAgICdzcGFjZScsXG4gICAgICAgICAgJ2p1c3RpZnknLFxuICAgICAgICAgICdzdHJldGNoJyxcbiAgICAgICAgICAnYXV0bycsXG4gICAgICAgICAgJ3VuaXRTcGFuJyxcbiAgICAgICAgICAnZ2FwJyxcbiAgICAgICAgICAnZ2FwQ29scycsXG4gICAgICAgICAgJ2dhcFJvd3MnLFxuICAgICAgICAgICdyZXZlcnNlJyxcbiAgICAgICAgICAnc2l6ZScsXG4gICAgICAgICAgJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAnd3JhcCcsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IGdyaWRFbGVtZW50ID0gKFxuICAgICAgICAgIDxHcmlkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBncmlkUHJvcHMgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHsuLi5yZXNwb25zaXZlUHJvcHN9XG4gICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgICAgICBkYXRhLWd6PVwiZ3JpZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvR3JpZENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRpbGVzUHJvcHMpIHtcbiAgICAgICAgICBjb25zdCBUaWxlcyA9ICgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgey4uLnRpbGVzUHJvcHN9XG4gICAgICAgICAgICAgIGRhdGEtZ3o9XCJ0aWxlc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtncmlkRWxlbWVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXR1cm4gVGlsZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBncmlkRWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG4gIDwvVGlsZXNDb250ZXh0LkNvbnN1bWVyPlxuKTtcblxuR3JpZC5wcm9wVHlwZXMgPSB7XG4gIGFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbkNvbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsaWduUm93czogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3BhY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGp1c3RpZnk6IFByb3BUeXBlcy5ib29sLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgYXV0bzogUHJvcFR5cGVzLmJvb2wsXG4gIHVuaXRTcGFuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGdhcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBnYXBDb2xzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGdhcFJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgcmV2ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sLFxuICB3cmFwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBnZXRSZXNwb25zaXZlUHJvcHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbjogJycsXG4gIGFsaWduQ29sczogJ2ZsZXgtc3RhcnQnLFxuICBhbGlnblJvd3M6ICdmbGV4LXN0YXJ0JyxcbiAgc3BhY2U6IHVuZGVmaW5lZCxcbiAganVzdGlmeTogZmFsc2UsXG4gIHN0cmV0Y2g6IGZhbHNlLFxuICBhdXRvOiBmYWxzZSxcbiAgdW5pdFNwYW46IHVuZGVmaW5lZCxcbiAgZ2FwOiAnJyxcbiAgZ2FwQ29sczogJ3NtYWxsJyxcbiAgZ2FwUm93czogJ3NtYWxsJyxcbiAgcmV2ZXJzZTogZmFsc2UsXG4gIHNpemU6IHVuZGVmaW5lZCxcbiAgdmVydGljYWw6IGZhbHNlLFxuICB3cmFwOiB0cnVlLFxuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSZXNwb25zaXZlKEdyaWQpO1xuIl19 */"))
      );
    });
    var otherProps = (0, _helpers.cleanObject)(props, ['align', 'alignCols', 'alignRows', 'space', 'justify', 'stretch', 'auto', 'unitSpan', 'gap', 'gapCols', 'gapRows', 'reverse', 'size', 'vertical', 'wrap']);
    var gridElement = (0, _core.jsx)(GridContext.Provider, {
      value: {
        gridProps: gridProps
      }
    }, (0, _core.jsx)("div", (0, _extends2["default"])({}, responsiveProps, otherProps, {
      "data-gz": "grid"
    }), children));

    if (tilesProps) {
      var Tiles = function Tiles() {
        return (0, _core.jsx)("div", (0, _extends2["default"])({
          css: _ref
        }, tilesProps, {
          "data-gz": "tiles"
        }), gridElement);
      };

      return Tiles();
    }

    return gridElement;
  });
};

Grid.propTypes = {
  align: _propTypes["default"].string,
  alignCols: _propTypes["default"].string,
  alignRows: _propTypes["default"].string,
  space: _propTypes["default"].string,
  justify: _propTypes["default"].bool,
  stretch: _propTypes["default"].bool,
  auto: _propTypes["default"].bool,
  unitSpan: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  gap: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  gapCols: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  gapRows: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  reverse: _propTypes["default"].bool,
  size: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  vertical: _propTypes["default"].bool,
  wrap: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  getResponsiveProps: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node
};
Grid.defaultProps = {
  align: '',
  alignCols: 'flex-start',
  alignRows: 'flex-start',
  space: undefined,
  justify: false,
  stretch: false,
  auto: false,
  unitSpan: undefined,
  gap: '',
  gapCols: 'small',
  gapRows: 'small',
  reverse: false,
  size: undefined,
  vertical: false,
  wrap: true,
  children: null
};

var _default = (0, _makeResponsive["default"])(Grid);

exports["default"] = _default;