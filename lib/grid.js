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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHc0IiLCJmaWxlIjoiLi4vc3JjL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IG1ha2VSZXNwb25zaXZlIGZyb20gJy4vbWFrZS1yZXNwb25zaXZlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIGdldFR5cGUsXG4gIGdldENTU0xlbmd0aCxcbiAgZmxleE1hcHBlcixcbn0gZnJvbSAnLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgVGlsZXNDb250ZXh0IH0gZnJvbSAnLi90aWxlcyc7XG5cbi8qKlxuICogVGhlIGdyaWQgY29udGV4dCBpcyB1c2VkIHRvIHBhc3MgZG93biBncmlkIGNvbmZpZ3VyYXRpb24gZm9yIGNoaWxkIHVuaXRzLlxuICovXG5leHBvcnQgY29uc3QgR3JpZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuLyoqXG4gKiBQYXJzZXMgYSBncmlkIGdhcCB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyIHwgU3RyaW5nfSB2IEdhcCB2YWx1ZSB0byBiZSBwYXJzZWRcbiAqL1xuY29uc3QgcGFyc2VHYXBWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgZ2FwVmFsdWUgPSBnZXRDb25maWcoJ2dyaWQuZ2FwcycpW3ZhbHVlXSAhPT0gdW5kZWZpbmVkID8gZ2V0Q29uZmlnKCdncmlkLmdhcHMnKVt2YWx1ZV0gOiB2YWx1ZTtcblxuICAvKiBkaXZpZGUgZ2FwIHZhbHVlIGJ5IDIgKi9cbiAgZ2FwVmFsdWUgPSArZ2FwVmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXGQrLywgcGFyc2VJbnQoZ2FwVmFsdWUsIDEwKSAqIDAuNSk7XG5cbiAgcmV0dXJuIGdhcFZhbHVlO1xufTtcblxuY29uc3QgR3JpZCA9ICh7XG4gIGp1c3RpZnksXG4gIGFsaWduLFxuICBhdXRvLFxuICB1bml0U3BhbixcbiAgZ2FwLFxuICByZXZlcnNlLFxuICBzaXplLFxuICB2ZXJ0aWNhbCxcbiAgd3JhcCxcbiAgZ2V0UmVzcG9uc2l2ZVByb3BzLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IChcbiAgPFRpbGVzQ29udGV4dC5Db25zdW1lcj5cbiAgICB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGZ1bmN0aW9uIEdyaWQodGlsZXNQcm9wcykge1xuICAgICAgICBjb25zdCBncmlkUHJvcHMgPSB7fTtcblxuICAgICAgICBjb25zdCByZXNwb25zaXZlUHJvcHMgPSBnZXRSZXNwb25zaXZlUHJvcHMoXG4gICAgICAgICAgKHsgYnJlYWtwb2ludFByb3BzLCBicmVha3BvaW50TmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBsZXQgZ2FwQ29scztcbiAgICAgICAgICAgIGxldCBnYXBSb3dzO1xuXG4gICAgICAgICAgICBpZiAoZ2V0VHlwZShicmVha3BvaW50UHJvcHMuZ2FwKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICBbZ2FwQ29scywgZ2FwUm93c10gPSBicmVha3BvaW50UHJvcHMuZ2FwLm1hcChwYXJzZUdhcFZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGdhcENvbHMgPSBwYXJzZUdhcFZhbHVlKGJyZWFrcG9pbnRQcm9wcy5nYXApO1xuICAgICAgICAgICAgICBnYXBSb3dzID0gZ2FwQ29scztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ3JpZFByb3BzW2JyZWFrcG9pbnROYW1lXSA9IHtcbiAgICAgICAgICAgICAgLi4uYnJlYWtwb2ludFByb3BzLFxuICAgICAgICAgICAgICBnYXBDb2xzLFxuICAgICAgICAgICAgICBnYXBSb3dzLFxuICAgICAgICAgICAgICBzaXplOiB0aWxlc1Byb3BzICYmIGJyZWFrcG9pbnRQcm9wcy5zaXplID09PSB1bmRlZmluZWQgPyAnYXV0bycgOiBicmVha3BvaW50UHJvcHMuc2l6ZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGFsaWduSXRlbXMgPSB0aWxlc1Byb3BzID8gJ3N0cmV0Y2gnIDogYnJlYWtwb2ludFByb3BzLmFsaWduO1xuXG4gICAgICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICAgICAgICAvKiBTZXQgZGlzcGxheSBtb2RlLiAqL1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogJHtgJHticmVha3BvaW50UHJvcHMudmVydGljYWwgPyAnY29sdW1uJyA6ICdyb3cnfSR7YnJlYWtwb2ludFByb3BzLnJldmVyc2UgPyAnLXJldmVyc2UnIDogJyd9YH07XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogJHt7IHRydWU6ICd3cmFwJywgZmFsc2U6ICdub3dyYXAnIH1bYnJlYWtwb2ludFByb3BzLndyYXBdIHx8IGJyZWFrcG9pbnRQcm9wcy53cmFwfTtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiAke2ZsZXhNYXBwZXJbYnJlYWtwb2ludFByb3BzLmp1c3RpZnldIHx8IGJyZWFrcG9pbnRQcm9wcy5qdXN0aWZ5fTtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6ICR7ZmxleE1hcHBlclthbGlnbkl0ZW1zXSB8fCBhbGlnbkl0ZW1zfTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAtJHtnZXRDU1NMZW5ndGgoZ2FwUm93cyl9IC0ke2dldENTU0xlbmd0aChnYXBDb2xzKX07XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgICAgICAgLyogQ3JlYXRlIGdhcHMgYmV0d2VlbiBjb25zZWN1dGl2ZSBncmlkcyAqL1xuICAgICAgICAgICAgICAmICsgJiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtnZXRDU1NMZW5ndGgoZ2FwUm93cyl9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZ3JpZEVsZW1lbnQgPSAoXG4gICAgICAgICAgPEdyaWRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdyaWRQcm9wcyB9fT5cbiAgICAgICAgICAgIDxkaXYgey4uLnJlc3BvbnNpdmVQcm9wc30gey4uLnByb3BzfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HcmlkQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGlsZXNQcm9wcykge1xuICAgICAgICAgIGNvbnN0IFRpbGVzID0gKCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICYgPiAqIHtcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z3JpZEVsZW1lbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmV0dXJuIFRpbGVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JpZEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICA8L1RpbGVzQ29udGV4dC5Db25zdW1lcj5cbik7XG5cbkdyaWQucHJvcFR5cGVzID0ge1xuICBqdXN0aWZ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0bzogUHJvcFR5cGVzLmJvb2wsXG4gIHVuaXRTcGFuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGdhcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pKSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICByZXZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXG4gIHdyYXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGdldFJlc3BvbnNpdmVQcm9wczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGp1c3RpZnk6ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ246ICdmbGV4LXN0YXJ0JyxcbiAgYXV0bzogZmFsc2UsXG4gIHVuaXRTcGFuOiB1bmRlZmluZWQsXG4gIGdhcDogJ3NtYWxsJyxcbiAgcmV2ZXJzZTogZmFsc2UsXG4gIHNpemU6IHVuZGVmaW5lZCxcbiAgdmVydGljYWw6IGZhbHNlLFxuICB3cmFwOiB0cnVlLFxuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSZXNwb25zaXZlKEdyaWQpO1xuIl19 */"
};

