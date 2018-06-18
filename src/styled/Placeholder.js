import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  display: block;
  position: absolute;
  height: ${props => props.height};
  line-height: ${props => props.height};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  top: ${props => props.top};
  font-family: ${props => props.fontFamily};
  transition: all 0.3s ease;
`;

const Placeholder = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Input,
    props.theme && props.theme.Input ? props.theme.Input : {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedPlaceholder = innerMerge(
    {},
    (defaultTheme.Input && defaultTheme.Input.Placeholder) || {},
    (props.theme && props.theme.Input && props.theme.Input.Placeholder) || {}
  );

  const key = props.disabled ? "disabled" : props.isError ? "error" : "main";

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      mergedPlaceholder,
      key,
      props.focused ? "focused" : "normal"
    )
  );

  return <Elem {...theme} {...props} />;
};

export default Placeholder;
