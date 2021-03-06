'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _theme = require('./theme');

var _util = require('./util');

var _grid = require('./grid');

var _DonutBase = require('./DonutBase');

var _DonutBase2 = _interopRequireDefault(_DonutBase);

var _SelectBase = require('./SelectBase');

var _SelectBase2 = _interopRequireDefault(_SelectBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numberOrString = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]);
var bold = function bold(props) {
  return (0, _util.idx)('weights.1', props.theme);
};

var components = [
// Buttons
{
  name: 'Button',
  type: 'button',
  props: {
    f: 1,
    m: 0,
    pl: 3,
    pr: 3,
    pt: 2,
    pb: 2,
    color: 'white'
  },
  style: function style(props) {
    return {
      fontFamily: 'inherit',
      fontWeight: bold(props),
      lineHeight: 16 / 14,
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'center',
      textDecoration: 'none',
      borderRadius: (0, _util.px)(props.theme.radius),
      border: 0,
      appearance: 'none',
      backgroundColor: (0, _util.color)(props)(props.bg),
      '&:hover': {
        boxShadow: 'inset 0 0 0 999px ' + (0, _util.darken)(1 / 8)
      },
      '&:focus': {
        outline: 0,
        boxShadow: '0 0 0 2px ' + (0, _util.color)(props)(props.bg)
      },
      '&:active': {
        backgroundColor: (0, _util.color)(props)(props.bg, 6),
        boxShadow: 'inset 0 0 8px ' + (0, _util.darken)(1 / 4)
      },
      '&:disabled': {
        opacity: 1 / 4
      }
    };
  }
}, {
  name: 'ButtonOutline',
  type: 'Button',
  props: {
    color: 'blue',
    bg: 'transparent'
  },
  style: function style(props) {
    return {
      boxShadow: 'inset 0 0 0 2px',
      '&:hover': {
        color: (0, _util.color)(props)('white'),
        backgroundColor: (0, _util.color)(props)(props.color)
      },
      '&:focus': {
        boxShadow: 'inset 0 0 0 2px, 0 0 0 2px'
      },
      '&:active': {
        color: (0, _util.color)(props)('white'),
        backgroundColor: (0, _util.color)(props)(props.color),
        boxShadow: 'inset 0 0 0 2px ' + (0, _util.color)(props)(props.color) + ', inset 0 0 8px ' + (0, _util.darken)(1 / 4)
      }
    };
  }
}, {
  name: 'ButtonCircle',
  type: 'Button',
  props: {
    pl: 3,
    pr: 3
  },
  style: function style(props) {
    return {
      borderRadius: (0, _util.px)(99999)
    };
  }
}, {
  name: 'ButtonTransparent',
  type: 'Button',
  props: {
    color: 'inherit',
    bg: 'transparent'
  },
  style: function style(props) {
    return {
      '&:hover': {
        color: (0, _util.color)(props)(props.color),
        backgroundColor: 'transparent'
      },
      '&:focus': {
        boxShadow: 'inset 0 0 0 2px, 0 0 0 2px'
      },
      '&:active': {
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 0 2px, inset 0 0 8px ' + (0, _util.darken)(1 / 4)
      }
    };
  }
}, {
  name: 'Link',
  type: 'a',
  props: {
    color: 'blue'
  },
  style: {}
}, {
  name: 'NavLink',
  type: 'a',
  props: {
    f: 1,
    p: 2
  },
  style: function style(props) {
    return {
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'stretch',
      fontWeight: bold(props),
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: 'inherit',
      backgroundColor: props.active ? (0, _util.darken)(1 / 4) : 'transparent',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: (0, _util.darken)(1 / 16)
      },
      '&:disabled': {
        opacity: 1 / 4
      }
    };
  },
  propTypes: {
    active: _propTypes.bool
  }
}, {
  name: 'BlockLink',
  type: 'a',
  props: {},
  style: {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit'
  }
},

