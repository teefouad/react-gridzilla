"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getConfig = exports.setConfig = void 0;

var _helpers = require("./helpers");

var config = {
  breakpoints: {
    xs: 0,
    sm: 544,
    md: 768,
    lg: 992,
    xl: 1200
  },
  container: {
    padding: {
      xs: 20,
      sm: 20,
      md: 20,
      lg: 20,
      xl: 20
    },
    minWidth: 240,
    maxWidth: {
      fluid: null,
      xsmall: null,
      small: 540,
      medium: 750,
      large: 960,
      xlarge: 1140
    }
  },
  grid: {
    gaps: {
      none: 0,
      smallest: 4,
      smaller: 10,
      small: 20,
      medium: 30,
      large: 50,
      larger: 80,
      largest: 120
    }
  }
};

var setConfig = function setConfig(field, value) {
  (0, _helpers.setPropertyInObject)(field, value, config);
};

exports.setConfig = setConfig;

var getConfig = function getConfig(field) {
  return (0, _helpers.getPropertyFromObject)(field, config);
};

exports.getConfig = getConfig;
var _default = config;
exports["default"] = _default;