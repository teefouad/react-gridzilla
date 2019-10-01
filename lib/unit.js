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

var _helpers = require("./helpers");

var _grid = require("./grid");

/**
 * Returns the span value in percentage format for the unit.
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
  var justify = _ref.justify,
      align = _ref.align,
      fitContent = _ref.fitContent,
      offset = _ref.offset,
      order = _ref.order,
      first = _ref.first,
      last = _ref.last,
      pull = _ref.pull,
      push = _ref.push,
      span = _ref.span,
      getResponsiveProps = _ref.getResponsiveProps,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["justify", "align", "fitContent", "offset", "order", "first", "last", "pull", "push", "span", "getResponsiveProps", "children"]);
  return (0, _core.jsx)(_grid.GridContext.Consumer, null, // eslint-disable-next-line
  function Unit(_ref2) {
    var gridProps = _ref2.gridProps;
    var shorthandUnitSpan;
    var responsiveProps = getResponsiveProps(function (_ref3) {
      var breakpointProps = _ref3.breakpointProps,
          breakpointName = _ref3.breakpointName;
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

      if (breakpointProps.fitContent) {
        flex = 'none';
        unitSize = 'auto';
      } else if (unitSpan === 'auto') {
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
        (0, _core.css)("position:relative;flex:", flex, ";", "".concat(breakpointGridProps.vertical ? 'height' : 'width', ": ").concat(unitSize), ";left:", Number.isNaN(unitLeft) ? null : "".concat(unitLeft * 100, "%"), ";margin-left:", Number.isNaN(unitOffset) ? null : "".concat(unitOffset * 100, "%"), ";padding:", (0, _helpers.getCSSLength)(breakpointGridProps.gapRows), " ", (0, _helpers.getCSSLength)(breakpointGridProps.gapCols), ";order:", unitOrder, ";justify-self:", _helpers.flexMapper[breakpointProps.justify] || breakpointProps.justify, ";align-self:", _helpers.flexMapper[breakpointProps.align] || breakpointProps.align, ";box-sizing:border-box;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Hc0IiLCJmaWxlIjoiLi4vc3JjL3VuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IG1ha2VSZXNwb25zaXZlIGZyb20gJy4vbWFrZS1yZXNwb25zaXZlJztcbmltcG9ydCB7IGdldENTU0xlbmd0aCwgZmxleE1hcHBlciB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBHcmlkQ29udGV4dCB9IGZyb20gJy4vZ3JpZCc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3BhbiB2YWx1ZSBpbiBwZXJjZW50YWdlIGZvcm1hdCBmb3IgdGhlIHVuaXQuXG4gKiBAcGFyYW0ge051bWJlciB8IFN0cmluZ30gc3BhbiBVc2VyIHNwZWNpZmllZCBzcGFuIGZvciB0aGUgdW5pdFxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsIFRvdGFsIG51bWJlciBvZiBjb2x1bW5zIGZvciB0aGUgY29udGFpbmluZyBncmlkXG4gKi9cbmNvbnN0IGdldFVuaXRTcGFuID0gKHNwYW4sIHRvdGFsID0gMTIpID0+IHtcbiAgaWYgKC9eXFxkKyQvLnRlc3Qoc3Bhbi50b1N0cmluZygpKSkge1xuICAgIHJldHVybiBNYXRoLm1pbihwYXJzZUludChzcGFuLCAxMCksIHRvdGFsKSAvIHRvdGFsO1xuICB9XG5cbiAgaWYgKC9eXFxkKyhcXHMqPykrKFxcL3wtfDp8b2YpKFxccyo/KStcXGQrJC8udGVzdChzcGFuLnRvU3RyaW5nKCkpKSB7XG4gICAgcmV0dXJuIHNwYW4udG9TdHJpbmcoKS5tYXRjaCgvXFxkKy9nKS5yZWR1Y2UoKHAsIG4pID0+IHAgLyBuKTtcbiAgfVxuXG4gIGlmICgvXlxcZCslJC8udGVzdChzcGFuLnRvU3RyaW5nKCkpKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHNwYW4sIDEwKSAvIDEwMDtcbiAgfVxuXG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgVW5pdCA9ICh7XG4gIGp1c3RpZnksXG4gIGFsaWduLFxuICBmaXRDb250ZW50LFxuICBvZmZzZXQsXG4gIG9yZGVyLFxuICBmaXJzdCxcbiAgbGFzdCxcbiAgcHVsbCxcbiAgcHVzaCxcbiAgc3BhbixcbiAgZ2V0UmVzcG9uc2l2ZVByb3BzLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IChcbiAgPEdyaWRDb250ZXh0LkNvbnN1bWVyPlxuICAgIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgZnVuY3Rpb24gVW5pdCh7IGdyaWRQcm9wcyB9KSB7XG4gICAgICAgIGxldCBzaG9ydGhhbmRVbml0U3BhbjtcbiAgICAgICAgY29uc3QgcmVzcG9uc2l2ZVByb3BzID0gZ2V0UmVzcG9uc2l2ZVByb3BzKFxuICAgICAgICAgICh7IGJyZWFrcG9pbnRQcm9wcywgYnJlYWtwb2ludE5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnJlYWtwb2ludEdyaWRQcm9wcyA9IGdyaWRQcm9wc1ticmVha3BvaW50TmFtZV07XG5cbiAgICAgICAgICAgIHNob3J0aGFuZFVuaXRTcGFuID0gcHJvcHNbYnJlYWtwb2ludE5hbWVdIHx8IHNob3J0aGFuZFVuaXRTcGFuO1xuXG4gICAgICAgICAgICBjb25zdCB1bml0U3BhbiA9IChcbiAgICAgICAgICAgICAgYnJlYWtwb2ludFByb3BzLnNwYW5cbiAgICAgICAgICAgICAgfHwgc2hvcnRoYW5kVW5pdFNwYW5cbiAgICAgICAgICAgICAgfHwgYnJlYWtwb2ludEdyaWRQcm9wcy51bml0U3BhblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgdW5pdE9mZnNldCA9IGdldFVuaXRTcGFuKGJyZWFrcG9pbnRQcm9wcy5vZmZzZXQsIGJyZWFrcG9pbnRHcmlkUHJvcHMuc2l6ZSk7XG4gICAgICAgICAgICBjb25zdCB1bml0UHVzaCA9IGdldFVuaXRTcGFuKGJyZWFrcG9pbnRQcm9wcy5wdXNoLCBicmVha3BvaW50R3JpZFByb3BzLnNpemUpO1xuICAgICAgICAgICAgY29uc3QgdW5pdFB1bGwgPSBnZXRVbml0U3BhbihicmVha3BvaW50UHJvcHMucHVsbCwgYnJlYWtwb2ludEdyaWRQcm9wcy5zaXplKTtcbiAgICAgICAgICAgIGNvbnN0IHVuaXRMZWZ0ID0gdW5pdFB1c2ggLSB1bml0UHVsbDtcblxuICAgICAgICAgICAgY29uc3QgdW5pdE9yZGVyID0gKFxuICAgICAgICAgICAgICAoYnJlYWtwb2ludFByb3BzLmZpcnN0ICYmIC0xKVxuICAgICAgICAgICAgICB8fCAoYnJlYWtwb2ludFByb3BzLmxhc3QgJiYgOTk5OSlcbiAgICAgICAgICAgICAgfHwgYnJlYWtwb2ludFByb3BzLm9yZGVyXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgZmxleDtcbiAgICAgICAgICAgIGxldCB1bml0U2l6ZTtcblxuICAgICAgICAgICAgaWYgKGJyZWFrcG9pbnRQcm9wcy5maXRDb250ZW50KSB7XG4gICAgICAgICAgICAgIGZsZXggPSAnbm9uZSc7XG4gICAgICAgICAgICAgIHVuaXRTaXplID0gJ2F1dG8nO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBpZiAodW5pdFNwYW4gPT09ICdhdXRvJykge1xuICAgICAgICAgICAgICBmbGV4ID0gJzEnO1xuICAgICAgICAgICAgICB1bml0U2l6ZSA9ICdhdXRvJztcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgaWYgKHVuaXRTcGFuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgdiA9IGdldFVuaXRTcGFuKHVuaXRTcGFuLCBicmVha3BvaW50R3JpZFByb3BzLnNpemUpICogMTAwO1xuICAgICAgICAgICAgICBmbGV4ID0gYDAgMCAke3Z9JWA7XG4gICAgICAgICAgICAgIHVuaXRTaXplID0gYCR7dn0lYDtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgaWYgKGJyZWFrcG9pbnRHcmlkUHJvcHMuc2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICAgIGZsZXggPSAnMSc7XG4gICAgICAgICAgICAgIHVuaXRTaXplID0gJ2F1dG8nO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBpZiAoYnJlYWtwb2ludEdyaWRQcm9wcy5hdXRvKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHYgPSBnZXRVbml0U3BhbigxLCBicmVha3BvaW50R3JpZFByb3BzLnNpemUpICogMTAwO1xuICAgICAgICAgICAgICBmbGV4ID0gYDAgMCAke3Z9JWA7XG4gICAgICAgICAgICAgIHVuaXRTaXplID0gYCR7dn0lYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZsZXggPSAnMCAwIDEwMCUnO1xuICAgICAgICAgICAgICB1bml0U2l6ZSA9ICcxMDAlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBmbGV4OiAke2ZsZXh9O1xuICAgICAgICAgICAgICAke2Ake2JyZWFrcG9pbnRHcmlkUHJvcHMudmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCd9OiAke3VuaXRTaXplfWB9O1xuICAgICAgICAgICAgICBsZWZ0OiAke051bWJlci5pc05hTih1bml0TGVmdCkgPyBudWxsIDogYCR7dW5pdExlZnQgKiAxMDB9JWB9O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogJHtOdW1iZXIuaXNOYU4odW5pdE9mZnNldCkgPyBudWxsIDogYCR7dW5pdE9mZnNldCAqIDEwMH0lYH07XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICR7Z2V0Q1NTTGVuZ3RoKGJyZWFrcG9pbnRHcmlkUHJvcHMuZ2FwUm93cyl9ICR7Z2V0Q1NTTGVuZ3RoKGJyZWFrcG9pbnRHcmlkUHJvcHMuZ2FwQ29scyl9O1xuICAgICAgICAgICAgICBvcmRlcjogJHt1bml0T3JkZXJ9O1xuICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6ICR7ZmxleE1hcHBlclticmVha3BvaW50UHJvcHMuanVzdGlmeV0gfHwgYnJlYWtwb2ludFByb3BzLmp1c3RpZnl9O1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiAke2ZsZXhNYXBwZXJbYnJlYWtwb2ludFByb3BzLmFsaWduXSB8fCBicmVha3BvaW50UHJvcHMuYWxpZ259O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiB7Li4ucmVzcG9uc2l2ZVByb3BzfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgPC9HcmlkQ29udGV4dC5Db25zdW1lcj5cbik7XG5cblVuaXQucHJvcFR5cGVzID0ge1xuICBqdXN0aWZ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZml0Q29udGVudDogUHJvcFR5cGVzLmJvb2wsXG4gIG9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBvcmRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgZmlyc3Q6IFByb3BUeXBlcy5ib29sLFxuICBsYXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgcHVsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBwdXNoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHNwYW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgZ2V0UmVzcG9uc2l2ZVByb3BzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5Vbml0LmRlZmF1bHRQcm9wcyA9IHtcbiAganVzdGlmeTogdW5kZWZpbmVkLFxuICBhbGlnbjogdW5kZWZpbmVkLFxuICBmaXRDb250ZW50OiBmYWxzZSxcbiAgb2Zmc2V0OiAwLFxuICBvcmRlcjogdW5kZWZpbmVkLFxuICBmaXJzdDogZmFsc2UsXG4gIGxhc3Q6IGZhbHNlLFxuICBwdWxsOiAwLFxuICBwdXNoOiAwLFxuICBzcGFuOiB1bmRlZmluZWQsXG4gIGNoaWxkcmVuOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJlc3BvbnNpdmUoVW5pdCk7XG4iXX0= */"))
      );
    });
    return (0, _core.jsx)("div", (0, _extends2["default"])({}, responsiveProps, props), children);
  });
};

Unit.propTypes = {
  justify: _propTypes["default"].string,
  align: _propTypes["default"].string,
  fitContent: _propTypes["default"].bool,
  offset: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  order: _propTypes["default"].number,
  first: _propTypes["default"].bool,
  last: _propTypes["default"].bool,
  pull: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  push: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  span: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  getResponsiveProps: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node
};
Unit.defaultProps = {
  justify: undefined,
  align: undefined,
  fitContent: false,
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