// Typography
{
  name: 'Text',
  type: 'p',
  props: {
    m: 0
  },
  style: function style(props) {
    return Object.assign({
      fontWeight: props.bold ? bold(props) : (0, _util.idx)('weights.0', props.theme)
    }, (0, _util.align)(props), (0, _util.caps)(props));
  },
  propTypes: {
    left: _propTypes.bool,
    center: _propTypes.bool,
    right: _propTypes.bool,
    justify: _propTypes.bool,
    bold: _propTypes.bool,
    caps: _propTypes.bool
  }
}, {
  name: 'Heading',
  type: 'Text',
  props: {
    is: 'h2',
    f: 5,
    m: 0,
    bold: true
  },
  style: {
    lineHeight: 1.25
  },
  propTypes: {
    left: _propTypes.bool,
    center: _propTypes.bool,
    right: _propTypes.bool,
    justify: _propTypes.bool,
    bold: _propTypes.bool,
    caps: _propTypes.bool
  }
}, {
  name: 'Subhead',
  type: 'Heading',
  props: {
    is: 'h3',
    f: 4,
    m: 0
  },
  style: {}
}, {
  name: 'Small',
  type: 'Text',
  props: {
    is: 'small',
    f: 0
  },
  style: {}
}, {
  name: 'Lead',
  type: 'Text',
  props: {
    is: 'p',
    f: 3,
    m: 0
  },
  style: {
    lineHeight: 1.25
  }
}, {
  name: 'Pre',
  type: 'pre',
  props: {
    f: 1,
    m: 0
  },
  style: function style(props) {
    return {
      fontFamily: props.theme.monospace,
      overflow: 'auto'
    };
  }
}, {
  name: 'Code',
  type: 'code',
  props: {
    f: 1
  },
  style: function style(props) {
    return {
      fontFamily: props.theme.monospace
    };
  }
}, {
  name: 'Samp',
  type: 'Code',
  props: {
    is: 'samp'
  },
  style: {}
}, {
  name: 'Blockquote',
  type: 'Text',
  props: {
    is: 'blockquote',
    m: 0,
    f: 3
  },
  style: {}
}, {
  name: 'Measure',
  type: 'div',
  props: {},
  style: {
    maxWidth: '32em'
  }
}, {
  name: 'Truncate',
  type: 'Text',
  props: {},
  style: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
},

