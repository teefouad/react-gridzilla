"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPropertyInObject = exports.getPropertyFromObject = exports.getType = exports.getCSSLength = exports.destruct = exports.cleanObject = exports.flexMapper = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var flexMapper = {
  start: 'flex-start',
  end: 'flex-end',
  top: 'flex-start',
  right: 'flex-end',
  bottom: 'flex-end',
  left: 'flex-start',
  middle: 'center',
  justify: 'space-between',
  spread: 'space-around',
  evenly: 'space-evenly'
};
/**
 * Removes props from an object.
 * @param {Object} obj The object
 * @param {Array} props Array of props to be removed from the object
 */

exports.flexMapper = flexMapper;

var cleanObject = function cleanObject(obj, props) {
  var newObj = _objectSpread({}, obj);

  props.forEach(function (prop) {
    delete newObj[prop];
  });
  return newObj;
};
/**
 * Destructs an object into smaller objects.
 * Example:
 * var [ setA, setB, rest ] = destruct(obj)(['prop1', 'prop2'], ['prop3', 'prop4']);
 * @param {*} obj Object to destruct
 */


exports.cleanObject = cleanObject;

var destruct = function destruct(obj) {
  var keys = Object.keys(obj);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var result = [].concat((0, _toConsumableArray2["default"])(args.map(function (k) {
    return k.reduce(function (p, n) {
      if (keys.includes(n)) {
        keys.splice(keys.indexOf(n), 1);
        return _objectSpread({}, p, (0, _defineProperty2["default"])({}, n, obj[n]));
      }

      return p;
    }, {});
  })), [keys.reduce(function (p, n) {
    return _objectSpread({}, p, (0, _defineProperty2["default"])({}, n, obj[n]));
  }, {})]);
  return result;
};
/**
 * Converts a value to a CSS length
 * @param {String | Number} value Value to be converted
 */


exports.destruct = destruct;

var getCSSLength = function getCSSLength(value) {
  if (typeof value === 'number') {
    return "".concat(value, "px");
  }

  return value;
};
/**
 * Returns type of a given object.
 * @param {*} obj Target object
 */


exports.getCSSLength = getCSSLength;

var getType = function getType(obj) {
  return Object.prototype.toString.call(obj).toLowerCase().replace(/\[object|\]|\s/g, '');
};
/**
 * Finds a property value inside an object given a dot notation path.
 * @param {String} path Path to property inside the object
 * @param {*}      obj  Target object
 */


exports.getType = getType;

var getPropertyFromObject = function getPropertyFromObject(path, obj) {
  var pathArr = path.split('.');
  var currentObj = obj;

  while (pathArr.length && currentObj && currentObj[pathArr[0]]) {
    currentObj = currentObj[pathArr.shift()];
  }

  return pathArr.length ? undefined : currentObj;
};
/**
 * Sets a property value inside an object given a dot notation path.
 * @param {String} path  Path to property inside the object
 * @param {*}      value Property value
 * @param {*}      obj   Target object
 */


exports.getPropertyFromObject = getPropertyFromObject;

var setPropertyInObject = function setPropertyInObject(path, value, obj) {
  var pathArr = path.split('.');
  var currentObj = obj;

  while (pathArr.length > 1 && currentObj[pathArr[0]]) {
    var p = pathArr.shift();
    if (currentObj[p] === undefined) currentObj[p] = {};
    currentObj = currentObj[p];
  }

  currentObj[pathArr[0]] = value;
  return obj;
};

exports.setPropertyInObject = setPropertyInObject;