"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeResponsive = _interopRequireDefault(require("./make-responsive"));

var _helpers = require("./helpers");

var _grid = require("./grid");

var _config = require("./config");

/**
 * Helper function that returns the span value as a number between 0 and 1
 * @param {Number | String} span User specified span for the unit
 * @param {Number} total Total number of columns for the containing grid
 */
var getUnitSpan = function getUnitSpan(span) {
  var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

  if (/^\d+$/.test(span.toString())) {
    return Math.min(parseInt(span, 10), total) / total;
  }

  if (/^\d+(\s*?)+(\/|-|:|of)(\s*?)+\d+$/.test(span.toString())) {
    return span.toString().match(/\d+/g).reduce(function (p, n) {
      return p / n;
    });
  }

  if (/^\d+%$/.test(span.toString())) {
    return parseInt(span, 10) / 100;
  }

  return span;
};

var Unit = function Unit(_ref) {
  var getResponsiveProps = _ref.getResponsiveProps,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["getResponsiveProps", "children"]);
  return (0, _core.jsx)(_grid.GridContext.Consumer, null, // eslint-disable-next-line
  function Unit(_ref2) {
    var gridProps = _ref2.gridProps;
    var shorthandUnitSpan;
    var breakpoints = (0, _config.getConfig)('breakpoints');
    var breakpointNames = Object.keys(breakpoints);
    var responsiveProps = getResponsiveProps(function (_ref3) {
      var breakpointProps = _ref3.breakpointProps,
          breakpointName = _ref3.breakpointName;

      var _breakpointProps$alig = breakpointProps.align.split(' ').filter(Boolean),
          _breakpointProps$alig2 = (0, _slicedToArray2["default"])(_breakpointProps$alig, 2),
          _breakpointProps$alig3 = _breakpointProps$alig2[0],
          alignRow = _breakpointProps$alig3 === void 0 ? breakpointProps.stretch ? 'stretch' : breakpointProps.alignRow : _breakpointProps$alig3,
          _breakpointProps$alig4 = _breakpointProps$alig2[1],
          alignCol = _breakpointProps$alig4 === void 0 ? breakpointProps.alignCol : _breakpointProps$alig4;

      var breakpointGridProps = gridProps[breakpointName];
      shorthandUnitSpan = props[breakpointName] || shorthandUnitSpan;
      var unitSpan = breakpointProps.span || shorthandUnitSpan || breakpointGridProps.unitSpan;
      var unitOffset = getUnitSpan(breakpointProps.offset, breakpointGridProps.size);
      var unitPush = getUnitSpan(breakpointProps.push, breakpointGridProps.size);
      var unitPull = getUnitSpan(breakpointProps.pull, breakpointGridProps.size);
      var unitLeft = unitPush - unitPull;
      var unitOrder = breakpointProps.first && -1 || breakpointProps.last && 9999 || breakpointProps.order;
      var flex;
      var unitSize;

      if (unitSpan === 'min') {
        flex = 'none';
        unitSize = 'auto';
      } else if (unitSpan === 'max') {
        flex = '1';
        unitSize = 'auto';
      } else if (unitSpan !== undefined) {
        var v = getUnitSpan(unitSpan, breakpointGridProps.size) * 100;
        flex = "0 0 ".concat(v, "%");
        unitSize = "".concat(v, "%");
      } else if (breakpointGridProps.size === 'auto') {
        flex = '1';
        unitSize = 'auto';
      } else if (breakpointGridProps.auto) {
        var _v = getUnitSpan(1, breakpointGridProps.size) * 100;

        flex = "0 0 ".concat(_v, "%");
        unitSize = "".concat(_v, "%");
      } else {
        flex = '0 0 100%';
        unitSize = '100%';
      }

      return (
        /*#__PURE__*/
        (0, _core.css)("label:unit;position:relative;flex:", flex, ";", "".concat(breakpointGridProps.vertical ? 'height' : 'width', ": ").concat(unitSize), ";left:", Number.isNaN(unitLeft) ? null : "".concat(unitLeft * 100, "%"), ";margin-left:", Number.isNaN(unitOffset) ? null : "".concat(unitOffset * 100, "%"), ";padding:", (0, _helpers.getCSSLength)(breakpointGridProps.gapRows), " ", (0, _helpers.getCSSLength)(breakpointGridProps.gapCols), ";order:", unitOrder, ";justify-self:", _helpers.flexMapper[alignCol] || alignCol, ";align-self:", _helpers.flexMapper[alignRow] || alignRow, ";box-sizing:border-box;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Hc0IiLCJmaWxlIjoiLi4vc3JjL3VuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IG1ha2VSZXNwb25zaXZlIGZyb20gJy4vbWFrZS1yZXNwb25zaXZlJztcbmltcG9ydCB7IGdldENTU0xlbmd0aCwgZmxleE1hcHBlciwgY2xlYW5PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgR3JpZENvbnRleHQgfSBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHNwYW4gdmFsdWUgYXMgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxXG4gKiBAcGFyYW0ge051bWJlciB8IFN0cmluZ30gc3BhbiBVc2VyIHNwZWNpZmllZCBzcGFuIGZvciB0aGUgdW5pdFxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsIFRvdGFsIG51bWJlciBvZiBjb2x1bW5zIGZvciB0aGUgY29udGFpbmluZyBncmlkXG4gKi9cbmNvbnN0IGdldFVuaXRTcGFuID0gKHNwYW4sIHRvdGFsID0gMTIpID0+IHtcbiAgaWYgKC9eXFxkKyQvLnRlc3Qoc3Bhbi50b1N0cmluZygpKSkge1xuICAgIHJldHVybiBNYXRoLm1pbihwYXJzZUludChzcGFuLCAxMCksIHRvdGFsKSAvIHRvdGFsO1xuICB9XG5cbiAgaWYgKC9eXFxkKyhcXHMqPykrKFxcL3wtfDp8b2YpKFxccyo/KStcXGQrJC8udGVzdChzcGFuLnRvU3RyaW5nKCkpKSB7XG4gICAgcmV0dXJuIHNwYW4udG9TdHJpbmcoKS5tYXRjaCgvXFxkKy9nKS5yZWR1Y2UoKHAsIG4pID0+IHAgLyBuKTtcbiAgfVxuXG4gIGlmICgvXlxcZCslJC8udGVzdChzcGFuLnRvU3RyaW5nKCkpKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHNwYW4sIDEwKSAvIDEwMDtcbiAgfVxuXG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgVW5pdCA9ICh7XG4gIGdldFJlc3BvbnNpdmVQcm9wcyxcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59KSA9PiAoXG4gIDxHcmlkQ29udGV4dC5Db25zdW1lcj5cbiAgICB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGZ1bmN0aW9uIFVuaXQoeyBncmlkUHJvcHMgfSkge1xuICAgICAgICBsZXQgc2hvcnRoYW5kVW5pdFNwYW47XG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnRzID0gZ2V0Q29uZmlnKCdicmVha3BvaW50cycpO1xuICAgICAgICBjb25zdCBicmVha3BvaW50TmFtZXMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cyk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2l2ZVByb3BzID0gZ2V0UmVzcG9uc2l2ZVByb3BzKFxuICAgICAgICAgICh7IGJyZWFrcG9pbnRQcm9wcywgYnJlYWtwb2ludE5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW1xuICAgICAgICAgICAgICBhbGlnblJvdyA9IGJyZWFrcG9pbnRQcm9wcy5zdHJldGNoID8gJ3N0cmV0Y2gnIDogYnJlYWtwb2ludFByb3BzLmFsaWduUm93LFxuICAgICAgICAgICAgICBhbGlnbkNvbCA9IGJyZWFrcG9pbnRQcm9wcy5hbGlnbkNvbCxcbiAgICAgICAgICAgIF0gPSBicmVha3BvaW50UHJvcHMuYWxpZ24uc3BsaXQoJyAnKS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGJyZWFrcG9pbnRHcmlkUHJvcHMgPSBncmlkUHJvcHNbYnJlYWtwb2ludE5hbWVdO1xuXG4gICAgICAgICAgICBzaG9ydGhhbmRVbml0U3BhbiA9IHByb3BzW2JyZWFrcG9pbnROYW1lXSB8fCBzaG9ydGhhbmRVbml0U3BhbjtcblxuICAgICAgICAgICAgY29uc3QgdW5pdFNwYW4gPSAoXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRQcm9wcy5zcGFuXG4gICAgICAgICAgICAgIHx8IHNob3J0aGFuZFVuaXRTcGFuXG4gICAgICAgICAgICAgIHx8IGJyZWFrcG9pbnRHcmlkUHJvcHMudW5pdFNwYW5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVuaXRPZmZzZXQgPSBnZXRVbml0U3BhbihicmVha3BvaW50UHJvcHMub2Zmc2V0LCBicmVha3BvaW50R3JpZFByb3BzLnNpemUpO1xuICAgICAgICAgICAgY29uc3QgdW5pdFB1c2ggPSBnZXRVbml0U3BhbihicmVha3BvaW50UHJvcHMucHVzaCwgYnJlYWtwb2ludEdyaWRQcm9wcy5zaXplKTtcbiAgICAgICAgICAgIGNvbnN0IHVuaXRQdWxsID0gZ2V0VW5pdFNwYW4oYnJlYWtwb2ludFByb3BzLnB1bGwsIGJyZWFrcG9pbnRHcmlkUHJvcHMuc2l6ZSk7XG4gICAgICAgICAgICBjb25zdCB1bml0TGVmdCA9IHVuaXRQdXNoIC0gdW5pdFB1bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IHVuaXRPcmRlciA9IChcbiAgICAgICAgICAgICAgKGJyZWFrcG9pbnRQcm9wcy5maXJzdCAmJiAtMSlcbiAgICAgICAgICAgICAgfHwgKGJyZWFrcG9pbnRQcm9wcy5sYXN0ICYmIDk5OTkpXG4gICAgICAgICAgICAgIHx8IGJyZWFrcG9pbnRQcm9wcy5vcmRlclxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGZsZXg7XG4gICAgICAgICAgICBsZXQgdW5pdFNpemU7XG5cbiAgICAgICAgICAgIGlmICh1bml0U3BhbiA9PT0gJ21pbicpIHtcbiAgICAgICAgICAgICAgZmxleCA9ICdub25lJztcbiAgICAgICAgICAgICAgdW5pdFNpemUgPSAnYXV0byc7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGlmICh1bml0U3BhbiA9PT0gJ21heCcpIHtcbiAgICAgICAgICAgICAgZmxleCA9ICcxJztcbiAgICAgICAgICAgICAgdW5pdFNpemUgPSAnYXV0byc7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGlmICh1bml0U3BhbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHYgPSBnZXRVbml0U3Bhbih1bml0U3BhbiwgYnJlYWtwb2ludEdyaWRQcm9wcy5zaXplKSAqIDEwMDtcbiAgICAgICAgICAgICAgZmxleCA9IGAwIDAgJHt2fSVgO1xuICAgICAgICAgICAgICB1bml0U2l6ZSA9IGAke3Z9JWA7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGlmIChicmVha3BvaW50R3JpZFByb3BzLnNpemUgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgICBmbGV4ID0gJzEnO1xuICAgICAgICAgICAgICB1bml0U2l6ZSA9ICdhdXRvJztcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgaWYgKGJyZWFrcG9pbnRHcmlkUHJvcHMuYXV0bykge1xuICAgICAgICAgICAgICBjb25zdCB2ID0gZ2V0VW5pdFNwYW4oMSwgYnJlYWtwb2ludEdyaWRQcm9wcy5zaXplKSAqIDEwMDtcbiAgICAgICAgICAgICAgZmxleCA9IGAwIDAgJHt2fSVgO1xuICAgICAgICAgICAgICB1bml0U2l6ZSA9IGAke3Z9JWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmbGV4ID0gJzAgMCAxMDAlJztcbiAgICAgICAgICAgICAgdW5pdFNpemUgPSAnMTAwJSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjc3NgXG4gICAgICAgICAgICAgIGxhYmVsOiB1bml0O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGZsZXg6ICR7ZmxleH07XG4gICAgICAgICAgICAgICR7YCR7YnJlYWtwb2ludEdyaWRQcm9wcy52ZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJ306ICR7dW5pdFNpemV9YH07XG4gICAgICAgICAgICAgIGxlZnQ6ICR7TnVtYmVyLmlzTmFOKHVuaXRMZWZ0KSA/IG51bGwgOiBgJHt1bml0TGVmdCAqIDEwMH0lYH07XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAke051bWJlci5pc05hTih1bml0T2Zmc2V0KSA/IG51bGwgOiBgJHt1bml0T2Zmc2V0ICogMTAwfSVgfTtcbiAgICAgICAgICAgICAgcGFkZGluZzogJHtnZXRDU1NMZW5ndGgoYnJlYWtwb2ludEdyaWRQcm9wcy5nYXBSb3dzKX0gJHtnZXRDU1NMZW5ndGgoYnJlYWtwb2ludEdyaWRQcm9wcy5nYXBDb2xzKX07XG4gICAgICAgICAgICAgIG9yZGVyOiAke3VuaXRPcmRlcn07XG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogJHtmbGV4TWFwcGVyW2FsaWduQ29sXSB8fCBhbGlnbkNvbH07XG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6ICR7ZmxleE1hcHBlclthbGlnblJvd10gfHwgYWxpZ25Sb3d9O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG90aGVyUHJvcHMgPSBjbGVhbk9iamVjdChwcm9wcywgW1xuICAgICAgICAgICdhbGlnbicsXG4gICAgICAgICAgJ2FsaWduQ29sJyxcbiAgICAgICAgICAnYWxpZ25Sb3cnLFxuICAgICAgICAgICdvZmZzZXQnLFxuICAgICAgICAgICdvcmRlcicsXG4gICAgICAgICAgJ2ZpcnN0JyxcbiAgICAgICAgICAnbGFzdCcsXG4gICAgICAgICAgJ3B1bGwnLFxuICAgICAgICAgICdwdXNoJyxcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgLi4uYnJlYWtwb2ludE5hbWVzLFxuICAgICAgICBdKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHsuLi5yZXNwb25zaXZlUHJvcHN9XG4gICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgICAgIGRhdGEtZ3o9XCJ1bml0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICA8L0dyaWRDb250ZXh0LkNvbnN1bWVyPlxuKTtcblxuVW5pdC5wcm9wVHlwZXMgPSB7XG4gIGFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbkNvbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWxpZ25Sb3c6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBmaXJzdDogUHJvcFR5cGVzLmJvb2wsXG4gIGxhc3Q6IFByb3BUeXBlcy5ib29sLFxuICBwdWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHB1c2g6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc3BhbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBnZXRSZXNwb25zaXZlUHJvcHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblVuaXQuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbjogJycsXG4gIGFsaWduQ29sOiB1bmRlZmluZWQsXG4gIGFsaWduUm93OiB1bmRlZmluZWQsXG4gIG9mZnNldDogMCxcbiAgb3JkZXI6IHVuZGVmaW5lZCxcbiAgZmlyc3Q6IGZhbHNlLFxuICBsYXN0OiBmYWxzZSxcbiAgcHVsbDogMCxcbiAgcHVzaDogMCxcbiAgc3BhbjogdW5kZWZpbmVkLFxuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSZXNwb25zaXZlKFVuaXQpO1xuIl19 */"))
      );
    });
    var otherProps = (0, _helpers.cleanObject)(props, ['align', 'alignCol', 'alignRow', 'offset', 'order', 'first', 'last', 'pull', 'push', 'span'].concat((0, _toConsumableArray2["default"])(breakpointNames)));
    return (0, _core.jsx)("div", (0, _extends2["default"])({}, responsiveProps, otherProps, {
      "data-gz": "unit"
    }), children);
  });
};

Unit.propTypes = {
  align: _propTypes["default"].string,
  alignCol: _propTypes["default"].string,
  alignRow: _propTypes["default"].string,
  offset: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  order: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  first: _propTypes["default"].bool,
  last: _propTypes["default"].bool,
  pull: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  push: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  span: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  getResponsiveProps: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node
};
Unit.defaultProps = {
  align: '',
  alignCol: undefined,
  alignRow: undefined,
  offset: 0,
  order: undefined,
  first: false,
  last: false,
  pull: 0,
  push: 0,
  span: undefined,
  children: null
};

var _default = (0, _makeResponsive["default"])(Unit);

exports["default"] = _default;