// Forms
{
  name: 'Label',
  type: 'label',
  props: {
    f: 1,
    mb: 1
  },
  style: {
    display: 'flex',
    alignItems: 'center'
  }
}, {
  name: 'Input',
  type: 'input',
  props: {
    type: 'text',
    f: 'inherit',
    p: 1,
    m: 0,
    w: 1,
    color: 'inherit',
    bg: 'transparent'
  },
  style: function style(props) {
    return {
      fontFamily: 'inherit',
      lineHeight: 'inherit',
      display: 'inline-block',
      verticalAlign: 'middle',
      border: 0,
      boxShadow: 'inset 0 0 0 1px ' + (0, _util.color)(props)('gray2'),
      borderRadius: (0, _util.px)(props.theme.radius),
      appearance: 'none',
      '&:focus': {
        outline: 'none',
        boxShadow: 'inset 0 0 0 1px ' + (0, _util.color)(props)('blue')
      },
      '&:disabled': {
        opacity: 1 / 4
      }
    };
  }
}, {
  name: 'Select',
  type: _SelectBase2.default,
  props: {
    m: 0,
    w: 1,
    color: 'inherit',
    bg: 'transparent'
  },
  style: function style(props) {
    return {
      display: 'inline-block',
      verticalAlign: 'middle',
      select: {
        padding: (0, _util.px)((0, _util.idx)('space.1', props.theme)),
        boxShadow: 'inset 0 0 0 1px ' + (0, _util.color)(props)('gray2'),
        borderRadius: (0, _util.px)(props.theme.radius),

        '&:focus': {
          boxShadow: 'inset 0 0 0 1px ' + (0, _util.color)(props)('blue')
        },
        '&:disabled': {
          opacity: 1 / 4
        }
      }
    };
  }
}, {
  name: 'Textarea',
  type: 'textarea',
  props: {
    p: 1,
    m: 0,
    w: 1,
    color: 'inherit',
    bg: 'transparent'
  },
  style: function style(props) {
    return {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      border: 0,
      boxShadow: 'inset 0 0 0 1px ' + (0, _util.color)(props)('gray2'),
      borderRadius: (0, _util.px)(props.theme.radius),
      appearance: 'none',
      '&:focus': {
        outline: 'none',
        boxShadow: 'inset 0 0 0 1px ' + (0, _util.color)(props)('blue')
      },
      '&:disabled': {
        opacity: 1 / 4
      }
    };
  }
}, {
  name: 'Checkbox',
  type: 'input',
  props: {
    type: 'checkbox',
    mr: 1
  },
  style: function style(props) {
    return {};
  }
}, {
  name: 'Radio',
  type: 'input',
  props: {
    type: 'radio',
    mr: 1
  },
  style: function style(props) {
    return {};
  }
}, {
  name: 'Slider',
  type: 'input',
  props: {
    w: 1,
    mt: 2,
    mb: 2,
    ml: 0,
    mr: 0,
    type: 'range'
  },
  style: function style(props) {
    return {
      display: 'block',
      height: (0, _util.px)((0, _util.idx)('space.1', props.theme)),
      cursor: 'pointer',
      color: 'inherit',
      borderRadius: (0, _util.px)(99999),
      backgroundColor: (0, _util.color)(props)('gray2'),
      appearance: 'none',
      '&::-webkit-slider-thumb': {
        width: (0, _util.px)(16),
        height: (0, _util.px)(16),
        backgroundColor: 'currentcolor',
        border: 0,
        borderRadius: (0, _util.px)(99999),
        appearance: 'none'
      },
      '&:focus': {
        '&::-webkit-slider-thumb': {}
      }
    };
  }
}, {
  name: 'Image',
  type: 'img',
  props: {},
  style: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto'
  }
}, {
  name: 'Avatar',
  type: 'img',
  props: {},
  style: function style(props) {
    return {
      display: 'inline-block',
      width: (0, _util.px)(props.size || 48),
      height: (0, _util.px)(props.size || 48),
      borderRadius: (0, _util.px)(99999)
    };
  },
  propTypes: {
    size: _propTypes.number
  }
}, {
  name: 'BackgroundImage',
  type: 'div',
  props: {
    w: 1
    // ratio: 3/4 // How does styled-components handle this??
    // Fix this once non-whitelisted styled-components is out
  },
  style: function style(props) {
    return {
      backgroundImage: props.src ? 'url(' + props.src + ')' : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 0,
      paddingBottom: (props.ratio || 3 / 4) * 100 + '%'
    };
  },
  propTypes: {
    src: _propTypes.string,
    ratio: _propTypes.number
  }
},

