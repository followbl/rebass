'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// replace with get?
var idx = exports.idx = function idx(props, obj) {
  var keys = typeof props === 'string' ? props.split('.') : props;
  return keys.reduce(function (a, b) {
    return a && a[b] ? a[b] : null;
  }, obj);
};

var px = exports.px = function px(n) {
  return typeof n === 'number' ? n + 'px' : n;
};

var color = exports.color = function color(props) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'blue';
    return idx(['colors', n], props.theme) || n;
  };
};

var darken = exports.darken = function darken(n) {
  return 'rgba(0, 0, 0, ' + n + ')';
};

var caps = exports.caps = function caps(props) {
  return props.caps ? {
    textTransform: 'uppercase',
    letterSpacing: '.2em'
  } : {};
};

var alignValue = exports.alignValue = function alignValue(props) {
  if (props.left) return 'left';
  if (props.center) return 'center';
  if (props.right) return 'right';
  if (props.justify) return 'justify';
  return null;
};

var align = exports.align = function align(props) {
  var value = alignValue(props);
  if (!value) return null;
  return {
    textAlign: value
  };
};

exports.default = {
  idx: idx,
  px: px,
  color: color,
  darken: darken,
  caps: caps,
  align: align
};