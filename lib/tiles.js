"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TilesContext = void 0;

var _core = require("@emotion/core");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var TilesContext = _react["default"].createContext(false);

exports.TilesContext = TilesContext;

var Tiles = function Tiles(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return (0, _core.jsx)(TilesContext.Provider, {
    value: props
  }, children);
};

Tiles.propTypes = {
  children: _propTypes["default"].node
};
Tiles.defaultProps = {
  children: null
};
var _default = Tiles;
exports["default"] = _default;