// Layout
{
  name: 'Container',
  type: 'div',
  props: {
    px: 3,
    ml: 'auto',
    mr: 'auto'
  },
  style: function style(props) {
    return {
      maxWidth: (0, _util.px)(props.maxWidth || (0, _util.idx)('maxWidth', props.theme) || 1024)
    };
  },
  propTypes: {
    maxWidth: numberOrString
  }
}, {
  name: 'Divider',
  type: 'hr',
  props: {
    mt: 2,
    mb: 2
  },
  style: {
    border: 0,
    borderBottomWidth: (0, _util.px)(1),
    borderBottomStyle: 'solid'
  }
}, {
  name: 'Border',
  type: 'div',
  props: {},
  style: function style(props) {
    var w = (0, _util.px)(props.borderWidth || 1);
    var borderWidth = !props.top && !props.right && !props.bottom && !props.left ? { borderWidth: w } : null;
    var directions = borderWidth ? null : {
      borderTopWidth: props.top ? w : 0,
      borderRightWidth: props.right ? w : 0,
      borderBottomWidth: props.bottom ? w : 0,
      borderLeftWidth: props.left ? w : 0
    };

    return Object.assign({
      borderStyle: 'solid',
      borderColor: (0, _util.color)(props)(props.color || 'gray2'),
      color: 'inherit'
    }, borderWidth, directions);
  },
  propTypes: {
    top: _propTypes.bool,
    right: _propTypes.bool,
    bottom: _propTypes.bool,
    left: _propTypes.bool,
    width: _propTypes.number,
    color: _propTypes.string
  }
}, {
  name: 'Media',
  type: 'div',
  props: {},
  style: function style(props) {
    return {
      display: 'flex',
      alignItems: 'center'
    };
  }
}, {
  name: 'Card',
  type: 'div',
  props: {
    bg: 'white'
  },
  style: function style(props) {
    return {
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px ' + (0, _util.color)(props)('gray2') + ', 0 0 4px ' + (0, _util.color)(props)('gray2'),
      borderRadius: (0, _util.px)(props.theme.radius)
    };
  }
}, {
  name: 'Banner',
  type: 'div',
  props: {
    p: [3, 4]
  },
  style: function style(props) {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: props.backgroundImage ? 'url(' + props.backgroundImage + ')' : 'none'
    };
  },
  propTypes: {
    backgroundImage: _propTypes.string
  }
}, {
  name: 'Panel',
  type: 'div',
  props: {},
  style: function style(props) {
    return {
      overflow: 'hidden',
      borderRadius: (0, _util.px)(props.theme.radius),
      borderWidth: (0, _util.px)(1),
      borderStyle: 'solid'
    };
  }
}, {
  name: 'PanelHeader',
  type: 'header',
  props: {
    f: 2,
    p: 2
  },
  style: function style(props) {
    return {
      fontWeight: bold(props),
      borderBottomWidth: (0, _util.px)(1),
      borderBottomStyle: 'solid'
    };
  }
}, {
  name: 'PanelFooter',
  type: 'footer',
  props: {
    f: 1,
    p: 2
  },
  style: function style(props) {
    return {
      fontWeight: bold(props),
      borderTopWidth: (0, _util.px)(1),
      borderTopStyle: 'solid'
    };
  }
},

