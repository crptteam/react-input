import React from "react";
import styled from "styled-components";

import { getThemeAsPlainObjectByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  display: block;
  position: absolute;
  line-height: ${props => props.height};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-family: ${props => props.fontFamily};
  top: ${props => (props.focused ? '30%' : '50%')};
  transform: translateY(-50%);
  transition: all 0.3s ease;
`;

const Placeholder = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Input,
    props.theme && props.theme.Input ? props.theme.Input : {}
  );

  const theme = getThemeAsPlainObjectByKeys(merged);

  const mergedPlaceholder = innerMerge(
    {},
    defaultTheme.Input.Placeholder,
    (props.theme && props.theme.Input && props.theme.Input.Placeholder) || {}
  );

  const key = props.disabled ? "disabled" : props.isError ? "error" : "main";

  Object.assign(
    theme,
    getThemeAsPlainObjectByKeys(
      mergedPlaceholder,
      key,
      props.focused ? "focused" : "normal"
    )
  );

  return <Elem {...theme} {...props} />;
};

export default Placeholder;
