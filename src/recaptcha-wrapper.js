import React from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "./recaptcha";
import makeAsyncScriptLoader from "react-async-script";

export default class Wrapper extends React.Component {
  constructor() {
    super();
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

  render() {
    return <div>{this.renderRecaptcha()}</div>;
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
