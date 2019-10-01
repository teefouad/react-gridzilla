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
  var fluid = _ref.fluid,
      xlarge = _ref.xlarge,
      large = _ref.large,
      medium = _ref.medium,
      small = _ref.small,
      xsmall = _ref.xsmall,
      size = _ref.size,
      autoSize = _ref.autoSize,
      getResponsiveProps = _ref.getResponsiveProps,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["fluid", "xlarge", "large", "medium", "small", "xsmall", "size", "autoSize", "getResponsiveProps", "children"]);
  var responsiveProps = getResponsiveProps(function (_ref2) {
    var breakpointProps = _ref2.breakpointProps,
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
      (0, _core.css)("margin-right:auto;margin-left:auto;padding:0 ", (0, _helpers.getCSSLength)((0, _config.getConfig)('container.padding')), ";max-width:100%;min-width:", (0, _helpers.getCSSLength)((0, _config.getConfig)('container.minSize')), ";width:100%;max-width:", (0, _helpers.getCSSLength)(containerWidth), ";box-sizing:border-box;&:before,&:after{content:'';display:block;clear:both;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENnQiIsImZpbGUiOiIuLi9zcmMvY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBtYWtlUmVzcG9uc2l2ZSBmcm9tICcuL21ha2UtcmVzcG9uc2l2ZSc7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXRDU1NMZW5ndGgsIGdldFR5cGUgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5jb25zdCBDb250YWluZXIgPSAoe1xuICBmbHVpZCxcbiAgeGxhcmdlLFxuICBsYXJnZSxcbiAgbWVkaXVtLFxuICBzbWFsbCxcbiAgeHNtYWxsLFxuICBzaXplLFxuICBhdXRvU2l6ZSxcbiAgZ2V0UmVzcG9uc2l2ZVByb3BzLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZVByb3BzID0gZ2V0UmVzcG9uc2l2ZVByb3BzKFxuICAgICh7IGJyZWFrcG9pbnRQcm9wcywgYnJlYWtwb2ludFdpZHRoIH0pID0+IHtcbiAgICAgIGNvbnN0IHNpemVzID0gZ2V0Q29uZmlnKCdjb250YWluZXIubWF4V2lkdGgnKTtcbiAgICAgIGNvbnN0IHNvcnRlZFNpemVzID0gT2JqZWN0LnZhbHVlcyhzaXplcykuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgY29uc3Qgc2l6ZVNob3J0aGFuZCA9IE9iamVjdC5rZXlzKHNpemVzKS5maW5kKHYgPT4gYnJlYWtwb2ludFByb3BzW3ZdID09PSB0cnVlKTtcbiAgICAgIGNvbnN0IGF1dG9TaXplV2lkdGggPSBzb3J0ZWRTaXplcy5maWx0ZXIodiA9PiB2IDwgYnJlYWtwb2ludFdpZHRoKS5wb3AoKTtcbiAgICAgIGNvbnN0IGZpeGVkV2lkdGggPSBzaXplc1tzaXplU2hvcnRoYW5kIHx8IGJyZWFrcG9pbnRQcm9wcy5zaXplXSB8fCBicmVha3BvaW50UHJvcHMuc2l6ZTtcblxuICAgICAgbGV0IGNvbnRhaW5lcldpZHRoID0gZml4ZWRXaWR0aDtcblxuICAgICAgaWYgKGJyZWFrcG9pbnRQcm9wcy5hdXRvU2l6ZSkge1xuICAgICAgICBpZiAoZ2V0VHlwZShmaXhlZFdpZHRoKSAhPT0gJ251bGwnKSB7XG4gICAgICAgICAgY29udGFpbmVyV2lkdGggPSBNYXRoLm1pbihmaXhlZFdpZHRoLCBhdXRvU2l6ZVdpZHRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXJXaWR0aCA9IGF1dG9TaXplV2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGdldFR5cGUoY29udGFpbmVyV2lkdGgpICE9PSAnbnVtYmVyJyB8fCBOdW1iZXIuaXNOYU4oY29udGFpbmVyV2lkdGgpKSB7XG4gICAgICAgIGNvbnRhaW5lcldpZHRoID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgLyogQ2VudGVyIHRoZSBjb250YWluZXIuICovXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG5cbiAgICAgICAgLyogQWRkIHNpZGUgcGFkZGluZy4gKi9cbiAgICAgICAgcGFkZGluZzogMCAke2dldENTU0xlbmd0aChnZXRDb25maWcoJ2NvbnRhaW5lci5wYWRkaW5nJykpfTtcbiAgICAgICAgXG4gICAgICAgIC8qIEF2b2lkIG92ZXJmbG93aW5nIGJ5IGtlZXBpbmcgdGhlIGNvbnRhaW5lciBhdCAqL1xuICAgICAgICAvKiBtYXgtd2lkdGggMTAwJSBvZiBpdHMgcGFyZW50LiAqL1xuICAgICAgICAvKiBUaGlzIGFsc28gYWxsb3dzIGNvbnRhaW5lcnMgdG8gYmUgbmVzdGVkLiAqL1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLyogTWluaW51bSB3aWR0aCAqL1xuICAgICAgICBtaW4td2lkdGg6ICR7Z2V0Q1NTTGVuZ3RoKGdldENvbmZpZygnY29udGFpbmVyLm1pblNpemUnKSl9O1xuXG4gICAgICAgIC8qIFNldCBjb250YWluZXIgd2lkdGguICovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6ICR7Z2V0Q1NTTGVuZ3RoKGNvbnRhaW5lcldpZHRoKX07XG5cbiAgICAgICAgLyogYm9yZGVyLWJveCBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gaW5jbHVkZSBwYWRkaW5nICovXG4gICAgICAgIC8qIGFuZCBib3JkZXJzIHdoZW4gY2FsY3VsYXRpbmcgdGhlIHdpZHRoLiAqL1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgIC8qIENsZWFyIGZsb2F0aW5nIGVsZW1lbnRzLiAqL1xuICAgICAgICAmOmJlZm9yZSxcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnJlc3BvbnNpdmVQcm9wc30gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGZsdWlkOiBQcm9wVHlwZXMuYm9vbCxcbiAgeGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sLFxuICBtZWRpdW06IFByb3BUeXBlcy5ib29sLFxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXG4gIHhzbWFsbDogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgYXV0b1NpemU6IFByb3BUeXBlcy5ib29sLFxuICBnZXRSZXNwb25zaXZlUHJvcHM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGZsdWlkOiBmYWxzZSxcbiAgeGxhcmdlOiBmYWxzZSxcbiAgbGFyZ2U6IGZhbHNlLFxuICBtZWRpdW06IGZhbHNlLFxuICBzbWFsbDogZmFsc2UsXG4gIHhzbWFsbDogZmFsc2UsXG4gIHNpemU6ICdmbHVpZCcsXG4gIGF1dG9TaXplOiB0cnVlLFxuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSZXNwb25zaXZlKENvbnRhaW5lcik7XG4iXX0= */"))
    );
  });
  return (0, _core.jsx)("div", (0, _extends2["default"])({}, responsiveProps, props), children);
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