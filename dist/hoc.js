'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _propTypes = require('prop-types');

var _tagHoc = require('tag-hoc');

var _tagHoc2 = _interopRequireDefault(_tagHoc);

var _blacklist = require('./blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prop = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string, (0, _propTypes.arrayOf)((0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]))]);

var propTypes = {
  width: prop,
  w: prop,
  fontSize: prop,
  f: prop,
  color: prop,
  bg: prop,
  m: prop,
  mt: prop,
  mr: prop,
  mb: prop,
  ml: prop,
  mx: prop,
  my: prop,
  p: prop,
  pt: prop,
  pr: prop,
  pb: prop,
  pl: prop,
  px: prop,
  py: prop
};

var withStyle = function withStyle(style, props) {
  return function (Component) {
    var Base = (0, _styledComponents2.default)(Component)([], _styledSystem.space, _styledSystem.width, _styledSystem.fontSize, _styledSystem.color);

    Base.propTypes = propTypes;

    // Clean this up after styled-components removes whitelisting
    var Comp = (0, _styledComponents2.default)(Base).attrs(props)([], style);

    return Comp;
  };
};

var Tag = (0, _tagHoc2.default)(_blacklist2.default);

var hoc = function hoc(style, props) {
  return (0, _recompose.compose)(withStyle(style, props), Tag);
};

exports.default = hoc;