var Grid = function Grid(_ref2) {
  var justify = _ref2.justify,
      align = _ref2.align,
      auto = _ref2.auto,
      unitSpan = _ref2.unitSpan,
      gap = _ref2.gap,
      reverse = _ref2.reverse,
      size = _ref2.size,
      vertical = _ref2.vertical,
      wrap = _ref2.wrap,
      getResponsiveProps = _ref2.getResponsiveProps,
      children = _ref2.children,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["justify", "align", "auto", "unitSpan", "gap", "reverse", "size", "vertical", "wrap", "getResponsiveProps", "children"]);
  return (0, _core.jsx)(_tiles.TilesContext.Consumer, null, // eslint-disable-next-line
  function Grid(tilesProps) {
    var gridProps = {};
    var responsiveProps = getResponsiveProps(function (_ref3) {
      var breakpointProps = _ref3.breakpointProps,
          breakpointName = _ref3.breakpointName;
      var gapCols;
      var gapRows;

      if ((0, _helpers.getType)(breakpointProps.gap) === 'array') {
        var _breakpointProps$gap$ = breakpointProps.gap.map(parseGapValue);

        var _breakpointProps$gap$2 = (0, _slicedToArray2["default"])(_breakpointProps$gap$, 2);

        gapCols = _breakpointProps$gap$2[0];
        gapRows = _breakpointProps$gap$2[1];
      } else {
        gapCols = parseGapValue(breakpointProps.gap);
        gapRows = gapCols;
      }

      gridProps[breakpointName] = _objectSpread({}, breakpointProps, {
        gapCols: gapCols,
        gapRows: gapRows,
        size: tilesProps && breakpointProps.size === undefined ? 'auto' : breakpointProps.size
      });
      var alignItems = tilesProps ? 'stretch' : breakpointProps.align;
      return (
        /*#__PURE__*/
        (0, _core.css)("display:flex;flex-direction:", "".concat(breakpointProps.vertical ? 'column' : 'row').concat(breakpointProps.reverse ? '-reverse' : ''), ";flex-wrap:", {
          "true": 'wrap',
          "false": 'nowrap'
        }[breakpointProps.wrap] || breakpointProps.wrap, ";justify-content:", _helpers.flexMapper[breakpointProps.justify] || breakpointProps.justify, ";align-items:", _helpers.flexMapper[alignItems] || alignItems, ";margin:-", (0, _helpers.getCSSLength)(gapRows), " -", (0, _helpers.getCSSLength)(gapCols), ";box-sizing:border-box;& + &{margin-top:", (0, _helpers.getCSSLength)(gapRows), ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFc0IiLCJmaWxlIjoiLi4vc3JjL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IG1ha2VSZXNwb25zaXZlIGZyb20gJy4vbWFrZS1yZXNwb25zaXZlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIGdldFR5cGUsXG4gIGdldENTU0xlbmd0aCxcbiAgZmxleE1hcHBlcixcbn0gZnJvbSAnLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgVGlsZXNDb250ZXh0IH0gZnJvbSAnLi90aWxlcyc7XG5cbi8qKlxuICogVGhlIGdyaWQgY29udGV4dCBpcyB1c2VkIHRvIHBhc3MgZG93biBncmlkIGNvbmZpZ3VyYXRpb24gZm9yIGNoaWxkIHVuaXRzLlxuICovXG5leHBvcnQgY29uc3QgR3JpZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuLyoqXG4gKiBQYXJzZXMgYSBncmlkIGdhcCB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyIHwgU3RyaW5nfSB2IEdhcCB2YWx1ZSB0byBiZSBwYXJzZWRcbiAqL1xuY29uc3QgcGFyc2VHYXBWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgZ2FwVmFsdWUgPSBnZXRDb25maWcoJ2dyaWQuZ2FwcycpW3ZhbHVlXSAhPT0gdW5kZWZpbmVkID8gZ2V0Q29uZmlnKCdncmlkLmdhcHMnKVt2YWx1ZV0gOiB2YWx1ZTtcblxuICAvKiBkaXZpZGUgZ2FwIHZhbHVlIGJ5IDIgKi9cbiAgZ2FwVmFsdWUgPSArZ2FwVmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXGQrLywgcGFyc2VJbnQoZ2FwVmFsdWUsIDEwKSAqIDAuNSk7XG5cbiAgcmV0dXJuIGdhcFZhbHVlO1xufTtcblxuY29uc3QgR3JpZCA9ICh7XG4gIGp1c3RpZnksXG4gIGFsaWduLFxuICBhdXRvLFxuICB1bml0U3BhbixcbiAgZ2FwLFxuICByZXZlcnNlLFxuICBzaXplLFxuICB2ZXJ0aWNhbCxcbiAgd3JhcCxcbiAgZ2V0UmVzcG9uc2l2ZVByb3BzLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IChcbiAgPFRpbGVzQ29udGV4dC5Db25zdW1lcj5cbiAgICB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGZ1bmN0aW9uIEdyaWQodGlsZXNQcm9wcykge1xuICAgICAgICBjb25zdCBncmlkUHJvcHMgPSB7fTtcblxuICAgICAgICBjb25zdCByZXNwb25zaXZlUHJvcHMgPSBnZXRSZXNwb25zaXZlUHJvcHMoXG4gICAgICAgICAgKHsgYnJlYWtwb2ludFByb3BzLCBicmVha3BvaW50TmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBsZXQgZ2FwQ29scztcbiAgICAgICAgICAgIGxldCBnYXBSb3dzO1xuXG4gICAgICAgICAgICBpZiAoZ2V0VHlwZShicmVha3BvaW50UHJvcHMuZ2FwKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICBbZ2FwQ29scywgZ2FwUm93c10gPSBicmVha3BvaW50UHJvcHMuZ2FwLm1hcChwYXJzZUdhcFZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGdhcENvbHMgPSBwYXJzZUdhcFZhbHVlKGJyZWFrcG9pbnRQcm9wcy5nYXApO1xuICAgICAgICAgICAgICBnYXBSb3dzID0gZ2FwQ29scztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ3JpZFByb3BzW2JyZWFrcG9pbnROYW1lXSA9IHtcbiAgICAgICAgICAgICAgLi4uYnJlYWtwb2ludFByb3BzLFxuICAgICAgICAgICAgICBnYXBDb2xzLFxuICAgICAgICAgICAgICBnYXBSb3dzLFxuICAgICAgICAgICAgICBzaXplOiB0aWxlc1Byb3BzICYmIGJyZWFrcG9pbnRQcm9wcy5zaXplID09PSB1bmRlZmluZWQgPyAnYXV0bycgOiBicmVha3BvaW50UHJvcHMuc2l6ZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGFsaWduSXRlbXMgPSB0aWxlc1Byb3BzID8gJ3N0cmV0Y2gnIDogYnJlYWtwb2ludFByb3BzLmFsaWduO1xuXG4gICAgICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICAgICAgICAvKiBTZXQgZGlzcGxheSBtb2RlLiAqL1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogJHtgJHticmVha3BvaW50UHJvcHMudmVydGljYWwgPyAnY29sdW1uJyA6ICdyb3cnfSR7YnJlYWtwb2ludFByb3BzLnJldmVyc2UgPyAnLXJldmVyc2UnIDogJyd9YH07XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogJHt7IHRydWU6ICd3cmFwJywgZmFsc2U6ICdub3dyYXAnIH1bYnJlYWtwb2ludFByb3BzLndyYXBdIHx8IGJyZWFrcG9pbnRQcm9wcy53cmFwfTtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiAke2ZsZXhNYXBwZXJbYnJlYWtwb2ludFByb3BzLmp1c3RpZnldIHx8IGJyZWFrcG9pbnRQcm9wcy5qdXN0aWZ5fTtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6ICR7ZmxleE1hcHBlclthbGlnbkl0ZW1zXSB8fCBhbGlnbkl0ZW1zfTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAtJHtnZXRDU1NMZW5ndGgoZ2FwUm93cyl9IC0ke2dldENTU0xlbmd0aChnYXBDb2xzKX07XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgICAgICAgLyogQ3JlYXRlIGdhcHMgYmV0d2VlbiBjb25zZWN1dGl2ZSBncmlkcyAqL1xuICAgICAgICAgICAgICAmICsgJiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHtnZXRDU1NMZW5ndGgoZ2FwUm93cyl9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZ3JpZEVsZW1lbnQgPSAoXG4gICAgICAgICAgPEdyaWRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdyaWRQcm9wcyB9fT5cbiAgICAgICAgICAgIDxkaXYgey4uLnJlc3BvbnNpdmVQcm9wc30gey4uLnByb3BzfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HcmlkQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGlsZXNQcm9wcykge1xuICAgICAgICAgIGNvbnN0IFRpbGVzID0gKCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICYgPiAqIHtcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z3JpZEVsZW1lbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmV0dXJuIFRpbGVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JpZEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICA8L1RpbGVzQ29udGV4dC5Db25zdW1lcj5cbik7XG5cbkdyaWQucHJvcFR5cGVzID0ge1xuICBqdXN0aWZ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0bzogUHJvcFR5cGVzLmJvb2wsXG4gIHVuaXRTcGFuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGdhcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pKSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICByZXZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXG4gIHdyYXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGdldFJlc3BvbnNpdmVQcm9wczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGp1c3RpZnk6ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ246ICdmbGV4LXN0YXJ0JyxcbiAgYXV0bzogZmFsc2UsXG4gIHVuaXRTcGFuOiB1bmRlZmluZWQsXG4gIGdhcDogJ3NtYWxsJyxcbiAgcmV2ZXJzZTogZmFsc2UsXG4gIHNpemU6IHVuZGVmaW5lZCxcbiAgdmVydGljYWw6IGZhbHNlLFxuICB3cmFwOiB0cnVlLFxuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSZXNwb25zaXZlKEdyaWQpO1xuIl19 */"))
      );
    });
    var gridElement = (0, _core.jsx)(GridContext.Provider, {
      value: {
        gridProps: gridProps
      }
    }, (0, _core.jsx)("div", (0, _extends2["default"])({}, responsiveProps, props), children));

    if (tilesProps) {
      var Tiles = function Tiles() {
        return (0, _core.jsx)("div", {
          css: _ref
        }, gridElement);
      };

      return Tiles();
    }

    return gridElement;
  });
};

Grid.propTypes = {
  justify: _propTypes["default"].string,
  align: _propTypes["default"].string,
  auto: _propTypes["default"].bool,
  unitSpan: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  gap: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])), _propTypes["default"].string, _propTypes["default"].number]),
  reverse: _propTypes["default"].bool,
  size: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  vertical: _propTypes["default"].bool,
  wrap: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  getResponsiveProps: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node
};
Grid.defaultProps = {
  justify: 'flex-start',
  align: 'flex-start',
  auto: false,
  unitSpan: undefined,
  gap: 'small',
  reverse: false,
  size: undefined,
  vertical: false,
  wrap: true,
  children: null
};

var _default = (0, _makeResponsive["default"])(Grid);

exports["default"] = _default;