// UI
{
  name: 'Progress',
  type: 'progress',
  props: {
    w: 1,
    m: 0,
    bg: 'gray2'
  },
  style: function style(props) {
    return {
      display: 'block',
      height: (0, _util.px)((0, _util.idx)('space.1', props.theme)),
      borderRadius: (0, _util.px)(props.theme.radius),
      overflow: 'hidden',
      appearance: 'none',
      '&::-webkit-progress-bar': {
        backgroundColor: (0, _util.color)(props)(props.bg)
      },
      '&::-webkit-progress-value': {
        backgroundColor: (0, _util.color)(props)(props.color)
      },
      '&::-moz-progress-bar': {
        backgroundColor: (0, _util.color)(props)(props.color)
      }
    };
  }
}, {
  name: 'Message',
  type: 'div',
  props: {
    pl: 3,
    pr: 3,
    pt: 2,
    pb: 2,
    color: 'white',
    bg: 'blue'
  },
  style: function style(props) {
    return {
      display: 'flex',
      alignItems: 'center',
      minHeight: (0, _util.px)(48),
      fontWeight: bold(props)
    };
  }
}, {
  name: 'Group',
  type: 'div',
  props: {},
  style: function style(props) {
    var R = (0, _util.px)(props.theme.radius || 4);
    return {
      '& > *': {
        borderRadius: 0
      },
      '& > *:first-child': {
        borderRadius: R + ' 0 0 ' + R

      },
      '& > *:last-child': {
        borderRadius: '0 ' + R + ' ' + R + ' 0'
      }
    };
  }
}, {
  name: 'Toolbar',
  type: 'div',
  props: {
    pl: 2,
    pr: 2,
    color: 'white',
    bg: 'gray9'
  },
  style: {
    display: 'flex',
    minHeight: (0, _util.px)(48),
    alignItems: 'center'
  }
}, {
  name: 'Badge',
  type: 'div',
  props: {
    f: 0,
    p: 1,
    ml: 1,
    mr: 1,
    color: 'white',
    bg: 'blue'
  },
  style: function style(props) {
    return {
      fontWeight: bold(props),
      display: 'inline-block',
      verticalAlign: 'middle',
      borderRadius: (0, _util.px)(props.theme.radius)
    };
  }
}, {
  name: 'Circle',
  type: 'Badge',
  props: {
    color: 'white',
    bg: 'blue'
  },
  style: function style(props) {
    return {
      textAlign: 'center',
      width: (0, _util.px)(props.size || 24),
      height: (0, _util.px)(props.size || 24),
      borderRadius: (0, _util.px)(99999)
    };
  }
}, {
  name: 'Overlay',
  type: 'div',
  props: {
    p: 3,
    bg: 'white'
  },
  style: function style(props) {
    return {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '100vw',
      maxHeight: '100vh',
      overflow: 'auto',
      borderRadius: (0, _util.px)(props.theme.radius),
      boxShadow: '0 0 0 60vmax ' + (0, _util.darken)(1 / 2) + ', 0 0 32px ' + (0, _util.darken)(1 / 4)
    };
  }
}, {
  name: 'Tabs',
  type: 'div',
  props: {},
  style: function style(props) {
    return {
      display: 'flex',
      borderBottomWidth: (0, _util.px)(1),
      borderBottomStyle: 'solid',
      borderColor: (0, _util.color)(props)('gray2')
    };
  }
}, {
  name: 'TabItem',
  type: 'a',
  props: {
    f: 1,
    mr: 3,
    pt: 2,
    pb: 2
  },
  style: function style(props) {
    return {
      textDecoration: 'none',
      fontWeight: bold(props),
      color: props.active ? (0, _util.color)(props)('blue') : 'inherit',
      borderBottomWidth: props.active ? 2 : 0,
      borderBottomStyle: 'solid',
      '&:hover': {
        color: (0, _util.color)(props)('blue')
      }
    };
  },
  propTypes: {
    active: _propTypes.bool
  }
}, {
  name: 'DotButton',
  type: 'button',
  props: {
    m: 0
  },
  style: function style(props) {
    return {
      padding: 0,
      width: (0, _util.px)((0, _util.idx)('space.3', props.theme)),
      height: (0, _util.px)((0, _util.idx)('space.3', props.theme)),
      borderWidth: (0, _util.px)(4),
      borderStyle: 'solid',
      borderColor: 'transparent',
      backgroundClip: 'padding-box',
      borderRadius: (0, _util.px)(99999),
      backgroundColor: props.active ? 'currentcolor' : (0, _util.darken)(1 / 4),
      appearance: 'none',
      '&:hover': {
        backgroundColor: (0, _util.color)(props)('blue')
      },
      '&:focus': {
        backgroundColor: (0, _util.color)(props)('blue')
      },
      '&:disabled': {
        opacity: 1 / 4
      }
    };
  },
  propTypes: {
    active: _propTypes.bool
  }
}, {
  name: 'Relative',
  type: 'div',
  props: {},
  style: function style(props) {
    return {
      position: 'relative',
      zIndex: props.z
    };
  }
}, {
  name: 'Absolute',
  type: 'div',
  props: {},
  style: function style(props) {
    return {
      position: 'absolute',
      top: props.top ? 0 : null,
      right: props.right ? 0 : null,
      bottom: props.bottom ? 0 : null,
      left: props.left ? 0 : null,
      zIndex: props.z
    };
  },
  propTypes: {
    top: _propTypes.bool,
    right: _propTypes.bool,
    bottom: _propTypes.bool,
    left: _propTypes.bool,
    z: _propTypes.number
  }
}, {
  name: 'Fixed',
  type: 'div',
  props: {},
  style: function style(props) {
    return {
      position: 'fixed',
      top: props.top ? 0 : null,
      right: props.right ? 0 : null,
      bottom: props.bottom ? 0 : null,
      left: props.left ? 0 : null,
      zIndex: props.z
    };
  },
  propTypes: {
    top: _propTypes.bool,
    right: _propTypes.bool,
    bottom: _propTypes.bool,
    left: _propTypes.bool,
    z: _propTypes.number
  }
}, {
  name: 'Sticky',
  type: 'div',
  props: {},
  style: function style(props) {
    return '\n      position: -webkit-sticky;\n      position: sticky;\n      top: ' + (props.top ? 0 : null) + ';\n      right: ' + (props.right ? 0 : null) + ';\n      bottom: ' + (props.bottom ? 0 : null) + ';\n      left: ' + (props.left ? 0 : null) + ';\n      z-index: ' + props.z + ';\n    ';
  },
  propTypes: {
    top: _propTypes.bool,
    right: _propTypes.bool,
    bottom: _propTypes.bool,
    left: _propTypes.bool,
    z: _propTypes.number
  }
}, {
  name: 'Drawer',
  type: 'Fixed',
  props: {
    bg: 'white'
  },
  style: function style(props) {
    var position = props.position || 'left';
    var size = props.size || 320;
    var h = /^(left|right)$/.test(position) ? 1 : 0;
    var width = h ? { width: (0, _util.px)(size) } : null;
    var height = h ? null : { height: (0, _util.px)(size) };
    var transforms = {
      left: 'translateX(-100%)',
      right: 'translateX(100%)',
      top: 'translateY(-100%)',
      bottom: 'translateY(100%)'
    };
    var transform = !props.open ? { transform: transforms[position] } : null;

    var top = /^(top|left|right)$/.test(position) ? { top: 0 } : null;
    var bottom = /^(bottom|left|right)$/.test(position) ? { bottom: 0 } : null;
    var left = /^(left|top|bottom)$/.test(position) ? { left: 0 } : null;
    var right = /^(right|top|bottom)$/.test(position) ? { right: 0 } : null;

    return Object.assign({
      overflowX: 'hidden',
      overflowY: 'auto',
      transitionProperty: 'transform',
      transitionDuration: '.2s',
      transitionTimingFunction: 'ease-out'
    }, top, bottom, left, right, transform, width, height);
  },
  propTypes: {
    size: _propTypes.number,
    position: (0, _propTypes.oneOf)(['top', 'right', 'bottom', 'left'])
  }
}, {
  name: 'Carousel',
  type: 'div',
  props: {},
  style: function style(props) {
    return {
      width: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      '& > div:first-child': {
        marginLeft: props.index * -100 + '%',
        transitionProperty: 'margin',
        transitionDuration: '.2s',
        transitionTimingFunction: 'ease-out'
      }
    };
  },
  propTypes: {
    index: _propTypes.number
  }
}, {
  name: 'ScrollCarousel',
  type: 'div',
  props: {},
  style: function style(props) {
    return {
      width: '100%',
      overflow: 'auto',
      whiteSpace: 'nowrap',
      scrollSnapPointsX: 'repeat(100%)',
      scrollSnapType: 'mandatory',
      scrollSnapDestination: '0% 100%'
    };
  }
}, {
  name: 'CarouselSlide',
  type: 'div',
  props: {
    w: 1,
    p: 3
  },
  style: function style(props) {
    return {
      display: 'inline-block',
      verticalAlign: 'middle'
    };
  }
}, {
  name: 'Tooltip',
  type: 'div',
  props: {
    color: 'white',
    bg: 'black'
  },
  style: function style(props) {
    return {
      display: 'inline-block',
      position: 'relative',
      color: 'inherit',
      backgroundColor: 'transparent',
      '&::before': {
        display: 'none',
        content: '"' + props.text + '"',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translate(-50%, -4px)',
        whiteSpace: 'nowrap',
        fontSize: (0, _util.px)((0, _util.idx)('fontSizes.0', props.theme)),
        paddingTop: (0, _util.px)((0, _util.idx)('space.1', props.theme)),
        paddingBottom: (0, _util.px)((0, _util.idx)('space.1', props.theme)),
        paddingLeft: (0, _util.px)((0, _util.idx)('space.2', props.theme)),
        paddingRight: (0, _util.px)((0, _util.idx)('space.2', props.theme)),
        color: (0, _util.color)(props)(props.color),
        backgroundColor: (0, _util.color)(props)(props.bg),
        borderRadius: (0, _util.px)(props.theme.radius)
      },
      '&::after': {
        display: 'none',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translate(-50%, 8px)',
        content: '" "',
        borderWidth: (0, _util.px)(6),
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderTopColor: (0, _util.color)(props)(props.bg)
      },
      '&:hover': {
        '&::before, &::after': {
          display: 'block'
        }
      }
    };
  }
}, {
  name: 'Switch',
  type: 'div',
  props: {
    role: 'checkbox',
    color: 'blue'
  },
  style: function style(props) {
    return {
      display: 'inline-flex',
      width: (0, _util.px)(40),
      height: (0, _util.px)(24),
      borderRadius: (0, _util.px)(9999),
      backgroundColor: props.checked ? (0, _util.color)(props)(props.color) : 'transparent',
      boxShadow: 'inset 0 0 0 2px',
      transitionProperty: 'background-color',
      transitionDuration: '.2s',
      transitionTimingFunction: 'ease-out',
      userSelect: 'none',
      '&::after': {
        content: '" "',
        width: (0, _util.px)(16),
        height: (0, _util.px)(16),
        margin: (0, _util.px)(4),
        borderRadius: (0, _util.px)(9999),
        transitionProperty: 'transform, color',
        transitionDuration: '.1s',
        transitionTimingFunction: 'ease-out',
        transform: props.checked ? 'translateX(16px)' : 'translateX(0)',
        backgroundColor: props.checked ? (0, _util.color)(props)('white') : (0, _util.color)(props)(props.color)
      }
    };
  }
}, {
  name: 'Close',
  type: 'ButtonTransparent',
  props: {
    p: 0,
    f: 3,
    children: '×'
  },
  style: function style(props) {
    return {
      lineHeight: 1,
      width: (0, _util.px)(24),
      height: (0, _util.px)(24)
    };
  }
}, {
  name: 'Star',
  type: 'div',
  props: {
    f: 3,
    color: 'yellow',
    children: '★'
  },
  style: function style(props) {
    return {
      position: 'relative',
      width: '1em',
      height: '1em',
      color: props.checked ? (0, _util.color)(props)(props.color) : (0, _util.darken)(1 / 8),
      '&::after': {
        display: props.half ? 'block' : 'none',
        content: '"★"',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '1em',
        height: '1em',
        color: (0, _util.color)(props)(props.color),
        clip: 'rect(0, .45em, 1em, 0)'
      }
    };
  }
}, {
  name: 'Arrow',
  type: 'div',
  props: {},
  style: function style(props) {
    var borderTop = props.direction === 'down' ? { borderTop: '.4375em solid' } : null;
    var borderBottom = props.direction === 'up' ? { borderBottom: '.4375em solid' } : null;
    return Object.assign({
      display: 'inline-block',
      width: 0,
      height: 0,
      verticalAlign: 'middle',
      borderRight: '.3125em solid transparent',
      borderLeft: '.3125em solid transparent'
    }, borderTop, borderBottom);
  },
  propTypes: {
    direction: (0, _propTypes.oneOf)(['up', 'down'])
  },
  defaultProps: {
    direction: 'down'
  }
}, {
  name: 'Embed',
  type: 'div',
  props: {},
  style: function style(props) {
    return {
      position: 'relative',
      height: 0,
      padding: 0,
      paddingBottom: (props.ratio || 9 / 16) * 100 + '%',
      overflow: 'hidden',
      '& > iframe': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        border: 0
      }
    };
  }
}, {
  name: 'Donut',
  type: _DonutBase2.default,
  props: {
    color: 'blue',
    strokeWidth: 2,
    value: 1
  },
  style: {}
}, {
  name: 'Row',
  type: _grid.Flex,
  props: {
    mx: -3
  },
  style: {}
}, {
  name: 'Column',
  type: _grid.Box,
  props: {
    px: 3,
    mb: 4,
    flex: '1 1 auto'
  },
  style: {}
}];

exports.default = components;