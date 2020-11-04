"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recaptcha = require("./recaptcha");

var _recaptcha2 = _interopRequireDefault(_recaptcha);

var _reactAsyncScript = require("react-async-script");

var _reactAsyncScript2 = _interopRequireDefault(_reactAsyncScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function (_React$Component) {
  (0, _inherits3.default)(Wrapper, _React$Component);

  function Wrapper(props) {
    (0, _classCallCheck3.default)(this, Wrapper);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {};
    return _this;
  }

  Wrapper.prototype.renderRecaptcha = function renderRecaptcha() {
    var _props = this.props,
        callbackName = _props.callbackName,
        globalName = _props.globalName,
        hl = _props.hl;

    var lang = hl ? "&hl=" + hl : "";
    var URL = "https://www.google.com/recaptcha/api.js?onload=" + callbackName + "&render=explicit" + lang;
    return (0, _reactAsyncScript2.default)(_recaptcha2.default, URL, {
      callbackName: callbackName,
      globalName: globalName,
      removeOnUnmount: true,
      exposeFuncs: ["getValue", "getWidgetId", "reset", "execute"]
    });
  };

  Wrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (this.props.hl !== nextProps.hl) {
      return true;
    } else {
      return false;
    }
  };

  Wrapper.prototype.render = function render() {
    var RecatpchaComponent = this.renderRecaptcha();
    var _props2 = this.props,
        callbackName = _props2.callbackName,
        globalName = _props2.globalName,
        hl = _props2.hl,
        childProps = (0, _objectWithoutProperties3.default)(_props2, ["callbackName", "globalName", "hl"]);

    return _react2.default.createElement(RecatpchaComponent, childProps);
  };

  return Wrapper;
}(_react2.default.Component);

exports.default = Wrapper;


Wrapper.propTypes = {
  callbackName: _propTypes2.default.string,
  hl: _propTypes2.default.string,
  globalName: _propTypes2.default.string
};

Wrapper.defaultProps = {
  callbackName: "onloadcallback",
  globalName: "grecaptcha",
  hl: ""
};