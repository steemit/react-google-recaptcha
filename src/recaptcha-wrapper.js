import React from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "./recaptcha";
import makeAsyncScriptLoader from "react-async-script";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRecaptcha() {
    const {
      callbackName,
      globalName,
      hl,
    } = this.props;
    const lang = hl ? `&hl=${hl}` : "";
    const URL = `https://www.google.com/recaptcha/api.js?onload=${callbackName}&render=explicit${lang}`;
    return makeAsyncScriptLoader(ReCAPTCHA, URL, {
      callbackName,
      globalName,
      removeOnUnmount: true,
      exposeFuncs: ["getValue", "getWidgetId", "reset", "execute"],
    });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.hl !== nextProps.hl) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const RecatpchaComponent = this.renderRecaptcha();
    const {
      // eslint-disable-next-line no-unused-vars
      callbackName,
      // eslint-disable-next-line no-unused-vars
      globalName,
      // eslint-disable-next-line no-unused-vars
      hl,
      ...childProps
    } = this.props;
    return React.createElement(RecatpchaComponent, childProps);
  }
}

Wrapper.propTypes = {
  callbackName: PropTypes.string,
  hl: PropTypes.string,
  globalName: PropTypes.string,
};

Wrapper.defaultProps = {
  callbackName: "onloadcallback",
  globalName: "grecaptcha",
  hl: "",
};
