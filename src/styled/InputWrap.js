import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.label`
  js-display: ${props => (props.inline ? "inline-flex" : "flex")};
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  width: ${props => (props.inline ? props.width : "100%")};
  min-width: ${props => (props.inline ? props.width : "100%")};
  height: ${props => props.height};
  box-sizing: border-box;
  background: ${props => props.background};
  border: ${props => props.border};
  box-sizing: border-box;
  border-radius: ${props => props.borderRadius};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  position: relative;
  cursor: ${props => props.cursor};
`;

const InputWrap = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Input,
    props.theme && props.theme.Input ? props.theme.Input : {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedInputWrap = innerMerge(
    {},
    (defaultTheme.Input && defaultTheme.Input.InputElem) || {},
    (props.theme && props.theme.Input && props.theme.Input.InputElem) || {}
  );

  const key = props.disabled ? "disabled" : props.isError ? "error" : "main";

  Object.assign(theme, getThemeAsPlainTextByKeys(mergedInputWrap, key));

  return <Elem {...theme} {...props} />;
};

export default InputWrap;
